import React, { useState } from 'react';

const Service = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi0yIDIgMiA0IDIgNHptMC0zMGMwLTIgMi00IDItNHMtMi0yLTIgMiAyIDQgMjQ0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-white/90 font-medium">NeurIPS 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                LLM-PersonaHub
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              A Unified Framework for Personalized Large Language Model Generation
            </p>

            {/* Authors */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['Zhangchen Xu', 'Feng Zhu', 'Long Qin', 'Zhiwu Lu', 'Tao Zhu', 'Jie Zhou', 'Jiwen Lu'].map((author, index) => (
                <span key={index} className="text-white/70 hover:text-white transition-colors cursor-pointer text-base">
                  {author}{index < 6 && <span className="text-white/30 mx-2">•</span>}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10">📄 Paper (arXiv)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1">
                💻 Code (GitHub)
              </button>
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1">
                🎬 Video
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Abstract Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 lg:p-14 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Abstract</h2>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed text-justify">
              The rapid development of large language models (LLMs) has greatly increased the demand for high-quality model evaluation techniques. Current evaluation methods typically focus on measuring performance on diverse tasks and benchmarks. However, comprehensive evaluation requires not only accuracy but also an understanding of the model's reasoning process and potential failure modes. In this work, we introduce a unified framework that addresses these challenges through personalized generation approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Contributions</h2>
            <p className="text-xl text-white/60">What makes this work unique</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Unified Framework',
                description: 'Comprehensive approach integrating multiple evaluation dimensions into a single cohesive framework',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🔧',
                title: 'Novel Methodology',
                description: 'Innovative techniques for understanding model behavior and reasoning patterns',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '📊',
                title: 'Extensive Evaluation',
                description: 'Rigorous experiments across multiple benchmarks demonstrating effectiveness',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: '⚡',
                title: 'Practical Impact',
                description: 'Real-world applications with significant improvements over existing methods',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: '🎨',
                title: 'Personalization',
                description: 'Adaptive generation capabilities tailored to specific use cases',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '🌐',
                title: 'Broad Applicability',
                description: 'Versatile framework applicable across various domains and scenarios',
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((item, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
                
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Methodology</h2>
            <p className="text-xl text-white/60">Our technical approach</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    01
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Data Collection & Processing</h3>
                    <p className="text-white/60 leading-relaxed">
                      We collect diverse datasets spanning multiple domains and carefully preprocess them to ensure quality and consistency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Model Architecture Design</h3>
                    <p className="text-white/60 leading-relaxed">
                      Our architecture incorporates attention mechanisms and specialized modules for personalized generation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    03
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Training & Optimization</h3>
                    <p className="text-white/60 leading-relaxed">
                      Advanced training strategies with careful hyperparameter tuning and optimization techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="w-full h-full bg-white/5 rounded-2xl flex items-center justify-center border border-dashed border-white/20">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧠</div>
                    <p className="text-white/60 text-lg">Architecture Diagram</p>
                    <p className="text-white/40 text-sm mt-2">[Placeholder for methodology figure]</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full filter blur-2xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full filter blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experimental Results</h2>
            <p className="text-xl text-white/60">Performance metrics and comparisons</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '94.2%', label: 'Accuracy', color: 'from-blue-500 to-cyan-500' },
              { value: '23%', label: 'Improvement', color: 'from-purple-500 to-pink-500' },
              { value: '15+', label: 'Benchmarks', color: 'from-orange-500 to-red-500' },
              { value: '3x', label: 'Faster Training', color: 'from-green-500 to-emerald-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-white/30 transition-all duration-300">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Results Visualization Placeholder */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
            <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-dashed border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-white/60 text-lg">Results Visualization</p>
                <p className="text-white/40 text-sm mt-2">[Placeholder for experimental results figures]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-10 lg:p-14 border border-white/20 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Citation</h2>
              <p className="text-white/60 text-lg">If you find our work useful, please cite:</p>
            </div>

            <div className="relative">
              <pre className="bg-black/40 rounded-2xl p-6 overflow-x-auto border border-white/10">
                <code className="text-sm text-green-400 font-mono leading-relaxed">
{`@article{xu2024llmpersonahub,
  title     = {LLM-PersonaHub: A Unified Framework for 
               Personalized Large Language Model Generation},
  author    = {Xu, Zhangchen and Zhu, Feng and Qin, Long and 
               Lu, Zhiwu and Zhu, Tao and Zhou, Jie and Lu, Jiwen},
  journal   = {Advances in Neural Information Processing Systems},
  year      = {2024}
}`}
                </code>
              </pre>
              
              <button className="absolute top-4 right-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition-colors border border-white/20">
                📋 Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/40 text-sm">
              © 2024 LLM-PersonaHub Team. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Use</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Service;
