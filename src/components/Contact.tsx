import React from 'react';
import { Mail, Github, Linkedin, Instagram, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = {
    name: 'Arsh Sharma',
    email: 'arshsharma.2694@gmail.com',
    github: 'https://github.com/arsh2694',
    linkedin: 'https://www.linkedin.com/in/arsh-sharma-932b2a2a5/',
    instagram: 'https://www.instagram.com/_arshh.26?igsh=c2lwYjF5eWN3NjVm&utm_source=qr'
  };

  const socialLinks = [
    { icon: Github, href: contactInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: contactInfo.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email' }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">{contactInfo.name}</h3>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:transform hover:scale-105 border border-gray-700 hover:border-gray-600"
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
            
            <div className="text-gray-400 mb-8">
              <p className="text-lg">Ready to collaborate? Let's build something amazing together!</p>
            </div>
            
            <div className="flex justify-center">
              <button
                disabled
                className="flex items-center space-x-2 px-8 py-3 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed border border-gray-600 relative group"
                title="Coming Soon"
              >
                <Download size={20} />
                <span>Download Resume</span>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Coming Soon
                </span>
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-4">
              Let's connect and discuss how we can work together
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium text-lg"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;