import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  
  // Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  // Refs for search
  const searchRef = useRef(null);
  const searchTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const scrollPosition = window.scrollY + 100;
      const sections = ['home', 'tech', 'service', 'projects', 'testimony', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveLink(sections[i].charAt(0).toUpperCase() + sections[i].slice(1));
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced navItems with searchable data
  const navItems = [
    { 
      label: 'Home', 
      id: 'home',
      keywords: ['home', 'welcome', 'hero', 'landing', 'main', 'start', 'beginning', 'intro'],
      description: 'Welcome section'
    },
    { 
      label: 'Tech', 
      id: 'tech',
      keywords: ['tech', 'technology', 'skills', 'stack', 'programming', 'code', 'coding', 'languages', 'frameworks', 'react', 'javascript', 'nodejs', 'python', 'tools', 'development'],
      description: 'Technology stack & skills'
    },
    { 
      label: 'Service', 
      id: 'service',
      keywords: ['service', 'services', 'offerings', 'solutions', 'consulting', 'development', 'design', 'what i do', 'offer', 'provide', 'help', 'support', 'work'],
      description: 'Services I offer'
    },
    { 
      label: 'Projects', 
      id: 'projects',
      keywords: ['project', 'projects', 'portfolio', 'work', 'case study', 'showcase', 'examples', 'samples', 'demo', 'built', 'created', 'developed', 'made'],
      description: 'Featured projects'
    },
    { 
      label: 'Testimony', 
      id: 'testimony',
      keywords: ['testimony', 'testimonial', 'review', 'reviews', 'feedback', 'client', 'clients', 'rating', 'recommendation', 'quote', 'say', 'said', 'experience', 'opinion'],
      description: 'Client testimonials'
    },
    { 
      label: 'Contact', 
      id: 'contact',
      keywords: ['contact', 'email', 'phone', 'hire', 'reach out', 'connect', 'message', 'get in touch', 'call', 'whatsapp', 'address', 'location', 'form', 'reach'],
      description: 'Get in touch'
    }
  ];

  // Search functionality with debounce
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    setIsSearching(true);

    searchTimeoutRef.current = setTimeout(() => {
      const query = searchQuery.toLowerCase().trim();
      const results = [];

      navItems.forEach((item) => {
        const labelMatch = item.label.toLowerCase().includes(query);
        const keywordMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );

        let score = 0;
        if (labelMatch) score += 10;
        if (keywordMatch) score += 5;
        if (item.label.toLowerCase() === query) score += 20;

        if (labelMatch || keywordMatch) {
          results.push({ ...item, score });
        }
      });

      // Sort by relevance
      results.sort((a, b) => b.score - a.score);

      setSearchResults(results);
      setShowSearchResults(results.length > 0);
      setIsSearching(false);
    }, 300); // 300ms debounce

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Navigate to section
  const navigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      setIsMenuOpen(false);
      
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
        
        // Update active link
        const item = navItems.find(item => item.id === sectionId);
        if (item) setActiveLink(item.label);
      }, isMenuOpen ? 300 : 0);
    }
    
    // Reset search
    setSearchQuery('');
    setShowSearchResults(false);
    setIsSearchFocused(false);
  };

  // Handle keyboard navigation
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchResults.length > 0) {
      e.preventDefault();
      navigateToSection(searchResults[0].id);
    } else if (e.key === 'Escape') {
      clearSearch();
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchResults(false);
    setIsSearchFocused(false);
  };

  return (
    <header className={`
      fixed top-0 w-full z-50 
      transition-all duration-700 ease-out
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-gray-100' 
        : 'bg-transparent'
      }
    `}>
      {/* Subtle gradient accent on scroll */}
      {scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white pointer-events-none"></div>
      )}
      
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); navigateToSection('home'); }} className="group flex-shrink-0 relative">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-11 w-auto relative z-10 transition-all duration-500 group-hover:scale-105" 
            />
            
            {/* Underline on hover */}
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full group-hover:w-full transition-all duration-400"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            
            {/* Search Bar - Clean White Style */}
            <div className="relative mr-3 group/search" ref={searchRef}>
              {/* Subtle focus glow */}
              <div className={`
                absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md opacity-0 transition-opacity duration-300
                ${isSearchFocused ? 'opacity-20' : ''}
              `}></div>
              
              <div className={`relative transition-all duration-300 ease-out ${
                isSearchFocused ? 'w-80 xl:w-96' : 'w-64 lg:w-72'
              }`}>
                <input 
                  type="text" 
                  placeholder={isSearchFocused ? "Type to explore..." : "Search..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  onKeyDown={handleSearchKeyDown}
                  className={`
                    relative pl-11 pr-10 py-3 rounded-xl text-sm font-medium
                    bg-gray-50 text-gray-800 placeholder-gray-400
                    border border-gray-200 hover:border-gray-300
                    focus:bg-white focus:border-blue-400 focus:text-gray-900 focus:shadow-lg focus:shadow-blue-100/50
                    focus:outline-none transition-all duration-300 ease-out w-full
                  `}
                />
                
                {/* Dynamic search icon */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  {isSearching ? (
                    <svg className="w-[18px] h-[18px] animate-spin text-blue-500" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg 
                      className={`w-[18px] h-[18px] transition-all duration-300 ${isSearchFocused ? 'text-blue-500' : 'text-gray-400'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>

                {/* Clear button */}
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-all hover:rotate-90"
                  >
                    <svg className="w-4 h-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}

                {/* Search Results Dropdown - White Style */}
                {showSearchResults && (
                  <div className="
                    absolute top-full left-0 right-0 mt-3 rounded-2xl overflow-hidden
                    bg-white backdrop-blur-xl border border-gray-200 shadow-2xl shadow-gray-200/50
                    animate-in slide-in-from-top-2 fade-in duration-300 max-h-96 overflow-y-auto
                  ">
                    {/* Results header */}
                    <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/80">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                        </span>
                        <span className="text-xs text-gray-400">Press Enter</span>
                      </div>
                    </div>

                    {/* Results list */}
                    <div className="p-2">
                      {searchResults.map((result, index) => (
                        <button
                          key={result.id}
                          onClick={() => navigateToSection(result.id)}
                          className={`
                            w-full text-left px-4 py-3.5 rounded-xl mb-1 last:mb-0
                            flex items-center gap-3 transition-all duration-200
                            hover:bg-blue-50/60 hover:border-blue-100
                            border border-transparent group/result
                            ${index === 0 ? 'ring-1 ring-blue-200 bg-blue-50/40' : ''}
                          `}
                        >
                          {/* Accent bar */}
                          <div className="w-1 h-10 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500 flex-shrink-0"></div>
                          
                          {/* Content */}
                          <div className="flex-grow min-w-0">
                            <div className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                              {result.label}
                              {index === 0 && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-black uppercase tracking-wider">
                                  Best Match
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500">{result.description}</div>
                            
                            {/* Matched keywords preview */}
                            <div className="flex gap-1.5 mt-1.5 flex-wrap">
                              {result.keywords.slice(0, 3).map((kw, idx) => (
                                <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                                  {kw}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Arrow icon */}
                          <svg className="w-4 h-4 text-gray-300 group-hover/result:text-blue-500 group-hover/result:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      ))}
                    </div>

                    {/* Footer hint */}
                    <div className="px-5 py-2.5 border-t border-gray-100 bg-gray-50/80">
                      <p className="text-xs text-gray-400 text-center">
                        ESC to close • ↑↓ to navigate
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Nav Links with Underline Effect - White Style */}
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection(item.id);
                    }}
                    className={`
                      relative px-5 py-2.5 rounded-xl text-sm font-semibold 
                      transition-all duration-300 group/nav
                      ${activeLink === item.label 
                        ? 'text-blue-600 bg-blue-50 border border-blue-100 shadow-sm shadow-blue-100/50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }
                    `}
                  >
                    {item.label}
                    
                    {/* UNDERLINE EFFECT - Animated gradient line */}
                    <span className={`
                      absolute bottom-1 left-1/2 -translate-x-1/2 
                      h-[2px] rounded-full
                      bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500
                      transition-all duration-500 ease-out
                      ${activeLink === item.label 
                        ? 'w-3/4 shadow-sm shadow-blue-300/50' 
                        : 'w-0 group-hover/nav:w-1/2 group-hover/nav:shadow-sm group-hover/nav:shadow-blue-200/50'
                      }
                    `}></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Premium CTA Button - White Mode Style */}
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('contact');
              }}
              className="
                ml-4 relative px-7 py-3 rounded-xl
                font-bold text-sm text-white uppercase tracking-wider
                overflow-hidden group/btn
                transition-all duration-500
                hover:scale-105 hover:-translate-y-0.5
                active:scale-95 active:translate-y-0
                bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500
                shadow-lg shadow-blue-500/25
                hover:shadow-xl hover:shadow-blue-500/30
              "
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 skew-x-12"></div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Button underline shimmer on hover */}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white/70 rounded-full group-hover/btn:w-3/4 transition-all duration-500 shadow-sm shadow-white/30"></span>
            </a>
          </div>

          {/* Mobile Menu Button - Clean White Style */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              md:hidden relative p-3 rounded-xl
              bg-gray-100 border border-gray-200
              text-gray-600 hover:text-gray-900 
              hover:bg-gray-200 hover:border-gray-300
              hover:shadow-md
              transition-all duration-300
              group/mob-btn
            "
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Clean White Panel */}
        {isMenuOpen && (
          <div className="
            md:hidden absolute top-full left-0 right-0 
            mx-4 mt-3 p-7 rounded-2xl 
            bg-white backdrop-blur-xl 
            shadow-2xl shadow-gray-200/50 
            border border-gray-200
            animate-in slide-in-from-top-4 fade-in duration-500
            relative overflow-hidden
          ">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Mobile Search - Clean White Style */}
              <div className="relative mb-7" ref={searchRef}>
                <input 
                  type="text" 
                  placeholder="Search anything..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onKeyDown={handleSearchKeyDown}
                  className="
                    relative w-full pl-12 pr-10 py-4 rounded-xl text-sm font-medium
                    bg-gray-50 text-gray-800 placeholder-gray-400
                    border border-gray-200 focus:border-blue-400
                    focus:outline-none focus:shadow-lg focus:shadow-blue-100/50
                    transition-all
                  "
                />
                
                {/* Search icon */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  {isSearching ? (
                    <svg className="w-5 h-5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>

                {/* Clear button */}
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-all hover:rotate-90"
                  >
                    <svg className="w-4 h-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}

                {/* Mobile search results */}
                {showSearchResults && (
                  <div className="mt-3 rounded-xl overflow-hidden bg-white border border-gray-200 shadow-lg max-h-72 overflow-y-auto">
                    <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50/80">
                      <span className="text-xs font-bold text-blue-600">
                        {searchResults.length} found
                      </span>
                    </div>
                    
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => navigateToSection(result.id)}
                        className="
                          w-full text-left px-4 py-3.5 flex items-center gap-3
                          hover:bg-blue-50/50 transition-all
                          border-b border-gray-100 last:border-b-0
                        "
                      >
                        <div className="w-1 h-10 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500 flex-shrink-0"></div>
                        
                        <div className="flex-grow min-w-0">
                          <div className="font-bold text-gray-900">{result.label}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{result.description}</div>
                        </div>
                        
                        <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Nav Links - Clean Cards */}
              <ul className="space-y-2 mb-7">
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection(item.id);
                      }}
                      className="
                        relative block px-5 py-4 rounded-xl text-base font-semibold
                        text-gray-700 hover:text-gray-900
                        bg-gray-50/50 hover:bg-blue-50/60
                        border border-gray-100 hover:border-blue-100
                        hover:shadow-md hover:shadow-blue-100/20
                        transition-all duration-300
                        group/link overflow-hidden
                      "
                      style={{animationDelay: `${index * 50}ms`}}
                    >
                      {/* Left accent line on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-b from-blue-400/0 via-blue-500 to-blue-400/0 group-hover/link:w-1 transition-all duration-500"></div>
                      
                      {/* UNDERLINE EFFECT for mobile links */}
                      <span className={`
                        absolute bottom-2 left-5 
                        h-[2px] rounded-full
                        bg-gradient-to-r from-blue-500 to-cyan-500
                        transition-all duration-500
                        group-hover/link:w-[calc(100%-2.5rem)]
                        w-0
                        shadow-sm shadow-blue-300/50
                      `}></span>
                      
                      <div className="flex items-center justify-between relative z-10">
                        <span>{item.label}</span>
                        
                        {/* Arrow icon */}
                        <svg className="w-5 h-5 text-gray-300 group-hover/link:text-blue-500 group-hover/link:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA - Premium White Style */}
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('contact');
                }}
                className="
                  relative block w-full text-center px-6 py-4 
                  text-white font-bold text-base uppercase tracking-wider rounded-xl
                  overflow-hidden group/mob-cta
                  transition-all duration-500
                  hover:scale-[1.02] hover:-translate-y-0.5
                  active:scale-[0.98]
                  bg-gradient-to-r from-blue-600 to-cyan-500
                  shadow-lg shadow-blue-500/25
                  hover:shadow-xl hover:shadow-blue-500/30
                "
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/mob-cta:translate-x-full transition-transform duration-1000 skew-x-12"></div>
                
                {/* Underline shimmer */}
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white/70 rounded-full group-hover/mob-cta:w-1/2 transition-all duration-500 shadow-sm shadow-white/30"></span>
                
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Let's Work Together
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;