import { useState, useEffect } from 'react';
import { 
  ExternalLink, ArrowRight, Filter,
  Check, Sparkles, Zap, Eye, Calendar,
  Layers, Star, ChevronRight
} from 'lucide-react';

// Custom GitHub Icon Component (fallback)
const GitHub = ({ className, size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

// Image imports (keep yours)
import samriCollection from '../assets/samri_collection.png';
import ecommerce from '../assets/e-commerce.png';
import elibrary from '../assets/Elibrary.png';
import elibraryAdmin from '../assets/ElibraryAdmin.png';
import ethioGlobal from '../assets/Ethio_global.png';
import dodai from '../assets/dodai.png';
import naniCafe from '../assets/nani Cafe.png';
import onlineExam from '../assets/online exam.png';

const Projects = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

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

  // All projects data (kept same)
  const projects = [
    {
      id: 1,
      title: 'Samri Collection',
      subtitle: 'E-Commerce Company',
      description: 'Complete e-commerce solution featuring product catalog management, shopping cart system, secure payment integration, order tracking, inventory management, and comprehensive admin dashboard.',
      category: ['ecommerce', 'fullstack'],
      images: [samriCollection, ecommerce],
      techStack: ['React.js', 'Django', 'PostgreSQL', 'Tailwind'],
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Tracking', 'Admin Dashboard'],
      liveUrl: 'https://frontend-5vi742394-abelala-cs-projects.vercel.app/',
      githubUrl: 'https://github.com/abelsam-coder/samri-collection-frontend/',
      status: 'Live',
      color: 'from-violet-500 to-purple-600',
      year: '2024'
    },
    {
      id: 2,
      title: 'Dodai Platform',
      subtitle: 'Rebuilt & Enhanced',
      description: 'Complete rebuild with modern architecture, enhanced performance, optimized database queries, improved UI/UX design, better security implementation, and scalable cloud deployment.',
      category: ['web', 'fullstack'],
      images: [dodai],
      techStack: ['React.js', 'Django', 'PostgreSQL'],
      features: ['Performance Optimization', 'Modern UI/UX', 'API Integration', 'Cloud Deployment', 'CI/CD Pipeline'],
      liveUrl: 'https://dodai-umber.vercel.app/',
      githubUrl: 'https://github.com/abelsam-coder/dodai',
      status: 'Completed',
      color: 'from-blue-500 to-cyan-500',
      year: '2024'
    },
    {
      id: 3,
      title: 'Nani Cafe & Restaurant',
      subtitle: 'Food & Beverage Platform',
      description: 'Digital transformation solution featuring online food ordering, table reservation management, digital menu display, kitchen display system, delivery tracking, and customer loyalty program.',
      category: ['ecommerce', 'mobile'],
      images: [naniCafe],
      techStack: ['React.js', 'Django', 'PostgreSQL', 'Tailwind'],
      features: ['Online Ordering', 'Table Reservation', 'Digital Menu', 'Delivery Tracking', 'Loyalty Program'],
      liveUrl: '#',
      githubUrl: 'https://github.com/abelsam-coder/Nano-Cafe',
      status: 'Live',
      color: 'from-orange-500 to-red-500',
      year: '2024'
    },
    {
      id: 4,
      title: 'Online Exam System',
      subtitle: 'Education Technology',
      description: 'Comprehensive examination platform with question bank management, automated proctoring with AI monitoring, timed exams with auto-submission, instant result generation, and certificate generation.',
      category: ['education', 'web'],
      images: [onlineExam],
      techStack: ['Python', 'Flask', 'MySQL', 'HTML/CSS'],
      features: ['Online Test Handling', 'Auto-Proctoring', 'Question Bank', 'Result Analytics', 'Certificate Generation'],
      liveUrl: '#',
      githubUrl: 'https://github.com/abelsam-coder/Nesha',
      status: 'Active',
      color: 'from-emerald-500 to-teal-500',
      year: '2023'
    },
    {
      id: 5,
      title: 'Ethioglobal Digital',
      subtitle: 'Business Solutions + AI Chatbot',
      description: 'Enterprise-grade platform integrated with AI-powered chatbot for intelligent customer support, CRM system, invoice management, project tracking, team collaboration tools, and smart analytics.',
      category: ['business', 'fullstack', 'ai'],
      images: [ethioGlobal],
      techStack: ['React.js', 'Django REST', 'PostgreSQL', 'Groq'],
      features: ['AI Chatbot Integration', 'CRM System', 'Invoice Management', 'Project Tracking', 'Smart Analytics'],
      liveUrl: '#',
      githubUrl: 'https://github.com/abelsam-coder/EthioGlobal-digital',
      status: 'Active',
      color: 'from-indigo-500 to-blue-600',
      year: '2023'
    },
    {
      id: 6,
      title: 'E-Library System',
      subtitle: 'Digital Library Platform',
      description: 'Modern digital library management system with ebook reader supporting multiple formats, reading progress tracking, advanced bookmarking, personalized recommendations, and admin panel for library management.',
      category: ['education', 'web'],
      images: [elibrary, elibraryAdmin],
      techStack: ['HTML/CSS', 'Flask', 'MySQL'],
      features: ['Ebook Reader', 'Progress Tracking', 'Bookmarks & Notes', 'Recommendations', 'Admin Panel'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      color: 'from-pink-500 to-rose-500',
      year: '2023'
    }
  ];

  // Filters
  const filters = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'ecommerce', label: 'E-Commerce', icon: Star },
    { id: 'web', label: 'Web App', icon: Zap },
    { id: 'education', label: 'Education', icon: Eye },
    { id: 'business', label: 'Business', icon: Filter }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className={`
      relative py-20 lg:py-28 overflow-hidden transition-colors duration-700
      ${isDark ? 'bg-[#030712]' : 'bg-white'}
    `}>
      
      {/* ===== BACKGROUND GRADIENTS ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Top right orb */}
        <div className={`
          absolute top-[-10%] right-[-5%] w-[550px] h-[550px] rounded-full blur-[130px]
          animate-pulse-slow
          ${isDark 
            ? 'bg-gradient-to-br from-violet-600/15 via-purple-600/10 to-transparent' 
            : 'bg-gradient-to-br from-violet-300/30 via-purple-200/20 to-transparent'
          }
        `}></div>

        {/* Bottom left orb */}
        <div className={`
          absolute bottom-[-10%] left-[-5%] w-[480px] h-[480px] rounded-full blur-[120px]
          animate-float-slow
          ${isDark 
            ? 'bg-gradient-to-tr from-blue-600/12 via-cyan-600/8 to-transparent' 
            : 'bg-gradient-to-tr from-blue-200/25 via-cyan-200/15 to-transparent'
          }
        `}></div>

        {/* Grid pattern */}
        <div className={`
          absolute inset-0 opacity-[0.02]
          ${isDark ? 'opacity-[0.03]' : ''}
        `} style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(139,92,246,0.3)' : 'rgba(139,92,246,0.2)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(139,92,246,0.3)' : 'rgba(139,92,246,0.2)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-16 lg:mb-20">
          
          {/* Badge */}
          <div className={`
            inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6
            border backdrop-blur-sm transition-all duration-500
            ${isDark 
              ? 'bg-violet-500/10 border-violet-500/20 text-violet-300' 
              : 'bg-violet-50 border-violet-200 text-violet-700'
            }
          `}>
            <Sparkles className="w-4 h-4" />
            My Portfolio
          </div>

          {/* Title */}
          <h2 className={`
            text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6
            transition-colors duration-500
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Featured{' '}
            <span className={`
              bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_auto] animate-gradient
              ${isDark 
                ? 'from-violet-400 via-purple-400 to-violet-400' 
                : 'from-violet-600 via-purple-600 to-indigo-600'
              }
            `}>
              Projects
            </span>
          </h2>

          <p className={`
            max-w-2xl mx-auto text-base lg:text-lg leading-relaxed mb-10
            transition-colors duration-500
            ${isDark ? 'text-gray-400' : 'text-gray-600'}
          `}>
            Real-world solutions built for businesses across e-commerce, education, food & beverage, and enterprise sectors
          </p>

          {/* Stats Row */}
          <div className={`
            flex flex-wrap justify-center gap-8 lg:gap-16 p-8 rounded-2xl
            transition-all duration-500
            ${isDark 
              ? 'bg-white/[0.02] border border-white/10' 
              : 'bg-gradient-to-r from-violet-50/50 to-purple-50/50 border border-violet-100'
            }
          `}>
            {[
              { num: '6+', label: 'Projects Built', gradient: 'from-violet-500 to-purple-500' },
              { num: '15+', label: 'Technologies', gradient: 'from-blue-500 to-cyan-500' },
              { num: '3', label: 'Live Systems', gradient: 'from-emerald-500 to-teal-500' }
            ].map((stat, i) => (
              <div key={i} className="group text-center cursor-default">
                <p className={`
                  text-3xl lg:text-4xl font-black mb-1
                  bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}
                `}>
                  {stat.num}
                </p>
                <p className={`
                  text-xs font-semibold uppercase tracking-wider
                  transition-colors duration-300
                  ${isDark ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'}
                `}>
                  {stat.label}
                </p>
                
                {/* Underline on hover */}
                <div className={`
                  mt-2 h-0.5 rounded-full bg-gradient-to-r ${stat.gradient}
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center
                `}></div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== FILTER BUTTONS ===== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                relative px-6 py-2.5 rounded-xl text-sm font-semibold
                transition-all duration-300 border flex items-center gap-2
                ${activeFilter === filter.id
                  ? isDark 
                    ? 'bg-white text-black shadow-lg shadow-white/20 scale-105' 
                    : 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-105'
                  : isDark
                    ? 'bg-transparent border-white/10 text-gray-400 hover:border-white/20 hover:text-white hover:bg-white/5'
                    : 'bg-transparent border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50'
                }
              `}
            >
              <filter.icon className="w-4 h-4" />
              {filter.label}
              
              {/* Active indicator dot */}
              {activeFilter === filter.id && (
                <span className={`
                  absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full
                  ${isDark ? 'bg-white' : 'bg-gray-900'}
                `}></span>
              )}
            </button>
          ))}
        </div>

        {/* ===== PROJECTS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`
                group relative rounded-2xl overflow-hidden
                transition-all duration-500 hover:-translate-y-2
                border backdrop-blur-sm
                ${isDark 
                  ? 'bg-white/[0.03] border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl hover:shadow-black/30' 
                  : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl hover:shadow-gray-200/40'
                }
              `}
            >
              
              {/* ===== IMAGE SECTION - REMOVED VIEW PROJECT OVERLAY ===== */}
              <div className="relative overflow-hidden aspect-[16/10]">
                
                {project.images.length > 1 ? (
                  /* Multiple Images Grid */
                  <div className={`grid grid-cols-2 h-full gap-0.5 ${isDark ? 'bg-white/5' : 'bg-gray-200'}`}>
                    {project.images.map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden h-full">
                        <img 
                          src={img} 
                          alt={`${project.title} view ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Single Image - NO OVERLAY, JUST SMOOTH ZOOM */
                  <>
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* ✅ REMOVED: "View Project" overlay button */}
                    {/* Only subtle gradient at bottom for text readability if needed */}
                    <div className={`
                      absolute inset-x-0 bottom-0 h-12
                      pointer-events-none
                      ${isDark 
                        ? 'bg-gradient-to-t from-black/30 to-transparent' 
                        : 'bg-gradient-to-t from-black/10 to-transparent'
                      }
                    `}></div>
                  </>
                )}

                {/* Status Badge - Top Left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`
                    px-3 py-1 rounded-lg text-[11px] font-bold backdrop-blur-md
                    flex items-center gap-1.5
                    ${project.status === 'Live' || project.status === 'Active'
                      ? isDark 
                        ? 'bg-emerald-500/90 text-white shadow-lg shadow-emerald-500/30' 
                        : 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                      : isDark
                        ? 'bg-white/90 text-gray-900 shadow-lg shadow-white/20'
                        : 'bg-white text-gray-900 shadow-lg shadow-gray-200/50 border border-gray-200'
                    }
                  `}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      project.status === 'Live' || project.status === 'Active' ? 'bg-white animate-pulse' : 'bg-gray-500'
                    }`}></span>
                    {project.status}
                  </span>
                </div>

                {/* Year Badge - Top Right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`
                    px-3 py-1 rounded-lg text-[11px] font-bold backdrop-blur-md flex items-center gap-1.5
                    ${isDark 
                      ? 'bg-white/10 text-gray-300 border border-white/10' 
                      : 'bg-white/90 text-gray-700 border border-gray-200 shadow-sm'
                    }
                  `}>
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>

                {/* Bottom Gradient Accent Line */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1
                  bg-gradient-to-r ${project.color}
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
                `}></div>
              </div>

              {/* ===== CONTENT SECTION ===== */}
              <div className={`p-5 lg:p-6`}>
                
                {/* Subtitle */}
                <p className={`
                  text-[11px] font-bold uppercase tracking-widest mb-2
                  ${isDark ? 'text-violet-400' : 'text-violet-600'}
                `}>
                  {project.subtitle}
                </p>

                {/* Title */}
                <h3 className={`
                  text-lg lg:text-xl font-bold mb-3 transition-colors duration-300
                  group-hover:bg-clip-text group-hover:text-transparent
                  group-hover:bg-gradient-to-r ${project.color}
                  ${isDark ? 'text-white' : 'text-gray-900'}
                `}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`
                  text-sm leading-relaxed mb-4 line-clamp-2
                  transition-colors duration-300
                  ${isDark ? 'text-gray-400' : 'text-gray-600'}
                `}>
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 mb-4">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className={`
                        w-3.5 h-3.5 flex-shrink-0
                        ${isDark ? 'text-emerald-400' : 'text-emerald-600'}
                      `} />
                      <span className={`
                        text-xs truncate
                        transition-colors duration-300
                        ${isDark ? 'text-gray-400' : 'text-gray-600'}
                      `}>
                        {feature}
                      </span>
                    </div>
                  ))}
                  
                  {project.features.length > 3 && (
                    <span className={`
                      text-xs font-medium pl-5.5
                      ${isDark ? 'text-gray-500' : 'text-gray-400'}
                    `}>
                      +{project.features.length - 3} more...
                    </span>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className={`
                      px-2.5 py-1 rounded-lg text-[11px] font-medium
                      transition-all duration-300
                      ${isDark 
                        ? 'bg-white/5 text-gray-300 border border-white/10' 
                        : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }
                    `}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={`
                  flex items-center justify-between pt-4
                  border-t transition-colors duration-300
                  ${isDark ? 'border-white/5' : 'border-gray-100'}
                `}>
                  
                  {/* Live Demo Link */}
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2 text-sm font-semibold
                      transition-all duration-300 group/link
                      ${isDark 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-700'
                      }
                    `}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  
                  {/* GitHub Link - Using our custom component */}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 rounded-xl transition-all duration-300
                      ${isDark 
                        ? 'text-gray-500 hover:text-white hover:bg-white/10' 
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                      }
                    `}
                    title="View Source Code"
                  >
                    <GitHub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== EMPTY STATE ===== */}
        {filteredProjects.length === 0 && (
          <div className={`
            text-center py-20 rounded-3xl border-2 border-dashed
            transition-colors duration-500
            ${isDark 
              ? 'border-white/10 bg-white/[0.01]' 
              : 'border-gray-200 bg-gray-50'
            }
          `}>
            <div className={`
              w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center
              ${isDark ? 'bg-white/5' : 'bg-gray-100'}
            `}>
              <Layers className={`w-10 h-10 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
            </div>
            <h3 className={`
              text-xl font-bold mb-2
              transition-colors duration-500
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              No projects found
            </h3>
            <p className={`${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Try selecting a different filter
            </p>
          </div>
        )}

        {/* ===== CTA SECTION ===== */}
        <div className={`
          mt-20 relative rounded-3xl p-10 lg:p-16 overflow-hidden text-center
          border backdrop-blur-sm transition-all duration-500
          ${isDark 
            ? 'bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-blue-600/10 border-white/10' 
            : 'bg-gradient-to-br from-violet-50 via-purple-50/50 to-blue-50/50 border-violet-100'
          }
        `}>
          
          {/* Background glow */}
          <div className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] rounded-full blur-[110px] pointer-events-none
            ${isDark ? 'bg-violet-600/20' : 'bg-violet-400/30'}
          `}></div>

          <div className="relative z-10">
            
            {/* Icon */}
            <div className={`
              inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
              bg-gradient-to-br from-violet-600 to-blue-600 text-white
              shadow-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-6
              ${isDark ? 'shadow-violet-500/30' : 'shadow-violet-500/25'}
            `}>
              <Zap className="w-8 h-8" />
            </div>

            <h3 className={`
              text-2xl md:text-3xl lg:text-4xl font-black mb-4
              transition-colors duration-500
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              Want to Build Something Amazing?
            </h3>
            
            <p className={`
              max-w-lg mx-auto mb-8 text-base
              transition-colors duration-500
              ${isDark ? 'text-gray-400' : 'text-gray-600'}
            `}>
              I'm available for freelance projects and full-time opportunities. Let's bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              {/* Primary CTA */}
              <a
                href="#contact"
                className={`
                  group inline-flex items-center justify-center gap-3 px-8 py-4 
                  rounded-2xl font-bold text-sm
                  bg-gradient-to-r text-white transition-all duration-300
                  hover:-translate-y-1 active:scale-[0.98]
                  shadow-xl hover:shadow-2xl
                  from-violet-600 to-blue-600
                  hover:from-violet-500 hover:to-blue-500
                  ${isDark ? 'shadow-violet-500/30 hover:shadow-violet-500/50' : 'shadow-violet-500/25 hover:shadow-violet-500/40'}
                `}
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Secondary CTA - GitHub */}
              <a
                href="https://github.com/abelsam-coder/"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group inline-flex items-center justify-center gap-3 px-8 py-4 
                  rounded-2xl font-bold text-sm border transition-all duration-300
                  hover:-translate-y-1
                  ${isDark 
                    ? 'border-white/20 text-gray-300 hover:bg-white/5 hover:border-white/30 hover:text-white' 
                    : 'border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-900'
                  }
                `}
              >
                <GitHub className="w-5 h-5" />
                View GitHub Profile
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
          50% { transform: translateY(-18px); }
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

export default Projects;