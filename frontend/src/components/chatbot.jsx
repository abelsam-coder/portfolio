import { useState, useEffect, useRef } from 'react';
import api from '../../api/api';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! ✨ I'm **Nexus AI**, Abel's personal assistant.\n\nAsk me about skills, projects, or how to connect!",
      sender: 'bot',
      time: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const messagesEndRef = useRef(null);

  // Detect Dark Mode
  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Quick Actions
  const quickActions = [
    { icon: '💼', label: 'Hire Me', action: 'hire' },
    { icon: '📧', label: 'Contact', action: 'email' },
    { icon: '⚡', label: 'Skills', action: 'skills' },
    { icon: '🚀', label: 'Projects', action: 'projects' }
  ];

  // API Call
  const sendMessageToAPI = async (msg) => {
    try {
      const res = await api.post('/chat/', { message: msg });
      return res.data.response || res.data.message || res.data.reply;
    } catch (e) {
      return getFallbackResponse(msg);
    }
  };

  // Smart Responses
  const getFallbackResponse = (msg) => {
    const m = msg.toLowerCase();
    if (m.includes('hire') || m.includes('work')) {
      return "**Let's Work Together!** 🤝\n\nAbel is available for:\n• Full-time positions\n• Freelance projects\n• Remote collaborations";
    }
    if (m.includes('email') || m.includes('contact')) {
      return "**Get in Touch** 📬\n\n**Email:** abelsamuel841@email.com\n**Phone:** +251 957576652";
    }
    if (m.includes('skill') || m.includes('tech')) {
      return "**Tech Stack** ⚡\n\n**Frontend:** React, Next.js\n**Backend:** Python, Django\n**Mobile:** React Native";
    }
    if (m.includes('project')) {
      return "**Featured Projects** 🎯\n\n1. Samri Collection\n2. Ethioglobal Digital\n3. Nani Cafe System\n4. Online Exam Platform";
    }
    if (m.includes('hello') || m.includes('hi')) {
      return "Hello! 👋✨\n\nI'm **Nexus AI** - Abel's intelligent assistant.";
    }
    return "Interesting! 😊 Let me connect you with Abel for more details.";
  };

  const handleSend = async (text = inputValue) => {
    const msg = typeof text === 'string' ? text : String(text || '');
    if (!msg.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), text: msg, sender: 'user', time: new Date() }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const reply = await sendMessageToAPI(msg);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: reply, sender: 'bot', time: new Date() }]);
    } catch (e) {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Oops! Something went wrong 😅", sender: 'bot', time: new Date(), isError: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickAction = (action) => {
    const actions = { 
      hire: "I'd like to hire Abel for a project", 
      email: "How can I contact Abel?", 
      skills: "What are Abel's technical skills?", 
      projects: "Show me Abel's portfolio" 
    };
    handleSend(actions[action]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { 
      e.preventDefault(); 
      handleSend(); 
    }
  };

  // Format time
  const fmtTime = (d) => new Date(d).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Helper function for message bubble styles
  const getMessageBubbleClass = (msg) => {
    const baseClass = "px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed transition-all duration-200";
    
    if (msg.isError) {
      return `${baseClass} ${isDark ? 'bg-red-900/20 border border-red-500/30 text-red-300' : 'bg-red-50 border border-red-200 text-red-600'}`;
    }
    
    if (msg.sender === 'user') {
      return `${baseClass} ${isDark ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20' : 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20'} rounded-tr-md`;
    }
    
    return `${baseClass} ${isDark ? 'bg-white/[0.06] backdrop-blur-sm text-gray-100 border border-white/[0.08] shadow-sm rounded-tl-md' : 'bg-white text-gray-800 border border-gray-100 shadow-md shadow-gray-200/50 rounded-tl-md'}`;
  };

  // Helper for timestamp class
  const getTimeStampClass = (sender) => {
    const baseClass = "block text-[10px] mt-2 pt-2 border-t opacity-40 font-medium";
    
    if (sender === 'user') {
      return `${baseClass} border-white/20 text-white/60`;
    }
    
    return `${baseClass} ${isDark ? 'border-white/[0.06] text-gray-500' : 'border-gray-100 text-gray-400'}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      
      {/* ===== MAIN CHAT WINDOW ===== */}
      {isOpen && (
        <div 
          className={`
            fixed bottom-6 right-6 w-[420px] max-w-[calc(100vw-3rem)] h-[640px] max-h-[calc(100vh-6rem)]
            rounded-[28px] overflow-hidden flex flex-col
            transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-4 duration-500
            ${isDark ? 'shadow-2xl shadow-black/50' : 'shadow-2xl shadow-gray-300/50'}
          `}
          style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(15,15,25,0.95) 0%, rgba(10,10,20,0.98) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)',
            backdropFilter: 'blur(20px)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
          }}
        >
          
          {/* ===== HEADER ===== */}
          <div 
            className="relative px-6 py-5 flex items-center justify-between shrink-0 overflow-hidden"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(79,70,229,0.1) 100%)'
                : 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.06) 100%)',
              borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.05)'
            }}
          >
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-20 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
            
            {/* Left Side */}
            <div className="relative flex items-center gap-3.5">
              <div className="relative">
                <div className={`
                  w-12 h-12 rounded-2xl flex items-center justify-center text-xl
                  shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300
                  ${isDark 
                    ? 'bg-gradient-to-br from-violet-600 to-purple-700 shadow-violet-500/30' 
                    : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/30'
                  }
                `}>
                  🤖
                </div>
                
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-gray-900"></span>
                </span>
              </div>

              <div>
                <h3 className={`text-base font-bold tracking-tight flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Nexus AI
                  <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wider ${isDark ? 'bg-violet-500/20 text-violet-300' : 'bg-indigo-100 text-indigo-600'}`}>
                    Online
                  </span>
                </h3>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Abel's Assistant • Responds instantly
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className={`relative p-2.5 rounded-xl transition-all duration-200 group ${isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-700'}`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ===== MESSAGES AREA ===== */}
          <div className={`
            flex-1 overflow-y-auto px-5 py-4 space-y-4
            ${isDark ? '' : ''}
          `}
          style={{ 
            background: isDark 
              ? 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.03) 0%, transparent 70%)'
              : 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.03) 0%, transparent 70%)'
          }}
          >
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                
                {/* Avatar */}
                <div className={`
                  w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-auto text-sm shadow-md
                  ${msg.sender === 'user'
                    ? (isDark ? 'bg-gradient-to-br from-blue-600 to-cyan-600 shadow-blue-500/20' : 'bg-gradient-to-br from-blue-500 to-indigo-500 shadow-blue-500/20')
                    : (isDark ? 'bg-gradient-to-br from-violet-600/80 to-purple-600/80 shadow-purple-500/20' : 'bg-gradient-to-br from-violet-500 to-purple-500 shadow-violet-500/20')
                  }
                `}>
                  {msg.sender === 'user' ? '👤' : '🤖'}
                </div>

                {/* Message Bubble */}
                <div className="max-w-[75%] group">
                  <div className={getMessageBubbleClass(msg)}>
                    <div dangerouslySetInnerHTML={{ 
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                        .replace(/\n/g, '<br/>')
                    }}/>
                    
                    <span className={getTimeStampClass(msg.sender)}>
                      {fmtTime(msg.time)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm shadow-md ${isDark ? 'bg-gradient-to-br from-violet-600/60 to-purple-600/60' : 'bg-gradient-to-br from-violet-400 to-purple-500'}`}>
                  🤖
                </div>
                <div className={`px-5 py-3.5 rounded-2xl rounded-tl-md ${isDark ? 'bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]' : 'bg-white border border-gray-100 shadow-md'}`}>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-violet-400' : 'bg-violet-500'}`} style={{animationDelay: '0ms'}}></span>
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-purple-400' : 'bg-purple-500'}`} style={{animationDelay: '150ms'}}></span>
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-indigo-400' : 'bg-indigo-500'}`} style={{animationDelay: '300ms'}}></span>
                    <span className={`ml-2 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ===== QUICK ACTIONS ===== */}
          <div className={`px-5 py-3.5 shrink-0 ${isDark ? 'border-t border-white/[0.04]' : 'border-t border-gray-100'}`}>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {quickActions.map((qa, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickAction(qa.action)}
                  className={`
                    group flex items-center gap-2 px-4 py-2.5 rounded-full
                    text-xs font-semibold whitespace-nowrap
                    transition-all duration-300 cursor-pointer
                    hover:scale-105 active:scale-95
                    ${isDark 
                      ? 'bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:bg-white/[0.08] hover:border-white/[0.15]'
                      : 'bg-gray-50 border border-gray-200 text-gray-600 hover:bg-white hover:border-gray-300 hover:shadow-md'
                    }
                  `}
                >
                  <span className="text-base transition-transform duration-200 group-hover:scale-125">{qa.icon}</span>
                  <span>{qa.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ===== INPUT AREA ===== */}
          <div className={`p-5 pt-3 shrink-0 ${isDark ? 'border-t border-white/[0.04]' : 'border-t border-gray-100'}`}>
            
            <div className={`
              relative flex items-end gap-2.5 p-2 rounded-2xl transition-all duration-300
              ${isFocused 
                ? (isDark ? 'bg-white/[0.06] ring-2 ring-violet-500/30 shadow-lg shadow-violet-500/10' : 'bg-white ring-2 ring-indigo-500/20 shadow-xl shadow-indigo-500/10')
                : (isDark ? 'bg-white/[0.03] ring-1 ring-white/[0.06]' : 'bg-gray-50 ring-1 ring-gray-200')
              }
            `}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Type your message..."
                disabled={isTyping}
                className={`flex-1 px-4 py-3 bg-transparent text-[14px] outline-none placeholder:text-gray-400 disabled:opacity-50 ${isDark ? 'text-white' : 'text-gray-800'}`}
              />

              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isTyping}
                className={`
                  p-3 rounded-xl transition-all duration-300
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none
                  active:scale-90
                  ${(!inputValue.trim() || isTyping)
                    ? (isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-200 text-gray-400')
                    : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-110 hover:rotate-3'
                  }
                `}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className={`flex items-center justify-center gap-1.5 mt-3 text-[11px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>End-to-end encrypted</span>
            </div>
          </div>
        </div>
      )}

      {/* ===== FLOATING TRIGGER BUTTON ===== */}
      {!isOpen && (
        <div className="relative group">
          {/* Outer glow */}
          <div className={`absolute -inset-4 rounded-[28px] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 blur-xl transition-opacity duration-500`}></div>

          {/* Middle ring */}
          <div className={`absolute -inset-1.5 rounded-[22px] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-500 to-indigo-500 transition-opacity duration-300`}></div>

          {/* Main button */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              relative w-[64px] h-[64px]
              rounded-[20px]
              bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700
              text-white
              shadow-2xl shadow-violet-500/40
              transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3
              transition-all duration-500 ease-out overflow-hidden
            "
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-y-full group-hover:translate-y-[-100%] transition-transform duration-700"></div>
            
            {/* Icon */}
            <div className="relative z-10 absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl mb-0.5">💬</span>
              <span className="text-[9px] font-bold tracking-wider opacity-90">AI</span>
            </div>

            {/* Notification dot */}
            <span className="absolute top-2 right-2 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white/30 shadow-lg shadow-emerald-500/50">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
            </span>
          </button>

          {/* Tooltip */}
          <div className={`
            absolute bottom-full right-0 mb-4 px-5 py-2.5 rounded-2xl whitespace-nowrap
            opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0
            transition-all duration-300 pointer-events-none z-20
            ${isDark ? 'bg-gray-900/95 backdrop-blur-xl text-white border border-white/10 shadow-2xl' : 'bg-gray-900/95 backdrop-blur-xl text-white border border-white/10 shadow-2xl'}
          `}>
            <div className="flex items-center gap-2.5 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Chat with 
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-bold">AI</span>
            </div>
            
            <div className={`absolute top-full right-6 w-3 h-3 rotate-45 ${isDark ? 'bg-gray-900/95 border-r border-b border-white/10' : 'bg-gray-900/95 border-r border-b border-white/10'}`}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;