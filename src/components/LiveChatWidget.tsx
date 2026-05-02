import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  time: string;
}

export const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hi there! 👋 How can we help you today? Leave a message or contact us directly at 9699658462.',
      isUser: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      text: message.trim(),
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, newUserMsg]);
    setMessage('');

    // Simulate auto-reply
    setTimeout(() => {
      const autoReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for reaching out! Our team will get back to you shortly. For immediate assistance, please call/WhatsApp 9699658462.',
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, autoReply]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 md:right-8 z-50 w-[350px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold text-xl shadow-inner shadow-orange-900/20">
                  S
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base leading-tight">Shrinath IT Solutions</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-orange-100 text-xs font-medium">We reply quickly</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 bg-slate-900 overflow-y-auto p-4 space-y-4">
              {chatHistory.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      msg.isUser 
                        ? 'bg-orange-500 text-white rounded-tr-sm' 
                        : 'bg-slate-800 text-slate-100 rounded-tl-sm border border-slate-700/50'
                    }`}
                  >
                    <p className="text-[14px] leading-relaxed break-words whitespace-pre-wrap">{msg.text}</p>
                    <span className={`text-[10px] mt-1 block ${msg.isUser ? 'text-orange-200 text-right' : 'text-slate-400 text-left'}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSendMessage}
              className="p-3 bg-slate-800/80 border-t border-slate-700/50 flex gap-2 items-end backdrop-blur-md"
            >
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 max-h-[100px] min-h-[44px] bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 resize-none transition-shadow"
                rows={1}
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="w-11 h-11 flex-shrink-0 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-xl flex items-center justify-center transition-colors mb-0.5"
                aria-label="Send message"
              >
                <Send size={18} className={message.trim() ? 'ml-1' : ''} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-lg hover:scale-[1.05] transition-all duration-300 group ${
          isOpen ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-[0_8px_30px_rgba(249,115,22,0.4)]'
        }`}
        aria-label="Toggle live chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Ping indicator - only show when closed */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex w-3 h-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
          </span>
        )}
      </motion.button>
    </>
  );
};
