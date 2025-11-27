"use server";

/**
 * Server Action: Generate Meme Token Branding (FREE - No API Keys Required!)
 * 
 * This server action generates creative memecoin branding without any paid APIs.
 * 
 * Flow:
 * 1. Parse user prompt to extract key themes/words
 * 2. Generate creative token names and symbols using local logic
 * 3. Use DiceBear API (free, unlimited) for unique avatar generation
 * 
 * No API keys needed! Completely free to use.
 */

// Response type for the branding generation
export interface MemeBranding {
  name: string;
  symbol: string;
  description: string;
  imageUrl: string;
}

// Error response type
export interface GenerateError {
  error: string;
}

// Word banks for creative name generation
const PREFIXES = [
  "Doge", "Moon", "Shiba", "Pepe", "Chad", "Based", "Turbo", "Mega", "Ultra", "Super",
  "Giga", "Hyper", "Cosmic", "Astro", "Rocket", "Diamond", "Golden", "Laser", "Crypto",
  "Meme", "Sigma", "Alpha", "Omega", "Zen", "Epic", "Legendary", "Mythic", "Eternal"
];

const SUFFIXES = [
  "Coin", "Token", "Moon", "Rocket", "Inu", "Doge", "Cat", "Floki", "Elon", "Mars",
  "Star", "Nova", "Blaze", "Fire", "Storm", "Thunder", "King", "Lord", "Master",
  "Prime", "Elite", "Supreme", "Infinity", "Genesis", "Protocol", "Finance", "Swap"
];

const DESCRIPTIONS_TEMPLATES = [
  "The next generation {theme} token built for the community. To the moon! 🚀",
  "A revolutionary {theme} memecoin with diamond hands energy. HODL forever! 💎",
  "Powered by memes and community spirit. {theme} vibes only. 🔥",
  "The ultimate {theme} token for true believers. Join the movement! ⚡",
  "Where {theme} meets blockchain innovation. Your bags will thank you. 🌟",
  "{theme} energy in token form. Built different, stay based. 👑",
  "Community-driven {theme} token. We're all gonna make it! 🦍",
  "The {theme} revolution starts here. Ape in responsibly. 🎯",
];

// Extract meaningful words from the prompt
function extractKeywords(prompt: string): string[] {
  const stopWords = new Set([
    "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did", "will", "would", "could",
    "should", "may", "might", "must", "can", "and", "or", "but", "if",
    "then", "else", "when", "where", "why", "how", "what", "which", "who",
    "this", "that", "these", "those", "i", "you", "he", "she", "it", "we",
    "they", "my", "your", "his", "her", "its", "our", "their", "with",
    "for", "on", "in", "at", "to", "from", "by", "about", "into", "of",
    "make", "create", "want", "like", "just", "really", "very", "so"
  ]);

  return prompt
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word))
    .slice(0, 5);
}

// Generate a creative token name
function generateTokenName(keywords: string[]): string {
  const randomPrefix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
  const randomSuffix = SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
  
  // Use a keyword if available
  if (keywords.length > 0) {
    const keyword = keywords[0];
    const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
    
    // Different naming patterns
    const patterns = [
      `${capitalizedKeyword} ${randomSuffix}`,
      `${randomPrefix} ${capitalizedKeyword}`,
      `${capitalizedKeyword}Coin`,
      `${capitalizedKeyword} Inu`,
      `${randomPrefix}${capitalizedKeyword}`,
      `${capitalizedKeyword} Moon`,
    ];
    
    return patterns[Math.floor(Math.random() * patterns.length)];
  }
  
  return `${randomPrefix} ${randomSuffix}`;
}

// Generate a token symbol
function generateSymbol(name: string): string {
  // Extract first letters of each word, uppercase, max 5 chars
  const words = name.split(/\s+/);
  
  if (words.length >= 2) {
    // Take first 2-3 letters from each word
    const symbol = words
      .map(w => w.slice(0, Math.ceil(5 / words.length)))
      .join("")
      .toUpperCase()
      .slice(0, 5);
    return symbol;
  }
  
  // Single word - take first 4-5 letters
  return name.replace(/\s/g, "").toUpperCase().slice(0, 5);
}

// Generate a description
function generateDescription(keywords: string[]): string {
  const template = DESCRIPTIONS_TEMPLATES[Math.floor(Math.random() * DESCRIPTIONS_TEMPLATES.length)];
  const theme = keywords.length > 0 
    ? keywords.slice(0, 2).join(" ") 
    : "crypto";
  
  return template.replace("{theme}", theme);
}

// Generate a unique avatar URL using DiceBear (free, no API key needed)
function generateAvatarUrl(seed: string): string {
  // Use different DiceBear styles for variety
  const styles = [
    "bottts",        // Robot style
    "fun-emoji",     // Fun emoji style  
    "thumbs",        // Thumbs up characters
    "shapes",        // Abstract shapes
    "icons",         // Simple icons
  ];
  
  const style = styles[Math.floor(Math.random() * styles.length)];
  const backgroundColor = [
    "b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf",
    "a3e635", "22d3ee", "f472b6", "fb923c", "a78bfa"
  ];
  const randomBg = backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
  
  // DiceBear API v7 - free and unlimited
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(seed)}&backgroundColor=${randomBg}&size=256`;
}

export async function generateMemeBranding(
  userPrompt: string
): Promise<MemeBranding | GenerateError> {
  try {
    // Validate input
    if (!userPrompt || userPrompt.trim().length < 3) {
      return { error: "Please provide a more descriptive prompt (at least 3 characters)" };
    }

    if (userPrompt.length > 500) {
      return { error: "Prompt is too long. Please keep it under 500 characters" };
    }

    // Add a small delay to simulate generation (better UX)
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));

    // Extract keywords from prompt
    const keywords = extractKeywords(userPrompt);

    // Generate branding elements
    const name = generateTokenName(keywords);
    const symbol = generateSymbol(name);
    const description = generateDescription(keywords);
    
    // Generate unique avatar using the name as seed for consistency
    const uniqueSeed = `${name}-${symbol}-${Date.now()}`;
    const imageUrl = generateAvatarUrl(uniqueSeed);

    // Return complete branding
    return {
      name,
      symbol,
      description,
      imageUrl,
    };
  } catch (error) {
    console.error("Error generating meme branding:", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
