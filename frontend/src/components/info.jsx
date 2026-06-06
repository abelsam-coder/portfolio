import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles,
  Terminal,
  Layers,
  Cpu,
  Bot, // ✅ CHANGED: Imported Bot instead of Code2
  ExternalLink,
  Shield,
  Lock,
  Braces,
  Box
} from 'lucide-react';

const Info = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

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
        : 'bg-gradient-to-br from-slate-50 via-white to-indigo-50/30'
      }
    `}>
      
      {/* ===== GRADIENT BACKGROUND ORBS ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`
          absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[128px]
          animate-pulse-slow
          ${isDark 
            ? 'bg-gradient-to-br from-blue-600/20 via-indigo-500/15 to-transparent' 
            : 'bg-gradient-to-br from-blue-300/40 via-indigo-200/30 to-transparent'
          }
        `}></div>

        <div className={`
          absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px]
          animate-float
          ${isDark 
            ? 'bg-gradient-to-tr from-purple-600/15 via-blue-500/10 to-transparent' 
            : 'bg-gradient-to-tr from-purple-200/35 via-blue-200/25 to-transparent'
          }
        `}></div>

        <div className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px]
          opacity-50
          ${isDark 
            ? 'bg-gradient-to-r from-indigo-600/10 to-purple-500/5' 
            : 'bg-gradient-to-r from-indigo-200/20 to-purple-200/10'
          }
        `}></div>
        
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
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2">
              <div className={`
                relative px-5 py-2.5 rounded-full font-semibold text-sm
                bg-gradient-to-r from-emerald-500/10 to-indigo-500/10
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
              <p className={`text-lg font-medium tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                    ? 'from-blue-400 via-indigo-400 to-purple-400 bg-[length:200%_auto] animate-gradient' 
                    : 'from-blue-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] animate-gradient'
                  }
                `}>
                  Abel Samuel
                </span>
              </h1>

              {/* Typing Animation */}
              <div className="flex items-center gap-3 pt-2">
                <div className={`h-12 w-1 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500`}></div>
                
                <div className="flex items-center gap-2">
                  <span className={`
                    text-xl lg:text-2xl font-bold
                    bg-clip-text text-transparent bg-gradient-to-r
                    ${isDark ? 'from-indigo-400 to-purple-400' : 'from-indigo-600 to-purple-600'}
                  `}>
                    {displayText}
                  </span>
                  
                  <span className={`
                    inline-block w-[3px] h-7 rounded-full animate-blink
                    bg-gradient-to-b from-indigo-400 to-purple-500
                  `}></span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className={`text-base lg:text-lg leading-relaxed max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Crafting{' '}
              <span className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-blue-400 to-indigo-400' : 'from-blue-600 to-indigo-600'}`}>secure digital solutions</span>{' '}
              with clean code and modern tech. Full-stack developer &{' '}
              <span className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-red-400 to-orange-400' : 'from-red-600 to-orange-600'}`}>cyber security expert</span>.
              I build & protect applications that make an impact.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 pt-1">
              {[
                { icon: Terminal, text: 'Clean Code', grad: 'from-blue-500/10 to-indigo-500/10', border: 'border-blue-500/20', iconColor: isDark ? 'text-blue-400' : 'text-blue-600' },
                { icon: Shield, text: 'Cyber Security', grad: 'from-red-500/10 to-orange-500/10', border: 'border-red-500/20', iconColor: isDark ? 'text-red-400' : 'text-red-600' },
                { icon: Layers, text: 'Full Stack', grad: 'from-indigo-500/10 to-purple-500/10', border: 'border-indigo-500/20', iconColor: isDark ? 'text-indigo-400' : 'text-indigo-600' },
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
                  <span className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              
              <a href="#contact" className={`
                group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                font-bold text-white text-sm uppercase tracking-wider
                overflow-hidden transition-all duration-400
                hover:scale-105 active:scale-95
                shadow-xl hover:shadow-2xl
                bg-gradient-to-r
                ${isDark 
                  ? 'from-blue-500 via-indigo-500 to-purple-500 shadow-indigo-500/25 hover:shadow-indigo-500/40' 
                  : 'from-blue-600 via-indigo-600 to-purple-600 shadow-indigo-500/25 hover:shadow-indigo-500/35'
                }
              `}>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                
                <span className="relative flex items-center gap-3">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a href="#projects" className={`
                group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                font-bold text-sm uppercase tracking-wider
                border-2 transition-all duration-400
                hover:scale-105 active:scale-95 hover:shadow-xl
                ${isDark 
                  ? 'border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400/50' 
                  : 'border-indigo-300 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-400'
                }
              `}>
                View Projects
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
              {[
                { num: '3+', label: 'Years Exp', color: 'from-blue-500 to-indigo-500' },
                { num: '50+', label: 'Projects', color: 'from-indigo-500 to-purple-500' },
                { num: '100%', label: 'Secure', color: 'from-purple-500 to-pink-500' },
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
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] rounded-full bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>

                  <p className={`text-2xl lg:text-3xl font-black relative z-10 transition-colors duration-400 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.num}
                  </p>
                  
                  <p className={`text-xs font-semibold uppercase tracking-wider mt-1.5 relative z-10 transition-colors duration-400 ${isDark ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== RIGHT SIDE - 3D ROBOT HOLOGRAPHIC CORE ===== */}
          <div className="hidden lg:flex justify-center items-center order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              
              {/* Outer massive glow */}
              <div className={`
                absolute inset-10 rounded-full blur-3xl opacity-60 animate-pulse-slow
                ${isDark 
                  ? 'bg-gradient-to-br from-blue-600/40 via-indigo-500/30 to-purple-500/40' 
                  : 'bg-gradient-to-br from-blue-300/60 via-indigo-200/50 to-purple-300/60'
                }
              `}></div>

              {/* Orbiting Rings */}
              <div className={`
                absolute inset-12 rounded-full border-2 border-dashed animate-spin-very-slow
                ${isDark ? 'border-indigo-500/20' : 'border-indigo-200/40'}
              `}></div>
              <div className={`
                absolute inset-20 rounded-full border-2 border-dashed animate-spin-slow-reverse
                ${isDark ? 'border-purple-500/10' : 'border-purple-200/30'}
              `}></div>

              {/* Central 3D Container */}
              <div className={`
                relative z-10 w-72 h-72 rounded-[3rem] flex items-center justify-center
                transition-all duration-700 hover:scale-105 hover:rotate-3 group
                overflow-hidden shadow-2xl
                ${isDark 
                  ? 'bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 shadow-black/50' 
                  : 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-indigo-500/30'
                }
              `}>
                
                {/* 3D Glass Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/0 to-black/20 pointer-events-none"></div>
                
                {/* Diagonal 3D edge light */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-400/20 blur-2xl pointer-events-none"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-400/20 blur-2xl pointer-events-none"></div>

                {/* ✅ 3D Holographic Core Sphere behind Robot */}
                <div className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-white/10 via-indigo-200/10 to-transparent blur-2xl animate-pulse-slow z-0"></div>
                <div className="absolute w-40 h-40 rounded-full border border-white/20 animate-spin-very-slow z-0"></div>

                {/* ✅ THE 3D ROBOT ICON */}
                <Bot className={`
                  w-40 h-40 relative z-10 
                  transition-all duration-700 
                  group-hover:scale-110 group-hover:rotate-6
                  text-white
                  /* 3D Holographic Glow Effect */
                  drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]
                  group-hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.8)]
                `} strokeWidth={1.5} />
              </div>

              {/* Floating Element - Top Right */}
              <div className={`
                absolute top-12 right-8 px-4 py-2.5 rounded-xl
                font-mono text-xs font-bold shadow-2xl z-20
                animate-float backdrop-blur-md
                border
                ${isDark 
                  ? 'bg-[#0a0a0f]/80 border-indigo-500/20 text-indigo-400' 
                  : 'bg-white/90 border-indigo-200 text-indigo-600'
                }
              `}>
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  npm run dev
                </span>
              </div>

              {/* Floating Element - Bottom Left */}
              <div className={`
                absolute bottom-12 left-8 px-4 py-2.5 rounded-xl
                font-mono text-xs font-bold shadow-2xl z-20
                animate-float-delayed backdrop-blur-md
                border
                ${isDark 
                  ? 'bg-[#0a0a0f]/80 border-purple-500/20 text-purple-400' 
                  : 'bg-white/90 border-purple-200 text-purple-600'
                }
              `}>
                <span className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5" />
                  Secure: ✓
                </span>
              </div>

              {/* Floating Element - Top Left (Small) */}
              <div className={`
                absolute top-24 left-16 w-12 h-12 rounded-xl shadow-xl z-20
                flex items-center justify-center animate-float-delayed-fast
                ${isDark 
                  ? 'bg-gradient-to-br from-red-500 to-orange-500' 
                  : 'bg-gradient-to-br from-red-400 to-orange-400'
                }
              `}>
                <Lock className="w-6 h-6 text-white" />
              </div>

              {/* Floating Element - Bottom Right (Small) */}
              <div className={`
                absolute bottom-24 right-16 w-12 h-12 rounded-xl shadow-xl z-20
                flex items-center justify-center animate-float
                ${isDark 
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-500' 
                  : 'bg-gradient-to-br from-indigo-400 to-purple-400'
                }
              `}>
                <Braces className="w-6 h-6 text-white" />
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

        @keyframes float-delayed-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-delayed-fast {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
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

        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Info;
