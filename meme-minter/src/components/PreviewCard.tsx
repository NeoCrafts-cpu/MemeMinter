"use client";

import Image from "next/image";
import type { MemeBranding } from "@/actions/generateBranding";
import { 
  PaletteIcon, 
  SparkleIcon, 
  RocketIcon, 
  CoinIcon, 
  PolygonIcon, 
  CheckIcon,
  WandIcon 
} from "./Icons";

interface PreviewCardProps {
  branding: MemeBranding | null;
  isLoading: boolean;
}

/**
 * PreviewCard Component - Stunning token preview with animations
 */
export function PreviewCard({ branding, isLoading }: PreviewCardProps) {
  // Empty state
  if (!branding && !isLoading) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-linear-to-r from-gray-700 to-gray-600 
                          rounded-3xl opacity-30" />
          
          <div className="relative glass rounded-3xl p-10 flex flex-col items-center justify-center 
                          min-h-[450px] text-center">
            {/* Animated placeholder */}
            <div className="relative w-32 h-32 mb-8">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-600/20 to-pink-600/20 animate-morph" />
              <div className="absolute inset-4 rounded-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <PaletteIcon size={48} className="opacity-30 animate-float text-purple-400" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-300 mb-3">
              Your Memecoin Awaits
            </h3>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Describe your idea above and let AI create unique branding for your token
            </p>
            
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 opacity-20 animate-float text-yellow-400" style={{ animationDelay: '-2s' }}>
              <SparkleIcon size={24} />
            </div>
            <div className="absolute bottom-8 left-8 opacity-20 animate-float text-purple-400" style={{ animationDelay: '-4s' }}>
              <RocketIcon size={24} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading skeleton with amazing animations
  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="relative group">
          {/* Rotating gradient border */}
          <div className="absolute -inset-1 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 
                            animate-rotate-slow opacity-75 blur-sm" 
                 style={{ transformOrigin: 'center center' }} />
          </div>
          
          {/* Pulsing glow */}
          <div className="absolute -inset-4 bg-purple-600/20 rounded-[40px] blur-2xl animate-pulse" />
          
          <div className="relative glass rounded-3xl p-10 flex flex-col items-center">
            {/* Image skeleton with spinning effect */}
            <div className="relative w-52 h-52 mb-8">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-600/30 to-pink-600/30 animate-pulse" />
              <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-purple-500/50 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
              </div>
            </div>
            
            {/* Text skeletons */}
            <div className="h-8 w-52 bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 
                            rounded-lg animate-shimmer bg-size-[200%_100%]" />
            <div className="h-6 w-28 bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 
                            rounded-full mt-4 animate-shimmer bg-size-[200%_100%]" style={{ animationDelay: '0.1s' }} />
            <div className="space-y-2 w-full mt-6">
              <div className="h-4 w-full bg-gray-800/50 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-800/50 rounded animate-pulse mx-auto" />
            </div>
            
            {/* Loading text */}
            <div className="mt-8 flex items-center gap-3 text-purple-400">
              <WandIcon size={20} className="animate-bounce" />
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>Creating</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>Magic</span>
              <div className="animate-bounce" style={{ animationDelay: '0.3s' }}>
                <SparkleIcon size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Branding display with stunning design
  return (
    <div className="w-full max-w-md mx-auto animate-bounce-in">
      <div className="relative group">
        {/* Animated gradient border */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 
                        rounded-3xl opacity-75 blur group-hover:opacity-100 
                        transition-all duration-500 animate-pulse-glow" />
        
        {/* Outer glow */}
        <div className="absolute -inset-4 bg-purple-600/10 rounded-[40px] blur-2xl 
                        group-hover:bg-purple-600/20 transition-all duration-500" />
        
        <div className="relative glass rounded-3xl p-8 flex flex-col items-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600/10 rounded-full blur-3xl" />
          
          {/* Token Logo */}
          <div className="relative mb-6 group/logo">
            <div className="absolute -inset-3 bg-linear-to-br from-purple-600 to-pink-600 
                            rounded-3xl blur-lg opacity-50 group-hover/logo:opacity-80 
                            transition-opacity animate-pulse" />
            <div className="relative w-52 h-52 rounded-2xl overflow-hidden 
                            ring-4 ring-white/10 shadow-2xl transform 
                            group-hover/logo:scale-105 transition-transform duration-300">
              <Image
                src={branding!.imageUrl}
                alt={`${branding!.name} logo`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            
            {/* Sparkle on hover */}
            <div className="absolute -top-2 -right-2 opacity-0 group-hover/logo:opacity-100 
                            transition-opacity animate-float text-yellow-400">
              <SparkleIcon size={24} />
            </div>
          </div>
          
          {/* Token Name */}
          <h2 className="text-3xl font-black gradient-text-animated mb-3 text-center">
            {branding!.name}
          </h2>
          
          {/* Token Symbol */}
          <div className="relative group/symbol">
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 
                            rounded-full blur opacity-50 group-hover/symbol:opacity-100 transition-opacity" />
            <div className="relative px-5 py-2 bg-linear-to-r from-purple-600/20 to-pink-600/20 
                            rounded-full border border-purple-500/30 
                            group-hover/symbol:border-purple-400/50 transition-colors">
              <span className="font-mono font-bold text-lg text-purple-300">
                ${branding!.symbol}
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-400 text-center leading-relaxed mt-5 text-lg">
            {branding!.description}
          </p>
          
          {/* Stats */}
          <div className="mt-8 pt-6 border-t border-white/5 w-full grid grid-cols-2 gap-4">
            <div className="text-center glass rounded-xl p-4 hover-lift">
              <div className="mb-2 flex justify-center text-yellow-400">
                <CoinIcon size={28} />
              </div>
              <div className="text-sm text-gray-500 mb-1">Initial Supply</div>
              <div className="font-bold text-white text-lg">1,000,000</div>
            </div>
            <div className="text-center glass rounded-xl p-4 hover-lift">
              <div className="mb-2 flex justify-center text-purple-400">
                <PolygonIcon size={28} />
              </div>
              <div className="text-sm text-gray-500 mb-1">Network</div>
              <div className="font-bold gradient-text text-lg">Polygon</div>
            </div>
          </div>
          
          {/* Success indicator */}
          <div className="mt-6 flex items-center gap-2 text-green-400 text-sm">
            <div className="relative">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse block" />
            </div>
            <CheckIcon size={16} className="text-green-500" />
            Ready to deploy
          </div>
        </div>
      </div>
    </div>
  );
}
