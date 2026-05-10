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

  // Development Skills
  const devSkills = [
    {
      name: 'HTML5',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      color: 'from-orange-500 to-red-600',
      shadowColor: 'rgba(249,115,22,0.3)',
      level: 95,
      category: 'Frontend',
      showOriginal: true
    },
    {
      name: 'CSS3',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
      color: 'from-blue-500 to-blue-700',
      shadowColor: 'rgba(59,130,246,0.3)',
      level: 95,
      category: 'Frontend',
      showOriginal: true
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'from-yellow-400 to-yellow-600',
      shadowColor: 'rgba(234,179,8,0.3)',
      level: 90,
      category: 'Language',
      showOriginal: true
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-cyan-400 to-blue-500',
      shadowColor: 'rgba(34,211,238,0.3)',
      level: 88,
      category: 'Framework',
      showOriginal: true
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      color: 'from-cyan-400 to-teal-500',
      shadowColor: 'rgba(6,182,212,0.3)',
      level: 92,
      category: 'Styling',
      showOriginal: true
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'from-blue-500 to-yellow-500',
      shadowColor: 'rgba(59,130,246,0.3)',
      level: 85,
      category: 'Language',
      showOriginal: true
    },
    {
      name: 'Django',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      color: 'from-green-600 to-green-800',
      shadowColor: 'rgba(22,163,74,0.3)',
      level: 82,
      category: 'Framework',
      showOriginal: true
    },
    {
      name: 'Flask',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      color: 'from-gray-500 to-gray-700',
      shadowColor: 'rgba(107,114,128,0.3)',
      level: 80,
      category: 'Framework',
      showOriginal: true
    },
    {
      name: 'React Native',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-blue-400 to-purple-600',
      shadowColor: 'rgba(99,102,241,0.3)',
      level: 78,
      category: 'Mobile',
      showOriginal: true
    },
    {
      name: 'Node.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      color: 'from-green-500 to-green-700',
      shadowColor: 'rgba(34,197,94,0.3)',
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
      shadowColor: 'rgba(29,78,216,0.3)',
      level: 90,
      category: 'OS',
      showOriginal: true
    },
    {
      name: 'Penetration Testing',
      logo: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png',
      color: 'from-red-600 to-red-800',
      shadowColor: 'rgba(220,38,38,0.3)',
      level: 88,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Network Security',
      logo: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
      color: 'from-indigo-500 to-purple-700',
      shadowColor: 'rgba(99,102,241,0.3)',
      level: 85,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Digital Forensics',
      logo: 'https://cdn-icons-png.flaticon.com/512/2885/2885417.png',
      color: 'from-amber-600 to-orange-700',
      shadowColor: 'rgba(217,119,6,0.3)',
      level: 80,
      category: 'Forensics',
      showOriginal: false
    },
    {
      name: 'Social Engineering',
      logo: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png',
      color: 'from-pink-500 to-rose-600',
      shadowColor: 'rgba(236,72,153,0.3)',
      level: 82,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Ethical Hacking',
      logo: 'https://cdn-icons-png.flaticon.com/512/2913/2913156.png',
      color: 'from-green-600 to-teal-700',
      shadowColor: 'rgba(16,185,129,0.3)',
      level: 87,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Vulnerability Assessment',
      logo: 'https://cdn-icons-png.flaticon.com/512/471/471662.png',
      color: 'from-yellow-500 to-amber-600',
      shadowColor: 'rgba(245,158,11,0.3)',
      level: 84,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Web Security',
      logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png',
      color: 'from-violet-500 to-purple-700',
      shadowColor: 'rgba(139,92,246,0.3)',
      level: 86,
      category: 'Security',
      showOriginal: false
    },
    {
      name: 'Wireless Hacking',
      logo: 'https://cdn-icons-png.flaticon.com/512/93/93158.png',
      color: 'from-sky-500 to-blue-600',
      shadowColor: 'rgba(14,165,233,0.3)',
      level: 78,
      category: 'Network',
      showOriginal: false
    },
    {
      name: 'Metasploit',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAABGRkaxsbHz8/P29vYiIiJQUFBqampubm5YWFjl5eXp6enOzs76+voVFRXa2to+Pj4ICAjExMQoKCg1NTUvLy+IiIgaGhqhoaGAgIB5eXleXl6qqqq9vb2SkpL98sGMAAADGElEQVRoge2Za5OrIAyGoV63Xmq1Vq1t/f//ctuCiC4BAu7M2ZnzfrT4VEMSkkiISWVWPIOhu5/7+i16ao/d8Hg2VWS8VausGdLkQgH1yX16Vi7csHqkIFbWKZmKHAHOn93RhrvocHtYvUI2tDjwrPhW6MnVdHYjM/UdzG+sjGzgPwH4wZ/9Mv9/uAP8xFU7wRMdvK7CWVVnRE2FUNWa4ZdSulIYnj6Qb/8yw+NVsqu09LVPo+Ek09A38YKHkzCG2NtQd4CTEEgKP9KIC5yEiYr9M8U6wUmkiC5F+naDE3LfslVnjyucpCt0rzzXGPyIh5ObxL6EyiXucDIJdgucxx5wMsxs9XP7wcnjc/O5hH63gF/Am0mgZXvCSQM62g5wkul+9IVrhYQ3k4FXjtJqpLcEdNSy85ZKfomG07uGXbyWS/AUDacHcA8+fu8HhyKyHKkSbp0VA5anMsXakOd4X7jqZKh6uhecNpuVjUiRO8DX1Y+UfneB00FaJx8cu8AlSkh3hy8u84fh9W/Cf/PJ838U3v9ZeC0t3x1OneF3LZxNLKRKEAdnPQLU5HrCrxZw6dzBwakWzmwuNYAoeMQuQAc0M5qUuVHwgl2AahHmS1IdJMOXrQDgvH6Hyih2wrTQk5dvRWHZqOGs4KIdAB+262U4ILG4ZM6y7dmFKvbzwwnO36cGGxP250uMYeB8zAlXrqzrWbp6BHzeZVV1xu3GZghiSxHwL9ODC8PNO24P5ytjqI38iJWuc/lmDZ+Nsi37NobhDpWj4NF1/caQuDuydtMWzocarR5NhMekCDjfTPUsYy1ewo7W8LnmtRrPj4JuBYc7BKW62TJPM7zkmbaGowewjMWT88iIrdnLbMVW4AxGKQuDSDoi5wWiXbPQDYd+Kbf+7mKaPiiVmrlvBWaSSpOZDB9rRpm39eT04Y+puurZ0IjRTvP8AGCj3FuhG8xOPdFE5OCfcnLBrQp1POmPNGup4umKyFQGjVs2NptotUmT+GyiVSGzHSMeViY+TcceUQkp4ons4Bs5an0Mrx/AeihLYsPn97W+Ac6tKWrr1rhZAAAAAElFTkSuQmCC',
      color: 'from-teal-600 to-emerald-700',
      shadowColor: 'rgba(20,184,166,0.3)',
      level: 85,
      category: 'Tool',
      showOriginal: true
    }
  ];

  // Tools
  const tools = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', showOriginal: true },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717', showOriginal: true },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC', showOriginal: true },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: '#FCC624', showOriginal: true },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', showOriginal: true },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1', showOriginal: true },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900', showOriginal: true },
    { name: 'Supabase', logo: 'https://supabase.com/favicon/supabase-logo-icon-dark.svg', color: '#3ECF8E', showOriginal: true },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', showOriginal: true },
    { name: 'Wireshark', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wireshark_icon_new.png/960px-Wireshark_icon_new.png', color: '#1679A1', showOriginal: true },
    { name: 'Burp Suite', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAhFBMVEUwMDDrXjL19fX////4+Pj7+/ssLCznXTEZGRn07eu4uLhMTEz06OXqUxz2x777///rWikAAADHx8ciIiIQEBDNzc0ICAjmVSLT09Py19Gvr69FRUXnWiu+vr777OgdHR3z3tnc3Nzp6elYWFhnZ2dzc3OHh4ednZ3xua3mTQ7lSAD00svnrBBqAAACYElEQVRoge3Z226jMBAGYIIPkGwoJZADhUDa9Lh9//dbH4i0SbHxjEFVJOYil5/+YIOHIQjcK14RQh6ShXMB7Bn/BTzbTIcXT4SxdBpc2JSl5d7ddsezFQlpekrqCfBiQ8IwLZMIYLvi2l4n9fg4jw9M2Kc9zHbCeY6zXXCePyv7sY5Gx3nwouwabA/jwqZyLeG5h/G8UjYm9yCeV6G0mxq6lg54fqaXa4Kw7Xh+VrmXuNx2vH0Vt6XIjbVtePzGlB1hbQsevxFP24wX78Km6dLDNuJj2Ca8+JA287MNeKbtMMLclwO4OC5HyN2Py+Oyy+1l9+HFUdp0Xe8fe8rvgM42yqaNrvV1LT89+hbebpmyGWOEpeJXPF3+K5+miLeHi02IlCm9xike18dlZ0ud3hY+Oa9eiLV88KA6/7FUdSRejSi3VbHyw611v28Wd41PuqAzPuMzPuO/gl/1llCc0WZpqfDkhatmJjSU6AHrqXC6Xly1kji8v9IbG4YfLd2StG9bYAgeVIZuKdjKuV2zuG2vQbihZ9qpf9T8nK3B8N5Ss0zyM/cYeLwx5B4BF7nl9a77XmdGyE2ZaZbpn1vswZNhruGfm5pngl62npNKe3y82DKr7YPHW5U7Mc8H8PZuKLcH3mr7yzbXwNrZwWG+i82t7PIrss5jcPZO23u7jcK7eXpp2SdovPsOUCYDuTH4JbdtD2Lx7jvA0FqicB4/O60lBudc239dbOgBvQPkBuJd7m+33EC81fbwHkTgrRxmpt8u+wSOxysaMqc9iMKZHKC5z44xuKsNxe/3hQs2hvoHDI9AkOGP4psAAAAASUVORK5CYII=', color: '#FF6633', showOriginal: true },
    { name: 'Nmap', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_nmap.png', color: '#4682B4', showOriginal: false },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', showOriginal: true },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', showOriginal: true },
    { name: 'Ubuntu', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', color: '#E95420', showOriginal: true }
  ];

  // SkillCard Component - WHITE MODE
  const SkillCard = ({ skill, index }) => (
    <div 
      className={`
        group relative overflow-hidden rounded-2xl
        bg-white border border-gray-200 p-6 transition-all duration-500 cursor-pointer
        hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50
        hover:-translate-y-2
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
      
      {/* Logo Container */}
      <div className="relative mb-5">
        
        {/* Original Color Logos - White Mode Container */}
        {skill.showOriginal ? (
          <div className={`
            relative w-14 h-14 rounded-xl p-2.5
            bg-gray-100 border border-gray-200
            flex items-center justify-center
            shadow-sm transform transition-all duration-400
            group-hover:scale-110 group-hover:shadow-md
          `}
          >
            <img 
              src={skill.logo} 
              alt={skill.name}
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          /* Gradient Icons */
          <div className={`
            relative w-14 h-14 rounded-xl p-3
            bg-gradient-to-br ${skill.color}
            flex items-center justify-center
            shadow-md transform transition-all duration-400
            group-hover:scale-110
          `}
          >
            <img 
              src={skill.logo} 
              alt={skill.name}
              className="w-full h-full object-contain filter brightness-0 invert"
            />
          </div>
        )}
        
        {/* Category Badge - White Mode */}
        <span className="
          absolute -top-2 -right-2 px-2 py-0.5 rounded-full
          text-[9px] font-bold uppercase tracking-wider
          bg-gray-100 border border-gray-200 text-gray-500
        ">
          {skill.category}
        </span>
      </div>

      {/* Skill Name */}
      <h4 className="text-base font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {skill.name}
      </h4>

      {/* Progress Bar - White Mode */}
      <div className="relative mb-3">
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
          <div 
            className={`
              h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden
              transition-all duration-1000 ease-out
              ${isVisible ? '' : 'w-0'}
            `}
            style={{ width: `${skill.level}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Level Text */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-500">Proficiency</p>
        <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
          {skill.level}%
        </span>
      </div>

      {/* Bottom accent line */}
      <div 
        className={`
          absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${skill.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
        `}
      ></div>
    </div>
  );

  return (
    <section id="tech" className="relative min-h-screen py-28 overflow-hidden bg-white">
      
      {/* BACKGROUND EFFECTS - Light Mode */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-15%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px] animate-float-orb"></div>
        <div className="absolute bottom-[-20%] left-[-15%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[130px] animate-float-orb-delayed"></div>
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-[120px] animate-pulse-slow"></div>

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION - White Mode */}
        <div className="text-center mb-20 space-y-6">
          
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 relative">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-200">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
              Technical Arsenal
            </span>
            
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="block text-gray-900">Technologies</span>
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                & Expertise
              </span>
              
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full"></span>
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-500 font-light leading-relaxed">
            A comprehensive toolkit spanning{' '}
            <span className="text-gray-900 font-semibold">full-stack development</span>,{' '}
            <span className="text-blue-600 font-semibold">cybersecurity</span>, and{' '}
            <span className="text-gray-900 font-semibold">emerging technologies</span>
          </p>
        </div>

        {/* DEVELOPMENT SECTION - White Mode */}
        <div className="mb-20">
          
          <div className="flex items-center gap-5 mb-10 group/header-dev">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-200 transform transition-all duration-400 group-hover/header-dev:scale-110">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Development Stack
              </h3>
              <p className="text-sm text-gray-500 font-medium">Building modern applications</p>
            </div>
            
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-blue-200 via-transparent to-transparent"></div>
            
            <div className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
              <span className="text-sm font-bold text-blue-600">{devSkills.length} Skills</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {devSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* CYBERSECURITY SECTION - White Mode */}
        <div className="mb-20">
          
          <div className="flex items-center gap-5 mb-10 group/header-sec">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-md shadow-red-200 transform transition-all duration-400 group-hover/header-sec:scale-110">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Security & Hacking
              </h3>
              <p className="text-sm text-gray-500 font-medium">Cybersecurity expertise</p>
            </div>
            
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-red-200 via-transparent to-transparent"></div>
            
            <div className="px-4 py-2 rounded-full bg-red-50 border border-red-200">
              <span className="text-sm font-bold text-red-600">{hackingSkills.length} Skills</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {hackingSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index + devSkills.length} />
            ))}
          </div>
        </div>

        {/* TOOLS & TECHNOLOGIES SECTION - White Mode */}
        <div className="relative">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 mb-6">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
                Additional Toolkit
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Tools & Technologies
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Professional tools I use daily
            </p>
          </div>

          <div className="relative p-8 rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden">
            
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #6b7280 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}></div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 pointer-events-none"></div>

            <div className="relative z-10 flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="
                    group/tool relative flex items-center gap-2.5
                    px-5 py-3 rounded-xl
                    bg-white border border-gray-200
                    hover:bg-gray-50 hover:border-gray-300
                    transition-all duration-400
                    hover:scale-105 hover:-translate-y-1
                    hover:shadow-lg hover:shadow-gray-200/50
                  "
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  
                  <div className="relative w-6 h-6 flex items-center justify-center bg-gray-100 rounded-lg p-1">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      style={{ filter: tool.showOriginal ? 'none' : 'brightness(0) invert(0.3)' }}
                    />
                    
                    <span 
                      className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-white"
                      style={{ backgroundColor: tool.color }}
                    ></span>
                  </div>
                  
                  <span className="text-sm font-semibold text-gray-700 group-hover/tool:text-gray-900 transition-colors duration-300">
                    {tool.name}
                  </span>
                  
                  <span className="absolute bottom-2 left-5 right-5 h-[1px] rounded-full bg-gradient-to-r from-transparent via-gray-300 to-transparent scale-x-0 group-hover/tool:scale-x-100 transition-transform duration-400"></span>
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
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Tech;