"use client"

import Image from "next/image";
import ReactMarkdown from 'react-markdown';

type Message = {
  type: 'user' | 'ai';
  content: string;
};

type MessageDisplayProps = {
  messages: Message[];
  isLoading: boolean;
  currentStreamingMessage: string;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
};

import { LoadingDots } from './LoadingDots';

export const MessageDisplay = ({ messages, isLoading, currentStreamingMessage, messagesEndRef }: MessageDisplayProps) => {
  return (
    <div className="overflow-y-auto flex-1 px-4 py-2 space-y-4" style={{ maxHeight: 'calc(100vh - 200px - 100px)' }}>
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`flex items-start p-3 rounded-lg ${message.type === 'user' ? 'bg-purple-700/30 backdrop-blur-sm border border-purple-500/30 ml-12' : 'bg-[#210E49]/30 backdrop-blur-sm border border-[#280E36]/30 mr-12'} max-w-[80%] my-2`}>
            {message.type === 'ai' && (
              <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center mr-3 flex-shrink-0">
                <Image src="/crown.svg" alt="LeBron" width={16} height={16} />
              </div>
            )}
            <div className={`text-white flex flex-col ${message.type === 'user' ? '' : ''}`}>
              <span className={`text-xs ${message.type === 'user' ? 'text-purple-300' : 'text-yellow-400'}`}>
                {message.type === 'user' ? 'You' : 'LeBron'}
              </span>
              <div className="markdown-content">
                <ReactMarkdown>
                  {message.content}
                </ReactMarkdown>
              </div>
            </div>
            {message.type === 'user' && (
              <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center ml-3 flex-shrink-0">
                <span className="text-white text-xs">You</span>
              </div>
            )}
          </div>
        </div>
      ))}
      
      {isLoading && <LoadingDots />}
      
      {currentStreamingMessage && (
        <div className="flex justify-start">
          <div className="flex items-start p-3 rounded-lg bg-[#210E49]/30 backdrop-blur-sm border border-[#280E36]/30 mr-12 max-w-[80%] my-2">
            <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center mr-3 flex-shrink-0">
              <Image src="/basketball.png" alt="LeBron" width={16} height={16} />
            </div>
            <div className="text-white flex flex-col">
              <span className="text-xs text-yellow-400">LeBron</span>
              <div className="markdown-content">
                <ReactMarkdown>
                  {currentStreamingMessage}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
