import { useState, useEffect } from 'react';

const Testimony = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

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

  const testimonials = [
    {
      id: 1,
      name: 'Natinael Birhanu',
      role: 'CEO',
      company: 'Ethioglobal Digital',
      content: 'Abel delivered exceptional work on our Ethioglobal Digital platform. His integration of AI chatbot technology transformed our customer service operations completely.',
      rating: 5,
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 2,
      name: 'Samrawit Samuel',
      role: 'Founder',
      company: 'Samri Collection',
      content: 'Working with Abel on our e-commerce platform was an amazing experience. He transformed our business idea into a fully functional online store with beautiful design.',
      rating: 5,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Aschalech Yohannes',
      role: 'Manager',
      company: 'Nani Cafe',
      content: 'Abel built an incredible digital solution for our restaurant. The online ordering system has streamlined our operations completely!',
      rating: 5,
      color: 'from-orange-500 to-pink-500'
    }
  ];

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Star Icon
  const StarIcon = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );

  // Quote Icon
  const QuoteIcon = () => (
    <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  );

  return (
    <section id="testimony" className={`
      relative py-20 overflow-hidden transition-colors duration-700
      ${isDark ? 'bg-[#030712]' : 'bg-white'}
    `}>
      
      {/* Simple Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`
          absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30
          bg-gradient-to-br from-violet-500 to-purple-600
        `}></div>
        <div className={`
          absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-30
          bg-gradient-to-tr from-blue-500 to-cyan-500
        `}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className={`
            inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4
            bg-gradient-to-r from-violet-500/10 to-purple-500/10
            text-violet-600 dark:text-violet-400 border border-violet-200/50 dark:border-violet-500/20
          `}>
            ⭐ TESTIMONIALS
          </span>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What Our{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-xl mx-auto`}>
            Don't just take our word for it - hear from some of our amazing clients
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className={`
          relative max-w-4xl mx-auto p-8 md:p-12 rounded-3xl
          transition-all duration-500
          ${isDark 
            ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
            : 'bg-white shadow-xl shadow-gray-200/50 border border-gray-100'
          }
        `}>
          
          {/* Gradient Accent Top Border */}
          <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${testimonials[activeIndex].color}`}></div>

          {/* Quote Icon */}
          <div className={`${isDark ? 'text-violet-400' : 'text-violet-500'}`}>
            <QuoteIcon />
          </div>

          {/* Stars */}
          <div className="flex gap-1 mt-4 mb-6">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <StarIcon key={i} filled={true} />
            ))}
          </div>

          {/* Content */}
          <p className={`
            text-lg md:text-xl leading-relaxed mb-8 italic
            ${isDark ? 'text-gray-200' : 'text-gray-700'}
          `}>
            "{testimonials[activeIndex].content}"
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            
            <div className="flex items-center gap-4">
              {/* Avatar with Gradient */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold
                bg-gradient-to-br ${testimonials[activeIndex].color}
                shadow-lg
              `}>
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              
              <div>
                <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {testimonials[activeIndex].name}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                </p>
              </div>
            </div>

            {/* Company Badge */}
            <span className={`
              px-4 py-2 rounded-full text-xs font-medium
              bg-gradient-to-r ${testimonials[activeIndex].color} text-white
            `}>
              {testimonials[activeIndex].company}
            </span>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8 pt-6 border-t border-dashed" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${activeIndex === index 
                    ? 'w-8 bg-gradient-to-r from-violet-500 to-purple-600' 
                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* All Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`
                p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1
                ${activeIndex === index
                  ? isDark
                    ? 'bg-white/10 border-2 border-violet-500/50 shadow-lg shadow-violet-500/10'
                    : 'bg-white border-2 border-violet-300 shadow-lg shadow-violet-100'
                  : isDark
                    ? 'bg-white/5 border border-white/10 hover:border-white/20'
                    : 'bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }
              `}
            >
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`
                  w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold
                  bg-gradient-to-br ${testimonial.color}
                  ${activeIndex !== index && 'opacity-60'}
                `}>
                  {testimonial.name.charAt(0)}
                </div>
                
                <div>
                  <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} filled={true} className="w-3.5 h-3.5" />
                ))}
              </div>

              {/* Preview Text */}
              <p className={`text-sm line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                "{testimonial.content}"
              </p>

              {/* View Button */}
              <div className={`
                mt-4 pt-4 border-t flex items-center justify-between text-xs font-medium
                ${isDark ? 'border-white/10 text-violet-400' : 'border-gray-100 text-violet-600'}
              `}>
                <span>{activeIndex === index ? '✓ Currently viewing' : 'Click to view'}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className={`
          mt-16 p-6 rounded-2xl flex flex-wrap items-center justify-center gap-8 md:gap-16
          ${isDark 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100'
          }
        `}>
          {[
            { value: '100%', label: 'Satisfaction', color: 'from-violet-500 to-purple-500' },
            { value: '15+', label: 'Projects', color: 'from-blue-500 to-cyan-500' },
            { value: '5★', label: 'Average Rating', color: 'from-yellow-500 to-orange-500' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimony;