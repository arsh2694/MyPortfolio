import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/arsh2694', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arsh-sharma-932b2a2a5/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_arshh.26?igsh=c2lwYjF5eWN3NjVm&utm_source=qr', label: 'Instagram' },
    { icon: Mail, href: 'mailto:arshsharma.2694@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Arsh Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;