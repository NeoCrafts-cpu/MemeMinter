"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/config/wagmi";
import { useState, type ReactNode } from "react";

/**
 * Web3 Provider Component
 * 
 * Wraps the application with:
 * 1. WagmiProvider - Ethereum/Polygon wallet connections and contract interactions
 * 2. QueryClientProvider - TanStack Query for caching and state management
 * 
 * Why this pattern?
 * - Wagmi v2 requires TanStack Query for data fetching
 * - Client-side only (marked with "use client")
 * - QueryClient created in state to prevent SSR issues
 */
export function Web3Provider({ children }: { children: ReactNode }) {
  // Create QueryClient instance in state to avoid recreation on re-renders
  // and prevent SSR hydration mismatches
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we want to set some default staleTime to avoid
            // refetching immediately on the client
            staleTime: 60 * 1000, // 1 minute
            retry: 2,
          },
        },
      })
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
