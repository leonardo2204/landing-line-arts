import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
    index("pages/LandingPage.tsx"),
    route("/blog", "pages/BlogListPage.tsx"),
    route("/blog/:slug", "pages/BlogPostPage.tsx"),
    route("/politica-de-privacidade", "pages/PrivacyPolicyPage.tsx"),
    route("/termos-de-servico", "pages/TermsOfServicePage.tsx"),
    route("/politica-de-cookies", "pages/CookiePolicyPage.tsx"),
    route("/lgpd", "pages/LGPDPage.tsx"),
    route("/pobre-goods-imprimir", "pages/PobreGoods.tsx"),
    route("/ze-neto-bobbie-goods-imprimir", "pages/ZeNetoPage.tsx"),
    route("/lauana-prado-bobbie-goods-imprimir", "pages/LauanaPradoPage.tsx"),
    // English routes with unique IDs
    route("/en", "pages/LandingPage.tsx", { id: "landing-en" }),
    route("/en/blog", "pages/BlogListPage.tsx", { id: "blog-list-en" }),
    route("/en/blog/:slug", "pages/BlogPostPage.tsx", { id: "blog-post-en" }),
    route("/en/privacy-policy", "pages/PrivacyPolicyPage.tsx", { id: "privacy-en" }),
    route("/en/terms-of-service", "pages/TermsOfServicePage.tsx", { id: "terms-en" }),
    route("/en/cookie-policy", "pages/CookiePolicyPage.tsx", { id: "cookies-en" }),
    route("/en/lgpd", "pages/LGPDPage.tsx", { id: "lgpd-en" }),
    route("/en/pobre-goods-imprimir", "pages/PobreGoods.tsx", { id: "pobre-goods-en" }),
    route("/en/ze-neto-bobbie-goods-imprimir", "pages/ZeNetoPage.tsx", { id: "ze-neto-bobbie-goods-en" }),
    route("/en/lauana-prado-bobbie-goods-imprimir", "pages/LauanaPradoPage.tsx", { id: "lauana-prado-bobbie-goods-en" }),
    route("/sitemap.xml", "pages/sitemap.xml.tsx"),
    route("*", "pages/NotFoundPage.tsx", { id: "not-found" }),
] satisfies RouteConfig;
