"use client"

import Image from "next/image";

export const WelcomeScreen = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
      <div className="animate-bounce mb-4">
        <Image src="/basketball.png" alt="Basketball" width={50} height={50} />
      </div>
      <h2 className="text-xl text-white mb-2">Ready to Lebronify Your Problems</h2>
      <p className="text-gray-300 max-w-md">Ask any question above and get an NBA-inspired response from The King himself.</p>
    </div>
  );
};
