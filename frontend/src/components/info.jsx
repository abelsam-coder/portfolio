import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles,
  Terminal,
  Layers,
  Cpu,
  Code2,
  ExternalLink,
  Shield,
  Lock
} from 'lucide-react';

const Info = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  
  // Image state with loading
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  // Fetch random tech image from Unsplash API
  useEffect(() => {
    const unsplashUrl = `https://source.unsplash.com/800x800/?coding,programming,cybersecurity,hacker,workspace,computer&sig=${Date.now()}`;
    
    const techImages = [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', // Cyber security
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', // Code on screen
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80', // Coding setup
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', // Multiple screens
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80', // Developer working
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', // Laptop code
    ];
    
    const randomImage = techImages[Math.floor(Math.random() * techImages.length)];
    setImageUrl(unsplashUrl);
    
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = unsplashUrl;
  }, []);

  const roles = [
    'Full Stack Developer',
    'Cyber Security Expert',
    'App Developer',
    'Machine Learning Engineer'
  ];

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex <= currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex));
          setCharIndex(prev => prev + 1);
          
          if (charIndex === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      } else {
        if (charIndex >= 0) {
          setDisplayText(currentRole.substring(0, charIndex));
          setCharIndex(prev => prev - 1);
          
          if (charIndex === 0) {
            setIsDeleting(false);
            setCurrentRoleIndex(prev => (prev + 1) % roles.length);
          }
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className={`
      relative min-h-screen flex items-center overflow-hidden
      transition-all duration-700
      ${isDark 
        ? 'bg-[#0a0a0f]' 
        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30'
      }
    `}>
      
      {/* ===== GRADIENT BACKGROUND ORBS ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Large gradient orb - top right */}
        <div className={`
          absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[128px]
          animate-pulse-slow
          ${isDark 
            ? 'bg-gradient-to-br from-blue-600/20 via-purple-500/15 to-transparent' 
            : 'bg-gradient-to-br from-blue-300/40 via-cyan-200/30 to-transparent'
          }
        `}></div>

        {/* Second orb - bottom left */}
        <div className={`
          absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px]
          animate-float
          ${isDark 
            ? 'bg-gradient-to-tr from-cyan-600/15 via-blue-500/10 to-transparent' 
            : 'bg-gradient-to-tr from-indigo-200/35 via-blue-200/25 to-transparent'
          }
        `}></div>

        {/* Third accent orb - center */}
        <div className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px]
          opacity-50
          ${isDark 
            ? 'bg-gradient-to-r from-purple-600/10 to-pink-500/5' 
            : 'bg-gradient-to-r from-violet-200/20 to-fuchsia-200/10'
          }
        `}></div>
        
        {/* Grid overlay */}
        <div className={`
          absolute inset-0 opacity-[0.025]
          ${isDark ? 'opacity-[0.04]' : ''}
        `} style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.3)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.3)'} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ===== LEFT SIDE - TEXT CONTENT ===== */}
          <div className="space-y-7 order-2 lg:order-1">
            
            {/* Status Badge with Gradient Border */}
            <div className="inline-flex items-center gap-2">
              <div className={`
                relative px-5 py-2.5 rounded-full font-semibold text-sm
                bg-gradient-to-r from-emerald-500/10 to-cyan-500/10
                border border-emerald-500/20
                ${isDark ? 'text-emerald-300' : 'text-emerald-700'}
              `}>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      isDark ? 'bg-emerald-400' : 'bg-emerald-500'
                    } opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${
                      isDark ? 'bg-emerald-400' : 'bg-emerald-500'
                    }`}></span>
                  </span>
                  Available for Work
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <p className={`
                text-lg font-medium tracking-wide
                ${isDark ? 'text-gray-400' : 'text-gray-600'}
              `}>
                Welcome to my universe
              </p>
              
              <h1 className={`
                text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                I'm{' '}
                <span className={`
                  relative inline-block
                  bg-clip-text text-transparent bg-gradient-to-r
                  ${isDark 
                    ? 'from-blue-400 via-cyan-400 to-blue-400 bg-[length:200%_auto] animate-gradient' 
                    : 'from-blue-600 via-cyan-500 to-indigo-600 bg-[length:200%_auto] animate-gradient'
                  }
                `}>
                  Abel Samuel
                </span>
              </h1>

              {/* Typing Animation Row */}
              <div className="flex items-center gap-3 pt-2">
                <div className={`
                  h-12 w-1 rounded-full
                  bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500
                `}></div>
                
                <div className="flex items-center gap-2">
                  <span className={`
                    text-xl lg:text-2xl font-bold
                    bg-clip-text text-transparent bg-gradient-to-r
                    ${isDark 
                      ? 'from-cyan-400 to-blue-400' 
                      : 'from-cyan-600 to-blue-600'
                    }
                  `}>
                    {displayText}
                  </span>
                  
                  <span className={`
                    inline-block w-[3px] h-7 rounded-full animate-blink
                    bg-gradient-to-b from-cyan-400 to-blue-500
                  `}></span>
                </div>
              </div>
            </div>

            {/* Description Paragraph - WITH CYBER SECURITY EMPHASIS */}
            <p className={`
              text-base lg:text-lg leading-relaxed max-w-xl
              ${isDark ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Crafting{' '}
              <span className={`
                font-semibold bg-clip-text text-transparent bg-gradient-to-r
                ${isDark ? 'from-blue-400 to-cyan-400' : 'from-blue-600 to-cyan-600'}
              `}>secure digital solutions</span>{' '}
              with clean code and modern tech. Full-stack developer &{' '}
              <span className={`
                font-semibold bg-clip-text text-transparent bg-gradient-to-r
                ${isDark ? 'from-red-400 to-orange-400' : 'from-red-600 to-orange-600'}
              `}>cyber security expert</span>.
              I build & protect applications that make an impact.
            </p>

            {/* Feature Tags with Gradient Backgrounds - ADDED SECURITY */}
            <div className="flex flex-wrap gap-3 pt-1">
              {[
                { icon: Terminal, text: 'Clean Code', grad: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/20', iconColor: isDark ? 'text-blue-400' : 'text-blue-600' },
                { icon: Shield, text: 'Cyber Security', grad: 'from-red-500/10 to-orange-500/10', border: 'border-red-500/20', iconColor: isDark ? 'text-red-400' : 'text-red-600' },
                { icon: Layers, text: 'Full Stack', grad: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/20', iconColor: isDark ? 'text-purple-400' : 'text-purple-600' },
                { icon: Cpu, text: 'AI & ML', grad: 'from-orange-500/10 to-yellow-500/10', border: 'border-orange-500/20', iconColor: isDark ? 'text-orange-400' : 'text-orange-600' },
              ].map((item, idx) => (
                <div key={idx} className={`
                  group flex items-center gap-2 px-4 py-2.5 rounded-xl
                  bg-gradient-to-r ${item.grad}
                  border ${item.border}
                  backdrop-blur-sm transition-all duration-300
                  hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg
                  cursor-default
                `}>
                  <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  <span className={`text-sm font-semibold ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - NO DOWNLOAD BUTTON */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              
              {/* Primary Button - Gradient */}
              <a href="#contact" className={`
                group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                font-bold text-white text-sm uppercase tracking-wider
                overflow-hidden transition-all duration-400
                hover:scale-105 active:scale-95
                shadow-xl hover:shadow-2xl
                bg-gradient-to-r
                ${isDark 
                  ? 'from-blue-500 via-cyan-500 to-blue-500 shadow-blue-500/25 hover:shadow-blue-500/40' 
                  : 'from-blue-600 via-cyan-600 to-indigo-600 shadow-blue-500/25 hover:shadow-blue-500/35'
                }
              `}>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                
                <span className="relative flex items-center gap-3">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Secondary Button - Outline */}
              <a href="#projects" className={`
                group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                font-bold text-sm uppercase tracking-wider
                border-2 transition-all duration-400
                hover:scale-105 active:scale-95 hover:shadow-xl
                ${isDark 
                  ? 'border-white/20 text-white hover:bg-white/5 hover:border-white/30' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }
              `}>
                View Projects
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

           {/* Stats Section - FIXED VISIBILITY ON HOVER! */}
<div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
  {[
    { num: '3+', label: 'Years Exp', color: 'from-blue-500 to-cyan-500', textColor: 'text-blue-500' },
    { num: '50+', label: 'Projects', color: 'from-purple-500 to-pink-500', textColor: 'text-purple-500' },
    { num: '100%', label: 'Secure', color: 'from-green-500 to-emerald-500', textColor: 'text-green-500' },
  ].map((stat, idx) => (
    <div key={idx} className={`
      group relative p-4 rounded-2xl text-center 
      transition-all duration-400 hover:-translate-y-1
      cursor-default overflow-hidden
      ${isDark 
        ? 'bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/15' 
        : 'bg-white/60 hover:bg-white/90 border border-transparent hover:border-gray-200 shadow-sm hover:shadow-lg'
      }
    `}>
      
      {/* ✅ FIXED: Subtle background glow - NOT overpowering */}
      <div className={`
        absolute inset-0 rounded-2xl 
        bg-gradient-to-br ${stat.color}
        opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500
        ${isDark ? '' : 'group-hover:opacity-[0.12]'}
      `}></div>
      
      {/* Decorative top line */}
      <div className={`
        absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] rounded-full
        bg-gradient-to-r ${stat.color}
        scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center
      `}></div>

      {/* Number - ALWAYS VISIBLE with high contrast */}
      <p className={`
        text-2xl lg:text-3xl font-black relative z-10
        transition-all duration-400
        
        /* Base state: Solid dark/light color */
        ${isDark 
          ? 'text-white' 
          : 'text-gray-900'
        }
        
        /* Hover state: Gradient text BUT with brightness */
        group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent
        group-hover:${stat.color}
        
        /* Ensure readability */
        drop-shadow-sm
      `}>
        {stat.num}
      </p>
      
      {/* Label */}
      <p className={`
        text-xs font-semibold uppercase tracking-wider mt-1.5 relative z-10
        transition-colors duration-400
        ${isDark 
          ? 'text-gray-500 group-hover:text-gray-300' 
          : 'text-gray-500 group-hover:text-gray-700'
        }
      `}>
        {stat.label}
      </p>
      
      {/* Bottom gradient line - appears on hover */}
      <div className={`
        absolute bottom-3 left-4 right-4 h-[2px] rounded-full
        bg-gradient-to-r ${stat.color}
        scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center
        shadow-sm
        ${isDark 
          ? `shadow-${stat.color.includes('blue') ? 'blue' : stat.color.includes('purple') ? 'purple' : 'green'}-500/50` 
          : ''
        }
      `}></div>
    </div>
  ))}
</div>
          </div>

          {/* ===== RIGHT SIDE - API IMAGE (HIDDEN ON MOBILE!) ===== */}
          <div className="hidden lg:flex justify-center items-center order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg">
              
              {/* Outer glow ring - Gradient */}
              <div className={`
                absolute inset-0 rounded-[2.5rem] blur-2xl opacity-70
                bg-gradient-to-br
                ${isDark 
                  ? 'from-blue-600/30 via-purple-500/20 to-cyan-500/30' 
                  : 'from-blue-300/50 via-indigo-200/40 to-cyan-300/50'
                }
                animate-pulse-slow
              `}></div>

              {/* Main card container */}
              <div className={`
                relative rounded-[2rem] p-6 lg:p-8
                backdrop-blur-2xl
                transition-all duration-700
                ${isDark 
                  ? 'bg-white/[0.03] border border-white/10' 
                  : 'bg-white/80 border border-white/60 shadow-2xl shadow-gray-200/50'
                }
              `}>
                
                {/* Corner gradient accents */}
                <div className={`
                  absolute top-0 left-0 w-24 h-24 rounded-tl-[2rem]
                  bg-gradient-to-br from-blue-500/20 to-transparent blur-sm
                `}></div>
                <div className={`
                  absolute bottom-0 right-0 w-24 h-24 rounded-br-[2rem]
                  bg-gradient-to-tl from-cyan-500/20 to-transparent blur-sm
                `}></div>

                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: isDark 
                      ? 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2), rgba(34,211,238,0.2))'
                      : 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1), rgba(34,211,238,0.1))'
                  }}
                >
                  
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`
                        w-16 h-16 rounded-2xl animate-pulse
                        ${isDark ? 'bg-white/10' : 'bg-gray-200'}
                      `}></div>
                    </div>
                  )}
                  
                  <div className={`
                    absolute inset-0 z-10 pointer-events-none
                    bg-gradient-to-t
                    ${isDark 
                      ? 'from-[#0a0a0f]/80 via-transparent to-transparent' 
                      : 'from-white/60 via-transparent to-transparent'
                    }
                  `}></div>

                  {imageUrl && (
                    <img 
                      src={imageUrl}
                      alt="Cyber Security & Development Workspace"
                      className={`
                        w-full h-full object-cover
                        transition-all duration-700 ease-out
                        hover:scale-110 hover:rotate-1
                        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                      `}
                      onLoad={() => setImageLoaded(true)}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80';
                      }}
                    />
                  )}

                  <div className={`
                    absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-t
                    ${isDark 
                      ? 'from-blue-600/20 via-transparent to-cyan-600/10' 
                      : 'from-blue-200/40 via-transparent to-cyan-200/30'
                    }
                  `}></div>
                </div>

                {/* Bottom info bar */}
                <div className={`
                  mt-5 p-4 rounded-xl relative overflow-hidden
                  ${isDark ? 'bg-white/[0.02]' : 'bg-gradient-to-r from-gray-50 to-slate-50'}
                `}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`
                        p-2.5 rounded-xl
                        bg-gradient-to-br from-blue-500 to-cyan-500
                        shadow-lg
                        ${isDark ? 'shadow-blue-500/25' : 'shadow-blue-500/20'}
                      `}>
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className={`font-bold text-sm ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Security First</p>
                        <p className={`text-xs ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}>Building secure apps 🔒</p>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>

              {/* Floating badge - Top Right */}
              <div className={`
                absolute -top-3 -right-3 px-4 py-2 rounded-xl
                font-mono text-xs font-bold shadow-2xl
                animate-float
                bg-gradient-to-r
                ${isDark 
                  ? 'from-blue-600 to-cyan-600 text-white shadow-blue-500/30' 
                  : 'from-blue-500 to-cyan-500 text-white shadow-blue-500/25'
                }
              `}>
                {'<Dev />'}
              </div>

              {/* Floating badge - Bottom Left - SECURITY THEME */}
              <div className={`
                absolute -bottom-3 -left-3 px-4 py-2 rounded-xl
                font-mono text-xs font-bold shadow-2xl
                animate-float-delayed
                bg-gradient-to-r
                ${isDark 
                  ? 'from-red-600 to-orange-600 text-white shadow-red-500/30' 
                  : 'from-red-500 to-orange-500 text-white shadow-red-500/25'
                }
              `}>
                {'{ secure: true }'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CSS ANIMATIONS ===== */}
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
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Info;