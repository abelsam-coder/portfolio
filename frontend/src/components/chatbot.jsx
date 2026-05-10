import { useState, useEffect, useRef, useCallback } from 'react';
import api from '../../api/api';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm **AB Nexus**, your intelligent assistant built by **Abel Samuel**. How can I help you today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatSize, setChatSize] = useState({ width: 400, height: 540 });
  const [isResizing, setIsResizing] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Dimensions
  const MIN_SIZE = { width: 340, height: 420 };
  const MAX_SIZE = { width: 900, height: 700 };
  const DEFAULT_SIZE = { width: 400, height: 540 };

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Resize handler
  const handleResizeStart = useCallback((e) => {
    if (isMaximized) return;
    
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
  }, [chatSize, isMaximized]);

  // Quick replies
  const quickReplies = ['💼 Hire Abel', '📧 Contact Info', '💻 Skills & Tech', '🚀 Projects'];

  // API call
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
      return getFallbackResponse(userMessage);
    }
  };

  // Fallback responses
  const getFallbackResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('hire') || msg.includes('work')) return "🚀 **Great choice!** Abel is available for freelance and full-time opportunities.\n\nHe specializes in:\n• Full-Stack Web Development\n• Mobile App Development\n• Cybersecurity Solutions\n• AI/ML Integration";
    if (msg.includes('contact') || msg.includes('email')) return "📬 **Contact Information**\n\n📧 Email: abelsamuel@email.com\n📱 Phone: +251 9XX XXX XXX\n📍 Location: Addis Ababa, Ethiopia";
    if (msg.includes('skill') || msg.includes('tech')) return "⚡ **Technical Stack:**\n\n• React, Next.js, TypeScript\n• Python (Django, Flask)\n• React Native\n• Kali Linux, Pentesting\n• TensorFlow, AWS, Docker";
    if (msg.includes('project') || msg.includes('portfolio')) return "🎯 **Featured Projects:**\n\n1️⃣ Samri Collection (E-Commerce)\n2️⃣ Ethioglobal Digital (+AI)\n3️⃣ Nani Cafe Management\n4️⃣ Online Exam System\n5️⃣ E-Library Platform";
    return "Thanks! For detailed inquiries, please use the contact form or email abelsamuel@email.com 😊";
  };

  const handleSend = async (text = inputValue) => {
    const messageText = typeof text === 'string' ? text : String(text || '');
    if (!messageText.trim()) return;

    const userMessage = { id: Date.now(), text: messageText, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const botReply = await sendMessageToAPI(messageText);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botReply, sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Sorry, having connection issues. Try again later! 😔", sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), isError: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleMinimize = () => setIsMinimized(true);
  const handleMaximize = () => setIsMaximized(!isMaximized);
  const handleClose = () => { setIsOpen(false); setIsMinimized(false); setIsMaximized(false); };
  const resetSize = () => { setChatSize(DEFAULT_SIZE); setIsMaximized(false); };

  const getWindowStyles = () => {
    if (isMaximized) return { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', borderRadius: '0', maxWidth: 'none', maxHeight: 'none' };
    return { width: `${chatSize.width}px`, height: `${chatSize.height}px`, minWidth: `${MIN_SIZE.width}px`, minHeight: `${MIN_SIZE.height}px`, maxWidth: isMaximized ? 'none' : `${MAX_SIZE.width}px`, maxHeight: isMaximized ? 'none' : `${MAX_SIZE.height}px` };
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      
      {/* ===== CHAT WINDOW WITH GLOW EFFECTS ===== */}
      {isOpen && !isMinimized && (
        <div 
          ref={chatContainerRef}
          className="
            fixed bg-white border border-gray-200 flex flex-col transform transition-all duration-300 ease-out backdrop-blur-xl z-[101]
          "
          style={{
            ...getWindowStyles(),
            ...(isMaximized ? {} : { bottom: '80px', right: '24px' }),
            borderRadius: isMaximized ? '0' : '20px',
            boxShadow: isMaximized 
              ? '0 0 100px rgba(59, 130, 246, 0.15), 0 0 200px rgba(6, 182, 212, 0.1)' 
              : '0 25px 80px rgba(59, 130, 246, 0.12), 0 8px 32px rgba(0, 0, 0, 0.08)'
          }}
        >
          
          {/* ===== OUTER GLOW LAYER ===== */}
          <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-blue-400/30 via-cyan-300/20 to-purple-400/30 blur-md pointer-events-none"></div>
          
          {/* ===== HEADER WITH GLOW ===== */}
          <div className="relative overflow-hidden group/header" style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 50%, #06b6d4 100%)',
            boxShadow: '0 4px 30px rgba(37, 99, 235, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}>
            
            {/* Header Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent opacity-0 group-hover/header:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated Particles in Header */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-1 h-1 bg-white/60 rounded-full animate-float-particle" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}></div>
              ))}
            </div>

            <div className="relative z-10 px-4 py-3 flex items-center justify-between">
              
              {/* Left: Logo with Glow */}
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9">
                  {/* Logo Glow */}
                  <div className="absolute inset-0 bg-cyan-400/50 rounded-lg blur-lg animate-pulse-slow"></div>
                  
                  <svg viewBox="0 0 36 36" className="w-full h-full relative z-10">
                    <defs>
                      <filter id="logoGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path d="M18 2L32 10v16L18 34L4 26V10L18 2Z" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1" filter="url(#logoGlow)"/>
                    <path d="M18 6L28 12v12L18 30L8 24V12L18 6Z" fill="white" fillOpacity="0.95"/>
                    <text x="18" y="21" fontSize="14" fontWeight="bold" fill="#2563eb" textAnchor="middle">N</text>
                  </svg>
                </div>

                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide drop-shadow-sm">AB Nexus</h4>
                  <p className="text-white/70 text-[11px]">Built by Abel Samuel</p>
                </div>
              </div>

              {/* Right: Window Controls with Glow */}
              <div className="flex items-center gap-0.5 bg-black/20 rounded-lg p-0.5 backdrop-blur-sm">
                
                {/* Minimize */}
                <button onClick={handleMinimize} className="window-control-btn group/min" title="Minimize">
                  <span className="absolute inset-0 rounded bg-white/0 group-hover/min:bg-white/20 transition-colors"></span>
                  <svg className="w-3.5 h-[2px] text-white/70 group-hover/min:text-white transition-all duration-200" fill="currentColor" viewBox="0 0 16 2"><rect x="0" y="0" width="16" height="2" rx="1"/></svg>
                </button>

                {/* Maximize */}
                <button onClick={handleMaximize} className="window-control-btn group/max" title={isMaximized ? "Restore Down" : "Maximize"}>
                  <span className="absolute inset-0 rounded bg-white/0 group-hover/max:bg-white/20 transition-colors"></span>
                  {isMaximized ? (
                    <svg className="w-3 h-3 text-white/70 group-hover/max:text-white transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 12 12"><rect x="2" y="6" width="7" height="5" rx="0.5"/><rect x="5" y="2" width="5" height="5" rx="0.5"/></svg>
                  ) : (
                    <svg className="w-3 h-3 text-white/70 group-hover/max:text-white transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 12 12"><rect x="1.5" y="1.5" width="9" height="9" rx="1"/></svg>
                  )}
                </button>

                {/* Close with Red Glow */}
                <button onClick={handleClose} className="window-control-btn group/close relative overflow-hidden" title="Close">
                  <span className="absolute inset-0 rounded bg-red-500/0 group-hover/close:bg-red-500/80 transition-all duration-200"></span>
                  <svg className={`w-3.5 h-[2px] text-white/70 group-hover/close:text-white transition-all duration-200 ${isMaximized ? '' : 'rotate-45 origin-center'}`} fill="currentColor" viewBox="0 0 14 2"><rect x="0" y="0" width="14" height="2" rx="1" transform="rotate(45 7 1)"/><rect x="0" y="0" width="14" height="2" rx="1" transform="rotate(-45 7 1)"/></svg>
                  {/* Close Button Glow */}
                  <div className="absolute inset-0 bg-red-500 opacity-0 blur-lg group-hover/close:opacity-75 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 via-white to-blue-50/20">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed relative
                  ${message.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-br-md'
                    : 'bg-white text-gray-700 rounded-bl-md shadow-sm border border-gray-100'
                  }
                  ${message.isError ? 'border-red-300 bg-red-50 text-red-700' : ''}
                `}
                style={{ 
                  boxShadow: message.sender === 'user' 
                    ? '0 4px 20px rgba(37, 99, 235, 0.25), 0 0 40px rgba(6, 182, 212, 0.15)' 
                    : '0 4px 15px rgba(0, 0, 0, 0.05)'
                }}
                >
                  <div dangerouslySetInnerHTML={{ __html: message.text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>').replace(/\n/g, '<br/>') }}/>
                  <p className={`text-[10px] mt-2 pt-1.5 border-t ${message.sender === 'user' ? 'border-white/30 text-white/70' : 'border-gray-100 text-gray-400'}`}>{message.time}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator with Glow */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white shadow-md border border-gray-100 relative"
                     style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)' }}>
                  <div className="absolute inset-0 bg-blue-400/10 rounded-2xl animate-pulse-slow"></div>
                  <div className="relative z-10 flex gap-1.5">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce shadow-sm shadow-blue-400/50" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce shadow-sm shadow-blue-400/50" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce shadow-sm shadow-blue-400/50" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/50 flex-shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {quickReplies.map((reply, index) => (
                <button key={index} onClick={() => handleSend(reply)} className="
                  quick-reply-btn
                  px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap
                  bg-white border border-gray-200 text-gray-600
                  hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:border-blue-300 hover:text-blue-700
                  hover:shadow-lg hover:shadow-blue-200/40
                  transition-all duration-300 hover:scale-105 active:scale-95
                ">
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area with Glow */}
          <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0 relative">
            {/* Input Area Background Glow */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-100/30 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 flex items-center gap-2.5">
              <div className="flex-1 relative">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress}
                  placeholder="Message AB Nexus..." disabled={isTyping} className="
                    input-field w-full pl-4 pr-11 py-3 rounded-xl text-sm
                    bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400
                    focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:shadow-lg focus:shadow-blue-200/30
                    disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
                  "/>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-gray-400 hover:text-yellow-500 transition-colors disabled:opacity-50">😊</button>
              </div>

              {/* Send Button with Strong Glow */}
              <button onClick={() => handleSend()} disabled={!inputValue.trim() || isTyping} className="
                send-button relative p-3 rounded-xl overflow-hidden
                bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 
                text-white hover:from-blue-500 hover:to-cyan-400
                transition-all duration-300 hover:scale-110 active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
              ">
                {/* Button Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 translate-x-[-100%] group-hover/send-button:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                
                {/* Outer Glow Layer */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 rounded-xl blur-md opacity-0 group-hover/send-button:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10">
                  {isTyping ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                  )}
                </span>
              </button>
            </div>

            <p className="text-[10px] text-center mt-2 text-gray-400">AB Nexus AI • Secure • Encrypted</p>
          </div>

          {/* Resize Handle */}
          {!isMaximized && (
            <div onMouseDown={handleResizeStart} onTouchStart={handleResizeStart}
              className="absolute bottom-0 right-0 w-8 h-8 cursor-se-resize flex items-center justify-center group rounded-tl-xl hover:bg-blue-50 transition-colors" title="Drag to resize">
              <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/20 rounded-tl-xl transition-colors"></div>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20h16M4 20V4M4 20l16-16"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 20l6-6M18 20l2-2" opacity="0.4"/></svg>
            </div>
          )}
        </div>
      )}

      {/* ===== MINIMIZED STATE WITH GLOW ===== */}
      {isOpen && isMinimized && (
        <div className="fixed bottom-6 right-6 z-[101] bg-white border border-gray-200 rounded-2xl px-5 py-3 flex items-center gap-4 backdrop-blur-xl animate-slide-up"
             style={{ boxShadow: '0 10px 40px rgba(59, 130, 246, 0.15), 0 0 60px rgba(6, 182, 212, 0.1)' }}>
          {/* Minimized Bar Glow */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-sm pointer-events-none"></div>
          
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-cyan-400/40 rounded-lg blur-md animate-pulse-slow"></div>
              <svg viewBox="0 0 36 36" className="w-full h-full relative z-10">
                <defs><linearGradient id="minGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#60a5fa"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient></defs>
                <path d="M18 2L32 10v16L18 34L4 26V10L18 2Z" fill="url(#minGrad)" stroke="#2563eb" strokeWidth="1.5"/>
                <text x="18" y="21" fontSize="13" fontWeight="bold" fill="white" textAnchor="middle">N</text>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">AB Nexus</p>
              <p className="text-[10px] text-gray-400">Click to expand</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1 ml-auto">
            <button onClick={() => setIsMinimized(false)} className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition-all duration-200 hover:shadow-md hover:shadow-blue-200/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><polyline points="18 15 12 9 21 6"/></svg>
            </button>
            <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-500 transition-all duration-200 hover:shadow-md hover:shadow-red-200/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* ===== FLOATING BUTTON - SUPER GLOW EFFECTS ===== */}
      {!isOpen && (
        <>
          {/* Outer Ambient Glow Rings */}
          <div className="group absolute bottom-6 right-6 z-[100]">
            {/* Ring 1 - Large soft glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-cyan-400/15 to-purple-500/20 rounded-[90px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Ring 2 - Medium glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/25 via-blue-500/20 to-purple-400/15 rounded-[70px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            
            {/* Ring 3 - Sharp inner glow */}
            <div className="absolute -inset-1 bg-gradient-to-bl from-blue-400/30 to-cyan-400/30 rounded-[55px] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>

            {/* Main Button Container */}
            <button
              onClick={() => { setIsOpen(true); setIsMinimized(false); }}
              className="
                relative w-[72px] h-[72px]
                transition-all duration-500 ease-out
                hover:scale-115 active:scale-95
                hover:-translate-y-3
                group/btn
              "
              aria-label="Open AB Nexus AI"
            >
              {/* Main Shape with Gradient & Shadow */}
              <div className="
                absolute inset-0
                bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600
                [clip-path:_polygon(12%_0%,_88%_0%,_100%_12%,_100%_88%,_88%_100%,_12%_100%,_0%_88%,_0%_12%)]
                group-hover/btn:[clip-path:_polygon(8%_0%,_92%_0%,_100%_8%,_100%_92%,_92%_100%,_8%_100%,_0%_92%,_0%_8%)]
                shadow-[0_8px_35px_rgba(37,99,235,0.4)]
                group-hover/btn:shadow-[0_15px_50px_rgba(37,99,235,0.5),_0_0_80px_rgba(6,182,212,0.3)]
                transition-all duration-500
              ">
                {/* Inner Highlight */}
                <div className="absolute inset-[2px] rounded-[inherit] bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                  <span className="text-white font-black text-xl tracking-tight leading-none drop-shadow-sm">AB</span>
                  <span className="text-white/90 font-bold text-[9px] tracking-widest uppercase mt-0.5">Nexus</span>
                  
                  {/* Status Dot with Glow */}
                  <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white/40 animate-pulse shadow-md shadow-emerald-400/50"></span>
                </div>

                {/* Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
              </div>

              {/* Notification Badge with Glow */}
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-md flex items-center justify-center text-[10px] font-bold text-white border-2 border-white shadow-lg shadow-red-500/50 animate-bounce-slow">
                AI
              </span>
            </button>
          </div>

          {/* Tooltip with Glow */}
          <div className="absolute bottom-28 right-0 opacity-0 group-hover:opacity-100 group-hover:bottom-32 transition-all duration-400 pointer-events-none delay-150 z-[99]">
            <div className="px-5 py-3 rounded-xl bg-gray-900 text-white shadow-2xl shadow-black/30 relative"
                 style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(6, 182, 212, 0.15)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-sm"></div>
              <div className="relative z-10 flex items-center gap-2 font-semibold">
                <span>💬 Chat with</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">AB Nexus</span>
              </div>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rotate-45 bg-gray-900" style={{ boxShadow: '4px -4px 8px rgba(0,0,0,0.25)' }}></div>
            </div>
          </div>
        </>
      )}

      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(15px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          33% { transform: translate(10px, -15px) scale(1.2); opacity: 1; }
          66% { transform: translate(-10px, 10px) scale(0.8); opacity: 0.4; }
        }
        .animate-float-particle { animation: float-particle 4s ease-in-out infinite; }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        
        /* Window Control Buttons */
        .window-control-btn {
          @apply w-7 h-6 rounded flex items-center justify-center;
          @apply hover:bg-white/20 transition-all duration-200 cursor-pointer;
        }
        
        /* Quick Reply Buttons */
        .quick-reply-btn {
          @apply transition-all duration-200 active:scale-95;
        }
        
        /* Input Field */
        .input-field {
          @apply focus:outline-none transition-all duration-300;
        }
        
        /* Send Button */
        .send-button {
          @apply shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40;
        }
        
        /* Scrollbar Hide */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ChatBot;