import React from 'react';
import { 
  Globe, 
  Palette, 
  Terminal, 
  Database, 
  Code, 
  Settings,
  Container,
  GitBranch,
  Cloud,
  Cpu,
  Monitor
} from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', icon: Globe, color: 'text-orange-400' },
    { name: 'CSS', icon: Palette, color: 'text-blue-400' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
    { name: 'Python', icon: Terminal, color: 'text-green-400' },
    { name: 'C', icon: Cpu, color: 'text-blue-300' },
    { name: 'DSA with C', icon: Database, color: 'text-purple-400' },
    { name: 'OOPs', icon: Settings, color: 'text-red-400' },
    { name: 'Docker', icon: Container, color: 'text-blue-500' },
    { name: 'Jenkins', icon: GitBranch, color: 'text-green-500' },
    { name: 'Kubernetes', icon: Cloud, color: 'text-blue-600' },
    { name: 'Podman', icon: Container, color: 'text-purple-500' },
    { name: 'Linux', icon: Monitor, color: 'text-orange-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-white text-sm font-medium text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;