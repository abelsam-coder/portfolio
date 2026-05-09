import { useState, useEffect } from 'react';

const Service = () => {
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

  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive, scalable web applications using React, Django, Flask, and modern technologies with clean code architecture.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      features: ['React.js', 'Django', 'Flask', 'REST APIs'],
      color: 'from-blue-600 to-cyan-500',
      shadowColor: 'shadow-blue-500/25'
    },
    {
      title: 'Mobile App Dev',
      description: 'Cross-platform mobile applications using React Native for iOS and Android with native performance and beautiful UI.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      features: ['React Native', 'iOS & Android', 'UI/UX Design', 'App Store Deploy'],
      color: 'from-violet-600 to-purple-500',
      shadowColor: 'shadow-violet-500/25'
    },
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments including network penetration testing, web application security, and vulnerability analysis.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      features: ['Network Testing', 'Web App Sec', 'Vuln Assessment', 'Reports'],
      color: 'from-red-600 to-orange-500',
      shadowColor: 'shadow-red-500/25'
    },
    {
      title: 'Machine Learning',
      description: 'Intelligent solutions using Python, TensorFlow, and ML algorithms for data analysis, prediction models, and automation.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ),
      features: ['Python', 'TensorFlow', 'Data Analysis', 'Predictive Models'],
      color: 'from-emerald-600 to-teal-500',
      shadowColor: 'shadow-emerald-500/25'
    },
    {
      title: 'API Development',
      description: 'Robust RESTful and GraphQL API development with proper authentication, documentation, and scalability in mind.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      features: ['REST APIs', 'GraphQL', 'Authentication', 'Documentation'],
      color: 'from-amber-500 to-yellow-500',
      shadowColor: 'shadow-amber-500/25'
    },
    {
      title: 'Security Consulting',
      description: 'Expert guidance on cybersecurity best practices, compliance, security architecture, and risk management strategies.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      features: ['Security Audit', 'Compliance', 'Risk Assessment', 'Training'],
      color: 'from-pink-600 to-rose-500',
      shadowColor: 'shadow-pink-500/25'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', desc: 'Discuss your requirements and goals' },
    { step: '02', title: 'Planning', desc: 'Create detailed project roadmap' },
    { step: '03', title: 'Development', desc: 'Build with clean, efficient code' },
    { step: '04', title: 'Delivery', desc: 'Test, deploy & provide support' }
  ];

  return (
    <section id="service" className={`
      py-20 transition-colors duration-300
      ${isDarkMode ? 'bg-slate-950' : 'bg-white'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`
            inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4
            ${isDarkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-100 text-blue-600 border border-blue-200'}
          `}>
            What I Offer
          </span>
          <h2 className={`
            text-3xl md:text-4xl lg:text-5xl font-bold mb-4
            ${isDarkMode ? 'text-white' : 'text-slate-900'}
          `}>
            My Services
          </h2>
          <p className={`
            max-w-2xl mx-auto text-base
            ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}
          `}>
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group relative p-6 rounded-3xl backdrop-blur-xl border 
                transition-all duration-500 hover:-translate-y-2
                ${isDarkMode 
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/30' 
                  : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50'
                }
              `}
            >
              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} 
                flex items-center justify-center text-white mb-5
                shadow-lg ${service.shadowColor}
                group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
              `}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {service.description}
              </p>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${isDarkMode 
                        ? 'bg-slate-800 text-slate-400 border border-slate-700' 
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }
                    `}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className={`
                mt-5 flex items-center gap-2 text-sm font-semibold opacity-0 
                group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0
                ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}
              `}>
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className={`
          rounded-3xl p-8 md:p-12 backdrop-blur-xl border mb-12
          ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'}
        `}>
          <h3 className={`
            text-2xl md:text-3xl font-bold text-center mb-10
            ${isDarkMode ? 'text-white' : 'text-slate-900'}
          `}>
            How I Work
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className={`
                  inline-flex items-center justify-center w-16 h-16 rounded-2xl text-2xl font-bold mb-4
                  bg-gradient-to-br from-blue-600 to-cyan-500 text-white
                  shadow-lg shadow-blue-500/30
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  {item.step}
                </div>

                {/* Title */}
                <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h4>

                {/* Description */}
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>

                {/* Connector Line (except last) */}
                {index < processSteps.length - 1 && (
                  <div className={`
                    hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5
                    ${isDarkMode ? 'bg-slate-800' : 'bg-slate-300'}
                  `}>
                    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-transparent opacity-30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`
          text-center p-10 rounded-3xl backdrop-blur-xl border
          ${isDarkMode ? 'bg-gradient-to-br from-slate-900 to-slate-900/50 border-slate-800' : 'bg-gradient-to-br from-blue-50 to-cyan-50/30 border-blue-100'}
        `}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Have a Project in Mind?
          </h3>
          <p className={`mb-8 max-w-xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="
                inline-flex items-center justify-center gap-2 px-8 py-4 
                bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                rounded-full font-semibold text-sm
                hover:from-blue-500 hover:to-cyan-400 
                transition-all duration-300 shadow-lg shadow-blue-500/30 
                hover:shadow-xl hover:-translate-y-0.5
              "
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#projects"
              className={`
                inline-flex items-center justify-center gap-2 px-8 py-4 
                rounded-full font-semibold text-sm border transition-all duration-300
                hover:-translate-y-0.5
                ${isDarkMode 
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-800' 
                  : 'border-slate-300 text-slate-700 hover:bg-white'
                }
              `}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;