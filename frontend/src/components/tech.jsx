import { useState } from 'react';
import { 
  Code, Shield, Database, Cloud, Cpu, Globe, 
  Smartphone, Lock, Terminal, Bug, Eye, Search,
  Star, TrendingUp, Award, CheckCircle
} from 'lucide-react';

const TechReview = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Clean Data Structure
  const skillData = {
    development: [
      { name: 'HTML5', level: 95, category: 'Frontend', status: 'expert' },
      { name: 'CSS3', level: 95, category: 'Frontend', status: 'expert' },
      { name: 'JavaScript', level: 90, category: 'Language', status: 'expert' },
      { name: 'React', level: 88, category: 'Framework', status: 'advanced' },
      { name: 'Tailwind CSS', level: 92, category: 'Styling', status: 'expert' },
      { name: 'Python', level: 85, category: 'Language', status: 'advanced' },
      { name: 'Django', level: 82, category: 'Framework', status: 'advanced' },
      { name: 'Flask', level: 80, category: 'Framework', status: 'advanced' },
      { name: 'React Native', level: 78, category: 'Mobile', status: 'intermediate' },
      { name: 'Node.js', level: 86, category: 'Runtime', status: 'advanced' },
      { name: 'TypeScript', level: 82, category: 'Language', status: 'advanced' }
    ],
    security: [
      { name: 'Kali Linux', level: 90, category: 'OS', status: 'expert' },
      { name: 'Penetration Testing', level: 88, category: 'Security', status: 'expert' },
      { name: 'Network Security', level: 85, category: 'Security', status: 'advanced' },
      { name: 'Digital Forensics', level: 80, category: 'Forensics', status: 'advanced' },
      { name: 'Ethical Hacking', level: 87, category: 'Security', status: 'expert' },
      { name: 'Vulnerability Assessment', level: 84, category: 'Security', status: 'advanced' },
      { name: 'Web Security', level: 86, category: 'Security', status: 'advanced' },
      { name: 'Metasploit', level: 85, category: 'Tool', status: 'advanced' }
    ],
    tools: [
      { name: 'Git', category: 'Version Control', status: 'expert' },
      { name: 'GitHub', category: 'Platform', status: 'expert' },
      { name: 'VS Code', category: 'IDE', status: 'expert' },
      { name: 'Linux', category: 'OS', status: 'advanced' },
      { name: 'Docker', category: 'DevOps', status: 'intermediate' },
      { name: 'PostgreSQL', category: 'Database', status: 'advanced' },
      { name: 'AWS', category: 'Cloud', status: 'intermediate' },
      { name: 'Redis', category: 'Database', status: 'intermediate' },
      { name: 'TensorFlow', category: 'ML/AI', status: 'intermediate' },
      { name: 'Nmap', category: 'Security Tool', status: 'advanced' },
      { name: 'Wireshark', category: 'Network Tool', status: 'advanced' },
      { name: 'Burp Suite', category: 'Security Tool', status: 'advanced' }
    ]
  };

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Code className="w-4 h-4" />, count: 31 },
    { id: 'development', label: 'Development', icon: <Code className="w-4 h-4" />, count: 11 },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" />, count: 8 },
    { id: 'tools', label: 'Tools', icon: <Terminal className="w-4 h-4" />, count: 12 }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'expert': return 'text-green-500 bg-green-50';
      case 'advanced': return 'text-blue-500 bg-blue-50';
      case 'intermediate': return 'text-yellow-500 bg-yellow-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const filteredData = activeCategory === 'all' 
    ? [...skillData.development, ...skillData.security, ...skillData.tools]
    : skillData[activeCategory] || [];

  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills Overview</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive review of development, security, and tool expertise
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mt-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{skillData.development.length}</div>
              <div className="text-sm text-gray-500">Dev Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{skillData.security.length}</div>
              <div className="text-sm text-gray-500">Security Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{skillData.tools.length}</div>
              <div className="text-sm text-gray-500">Tools</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm
                transition-all duration-300 border
                ${activeCategory === cat.id 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-md'
                }
              `}
            >
              {cat.icon}
              {cat.label}
              <span className={`
                px-2 py-0.5 rounded-full text-xs
                ${activeCategory === cat.id ? 'bg-white/20' : 'bg-gray-100'}
              `}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((skill, idx) => (
            <div
              key={idx}
              className="
                bg-white border border-gray-200 rounded-xl p-5
                hover:border-blue-300 hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">{skill.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{skill.category}</p>
                </div>
                
                <span className={`
                  px-2.5 py-1 rounded-lg text-xs font-semibold capitalize
                  ${getStatusColor(skill.status)}
                `}>
                  {skill.status}
                </span>
              </div>

              {/* Progress Bar (only for skills with levels) */}
              {'level' in skill && (
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Proficiency</span>
                    <span className="font-semibold text-gray-700">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${getLevelColor(skill.level)} transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Checkmark for tools without levels */}
              {!('level' in skill) && (
                <div className="flex items-center gap-2 text-green-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">In Toolkit</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Code className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">11</div>
              <div className="text-sm text-gray-600">Development Technologies</div>
              <div className="text-xs text-green-600 mt-1 font-medium">↑ Expert Level</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Shield className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-sm text-gray-600">Security Skills</div>
              <div className="text-xs text-green-600 mt-1 font-medium">↑ Advanced Level</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Terminal className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Professional Tools</div>
              <div className="text-xs text-blue-600 mt-1 font-medium">Daily Usage</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 font-medium mb-2">
              <TrendingUp className="w-5 h-5 inline mr-2 text-green-600" />
              Overall Assessment: Senior Full-Stack Developer + Security Specialist
            </p>
            <p className="text-sm text-gray-600">
              Average proficiency across all rated skills:{' '}
              <span className="font-bold text-blue-600">86%</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechReview;