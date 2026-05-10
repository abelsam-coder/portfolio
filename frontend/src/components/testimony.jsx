
import { useState, useEffect } from 'react';

const Testimony = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Natinael Birhanu',
      role: 'CEO',
      company: 'Ethioglobal Digital',
      content: 'Abel delivered exceptional work on our Ethioglobal Digital platform. His integration of AI chatbot technology transformed our customer service operations. The CRM system, invoice management, and analytics dashboard he built exceeded our expectations. Professional, skilled, and always delivers on time. Highly recommended!',
      rating: 5,
      project: 'Ethioglobal Digital + AI Chatbot',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      id: 2,
      name: 'Samrawit Samuel',
      role: 'Owner & Founder',
      company: 'Samri Collection',
      content: 'Working with Abel on our e-commerce platform was an amazing experience. He transformed our business idea into a fully functional online store with beautiful design, seamless payment integration, and efficient inventory management. Our sales increased significantly after launching the platform. Truly talented developer!',
      rating: 5,
      project: 'Samri Collection E-Commerce',
      color: 'from-violet-600 to-purple-600'
    },
    {
      id: 3,
      name: 'Aschalech Yohannes',
      role: 'Owner & Manager',
      company: 'Nani Cafe & Restaurant',
      content: 'Abel built an incredible digital solution for our restaurant. The online ordering system, table reservation feature, and kitchen display system have streamlined our operations completely. Customers love the easy ordering experience, and our team efficiency has improved tremendously. Best investment for our business!',
      rating: 5,
      project: 'Nani Cafe Digital Platform',
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const StarIcon = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );

  const QuoteIcon = () => (
    <svg className="w-10 h-10 opacity-20 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  );

  return (
    <section id="testimony" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-blue-100 text-blue-600 border border-blue-200">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            What Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-base text-slate-600">
            Feedback from business owners and CEOs I have worked with on real projects
          </p>
        </div>

        {/* Main Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16 p-8 md:p-12 rounded-3xl backdrop-blur-xl border overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30 border-slate-200">
          
          {/* Background Gradient */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${testimonials[activeIndex].color} opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2`} />
          
          {/* Quote Icon */}
          <div className="relative">
            <QuoteIcon />
          </div>

          {/* Content */}
          <div className="relative mt-4">
            
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <StarIcon key={i} filled={true} />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl leading-relaxed mb-8 italic text-slate-700">
              "{testimonials[activeIndex].content}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                
                {/* Avatar */}
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg
                  bg-gradient-to-br ${testimonials[activeIndex].color}
                `}>
                  {testimonials[activeIndex].name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-blue-600">
                    {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              {/* Project Badge */}
              <span className={`
                px-4 py-2 rounded-full text-xs font-semibold
                bg-gradient-to-r ${testimonials[activeIndex].color} text-white shadow-md
              `}>
                {testimonials[activeIndex].project}
              </span>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  h-2.5 rounded-full transition-all duration-300
                  ${activeIndex === index 
                    ? 'w-8 bg-gradient-to-r from-blue-600 to-cyan-500' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`
                group p-6 rounded-3xl backdrop-blur-xl border cursor-pointer
                transition-all duration-500 hover:-translate-y-2
                ${activeIndex === index
                  ? 'bg-white border-blue-300 shadow-xl shadow-blue-100 scale-[1.02]'
                  : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }
              `}
            >
              
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  
                  {/* Avatar */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold
                    bg-gradient-to-br ${testimonial.color}
                    shadow-lg group-hover:scale-110 transition-transform
                  `}>
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Stars Mini */}
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className={`w-3.5 h-3.5 ${testimonial.rating > i ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>

              {/* Company Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-slate-100 text-slate-600">
                {testimonial.company}
              </span>

              {/* Content Preview */}
              <p className="text-sm leading-relaxed line-clamp-4 mb-4 text-slate-600">
                "{testimonial.content}"
              </p>

              {/* Project Tag */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-medium px-2 py-1 rounded-md text-blue-600">
                  📌 {testimonial.project}
                </span>
                
                <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                  activeIndex === index ? 'text-blue-600' : 'text-slate-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 p-8 rounded-3xl backdrop-blur-xl border text-center bg-slate-50 border-slate-200">
          <p className="text-sm font-medium mb-6 text-slate-600">
            Trusted by Business Owners & CEOs
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { value: '100%', label: 'Client Satisfaction' },
              { value: '3+', label: 'CEO Endorsements' },
              { value: '5/5', label: 'Average Rating' },
              { value: '100%', label: 'On-Time Delivery' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs mt-1 text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
