/// <reference types="@cloudflare/workers-types" />
import { createRequestHandler } from "react-router";

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: any;
      ctx: ExecutionContext;
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
    };
  }
}

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    // Extract cf object from request and pass it through load context
    const cf = (request as any).cf;
    
    return requestHandler(request, {
      cloudflare: { 
        env, 
        ctx,
        cf 
      },
    });
  },
} satisfies ExportedHandler<any>;