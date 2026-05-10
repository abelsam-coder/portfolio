import { useState, useEffect } from 'react';
import photo from '../assets/abel.jpg';

const Info = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    'Full Stack Developer',
    'App Developer',
    'Pentester',
    'Machine Learning Engineer'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex <= currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex));
          setCharIndex(charIndex + 1);
          
          if (charIndex === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      } else {
        if (charIndex >= 0) {
          setDisplayText(currentRole.substring(0, charIndex));
          setCharIndex(charIndex - 1);
          
          if (charIndex === 0) {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      
      {/* Animated Background - Light Mode */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs - Soft pastel tones */}
        <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/60 via-cyan-50/40 to-transparent rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-purple-100/50 via-pink-50/30 to-transparent rounded-full blur-[120px] animate-float-slow-delayed"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>

        {/* Floating dots - Soft blue tones */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            
            {/* Status Badge - Light Mode */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/60 backdrop-blur-sm hover:border-blue-300 transition-all duration-300 group cursor-default shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
              </span>
              <p className="text-sm font-semibold text-emerald-700 tracking-wide">
                Available for work
              </p>
            </div>

            {/* Name Section with CURVED UNDERLINE */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-gray-900 mb-2">Hi, I'm</span>
                
                {/* Name with curved underline container */}
                <div className="relative inline-block group/name">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
                    Abel Samuel
                  </span>
                  
                  {/* CURVED UNDERLINE - SVG Wave Path */}
                  <svg 
                    className="absolute -bottom-3 left-0 w-full h-8 overflow-visible" 
                    viewBox="0 0 300 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M 5 25 Q 75 45, 150 20 T 295 25" 
                      stroke="url(#gradient)" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: '350',
                        strokeDashoffset: '0',
                        animation: 'drawLine 2s ease-out forwards'
                      }}
                    />
                    
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Second decorative curve - thinner */}
                  <svg 
                    className="absolute -bottom-5 left-2 w-[calc(100%-16px)] h-10 overflow-visible" 
                    viewBox="0 0 280 35" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M 5 20 Q 70 35, 140 18 T 275 20" 
                      stroke="url(#gradient2)" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                      opacity="0.4"
                      style={{
                        strokeDasharray: '330',
                        strokeDashoffset: '0',
                        animation: 'drawLine 2.5s ease-out 0.3s forwards'
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/60 via-cyan-100/60 to-blue-100/60 blur-xl opacity-0 group-hover/name:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </h1>

              {/* Typing Animation */}
              <div className="flex items-center gap-3 h-11 pl-1">
                <span className="text-base sm:text-lg text-gray-500 font-medium">I'm a</span>
                <div className="relative">
                  <span className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 min-w-max">
                    {displayText}
                  </span>
                  <span className="inline-block w-[2.5px] h-6 ml-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 animate-blink shadow-sm rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Description - Light Mode */}
            <p className="text-base sm:text-lg leading-relaxed max-w-lg text-gray-600 font-light">
              A passionate developer crafting{' '}
              <span className="relative inline-block group/desc">
                <span className="text-gray-900 font-semibold relative z-10">digital experiences</span>
                <svg className="absolute -bottom-1 left-0 w-full h-2 overflow-visible" viewBox="0 0 150 10" preserveAspectRatio="none">
                  <path d="M 0 5 Q 37.5 10, 75 5 T 150 5" stroke="url(#descGradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="descGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              at the intersection of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold">innovation</span> and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-semibold">technology</span>. 
              Specializing in full-stack development, cybersecurity, and AI solutions.
            </p>

            {/* CTA Buttons - Light Mode */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* Primary CTA */}
              <a
                href="#contact"
                className="
                  group relative px-9 py-4 rounded-xl
                  font-bold text-sm text-white uppercase tracking-wide
                  overflow-hidden transition-all duration-400
                  hover:scale-105 hover:-translate-y-1
                  active:scale-95
                  shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35
                  bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500
                "
              >
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                
                <span className="relative z-10 flex items-center gap-2.5">
                  Let's Talk
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>

              {/* Secondary CTA - Light Mode */}
              <a
                href="#projects"
                className="
                  group relative px-9 py-4 rounded-xl
                  font-semibold text-sm uppercase tracking-wide
                  bg-gray-100 backdrop-blur-sm border border-gray-200
                  text-gray-700 transition-all duration-400
                  hover:bg-gray-200 hover:border-blue-300
                  hover:shadow-md hover:shadow-blue-100/50
                  hover:scale-105 hover:-translate-y-1
                  active:scale-95
                "
              >
                View Projects
              </a>
            </div>

            {/* Social Links - Light Mode */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em]">Connect</span>
              <div className={`w-14 h-[1px] bg-gradient-to-r from-gray-300 to-blue-400/40`}></div>
              
              {/* GitHub */}
              <a
                href="https://github.com/abelsam-coder/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative p-3 rounded-xl
                  bg-gray-100 border border-gray-200
                  text-gray-500 hover:text-gray-900
                  transition-all duration-300
                  hover:bg-gray-200 hover:border-gray-300
                  hover:shadow-lg hover:shadow-gray-300/50
                  hover:-translate-y-1
                "
              >
                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/abelala_c/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative p-3 rounded-xl
                  bg-gray-100 border border-gray-200
                  text-gray-500 hover:text-pink-600
                  transition-all duration-300
                  hover:bg-pink-50 hover:border-pink-200
                  hover:shadow-lg hover:shadow-pink-200/50
                  hover:-translate-y-1
                "
              >
                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.949 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abel-samuel-b079b7379/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative p-3 rounded-xl
                  bg-gray-100 border border-gray-200
                  text-gray-500 hover:text-blue-600
                  transition-all duration-300
                  hover:bg-blue-50 hover:border-blue-200
                  hover:shadow-lg hover:shadow-blue-200/50
                  hover:-translate-y-1
                "
              >
                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Stats with curve accents - Light Mode */}
            <div className="flex gap-5 pt-6">
              {[
                { value: '3+', label: 'Years Experience', color: '#0891b2' },
                { value: '50+', label: 'Projects Done', color: '#2563eb' },
              ].map((stat, index) => (
                <div key={index} className="group relative">
                  <div className={`
                    px-6 py-4 rounded-2xl
                    bg-gray-50 backdrop-blur-sm border border-gray-200
                    hover:border-gray-300
                    transition-all duration-400
                    hover:shadow-lg hover:shadow-gray-200/50
                    hover:-translate-y-1
                  `}>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
                    
                    {/* CURVED bottom accent */}
                    <svg className="absolute bottom-0 left-4 right-4 h-2 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 120 8" preserveAspectRatio="none">
                      <path 
                        d="M 0 4 Q 30 7, 60 4 T 120 4" 
                        stroke={stat.color} 
                        strokeWidth="2" 
                        fill="none" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Photo - Light Mode */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              
              {/* Photo Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]">
                
                {/* Background glow - Soft blue tint */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/40 via-gray-100 to-cyan-200/40 blur-3xl animate-pulse-slow"></div>
                
                {/* Decorative curved ring around photo */}
                <svg className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] animate-spin-slow" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="96" stroke="url(#ringGradient)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4"/>
                  <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Photo frame - Light mode */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 shadow-xl shadow-gray-300/50 group cursor-pointer">
                  
                  {/* Inner gradient overlay - Subtle */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/30 via-transparent to-cyan-100/30 z-10 pointer-events-none"></div>
                  
                  <img 
                    src={photo} 
                    alt="Abel Samuel - Full Stack Developer" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover overlay - Darker for contrast on white */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                </div>

                {/* Experience Badge with curve - Light Mode */}
                <div className="absolute -bottom-4 -left-4 z-10">
                  <div className="
                    px-6 py-3.5 rounded-2xl
                    bg-white/95 backdrop-blur-md 
                    border border-blue-200
                    shadow-xl shadow-gray-300/50
                    animate-float
                    group/badge hover:scale-105 transition-transform duration-300
                  ">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">3+</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Years Exp</p>
                      </div>
                    </div>
                    
                    {/* CURVED underline on badge */}
                    <svg className="absolute bottom-0 left-4 right-4 h-1.5" viewBox="0 0 100 6" preserveAspectRatio="none">
                      <path d="M 0 3 Q 25 5, 50 3 T 100 3" stroke="url(#badgeCurve)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="badgeCurve" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Status Badge - Light Mode */}
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="
                    px-5 py-2.5 rounded-full
                    bg-emerald-50 backdrop-blur-md 
                    border border-emerald-200
                    shadow-lg shadow-emerald-200/50
                    flex items-center gap-2
                    animate-float-delayed
                    group/status hover:scale-105 transition-transform duration-300
                  ">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                    </span>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Open to Work</span>
                  </div>
                </div>

                {/* Decorative floating curves - Light Mode */}
                <svg className="absolute -top-8 -left-8 w-20 h-20 opacity-30 animate-float-slow" viewBox="0 0 80 80" fill="none">
                  <path d="M 5 40 Q 20 20, 40 40 T 75 40" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                <svg className="absolute -bottom-6 -right-6 w-16 h-16 opacity-30 animate-float-slow-delayed" viewBox="0 0 70 70" fill="none">
                  <path d="M 5 35 Q 17.5 15, 35 35 T 65 35" stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        @keyframes float-slow-delayed {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.01); }
        }
        .animate-float-slow-delayed {
          animation: float-slow-delayed 7s ease-in-out infinite;
          animation-delay: 3s;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.03); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }

        @keyframes drawLine {
          from { stroke-dashoffset: 350; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default Info;