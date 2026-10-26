/// <reference types="@cloudflare/workers-types" />
import { createRequestHandler, RouterContextProvider } from "react-router";
import { cloudflareContext } from "../app/cloudflare";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    // Extract cf object from request and pass it through load context
    const cf = (request as any).cf;
    const context = new RouterContextProvider();
    context.set(cloudflareContext, { env, ctx, cf });

    return requestHandler(request, context);
  },
} satisfies ExportedHandler<any>;
