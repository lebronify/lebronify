"use client"

import { useState, useRef, useEffect } from "react";
import { Header } from "../components/Header";
import { ChatSection } from "../components/ChatSection";
import { GlobalStyles } from "../components/GlobalStyles";

type Message = {
  type: 'user' | 'ai';
  content: string;
};

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStreamingMessage, setCurrentStreamingMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, currentStreamingMessage]);

  const generateNBAResponse = async (userInput: string) => {
    setIsLoading(true);
    setCurrentStreamingMessage("");
    
    try {
      const response = await fetch('/api/lebronify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userInput }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const reader = response.body?.getReader();
      if (!reader) throw new Error('Response body is not readable');
      
      const decoder = new TextDecoder();
      let done = false;
      let fullResponse = "";
      
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.substring(6);
            
            if (data === '[DONE]') {
              break;
            }
            
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                fullResponse += parsed.content;
                setCurrentStreamingMessage(fullResponse);
              }
            } catch (e) {
              console.error('Error parsing JSON:', e);
            }
          }
        }
      }
      if (fullResponse.trim() !== "") {
        setMessages(prevMessages => [...prevMessages, { type: 'ai', content: fullResponse }]);
      }
      
    } catch (error) {
      console.error('Error getting LeBron response:', error);
      setMessages(prevMessages => [...prevMessages, { 
        type: 'ai', 
        content: "Sorry, I'm having trouble connecting with my basketball instincts right now. Try again later!" 
      }]);
    } finally {
      setIsLoading(false);
      setInput("");
      setCurrentStreamingMessage("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    setMessages(prevMessages => [...prevMessages, { type: 'user', content: input }]);
    generateNBAResponse(input);
  };

  return (
    <div className="bg-gradient-to-b from-[#1A1035] to-[#0A0612] h-screen flex flex-col overflow-hidden">
      <GlobalStyles />
      <main className="h-full w-full flex flex-col items-center p-3 max-h-screen">
        <Header 
          messages={messages} 
          input={input} 
          setInput={setInput} 
          handleSubmit={handleSubmit} 
          isLoading={isLoading} 
        />

        <ChatSection 
          messages={messages} 
          isLoading={isLoading} 
          currentStreamingMessage={currentStreamingMessage} 
          messagesEndRef={messagesEndRef} 
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
