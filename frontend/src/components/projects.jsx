
import { useState } from 'react';


import samriCollection from '../assets/samri_collection.png';
import ecommerce from '../assets/e-commerce.png';
import elibrary from '../assets/Elibrary.png';
import elibraryAdmin from '../assets/ElibraryAdmin.png';
import ethioGlobal from '../assets/Ethio_global.png';
import dodai from '../assets/dodai.png';
import naniCafe from '../assets/nani Cafe.png';
import onlineExam from '../assets/online exam.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // All projects with real data and images
  const projects = [
    {
      id: 1,
      title: 'Samri Collection',
      subtitle: 'E-Commerce Company',
      description: 'Complete e-commerce solution for Samri Collection company featuring product catalog management, shopping cart system, secure payment integration with multiple gateways, order tracking, inventory management, customer accounts, and comprehensive admin dashboard for business operations.',
      category: ['ecommerce', 'fullstack'],
      images: [samriCollection, ecommerce],
      techStack: ['React.js', 'Django', 'PostgreSQL', 'Stripe', 'Redis'],
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Tracking', 'Admin Dashboard'],
      liveUrl: 'https://frontend-5vi742394-abelala-cs-projects.vercel.app/',
      githubUrl: 'https://github.com/abelsam-coder/samri-collection-frontend/',
      status: 'Live',
      color: 'from-violet-600 to-purple-600',
      year: '2024'
    },
    {
      id: 2,
      title: 'Dodai Platform',
      subtitle: 'Rebuilt & Enhanced',
      description: 'Complete rebuild of Dodai platform with modern architecture. Enhanced performance with optimized database queries, improved UI/UX design, better security implementation, responsive layout for all devices, and scalable cloud infrastructure deployment.',
      category: ['web', 'fullstack'],
      images: [dodai],
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Docker'],
      features: ['Performance Optimization', 'Modern UI/UX', 'API Integration', 'Cloud Deployment', 'CI/CD Pipeline'],
      liveUrl: 'https://dodai-umber.vercel.app/',
      githubUrl: 'https://github.com/abelsam-coder/dodai',
      status: 'Completed',
      color: 'from-blue-600 to-cyan-500',
      year: '2024'
    },
    {
      id: 3,
      title: 'Nani Cafe & Restaurant',
      subtitle: 'Food & Beverage Platform',
      description: 'Digital transformation solution for Nani Cafe featuring online food ordering system, table reservation management, digital menu display, kitchen display system for orders, delivery tracking integration, customer loyalty program, and real-time analytics dashboard.',
      category: ['ecommerce', 'mobile'],
      images: [naniCafe],
      techStack: ['React Native', 'Flask', 'Firebase', 'Socket.io', 'Google Maps API'],
      features: ['Online Ordering', 'Table Reservation', 'Digital Menu', 'Delivery Tracking', 'Loyalty Program'],
      liveUrl: '#',
      githubUrl: 'https://github.com/abelsam-coder/Nano-Cafe',
      status: 'Live',
      color: 'from-orange-500 to-red-500',
      year: '2024'
    },
    {
      id: 4,
      title: 'Online Exam Management System',
      subtitle: 'Education Technology',
      description: 'Comprehensive examination platform that handles complete online test lifecycle including question bank management with multiple question types (MCQ, descriptive, coding), automated proctoring with AI monitoring, timed exams with auto-submission, instant result generation, detailed performance analytics, and certificate generation.',
      category: ['education', 'web'],
      images: [onlineExam],
      techStack: ['Python', 'Django', 'PostgreSQL', 'WebSockets', 'Celery'],
      features: ['Online Test Handling', 'Auto-Proctoring', 'Question Bank', 'Result Analytics', 'Certificate Generation'],
      liveUrl: '#',
      githubUrl: 'https://github.com/abelsam-coder/Nesha',
      status: 'Active',
      color: 'from-emerald-600 to-teal-500',
      year: '2023'
    },
    {
      id: 5,
      title: 'Ethioglobal Digital',
      subtitle: 'Business Solutions + AI Chatbot',
      description: 'Enterprise-grade digital business platform integrated with AI-powered chatbot for intelligent customer support. Features include CRM system, invoice generation and management, project tracking with milestones, team collaboration tools, document management, comprehensive reporting dashboard, and 24/7 AI chatbot assistance.',
      category: ['business', 'fullstack', 'ai'],
      images: [ethioGlobal],
      techStack: ['React.js', 'Django REST', 'PostgreSQL', 'OpenAI API', 'AWS S3'],
      features: ['AI Chatbot Integration', 'CRM System', 'Invoice Management', 'Project Tracking', 'Smart Analytics'],
      liveUrl: '#',
      githubUrl: 'https://github.com/abelsam-coder/EthioGlobal-digital',
      status: 'Active',
      color: 'from-indigo-600 to-blue-600',
      year: '2023'
    },
    {
      id: 6,
      title: 'E-Library System',
      subtitle: 'Digital Library Platform',
      description: 'Modern digital library management system with ebook reader supporting multiple formats (PDF, EPUB), reading progress tracking across devices, advanced bookmarking and note-taking system, personalized book recommendations using algorithms, admin panel for library management, and user borrowing history.',
      category: ['education', 'web'],
      images: [elibrary, elibraryAdmin],
      techStack: ['React.js', 'Flask', 'MongoDB', 'Elasticsearch', 'PDF.js'],
      features: ['Ebook Reader', 'Progress Tracking', 'Bookmarks & Notes', 'Recommendations', 'Admin Panel'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      color: 'from-pink-600 to-rose-500',
      year: '2023'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'web', label: 'Web App' },
    { id: 'education', label: 'Education' },
    { id: 'business', label: 'Business' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-blue-100 text-blue-600 border border-blue-200">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-base mb-8 text-slate-600">
            Real-world solutions built for businesses across e-commerce, education, food & beverage, and enterprise sectors
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { num: '6+', label: 'Projects' },
              { num: '15+', label: 'Technologies' },
              { num: '3', label: 'Live Systems' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.num}
                </p>
                <p className="text-xs md:text-sm mt-1 text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-white/80 text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="
                group relative rounded-3xl overflow-hidden backdrop-blur-xl border 
                transition-all duration-500 hover:-translate-y-2
                bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50
              "
            >
              
              {/* Image Section */}
              <div className="relative overflow-hidden aspect-[16/10]">
                {project.images.length > 1 ? (
                  <div className="grid grid-cols-2 h-full gap-0.5 bg-slate-200">
                    {project.images.map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden h-full">
                        <img 
                          src={img} 
                          alt={`${project.title} view ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className={`
                        transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300
                        px-6 py-3 rounded-full text-sm font-semibold shadow-xl
                        bg-gradient-to-r ${project.color} text-white
                      `}>
                        View Project →
                      </span>
                    </div>
                  </>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md
                    ${project.status === 'Live' || project.status === 'Active'
                      ? 'bg-green-500/90 text-white shadow-lg' 
                      : 'bg-white/90 text-slate-900 shadow-lg'}
                  `}>
                    {project.status}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-white/90 text-slate-700 border border-slate-200">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>

              {/* Content */}
              <div className="p-6">
                
                {/* Subtitle */}
                <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-blue-600">
                  {project.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors text-slate-900">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-4 line-clamp-3 text-slate-600">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-xs truncate text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <a href={project.liveUrl} className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:gap-2 text-blue-600 hover:text-blue-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Live Demo
                  </a>
                  
                  <a href={project.githubUrl} className="p-2 rounded-lg transition-colors text-slate-500 hover:text-slate-900 hover:bg-slate-100" title="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 rounded-3xl border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-slate-100">
              <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">
              No projects found
            </h3>
            <p className="text-slate-400">
              Try selecting a different filter
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 p-10 md:p-14 rounded-3xl text-center backdrop-blur-xl border bg-gradient-to-br from-blue-50 to-cyan-50/30 border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
            Want to Build Something Amazing?
          </h3>
          <p className="max-w-xl mx-auto mb-8 text-slate-600">
            I am available for freelance projects and full-time opportunities. Let us bring your ideas to life.
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </a>
            
            <a
              href="https://github.com/abelsam-coder/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2 px-8 py-4 
                rounded-full font-semibold text-sm border transition-all duration-300 hover:-translate-y-0.5
                border-slate-300 text-slate-700 hover:bg-white hover:shadow-lg
              "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
