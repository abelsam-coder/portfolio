import { useState, useEffect } from 'react';
import { 
  Award, 
  ExternalLink, 
  Check, 
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Calendar,
  Tag,
  MousePointerClick
} from 'lucide-react';

// Import all certificate images
import cert1 from '../assets/udemy_certificate.png';
import cert2 from '../assets/udemy_certificate(1).png';
import cert3 from '../assets/udemy_certificate(2).png';
import cert4 from '../assets/udemy_certificate(3).png';
import cert5 from '../assets/udemy_certificate(4).png';
import cert6 from '../assets/udemy_certificate(5).png';

const Certificates = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [imageZoom, setImageZoom] = useState(1);

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

  useEffect(() => {
    if (selectedCert) {
      setImageZoom(1);
    }
  }, [selectedCert]);

  const certificates = [
    {
      id: 1,
      title: 'Programming Fundamentals',
      issuer: 'Udemy',
      date: '2023',
      credentialId: 'UC-PF-2023',
      image: cert1,
      skills: ['Python', 'JavaScript', 'Problem Solving', 'Algorithms'],
      color: 'from-blue-500 to-cyan-500',
      icon: '💻',
      category: 'Fundamentals'
    },
    {
      id: 2,
      title: 'Frontend Web Development Bootcamp',
      issuer: 'Udemy',
      date: '2023',
      credentialId: 'UC-FE-2023',
      image: cert2,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
      color: 'from-violet-500 to-purple-600',
      icon: '🎨',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Django REST Framework',
      issuer: 'Udemy',
      date: '2024',
      credentialId: 'UC-DJANGO-2024',
      image: cert3,
      skills: ['Django', 'Python', 'REST APIs', 'PostgreSQL', 'Authentication'],
      color: 'from-green-500 to-emerald-600',
      icon: '🔧',
      category: 'Backend'
    },
    {
      id: 4,
      title: 'Penetration Testing & Ethical Hacking',
      issuer: 'Udemy',
      date: '2024',
      credentialId: 'UC-CYBER-2024',
      image: cert4,
      skills: ['Cybersecurity', 'Network Security', 'Kali Linux', 'OWASP', 'Vulnerability Assessment'],
      color: 'from-red-500 to-orange-600',
      icon: '🛡️',
      category: 'Security'
    },
    {
      id: 5,
      title: 'Python for Data Science & ML Bootcamp',
      issuer: 'Udemy',
      date: '2024',
      credentialId: 'UC-DATA-2024',
      image: cert5,
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Machine Learning', 'Data Visualization'],
      color: 'from-yellow-500 to-amber-600',
      icon: '📊',
      category: 'Data Science'
    },
    {
      id: 6,
      title: 'React Native',
      issuer: 'Udemy',
      date: '2024',
      credentialId: 'UC-RN-2024',
      image: cert6,
      skills: ['React Native', 'JavaScript', 'Mobile Development', 'Expo', 'Navigation'],
      color: 'from-cyan-500 to-blue-600',
      icon: '📱',
      category: 'Mobile'
    }
  ];

  const handleZoomIn = () => {
    setImageZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setImageZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setImageZoom(1);
  };

  return (
    <section id="certificate" className={`relative py-20 lg:py-28 overflow-hidden transition-colors duration-700 ${isDark ? 'bg-[#030712]' : 'bg-white'}`}>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 bg-gradient-to-br from-violet-500 via-purple-500 to-transparent`}></div>
        <div className={`absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full blur-[110px] opacity-30 bg-gradient-to-tr from-blue-500 via-cyan-500 to-transparent`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border backdrop-blur-sm transition-all duration-500 ${isDark ? 'bg-violet-500/10 border-violet-500/20 text-violet-300' : 'bg-violet-50 border-violet-200 text-violet-700'}`}>
            <Award className="w-4 h-4" />
            Certifications
          </span>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Professional{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>

          <p className={`max-w-2xl mx-auto text-base lg:text-lg leading-relaxed transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Industry-recognized certifications showcasing expertise across web development, data science, cybersecurity, and mobile development
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-8 lg:gap-16 p-8 rounded-2xl mb-12 transition-all duration-500 ${isDark ? 'bg-white/[0.03] border border-white/10' : 'bg-gradient-to-r from-violet-50/50 to-blue-50/50 border border-violet-100'}`}>
          {[
            { num: '6+', label: 'Certificates Earned', gradient: 'from-violet-500 to-purple-500' },
            { num: '25+', label: 'Skills Verified', gradient: 'from-blue-500 to-cyan-500' },
            { num: '6', label: 'Domains Covered', gradient: 'from-emerald-500 to-teal-500' }
          ].map((stat, i) => (
            <div key={i} className="group text-center cursor-default">
              <p className={`text-3xl lg:text-4xl font-black mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.num}</p>
              <p className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border backdrop-blur-sm cursor-pointer ${isDark ? 'bg-white/[0.03] border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl hover:shadow-black/30' : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl hover:shadow-gray-200/40'}`}
            >
              
              <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <img src={cert.image} alt={`${cert.title} Certificate`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6`}>
                  <button className={`transform translate-y-4 group-hover:translate-y-0 transition-all duration-400 px-6 py-3 rounded-xl text-sm font-bold shadow-2xl bg-gradient-to-r ${cert.color} text-white flex items-center gap-2`}>
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute top-3 left-3 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold backdrop-blur-md bg-gradient-to-r ${cert.color} text-white shadow-lg`}>
                    <Tag className="w-3 h-3" />
                    {cert.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold backdrop-blur-md ${isDark ? 'bg-black/30 text-white border border-white/20' : 'bg-white/90 text-gray-700 border border-gray-200 shadow-sm'}`}>
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>

              <div className="p-5 lg:p-6">
                <h3 className={`text-base lg:text-lg font-bold mb-2 transition-colors duration-300 line-clamp-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r ${cert.color} ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h3>

                <p className={`text-sm font-medium mb-3 ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition-all duration-300 ${isDark ? 'bg-white/5 text-gray-300 border border-white/10' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>
                      <Check className="w-3 h-3" />
                      {skill}
                    </span>
                  ))}
                  
                  {cert.skills.length > 3 && (
                    <span className={`px-2 py-1 rounded-md text-[11px] font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className={`pt-4 border-t flex items-center justify-between transition-colors duration-300 ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                  <span className={`text-xs font-mono ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    ID: {cert.credentialId}
                  </span>
                  
                  <div className={`p-2 rounded-lg transition-all duration-300 ${isDark ? 'text-gray-500 group-hover:text-white group-hover:bg-white/10' : 'text-gray-500 group-hover:text-gray-900 group-hover:bg-gray-100'}`}>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedCert(null)}>
            <div className={`relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl animate-scale-in ${isDark ? 'bg-gray-900' : 'bg-white'} max-h-[90vh] flex flex-col`} onClick={(e) => e.stopPropagation()}>
              
              {/* Header */}
              <div className={`p-4 md:p-6 flex items-center justify-between border-b flex-shrink-0 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl bg-gradient-to-br ${selectedCert.color}`}>
                    {selectedCert.icon}
                  </div>
                  <div>
                    <h3 className={`text-base md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedCert.title}</h3>
                    <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{selectedCert.issuer} • {selectedCert.date}</p>
                  </div>
                </div>
                
                <button onClick={() => setSelectedCert(null)} className={`p-2 md:p-3 rounded-xl transition-colors flex-shrink-0 ${isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'}`}>
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Image Container */}
              <div className={`relative flex-1 overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[400px] ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                
                <div className="relative w-full h-full overflow-auto">
                  <div className="flex items-center justify-center min-h-full p-4 md:p-8" style={{ transform: `scale(${imageZoom})`, transition: 'transform 0.2s ease-out' }}>
                    <img src={selectedCert.image} alt={selectedCert.title} className="max-w-full h-auto rounded-lg shadow-xl object-contain select-none" style={{ maxHeight: '60vh', width: 'auto' }} draggable={false} />
                  </div>
                </div>

                {/* Zoom Controls */}
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md shadow-xl ${isDark ? 'bg-black/70 text-white border border-white/20' : 'bg-white/90 text-gray-800 border border-gray-200'}`}>
                  <button onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} disabled={imageZoom <= 0.5} className={`p-2 rounded-lg transition-all ${imageZoom <= 0.5 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/10 active:scale-95'}`} title="Zoom Out">
                    <ZoomOut className="w-5 h-5" />
                  </button>

                  <span className="text-xs font-mono font-medium min-w-[45px] text-center">{Math.round(imageZoom * 100)}%</span>

                  <button onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} disabled={imageZoom >= 3} className={`p-2 rounded-lg transition-all ${imageZoom >= 3 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/10 active:scale-95'}`} title="Zoom In">
                    <ZoomIn className="w-5 h-5" />
                  </button>

                  <div className={`w-px h-5 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>

                  <button onClick={(e) => { e.stopPropagation(); handleResetZoom(); }} className="p-2 rounded-lg transition-all hover:bg-black/10 active:scale-95" title="Reset Zoom">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                {/* Hint */}
                <div className={`absolute top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm pointer-events-none ${isDark ? 'bg-black/50 text-gray-300' : 'bg-white/70 text-gray-600'}`}>
                  <MousePointerClick className="w-3.5 h-3.5" />
                  Use controls below to zoom - Click outside to close
                </div>
              </div>

              {/* Skills */}
              <div className={`p-4 md:p-6 border-t flex-shrink-0 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <p className={`text-xs md:text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Skills Acquired:</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {selectedCert.skills.map((skill, idx) => (
                    <span key={idx} className={`inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r ${selectedCert.color} text-white shadow-md`}>
                      <Check className="w-3.5 h-3.5" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className={`mt-20 relative rounded-3xl p-10 lg:p-16 overflow-hidden text-center border backdrop-blur-sm transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-blue-600/10 border-white/10' : 'bg-gradient-to-br from-violet-50 via-purple-50/50 to-blue-50/50 border-violet-100'}`}>
          
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-violet-600/20' : 'bg-violet-400/30'}`}></div>

          <div className="relative z-10">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-xl transform hover:scale-110 hover:rotate-6 transition-transform duration-500`}>
              <Award className="w-8 h-8" />
            </div>

            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Continuous Learning Journey
            </h3>
            
            <p className={`max-w-lg mx-auto mb-8 text-base transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Committed to staying current with industry trends and expanding expertise across multiple domains of technology.
            </p>
            
            <a href="#contact" className={`group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r text-white transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] shadow-xl hover:shadow-2xl from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500`}>
              Verify My Credentials
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .overflow-auto::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .overflow-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-auto::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 4px;
        }
        .overflow-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Certificates;