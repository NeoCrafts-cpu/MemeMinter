"use client";

/**
 * Custom SVG Icons for MemeMinter AI
 * Beautiful, unique icons to replace emojis
 */

interface IconProps {
  className?: string;
  size?: number;
}

// Rocket Icon - Main branding
export function RocketIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

// Sparkle Icon - Magic/Generate
export function SparkleIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

// Palette Icon - Art/Branding
export function PaletteIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

// Coin Icon - Token
export function CoinIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12" />
      <path d="M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5 1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5" />
    </svg>
  );
}

// Lightning Icon - Gas/Speed
export function LightningIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

// Heart Icon - Love/Community
export function HeartIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

// Diamond Icon - Value/Premium
export function DiamondIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12l4 6-10 13L2 9z" />
      <path d="M2 9h20" />
      <path d="M12 22V9" />
      <path d="M6 3l6 6 6-6" />
    </svg>
  );
}

// Shield Icon - Security
export function ShieldIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

// Wallet Icon - Crypto Wallet
export function WalletIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
    </svg>
  );
}

// Globe Icon - Network/Web
export function GlobeIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// Check Icon - Success
export function CheckIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Warning Icon - Alert
export function WarningIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

// Link Icon - External Link
export function ExternalLinkIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// Droplet Icon - Faucet
export function DropletIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

// Search Icon - Explorer
export function SearchIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// Polygon Icon - Network Logo
export function PolygonIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="M16.4 8.2c-.4-.2-.9-.2-1.2 0l-2.9 1.7-2 1.1-2.9 1.7c-.4.2-.9.2-1.2 0L4 11.5c-.4-.2-.6-.6-.6-1V8.2c0-.4.2-.8.6-1l2.1-1.2c.4-.2.9-.2 1.2 0l2.1 1.2c.4.2.6.6.6 1v1.7l2-1.1V7c0-.4-.2-.8-.6-1L8 3.7c-.4-.2-.9-.2-1.2 0L3.2 6C2.8 6.2 2.6 6.6 2.6 7v4.6c0 .4.2.8.6 1l3.6 2.1c.4.2.9.2 1.2 0l2.9-1.7 2-1.1 2.9-1.7c.4-.2.9-.2 1.2 0l2.1 1.2c.4.2.6.6.6 1v2.3c0 .4-.2.8-.6 1L17 16.9c-.4.2-.9.2-1.2 0l-2.1-1.2c-.4-.2-.6-.6-.6-1v-1.6l-2 1.1V16c0 .4.2.8.6 1l3.6 2.1c.4.2.9.2 1.2 0l3.6-2.1c.4-.2.6-.6.6-1V11c0-.4-.2-.8-.6-1l-3.7-1.8z" />
    </svg>
  );
}

// Fox Icon - MetaMask
export function FoxIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
    >
      <path d="M21.3 2L13 8.5l1.5-3.5L21.3 2z" fill="#E17726" />
      <path d="M2.7 2l8.2 6.6L9.5 5 2.7 2z" fill="#E27625" />
      <path d="M18.4 16.2l-2.2 3.4 4.7 1.3 1.4-4.6-3.9-.1zM1.7 16.3l1.3 4.6 4.7-1.3-2.2-3.4-3.8.1z" fill="#E27625" />
      <path d="M7.4 10.5l-1.4 2 4.8.2-.2-5.1-3.2 2.9zM16.6 10.5l-3.3-3-0.1 5.2 4.8-.2-1.4-2z" fill="#E27625" />
      <path d="M7.7 19.6l2.9-1.4-2.5-2-.4 3.4zM13.4 18.2l2.9 1.4-.4-3.4-2.5 2z" fill="#E27625" />
      <path d="M16.3 19.6l-2.9-1.4.2 1.8v.8l2.7-1.2zM7.7 19.6l2.7 1.2v-.8l.2-1.8-2.9 1.4z" fill="#D5BFB2" />
      <path d="M10.5 15l-2.4-.7 1.7-.8.7 1.5zM13.5 15l.7-1.5 1.7.8-2.4.7z" fill="#233447" />
      <path d="M7.7 19.6l.4-3.4-2.6.1 2.2 3.3zM15.9 16.2l.4 3.4 2.2-3.3-2.6-.1zM18 12.5l-4.8.2.4 2.3.7-1.5 1.7.8 2-1.8zM8.1 14.3l1.7-.8.7 1.5.4-2.3-4.8-.2 2 1.8z" fill="#CC6228" />
      <path d="M6 12.5l2.1 4.1-.1-2-2-2.1zM15.9 14.6l-.1 2 2.1-4.1-2 2.1zM10.8 12.7l-.4 2.3.5 2.7.1-3.5-.2-1.5zM13.2 12.7l-.2 1.5.1 3.5.5-2.7-.4-2.3z" fill="#E27625" />
      <path d="M13.6 15l-.5 2.7.4.2 2.5-2 .1-2-2.5 1.1zM8.1 14l.1 2 2.5 2 .4-.2-.5-2.7-2.5-1.1z" fill="#F5841F" />
      <path d="M13.7 20.8v-.8l-.2-.2h-3l-.2.2v.8L7.7 19.6l.9.8 1.9 1.4h3.1l1.9-1.4.9-.8-2.7 1.2z" fill="#C0AC9D" />
      <path d="M13.4 18.2l-.4-.2h-2l-.4.2-.2 1.8.2-.2h3l.2.2-.4-1.8z" fill="#161616" />
      <path d="M21.7 9l.7-3.5L21.3 2 13.4 8l3.2 2.5 4.5 1.3 1-1.2-.4-.3.7-.6-.6-.4.7-.5-.4-.3zM1.6 5.5L2.3 9l-.5.4.7.5-.5.4.7.6-.4.3 1 1.2 4.5-1.3L11 8 2.7 2 1.6 5.5z" fill="#763E1A" />
      <path d="M21.1 11.8l-4.5-1.3 1.4 2-2.1 4.1 2.8-.1h4.1l-1.7-4.7zM7.4 10.5L2.9 11.8l-1.7 4.7h4.1l2.8.1-2.1-4.1 1.4-2zM13.2 12.7l.3-5 1.3-3.5H9.2l1.3 3.5.3 5 .1 1.5v3.5h2l.1-3.5.2-1.5z" fill="#F5841F" />
    </svg>
  );
}

// Magic Wand Icon - Create/Generate
export function WandIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8L19 13" />
      <path d="M15 9h.01" />
      <path d="M17.8 6.2L19 5" />
      <path d="M11 6.2L9.8 5" />
      <path d="M3 21l9-9" />
      <path d="M12.2 6.2L11 5" />
    </svg>
  );
}

// Celebration Icon - Success/Party
export function CelebrationIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.8 11.3L2 22l10.7-3.8" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="M22 2l-3.6 9.6c-.2.5-.8.9-1.4.9h-5c-.6 0-1.2-.4-1.4-.9L7 2" />
      <path d="M9 16c.6.6 1.3 1.2 2.2 1.5 2.7.9 5.6-.2 7.2-2.5" />
    </svg>
  );
}

// Fire Icon - Hot/Trending  
export function FireIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="M12 23c-4.97 0-9-3.58-9-8 0-2.52.74-4.6 2.2-6.19.27-.29.71-.37 1.08-.2.37.18.59.56.55.96-.07.65.02 1.21.22 1.65.16.35.42.63.77.85.13-.92.53-1.78 1.18-2.53.9-1.04 2.22-1.75 3.54-2.35.99-.45 1.97-.83 2.78-1.36.35-.23.77-.27 1.14-.1.38.17.64.52.68.92.21 2.02-.31 3.76-1.04 5.28-.16.32-.33.64-.51.95 1.11-.34 2.13-.92 2.86-1.77.3-.35.77-.49 1.2-.36.43.14.75.51.81.95.14 1.03.03 2-.3 2.86-.63 1.65-1.88 2.97-3.24 4.08C14.51 20.2 12.71 21 12 23z" />
    </svg>
  );
}

// Gift Icon - Free
export function GiftIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 7 12 8" />
      <path d="M16.5 8a2.5 2.5 0 0 0 0-5C15 3 12 7 12 8" />
    </svg>
  );
}

// Chain Icon - Blockchain
export function ChainIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

// Layers Icon - Clone/EIP-1167
export function LayersIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

// Code Icon - Open Source
export function CodeIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

// Lightbulb Icon - Idea
export function LightbulbIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}

// Close/X Icon
export function CloseIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Spinner/Loading Icon
export function SpinnerIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`animate-spin ${className}`}
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeOpacity="0.25"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
