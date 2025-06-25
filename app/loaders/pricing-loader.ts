import { Stripe } from "stripe";
import { plans } from "./plans";
import type { Route } from "../+types/root";
import { getCurrencyFromCountry } from "../utils/currency";

export async function pricingLoader({ context, request }: Route.LoaderArgs) {
    const stripe = new Stripe(context.cloudflare.env.STRIPE_API_KEY as string);

    // Get country from Cloudflare context
    const cfCountry = context.cloudflare.cf?.country;
    const cfIpCountry = request.headers.get('cf-ipcountry');

    // Use the best available country information
    const finalCountry = cfCountry || cfIpCountry || 'US';

    // Pass the detected country to get currency
    const userCurrency = getCurrencyFromCountry(finalCountry);

    const products = await stripe.products.list({
        active: true,
        expand: ['data.default_price']
    }).then((products) => products.data.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        defaultPriceId:
            typeof product.default_price === 'string'
                ? product.default_price
                : product.default_price?.id
    })));

    const priceList = await stripe.prices.list({
        expand: ['data.product', 'data.currency_options'],
        active: true,
        type: 'one_time',
        currency: userCurrency,
    }).then((prices) => prices.data.map((price) => {
        return {
            id: price.id,
            productId:
                typeof price.product === 'string' ? price.product : price.product.id,
            unitAmount: price.unit_amount,
            currency: price.currency,
            currencyOptions: price.currency_options,
        }
    }));

    const prices = priceList.map((price: any) => ({
        ...price,
        unitAmount: price.currencyOptions?.[userCurrency]?.unit_amount || price.unitAmount,
        currency: userCurrency,
        product: products.find((product: any) => product.id === price.productId),
    }));

    const basePlan = products.find((product) => product.name === plans[0].name);
    const initialPlan = products.find((product) => product.name === plans[1].name);
    const plusPlan = products.find((product) => product.name === plans[2].name);
    const proPlan = products.find((product) => product.name === plans[3].name);

    const basePrice = prices.find((price) => price.productId === basePlan?.id);
    const initialPrice = prices.find((price) => price.productId === initialPlan?.id);
    const plusPrice = prices.find((price) => price.productId === plusPlan?.id);
    const proPrice = prices.find((price) => price.productId === proPlan?.id);

    const availablePlans = [
        { plan: plans[0], price: basePrice, product: basePlan },
        { plan: plans[1], price: initialPrice, product: initialPlan },
        { plan: plans[2], price: plusPrice, product: plusPlan, popular: true },
        { plan: plans[3], price: proPrice, product: proPlan },
    ].filter(item => item.price && item.product);

    return {
        plans: availablePlans,
        currency: userCurrency,
    }
}