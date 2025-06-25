import type { Route } from "../+types/root";

// Extend Request type to include Cloudflare properties
interface CloudflareRequest extends Request {
    cf?: {
        country?: string;
        city?: string;
        timezone?: string;
        continent?: string;
        latitude?: string;
        longitude?: string;
        postalCode?: string;
        region?: string;
        asn?: number;
        colo?: string;
        ipVersion?: string;
        metroCode?: string;
        network?: string;
        botManagement?: any;
        tlsVersion?: string;
        tlsCipher?: string;
    };
}

// Country to currency mapping
const COUNTRY_CURRENCY_MAP: Record<string, string> = {
    // European countries - EUR
    'AT': 'eur', // Austria
    'BE': 'eur', // Belgium
    'CY': 'eur', // Cyprus
    'EE': 'eur', // Estonia
    'FI': 'eur', // Finland
    'FR': 'eur', // France
    'DE': 'eur', // Germany
    'GR': 'eur', // Greece
    'IE': 'eur', // Ireland
    'IT': 'eur', // Italy
    'LV': 'eur', // Latvia
    'LT': 'eur', // Lithuania
    'LU': 'eur', // Luxembourg
    'MT': 'eur', // Malta
    'NL': 'eur', // Netherlands
    'PT': 'eur', // Portugal
    'SK': 'eur', // Slovakia
    'SI': 'eur', // Slovenia
    'ES': 'eur', // Spain

    // Brazil - BRL
    'BR': 'brl', // Brazil
};

export function getCurrencyFromCountry(countryCode: string): string {
    return COUNTRY_CURRENCY_MAP[countryCode.toUpperCase()] || 'usd';
}

export function getCountryFromRequest(request: Request): string {
    // Method 1: Try to get country from Cloudflare headers
    const cfRequest = request as CloudflareRequest;
    const cfCountry = cfRequest.cf?.country;

    if (cfCountry) {
        return cfCountry;
    }

    // Method 2: Try Cloudflare IP Country header (always available)
    const cfIpCountry = request.headers.get('cf-ipcountry');
    if (cfIpCountry) {
        return cfIpCountry;
    }

    // Default to US (USD)
    return 'US';
}

// New function to get country from context (for loaders)
export function getCountryFromContext(context: any): string {
    // Method 1: Try to get country from Cloudflare context
    const cfCountry = context?.cloudflare?.cf?.country;
    if (cfCountry) {
        return cfCountry;
    }

    // Method 2: Try Cloudflare IP Country header from context
    const cfIpCountry = context?.cloudflare?.cf?.ipCountry;
    if (cfIpCountry) {
        return cfIpCountry;
    }

    // Default to US (USD)
    return 'US';
}

export function getCurrencyFromRequest(request: Request): string {
    const country = getCountryFromRequest(request);
    return getCurrencyFromCountry(country);
} 