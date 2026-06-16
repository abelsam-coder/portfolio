import { useState, useEffect } from 'react';
import api from '../../api/api';

// Import only SAFE Lucide icons (these definitely exist)
import { 
  Mail, Phone, MapPin, Send, User, MessageSquare, 
  Briefcase, DollarSign, CheckCircle, AlertCircle,
  ChevronRight, Sparkles
} from 'lucide-react';

// ===== CUSTOM ICON COMPONENTS (Fallback for problematic imports) =====

// GitHub Icon
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// LinkedIn Icon
const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Instagram Icon
const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Telegram Icon  
const TelegramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const Contact = () => {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    project_type: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  // Detect dark mode
  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await api.post('/message/', {
        full_name: formData.full_name,
        email: formData.email,
        subject: formData.subject,
        project_type: formData.project_type || null,
        budget: formData.budget || null,
        message: formData.message
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ full_name: '', email: '', subject: '', project_type: '', budget: '', message: '' });
        }, 5000);
      }
    } catch (err) {
      if (err.response?.status === 422) {
        const data = err.response.data;
        if (typeof data === 'object') {
          const NEWLINE = '\n';
          const errorMessages = Object.entries(data).map(([k, v]) => {
            const value = Array.isArray(v) ? v.join(', ') : v;
            return `${k}: ${value}`;
          });
          setError(errorMessages.join(NEWLINE));
        } else {
          setError(data.detail || 'Validation failed');
        }
      } else {
        setError(err.response?.data?.detail || 'Something went wrong');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError(null);
    setFormData({ full_name: '', email: '', subject: '', project_type: '', budget: '', message: '' });
  };

  // Contact info cards
  const contactCards = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'abelsamuel841@email.com', href: 'mailto:abelsamuel841@email.com', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+251 957576652', href: 'tel:+251957576652', color: 'text-green-500', bg: 'bg-green-500/10' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Hawassa, Ethiopia', href: '#', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { icon: <Send className="w-5 h-5" />, label: 'Response Time', value: '< 24 hours', href: '#', color: 'text-purple-500', bg: 'bg-purple-500/10' }
  ];

  // Social links using custom icon components
  const socials = [
    { name: 'GitHub', icon: <GithubIcon />, url: 'https://github.com/abelsam-coder/', hover: 'hover:bg-gray-800 dark:hover:bg-gray-700' },
    { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/abelala-c/', hover: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/abelala_c/', hover: 'hover:bg-pink-600' },
    { name: 'Telegram', icon: <TelegramIcon />, url: 'https://t.me/abelala-c', hover: 'hover:bg-sky-500' }
  ];

  // Style object for dark mode select options
  const selectOptionStyle = isDark ? {
    backgroundColor: '#1f2937',
    color: '#f3f4f6'
  } : {};

  return (
    <section id="contact" className={`
      relative py-20 lg:py-28 overflow-hidden transition-colors duration-700
      ${isDark ? 'bg-[#030712]' : 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30'}
    `}>
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 bg-gradient-to-bl from-violet-500 to-transparent ${isDark ? 'opacity-10' : ''}`} />
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 bg-gradient-to-tr from-cyan-500 to-transparent ${isDark ? 'opacity-10' : ''}`} />
        
        <div className={`absolute inset-0 opacity-[0.03]`} style={{
          backgroundImage: `linear-gradient(${isDark?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.05)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.05)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Dark mode option styles */}
      {isDark && (
        <style>{`
          select option {
            background-color: #1f2937;
            color: #f3f4f6;
          }
        `}</style>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          
          {/* Badge */}
          <div className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 border backdrop-blur-sm transition-all duration-500
            ${isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}
          `}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Work
            <ChevronRight className="w-3 h-3" />
          </div>

          <h2 className={`
            text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight transition-colors duration-500
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Let's Start a{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Conversation
              </span>
              <svg className={`absolute -bottom-1 left-0 w-full h-3 ${isDark ? 'text-violet-900/40' : 'text-violet-200/60'}`} viewBox="0 0 200 12" fill="currentColor">
                <path d="M2 8c20-4 40-6 60-5s40 3 60 2 40-2 76 1v6H2z"/>
              </svg>
            </span>
          </h2>

          <p className={`text-lg leading-relaxed max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have an idea? A project? Or just want to say hello? Fill out the form and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Info & Socials */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            
            {/* Contact Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {contactCards.map((card, i) => (
                <a key={i} href={card.href}
                  className={`
                    group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                    ${isDark ? 'bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.08]' : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-gray-100/50'}
                  `}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.bg}`}>
                    <span className={card.color}>{card.icon}</span>
                  </div>
                  <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{card.label}</p>
                  <p className={`text-sm font-semibold truncate ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{card.value}</p>
                </a>
              ))}
            </div>

            {/* Why Work Together Card */}
            <div className={`
              p-6 rounded-2xl border
              ${isDark ? 'bg-gradient-to-br from-violet-600/10 to-purple-600/5 border-violet-500/20' : 'bg-violet-50 border-violet-100'}
            `}>
              <h3 className={`font-bold text-lg mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Sparkles className="w-5 h-5 text-violet-500" /> Why Work With Me?
              </h3>
              <ul className="space-y-3">
                {['Clean, maintainable code', 'On-time delivery guarantee', 'Post-launch support included', 'Transparent communication'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${isDark ? 'text-violet-400' : 'text-violet-500'}`} />
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Connect on Social Media
              </p>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
                    className={`
                      p-3 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:scale-105
                      ${isDark ? 'bg-white/[0.05] border-white/10 text-gray-400 hover:text-white hover:border-white/20' : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:shadow-md'}
                      ${social.hover}
                    `}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className={`
              relative p-6 sm:p-8 lg:p-10 rounded-3xl overflow-hidden transition-all duration-500
              ${isDark ? 'bg-white/[0.03] border border-white/10 shadow-2xl shadow-black/20' : 'bg-white border border-gray-200/80 shadow-xl shadow-gray-200/30'}
            `}>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />

              {/* Error Display */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <pre className="text-sm text-red-400 whitespace-pre-wrap font-sans">{error}</pre>
                    <button type="button" onClick={() => setError(null)} className="ml-auto text-red-400 hover:text-red-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                  </div>
                </div>
              )}

              {submitted ? (
                /* Success State */
                <div className="py-16 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30`}>
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent Successfully!</h3>
                  <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Thank you for reaching out! I'll get back to you within 24 hours.</p>
                  <button type="button" onClick={resetForm} className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${isDark ? 'bg-white/10 text-gray-300 hover:bg-white/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={`flex items-center gap-2 text-sm font-medium mb-2 transition-colors ${focusedField === 'full_name' ? 'text-violet-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <User className="w-4 h-4" /> Full Name *
                      </label>
                      <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required maxLength={150} placeholder="John Doe" disabled={isSubmitting}
                        onFocus={() => setFocusedField('full_name')} onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-300 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 ${isDark ? 'bg-white/[0.05] border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      />
                    </div>
                    <div>
                      <label className={`flex items-center gap-2 text-sm font-medium mb-2 transition-colors ${focusedField === 'email' ? 'text-blue-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Mail className="w-4 h-4" /> Email Address *
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" disabled={isSubmitting}
                        onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 ${isDark ? 'bg-white/[0.05] border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="mb-5">
                    <label className={`flex items-center gap-2 text-sm font-medium mb-2 transition-colors ${focusedField === 'subject' ? 'text-purple-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <MessageSquare className="w-4 h-4" /> Subject *
                    </label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required maxLength={200} placeholder="What's this about?" disabled={isSubmitting}
                      onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-300 focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 ${isDark ? 'bg-white/[0.05] border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={`flex items-center gap-2 text-sm font-medium mb-2 transition-colors ${focusedField === 'project_type' ? 'text-emerald-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Briefcase className="w-4 h-4" /> Project Type
                      </label>
                      <select name="project_type" value={formData.project_type} onChange={handleChange} disabled={isSubmitting}
                        onFocus={() => setFocusedField('project_type')} onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none appearance-none cursor-pointer transition-all focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 ${isDark ? 'bg-white/[0.05] border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <option value="" style={selectOptionStyle}>Select type...</option>
                        <option value="web" style={selectOptionStyle}>Web Development</option>
                        <option value="mobile" style={selectOptionStyle}>Mobile App</option>
                        <option value="ai" style={selectOptionStyle}>AI / Machine Learning</option>
                        <option value="cyber" style={selectOptionStyle}>Cybersecurity</option>
                        <option value="api" style={selectOptionStyle}>API Development</option>
                        <option value="other" style={selectOptionStyle}>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={`flex items-center gap-2 text-sm font-medium mb-2 transition-colors ${focusedField === 'budget' ? 'text-amber-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <DollarSign className="w-4 h-4" /> Budget Range
                      </label>
                      <select name="budget" value={formData.budget} onChange={handleChange} disabled={isSubmitting}
                        onFocus={() => setFocusedField('budget')} onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none appearance-none cursor-pointer transition-all focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 ${isDark ? 'bg-white/[0.05] border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <option value="" style={selectOptionStyle}>Select budget...</option>
                        <option value="low" style={selectOptionStyle}>Under 100,000 ETB</option>
                        <option value="mid" style={selectOptionStyle}>100,000 - 300,000 ETB</option>
                        <option value="high" style={selectOptionStyle}>300,000 - 600,000 ETB</option>
                        <option value="enterprise" style={selectOptionStyle}>600,000+ ETB</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="mb-8">
                    <label className={`flex items-center gap-2 text-sm font-medium mb-2 transition-colors ${focusedField === 'message' ? 'text-pink-500' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <MessageSquare className="w-4 h-4" /> Your Message *
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project, goals, timeline..." disabled={isSubmitting}
                      onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none resize-none transition-all duration-300 focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 ${isDark ? 'bg-white/[0.05] border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" disabled={isSubmitting}
                    className={`
                      group relative w-full flex items-center justify-center gap-3 px-8 py-4
                      bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600
                      text-white rounded-xl font-semibold text-base transition-all duration-300
                      hover:shadow-xl hover:shadow-purple-500/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]
                      disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 bg-[length:200%_auto] hover:bg-right
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <Send className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>

                  <p className={`text-center text-xs mt-4 flex items-center justify-center gap-1.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    <CheckCircle className="w-3 h-3" /> Your information is secure and will never be shared.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
