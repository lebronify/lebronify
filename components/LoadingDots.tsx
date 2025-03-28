"use client"

import { useState, useEffect } from "react";

export const LoadingDots = () => {
  const [dots, setDots] = useState(1);
  
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev < 3 ? prev + 1 : 1);
    }, 300);
    
    return () => {
      clearInterval(dotsInterval);
    };
  }, []);
  
  return (
    <div className="flex items-start p-3 rounded-lg bg-[#210E49]/30 backdrop-blur-sm border border-[#280E36]/30 max-w-[80%] my-2">
      <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center mr-3 flex-shrink-0">
        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
      </div>
      <div className="text-white flex flex-col">
        <span className="text-xs text-yellow-400">LeBron is thinking</span>
        <span>{"...".substring(0, dots)}</span>
      </div>
    </div>
  );
};
