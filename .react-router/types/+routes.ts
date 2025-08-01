// Generated by React Router

import "react-router"

declare module "react-router" {
  interface Register {
    pages: Pages
    routeFiles: RouteFiles
  }
}

type Pages = {
  "/": {
    params: {};
  };
  "/blog": {
    params: {};
  };
  "/blog/:slug": {
    params: {
      "slug": string;
    };
  };
  "/politica-de-privacidade": {
    params: {};
  };
  "/termos-de-servico": {
    params: {};
  };
  "/politica-de-cookies": {
    params: {};
  };
  "/lgpd": {
    params: {};
  };
  "/pobre-goods-imprimir": {
    params: {};
  };
  "/en": {
    params: {};
  };
  "/en/blog": {
    params: {};
  };
  "/en/blog/:slug": {
    params: {
      "slug": string;
    };
  };
  "/en/privacy-policy": {
    params: {};
  };
  "/en/terms-of-service": {
    params: {};
  };
  "/en/cookie-policy": {
    params: {};
  };
  "/en/lgpd": {
    params: {};
  };
  "/en/pobre-goods-imprimir": {
    params: {};
  };
  "/sitemap.xml": {
    params: {};
  };
  "/*": {
    params: {
      "*": string;
    };
  };
};

type RouteFiles = {
  "root.tsx": {
    id: "root";
    page: "/" | "/blog" | "/blog/:slug" | "/politica-de-privacidade" | "/termos-de-servico" | "/politica-de-cookies" | "/lgpd" | "/pobre-goods-imprimir" | "/en" | "/en/blog" | "/en/blog/:slug" | "/en/privacy-policy" | "/en/terms-of-service" | "/en/cookie-policy" | "/en/lgpd" | "/en/pobre-goods-imprimir" | "/sitemap.xml" | "/*";
  };
  "pages/LandingPage.tsx": {
    id: "pages/LandingPage";
    page: "/";
  } | {
    id: "landing-en";
    page: "/en";
  };
  "pages/BlogListPage.tsx": {
    id: "pages/BlogListPage";
    page: "/blog";
  } | {
    id: "blog-list-en";
    page: "/en/blog";
  };
  "pages/BlogPostPage.tsx": {
    id: "pages/BlogPostPage";
    page: "/blog/:slug";
  } | {
    id: "blog-post-en";
    page: "/en/blog/:slug";
  };
  "pages/PrivacyPolicyPage.tsx": {
    id: "pages/PrivacyPolicyPage";
    page: "/politica-de-privacidade";
  } | {
    id: "privacy-en";
    page: "/en/privacy-policy";
  };
  "pages/TermsOfServicePage.tsx": {
    id: "pages/TermsOfServicePage";
    page: "/termos-de-servico";
  } | {
    id: "terms-en";
    page: "/en/terms-of-service";
  };
  "pages/CookiePolicyPage.tsx": {
    id: "pages/CookiePolicyPage";
    page: "/politica-de-cookies";
  } | {
    id: "cookies-en";
    page: "/en/cookie-policy";
  };
  "pages/LGPDPage.tsx": {
    id: "pages/LGPDPage";
    page: "/lgpd";
  } | {
    id: "lgpd-en";
    page: "/en/lgpd";
  };
  "pages/PobreGoods.tsx": {
    id: "pages/PobreGoods";
    page: "/pobre-goods-imprimir";
  } | {
    id: "pobre-goods-en";
    page: "/en/pobre-goods-imprimir";
  };
  "pages/sitemap.xml.tsx": {
    id: "pages/sitemap.xml";
    page: "/sitemap.xml";
  };
  "pages/NotFoundPage.tsx": {
    id: "not-found";
    page: "/*";
  };
};