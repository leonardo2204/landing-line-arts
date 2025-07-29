export async function loader() {
  const xml = await fetch("/sitemap.xml");
  const sitemap = await xml.text();
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
