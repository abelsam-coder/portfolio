import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X,
  ArrowRight,
  Code2  // ✅ Changed from Zap to Code2
} from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  // DEFAULT TO DARK MODE ON FIRST LOAD
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isHovering, setIsHovering] = useState(null);

  // Navigation items with IDs
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Service', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimony', id: 'testimony' },
    { name: 'Certificate', id: 'certificate' },
    { name: 'Contact us', id: 'contact' }
  ];

  // Handle scroll effect & active link detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active link based on scroll position
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
    
    // Initial call to set active state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Initialize dark mode on mount - ALWAYS DARK FIRST
  useEffect(() => {
    // Force dark mode on first load
    document.documentElement.classList.add('dark');
    setIsDark(true);
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 88; // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

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
          
          {/* ===== LOGO SECTION ===== */}
          <a 
            href="#home" 
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('home'); 
            }} 
            className="group flex items-center gap-4"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={logo}
                alt="Abel Samuel"
                className={`
                  h-11 w-auto object-contain
                  transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                  group-hover:scale-110 group-hover:brightness-125 group-hover:rotate-3
                  ${isDark ? 'brightness-110 contrast-125' : ''}
                `}
              />
              {/* Enhanced shine effect */}
              <div className="
                absolute inset-0 
                bg-gradient-to-r from-transparent via-white/40 to-transparent
                translate-x-[-100%] group-hover:translate-x-[100%]
                transition-transform duration-1000 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]
                skew-x-12
              " />
              
              {/* Glow effect */}
              <div className={`
                absolute inset-0 rounded-lg
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500 ease-out
                ${isDark 
                  ? 'shadow-[0_0_30px_rgba(59,130,246,0.5)]' 
                  : 'shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                }
              `} />
            </div>
            
            {/* Divider */}
            <div className={`h-10 w-px transition-all duration-500 ease-out ${isDark ? 'bg-gradient-to-b from-transparent via-gray-600 to-transparent group-hover:via-blue-400' : 'bg-gradient-to-b from-transparent via-gray-300 to-transparent group-hover:via-blue-400'}`} />
            
            {/* Name & Title */}
            <div className="hidden sm:flex flex-col justify-center">
              <h1 className={`
                text-lg font-bold tracking-tight leading-none mb-1
                transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                ${isDark ? 'text-white group-hover:text-blue-400 group-hover:translate-x-1' : 'text-gray-900 group-hover:text-blue-600 group-hover:translate-x-1'}
              `}>
                Abel Samuel
              </h1>
              <p className={`
                text-xs font-medium uppercase tracking-[0.2em] flex items-center gap-1.5
                transition-all duration-500 ease-out
                ${isDark ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-400 group-hover:text-gray-600'}
              `}>
                {/* ✅ CHANGED: Code2 icon instead of Zap */}
                <Code2 className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                Developer
              </p>
            </div>
          </a>

          {/* ===== DESKTOP NAVIGATION ===== */}
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
                    relative px-5 py-2.5 rounded-xl
                    text-sm font-semibold tracking-wide
                    overflow-hidden cursor-pointer
                    
                    /* Smooth cubic-bezier for buttery transitions */
                    transition-all duration-500 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]
                    
                    /* Scale transform on hover */
                    transform hover:scale-105 active:scale-95
                    
                    ${isActive 
                      ? isDark 
                        ? 'text-white' 
                        : 'text-blue-600'
                      : isDark 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  {/* Multi-layer background fill animation */}
                  <span className={`
                    absolute inset-0 rounded-xl
                    transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
                    
                    ${isActive 
                      ? isDark 
                        ? 'bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-pink-600/30 backdrop-blur-md' 
                        : 'bg-gradient-to-r from-blue-50 to-purple-50'
                      : isDark
                        ? isItemHovering ? 'bg-white/10' : 'bg-white/0'
                        : isItemHovering ? 'bg-gray-50' : 'bg-transparent'
                    }
                  `} />
                  
                  {/* Animated gradient border on hover */}
                  <span className={`
                    absolute inset-0 rounded-xl
                    opacity-0 hover:opacity-100
                    transition-opacity duration-500 ease-out
                    ${isDark 
                      ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm' 
                      : 'bg-gradient-to-r from-blue-200/50 via-purple-200/50 to-pink-200/50 blur-sm'
                    }
                  `} />
                  
                  {/* Shimmer effect - slower and smoother */}
                  <span className="
                    absolute inset-0 rounded-xl
                    bg-gradient-to-r from-transparent via-white/15 to-transparent
                    translate-x-[-100%] hover:translate-x-[100%]
                    transition-transform duration-1000 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]
                  " />
                  
                  {/* Text content with subtle movement */}
                  <span className="relative flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
                    {item.name}
                    
                    {isActive && (
                      <ArrowRight className={`
                        w-3.5 h-3.5
                        transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                        ${isDark ? 'text-blue-400' : 'text-blue-600'}
                        animate-pulse-slow
                      `} />
                    )}
                  </span>

                  {/* Active indicator dot with glow */}
                  {isActive && (
                    <span className={`
                      absolute bottom-1.5 left-1/2 -translate-x-1/2
                      w-1.5 h-1.5 rounded-full
                      transition-all duration-500 ease-out
                      animate-pulse
                      ${isDark 
                        ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]' 
                        : 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]'
                      }
                    `} />
                  )}

                  {/* Hover ripple effect */}
                  <span className={`
                    absolute inset-0 rounded-xl
                    scale-0 opacity-0
                    transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                    ${isItemHovering && !isActive ? 'scale-100 opacity-100' : ''}
                    ${isDark ? 'bg-white/5' : 'bg-gray-100/50'}
                  `} />
                </button>
              );
            })}
          </div>

          {/* ===== RIGHT SIDE ACTIONS ===== */}
          <div className="flex items-center gap-3">
            
            {/* Dark Mode Toggle - Enhanced */}
            <button
              onClick={toggleDarkMode}
              onMouseEnter={() => setIsHovering('darkmode')}
              onMouseLeave={() => setIsHovering(null)}
              className={`
                relative p-3 rounded-xl
                overflow-hidden
                
                /* Ultra-smooth spring-like transition */
                transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                
                transform hover:scale-110 active:scale-90
                
                ${isDark 
                  ? 'hover:bg-white/10 text-yellow-400 hover:text-yellow-300' 
                  : 'hover:bg-gray-100 text-gray-700 hover:text-orange-500'
                }
              `}
              aria-label="Toggle dark mode"
            >
              {/* Background glow on hover */}
              <span className={`
                absolute inset-0 rounded-xl
                opacity-0 transition-opacity duration-500
                ${isHovering === 'darkmode' ? 'opacity-100' : ''}
                ${isDark 
                  ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20' 
                  : 'bg-gradient-to-br from-orange-400/10 to-yellow-400/10'
                }
              `} />

              {/* Icon container with smooth rotation */}
              <div className="relative w-5 h-5">
                <Sun className={`
                  absolute inset-0 w-5 h-5
                  transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                  ${isDark 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 rotate-180 scale-0'
                  }
                `} />
                
                <Moon className={`
                  absolute inset-0 w-5 h-5
                  transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                  ${isDark 
                    ? 'opacity-0 -rotate-180 scale-0' 
                    : 'opacity-100 rotate-0 scale-100'
                  }
                `} />
              </div>

              {/* Orbiting decoration - smoother rotation */}
              <span className={`
                absolute inset-0 rounded-xl
                border-2 border-dashed
                transition-all duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
                ${isDark 
                  ? 'border-yellow-400/40 opacity-100 rotate-45' 
                  : 'border-gray-300/0 opacity-0 rotate-0'
                }
              `} />
            </button>

            {/* CTA Button - Premium feel */}
            <button 
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => setIsHovering('cta')}
              onMouseLeave={() => setIsHovering(null)}
              className="
                hidden md:flex relative items-center gap-2 px-7 py-3 
                rounded-xl text-sm font-bold
                overflow-hidden
                
                /* Premium spring transition */
                transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                
                transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0
                
                /* Gradient background */
                bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                text-white 
                
                /* Enhanced shadows */
                shadow-lg shadow-blue-500/30 
                hover:shadow-2xl hover:shadow-blue-500/40 
                hover:from-blue-500 hover:via-purple-500 hover:to-pink-500
              "
            >
              {/* Animated shimmer overlay */}
              <span className={`
                absolute inset-0 
                bg-gradient-to-r from-transparent via-white/30 to-transparent
                translate-x-[-100%]
                transition-transform duration-1000 ease-out
                ${isHovering === 'cta' ? 'translate-x-[100%]' : ''}
              `} />
              
              {/* Button content */}
              <span className="relative flex items-center gap-2 transition-transform duration-300">
                Hire Me
                <ArrowRight className={`
                  w-4 h-4 
                  transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                  ${isHovering === 'cta' ? 'translate-x-1 translate-y-0' : ''}
                `} />
              </span>
            </button>

            {/* Mobile Menu Toggle - ONLY ON MOBILE */}
            <button
              onClick={toggleMobileMenu}
              onMouseEnter={() => setIsHovering('mobile')}
              onMouseLeave={() => setIsHovering(null)}
              className={`
                flex lg:hidden p-3 rounded-xl
                overflow-hidden
                transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                transform hover:scale-110 active:scale-90
                
                ${isDark 
                  ? 'hover:bg-white/10 text-white' 
                  : 'hover:bg-gray-100 text-gray-900'
                }
              `}
              aria-label="Toggle menu"
            >
              {/* Background pulse on hover */}
              <span className={`
                absolute inset-0 rounded-xl
                opacity-0 transition-opacity duration-300
                ${isHovering === 'mobile' ? 'opacity-100' : ''}
                ${isDark ? 'bg-white/5' : 'bg-gray-100'}
              `} />

              <div className="relative w-6 h-6">
                <X className={`
                  absolute inset-0 w-6 h-6
                  transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                  ${isMobileMenuOpen 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 -rotate-180 scale-0'
                  }
                `} />
                
                <Menu className={`
                  absolute inset-0 w-6 h-6
                  transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                  ${isMobileMenuOpen 
                    ? 'opacity-0 rotate-180 scale-0' 
                    : 'opacity-100 rotate-0 scale-100'
                  }
                `} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU - Enhanced Animation ===== */}
      <div className={`
        lg:hidden overflow-hidden
        
        /* Smooth height animation with spring physics */
        transition-all duration-700 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
        
        ${isMobileMenuOpen ? 'max-h-[700px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}
      `}>
        <div className={`
          mx-6 mt-2 rounded-2xl p-2
          
          /* Staggered entrance animation */
          transition-all duration-500 delay-150
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          
          ${isDark 
            ? 'bg-[#111]/98 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' 
            : 'bg-white/98 backdrop-blur-xl border border-gray-200 shadow-2xl shadow-gray-200/50'
          }
        `}>
          {/* Nav Items with staggered animation */}
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
                    w-full flex items-center justify-between px-4 py-3.5 rounded-xl
                    text-left font-semibold text-base
                    overflow-hidden
                    relative
                    
                    /* Smooth spring transition */
                    transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                    
                    transform hover:translate-x-2 active:scale-[0.98]
                  
                    ${isActive 
                      ? isDark 
                        ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white shadow-lg shadow-blue-500/20' 
                        : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 shadow-md'
                      : isDark 
                        ? 'text-gray-400 hover:text-white hover:bg-white/10' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                >
                  {/* Hover background slide */}
                  <span className={`
                    absolute inset-0 rounded-xl
                    transition-all duration-500 ease-out
                    ${isHovering === `mobile-${item.name}` && !isActive 
                      ? isDark ? 'bg-white/5' : 'bg-gray-50' 
                      : ''
                    }
                  `} />
                  
                  <span className="relative flex items-center gap-3">
                    {item.name}
                    
                    {isActive && (
                      <span className={`
                        w-2 h-2 rounded-full
                        transition-all duration-500
                        ${isDark 
                          ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse' 
                          : 'bg-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.6)] animate-pulse'
                        }
                      `} />
                    )}
                  </span>
                  
                  {/* Arrow indicator on hover */}
                  {isHovering === `mobile-${item.name}` && !isActive && (
                    <ArrowRight className={`
                      w-4 h-4 relative
                      transition-all duration-300
                      ${isDark ? 'text-gray-500' : 'text-gray-400'}
                    `} />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA in mobile menu - Enhanced */}
          <div className={`px-2 pt-4 pb-2 border-t mt-3 transition-colors duration-300 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
            <button 
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => setIsHovering('mobile-cta')}
              onMouseLeave={() => setIsHovering(null)}
              className="
                w-full relative flex items-center justify-center gap-2 py-4 rounded-xl
                font-bold text-sm
                overflow-hidden
                
                transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                transform hover:scale-[1.02] active:scale-[0.98]
                
                bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                text-white 
                shadow-lg shadow-blue-500/25
                hover:shadow-xl hover:shadow-blue-500/30
              "
            >
              {/* Shimmer effect */}
              <span className={`
                absolute inset-0 
                bg-gradient-to-r from-transparent via-white/25 to-transparent
                translate-x-[-100%]
                transition-transform duration-1000 ease-out
                ${isHovering === 'mobile-cta' ? 'translate-x-[100%]' : ''}
              `} />
              
              <span className="relative flex items-center gap-2">
                Get In Touch
                <ArrowRight className={`
                  w-4 h-4 
                  transition-all duration-500 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]
                  ${isHovering === 'mobile-cta' ? 'translate-x-1' : ''}
                `} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== CUSTOM ANIMATIONS ===== */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background-color: #3b82f6;
          color: white;
        }

        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          border-radius: 8px;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #4B5563, #374151);
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .dark ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6B7280, #4B5563);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #6B7280, #4B5563);
        }

        /* Remove default button tap highlight on mobile */
        @media (hover: none) {
          button:active {
            -webkit-tap-highlight-color: transparent;
          }
        }

        /* Performance optimization for animations */
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </header>
  );
};

export default Header;
