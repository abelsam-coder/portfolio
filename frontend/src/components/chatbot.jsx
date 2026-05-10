import { useState, useEffect, useRef, useCallback } from 'react';
import api from '../../api/api';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Abel's AI Assistant 🤖 How can I help you today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatSize, setChatSize] = useState({ width: 400, height: 520 });
  const [isResizing, setIsResizing] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Minimum and maximum dimensions
  const MIN_SIZE = { width: 320, height: 400 };
  const MAX_SIZE = { width: 600, height: 700 };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    }

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Resize handler
  const handleResizeStart = useCallback((e) => {
    e.preventDefault();
    setIsResizing(true);
    
    const startX = e.clientX || (e.touches && e.touches[0].clientX);
    const startY = e.clientY || (e.touches && e.touches[0].clientY);
    const startWidth = chatSize.width;
    const startHeight = chatSize.height;

    const handleResizeMove = (moveEvent) => {
      const clientX = moveEvent.clientX || (moveEvent.touches && moveEvent.touches[0].clientX);
      const clientY = moveEvent.clientY || (moveEvent.touches && moveEvent.touches[0].clientY);
      
      const newWidth = Math.min(MAX_SIZE.width, Math.max(MIN_SIZE.width, startWidth + (clientX - startX)));
      const newHeight = Math.min(MAX_SIZE.height, Math.max(MIN_SIZE.height, startHeight + (clientY - startY)));
      
      setChatSize({ width: newWidth, height: newHeight });
    };

    const handleResizeEnd = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
      document.removeEventListener('touchmove', handleResizeMove);
      document.removeEventListener('touchend', handleResizeEnd);
    };

    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
    document.addEventListener('touchmove', handleResizeMove);
    document.addEventListener('touchend', handleResizeEnd);
  }, [chatSize]);

  // Quick reply suggestions
  const quickReplies = [
    '💼 Hire Abel',
    '📧 Contact Info',
    '💻 Skills & Tech',
    '🚀 Projects'
  ];

  // API call function
  const sendMessageToAPI = async (userMessage) => {
    try {
      const response = await api.post('/chat/', {
        message: userMessage,
        conversation_history: messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        }))
      });
      
      return response.data.response || response.data.message || response.data.reply;
    } catch (error) {
      console.error('Chat API Error:', error);
      // Fallback response if API fails
      return getFallbackResponse(userMessage);
    }
  };

  // Fallback responses in case API fails
  const getFallbackResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('hire') || msg.includes('work') || msg.includes('project')) {
      return "Great! You can hire Abel for your project. He's available for freelance and full-time opportunities. Would you like me to open the contact form? 📝";
    }
    if (msg.includes('contact') || msg.includes('email') || msg.includes('phone')) {
      return "You can reach Abel at:\n📧 abelsamuel@email.com\n📱 +251 9XX XXX XXX\n📍 Addis Ababa, Ethiopia\n\nOr fill out the contact form! ✨";
    }
    if (msg.includes('skill') || msg.includes('tech') || msg.includes('stack')) {
      return "Abel's core skills include:\n\n• Full Stack Development (React, Django, Flask)\n• Mobile Apps (React Native)\n• Cybersecurity & Pentesting\n• Machine Learning\n• API Development\n\n3+ years of experience! 💪";
    }
    if (msg.includes('project') || msg.includes('portfolio')) {
      return "Abel has worked on amazing projects:\n\n• Samri Collection (E-Commerce)\n• Ethioglobal Digital (+ AI Chatbot!)\n• Nani Cafe & Restaurant\n• Online Exam Management System\n• E-Library Platform\n• Dodai Platform (Rebuilt)\n\nCheck them out! 🎯";
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello there! 👋 Welcome to Abel Samuel's portfolio. How can I assist you today?";
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('rate')) {
      return "Pricing varies based on project complexity:\n\n• Small Projects: $500 - $2,000\n• Medium Projects: $2,000 - $5,000\n• Large Projects: $5,000 - $10,000+\n\nLet's discuss your specific needs! 💰";
    }
    if (msg.includes('experience') || msg.includes('year') || msg.includes('exp')) {
      return "Abel has 3+ years of professional experience in:\n\n✅ Web Development\n✅ Mobile App Development\n✅ Cybersecurity\n✅ Machine Learning\n✅ API Development\n\nWorking with real clients and companies! 🏢";
    }
    
    return "Thanks for your message! 🙏 For detailed inquiries, please use the contact form or email directly at abelsamuel@email.com. Abel will get back to you ASAP!";
  };

  const handleSend = async (text = inputValue) => {
    // ✅ FIX: Ensure text is always a string before calling .trim()
    const messageText = typeof text === 'string' ? text : String(text || '');
    
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Call API instead of using hardcoded responses
      const botReply = await sendMessageToAPI(messageText);
      
      const botResponse = {
        id: Date.now() + 1,
        text: botReply,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message to chat
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please try again or use the contact form. 😔",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Reset size button handler
  const resetSize = () => {
    setChatSize({ width: 400, height: 520 });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      
      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatContainerRef}
          className={`
            absolute bottom-20 right-0 rounded-3xl overflow-hidden backdrop-blur-xl border shadow-2xl
            flex flex-col transform transition-all duration-300 origin-bottom-right
            ${isDarkMode 
              ? 'bg-slate-900/95 border-slate-700 shadow-black/50' 
              : 'bg-white/95 border-slate-200 shadow-slate-300/50'
            }
            ${isResizing ? 'select-none' : ''}
          `}
          style={{ 
            width: `${chatSize.width}px`, 
            height: `${chatSize.height}px`,
            minWidth: `${MIN_SIZE.width}px`,
            minHeight: `${MIN_SIZE.height}px`,
            maxWidth: `${MAX_SIZE.width}px`,
            maxHeight: `${MAX_SIZE.height}px`
          }}
        >
          
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-blue-600 to-cyan-500 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                
                {/* Avatar */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-blue-600" />
                </div>

                {/* Info */}
                <div>
                  <h4 className="text-white font-bold text-sm">Abel's AI Assistant</h4>
                  <p className="text-white/80 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online • Usually replies instantly
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Reset Size Button */}
                <button
                  onClick={resetSize}
                  className="p-2 rounded-xl hover:bg-white/10 transition-colors text-white"
                  title="Reset Size"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-white/10 transition-colors text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Size Indicator */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-[10px] text-white/60 font-mono">
              {Math.round(chatSize.width)} × {Math.round(chatSize.height)}
            </div>
          </div>

          {/* Messages Area */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
            isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50/50'
          }`}>
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`
                  max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                  ${message.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-br-md'
                    : isDarkMode
                      ? 'bg-slate-700 text-slate-200 rounded-bl-md'
                      : 'bg-white text-slate-700 rounded-bl-md shadow-sm border border-slate-100'
                  }
                  ${message.isError ? 'border-red-400 border' : ''}
                `}
                style={{ whiteSpace: 'pre-line' }}>
                  {message.text}
                  
                  {/* Time */}
                  <p className={`
                    text-[10px] mt-2 pt-1 border-t
                    ${message.sender === 'user' ? 'border-white/30 text-white/70' : isDarkMode ? 'border-slate-600 text-slate-500' : 'border-slate-200 text-slate-400'}
                  `}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`
                  px-4 py-3 rounded-2xl rounded-bl-md
                  ${isDarkMode ? 'bg-slate-700' : 'bg-white shadow-sm border border-slate-100'}
                `}>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className={`px-4 py-2 border-t flex-shrink-0 ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(reply)}
                  className={`
                    flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 hover:scale-105
                    ${isDarkMode 
                      ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600'
                    }
                  `}
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t flex-shrink-0 ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="flex items-center gap-2">
              
              {/* Input Field */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  // ✅ FIXED: Now correctly extracts the value string
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  disabled={isTyping}
                  className={`
                    w-full pl-4 pr-11 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all
                    ${isDarkMode 
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' 
                      : 'bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-400'
                    }
                    ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                />
                
                {/* Emoji Button */}
                <button className={`
                  absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg transition-colors
                  ${isDarkMode ? 'text-slate-500 hover:text-yellow-400' : 'text-slate-400 hover:text-yellow-500'}
                `} disabled={isTyping}>
                  😊
                </button>
              </div>

              {/* Send Button */}
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isTyping}
                className="
                  p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 
                  text-white hover:from-blue-500 hover:to-cyan-400
                  transition-all duration-300 hover:scale-105 active:scale-95
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                  shadow-lg shadow-blue-500/25
                "
              >
                {isTyping ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Disclaimer */}
            <p className={`
              text-[10px] text-center mt-2
              ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}
            `}>
              Powered by AI • For real inquiries, please use the contact form
            </p>
          </div>

          {/* Resize Handle - Bottom Right Corner */}
          <div
            onMouseDown={handleResizeStart}
            onTouchStart={handleResizeStart}
            className={`
              absolute bottom-0 right-0 w-6 h-6 cursor-se-resize
              flex items-center justify-center
              hover:bg-blue-500/20 rounded-tl-lg transition-colors
              ${isResizing ? 'bg-blue-500/30' : ''}
            `}
            title="Drag to resize"
          >
            <svg 
              className={`w-4 h-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} ${isResizing ? 'text-blue-400' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20h16M4 20V4M4 20l16-16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 20l6-6M18 20l2-2" opacity="0.5" />
            </svg>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative group w-16 h-16 rounded-full p-0.5
          bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600
          animate-gradient-bg shadow-2xl shadow-blue-500/40
          hover:shadow-blue-500/60 hover:scale-110 active:scale-95
          transition-all duration-300
          ${isOpen ? 'rotate-90 scale-90 opacity-0 pointer-events-none' : 'rotate-0 scale-100 opacity-100'}
        `}
      >
        
        {/* Inner Circle */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center relative overflow-hidden">
          
          {/* Pulse Rings */}
          <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30" />
          
          {/* Icon */}
          {isOpen ? (
            <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          )}

          {/* Notification Badge - Show when closed */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-slate-900">
              AI
            </span>
          )}
        </div>
      </button>

      {/* Tooltip - Show when chat is closed */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className={`
            px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-lg
            ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'}
          `}>
            Chat with AI Assistant 💬
            <div className={`
              absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45
              ${isDarkMode ? 'bg-slate-800' : 'bg-white'}
            `} style={{ boxShadow: '2px -2px 4px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        @keyframes gradient-bg {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 3s ease infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Prevent text selection during resize */
        .select-none {
          user-select: none;
          -webkit-user-select: none;
        }
        
        /* Custom cursor for resize */
        .cursor-se-resize {
          cursor: se-resize;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;