"use client";

import { useWriteContract, useWaitForTransactionReceipt, useAccount, useSwitchChain, useChainId } from "wagmi";
import { parseUnits } from "viem";
import { TOKEN_FACTORY_ADDRESS, TOKEN_FACTORY_ABI } from "@/config/contracts";
import { polygonAmoy } from "@/config/wagmi";
import type { MemeBranding } from "@/actions/generateBranding";
import { 
  RocketIcon, 
  CheckIcon, 
  ExternalLinkIcon, 
  CelebrationIcon, 
  DiamondIcon, 
  SparkleIcon,
  ChainIcon,
  LightbulbIcon,
  CloseIcon,
  SpinnerIcon,
  PolygonIcon,
  WarningIcon
} from "./Icons";

interface DeployButtonProps {
  branding: MemeBranding | null;
  onDeployStart?: () => void;
  onDeploySuccess?: (hash: string, tokenAddress?: string) => void;
  onDeployError?: (error: Error) => void;
}

/**
 * DeployButton Component - Stunning deploy button with animations
 */
export function DeployButton({
  branding,
  onDeployStart,
  onDeploySuccess,
  onDeployError,
}: DeployButtonProps) {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  
  const isWrongNetwork = isConnected && chainId !== polygonAmoy.id;
  
  const {
    writeContract,
    data: hash,
    isPending: isWritePending,
    error: writeError,
    reset: resetWrite,
  } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const handleSwitchNetwork = () => {
    switchChain({ chainId: polygonAmoy.id });
  };

  const handleDeploy = async () => {
    if (!branding || !isConnected || isWrongNetwork) return;
    
    // Reset any previous errors
    resetWrite();
    onDeployStart?.();
    
    try {
      const totalSupply = parseUnits("1000000", 18);
      
      writeContract({
        address: TOKEN_FACTORY_ADDRESS,
        abi: TOKEN_FACTORY_ABI,
        functionName: "deployMemeToken",
        args: [branding.name, branding.symbol, totalSupply],
        chainId: polygonAmoy.id,
        gas: BigInt(500000), // Set explicit gas limit for clone deployment
      });
    } catch (error) {
      console.error("Deploy error:", error);
      onDeployError?.(error as Error);
    }
  };

  if (isConfirmed && hash) {
    onDeploySuccess?.(hash);
  }

  if (writeError) {
    onDeployError?.(writeError);
  }

  const isLoading = isWritePending || isConfirming;
  const isDisabled = !branding || !isConnected || isLoading || isWrongNetwork;

  // Parse error message for better UX
  const getErrorMessage = (error: Error) => {
    const msg = error.message.toLowerCase();
    console.error("Full deployment error:", error);
    
    if (msg.includes("user rejected") || msg.includes("user denied")) {
      return "Transaction was rejected by user";
    }
    if (msg.includes("insufficient funds") || msg.includes("insufficient balance")) {
      return "Insufficient MATIC for gas. Get test tokens from faucet.polygon.technology";
    }
    if (msg.includes("network") || msg.includes("chain")) {
      return "Please switch to Polygon Amoy network";
    }
    if (msg.includes("nonce")) {
      return "Transaction nonce error. Try resetting your wallet.";
    }
    if (msg.includes("cannot destructure") || msg.includes("undefined")) {
      return "Connection error. Please refresh the page and try again.";
    }
    if (msg.includes("execution reverted") || msg.includes("revert")) {
      return "Contract execution failed. The token may have invalid parameters.";
    }
    // Show actual error for debugging
    return error.message.length > 150 
      ? error.message.slice(0, 150) + "..." 
      : error.message;
  };

  // Success state with celebration
  if (isConfirmed && hash) {
    return (
      <div className="w-full max-w-md mx-auto space-y-6 animate-bounce-in">
        {/* Success card */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-green-600/20 to-emerald-600/20 blur-xl" />
          <div className="relative glass rounded-2xl p-8 text-center border border-green-500/30">
            {/* Celebration animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${10 + (i * 7)}%`,
                    top: `${Math.random() * 60}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                >
                  {i % 4 === 0 ? (
                    <CelebrationIcon size={20} className="text-yellow-400" />
                  ) : i % 4 === 1 ? (
                    <RocketIcon size={18} className="text-purple-400" />
                  ) : i % 4 === 2 ? (
                    <DiamondIcon size={18} className="text-cyan-400" />
                  ) : (
                    <SparkleIcon size={16} className="text-pink-400" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 
                              flex items-center justify-center animate-pulse-glow"
                   style={{ boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}>
                <CheckIcon size={40} className="text-green-400" />
              </div>
              
              <h3 className="text-3xl font-black text-green-400 mb-2 flex items-center justify-center gap-2">
                <CelebrationIcon size={28} className="text-yellow-400" />
                Token Deployed!
              </h3>
              <p className="text-gray-400 mb-6">
                Your memecoin is now live on Polygon Amoy
              </p>
            </div>
          </div>
        </div>
        
        {/* Transaction link */}
        <a
          href={`https://amoy.polygonscan.com/tx/${hash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 
                     glass hover:border-purple-500/30 rounded-xl 
                     text-purple-400 hover:text-purple-300 font-semibold
                     transition-all duration-300 hover-lift group"
        >
          <span>View on PolygonScan</span>
          <ExternalLinkIcon size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        
        {/* Transaction hash */}
        <div className="text-center">
          <span className="text-xs text-gray-500 font-mono glass px-3 py-1 rounded-full">
            TX: {hash.slice(0, 10)}...{hash.slice(-8)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Wrong Network Warning */}
      {isWrongNetwork && (
        <button
          onClick={handleSwitchNetwork}
          disabled={isSwitching}
          className="relative w-full py-5 px-8 font-black text-xl text-white rounded-2xl mb-4
                     transition-all duration-300 
                     hover-lift overflow-hidden group"
        >
          <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-amber-500 to-orange-500 
                          bg-size-[200%_100%] animate-gradient-shift" />
          <div className="absolute -inset-1 bg-linear-to-r from-orange-500 to-amber-500 rounded-2xl blur-lg 
                          opacity-40 group-hover:opacity-70 transition-opacity" />
          <span className="relative flex items-center justify-center gap-3">
            {isSwitching ? (
              <>
                <SpinnerIcon size={24} />
                <span>Switching...</span>
              </>
            ) : (
              <>
                <PolygonIcon size={26} />
                <span>Switch to Polygon Amoy</span>
              </>
            )}
          </span>
        </button>
      )}

      <button
        onClick={handleDeploy}
        disabled={isDisabled}
        className="relative w-full py-5 px-8 font-black text-xl text-white rounded-2xl
                   transition-all duration-300 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover-lift overflow-hidden group"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-linear-to-r from-green-500 via-emerald-500 to-green-500 
                        bg-size-[200%_100%] animate-gradient-shift" />
        
        {/* Shimmer effect */}
        {!isLoading && !isDisabled && (
          <div className="absolute inset-0 animate-shimmer" />
        )}
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg 
                        opacity-40 group-hover:opacity-70 transition-opacity" />
        
        {/* Content */}
        <span className="relative flex items-center justify-center gap-3">
          {isLoading ? (
            <>
              <SpinnerIcon size={28} />
              <span>{isConfirming ? "Confirming on chain..." : "Deploying..."}</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </>
          ) : (
            <>
              <RocketIcon size={26} className="group-hover:animate-bounce" />
              <span>Deploy to Polygon</span>
            </>
          )}
        </span>
      </button>

      {/* Helper messages */}
      {!isConnected && branding && (
        <div className="mt-4 p-4 glass rounded-xl border border-yellow-500/30 flex items-center gap-3 animate-slide-up">
          <ChainIcon size={24} className="text-yellow-400" />
          <p className="text-yellow-400 text-sm">Connect your wallet to deploy</p>
        </div>
      )}
      
      {!branding && (
        <div className="mt-4 p-4 glass rounded-xl flex items-center gap-3">
          <LightbulbIcon size={24} className="text-gray-500 opacity-50" />
          <p className="text-gray-500 text-sm">Generate branding first to deploy</p>
        </div>
      )}

      {/* Wrong network info */}
      {isWrongNetwork && (
        <div className="mt-4 p-4 glass rounded-xl border border-orange-500/30 flex items-start gap-3 animate-slide-up">
          <WarningIcon size={24} className="text-orange-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-orange-400 text-sm font-semibold">Wrong Network</p>
            <p className="text-orange-300/70 text-xs mt-1">
              Please switch to Polygon Amoy Testnet (Chain ID: 80002)
            </p>
          </div>
        </div>
      )}

      {/* Error display */}
      {writeError && (
        <div className="mt-4 p-4 glass rounded-xl border border-red-500/30 animate-bounce-in">
          <div className="flex items-start gap-3">
            <CloseIcon size={24} className="text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-red-400 text-sm font-semibold">Deployment Failed</p>
              <p className="text-red-300/70 text-xs mt-1">
                {getErrorMessage(writeError)}
              </p>
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => {
                    resetWrite();
                    handleDeploy();
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                >
                  Try Again
                </button>
                {writeError.message.toLowerCase().includes("insufficient") && (
                  <a 
                    href="https://faucet.polygon.technology/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300"
                  >
                    Get test MATIC <ExternalLinkIcon size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
