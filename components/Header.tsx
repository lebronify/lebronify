"use client"

import Image from "next/image";
import { ChatInput } from "./ChatInput";

interface Message {
  type: 'user' | 'ai';
  content: string;
}

type HeaderProps = {
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
};

export const Header = ({ messages, input, setInput, handleSubmit, isLoading }: HeaderProps) => {
  return (
    <section className="relative w-full max-w-4xl bg-radial-[at_-40%_-40%] from-[#000000] via-[#210E49] to-[#FFB200] to-100% rounded-t-xl p-4 border-t-1 border-l-1 border-r-1 border-[#280E36] border-opacity-20 flex items-center" style={{ height: messages.length > 0 ? '200px' : '320px', overflow: 'visible' }}>
      <div className="absolute top-0 right-0" style={{ 
        width: messages.length > 0 ? '250px' : '450px', 
        height: messages.length > 0 ? '250px' : '450px',
        transform: 'translateX(10%)',
        top: '0',
        bottom: 'auto',
        maxHeight: '100%'
      }}>
        <Image
          src="/swag2.png"
          alt="Lebronify"
          width={messages.length > 0 ? 250 : 450}
          height={messages.length > 0 ? 250 : 450}
          className="object-contain h-full w-full"
          style={{ objectPosition: 'top right' }}
          priority
        />
        <div 
          className="absolute left-0 right-0" 
          style={{
            top: '50%',
            height: '80%',
            background: 'linear-gradient(to bottom, transparent, #FFB200)',
            filter: 'blur(50px)',
            opacity: 0.5,
            transform: 'translateY(0%)',
            borderRadius: '90%',
            zIndex: -1
          }}
        />
      </div>
      
      <div className="relative z-10 flex-1">
        <h1 className={`${messages.length > 0 ? 'text-2xl' : 'text-6xl'} font-bold mb-1 text-white ml-4 tracking-tighter mb-4`}>Lebronify</h1>
        <p className={`${messages.length > 0 ? 'text-sm' : 'text-xl'} mb-2 max-w-xs font-semibold text-white ml-4`}>
          Think Like The King — Translate Any Problem into NBA Terms.
        </p>
        
        {messages.length === 0 && (
          <ChatInput 
            input={input} 
            setInput={setInput} 
            handleSubmit={handleSubmit} 
            isLoading={isLoading} 
          />
        )}
      </div>
    </section>
  );
};
