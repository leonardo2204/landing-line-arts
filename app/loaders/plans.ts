export interface Plan {
    id: string;
    name: string;
    amount: number;
    credits: number;
    priceIds: string[]; // Array of Stripe price IDs
}

export const plans: Plan[] = [
    {
        id: 'initial',
        name: 'Inicial',
        credits: 2,
        amount: 500,
        priceIds: ['price_1RVw9sCM9vOz3izsDaNqZ8Lt',
            'price_1RX3cSGuwyzgJLTInmOae3JM',
            'price_1RaFW4GuwyzgJLTIppS0jDaE'
        ], // Add your Stripe price IDs here
    },
    {
        id: 'drawer',
        name: 'Artista principiante',
        credits: 6,
        amount: 1000,
        priceIds: ['price_1RYiEqGuwyzgJLTIyiRmfry0', 'price_1RYpAKCM9vOz3izsCKDlwaov', 'price_1RaFZbGuwyzgJLTIX49IwgS1', 'price_1RaFh3GfMzEu6x2Ey3BjmNZk'],
    },
    {
        id: 'artist',
        name: 'Desenhista',
        credits: 20,
        amount: 2500,
        priceIds: ['price_1RVwLBCM9vOz3izsGtGBUCYG',
            'price_1RX3c4GuwyzgJLTIR4hkOrAp',
            'price_1RaFanGuwyzgJLTIyoMtEgmt'
        ], // Add your Stripe price IDs here
    },
    {
        id: 'professional',
        name: 'Profissional',
        amount: 4500,
        credits: 60,
        priceIds: ['price_1RVwMFCM9vOz3izsW4HX9Xgh',
            'price_1RX3bhGuwyzgJLTI5iUmKmCY',
            'price_1RaFboGuwyzgJLTI3TFkpG92'
        ], // Add your Stripe price IDs here
    },
];

export function getPlanById(id: string): Plan | undefined {
    return plans.find((plan) => plan.id === id);
}

export function getPlanByName(name: string): Plan | undefined {
    return plans.find((plan) => plan.name === name);
}

export function getPlanByPriceId(priceId: string): Plan | undefined {
    return plans.find((plan) => plan.priceIds.includes(priceId));
}

export function getCreditsByPlanId(id: string): number {
    const plan = getPlanById(id);
    return plan?.credits || 0;
}

export function getCreditsByPlanName(name: string): number {
    const plan = getPlanByName(name);
    return plan?.credits || 0;
}

export function getCreditsByPriceId(priceId: string): number {
    const plan = getPlanByPriceId(priceId);
    return plan?.credits || 0;
} 