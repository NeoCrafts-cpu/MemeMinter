import { http, createConfig, fallback } from "wagmi";
import { polygonAmoy } from "wagmi/chains";
import { injected } from "wagmi/connectors";

/**
 * Wagmi Configuration for MemeMinter AI
 * 
 * Network: Polygon Amoy Testnet (Chain ID: 80002)
 * - This is Polygon's official testnet (replaced Mumbai)
 * - Get test MATIC from: https://faucet.polygon.technology/
 */

export const config = createConfig({
  chains: [polygonAmoy],
  connectors: [
    injected({
      shimDisconnect: true,
    }),
  ],
  transports: {
    // Use fallback with multiple RPC providers for reliability
    [polygonAmoy.id]: fallback([
      http("https://rpc-amoy.polygon.technology"),
      http("https://polygon-amoy.drpc.org"),
      http("https://polygon-amoy-bor-rpc.publicnode.com"),
    ]),
  },
});

// Export chain for use in components
export { polygonAmoy };

// Type declaration for TypeScript
declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
