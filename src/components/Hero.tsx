import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['DevOps Engineer', 'Full Stack Developer', 'Cloud Enthusiast', 'Problem Solver'];
  
  useEffect(() => {
    const speed = isDeleting ? 100 : 150;
    const currentFullText = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, speed);
    
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fadeInUp">
              Hi, I'm <span className="text-blue-400">Arsh Sharma</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8 opacity-0 animate-fadeInUp animation-delay-200">
              <span className="border-r-2 border-blue-400 pr-1">
                {currentText}
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl opacity-0 animate-fadeInUp animation-delay-400">
              Passionate about building scalable systems, automating deployment pipelines, and crafting user-friendly web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fadeInUp animation-delay-600">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Learn More
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Right Side - Profile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-fadeInUp animation-delay-800">
            <div className="relative">
              <div className="relative group flex items-center justify-center w-[370px] h-[270px]">
                {/* Stars overlay, only visible on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10">
                  <div className="w-full h-full bg-[url('/stars.svg')] bg-repeat opacity-60" style={{opacity:0.08}}></div>
                </div>
                <img 
                  src="/WhatsApp Image 2025-07-07 at 16.51.15.jpeg" 
                  alt="Arsh Sharma - DevOps Engineer"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;