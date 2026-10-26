import { createContext } from "react-router";

export const cloudflareContext = createContext<{
  env: any;
  ctx: ExecutionContext;
  cf?: IncomingRequestCfProperties;
}>();
