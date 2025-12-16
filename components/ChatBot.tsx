
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize AI
// The API key is obtained from the environment variable as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are a helpful and professional AI assistant for Superb Precision.
Superb Precision is a global leader in high-tolerance manufacturing, specializing in advanced micro-mechanics.
We serve these industries:
1. Automobile (Shafts, Valves, Engine Housings, EV Components)
2. Electronics (Pins, Connectors, Sensor Housings, Heat Sinks)
3. Aerospace (Lightweight Alloys, Hydraulic Parts, Satellite Systems)
4. Medical (Dental Implants, Orthopedic Screws, Surgical Instruments - ISO 13485 Certified)
5. Micro-Mechanics (Gears, Micro-Axles, Pivot Pins)

Key Capabilities:
- Swiss-Type CNC Machining (Tornos Swiss GT 13/6)
- Cleanroom Manufacturing (ISO Class 7 & 8)
- Sub-Micron Tolerance (up to ±0.5 microns)
- Advanced Quality Control (Digital Microscopes 180x, 5-axis Metrology)

Location: Plot No 4, Nimblak, Nagapur MIDC, Ahilyanagar (Ahmednagar) Maharashtra 414111, India.
Contact: contact@superbprecision.in, +91 9422222410.

Leadership:
- Founders: Mrs. Smita Suhas Satbhai, Mrs. Archana Sandeep Sali, Mrs. Managal Dadaram Sapre.
- Experts: Mr. Sanchay Sali (Manufacturing Head), Dr. Swaroopkumar Magar (Clinical), Dr. Deepak Vikhe (Patent), Mr. Swwapnil Satbhai (Finance).

Your goal is to answer visitor questions concisely and professionally.
If a user asks for a quote or specific project pricing, politely encourage them to use the "Contact Us" form or "Get in Touch" button on the website.
Always maintain a helpful and engineering-focused tone.`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! Welcome to Superb Precision. How can I assist you with our manufacturing capabilities today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
        inputRef.current.focus();
    }
  }, [isOpen]);

  // Initialize chat session lazily or on mount
  useEffect(() => {
      if (!chatSessionRef.current) {
          try {
            chatSessionRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                }
            });
          } catch (e) {
              console.error("Failed to initialize chat", e);
          }
      }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
        if (!chatSessionRef.current) {
             chatSessionRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                }
            });
        }
        
        const response: GenerateContentResponse = await chatSessionRef.current.sendMessage({ message: userMessage });
        const text = response.text || "I apologize, but I couldn't generate a response. Please try again.";
        setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm currently experiencing technical difficulties. Please contact our team directly via the Contact form." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <>
        {/* Floating Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed bottom-6 right-6 z-[100] bg-accent-green text-white p-4 rounded-full shadow-lg hover:bg-steel-blue transition-all duration-300 transform hover:scale-110 flex items-center justify-center group ${isOpen ? 'rotate-90' : ''}`}
            aria-label={isOpen ? "Close Chat" : "Open Chat"}
        >
            {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
                <>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </>
            )}
        </button>

        {/* Chat Window */}
        {isOpen && (
            <div className="fixed bottom-24 right-4 md:right-6 z-[100] w-[90vw] md:w-96 max-h-[70vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-[fadeIn_0.3s_ease-out]">
                {/* Header */}
                <div className="bg-steel-blue p-4 flex items-center justify-between shadow-md">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-accent-green border border-white/20">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-steel-blue rounded-full"></div>
                        </div>
                        <div>
                             <h3 className="font-bold text-white text-base">Superb AI Assistant</h3>
                             <p className="text-xs text-gray-300">Ask about our capabilities</p>
                        </div>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50/80 backdrop-blur-sm min-h-[300px]">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                msg.role === 'user' 
                                ? 'bg-steel-blue text-white rounded-br-none' 
                                : 'bg-white text-gray-700 border border-gray-200 rounded-bl-none'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex justify-start mb-4">
                            <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex space-x-1.5 items-center">
                                <span className="text-xs text-gray-400 mr-2">Thinking</span>
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-white border-t border-gray-100">
                    <form onSubmit={handleSubmit} className="flex items-center space-x-2 relative">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                            className="flex-1 p-3 pr-10 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-green/50 text-sm text-steel-blue placeholder-gray-400 transition-all"
                        />
                        <button 
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="absolute right-2 p-1.5 bg-accent-green text-white rounded-lg hover:bg-steel-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </button>
                    </form>
                    <div className="text-center mt-2">
                        <p className="text-[10px] text-gray-400">Powered by Superb Precision AI</p>
                    </div>
                </div>
            </div>
        )}
      </>
  );
};

export default ChatBot;
