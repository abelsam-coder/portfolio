import { useState, useEffect } from 'react';
import {
  Monitor, Smartphone, Shield, Brain, Code,
  ArrowRight, Check, Zap, ChevronRight, ChevronDown,
  Sparkles, Layers, MessageSquare, Clock,
  Rocket, Cpu, Lock, Globe, Code2, Database,
  Send, Settings, Star, ArrowUpRight, Play,
  Terminal, Cog
} from 'lucide-react';

const Service = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const toggleExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge frameworks',
      icon: Monitor,
      gradient: 'from-blue-500 to-cyan-400',
      accentColor: '#3B82F6',
      stats: '50+ Projects',
      howIBuild: [
        { tech: 'React.js', desc: 'Component-driven UI' },
        { tech: 'Django/Node', desc: 'RESTful API backend' },
        { tech: 'PostgreSQL', desc: 'Database optimization' },
        { tech: 'AWS/Vercel', desc: 'Cloud & CI/CD' }
      ]
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile solutions for iOS and Android',
      icon: Smartphone,
      gradient: 'from-violet-500 to-purple-400',
      accentColor: '#8B5CF6',
      stats: '20+ Apps',
      howIBuild: [
        { tech: 'React Native', desc: 'Cross-platform codebase' },
        { tech: 'Expo', desc: 'Rapid development' },
        { tech: 'Firebase', desc: 'Auth & real-time DB' },
        { tech: 'App Store', desc: 'Publishing & deployment' }
      ]
    },
    {
      title: 'Cyber Security',
      description: 'Comprehensive penetration testing and security audits',
      icon: Shield,
      gradient: 'from-red-500 to-orange-400',
      accentColor: '#EF4444',
      stats: '30+ Audits',
      howIBuild: [
        { tech: 'Burp Suite', desc: 'Web app testing' },
        { tech: 'Nmap/Nessus', desc: 'Vulnerability scanning' },
        { tech: 'Metasploit', desc: 'Exploitation testing' },
        { tech: 'Reports', desc: 'Findings & remediation' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent ML models and data-driven solutions',
      icon: Brain,
      gradient: 'from-emerald-500 to-teal-400',
      accentColor: '#10B981',
      stats: '15+ Models',
      howIBuild: [
        { tech: 'Python', desc: 'Core ML development' },
        { tech: 'TensorFlow/PyTorch', desc: 'Training & tuning' },
        { tech: 'Pandas/NumPy', desc: 'Data processing' },
        { tech: 'FastAPI', desc: 'Model API serving' }
      ]
    },
    {
      title: 'Telegram Bots',
      description: 'Automated bots and mini-apps for the Telegram ecosystem',
      icon: Send,
      gradient: 'from-sky-500 to-blue-400',
      accentColor: '#0EA5E9',
      stats: '40+ Bots',
      howIBuild: [
        { tech: 'Python/Node.js', desc: 'Bot core logic' },
        { tech: 'Telegraf/ptb', desc: 'Framework & API' },
        { tech: 'MongoDB', desc: 'Data management' },
        { tech: 'VPS/Heroku', desc: '24/7 hosting' }
      ]
    },
    {
      title: 'Software Management',
      description: 'Full infrastructure control, monitoring and maintenance',
      icon: Settings,
      gradient: 'from-indigo-500 to-violet-400',
      accentColor: '#6366F1',
      stats: '25+ Systems',
      howIBuild: [
        { tech: 'Linux/Windows', desc: 'Server admin' },
        { tech: 'Docker/K8s', desc: 'Container orchestration' },
        { tech: 'CI/CD', desc: 'Automated deploys' },
        { tech: 'Monitoring', desc: 'Uptime & performance' }
      ]
    }
  ];

  const projects = [
    {
      id: 1, name: 'E-Commerce Platform', category: 'web',
      price: '200K+', tech: ['React', 'Node.js', 'PostgreSQL'],
      icon: Globe, color: '#3B82F6', description: 'Full-stack marketplace with payments & analytics'
    },
    {
      id: 2, name: 'Chat Application', category: 'web',
      price: '140K+', tech: ['React', 'Socket.io', 'Redis'],
      icon: MessageSquare, color: '#10B981', description: 'Real-time messaging with rooms & file sharing'
    },
    {
      id: 3, name: 'ERP System', category: 'enterprise',
      price: '500K+', tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      icon: Database, color: '#6366F1', description: 'Enterprise resource planning & automation'
    },
    {
      id: 4, name: 'Mobile App', category: 'mobile',
      price: '200K+', tech: ['React Native', 'Firebase'],
      icon: Smartphone, color: '#EC4899', description: 'Cross-platform with push notifications'
    },
    {
      id: 5, name: 'Security Audit', category: 'security',
      price: '160K', tech: ['Burp Suite', 'Nmap'],
      icon: Lock, color: '#EF4444', description: 'Vulnerability assessment & hardening'
    },
    {
      id: 6, name: 'ML Solution', category: 'ml',
      price: '600K+', tech: ['Python', 'TensorFlow'],
      icon: Cpu, color: '#06B6D4', description: 'Predictive analytics & model deployment'
    },
    {
      id: 7, name: 'API Development', category: 'web',
      price: '80K+', tech: ['Django', 'REST'],
      icon: Code, color: '#8B5CF6', description: 'Scalable RESTful API architecture'
    },
    {
      id: 8, name: 'Telegram Bot', category: 'bot',
      price: '120K+', tech: ['Node.js', 'Telegraf', 'MongoDB'],
      icon: Send, color: '#0EA5E9', description: 'Automated bot with payments'
    },
    {
      id: 9, name: 'System Dashboard', category: 'management',
      price: '100K+', tech: ['Docker', 'Grafana', 'Prometheus'],
      icon: Settings, color: '#6366F1', description: 'Real-time monitoring & alerting'
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'web', label: 'Web', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'ml', label: 'AI/ML', icon: Cpu },
    { id: 'bot', label: 'Bots', icon: Send },
    { id: 'management', label: 'Management', icon: Settings }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="services" className={`
      relative py-20 lg:py-28 overflow-hidden transition-colors duration-700
      ${isDark ? 'bg-[#030712]' : 'bg-white'}
    `}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`
          absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[128px]
          animate-pulse-slow
          ${isDark ? 'bg-blue-600/12' : 'bg-blue-300/25'}
        `}></div>
        <div className={`
          absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full blur-[120px]
          animate-float-slow
          ${isDark ? 'bg-cyan-600/10' : 'bg-indigo-200/20'}
        `}></div>
        <div className={`
          absolute inset-0
          ${isDark ? 'opacity-[0.025]' : 'opacity-[0.015]'}
        `} style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ════════════════════════════════════════
            SECTION HEADER
        ════════════════════════════════════════ */}
        <div className="text-center mb-16 lg:mb-20">
          <div className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6
            border backdrop-blur-sm
            ${isDark
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-600'
            }
          `}>
            <Sparkles className="w-3.5 h-3.5" />
            Services
          </div>
          <h2 className={`
            text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            What I{' '}
            <span className={`
              bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_auto] animate-gradient
              ${isDark ? 'from-blue-400 via-cyan-300 to-blue-400' : 'from-blue-600 via-violet-600 to-cyan-600'}
            `}>
              Offer
            </span>
          </h2>
          <p className={`
            max-w-xl mx-auto text-base lg:text-lg
            ${isDark ? 'text-gray-400' : 'text-gray-600'}
          `}>
            End-to-end tech solutions crafted for performance and scale
          </p>
        </div>

        {/* ════════════════════════════════════════
            SERVICES — 3-COL WITH HOVER LIFT + GLOW
        ════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-28">
          {services.map((service, index) => {
            const isExpanded = expandedService === index;
            const isHovered = hoveredCard === `s-${index}`;

            return (
              <div
                key={index}
                className={`
                  group relative rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-500 hover:-translate-y-2.5
                  ${isDark
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-white/[0.12]'
                    : 'bg-white border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl'
                  }
                `}
                style={{
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  setHoveredCard(`s-${index}`);
                  e.currentTarget.style.boxShadow = `0 25px 60px -12px ${service.accentColor}20, 0 0 0 1px ${service.accentColor}15`;
                }}
                onMouseLeave={(e) => {
                  setHoveredCard(null);
                  e.currentTarget.style.boxShadow = isDark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1)';
                }}
              >
                {/* Top gradient glow on hover */}
                <div className={`
                  absolute top-0 left-0 right-0 h-32 pointer-events-none
                  bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-[0.06]
                  transition-opacity duration-500 blur-xl
                `}></div>

                <div className="relative p-7">

                  {/* Icon + Stats Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center
                      bg-gradient-to-br ${service.gradient}
                      text-white shadow-lg
                      transform transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-6
                    `}
                    style={{
                      boxShadow: `0 8px 24px ${service.accentColor}40`
                    }}
                    >
                      <service.icon className="w-7 h-7" />
                    </div>

                    <span className={`
                      px-3 py-1 rounded-lg text-[11px] font-bold
                      ${isDark
                        ? 'bg-white/[0.05] text-gray-400'
                        : 'bg-gray-100 text-gray-500'
                      }
                    `}>
                      {service.stats}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-xl font-bold mb-2
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`
                    text-sm leading-relaxed mb-5
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                  `}>
                    {service.description}
                  </p>

                  {/* Expandable Stack */}
                  <div className={`
                    overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
                    ${isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className={`
                      pt-5 pb-3 border-t
                      ${isDark ? 'border-white/[0.06]' : 'border-gray-100'}
                    `}>
                      <p className={`
                        text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5
                        ${isDark ? 'text-gray-500' : 'text-gray-400'}
                      `}>
                        <Code2 className="w-3 h-3" />
                        Tech Stack
                      </p>
                      <div className="space-y-1.5">
                        {service.howIBuild.map((item, idx) => (
                          <div key={idx} className={`
                            flex items-center gap-2 px-2 py-1.5 rounded-lg
                            ${isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-gray-50'}
                            transition-colors duration-200
                          `}>
                            <Check className={`w-3 h-3 flex-shrink-0 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                            <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                              {item.tech}
                            </span>
                            <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                              — {item.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleExpand(index); }}
                    className={`
                      flex items-center justify-between w-full pt-5 mt-1
                      border-t text-sm font-semibold
                      transition-colors duration-300
                      ${isDark
                        ? 'border-white/[0.06] text-gray-400 hover:text-white'
                        : 'border-gray-100 text-gray-500 hover:text-gray-900'
                      }
                    `}
                  >
                    <span>{isExpanded ? 'Show Less' : 'View Stack'}</span>
                    <ChevronDown className={`
                      w-4 h-4 transition-transform duration-400
                      ${isExpanded ? 'rotate-180' : 'rotate-0'}
                    `} />
                  </button>
                </div>

                {/* Bottom accent bar */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-[3px]
                  bg-gradient-to-r ${service.gradient}
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left
                `}></div>
              </div>
            );
          })}
        </div>

        {/* ════════════════════════════════════════
            PROJECTS — CLEAN 3-COL UNIFORM GRID
        ════════════════════════════════════════ */}
        <div className="mb-24">

          {/* Header */}
          <div className="text-center mb-10">
            <div className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6
              border backdrop-blur-sm
              ${isDark
                ? 'bg-violet-500/10 border-violet-500/20 text-violet-400'
                : 'bg-violet-50 border-violet-200 text-violet-600'
              }
            `}>
              <Rocket className="w-3.5 h-3.5" />
              Portfolio
            </div>

            <h3 className={`
              text-3xl md:text-4xl font-black tracking-tight mb-4
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              What I{' '}
              <span className={`
                bg-clip-text text-transparent bg-gradient-to-r
                ${isDark ? 'from-violet-400 via-fuchsia-400 to-pink-400' : 'from-violet-600 via-fuchsia-600 to-pink-600'}
              `}>
                Build
              </span>
            </h3>

            <p className={`max-w-lg mx-auto text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Real projects, transparent pricing, no surprises
            </p>
          </div>

          {/* Filter — Segmented Pill Bar */}
          <div className={`
            flex flex-wrap justify-center gap-1.5 mb-12 p-1.5 rounded-2xl max-w-xl mx-auto
            border
            ${isDark
              ? 'bg-white/[0.02] border-white/[0.06]'
              : 'bg-gray-50 border-gray-200'
            }
          `}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  px-4 py-2 rounded-xl text-xs font-bold
                  transition-all duration-300 flex items-center gap-1.5
                  ${activeTab === cat.id
                    ? isDark
                      ? 'bg-white text-gray-900 shadow-lg shadow-white/10'
                      : 'bg-gray-900 text-white shadow-lg'
                    : isDark
                      ? 'text-gray-500 hover:text-white hover:bg-white/[0.04]'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-white'
                  }
                `}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid — Uniform 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`
                  group relative rounded-2xl overflow-hidden
                  transition-all duration-500 hover:-translate-y-2
                  ${isDark
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-white/[0.12]'
                    : 'bg-white border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl'
                  }
                `}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 25px 60px -12px ${project.color}18, 0 0 0 1px ${project.color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = isDark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1)';
                }}
              >
                {/* Color glow top */}
                <div
                  className="absolute top-0 left-0 right-0 h-28 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(ellipse at 50% -20%, ${project.color}${isDark ? '15' : '10'}, transparent 70%)`
                  }}
                ></div>

                <div className="relative p-6">

                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `${project.color}${isDark ? '15' : '10'}`,
                        color: project.color
                      }}
                    >
                      <project.icon className="w-5 h-5" />
                    </div>

                    <div
                      className="px-3 py-1.5 rounded-lg text-xs font-black tracking-wide"
                      style={{
                        background: `${project.color}${isDark ? '12' : '08'}`,
                        color: project.color
                      }}
                    >
                      ETB {project.price}
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className={`
                    text-base font-bold mb-1.5
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {project.name}
                  </h4>

                  {/* Description */}
                  <p className={`text-sm mb-5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className={`
                        px-2 py-0.5 rounded-md text-[11px] font-semibold
                        ${isDark
                          ? 'bg-white/[0.04] text-gray-400'
                          : 'bg-gray-100 text-gray-600'
                        }
                      `}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: Duration + CTA */}
                  <div className={`
                    flex items-center justify-between pt-4 border-t
                    ${isDark ? 'border-white/[0.05]' : 'border-gray-100'}
                  `}>
                    <span className={`
                      flex items-center gap-1 text-xs
                      ${isDark ? 'text-gray-600' : 'text-gray-400'}
                    `}>
                      <Clock className="w-3 h-3" />
                      {project.category === 'bot' ? '1-4 wks' :
                       project.category === 'management' ? '1-3 wks' :
                       project.category === 'security' ? '1-2 wks' : '2-6 wks'}
                    </span>

                    <a
                      href="#contact"
                      className={`
                        inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold
                        transition-all duration-300 hover:scale-105 active:scale-95
                        text-white
                      `}
                      style={{
                        background: project.color,
                        boxShadow: `0 4px 14px ${project.color}35`
                      }}
                    >
                      Get Quote
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: project.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════
            PROCESS — HORIZONTAL STEPS
        ════════════════════════════════════════ */}
        <div className={`
          relative rounded-3xl p-8 lg:p-12 overflow-hidden
          border
          ${isDark
            ? 'bg-[#0a0f1e] border-white/[0.06]'
            : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 shadow-lg'
          }
        `}>

          <div className={`
            absolute top-0 right-0 w-72 h-72 rounded-full blur-[100px] pointer-events-none
            ${isDark ? 'bg-blue-600/8' : 'bg-blue-200/30'}
          `}></div>

          <div className="relative z-10">
            <h3 className={`
              text-2xl md:text-3xl font-bold text-center mb-14
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

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {/* Connector line (desktop) */}
              <div className={`
                hidden lg:block absolute top-8 left-[15%] right-[15%] h-[2px]
                ${isDark ? 'bg-white/[0.04]' : 'bg-gray-200'}
              `}></div>

              {[
                { step: '01', title: 'Consult', desc: 'Discuss your vision & goals', icon: Zap },
                { step: '02', title: 'Plan', desc: 'Architecture & roadmap', icon: Layers },
                { step: '03', title: 'Build', desc: 'Develop, test & iterate', icon: Code },
                { step: '04', title: 'Launch', desc: 'Deploy & ongoing support', icon: Rocket }
              ].map((item, index) => (
                <div key={index} className="text-center group/step relative">

                  <div className={`
                    relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5
                    bg-gradient-to-br from-blue-600 to-cyan-500 text-white
                    shadow-lg transform transition-all duration-500
                    group-hover/step:scale-110 group-hover/step:rotate-6
                    z-10
                  `}
                  style={{ boxShadow: '0 8px 24px rgba(59,130,246,0.3)' }}
                  >
                    <span className="text-lg font-black">{item.step}</span>

                    <span className={`
                      absolute -top-2.5 -right-2.5 w-7 h-7 rounded-lg flex items-center justify-center
                      transition-transform duration-300 group-hover/step:scale-125
                      ${isDark ? 'bg-[#0a0f1e] text-white border border-white/10' : 'bg-white text-gray-900 shadow-lg'}
                    `}>
                      <item.icon className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h4 className={`
                    text-base font-bold mb-1
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            CTA
        ════════════════════════════════════════ */}
        <div className={`
          mt-20 relative rounded-3xl p-10 lg:p-16 overflow-hidden text-center
          border
          ${isDark
            ? 'bg-gradient-to-br from-blue-600/8 via-violet-600/4 to-cyan-600/8 border-white/[0.06]'
            : 'bg-gradient-to-br from-blue-50 via-violet-50 to-cyan-50 border-blue-100'
          }
        `}>
          <div className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] rounded-full blur-[100px] pointer-events-none
            ${isDark ? 'bg-blue-600/15' : 'bg-blue-300/25'}
          `}></div>

          <div className="relative z-10">
            <div className={`
              inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
              bg-gradient-to-br from-blue-600 to-cyan-500 text-white
              shadow-lg transform transition-transform duration-500 hover:scale-110
            `}
            style={{ boxShadow: '0 8px 24px rgba(59,130,246,0.35)' }}
            >
              <Zap className="w-8 h-8" />
            </div>

            <h3 className={`
              text-2xl md:text-3xl lg:text-4xl font-black mb-4
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              Ready to Start?
            </h3>
            <p className={`
              max-w-lg mx-auto mb-8 text-base
              ${isDark ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Let's build something remarkable together
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className={`
                group inline-flex items-center justify-center gap-3 px-8 py-4
                rounded-2xl font-bold text-sm text-white
                bg-gradient-to-r from-blue-600 to-cyan-500
                hover:from-blue-500 hover:to-cyan-400
                transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]
                shadow-xl hover:shadow-2xl
              `}
              style={{ boxShadow: '0 8px 30px rgba(59,130,246,0.3)' }}
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className={`
                inline-flex items-center justify-center gap-2 px-8 py-4
                rounded-2xl font-bold text-sm border transition-all duration-300 hover:-translate-y-1
                ${isDark
                  ? 'border-white/15 text-gray-300 hover:bg-white/5 hover:border-white/25'
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

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }

        @keyframes gradient {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .animate-gradient { animation: gradient 4s ease infinite; }
      `}</style>
    </section>
  );
};

export default Service;
