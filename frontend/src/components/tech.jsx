import { useState, useEffect } from 'react';

const Tech = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('tech');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Development Skills with ORIGINAL COLOR LOGOS
  const devSkills = [
    {
      name: 'HTML5',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      color: 'from-orange-500 to-red-600',
      shadowColor: 'rgba(249,115,22,0.4)',
      level: 95,
      category: 'Frontend',
      showOriginal: true
    },
    {
      name: 'CSS3',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
      color: 'from-blue-500 to-blue-700',
      shadowColor: 'rgba(59,130,246,0.4)',
      level: 95,
      category: 'Frontend',
      showOriginal: true
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'from-yellow-400 to-yellow-600',
      shadowColor: 'rgba(234,179,8,0.4)',
      level: 90,
      category: 'Language',
      showOriginal: true
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-cyan-400 to-blue-500',
      shadowColor: 'rgba(34,211,238,0.4)',
      level: 88,
      category: 'Framework',
      showOriginal: true
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      color: 'from-cyan-400 to-teal-500',
      shadowColor: 'rgba(6,182,212,0.4)',
      level: 92,
      category: 'Styling',
      showOriginal: true
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'from-blue-500 to-yellow-500',
      shadowColor: 'rgba(59,130,246,0.4)',
      level: 85,
      category: 'Language',
      showOriginal: true
    },
    {
      name: 'Django',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      color: 'from-green-600 to-green-800',
      shadowColor: 'rgba(22,163,74,0.4)',
      level: 82,
      category: 'Framework',
      showOriginal: true
    },
    {
      name: 'Flask',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      color: 'from-gray-500 to-gray-700',
      shadowColor: 'rgba(107,114,128,0.4)',
      level: 80,
      category: 'Framework',
      showOriginal: true
    },
    {
      name: 'React Native',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-blue-400 to-purple-600',
      shadowColor: 'rgba(99,102,241,0.4)',
      level: 78,
      category: 'Mobile',
      showOriginal: true
    },
    {
      name: 'Node.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      color: 'from-green-500 to-green-700',
      shadowColor: 'rgba(34,197,94,0.4)',
      level: 86,
      category: 'Runtime',
      showOriginal: true
    }
  ];

  // Cybersecurity Skills 
  const hackingSkills = [
    {
      name: 'Kali Linux',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg',
      color: 'from-blue-700 to-blue-900',
      shadowColor: 'rgba(29,78,216,0.5)',
      level: 90,
      category: 'OS',
      showOriginal: true
    },
    {
      name: 'Penetration Testing',
      logo: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png',
      color: 'from-red-600 to-red-800',
      shadowColor: 'rgba(220,38,38,0.5)',
      level: 88,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Network Security',
      logo: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
      color: 'from-indigo-500 to-purple-700',
      shadowColor: 'rgba(99,102,241,0.5)',
      level: 85,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Digital Forensics',
      logo: 'https://cdn-icons-png.flaticon.com/512/2885/2885417.png',
      color: 'from-amber-600 to-orange-700',
      shadowColor: 'rgba(217,119,6,0.5)',
      level: 80,
      category: 'Forensics',
      showOriginal: false
    },
    {
      name: 'Social Engineering',
      logo: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png',
      color: 'from-pink-500 to-rose-600',
      shadowColor: 'rgba(236,72,153,0.5)',
      level: 82,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Ethical Hacking',
      logo: 'https://cdn-icons-png.flaticon.com/512/2913/2913156.png',
      color: 'from-green-600 to-teal-700',
      shadowColor: 'rgba(16,185,129,0.5)',
      level: 87,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Vulnerability Assessment',
      logo: 'https://cdn-icons-png.flaticon.com/512/471/471662.png',
      color: 'from-yellow-500 to-amber-600',
      shadowColor: 'rgba(245,158,11,0.5)',
      level: 84,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Web Security',
      logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png',
      color: 'from-violet-500 to-purple-700',
      shadowColor: 'rgba(139,92,246,0.5)',
      level: 86,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Wireless Hacking',
      logo: 'https://cdn-icons-png.flaticon.com/512/93/93158.png',
      color: 'from-sky-500 to-blue-600',
      shadowColor: 'rgba(14,165,233,0.5)',
      level: 78,
      category: 'Network',
      showOriginal: false
    },
    {
      name: 'Metasploit',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAABGRkaxsbHz8/P29vYiIiJQUFBqampubm5YWFjl5eXp6enOzs76+voVFRXa2to+Pj4ICAjExMQoKCg1NTUvLy+IiIgaGhqhoaGAgIB5eXleXl6qqqq9vb2SkpL98sGMAAADGElEQVRoge2Za5OrIAyGoV63Xmq1Vq1t/f//ctuCiC4BAu7M2ZnzfrT4VEMSkkiISWVWPIOhu5/7+i16ao/d8Hg2VWS8VausGdLkQgH1yX16Vi7csHqkIFbWKZmKHAHOn93RhrvocHtYvUI2tDjwrPhW6MnVdHYjM/UdzG+sjGzgPwH4wZ/9Mv9/uAP8xFU7wRMdvK7CWVVnRE2FUNWa4ZdSulIYnj6Qb/8yw+NVsqu09LVPo+Ek09A38YKHkzCG2NtQd4CTEEgKP9KIC5yEiYr9M8U6wUmkiC5F+naDE3LfslVnjyucpCt0rzzXGPyIh5ObxL6EyiXucDIJdgucxx5wMsxs9XP7wcnjc/O5hH63gF/Am0mgZXvCSQM62g5wkul+9IVrhYQ3k4FXjtJqpLcEdNSy85ZKfomG07uGXbyWS/AUDacHcA8+fu8HhyKyHKkSbp0VA5anMsXakOd4X7jqZKh6uhecNpuVjUiRO8DX1Y+UfneB00FaJx8cu8AlSkh3hy8u84fh9W/Cf/PJ838U3v9ZeC0t3x1OneF3LZxNLKRKEAdnPQLU5HrCrxZw6dzBwakWzmwuNYAoeMQuQAc0M5qUuVHwgl2AahHmS1IdJMOXrQDgvH6Hyih2wrTQk5dvRWHZqOGs4KIdAB+262U4ILG4ZM6y7dmFKvbzwwnO36cGGxP250uMYeB8zAlXrqzrWbp6BHzeZVV1xu3GZghiSxHwL9ODC8PNO24P5ytjqI38iJWuc/lmDZ+Nsi37NobhDpWj4NF1/caQuDuydtMWzocarR5NhMekCDjfTPUsYy1ewo7W8LnmtRrPj4JuBYc7BKW62TJPM7zkmbaGowewjMWT88iIrdnLbMVW4AxGKQuDSDoi5wWiXbPQDYd+Kbf+7mKaPiiVmrlvBWaSSpOZDB9rRpm39eT04Y+puurZ0IjRTvP8AGCj3FuhG8xOPdFE5OCfcnLBrQp1POmPNGup4umKyFQGjVs2NptotUmT+GyiVSGzHSMeViY+TcceUQkp4ons4Bs5an0Mrx/AeihLYsPn97W+Ac6tKWrr1rhZAAAAAElFTkSuQmCC',
      color: 'from-teal-600 to-emerald-700',
      shadowColor: 'rgba(20,184,166,0.5)',
      level: 85,
      category: 'Tool',
      showOriginal: true
    }
  ];

  // Additional Tools - UPDATED: Removed MongoDB & Nginx, Added Supabase, Fixed security tool logos
  const tools = [
    { 
      name: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      showOriginal: true
    },
    { 
      name: 'GitHub', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: '#181717',
      showOriginal: true
    },
    { 
      name: 'VS Code', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      color: '#007ACC',
      showOriginal: true
    },
    { 
      name: 'Linux', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      color: '#FCC624',
      showOriginal: true
    },
    { 
      name: 'Docker', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED',
      showOriginal: true
    },
    { 
      name: 'PostgreSQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: '#4169E1',
      showOriginal: true
    },
    // ❌ REMOVED MongoDB
    // ❌ REMOVED Nginx
    
    { 
      name: 'AWS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      color: '#FF9900',
      showOriginal: true
    },
    
    // ✅ NEW: Supabase (replaces Firebase)
    { 
      name: 'Supabase', 
      logo: 'https://supabase.com/favicon/supabase-logo-icon-dark.svg',
      color: '#3ECF8E',
      showOriginal: true
    },
    
    { 
      name: 'Redis', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: '#DC382D',
      showOriginal: true
    },
    
    // ✅ FIXED: Wireshark - Official Shark Fin Logo
    { 
      name: 'Wireshark', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wireshark_icon_new.png/960px-Wireshark_icon_new.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20230509085415',
      color: '#1679A1',
      showOriginal: true
    },
    
    // ✅ FIXED: Burp Suite - Official PortSwigger Logo  
    { 
      name: 'Burp Suite', 
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAhFBMVEUwMDDrXjL19fX////4+Pj7+/ssLCznXTEZGRn07eu4uLhMTEz06OXqUxz2x777///rWikAAADHx8ciIiIQEBDNzc0ICAjmVSLT09Py19Gvr69FRUXnWiu+vr777OgdHR3z3tnc3Nzp6elYWFhnZ2dzc3OHh4ednZ3xua3mTQ7lSAD00svnrBBqAAACYElEQVRoge3Z226jMBAGYIIPkGwoJZADhUDa9Lh9//dbH4i0SbHxjEFVJOYil5/+YIOHIQjcK14RQh6ShXMB7Bn/BTzbTIcXT4SxdBpc2JSl5d7ddsezFQlpekrqCfBiQ8IwLZMIYLvi2l4n9fg4jw9M2Kc9zHbCeY6zXXCePyv7sY5Gx3nwouwabA/jwqZyLeG5h/G8UjYm9yCeV6G0mxq6lg54fqaXa4Kw7Xh+VrmXuNx2vH0Vt6XIjbVtePzGlB1hbQsevxFP24wX78Km6dLDNuJj2Ca8+JA287MNeKbtMMLclwO4OC5HyN2Py+Oyy+1l9+HFUdp0Xe8fe8rvgM42yqaNrvV1LT89+hbebpmyGWOEpeJXPF3+K5+miLeHi02IlCm9xike18dlZ0ud3hY+Oa9eiLV88KA6/7FUdSRejSi3VbHyw611v28Wd41PuqAzPuMzPuO/gl/1llCc0WZpqfDkhatmJjSU6AHrqXC6Xly1kji8v9IbG4YfLd2StG9bYAgeVIZuKdjKuV2zuG2vQbihZ9qpf9T8nK3B8N5Ss0zyM/cYeLwx5B4BF7nl9a77XmdGyE2ZaZbpn1vswZNhruGfm5pngl62npNKe3y82DKr7YPHW5U7Mc8H8PZuKLcH3mr7yzbXwNrZwWG+i82t7PIrss5jcPZO23u7jcK7eXpp2SdovPsOUCYDuTH4JbdtD2Lx7jvA0FqicB4/O60lBudc239dbOgBvQPkBuJd7m+33EC81fbwHkTgrRxmpt8u+wSOxysaMqc9iMKZHKC5z44xuKsNxe/3hQs2hvoHDI9AkOGP4psAAAAASUVORK5CYII=',
      color: '#FF6633',
      showOriginal: true
    },
    
    // ✅ FIXED: Nmap - Official Logo (better quality)
    { 
      name: 'Nmap', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_nmap.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20230731104508',
      color: '#4682B4',
      showOriginal: false
    },
    
    { 
      name: 'TensorFlow', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      color: '#FF6F00',
      showOriginal: true
    },
    { 
      name: 'TypeScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: '#3178C6',
      showOriginal: true
    },
    { 
      name: 'Ubuntu', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
      color: '#E95420',
      showOriginal: true
    }
  ];

  // SkillCard Component with Dual Mode Support
  const SkillCard = ({ skill, index }) => (
    <div 
      className={`
        group relative overflow-hidden rounded-3xl
        bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]
        p-6 transition-all duration-700 cursor-pointer
        hover:bg-white/[0.07] hover:border-blue-400/30
        hover:shadow-[0_25px_60px_rgba(59,130,246,0.15)]
        hover:-translate-y-2
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10`}></div>
      
      {/* Glow effect behind card */}
      <div 
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-20"
        style={{ background: `linear-gradient(to bottom right, ${skill.shadowColor}, transparent)` }}
      ></div>

      {/* Logo Container - DUAL MODE SUPPORT */}
      <div className="relative mb-5">
        
        {/* MODE 1: Original Color Logos */}
        {skill.showOriginal ? (
          <div className={`
            relative w-16 h-16 rounded-2xl p-2.5
            bg-slate-900/80 border border-white/10
            flex items-center justify-center
            shadow-lg transform transition-all duration-500
            group-hover:scale-110 group-hover:rotate-3
          `}
          style={{ boxShadow: `0 10px 30px ${skill.shadowColor}` }}
          >
            <img 
              src={skill.logo} 
              alt={skill.name}
              className="w-full h-full object-contain"
              style={{ filter: 'none' }}
            />
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: `inset 0 0 20px ${skill.shadowColor}` }}
            ></div>
          </div>
        ) : (
          /* MODE 2: Inverted White Icons */
          <div className={`
            relative w-16 h-16 rounded-2xl p-3
            bg-gradient-to-br ${skill.color}
            flex items-center justify-center
            shadow-lg transform transition-all duration-500
            group-hover:scale-110 group-hover:rotate-3
          `}
          style={{ boxShadow: `0 10px 30px ${skill.shadowColor}` }}
          >
            <img 
              src={skill.logo} 
              alt={skill.name}
              className="w-full h-full object-contain filter brightness-0 invert"
            />
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        )}
        
        {/* Category Badge */}
        <span className="
          absolute -top-2 -right-2 px-2.5 py-1 rounded-full
          text-[10px] font-bold uppercase tracking-wider
          bg-slate-800/80 backdrop-blur-sm border border-white/10 text-slate-400
        ">
          {skill.category}
        </span>
      </div>

      {/* Skill Name */}
      <h4 className="text-base font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
        {skill.name}
      </h4>

      {/* Progress Bar */}
      <div className="relative mb-3">
        <div className="h-2 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/10 overflow-hidden">
          <div 
            className={`
              h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden
              transition-all duration-1500 ease-out
              ${isVisible ? '' : 'w-0'}
            `}
            style={{ width: `${skill.level}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
            <div className="absolute inset-0 blur-sm" style={{ background: `linear-gradient(to right, ${skill.shadowColor}, transparent)` }}></div>
          </div>
        </div>
        
        <span 
          className={`absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700 ${hoveredSkill === skill.name ? 'w-full' : ''}`}
          style={hoveredSkill === skill.name ? { boxShadow: `0 0 10px ${skill.shadowColor}` } : {}}
        ></span>
      </div>

      {/* Level Text */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-500">
          Proficiency
        </p>
        <span className={`text-sm font-black text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}>
          {skill.level}%
        </span>
      </div>

      {/* Bottom accent line */}
      <div 
        className={`absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${skill.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
        style={{ boxShadow: `0 0 8px ${skill.shadowColor}` }}
      ></div>
    </div>
  );

  return (
    <section id="tech" className="relative min-h-screen py-32 overflow-hidden bg-slate-950">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-15%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] animate-float-orb"></div>
        <div className="absolute bottom-[-20%] left-[-15%] w-[500px] h-[500px] bg-purple-600/12 rounded-full blur-[130px] animate-float-orb-delayed"></div>
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>

        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="absolute inset-0 bg-radial-dark"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-24 space-y-6">
          
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 backdrop-blur-xl relative">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 uppercase tracking-wider">
              Technical Arsenal
            </span>
            
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="block text-white">Technologies</span>
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                & Expertise
              </span>
              
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 blur-[20px] opacity-60"></span>
              
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></span>
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
            A comprehensive toolkit spanning{' '}
            <span className="text-white font-medium">full-stack development</span>,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">cybersecurity</span>, and{' '}
            <span className="text-white font-medium">emerging technologies</span>
          </p>
        </div>

        {/* DEVELOPMENT SECTION */}
        <div className="mb-24">
          
          <div className="flex items-center gap-5 mb-12 group/header-dev">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_10px_40px_rgba(37,99,235,0.4)] transform transition-all duration-500 group-hover/header-dev:scale-110 group-hover/header-dev:rotate-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-blue-500/20 animate-ping opacity-20"></div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Development Stack
              </h3>
              <p className="text-sm text-slate-500 font-medium">Building modern applications</p>
            </div>
            
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-blue-500/30 via-transparent to-transparent"></div>
            
            <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm">
              <span className="text-sm font-black text-blue-400">{devSkills.length} Skills</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {devSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* CYBERSECURITY SECTION */}
        <div className="mb-24">
          
          <div className="flex items-center gap-5 mb-12 group/header-sec">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center shadow-[0_10px_40px_rgba(220,38,38,0.4)] transform transition-all duration-500 group-hover/header-sec:scale-110 group-hover/header-sec:-rotate-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-red-500/20 animate-ping opacity-20"></div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Security & Hacking
              </h3>
              <p className="text-sm text-slate-500 font-medium">Cybersecurity expertise</p>
            </div>
            
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-red-500/30 via-transparent to-transparent"></div>
            
            <div className="px-4 py-2 rounded-full bg-red-500/10 border border-red-400/20 backdrop-blur-sm">
              <span className="text-sm font-black text-red-400">{hackingSkills.length} Skills</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {hackingSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index + devSkills.length} />
            ))}
          </div>
        </div>

        {/* TOOLS & TECHNOLOGIES SECTION */}
        <div className="relative">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 backdrop-blur-xl mb-6">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 uppercase tracking-wider">
                Additional Toolkit
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Tools & Technologies
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Professional tools I use daily
            </p>
          </div>

          <div className="relative p-10 rounded-[2rem] bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] overflow-hidden">
            
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="
                    group/tool relative flex items-center gap-3
                    px-6 py-3.5 rounded-2xl
                    bg-white/[0.04] backdrop-blur-xl border border-white/[0.08]
                    hover:bg-white/[0.08] hover:border-white/20
                    transition-all duration-500
                    hover:scale-105 hover:-translate-y-1
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]
                  "
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  
                  <div className="relative w-7 h-7 flex items-center justify-center bg-slate-800/60 rounded-lg p-1">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      style={{ filter: tool.showOriginal ? 'none' : 'brightness(0) invert' }}
                    />
                    
                    <span 
                      className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-slate-900 shadow-lg"
                      style={{ backgroundColor: tool.color, boxShadow: `0 0 10px ${tool.color}60` }}
                    ></span>
                  </div>
                  
                  <span className="text-sm font-semibold text-slate-300 group-hover/tool:text-white transition-colors duration-300">
                    {tool.name}
                  </span>
                  
                  <span className="absolute bottom-2 left-6 right-6 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent scale-x-0 group-hover/tool:scale-x-100 transition-transform duration-500"></span>
                </div>
              ))}
            </div>
          </div>
        </div>

     

      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        .animate-float-orb {
          animation: float-orb 20s ease-in-out infinite;
        }

        @keyframes float-orb-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(1.05); }
          66% { transform: translate(20px, -20px) scale(0.95); }
        }
        .animate-float-orb-delayed {
          animation: float-orb-delayed 25s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .bg-radial-dark {
          background: radial-gradient(circle at center, transparent 0%, rgba(2,6,23,0.6) 100%);
        }
      `}</style>
    </section>
  );
};

export default Tech;