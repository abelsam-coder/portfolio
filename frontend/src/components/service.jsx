import { useState, useEffect } from 'react';
import { 
  Monitor, Smartphone, Shield, Brain, Code,
  ArrowRight, Check, Zap, ChevronRight, ChevronDown,
  Sparkles, Layers, MessageSquare, Clock, Tag,
  Rocket, Cpu, Lock, Globe, Code2, Database,
  Terminal, Bug, TestTube
} from 'lucide-react';

const Service = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [expandedService, setExpandedService] = useState(null); // ✅ NEW: Track expanded card

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

  // ✅ Toggle function for Learn More
  const toggleExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Services Data with detailed build info
  const services = [
    {
      title: 'Web Development',
      description: 'Modern web apps with React & Django',
      icon: Monitor,
      gradient: 'from-blue-500 to-cyan-500',
      howIBuild: [
        { tech: 'React.js', desc: 'Frontend with hooks & context' },
        { tech: 'Django/Node', desc: 'RESTful API backend' },
        { tech: 'PostgreSQL', desc: 'Database & optimization' },
        { tech: 'AWS/Vercel', desc: 'Cloud deployment & CI/CD' }
      ]
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile solutions',
      icon: Smartphone,
      gradient: 'from-violet-500 to-purple-500',
      howIBuild: [
        { tech: 'React Native', desc: 'Single codebase for iOS & Android' },
        { tech: 'Expo', desc: 'Fast development & testing' },
        { tech: 'Firebase', desc: 'Auth, real-time DB & storage' },
        { tech: 'App Store', desc: 'Deployment & publishing' }
      ]
    },
    {
      title: 'Cyber Security',
      description: 'Penetration testing & security audits',
      icon: Shield,
      gradient: 'from-red-500 to-orange-500',
      howIBuild: [
        { tech: 'Burp Suite', desc: 'Web app security testing' },
        { tech: 'Nmap/Nessus', desc: 'Network vulnerability scans' },
        { tech: 'Metasploit', desc: 'Exploitation & testing' },
        { tech: 'Reports', desc: 'Detailed findings & remediation' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent ML solutions',
      icon: Brain,
      gradient: 'from-emerald-500 to-teal-500',
      howIBuild: [
        { tech: 'Python', desc: 'Core ML development' },
        { tech: 'TensorFlow/PyTorch', desc: 'Model training & tuning' },
        { tech: 'Pandas/NumPy', desc: 'Data processing & analysis' },
        { tech: 'Flask/FastAPI', desc: 'ML model API deployment' }
      ]
    }
  ];

  // Projects Data
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      category: 'web',
      price: '200K+',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      icon: Globe,
      color: '#3B82F6'
    },
    {
      id: 2,
      name: 'Chat Application',
      category: 'web',
      price: '140K+',
      tech: ['React', 'Socket.io', 'Redis'],
      icon: MessageSquare,
      color: '#10B981'
    },
    {
      id: 3,
      name: 'Mobile App',
      category: 'mobile',
      price: '200K+',
      tech: ['React Native', 'Firebase'],
      icon: Smartphone,
      color: '#EC4899'
    },
    {
      id: 4,
      name: 'Security Audit',
      category: 'security',
      price: '160K',
      tech: ['Burp Suite', 'Nmap'],
      icon: Lock,
      color: '#EF4444'
    },
    {
      id: 5,
      name: 'ML Solution',
      category: 'ml',
      price: '600K+',
      tech: ['Python', 'TensorFlow'],
      icon: Cpu,
      color: '#06B6D4'
    },
    {
      id: 6,
      name: 'API Development',
      category: 'api',
      price: '80K+',
      tech: ['Django', 'REST'],
      icon: Code,
      color: '#8B5CF6'
    }
  ];

  // Categories
  const categories = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'web', label: 'Web', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'ml', label: 'AI/ML', icon: Cpu }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="services" className={`
      relative py-20 lg:py-28 overflow-hidden transition-colors duration-700
      ${isDark ? 'bg-[#030712]' : 'bg-white'}
    `}>
      
      {/* ===== BACKGROUND GRADIENTS ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        <div className={`
          absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[128px]
          animate-pulse-slow
          ${isDark 
            ? 'bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-transparent' 
            : 'bg-gradient-to-br from-blue-300/30 via-purple-200/20 to-transparent'
          }
        `}></div>

        <div className={`
          absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full blur-[120px]
          animate-float-slow
          ${isDark 
            ? 'bg-gradient-to-tr from-cyan-600/12 via-blue-600/8 to-transparent' 
            : 'bg-gradient-to-tr from-indigo-200/25 via-blue-200/15 to-transparent'
          }
        `}></div>

        {/* Grid pattern */}
        <div className={`
          absolute inset-0 opacity-[0.02]
          ${isDark ? 'opacity-[0.03]' : ''}
        `} style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(99,102,241,0.3)' : 'rgba(99,102,246,0.2)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(99,102,241,0.3)' : 'rgba(99,102,246,0.2)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-16 lg:mb-20">
          
          <div className={`
            inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6
            border backdrop-blur-sm transition-all duration-500
            ${isDark 
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' 
              : 'bg-blue-50 border-blue-200 text-blue-700'
            }
          `}>
            <Sparkles className="w-4 h-4" />
            What I Offer
          </div>

          <h2 className={`
            text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6
            transition-colors duration-500
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            My{' '}
            <span className={`
              bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_auto] animate-gradient
              ${isDark 
                ? 'from-blue-400 via-cyan-400 to-blue-400' 
                : 'from-blue-600 via-violet-600 to-cyan-600'
              }
            `}>
              Services
            </span>
          </h2>

          <p className={`
            max-w-2xl mx-auto text-base lg:text-lg leading-relaxed
            transition-colors duration-500
            ${isDark ? 'text-gray-400' : 'text-gray-600'}
          `}>
            Comprehensive technology solutions tailored to transform your ideas into reality
          </p>
        </div>

        {/* ===== SERVICES GRID - WITH EXPAND FUNCTIONALITY ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-20">
          {services.map((service, index) => {
            const isExpanded = expandedService === index; // ✅ Check if this card is expanded
            
            return (
              <div
                key={index}
                className={`
                  group relative rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-500 hover:-translate-y-2
                  border backdrop-blur-sm
                  ${isDark 
                    ? 'bg-white/[0.03] border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl hover:shadow-black/20' 
                    : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl hover:shadow-gray-200/50'
                  }
                  ${isExpanded ? 'hover:-translate-y-1' : ''}
                `}
              >
                
                {/* Subtle hover background */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${isDark 
                    ? 'bg-gradient-to-b from-white/[0.03] to-transparent' 
                    : 'bg-gradient-to-b from-gray-50/80 to-transparent'
                  }
                `}></div>

                <div className="relative p-6">
                  
                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl mb-5 flex items-center justify-center
                    bg-gradient-to-br ${service.gradient}
                    text-white shadow-lg transform transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-3
                    ${isDark ? 'shadow-lg' : 'shadow-md'}
                  `}>
                    <service.icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-lg font-bold mb-2 transition-colors duration-500
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`
                    text-sm leading-relaxed mb-4 transition-colors duration-500
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                  `}>
                    {service.description}
                  </p>

                  {/* ✅ EXPANDABLE SECTION - Shows on click */}
                  <div className={`
                    overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
                    ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                  `}>
                    
                    <div className={`
                      pt-4 pb-2 border-t
                      ${isDark ? 'border-white/10' : 'border-gray-100'}
                    `}>
                      <p className={`
                        text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2
                        ${isDark ? 'text-gray-400' : 'text-gray-500'}
                      `}>
                        <Code2 className="w-3.5 h-3.5" />
                        How I Build:
                      </p>
                      
                      <div className="space-y-2">
                        {service.howIBuild.map((item, idx) => (
                          <div key={idx} className={`
                            flex items-start gap-2 p-2 rounded-lg
                            transition-colors duration-300
                            ${isDark 
                              ? 'hover:bg-white/[0.04]' 
                              : 'hover:bg-gray-50'
                            }
                          `}>
                            <Check className={`
                              w-3.5 h-3.5 mt-0.5 flex-shrink-0
                              ${isDark ? 'text-emerald-400' : 'text-emerald-600'}
                            `} />
                            <div>
                              <span className={`
                                text-xs font-semibold
                                ${isDark ? 'text-gray-200' : 'text-gray-800'}
                              `}>
                                {item.tech}
                              </span>
                              <span className={`
                                text-xs ml-1.5
                                ${isDark ? 'text-gray-500' : 'text-gray-500'}
                              `}>
                                • {item.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ✅ LEARN MORE BUTTON - Toggles Expand */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(index);
                    }}
                    className={`
                      flex items-center gap-2 text-sm font-semibold pt-3 pb-1
                      border-t transition-all duration-300 w-full
                      ${isDark 
                        ? 'border-white/10 text-blue-400 hover:text-blue-300' 
                        : 'border-gray-100 text-blue-600 hover:text-blue-700'
                      }
                    `}
                  >
                    <span className="flex-1 text-left">
                      {isExpanded ? 'Show Less' : 'Learn More'}
                    </span>
                    
                    {/* Animated Chevron Icon */}
                    <ChevronDown className={`
                      w-4 h-4 transform transition-transform duration-500 ease-out
                      ${isExpanded ? 'rotate-180' : 'rotate-0'}
                    `} />
                  </button>
                </div>

                {/* Bottom accent line */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1
                  bg-gradient-to-r ${service.gradient}
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
                `}></div>
              </div>
            );
          })}
        </div>

        {/* ===== PROJECTS SECTION ===== */}
        <div className="mb-20">
          
          <div className="text-center mb-12">
            
            <div className={`
              inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6
              border backdrop-blur-sm transition-all duration-500
              ${isDark 
                ? 'bg-violet-500/10 border-violet-500/20 text-violet-300' 
                : 'bg-violet-50 border-violet-200 text-violet-700'
              }
            `}>
              <Layers className="w-4 h-4" />
              Recent Projects
            </div>

            <h3 className={`
              text-3xl md:text-4xl font-black tracking-tight mb-4
              transition-colors duration-500
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              What I{' '}
              <span className={`
                bg-clip-text text-transparent bg-gradient-to-r
                ${isDark 
                  ? 'from-violet-400 via-fuchsia-400 to-pink-400' 
                  : 'from-violet-600 via-fuchsia-600 to-pink-600'}
              `}>
                Build
              </span>
            </h3>

            <p className={`
              max-w-xl mx-auto text-base
              transition-colors duration-500
              ${isDark ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Explore my recent work with transparent pricing
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  relative px-5 py-2.5 rounded-xl text-sm font-semibold
                  transition-all duration-300 border flex items-center gap-2
                  ${activeTab === cat.id
                    ? isDark 
                      ? 'bg-white text-black border-transparent' 
                      : 'bg-gray-900 text-white border-transparent'
                    : isDark
                      ? 'bg-transparent border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                      : 'bg-transparent border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
                  }
                `}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`
                  group relative rounded-2xl overflow-hidden
                  transition-all duration-500 hover:-translate-y-2
                  border backdrop-blur-sm
                  ${isDark 
                    ? 'bg-white/[0.03] border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl hover:shadow-black/20' 
                    : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  }
                `}
              >
                
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${isDark 
                    ? 'bg-gradient-to-b from-white/[0.02] to-transparent' 
                    : 'bg-gradient-to-b from-gray-50/60 to-transparent'
                  }
                `}></div>
                
                <div className={`relative p-5 pb-3 border-b ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                  <div className="flex items-start justify-between">
                    
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ 
                          background: `${project.color}${isDark ? '20' : '15'}`,
                          color: project.color
                        }}
                      >
                        <project.icon className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <h4 className={`
                          font-bold text-base
                          transition-colors duration-500
                          ${isDark ? 'text-white' : 'text-gray-900'}
                        `}>
                          {project.name}
                        </h4>
                        
                        <div className={`
                          flex items-center gap-1 mt-0.5 text-xs
                          transition-colors duration-500
                          ${isDark ? 'text-gray-500' : 'text-gray-500'}
                        `}>
                          <Clock className="w-3 h-3" />
                          2-6 weeks
                        </div>
                      </div>
                    </div>

                    <div 
                      className="px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap"
                      style={{ 
                        background: `${project.color}${isDark ? '20' : '10'}`,
                        color: project.color
                      }}
                    >
                      ETB {project.price}
                    </div>
                  </div>
                </div>

                <div className="relative p-5 pt-3">
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className={`
                        px-2.5 py-1 rounded-lg text-[11px] font-medium
                        transition-colors duration-300
                        ${isDark 
                          ? 'bg-white/5 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                        }
                      `}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="#contact"
                    className={`
                      w-full py-3 rounded-xl text-sm font-bold
                      flex items-center justify-center gap-2
                      transition-all duration-300
                      hover:scale-[1.02] active:scale-[0.98]
                      bg-gradient-to-r text-white shadow-lg
                      hover:shadow-xl
                      from-blue-600 to-cyan-500
                      hover:from-blue-500 hover:to-cyan-400
                      ${isDark ? 'shadow-blue-500/25 hover:shadow-blue-500/40' : 'shadow-blue-500/25 hover:shadow-blue-500/35'}
                    `}
                  >
                    Get Quote
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: project.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PROCESS SECTION ===== */}
        <div className={`
          relative rounded-3xl p-8 lg:p-12 overflow-hidden
          border backdrop-blur-sm transition-all duration-500
          ${isDark 
            ? 'bg-white/[0.02] border-white/10' 
            : 'bg-gradient-to-br from-gray-50 to-white border-gray-200'
          }
        `}>
          
          <div className={`
            absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none
            ${isDark ? 'bg-blue-600/10' : 'bg-blue-200/40'}
          `}></div>

          <div className="relative z-10">
            <h3 className={`
              text-2xl md:text-3xl font-bold text-center mb-12
              transition-colors duration-500
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              How I{' '}
              <span className={`
                bg-clip-text text-transparent bg-gradient-to-r
                ${isDark ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600'}
              `}>
                Work
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'Discuss your ideas', icon: Zap },
                { step: '02', title: 'Planning', desc: 'Create roadmap', icon: Layers },
                { step: '03', title: 'Development', desc: 'Build & iterate', icon: Code },
                { step: '04', title: 'Delivery', desc: 'Launch & support', icon: Rocket }
              ].map((item, index) => (
                <div key={index} className="text-center group/item">
                  
                  <div className={`
                    relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4
                    bg-gradient-to-br from-blue-600 to-cyan-500 text-white
                    shadow-lg transform transition-all duration-500
                    group-hover/item:scale-110 group-hover/item:rotate-6
                    ${isDark ? 'shadow-blue-500/25' : 'shadow-blue-500/30'}
                  `}>
                    <span className="text-xl font-black">{item.step}</span>
                    
                    <span className={`
                      absolute -top-2 -right-2 w-7 h-7 rounded-lg flex items-center justify-center
                      transform transition-transform duration-300 group-hover/item:scale-125
                      ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900 shadow-lg'}
                    `}>
                      <item.icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h4 className={`
                    text-lg font-bold mb-1.5 transition-colors duration-500
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {item.title}
                  </h4>
                  
                  <p className={`
                    text-sm transition-colors duration-500
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                  `}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CTA SECTION ===== */}
        <div className={`
          mt-20 relative rounded-3xl p-10 lg:p-16 overflow-hidden text-center
          border backdrop-blur-sm transition-all duration-500
          ${isDark 
            ? 'bg-gradient-to-br from-blue-600/10 via-violet-600/5 to-cyan-600/10 border-white/10' 
            : 'bg-gradient-to-br from-blue-50 via-violet-50 to-cyan-50 border-blue-100'
          }
        `}>
          
          <div className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] rounded-full blur-[100px] pointer-events-none
            ${isDark ? 'bg-blue-600/20' : 'bg-blue-400/30'}
          `}></div>

          <div className="relative z-10">
            <div className={`
              inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6
              bg-gradient-to-br from-blue-600 to-cyan-500 text-white
              shadow-lg transform transition-transform duration-500 hover:scale-110
              ${isDark ? 'shadow-blue-500/30' : 'shadow-blue-500/25'}
            `}>
              <Zap className="w-7 h-7" />
            </div>

            <h3 className={`
              text-2xl md:text-3xl lg:text-4xl font-black mb-4
              transition-colors duration-500
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              Ready to Start?
            </h3>
            
            <p className={`
              max-w-lg mx-auto mb-8 text-base
              transition-colors duration-500
              ${isDark ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Let's bring your ideas to life with cutting-edge technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a
                href="#contact"
                className={`
                  group inline-flex items-center justify-center gap-3 px-8 py-4 
                  rounded-2xl font-bold text-sm
                  bg-gradient-to-r text-white transition-all duration-300
                  hover:-translate-y-1 active:scale-[0.98]
                  shadow-xl hover:shadow-2xl
                  from-blue-600 to-cyan-500
                  hover:from-blue-500 hover:to-cyan-400
                  ${isDark ? 'shadow-blue-500/30 hover:shadow-blue-500/50' : 'shadow-blue-500/25 hover:shadow-blue-500/40'}
                `}
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#projects"
                className={`
                  group inline-flex items-center justify-center gap-3 px-8 py-4 
                  rounded-2xl font-bold text-sm border transition-all duration-300
                  hover:-translate-y-1
                  ${isDark 
                    ? 'border-white/20 text-gray-300 hover:bg-white/5 hover:border-white/30' 
                    : 'border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400'
                  }
                `}>
                View Portfolio
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ===== CSS ANIMATIONS ===== */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
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

export default Service;