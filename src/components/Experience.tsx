import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'DevOps Intern',
      company: 'Linux World Pvt. Ltd.',
      duration: 'July 2024 – Present',
      location: 'Current Position',
      description: [
        'Working on DevOps tools and real-time infrastructure automation.',
        'Hands-on with Docker, Kubernetes, CI/CD workflows, and cloud-native technologies in production-like environments.'
      ],
      current: true
    },
    {
      title: 'Web Development and Marketing Intern',
      company: 'Digitrama Marketing Services, UAE',
      duration: 'June 2023 – July 2024',
      location: 'UAE (Remote)',
      description: [
        'Worked on designing, developing, and marketing full stack web tools and automation scripts.'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative bg-gray-800 rounded-lg p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  exp.current 
                    ? 'border-blue-400 shadow-lg shadow-blue-400/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {exp.current && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${exp.current ? 'bg-blue-600' : 'bg-gray-700'}`}>
                    <Briefcase size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-blue-400 mb-3">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;