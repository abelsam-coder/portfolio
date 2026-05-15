import { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

// ============================================
// THREE.JS 3D COMPONENTS
// ============================================

// Animated Particle Field (Cyber/Digital Theme)
const ParticleField = () => {
  const meshRef = useRef();
  const count = 1500;
  
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 25;
    }
    return pos;
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.03;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00d4ff" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

// Glowing Orb (Main Hero Element)
const GlowingOrb = ({ position = [0, 0, 0], color = "#0066ff", speed = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 100, 100]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

// Floating Geometry Shapes
const FloatingGeometry = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5;
        child.rotation.x += 0.01;
        child.rotation.z += 0.005;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[
          Math.cos(i * 0.8) * 4,
          Math.sin(i * 0.5) * 2,
          Math.sin(i * 0.3) * 3 - 2
        ]}>
          {[ 
            <boxGeometry args={[0.3, 0.3, 0.3]} />,
            <octahedronGeometry args={[0.25]} />,
            <tetrahedronGeometry args={[0.3]} />,
            <icosahedronGeometry args={[0.2]} />
          ][i % 4]}
          <meshStandardMaterial 
            color={['#ff006e', '#8338ec', '#3a86ff', '#06ffa5'][i % 4]}
            emissive={['#ff006e', '#8338ec', '#3a86ff', '#06ffa5'][i % 4]}
            emissiveIntensity={0.3}
            wireframe={i % 2 === 0}
          />
        </mesh>
      ))}
    </group>
  );
};

// Grid Floor Effect
const GridFloor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.05} wireframe />
    </mesh>
  );
};

// 3D Scene Component
const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#00d4ff" intensity={2} />
      <pointLight position={[10, 10, 5]} color="#ff006e" intensity={1} />
      
      <ParticleField />
      <GlowingOrb position={[0, 0, 0]} color="#0066ff" />
      <GlowingOrb position={[3, -1, -2]} color="#ff006e" speed={1.5} />
      <GlowingOrb position={[-3, 1, -1]} color="#06ffa5" speed={0.8} />
      <FloatingGeometry />
      <GridFloor />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

// ============================================
// MAIN PORTFOLIO COMPONENT
// ============================================

const Portfolio = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedProjectFilter, setSelectedProjectFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', projectType: '', budget: '', message: ''
  });

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'tech', label: 'Tech', icon: '⚡' },
    { id: 'service', label: 'Service', icon: '🚀' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'testimony', label: 'Testimony', icon: '⭐' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
  ];

  // Skills Data
  const devSkills = [
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Language' },
    { name: 'React', level: 88, category: 'Framework' },
    { name: 'Tailwind CSS', level: 92, category: 'Styling' },
    { name: 'Python', level: 85, category: 'Language' },
    { name: 'Django', level: 82, category: 'Framework' },
    { name: 'Flask', level: 80, category: 'Framework' },
    { name: 'React Native', level: 78, category: 'Mobile' },
    { name: 'Node.js', level: 86, category: 'Runtime' },
  ];

  const securitySkills = [
    { name: 'Kali Linux', level: 90, category: 'OS' },
    { name: 'Penetration Testing', level: 88, category: 'Security' },
    { name: 'Network Security', level: 85, category: 'Security' },
    { name: 'Digital Forensics', level: 80, category: 'Forensics' },
    { name: 'Social Engineering', level: 82, category: 'Security' },
    { name: 'Ethical Hacking', level: 87, category: 'Security' },
    { name: 'Vulnerability Assessment', level: 84, category: 'Security' },
    { name: 'Web Security', level: 86, category: 'Security' },
    { name: 'Wireless Hacking', level: 78, category: 'Network' },
    { name: 'Metasploit', level: 85, category: 'Tool' },
  ];

  const tools = ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker', 'PostgreSQL', 'AWS', 'Supabase', 'Redis', 'Wireshark', 'Burp Suite', 'Nmap', 'TensorFlow', 'TypeScript', 'Ubuntu'];

  // Services Data
  const services = [
    {
      title: 'Web Development',
      price: 'ETB 80K - 300K+',
      description: 'Building responsive, scalable web applications',
      tech: ['React.js', 'Django', 'Flask', 'REST APIs'],
      icon: '🌐'
    },
    {
      title: 'Mobile App Dev',
      price: 'ETB 200K+',
      description: 'Cross-platform mobile applications',
      tech: ['React Native', 'iOS & Android', 'UI/UX Design'],
      icon: '📱'
    },
    {
      title: 'Penetration Testing',
      price: 'ETB 160K+',
      description: 'Comprehensive security assessments',
      tech: ['Network Testing', 'Web App Sec', 'Vuln Assessment'],
      icon: '🔒'
    },
    {
      title: 'Machine Learning',
      price: 'ETB 600K+',
      description: 'Intelligent solutions & automation',
      tech: ['Python', 'Data Analysis', 'Predictive Models'],
      icon: '🤖'
    },
    {
      title: 'API Development',
      price: 'ETB 80K+',
      description: 'Robust RESTful and GraphQL APIs',
      tech: ['REST APIs', 'Authentication', 'Documentation'],
      icon: '🔗'
    },
    {
      title: 'Security Consulting',
      price: 'ETB 240K+',
      description: 'Expert cybersecurity guidance',
      tech: ['Security Audit', 'Compliance', 'Risk Assessment'],
      icon: '🛡️'
    },
  ];

  // Projects Data
  const projects = [
    {
      title: 'E-Commerce Platform',
      timeline: '4-6 weeks',
      price: 'ETB 200,000+',
      description: 'Full-featured online store with payment gateway',
      tech: ['React', 'Node.js', 'Django', 'PostgreSQL'],
      features: ['User Auth', 'Product Catalog', 'Cart System', 'Payment Integration'],
      category: 'web'
    },
    {
      title: 'Landing Page',
      timeline: '1-2 weeks',
      price: 'ETB 60,000+',
      description: 'High-converting landing pages optimized for SEO',
      tech: ['React', 'Tailwind CSS', 'Three.js'],
      features: ['Responsive Design', 'SEO Optimized', 'Contact Forms', 'Analytics'],
      category: 'web'
    },
    {
      title: 'Real-Time Chat App',
      timeline: '3-4 weeks',
      price: 'ETB 140,000+',
      description: 'Feature-rich chat app with real-time messaging',
      tech: ['React', 'WebSocket', 'Socket.io', 'Redis'],
      features: ['Real-time Messaging', 'File Sharing', 'Video Calls', 'Encryption'],
      category: 'web'
    },
    {
      title: 'ERP System',
      timeline: '8-12 weeks',
      price: 'ETB 300,000+',
      description: 'Enterprise Resource Planning solution',
      tech: ['Django', 'PostgreSQL', 'React', 'Redis'],
      features: ['HR Management', 'Inventory', 'Finance Module', 'CRM'],
      category: 'web'
    },
    {
      title: 'Mobile Application',
      timeline: '4-8 weeks',
      price: 'ETB 200,000+',
      description: 'Cross-platform mobile apps',
      tech: ['React Native', 'Supabase'],
      features: ['Cross Platform', 'Push Notifications', 'Offline Mode'],
      category: 'mobile'
    },
    {
      title: 'Penetration Test Package',
      timeline: '1-2 weeks',
      price: 'ETB 160,000',
      description: 'Comprehensive security assessment',
      tech: ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark'],
      features: ['Network Scanning', 'Web App Testing', 'Reports'],
      category: 'security'
    },
    {
      title: 'ML/AI Solution',
      timeline: '6-12 weeks',
      price: 'ETB 600,000+',
      description: 'Custom machine learning models',
      tech: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      features: ['Model Training', 'Data Pipeline', 'Dashboard', 'Monitoring'],
      category: 'ml'
    },
    {
      title: 'API Development',
      timeline: '2-4 weeks',
      price: 'ETB 80,000+',
      description: 'Scalable RESTful/GraphQL APIs',
      tech: ['Django', 'PostgreSQL', 'Flask'],
      features: ['REST/GraphQL', 'JWT Auth', 'Rate Limiting', 'Docs'],
      category: 'api'
    },
    {
      title: 'Security Consulting',
      timeline: '2-4 weeks',
      price: 'ETB 240,000',
      description: 'Complete cybersecurity consulting',
      tech: ['ISO 27001', 'OWASP', 'NIST Framework'],
      features: ['Security Audit', 'Compliance Check', 'Training'],
      category: 'security'
    },
  ];

  // Portfolio Projects (Featured)
  const featuredProjects = [
    {
      title: 'Samri Collection',
      status: 'Live 2024',
      category: 'E-Commerce Company',
      description: 'Complete e-commerce solution featuring product catalog, shopping cart, payment integration, and admin dashboard.',
      tech: ['React.js', 'Django', 'PostgreSQL', 'Tailwind'],
      images: ['view 1', 'view 2']
    },
    {
      title: 'Dodai Platform',
      status: 'Completed 2024',
      category: 'Rebuilt & Enhanced',
      description: 'Complete rebuild with modern architecture, optimized performance, improved UI/UX, and cloud deployment.',
      tech: ['React.js', 'Django', 'PostgreSQL']
    },
    {
      title: 'Nani Cafe & Restaurant',
      status: 'Live 2024',
      category: 'Food & Beverage Platform',
      description: 'Digital transformation with online ordering, table reservation, digital menu, and delivery tracking.',
      tech: ['React.js', 'Django', 'PostgreSQL', 'Tailwind']
    },
    {
      title: 'Online Exam Management',
      status: 'Active 2023',
      category: 'Education Technology',
      description: 'Comprehensive examination platform with question bank, automated proctoring, and instant results.',
      tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS']
    },
    {
      title: 'Ethioglobal Digital',
      status: 'Active 2023',
      category: 'Business Solutions + AI Chatbot',
      description: 'Enterprise-grade platform with CRM, invoice management, and AI-powered customer support.',
      tech: ['React.js', 'Django REST', 'PostgreSQL', 'Groq']
    },
    {
      title: 'E-Library System',
      status: 'Completed 2023',
      category: 'Digital Library Platform',
      description: 'Modern digital library with ebook reader, progress tracking, bookmarks, and recommendations.',
      tech: ['HTML', 'CSS', 'Flask', 'MySQL']
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Natinael Birhanu',
      role: 'CEO at Ethioglobal Digital',
      text: "Abel delivered exceptional work on our Ethioglobal Digital platform. His integration of AI chatbot technology transformed our customer service operations.",
      project: 'Ethioglobal Digital + AI Chatbot'
    },
    {
      name: 'Samrawit Samuel',
      role: 'Owner & Founder',
      text: "Working with Abel on our e-commerce platform was an amazing experience. He transformed our business idea into a fully functional online store.",
      project: 'Samri Collection E-Commerce'
    },
    {
      name: 'Aschalech Yohannes',
      role: 'Owner & Manager',
      text: "Abel built an incredible digital solution for our restaurant. The online ordering system and kitchen display have streamlined our operations completely.",
      project: 'Nani Cafe Digital Platform'
    }
  ];

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'tech', 'service', 'projects', 'testimony', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const filteredProjects = selectedProjectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedProjectFilter);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* ========================================== */}
      {/* HEADER / NAVIGATION                      */}
      {/* ========================================== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? darkMode 
            ? 'bg-gray-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
            : 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl shadow-gray-200/50'
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Brand */}
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="group flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className={`text-xl sm:text-2xl font-black tracking-tight ${
                  darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500' : 'text-gray-900'
                } group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-400 transition-all`}>
                  Abel Samuel
                </span>
                <span className="relative flex h-2 w-2 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <span className={`text-[10px] font-medium uppercase tracking-[0.25em] -mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                Machine Learning Engineer
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? darkMode ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30' : 'text-blue-600 bg-blue-50 border border-blue-200'
                      : darkMode ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                </button>
              ))}

              {/* Theme Toggle */}
              <button onClick={toggleTheme} className={`ml-2 p-2.5 rounded-full transition-all duration-300 ${darkMode ? 'text-yellow-400 hover:bg-yellow-500/10 hover:rotate-180' : 'text-indigo-500 hover:bg-indigo-50 hover:-rotate-180'}`}>
                {darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
                )}
              </button>

              {/* CTA */}
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="ml-3 relative px-6 py-2.5 rounded-lg text-sm font-bold text-white overflow-hidden bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group">
                <span className="relative z-10 flex items-center gap-2">Hire Me <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button onClick={toggleTheme} className={`p-2.5 rounded-lg ${darkMode ? 'text-yellow-400' : 'text-indigo-500'}`}>
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2.5 rounded-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl p-5 animate-in slide-in-from-top-2 fade-in duration-300 ${darkMode ? 'bg-gray-900/98 backdrop-blur-xl border border-gray-800' : 'bg-white/98 backdrop-blur-xl border border-gray-200'} shadow-2xl`}>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {navItems.map(item => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className={`p-3 rounded-xl text-center transition-all ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
                    <span className="text-2xl block">{item.icon}</span>
                    <span className="text-xs font-semibold block mt-1">{item.label}</span>
                  </button>
                ))}
              </div>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="block w-full py-3 text-center rounded-xl font-bold bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 text-white">Let's Talk →</a>
            </div>
          )}
        </nav>
      </header>

      {/* ========================================== */}
      {/* HERO SECTION WITH THREE.JS               */}
      {/* ========================================== */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Three.js Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 z-[1] ${darkMode ? 'bg-gradient-to-b from-gray-950/60 via-transparent to-gray-950' : 'bg-gradient-to-b from-white/70 via-transparent to-white/90'}`}></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up ${darkMode ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border border-emerald-200'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for work
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Hi, I'm<br/>
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-cyan-400 via-blue-500 to-purple-500' : 'from-blue-600 via-violet-600 to-purple-600'}`}>
                Abel Samuel
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              I'm a{' '}
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-violet-600 to-pink-600'}`}>
                Machine Learning Engineer
              </span>
            </h2>

            <p className={`text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-up animation-delay-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              A passionate developer crafting digital experiences at the intersection of innovation and technology. Specializing in full-stack development, cybersecurity, and AI solutions.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">Let's Talk <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
              </a>
              
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className={`px-8 py-4 rounded-xl font-bold border-2 transition-all duration-300 hover:scale-105 ${darkMode ? 'border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10' : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'}`}>
                View Projects
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-10 border-t border-opacity-20 animate-fade-in-up animation-delay-500" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Done' },
                { value: '15+', label: 'Technologies' },
                { value: '100%', label: 'Client Satisfaction' }
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className={`text-3xl sm:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-violet-600'}`}>{stat.value}</div>
                  <div className={`text-sm mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
            <div className={`w-1.5 h-3 rounded-full animate-scroll-down ${darkMode ? 'bg-cyan-400' : 'bg-blue-500'}`}></div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* TECH / SKILLS SECTION                     */}
      {/* ========================================== */}
      <section id="tech" className={`py-24 relative ${darkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-100 text-blue-700'}`}>Technical Arsenal</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Technologies & Expertise</h2>
            <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>A comprehensive toolkit spanning full-stack development, cybersecurity, and emerging technologies</p>
          </div>

          {/* Dev Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">💻</span> Development Stack
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {devSkills.map((skill, i) => (
                <div key={i} className={`p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/30' : 'bg-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg'}`}>
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{skill.name}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>{skill.category}</span>
                    </div>
                    <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">{skill.level}%</span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">🔐</span> Security & Hacking
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {securitySkills.map((skill, i) => (
                <div key={i} className={`p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-gray-800/50 border border-red-900/30 hover:border-red-500/30' : 'bg-gray-50 border border-gray-200 hover:border-red-300 hover:shadow-lg'}`}>
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{skill.name}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-700'}`}>{skill.category}</span>
                    </div>
                    <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">{skill.level}%</span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">🛠️</span> Additional Toolkit
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <span key={i} className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 cursor-default hover:scale-110 ${darkMode ? 'bg-gray-800 border border-gray-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10' : 'bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md'}`}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SERVICES SECTION                         */}
      {/* ========================================== */}
      <section id="service" className={`py-24 relative ${darkMode ? '' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${darkMode ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-100 text-purple-700'}`}>What I Offer</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">My Services</h2>
            <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comprehensive technology solutions tailored to transform your business ideas into reality</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden ${darkMode ? 'bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/30' : 'bg-white border border-gray-200 hover:border-purple-300 hover:shadow-2xl'}`}>
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform">{service.icon}</span>
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-100 text-blue-700'}`}>{service.price}</span>
                  </div>
                  
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tech.map((t, j) => (
                      <span key={j} className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{t}</span>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-purple-500 text-white' : 'bg-gray-100 hover:bg-purple-500 hover:text-white'}`}>
                    Get Quote →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* PROJECTS / PRICING SECTION                */}
      {/* ========================================== */}
      <section id="projects" className={`py-24 ${darkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>Portfolio & Pricing</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">What I Build</h2>
            <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Explore my recent work with transparent pricing in Ethiopian Birr</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Projects', count: projects.length },
              { id: 'web', label: 'Web Apps', count: 4 },
              { id: 'mobile', label: 'Mobile', count: 1 },
              { id: 'security', label: 'Security', count: 2 },
              { id: 'ml', label: 'ML/AI', count: 1 },
              { id: 'api', label: 'APIs', count: 1 },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedProjectFilter(filter.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  selectedProjectFilter === filter.id
                    ? darkMode ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30' : 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label} <span className={`ml-1 px-1.5 py-0.5 rounded text-xs ${selectedProjectFilter === filter.id ? 'bg-white/20' : darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>{filter.count}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <div key={i} className={`group rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${darkMode ? 'bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30' : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-2xl'}`}>
                {/* Project Image Placeholder */}
                <div className={`h-48 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                    {['🌐', '📱', '🔒', '🤖', '🔗'][['web', 'mobile', 'security', 'ml', 'api'].indexOf(project.category)] || '💻'}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-black/50 text-cyan-400' : 'bg-white/90 text-blue-600'}`}>{project.timeline}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-lg font-black bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-violet-600'}`}>{project.price}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 3).map((t, j) => (
                      <span key={j} className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{t}</span>
                    ))}
                  </div>
                  
                  <div className={`pt-4 border-t ${darkMode ? 'border-gray-700/50' : 'border-gray-100'}`}>
                    <p className="text-xs font-semibold mb-2 text-gray-500 uppercase tracking-wide">Features Included:</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <span className="text-green-500">✓</span>
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full mt-5 py-3 rounded-xl font-bold transition-all duration-300 ${darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Projects Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black mb-4">My Portfolio</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Featured Projects — Real-world solutions built for businesses</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((proj, i) => (
                <div key={i} className={`group rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${darkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200 shadow-lg hover:shadow-2xl'}`}>
                  <div className={`h-48 relative ${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-100 text-blue-700'}`}>{proj.status}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">💼</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>{proj.category}</span>
                    <h4 className="text-xl font-bold mt-1 mb-3">{proj.title}</h4>
                    <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{proj.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.tech.map((t, j) => (
                        <span key={j} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{t}</span>
                      ))}
                    </div>
                    <button className={`font-semibold text-sm flex items-center gap-2 ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'}`}>
                      View Project →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* HOW I WORK / PROCESS SECTION              */}
      {/* ========================================== */}
      <section className={`py-24 ${darkMode ? '' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${darkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-700'}`}>How I Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">From Idea to Reality</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Consultation', desc: 'Discuss requirements & goals', icon: '💬' },
              { num: '02', title: 'Planning', desc: 'Create detailed roadmap', icon: '📋' },
              { num: '03', title: 'Development', desc: 'Build with clean code', icon: '⚙️' },
              { num: '04', title: 'Delivery', desc: 'Test, deploy & support', icon: '🚀' },
            ].map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 ${darkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30' : 'bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200'}`}>
                  {step.icon}
                </div>
                <div className={`text-5xl font-black opacity-10 absolute top-0 left-1/2 -translate-x-1/2 ${darkMode ? 'text-cyan-500' : 'text-blue-500'}`}>{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{step.desc}</p>
                
                {i < 3 && (
                  <div className={`hidden md:block absolute top-10 -right-4 w-8 h-0.5 ${darkMode ? 'bg-gradient-to-r from-cyan-500/50 to-transparent' : 'bg-gradient-to-r from-blue-500/50 to-transparent'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* TESTIMONIALS SECTION                      */}
      {/* ========================================== */}
      <section id="testimony" className={`py-24 ${darkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${darkMode ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>Client Reviews</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">What Clients Say</h2>
            <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Feedback from business owners and CEOs I have worked with on real projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, i) => (
              <div key={i} className={`p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${darkMode ? 'bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/30' : 'bg-gray-50 border border-gray-200 hover:border-amber-300 hover:shadow-xl'}`}>
                <div className="absolute top-0 right-0 text-8xl opacity-5 leading-none">"</div>
                
                <p className={`mb-6 relative z-10 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ${darkMode ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white' : 'bg-gradient-to-br from-blue-600 to-violet-600 text-white'}`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{testimonial.role}</p>
                  </div>
                </div>
                
                <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-700/50' : 'border-gray-200'}`}>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${darkMode ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>📌 {testimonial.project}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl ${darkMode ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-gray-700/50' : 'bg-gradient-to-r from-blue-50 via-violet-50 to-cyan-50 border border-gray-200'}`}>
            {[
              { value: '100%', label: 'Client Satisfaction' },
              { value: '3+', label: 'CEO Endorsements' },
              { value: '5/5', label: 'Average Rating' },
              { value: '100%', label: 'On-Time Delivery' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-violet-600'}`}>{stat.value}</div>
                <div className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* CONTACT SECTION                           */}
      {/* ========================================== */}
      <section id="contact" className={`py-24 relative overflow-hidden ${darkMode ? '' : 'bg-gray-50'}`}>
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl ${darkMode ? 'bg-blue-600/20' : 'bg-blue-400/20'}`}></div>
          <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl ${darkMode ? 'bg-purple-600/20' : 'bg-purple-400/20'}`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${darkMode ? 'bg-pink-500/10 text-pink-400' : 'bg-pink-100 text-pink-700'}`}>Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Let's Work Together</h2>
            <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className={`p-8 rounded-3xl mb-8 ${darkMode ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200'}`}>
                <h3 className="text-2xl font-bold mb-6">Hire Me</h3>
                <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>I'm available for freelance projects and full-time opportunities. Let's build something amazing together!</p>
                
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${darkMode ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border border-emerald-200'}`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for new projects
                </div>

                <div className="space-y-4">
                  {[
                    { icon: '✉️', label: 'Email', value: 'abelsamuel841@email.com' },
                    { icon: '📱', label: 'Phone', value: '+251 957576652' },
                    { icon: '📍', label: 'Location', value: 'Hawassa, Ethiopia' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:shadow-md'}`}>
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social, i) => (
                  <button key={i} className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm'}`}>
                    {social}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200 shadow-xl'}`} onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input type="text" required placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 placeholder-gray-400'}`} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input type="email" required placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 placeholder-gray-400'}`} />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Subject *</label>
                <input type="text" required placeholder="Project Inquiry" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 placeholder-gray-400'}`} />
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Project Type</label>
                  <select value={formData.projectType} onChange={(e) => setFormData({...formData, projectType: e.target.value})} className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/50 border border-gray-700 text-white' : 'bg-gray-50 border border-gray-200'}`}>
                    <option>Select type</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Security</option>
                    <option>ML/AI Solution</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Budget Range (ETB)</label>
                  <select value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/50 border border-gray-700 text-white' : 'bg-gray-50 border border-gray-200'}`}>
                    <option>Select budget</option>
                    <option>ETB 50K - 100K</option>
                    <option>ETB 100K - 300K</option>
                    <option>ETB 300K+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Your Message *</label>
                <textarea rows="5" required placeholder="Tell me about your project..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 placeholder-gray-400'}`}></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* FOOTER                                   */}
      {/* ========================================== */}
      <footer className={`py-12 border-t ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className={`text-xl font-black bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-violet-600'}`}>Abel Samuel</h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Machine Learning Engineer & Full Stack Developer</p>
            </div>
            
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              © {new Date().getFullYear()} Abel Samuel. Crafted with ❤️ and ☕
            </p>
            
            <div className="flex gap-4">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social, i) => (
                <a key={i} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}>
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================== */}
      {/* CUSTOM CSS ANIMATIONS                     */}
      {/* ========================================== */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }

        @keyframes scroll-down {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;