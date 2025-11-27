"use client";

import { useConnect, useAccount, useDisconnect } from "wagmi";
import { FoxIcon, SpinnerIcon, WalletIcon } from "./Icons";

/**
 * ConnectWallet Component - Beautiful wallet connection with animations
 */
export function ConnectWallet() {
  const { connectors, connect, isPending } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const truncatedAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 px-4 py-2.5 glass rounded-xl border border-green-500/20 hover-lift">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-40" />
          </div>
          <span className="text-sm font-mono text-gray-200 font-medium">
            {truncatedAddress}
          </span>
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <FoxIcon size={18} />
          </div>
        </div>
        <button
          onClick={() => disconnect()}
          className="px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white 
                     glass hover:border-red-500/30 rounded-xl
                     transition-all duration-300 hover-lift group"
        >
          <span className="group-hover:hidden">Disconnect</span>
          <span className="hidden group-hover:inline text-red-400">Bye!</span>
        </button>
      </div>
    );
  }

  const connector = connectors[0];

  return (
    <button
      onClick={() => connector && connect({ connector })}
      disabled={isPending || !connector}
      className="relative group px-6 py-3 font-bold text-white rounded-xl
                 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                 hover-lift overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 
                      bg-size-[200%_100%] animate-gradient-shift" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 animate-shimmer opacity-30" />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl blur-lg 
                      opacity-40 group-hover:opacity-70 transition-opacity" />
      
      {/* Content */}
      <span className="relative flex items-center gap-2">
        <FoxIcon size={22} className="group-hover:animate-bounce" />
        {isPending ? (
          <>
            <SpinnerIcon size={20} />
            <span>Connecting...</span>
          </>
        ) : (
          <span>Connect Wallet</span>
        )}
      </span>
    </button>
  );
}
