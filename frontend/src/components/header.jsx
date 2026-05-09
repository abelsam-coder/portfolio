import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const navItems = ['Home', 'Tech', 'Service', 'Projects', 'Testimony', 'Contact us'];

  return (
    <header className={`
      fixed top-0 w-full z-50 backdrop-blur-xl border-b rounded-b-3xl transition-all duration-300
      ${isDarkMode 
        ? 'bg-slate-900/80 border-blue-500/20' 
        : 'bg-white/70 border-blue-200/50'
      }
    `}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Search - Expands on focus */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`
                  pl-10 pr-4 py-2.5 rounded-full text-sm border 
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50
                  transition-all duration-300 ease-out
                  ${isSearchFocused ? 'w-80 shadow-lg shadow-blue-500/20' : 'w-52'}
                  ${isDarkMode 
                    ? 'bg-slate-800/60 border-slate-700 text-white placeholder-slate-400' 
                    : 'bg-slate-100/80 border-slate-200 text-slate-900 placeholder-slate-500'
                  }
                `}
              />
              <svg className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Nav Links */}
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className={`
                      px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                      hover:bg-blue-500/10 hover:text-blue-400
                      ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}
                    `}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle - Blue themed */}
            

            {/* CTA Button - Blue Gradient */}
            <a 
              href="#contact" 
              className="
                px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 
                text-white rounded-full text-sm font-semibold 
                hover:from-blue-500 hover:to-cyan-400 
                transition-all duration-300 
                shadow-lg shadow-blue-500/30 
                hover:shadow-xl hover:shadow-blue-500/40 
                hover:-translate-y-0.5 active:translate-y-0
              "
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              onClick={toggleTheme}
              className={`
                p-2 rounded-xl transition-colors
                ${isDarkMode ? 'text-blue-400' : 'text-slate-700'}
              `}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl ${isDarkMode ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-100'}`}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`
            md:hidden mt-2 p-5 rounded-3xl border shadow-2xl backdrop-blur-xl transition-all duration-300
            ${isDarkMode 
              ? 'bg-slate-900/95 border-slate-800' 
              : 'bg-white/95 border-slate-200'
            }
          `}>
            
            {/* Search */}
            <div className="relative mb-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className={`
                  w-full pl-10 pr-4 py-3 rounded-2xl text-sm border 
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50
                  ${isDarkMode 
                    ? 'bg-slate-800/60 border-slate-700 text-white placeholder-slate-400' 
                    : 'bg-slate-100/80 border-slate-200 text-slate-900 placeholder-slate-500'
                  }
                `}
              />
              <svg className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Nav Links */}
            <ul className="space-y-1 mb-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      block px-4 py-3 rounded-xl font-medium transition-all duration-200
                      hover:bg-blue-500/10 hover:text-blue-400
                      ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}
                    `}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="
                block w-full text-center px-5 py-3 
                bg-gradient-to-r from-blue-600 to-cyan-500 
                text-white rounded-2xl font-semibold
                shadow-lg shadow-blue-500/30
                hover:shadow-xl transition-all duration-300
              "
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;