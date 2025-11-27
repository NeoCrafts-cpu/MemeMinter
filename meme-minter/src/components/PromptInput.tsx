"use client";

import { useState } from "react";
import { SparkleIcon, RocketIcon, WandIcon, SpinnerIcon } from "./Icons";

interface PromptInputProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

/**
 * PromptInput Component - Beautiful animated text input
 */
export function PromptInput({ onGenerate, isLoading }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const maxLength = 500;

  const handleSubmit = () => {
    if (prompt.trim().length >= 3 && !isLoading) {
      onGenerate(prompt.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const isValid = prompt.trim().length >= 3;

  return (
    <div className="w-full">
      <div className="relative group">
        {/* Animated gradient border */}
        <div className={`absolute -inset-0.5 bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 
                        rounded-2xl blur transition-all duration-500
                        ${isFocused ? 'opacity-100 animate-pulse-glow' : 'opacity-40'}`} />
        
        {/* Outer glow on focus */}
        {isFocused && (
          <div className="absolute -inset-2 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl animate-pulse" />
        )}
        
        {/* Input container */}
        <div className="relative glass rounded-2xl overflow-hidden">
          {/* Sparkle decoration */}
          <div className="absolute top-4 right-4 opacity-50 animate-float text-yellow-400" style={{ animationDuration: '4s' }}>
            <SparkleIcon size={24} />
          </div>
          
          {/* Rocket decoration */}
          <div className="absolute top-4 right-14 opacity-30 animate-float text-purple-400" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <RocketIcon size={20} />
          </div>
          
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value.slice(0, maxLength))}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Describe your memecoin idea...

Examples:
• A sassy cat that judges your crypto trades
• A pizza-loving dog on a rocket to Mars
• A diamond-handed gorilla who never sells"
            className="w-full h-44 px-6 py-5 bg-transparent text-white placeholder-gray-500 
                       resize-none focus:outline-none text-lg leading-relaxed"
            disabled={isLoading}
          />
          
          {/* Bottom bar */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-white/5 bg-black/20">
            <div className="flex items-center gap-4">
              {/* Character counter with animation */}
              <div className="relative">
                <svg className="w-10 h-10 -rotate-90">
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="rgba(168,85,247,0.2)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke={prompt.length > maxLength * 0.9 ? "#ef4444" : "#a855f7"}
                    strokeWidth="3"
                    strokeDasharray={`${(prompt.length / maxLength) * 100} 100`}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                </svg>
                <span className={`absolute inset-0 flex items-center justify-center text-xs font-mono
                                ${prompt.length > maxLength * 0.9 ? "text-red-400" : "text-gray-400"}`}>
                  {maxLength - prompt.length}
                </span>
              </div>
              
              {/* Keyboard hint */}
              <span className="text-xs text-gray-600 hidden sm:flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white/5 rounded-md text-gray-400 border border-white/10">Ctrl</kbd>
                <span>+</span>
                <kbd className="px-2 py-1 bg-white/5 rounded-md text-gray-400 border border-white/10">Enter</kbd>
              </span>
            </div>
            
            {/* Generate button */}
            <button
              onClick={handleSubmit}
              disabled={!isValid || isLoading}
              className="relative group/btn px-6 py-3 font-bold text-white rounded-xl
                         transition-all duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         hover-lift overflow-hidden"
            >
              {/* Button gradient background */}
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 
                              group-hover/btn:from-purple-500 group-hover/btn:to-pink-500 transition-all" />
              
              {/* Shimmer */}
              {!isLoading && isValid && (
                <div className="absolute inset-0 animate-shimmer" />
              )}
              
              {/* Content */}
              <span className="relative flex items-center gap-2">
                {isLoading ? (
                  <>
                    <SpinnerIcon size={20} />
                    <span>Creating Magic...</span>
                  </>
                ) : (
                  <>
                    <WandIcon size={20} className="group-hover/btn:animate-bounce" />
                    <span>Generate</span>
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
