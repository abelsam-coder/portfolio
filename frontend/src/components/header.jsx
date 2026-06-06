import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X,
  ArrowRight,
  Code2,
  // ✅ ADDED: Icons for navigation items
  Home,
  Cog,
  FolderKanban,
  MessageSquareQuote,
  Award,
  Mail
} from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isHovering, setIsHovering] = useState(null);

  // Navigation items with IDs, Icons, and 3D Gradient Colors
  const navItems = [
    { name: 'Home', id: 'home', icon: Home, gradient: 'from-blue-500 to-blue-700' },
    { name: 'Service', id: 'services', icon: Cog, gradient: 'from-violet-500 to-purple-700' },
    { name: 'Projects', id: 'projects', icon: FolderKanban, gradient: 'from-emerald-500 to-green-700' },
    { name: 'Testimony', id: 'testimony', icon: MessageSquareQuote, gradient: 'from-amber-400 to-orange-600' },
    { name: 'Certificate', id: 'certificate', icon: Award, gradient: 'from-pink-500 to-rose-700' },
    { name: 'Contact us', id: 'contact', icon: Mail, gradient: 'from-cyan-500 to-teal-700' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 100;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    setIsDark(true);
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleDarkMode = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 88;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // ✅ REUSABLE 3D ICON RENDERER
  const render3DIcon = (item, isActive) => (
    <div className={`
      relative w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
      bg-gradient-to-br ${item.gradient}
      transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
      ${isActive ? 'scale-110 shadow-lg' : 'scale-100 shadow-md'}
      ${isDark ? 'shadow-black/50' : 'shadow-black/20'}
    `}>
      {/* 3D Glass/Shine Effect Overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/40 via-white/5 to-transparent pointer-events-none" />
      <item.icon className="w-4 h-4 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
    </div>
  );

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 w-full 
      transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
      ${isScrolled 
        ? isDark 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40' 
          : 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl shadow-gray-200/50'
        : 'bg-transparent'
      }
    `}>
      
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px]">
          
          {/* LOGO SECTION */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="group flex items-center gap-4">
            <div className="relative overflow-hidden rounded-lg">
              <img src={logo} alt="Abel Samuel" className={`h-11 w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] group-hover:scale-110 group-hover:brightness-125 group-hover:rotate-3 ${isDark ? 'brightness-110 contrast-125' : ''}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] skew-x-12" />
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out ${isDark ? 'shadow-[0_0_30px_rgba(59,130,246,0.5)]' : 'shadow-[0_0_30px_rgba(59,130,246,0.3)]'}`} />
            </div>
            
            <div className={`h-10 w-px transition-all duration-500 ease-out ${isDark ? 'bg-gradient-to-b from-transparent via-gray-600 to-transparent group-hover:via-blue-400' : 'bg-gradient-to-b from-transparent via-gray-300 to-transparent group-hover:via-blue-400'}`} />
            
            <div className="hidden sm:flex flex-col justify-center">
              <h1 className={`text-lg font-bold tracking-tight leading-none mb-1 transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] ${isDark ? 'text-white group-hover:text-blue-400 group-hover:translate-x-1' : 'text-gray-900 group-hover:text-blue-600 group-hover:translate-x-1'}`}>
                Abel Samuel
              </h1>
              <p className={`text-xs font-medium uppercase tracking-[0.2em] flex items-center gap-1.5 transition-all duration-500 ease-out ${isDark ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-400 group-hover:text-gray-600'}`}>
                <Code2 className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                Developer
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeLink === item.name;
              const isItemHovering = isHovering === item.name;
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setIsHovering(item.name)}
                  onMouseLeave={() => setIsHovering(null)}
                  className={`
                    relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                    text-sm font-semibold tracking-wide
                    overflow-hidden cursor-pointer
                    transition-all duration-500 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]
                    transform hover:scale-105 active:scale-95
                    ${isActive 
                      ? isDark ? 'text-white' : 'text-gray-900'
                      : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  {/* Multi-layer background fill animation */}
                  <span className={`
                    absolute inset-0 rounded-xl
                    transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
                    ${isActive 
                      ? isDark ? 'bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-pink-600/20 backdrop-blur-md' : 'bg-gradient-to-r from-blue-50 to-purple-50'
                      : isDark ? (isItemHovering ? 'bg-white/10' : 'bg-white/0') : (isItemHovering ? 'bg-gray-50' : 'bg-transparent')
                    }
                  `} />
                  
                  <span className="relative flex items-center gap-2.5 z-10">
                    {/* ✅ ADDED: 3D Icon */}
                    {render3DIcon(item, isActive)}
                    
                    {item.name}
                    
                    {isActive && (
                      <ArrowRight className={`w-3.5 h-3.5 transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] ${isDark ? 'text-blue-400' : 'text-blue-600'} animate-pulse-slow`} />
                    )}
                  </span>

                  {isActive && (
                    <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-500 ease-out animate-pulse ${isDark ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]' : 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]'}`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-3">
            <button onClick={toggleDarkMode} onMouseEnter={() => setIsHovering('darkmode')} onMouseLeave={() => setIsHovering(null)} className={`relative p-3 rounded-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] transform hover:scale-110 active:scale-90 ${isDark ? 'hover:bg-white/10 text-yellow-400 hover:text-yellow-300' : 'hover:bg-gray-100 text-gray-700 hover:text-orange-500'}`} aria-label="Toggle dark mode">
              <span className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 ${isHovering === 'darkmode' ? 'opacity-100' : ''} ${isDark ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20' : 'bg-gradient-to-br from-orange-400/10 to-yellow-400/10'}`} />
              <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 w-5 h-5 transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}`} />
                <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] ${isDark ? 'opacity-0 -rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
              </div>
              <span className={`absolute inset-0 rounded-xl border-2 border-dashed transition-all duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${isDark ? 'border-yellow-400/40 opacity-100 rotate-45' : 'border-gray-300/0 opacity-0 rotate-0'}`} />
            </button>

            <button onClick={() => scrollToSection('contact')} onMouseEnter={() => setIsHovering('cta')} onMouseLeave={() => setIsHovering(null)} className="hidden md:flex relative items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500">
              <span className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] transition-transform duration-1000 ease-out ${isHovering === 'cta' ? 'translate-x-[100%]' : ''}`} />
              <span className="relative flex items-center gap-2 transition-transform duration-300">
                Hire Me
                <ArrowRight className={`w-4 h-4 transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] ${isHovering === 'cta' ? 'translate-x-1 translate-y-0' : ''}`} />
              </span>
            </button>

            <button onClick={toggleMobileMenu} onMouseEnter={() => setIsHovering('mobile')} onMouseLeave={() => setIsHovering(null)} className={`flex lg:hidden p-3 rounded-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] transform hover:scale-110 active:scale-90 ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-gray-900'}`} aria-label="Toggle menu">
              <span className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 ${isHovering === 'mobile' ? 'opacity-100' : ''} ${isDark ? 'bg-white/5' : 'bg-gray-100'}`} />
              <div className="relative w-6 h-6">
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} />
                <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] ${isMobileMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`lg:hidden overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] ${isMobileMenuOpen ? 'max-h-[700px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}>
        <div className={`mx-6 mt-2 rounded-2xl p-2 transition-all duration-500 delay-150 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${isDark ? 'bg-[#111]/98 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' : 'bg-white/98 backdrop-blur-xl border border-gray-200 shadow-2xl shadow-gray-200/50'}`}>
          <div className="space-y-1 py-2">
            {navItems.map((item, index) => {
              const isActive = activeLink === item.name;
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setIsHovering(`mobile-${item.name}`)}
                  onMouseLeave={() => setIsHovering(null)}
                  className={`
                    w-full flex items-center gap-4 px-4 py-3.5 rounded-xl
                    text-left font-semibold text-base
                    overflow-hidden relative
                    transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                    transform hover:translate-x-2 active:scale-[0.98]
                    ${isActive 
                      ? isDark ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white shadow-lg shadow-blue-500/20' : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 shadow-md'
                      : isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {/* ✅ ADDED: 3D Icon to Mobile Menu */}
                  {render3DIcon(item, isActive)}
                  
                  <span className="relative flex-1">{item.name}</span>
                  
                  {isActive && (
                    <ArrowRight className={`w-4 h-4 relative transition-all duration-500 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  )}
                </button>
              );
            })}
          </div>

          <div className={`px-2 pt-4 pb-2 border-t mt-3 transition-colors duration-300 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
            <button onClick={() => scrollToSection('contact')} onMouseEnter={() => setIsHovering('mobile-cta')} onMouseLeave={() => setIsHovering(null)} className="w-full relative flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30">
              <span className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] transition-transform duration-1000 ease-out ${isHovering === 'mobile-cta' ? 'translate-x-[100%]' : ''}`} />
              <span className="relative flex items-center gap-2">
                Get In Touch
                <ArrowRight className={`w-4 h-4 transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] ${isHovering === 'mobile-cta' ? 'translate-x-1' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
        ::selection { background-color: #3b82f6; color: white; }
        button:focus-visible, a:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; border-radius: 8px; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #4B5563, #374151); border-radius: 4px; transition: background 0.3s ease; }
        .dark ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #6B7280, #4B5563); }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #6B7280, #4B5563); }
        @media (hover: none) { button:active { -webkit-tap-highlight-color: transparent; } }
        .will-change-transform { will-change: transform; }
      `}</style>
    </header>
  );
};

export default Header;
