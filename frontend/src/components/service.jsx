import { useState } from 'react';
import { 
  Monitor, Smartphone, Shield, Brain, Code, HelpCircle,
  ShoppingCart, Rocket, MessageSquare, BarChart3, Lock, Bot,
  Link2, ShieldCheck, ArrowRight, Check, Zap, ClipboardList,
  Eye, Clock, Tag, ChevronRight, Sparkles, Layers,
  Terminal, Globe, Server, Database, Cpu, Webhook
} from 'lucide-react';

const Service = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Function to handle navigation to contact section
  const handleGetQuote = (projectName) => {
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      if (projectName) {
        sessionStorage.setItem('interestedProject', projectName);
      }
    }
  };

  // Services Data
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive, scalable web applications using React, Django, Flask, and modern technologies.',
      icon: <Monitor className="w-7 h-7" />,
      features: ['React.js', 'Django', 'Flask', 'REST APIs'],
      gradient: 'from-blue-600 via-cyan-500 to-blue-500',
      accentColor: '#3B82F6',
      priceRange: 'ETB 80K - 300K+'
    },
    {
      title: 'Mobile App Dev',
      description: 'Cross-platform mobile applications using React Native for iOS and Android with native performance.',
      icon: <Smartphone className="w-7 h-7" />,
      features: ['React Native', 'iOS & Android', 'UI/UX Design'],
      gradient: 'from-violet-600 via-purple-500 to-violet-500',
      accentColor: '#8B5CF6',
      priceRange: 'ETB 200K+'
    },
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments including network penetration testing and vulnerability analysis.',
      icon: <Shield className="w-7 h-7" />,
      features: ['Network Testing', 'Web App Sec', 'Vuln Assessment', 'Reports'],
      gradient: 'from-red-600 via-orange-500 to-red-500',
      accentColor: '#EF4444',
      priceRange: 'ETB 160K+'
    },
    {
      title: 'Machine Learning',
      description: 'Intelligent solutions using Python, TensorFlow, and ML algorithms for data analysis and automation.',
      icon: <Brain className="w-7 h-7" />,
      features: ['Python', 'Data Analysis', 'Predictive Models'],
      gradient: 'from-emerald-600 via-teal-500 to-emerald-500',
      accentColor: '#10B981',
      priceRange: 'ETB 600K+'
    },
    {
      title: 'API Development',
      description: 'Robust RESTful and GraphQL API development with proper authentication and documentation.',
      icon: <Code className="w-7 h-7" />,
      features: ['REST APIs', 'Authentication', 'Documentation'],
      gradient: 'from-amber-500 via-yellow-400 to-amber-500',
      accentColor: '#F59E0B',
      priceRange: 'ETB 80K+'
    },
    {
      title: 'Security Consulting',
      description: 'Expert guidance on cybersecurity best practices, compliance, security architecture, and risk management.',
      icon: <HelpCircle className="w-7 h-7" />,
      features: ['Security Audit', 'Compliance', 'Risk Assessment', 'Training'],
      gradient: 'from-pink-600 via-rose-500 to-pink-500',
      accentColor: '#EC4899',
      priceRange: 'ETB 240K+'
    }
  ];

  // Projects Portfolio Data
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-featured online store with payment gateway, inventory management, admin dashboard & analytics.',
      price: '200,000+',
      currency: 'ETB',
      techStack: ['React', 'Node.js','Django', 'Postgresql'],
      icon: <ShoppingCart className="w-7 h-7" />,
      color: '#3B82F6',
      timeline: '4-6 weeks',
      features: ['User Authentication', 'Product Catalog', 'Cart System', 'Payment Integration', 'Order Tracking', 'Admin Panel']
    },
    {
      id: 2,
      name: 'Landing Page',
      category: 'web',
      description: 'High-converting landing pages optimized for SEO, speed, and user engagement with stunning animations.',
      price: '60,000+',
      currency: 'ETB',
      techStack: ['React', 'Tailwind CSS', 'Three js'],
      icon: <Rocket className="w-7 h-7" />,
      color: '#8B5CF6',
      timeline: '1-2 weeks',
      features: ['Responsive Design', 'SEO Optimized', 'Contact Forms', 'Analytics', 'A/B Ready', 'Fast Loading']
    },
    {
      id: 3,
      name: 'Real-Time Chat Application',
      category: 'web',
      description: 'Feature-rich chat app with real-time messaging, file sharing, video calls, and end-to-end encryption.',
      price: '140,000+',
      currency: 'ETB',
      techStack: ['React', 'Websocket', 'Socketio', 'Redis'],
      icon: <MessageSquare className="w-7 h-7" />,
      color: '#10B981',
      timeline: '3-4 weeks',
      features: ['Real-time Messaging', 'File Sharing', 'Video Calls', 'Group Chats', 'Encryption', 'Notifications']
    },
    {
      id: 4,
      name: 'ERP System',
      category: 'web',
      description: 'Enterprise Resource Planning solution with HR, inventory, finance, CRM modules and reporting.',
      price: '300,000+',
      currency: 'ETB',
      techStack: ['Django', 'PostgreSQL', 'React', 'Redis'],
      icon: <BarChart3 className="w-7 h-7" />,
      color: '#F59E0B',
      timeline: '8-12 weeks',
      features: ['HR Management', 'Inventory', 'Finance Module', 'CRM', 'Reports', 'Role-based Access']
    },
    {
      id: 5,
      name: 'Mobile Application',
      category: 'mobile',
      description: 'Cross-platform mobile apps with native-like performance, push notifications, and offline support.',
      price: '200,000+',
      currency: 'ETB',
      techStack: ['React Native', 'supabase'],
      icon: <Smartphone className="w-7 h-7" />,
      color: '#EC4899',
      timeline: '4-8 weeks',
      features: ['Cross Platform', 'Push Notifications', 'Offline Mode']
    },
    {
      id: 6,
      name: 'Penetration Test Package',
      category: 'security',
      description: 'Comprehensive security assessment including network scanning, vulnerability analysis, and detailed reports.',
      price: '160,000',
      currency: 'ETB',
      techStack: ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark'],
      icon: <Lock className="w-7 h-7" />,
      color: '#EF4444',
      timeline: '1-2 weeks',
      features: ['Network Scanning', 'Web App Testing', 'Social Engineering', 'Report', 'Remediation Guide']
    },
    {
      id: 7,
      name: 'ML/AI Solution',
      category: 'ml',
      description: 'Custom machine learning models for prediction, classification, NLP, computer vision, and data analysis.',
      price: '600,000+',
      currency: 'ETB',
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      icon: <Bot className="w-7 h-7" />,
      color: '#06B6D4',
      timeline: '6-12 weeks',
      features: ['Model Training', 'Data Pipeline', 'API Integration', 'Dashboard', 'Monitoring', 'Retraining']
    },
    {
      id: 8,
      name: 'API Development',
      category: 'api',
      description: 'Scalable RESTful/GraphQL APIs with authentication, rate limiting, documentation, and monitoring.',
      price: '80,000+',
      currency: 'ETB',
      techStack: ['DJango', 'PostgreSQL', 'Flask'],
      icon: <Link2 className="w-7 h-7" />,
      color: '#6366F1',
      timeline: '2-4 weeks',
      features: ['REST/GraphQL', 'JWT Auth', 'Rate Limiting', 'Docs', 'Testing', 'Deployment']
    },
    {
      id: 9,
      name: 'Security Consulting',
      category: 'security',
      description: 'Complete cybersecurity consulting including audits, compliance checks, team training, and strategy.',
      price: '240,000',
      currency: 'ETB',
      techStack: ['ISO 27001', 'OWASP', 'NIST Framework'],
      icon: <ShieldCheck className="w-7 h-7" />,
      color: '#DC2626',
      timeline: '2-4 weeks',
      features: ['Security Audit', 'Compliance Check', 'Risk Assessment', 'Team Training', 'Strategy Docs']
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length, icon: <Layers className="w-4 h-4" /> },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length, icon: <Globe className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length, icon: <Smartphone className="w-4 h-4" /> },
    { id: 'security', label: 'Security', count: projects.filter(p => p.category === 'security').length, icon: <Shield className="w-4 h-4" /> },
    { id: 'ml', label: 'ML/AI', count: projects.filter(p => p.category === 'ml').length, icon: <Cpu className="w-4 h-4" /> },
    { id: 'api', label: 'APIs', count: projects.filter(p => p.category === 'api').length, icon: <Webhook className="w-4 h-4" /> }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="service" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 bg-blue-400" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[450px] h-[450px] rounded-full blur-[110px] opacity-15 bg-purple-400" />
        
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================== HEADER ==================== */}
        <div className="text-center mb-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border backdrop-blur-xl transition-all duration-300 bg-blue-50 border-blue-200 text-blue-600">
            <Sparkles className="w-4 h-4" />
            What I Offer
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-slate-900">
            My{' '}
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-600 via-violet-600 to-cyan-600">
              Services
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base lg:text-lg leading-relaxed text-slate-600">
            Comprehensive technology solutions tailored to transform your business ideas into reality
          </p>
        </div>

        {/* ==================== SERVICES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-28">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:-translate-y-3 bg-white border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.accentColor}15, transparent 70%)` }}
              />

              <div className="relative p-7 lg:p-8">
                
                {/* Icon Container */}
                <div 
                  className={`relative w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white bg-gradient-to-br ${service.gradient} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  style={{ boxShadow: `0 15px 35px ${service.accentColor}30` }}
                >
                  {service.icon}
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title & Price Tag */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  
                  {/* Price badge */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider whitespace-nowrap ml-2 bg-slate-100 text-slate-600">
                    <Tag className="w-3 h-3" />
                    {service.priceRange}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5 text-slate-600">
                  {service.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Link - UPDATED: Now navigates to contact */}
                <button
                  onClick={() => handleGetQuote(service.title)}
                  className="flex items-center gap-2 text-sm font-semibold pt-4 border-t w-full transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100 border-slate-100 text-blue-600"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                style={{ background: `linear-gradient(to right, ${service.accentColor}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* ==================== WHAT I BUILD SECTION ==================== */}
        <div className="mb-20">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border backdrop-blur-xl bg-violet-50 border-violet-200 text-violet-600">
              <Terminal className="w-4 h-4" />
              Portfolio & Pricing
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-slate-900">
              What I{' '}
              <span className="bg-gradient-to-r bg-clip-text text-transparent from-violet-600 via-fuchsia-600 to-pink-600">
                Build
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-base text-slate-600">
              Explore my recent work with transparent pricing in Ethiopian Birr
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border flex items-center gap-2 ${
                  activeTab === cat.id
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-transparent border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-800'
                }`}
              >
                {cat.icon}
                {cat.label}
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  activeTab === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-white border border-slate-200 hover:border-slate-300 shadow-xl hover:shadow-2xl"
              >
                {/* Project Header with Icon & Price */}
                <div className="relative p-6 pb-4 border-b border-slate-100">
                  <div className="flex items-start justify-between">
                    
                    {/* Icon & Name */}
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ 
                          background: `${project.color}15`,
                          boxShadow: `0 8px 25px ${project.color}20`,
                          color: project.color
                        }}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-900">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-0.5 text-xs text-slate-500">
                          <Clock className="w-3 h-3" />
                          {project.timeline}
                        </div>
                      </div>
                    </div>

                    {/* Price Tag */}
                    <div 
                      className="px-3 py-1.5 rounded-xl font-black text-sm flex items-center gap-1.5"
                      style={{ 
                        background: `${project.color}12`,
                        color: project.color
                      }}
                    >
                      <Tag className="w-3.5 h-3.5" />
                      {project.currency} {project.price}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4">
                  
                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4 text-slate-600">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest mb-2 text-slate-400">
                      <Server className="w-3 h-3" />
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1 bg-slate-100 text-slate-600"
                        >
                          <Database className="w-2.5 h-2.5" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="pt-4 border-t border-dashed border-slate-200">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest mb-2.5 text-slate-400">
                      <Check className="w-3 h-3" />
                      Features Included
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {project.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <Check className={`w-3 h-3 flex-shrink-0`} style={{ color: project.color }} />
                          <span className="text-[11px] text-slate-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button - UPDATED: Now functional! */}
                <div className="px-6 pb-6">
                  <button 
                    onClick={() => handleGetQuote(project.name)}
                    className="
                      w-full py-3 rounded-xl text-sm font-bold
                      transition-all duration-300
                      flex items-center justify-center gap-2 group/btn
                      cursor-pointer
                      hover:scale-[1.02] hover:-translate-y-0.5
                      active:scale-[0.98]
                      bg-gradient-to-r from-blue-600 to-cyan-500 text-white
                      hover:from-blue-500 hover:to-cyan-400
                      shadow-lg shadow-blue-500/25
                      hover:shadow-xl hover:shadow-blue-500/40
                      border border-transparent
                    "
                  >
                    Get Quote
                    <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Color accent on hover */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: project.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ==================== PROCESS SECTION ==================== */}
        <div className="relative rounded-[2rem] p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-slate-50 to-white border border-slate-200">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none"
               style={{ background: '#93C5FD' }} 
          />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900">
              How I{' '}
              <span className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-600 to-blue-600">
                Work
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'Discuss requirements & goals', icon: <Zap className="w-6 h-6" /> },
                { step: '02', title: 'Planning', desc: 'Create detailed roadmap', icon: <ClipboardList className="w-6 h-6" /> },
                { step: '03', title: 'Development', desc: 'Build with clean code', icon: <Code className="w-6 h-6" /> },
                { step: '04', title: 'Delivery', desc: 'Test, deploy & support', icon: <Rocket className="w-6 h-6" /> }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="text-center">
                    
                    {/* Step Number Circle */}
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-5 bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/25 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <span className="text-2xl font-black">{item.step}</span>
                      
                      {/* Floating icon */}
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center transform group-hover:scale-125 transition-transform duration-300 shadow-lg">
                        {item.icon}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold mb-2 text-slate-900">
                      {item.title}
                    </h4>
                    
                    <p className="text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>

                  {/* Connector Arrow (not on last item) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] text-slate-300">
                      <svg className="w-full h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== CTA SECTION - UPDATED: Functional button */}
        <div className="mt-20 relative rounded-[2rem] p-10 lg:p-16 overflow-hidden text-center bg-gradient-to-br from-blue-50 via-violet-50 to-cyan-50 border border-blue-100">
          
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[120px] opacity-30 pointer-events-none"
               style={{ background: '#60A5FA' }} 
          />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white mb-6 shadow-xl shadow-blue-500/30">
              <Zap className="w-8 h-8" />
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 text-slate-900">
              Have a Project in Mind?
            </h3>
            
            <p className="max-w-xl mx-auto mb-8 text-base text-slate-600">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              {/* Primary CTA - UPDATED: Now functional */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleGetQuote(null);
                }}
                className="
                  group inline-flex items-center justify-center gap-3 px-8 py-4 
                  bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                  rounded-full font-bold text-sm
                  hover:from-blue-500 hover:to-cyan-400 
                  transition-all duration-300 shadow-xl shadow-blue-500/30 
                  hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1
                  cursor-pointer
                "
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Secondary CTA */}
              <a
                href="#projects"
                className="
                  group inline-flex items-center justify-center gap-3 px-8 py-4 
                  rounded-full font-bold text-sm border transition-all duration-300
                  hover:-translate-y-1 cursor-pointer
                  border-slate-300 text-slate-700 hover:bg-white hover:border-slate-400
                "
              >
                <Eye className="w-5 h-5" />
                View Projects
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;