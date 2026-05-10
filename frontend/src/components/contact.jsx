
import { useState } from 'react';
import api from '../../api/api';

const Contact = () => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  // ✅ UPDATED: Matches Django ProjectInquiry model fields exactly
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Make POST request to /message/ endpoint
      // Field names match Django model exactly
      const response = await api.post('/message/', {
        full_name: formData.full_name,
        email: formData.email,
        subject: formData.subject,
        project_type: formData.project_type || null,
        budget: formData.budget || null,
        message: formData.message
      });

      // Check if request was successful
      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
        
        // Reset after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ 
            full_name: '', 
            email: '', 
            subject: '', 
            project_type: '', 
            budget: '', 
            message: '' 
          });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }

    } catch (err) {
      console.error('Contact Form Error:', err);
      
      // Handle different error types
      if (err.response) {
        // Server responded with error status
        if (err.response.status === 422) {
          // Validation error from backend
          const errorData = err.response.data;
          
          // Parse Django REST Framework validation errors
          if (typeof errorData === 'object' && errorData !== null) {
            // Format field-specific errors
            const errorMessages = Object.entries(errorData).map(([field, msgs]) => {
              const fieldName = field.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
              return `${fieldName}: ${Array.isArray(msgs) ? msgs.join(', ') : msgs}`;
            });
            setError(errorMessages.join(''));
          } else {
            setError(errorData.detail || errorData.message || 'Validation failed');
          }
        } else if (err.response.status === 429) {
          // Rate limited
          setError('Too many requests. Please try again later.');
        } else {
          setError(err.response.data?.message || err.response.data?.detail || 'Something went wrong. Please try again.');
        }
      } else if (err.request) {
        // Request made but no response received
        setError('Network error. Please check your connection and try again.');
      } else {
        // Error setting up request
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form manually
  const resetForm = () => {
    setSubmitted(false);
    setError(null);
    setFormData({ 
      full_name: '', 
      email: '', 
      subject: '', 
      project_type: '', 
      budget: '', 
      message: '' 
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      label: 'Email',
      value: 'abelsamuel841@email.com',
      href: 'mailto:abelsamuel841@email.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      label: 'Phone',
      value: '+251 957576652',
      href: 'tel:+251957576652'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      label: 'Location',
      value: 'Hawassa, Ethiopia',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/abelsam-coder/'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/abel-samuel-b079b7379/'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/abelala_c/'
    },
  
    {
      name: 'Telegram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      url: 'https://t.me/abelala-c'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-blue-100 text-blue-600 border border-blue-200">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto text-base text-slate-600">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          
          {/* Left Side - Contact Info & Hire Me */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hire Me Card */}
            <div className="relative p-8 rounded-3xl overflow-hidden backdrop-blur-xl border bg-gradient-to-br from-blue-600 to-cyan-500 border-transparent">
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Hire Me
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-white/90">
                  I'm available for freelance projects and full-time opportunities. Let's build something amazing together!
                </p>

                {/* Availability Status */}
                <div className="flex items-center gap-3 p-4 rounded-2xl mb-6 bg-white/20 backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-white">
                    Available for new projects
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <a
                    href="mailto:abelsamuel@email.com"
                    className="
                      flex items-center justify-center gap-2 w-full px-6 py-3.5 
                      bg-white text-blue-600 rounded-xl font-semibold text-sm
                      hover:bg-slate-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5
                    "
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Send Email
                  </a>
                  
                 
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="
                    group flex items-center gap-4 p-4 rounded-2xl backdrop-blur-xl border
                    transition-all duration-300 hover:-translate-x-1
                    bg-white/80 border-slate-200 hover:border-blue-300 hover:shadow-lg
                  "
                >
                  <div className="
                    w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                    transition-all duration-300 group-hover:scale-110
                    bg-blue-100 text-blue-600
                  ">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold mb-4 text-slate-900">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1
                      bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200
                    "
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl backdrop-blur-xl border bg-white/80 border-slate-200 shadow-lg">
              
              {/* Error Message Display */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-500">Error</p>
                      <p className="text-sm text-red-400 mt-1 whitespace-pre-line">{error}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setError(null)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {submitted ? (
                /* Success Message */
                <div className="text-center py-16">
                  <div className="
                    w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center
                    bg-gradient-to-r from-green-500 to-emerald-500
                  ">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">
                    Message Sent Successfully! 🎉
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  
                  {/* Send Another Button */}
                  <button
                    type="button"
                    onClick={resetForm}
                    className="
                      px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                      bg-slate-100 text-slate-700 hover:bg-slate-200
                    "
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    
                    {/* ✅ UPDATED: Full Name - matches Django model field */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                        maxLength={150}
                        placeholder="John Doe"
                        disabled={isSubmitting}
                        className={`
                          w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all
                          bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400
                          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                        className={`
                          w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all
                          bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400
                          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-slate-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      maxLength={200}
                      placeholder="Project Inquiry"
                      disabled={isSubmitting}
                      className={`
                        w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all
                        bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    
                    {/* ✅ UPDATED: Project Type - matches Django PROJECT_TYPES choices */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700">
                        Project Type
                      </label>
                      <select
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`
                          w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer
                          bg-slate-50 border-slate-200 text-slate-900
                          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                      >
                        <option value="">Select type</option>
                        {/* ✅ Values match Django model choices exactly */}
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="ai">AI / Machine Learning</option>
                        <option value="cyber">Cybersecurity</option>
                        <option value="api">API Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* ✅ UPDATED: Budget Range - matches Django BUDGET_RANGES (ETB) */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700">
                        Budget Range (ETB)
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`
                          w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer
                          bg-slate-50 border-slate-200 text-slate-900
                          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                      >
                        <option value="">Select budget</option>
                        {/* ✅ Values match Django model choices exactly */}
                        <option value="low">Under 100,000 ETB</option>
                        <option value="mid">100,000 - 300,000 ETB</option>
                        <option value="high">300,000 - 600,000 ETB</option>
                        <option value="enterprise">600,000+ ETB</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium mb-2 text-slate-700">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell me about your project..."
                      disabled={isSubmitting}
                      className={`
                        w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none
                        bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full flex items-center justify-center gap-2 px-8 py-4 
                      bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                      rounded-xl font-semibold text-sm
                      hover:from-blue-500 hover:to-cyan-400 
                      transition-all duration-300 shadow-lg shadow-blue-500/25 
                      hover:shadow-xl hover:-translate-y-0.5
                      disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0
                    "
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        </svg>
                      </>
                    )}
                  </button>
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
