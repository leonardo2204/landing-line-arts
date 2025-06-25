/// <reference types="@cloudflare/workers-types" />

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle static assets
    if (path.startsWith('/assets/') || path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp)$/)) {
      return env.ASSETS.fetch(request);
    }

    // For all other routes, serve the index.html
    return env.ASSETS.fetch(new Request(new URL('/', request.url)));
  }
}; 