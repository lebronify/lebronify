"use client"

import { ChatInput } from "./ChatInput";
import { MessageDisplay } from "./MessageDisplay";
import { WelcomeScreen } from "./WelcomeScreen";

type Message = {
  type: 'user' | 'ai';
  content: string;
};

type ChatSectionProps = {
  messages: Message[];
  isLoading: boolean;
  currentStreamingMessage: string;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  input: string;
  setInput: (input: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

export const ChatSection = ({ 
  messages, 
  isLoading, 
  currentStreamingMessage, 
  messagesEndRef,
  input,
  setInput,
  handleSubmit
}: ChatSectionProps) => {
  return (
    <section className="w-full max-w-4xl bg-white/3 backdrop-blur-md rounded-b-xl overflow-hidden border-t-1 border-[#FFFFFF]/30 flex flex-col flex-1 mb-2 shadow-[inset_0_1px_80px_0_rgba(255,255,255,0.1)]">
      {messages.length === 0 ? (
        <WelcomeScreen />
      ) : (
        <>
          <MessageDisplay 
            messages={messages} 
            isLoading={isLoading} 
            currentStreamingMessage={currentStreamingMessage} 
            messagesEndRef={messagesEndRef} 
          />
          
          {messages.length > 0 && (
            <ChatInput 
              input={input} 
              setInput={setInput} 
              handleSubmit={handleSubmit} 
              isLoading={isLoading} 
            />
          )}
        </>
      )}
    </section>
  );
};
