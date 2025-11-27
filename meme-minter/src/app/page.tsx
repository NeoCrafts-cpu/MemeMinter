"use client";

import { useState, useTransition } from "react";
import { 
  ConnectWallet, 
  PromptInput, 
  PreviewCard, 
  DeployButton,
  RocketIcon,
  SparkleIcon,
  CoinIcon,
  LightningIcon,
  PolygonIcon,
  PaletteIcon,
  ShieldIcon,
  GiftIcon,
  GlobeIcon,
  LayersIcon,
  CodeIcon,
  DropletIcon,
  SearchIcon,
  WarningIcon,
  HeartIcon,
} from "@/components";
import { generateMemeBranding, type MemeBranding } from "@/actions/generateBranding";

/**
 * MemeMinter AI - Main Page
 * 
 * The complete Text-to-Memecoin experience with stunning UI/UX
 */
export default function Home() {
  const [branding, setBranding] = useState<MemeBranding | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDeployed, setIsDeployed] = useState(false);
  const [isGenerating, startTransition] = useTransition();

  const handleGenerate = (prompt: string) => {
    setError(null);
    setBranding(null);
    setIsDeployed(false);
    
    startTransition(async () => {
      const result = await generateMemeBranding(prompt);
      if ("error" in result) {
        setError(result.error);
      } else {
        setBranding(result);
      }
    });
  };

  const handleDeploySuccess = (hash: string) => {
    setIsDeployed(true);
    console.log("Deployed successfully:", hash);
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-morph" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] animate-float" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-size-[100px_100px]" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/60 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Sparkle Effects */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-sparkle text-purple-400/60"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <SparkleIcon size={12} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="glass-dark border-b border-white/5 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <RocketIcon size={24} className="text-white animate-float" style={{ animationDuration: '3s' }} />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-black gradient-text-animated">MemeMinter AI</h1>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-xs text-gray-400">Polygon Amoy Testnet</p>
                  </div>
                </div>
              </div>

              {/* Connect Wallet */}
              <ConnectWallet />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-8 animate-bounce-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Powered by AI • 100% Free • No API Keys</span>
            <SparkleIcon size={16} className="text-yellow-400" />
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-slide-up">
            <span className="gradient-text-animated">Text to Memecoin</span>
            <br />
            <span className="text-white relative inline-block mt-2">
              in Seconds
              <SparkleIcon size={32} className="absolute -right-12 -top-4 text-yellow-400 animate-float" style={{ animationDelay: '-1s' }} />
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Describe your memecoin idea, let AI create stunning branding, 
            and deploy it on <span className="text-purple-400 font-semibold">Polygon</span> with one click.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {[
              { label: "Tokens Created", value: "∞", Icon: CoinIcon },
              { label: "Gas Efficient", value: "EIP-1167", Icon: LightningIcon },
              { label: "Network", value: "Polygon", Icon: PolygonIcon },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl px-6 py-4 hover-lift">
                <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-linear-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <stat.Icon size={20} className="text-purple-400" />
                </div>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Input */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-600 to-purple-800 flex items-center justify-center font-bold text-lg shadow-lg neon-purple">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white">Describe Your Memecoin</h3>
                </div>
                <PromptInput onGenerate={handleGenerate} isLoading={isGenerating} />
              </div>

              {/* Error Display */}
              {error && (
                <div className="p-5 glass rounded-2xl border border-red-500/30 animate-bounce-in">
                  <div className="flex items-center gap-3">
                    <WarningIcon size={24} className="text-red-400" />
                    <p className="text-red-400">{error}</p>
                  </div>
                </div>
              )}

              {/* Step 3 - Deploy */}
              {branding && !isDeployed && (
                <div className="animate-slide-up">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500 to-emerald-700 flex items-center justify-center font-bold text-lg shadow-lg">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-white">Deploy Your Token</h3>
                  </div>
                  <DeployButton
                    branding={branding}
                    onDeploySuccess={handleDeploySuccess}
                  />
                </div>
              )}
            </div>

            {/* Right Column - Preview */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-500 to-pink-700 flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Preview Your Token</h3>
              </div>
              <PreviewCard branding={branding} isLoading={isGenerating} />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Why MemeMinter?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: PaletteIcon,
                title: "AI-Powered Branding",
                description: "Unique names, symbols, and avatars generated from your creative prompts",
              },
              {
                Icon: LayersIcon,
                title: "Gas Efficient",
                description: "EIP-1167 Clone pattern for minimal deployment costs on Polygon",
              },
              {
                Icon: ShieldIcon,
                title: "Fully On-Chain",
                description: "Your token is deployed directly to blockchain - you own it completely",
              },
              {
                Icon: GiftIcon,
                title: "100% Free",
                description: "No API keys needed - just connect your wallet and create",
              },
              {
                Icon: RocketIcon,
                title: "Instant Deploy",
                description: "One-click deployment to Polygon Amoy testnet in seconds",
              },
              {
                Icon: CodeIcon,
                title: "Open Source",
                description: "Transparent, auditable smart contracts you can verify",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.Icon size={28} className="text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 glass-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <RocketIcon size={20} className="text-purple-400" />
                <p className="text-gray-500 text-sm">
                  Built with <HeartIcon size={14} className="inline text-red-500 mx-1" /> using Next.js, Wagmi & DiceBear
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="https://faucet.polygon.technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors flex items-center gap-2 hover-lift"
                >
                  <DropletIcon size={16} /> Get Test MATIC
                </a>
                <a
                  href="https://amoy.polygonscan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors flex items-center gap-2 hover-lift"
                >
                  <SearchIcon size={16} /> PolygonScan
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
