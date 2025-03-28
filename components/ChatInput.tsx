"use client"

import { useState } from "react";

type ChatInputProps = {
  input: string;
  setInput: (input: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
};

export const ChatInput = ({ input, setInput, handleSubmit, isLoading }: ChatInputProps) => {
  return (
    <form onSubmit={handleSubmit} className="p-3 border-t border-[#280E36]/30 flex items-center backdrop-blur-xl bg-black/10 scale-100 hover:scale-101 hover:bg-black/20 text-gray-900 rounded-full px-4 py-2 shadow-lg border-2 border-[#FFFFFF]/10 m-3 transition duration-300 ease-in-out relative group overflow-hidden">
      <input
        type="text"
        value={isLoading ? "" : input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask anything..."
        className="flex-1 outline-none text-gray-200 bg-transparent"
        disabled={isLoading}
      />
      <button 
        type="submit"
        className={`${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-purple-400/70 hover:bg-purple-700'} backdrop-blur-xl text-white px-4 py-2 rounded-full ml-2 transition flex items-center`}
        disabled={isLoading}
      >
        <span>Go</span>
        <span className="ml-1">🏀</span>
      </button>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
        <div className="absolute inset-[-2px] rounded-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 via-yellow-400/30 to-purple-600/30 animate-border-flow"></div>
        </div>
      </div>
    </form>
  );
};
