import { useState, useEffect } from 'react';

const Tech = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // Development Skills with Icons
  const devSkills = [
    {
      name: 'HTML5',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#E34F26">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      level: 95
    },
    {
      name: 'CSS3',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#1572B6">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 4.112L12 19.351l5.373-1.443.744-8.158H8.531l-.234-2.613L18.59 4.413z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-700',
      level: 95
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F7DF1E">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.701.154-.646.915-.84 1.515-.669.396.126.759.505.912.984.093.14.186.28.28.42 1.069-.63 1.069-.63 1.814-1.057-.28-.434-.422-.62-.606-.805-.652-.727-1.525-1.1-2.934-1.072l-.73.094c-.7.168-1.37.532-1.76 1.013-1.172 1.329-.84 3.65.587 4.61.716.49 1.77.82 2.69 1.05.89.245 1.192.405 1.39.72.245.39.178.78-.145 1.02-.47.345-1.218.315-1.85-.08-.48-.29-.79-.83-1.01-1.52l-1.87.74c.14.43.32.82.54 1.15.99 1.46 3.47 1.95 5.28 1.15.68-.28 1.27-.71 1.67-1.28.88-1.27.98-3.07.28-4.32z"/>
        </svg>
      ),
      color: 'from-yellow-400 to-yellow-600',
      level: 90
    },
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.6.045-.87.129C3.23 2.26 2.573 5.437 3.35 9.36c-3.08 1.39-4.97 3.305-4.97 5.054 0 1.757 1.905 3.68 5.003 5.074-.773 3.94-.11 7.116 2.883 7.904.27.085.563.128.874.128 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.31 0 .6-.044.87-.128 2.993-.788 3.656-3.965 2.883-7.904 3.085-1.388 4.97-3.304 4.97-5.054 0-1.75-1.91-3.67-5.004-5.058.776-3.926.114-7.103-2.88-7.89a2.74 2.74 0 0 0-.869-.13zm-.005 1.09v.006c.225 0 .424.035.6.106 1.516.4 2.176 2.61 1.665 5.293-.13.71-.322 1.456-.57 2.228-1.55-.48-3.236-.837-5.005-1.06a38.307 38.307 0 0 1-3.614-4.56c1.59-1.445 3.085-2.38 4.418-2.547.17-.02.34-.03.51-.03zm-9.772.012c.167 0 .34.01.506.03 1.333.166 2.828 1.102 4.418 2.546A37.402 37.402 0 0 0 8.4 8.835c-1.77.223-3.456.58-5.006 1.06-.248-.772-.435-1.508-.57-2.216-.512-2.684.148-4.894 1.66-5.293.177-.07.38-.105.606-.105zm4.882 3.85c.51.686 1.01 1.397 1.49 2.136-1.395-.174-2.81-.27-4.236-.27-1.425 0-2.84.096-4.236.27.48-.74.98-1.45 1.49-2.136.92-1.23 1.855-2.35 2.746-3.316.89.966 1.826 2.086 2.746 3.316zM5.67 12c-.71-1.16-1.34-2.31-1.88-3.42 1.17-.264 2.42-.48 3.73-.645.53.74 1.06 1.51 1.58 2.31-.52.8-1.05 1.57-1.58 2.31-1.31-.165-2.56-.38-3.73-.645zm.95 4.46c.48-.74.98-1.45 1.49-2.136.92-1.23 1.855-2.35 2.746-3.316.89.966 1.826 2.086 2.746 3.316.51.686 1.01 1.397 1.49 2.136-1.395.174-2.81.27-4.236.27-1.425 0-2.84-.096-4.236-.27zm8.86-1.565c-.52-.8-1.05-1.57-1.58-2.31.53-.74 1.06-1.51 1.58-2.31 1.31.165 2.56.38 3.73.645-.54 1.11-1.17 2.26-1.88 3.42-1.17.264-2.42.48-3.73.645zm1.87-5.205c-.53-.74-1.06-1.51-1.58-2.31.52-.8 1.05-1.57 1.58-2.31 1.31.165 2.56.38 3.73.645-.54 1.11-1.17 2.26-1.88 3.42-1.17.264-2.42.48-3.73.645zM12 8.11c.74.93 1.46 1.89 2.14 2.89-.68 1-1.4 1.96-2.14 2.89-.74-.93-1.46-1.89-2.14-2.89.68-1 1.4-1.96 2.14-2.89z"/>
        </svg>
      ),
      color: 'from-cyan-400 to-blue-500',
      level: 88
    },
    {
      name: 'Tailwind',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      ),
      color: 'from-cyan-400 to-teal-500',
      level: 92
    },
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3776AB">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.1-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      ),
      color: 'from-blue-500 to-yellow-500',
      level: 85
    },
    {
      name: 'Django',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#092E20">
          <path d="M10.55 5.925v3.155h4.278V19.05h3.71V9.08h4.278V5.925H10.55zM.002 9.08v9.97h3.71V9.08H.001zm1.855-4.155C.832 4.925 0 5.75 0 6.78c0 1.03.832 1.855 1.857 1.855 1.023 0 1.854-.825 1.854-1.855 0-1.03-.83-1.855-1.854-1.855z"/>
        </svg>
      ),
      color: 'from-green-700 to-green-900',
      level: 82
    },
    {
      name: 'Flask',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M17.5 0h-11C5.1 0 4 .1 4 1.5v21C4 23.9 5.1 24 6.5 24h11c1.4 0 2.5-.1 2.5-1.5v-21C20 .1 18.9 0 17.5 0zM7 2h10v20H7V2zm2 16h6v2H9v-2z"/>
        </svg>
      ),
      color: 'from-gray-600 to-gray-800',
      level: 80
    },
    {
      name: 'React Native',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.6.045-.87.129C3.23 2.26 2.573 5.437 3.35 9.36c-3.08 1.39-4.97 3.305-4.97 5.054 0 1.757 1.905 3.68 5.003 5.074-.773 3.94-.11 7.116 2.883 7.904.27.085.563.128.874.128 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.31 0 .6-.044.87-.128 2.993-.788 3.656-3.965 2.883-7.904 3.085-1.388 4.97-3.304 4.97-5.054 0-1.75-1.91-3.67-5.004-5.058.776-3.926.114-7.103-2.88-7.89a2.74 2.74 0 0 0-.869-.13z"/>
        </svg>
      ),
      color: 'from-blue-400 to-purple-500',
      level: 78
    },
    {
      name: 'API Dev',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
      level: 88
    }
  ];

  // Hacking/Cybersecurity Skills with Icons
  const hackingSkills = [
    {
      name: 'Kali Linux',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm">
          K
        </div>
      ),
      color: 'from-blue-700 to-blue-900',
      level: 90
    },
    {
      name: 'Pentesting',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
      color: 'from-red-600 to-red-800',
      level: 88
    },
    {
      name: 'Network Sec',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2"/>
          <circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/>
        </svg>
      ),
      color: 'from-indigo-500 to-purple-700',
      level: 85
    },
    {
      name: 'Forensics',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      color: 'from-amber-600 to-orange-700',
      level: 80
    },
    {
      name: 'Social Eng.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      color: 'from-pink-500 to-rose-600',
      level: 82
    },
    {
      name: 'Ethical Hack',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      color: 'from-green-600 to-teal-700',
      level: 87
    },
    {
      name: 'Vuln Assess.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
      ),
      color: 'from-yellow-500 to-amber-600',
      level: 84
    },
    {
      name: 'Web Security',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      color: 'from-violet-500 to-purple-700',
      level: 86
    },
    {
      name: 'Wireless Hack',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <line x1="12" y1="20" x2="12.01" y2="20"/>
        </svg>
      ),
      color: 'from-sky-500 to-blue-600',
      level: 78
    }
  ];

  const SkillCard = ({ skill }) => (
    <div className={`
      group p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300
      hover:scale-105 hover:shadow-lg cursor-default
      ${isDarkMode 
        ? 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600' 
        : 'bg-white/60 border-slate-200 hover:border-slate-300 hover:shadow-xl'
      }
    `}>
      {/* Icon */}
      <div className={`mb-3 bg-gradient-to-br ${skill.color} rounded-xl p-2 w-fit text-white shadow-md`}>
        {skill.icon}
      </div>

      {/* Name */}
      <h4 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        {skill.name}
      </h4>

      {/* Progress Bar */}
      <div className={`
        h-1.5 rounded-full overflow-hidden
        ${isDarkMode ? 'bg-slate-700/50' : 'bg-slate-200'}
      `}>
        <div 
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
          style={{ width: `${skill.level}%` }}
        />
      </div>

      {/* Level */}
      <p className={`text-xs mt-1.5 font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
        {skill.level}% Proficiency
      </p>
    </div>
  );

  return (
    <section id="tech" className={`
      py-20 transition-colors duration-300
      ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`
            inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4
            ${isDarkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-100 text-blue-600 border border-blue-200'}
          `}>
            Technical Skills
          </span>
          <h2 className={`
            text-3xl md:text-4xl lg:text-5xl font-bold mb-4
            ${isDarkMode ? 'text-white' : 'text-slate-900'}
          `}>
            Technologies & Tools
          </h2>
          <p className={`
            max-w-2xl mx-auto text-base
            ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}
          `}>
            My expertise spans across software development and cybersecurity domains
          </p>
        </div>

        {/* Development Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">
              D
            </div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Development Stack
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {devSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Cybersecurity Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white font-bold shadow-lg">
              S
            </div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Security & Hacking
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {hackingSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Additional Tools */}
        <div className={`
          mt-16 p-8 rounded-3xl backdrop-blur-xl border text-center
          ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}
        `}>
          <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Other Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              { name: 'Git', color: '#F05032' },
              { name: 'GitHub', color: '#181717' },
              { name: 'VS Code', color: '#007ACC' },
              { name: 'Linux', color: '#FCC624' },
              { name: 'Docker', color: '#2496ED' },
              { name: 'PostgreSQL', color: '#4169E1' },
              { name: 'MongoDB', color: '#47A248' },
              { name: 'AWS', color: '#FF9900' },
              { name: 'Wireshark', color: '#1679A1' },
              { name: 'Burp Suite', color: '#FF6633' },
              { name: 'Metasploit', color: '#2596CD' },
              { name: 'Nmap', color: '#4682B4' }
            ].map((tool, index) => (
              <div
                key={index}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border
                  transition-all duration-300 hover:scale-105
                  ${isDarkMode 
                    ? 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-600' 
                    : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
                  }
                `}
              >
                <span 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: tool.color }}
                />
                {tool.name}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '9+', label: 'Dev Skills' },
            { num: '9+', label: 'Security Skills' },
            { num: '12+', label: 'Tools' },
            { num: '3+', label: 'Years Exp' }
          ].map((stat, i) => (
            <div key={i} className={`
              p-5 rounded-2xl text-center border backdrop-blur-sm
              ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/70 border-slate-200'}
            `}>
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {stat.num}
              </p>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;