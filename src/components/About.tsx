import React from 'react';
import { Code, Server, Cloud, User, GraduationCap } from 'lucide-react';

// Improved Docker Whale Icon Component
const DockerWhaleIcon: React.FC<{ size?: number; className?: string }> = ({ size = 40, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 32 24" 
    fill="currentColor" 
    className={className}
  >
    {/* Main whale body */}
    <path d="M4 12c0-2 1.5-3.5 3.5-3.5h15c2 0 3.5 1.5 3.5 3.5v3c0 1.5-1 2.5-2.5 2.5h-17C5 17.5 4 16.5 4 15v-3z" 
          fill="currentColor" opacity="0.9"/>
    
    {/* Container blocks on whale's back */}
    <rect x="6" y="9" width="2.5" height="2.5" rx="0.2" fill="currentColor"/>
    <rect x="9.5" y="9" width="2.5" height="2.5" rx="0.2" fill="currentColor"/>
    <rect x="13" y="9" width="2.5" height="2.5" rx="0.2" fill="currentColor"/>
    <rect x="16.5" y="9" width="2.5" height="2.5" rx="0.2" fill="currentColor"/>
    <rect x="20" y="9" width="2.5" height="2.5" rx="0.2" fill="currentColor"/>
    
    {/* Second row of containers */}
    <rect x="7.75" y="6.5" width="2.5" height="2.5" rx="0.2" fill="currentColor" opacity="0.8"/>
    <rect x="11.25" y="6.5" width="2.5" height="2.5" rx="0.2" fill="currentColor" opacity="0.8"/>
    <rect x="14.75" y="6.5" width="2.5" height="2.5" rx="0.2" fill="currentColor" opacity="0.8"/>
    <rect x="18.25" y="6.5" width="2.5" height="2.5" rx="0.2" fill="currentColor" opacity="0.8"/>
    
    {/* Third row of containers */}
    <rect x="13" y="4" width="2.5" height="2.5" rx="0.2" fill="currentColor" opacity="0.7"/>
    <rect x="16.5" y="4" width="2.5" height="2.5" rx="0.2" fill="currentColor" opacity="0.7"/>
    
    {/* Whale spout/water */}
    <circle cx="10" cy="3" r="0.8" fill="currentColor" opacity="0.6"/>
    <circle cx="12" cy="2" r="0.6" fill="currentColor" opacity="0.5"/>
    <circle cx="14" cy="2.5" r="0.7" fill="currentColor" opacity="0.4"/>
    <circle cx="16" cy="1.5" r="0.5" fill="currentColor" opacity="0.3"/>
    
    {/* Whale tail fins */}
    <path d="M26 13c2-1 4-2 5-3.5c0.5 1 0 2.5-1 3.5c1 1 1.5 2.5 1 3.5c-1-1.5-3-2.5-5-3.5z" 
          fill="currentColor" opacity="0.8"/>
    
    {/* Whale eye */}
    <circle cx="8" cy="13.5" r="0.8" fill="white"/>
    <circle cx="8.3" cy="13.2" r="0.4" fill="#1a1a1a"/>
  </svg>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Personal Info */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <User size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    My passion lies in <span className="text-blue-400 font-semibold">DevOps, Linux, Cloud, and Automation</span>, where I bring ideas to life through code, open source, and infrastructure.
                  </p>
                  <p>
                    I specialize in building scalable systems, automating deployment pipelines, and leveraging the power of Linux to solve real-world problems.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-lg mr-4">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing <span className="text-green-400 font-semibold">B.E. in Computer Science and Engineering</span> from Model Institute of Engineering and Technology.
                </p>
              </div>
            </div>

            {/* Right Side - Journey & Philosophy */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Over the past year, I've worked on a range of projects — from CI/CD pipeline automation to Linux-based tools, AI prompt engineering, and fullstack web development — that reflect my technical skills and curiosity for innovation.
                </p>
                <p>
                  I'm always exploring new technologies, contributing to open source, and advocating for Linux as the backbone of modern infrastructure.
                </p>
                <p>
                  When I'm not coding, you'll find me reading about Linux, cloud-native architectures, or writing blogs to simplify tech for others.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              What I <span className="text-blue-400">Specialize</span> In
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Code size={40} />
                </div>
                <h4 className="text-white font-semibold mb-2">Linux</h4>
                <p className="text-gray-400 text-sm">Open source OS powering the world's tech infrastructure</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Server size={40} />
                </div>
                <h4 className="text-white font-semibold mb-2">DevOps</h4>
                <p className="text-gray-400 text-sm">Automating deployment pipelines and infrastructure</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-400 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Cloud size={40} />
                </div>
                <h4 className="text-white font-semibold mb-2">Cloud Native</h4>
                <p className="text-gray-400 text-sm">Scalable cloud solutions and architectures</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <DockerWhaleIcon size={40} />
                </div>
                <h4 className="text-white font-semibold mb-2">Docker</h4>
                <p className="text-gray-400 text-sm">Containerization and microservices architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;