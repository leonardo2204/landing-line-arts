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
  route("/galeria", "pages/GalleryPage.tsx"),
  route("/livro-de-colorir-personalizado", "pages/UseCasePage.tsx", { id: "coloring-book" }),
  route("/figurinhas-adesivos-personalizados", "pages/UseCasePage.tsx", { id: "stickers" }),
  route("/bobbie-goods-personalizado-com-fotos", "pages/UseCasePage.tsx", { id: "bobbie-goods" }),
  route("/desenho-de-natal-para-colorir-com-foto", "pages/UseCasePage.tsx", { id: "christmas" }),
  // English routes with unique IDs
  route("/en/custom-coloring-book-from-photos", "pages/UseCasePage.tsx", { id: "coloring-book-en" }),
  route("/en/custom-stickers-from-photos", "pages/UseCasePage.tsx", { id: "stickers-en" }),
  route("/en/bobbie-goods-style-coloring-pages", "pages/UseCasePage.tsx", { id: "bobbie-goods-en" }),
  route("/en/personalized-christmas-coloring-pages", "pages/UseCasePage.tsx", { id: "christmas-en" }),
  route("/en", "pages/LandingPage.tsx", { id: "landing-en" }),
  route("/en/blog", "pages/BlogListPage.tsx", { id: "blog-list-en" }),
  route("/en/blog/:slug", "pages/BlogPostPage.tsx", { id: "blog-post-en" }),
  route("/en/privacy-policy", "pages/PrivacyPolicyPage.tsx", {
    id: "privacy-en",
  }),
  route("/en/terms-of-service", "pages/TermsOfServicePage.tsx", {
    id: "terms-en",
  }),
  route("/en/cookie-policy", "pages/CookiePolicyPage.tsx", {
    id: "cookies-en",
  }),
  route("/en/lgpd", "pages/LGPDPage.tsx", { id: "lgpd-en" }),
  route("/en/pobre-goods-imprimir", "pages/PobreGoods.tsx", {
    id: "pobre-goods-en",
  }),
  route("/sitemap.xml", "pages/sitemap.xml.tsx"),
  route("/en/gallery", "pages/GalleryPage.tsx", { id: "gallery-en" }),
  route("*", "pages/NotFoundPage.tsx", { id: "not-found" }),
] satisfies RouteConfig;
