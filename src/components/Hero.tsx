import React from 'react';
import { Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Gradient background with overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>

      {/* Blurred circles for psychedelic effect */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-psychedelic-purple opacity-10 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-psychedelic-pink opacity-10 blur-3xl animate-float-medium"></div>

      {/* Additional floating elements */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-psychedelic-orange opacity-10 blur-2xl animate-float-fast"></div>
      <div className="absolute bottom-1/3 left-1/4 w-44 h-44 rounded-full bg-psychedelic-blue opacity-10 blur-2xl animate-float-medium"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            I'm <span className="text-gradient gradient-1">Rishul Chanana</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-10 text-center max-w-3xl mx-auto font-medium">
            mark the territory not the map
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-10">
            <a 
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-button-gradient-1 hover:bg-button-gradient-2 bg-[length:200%_auto] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <Calendar size={20} />
              Talk to me
            </a>

            <a 
              href="https://medium.com/@rishulchanana36"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-button-gradient-2 hover:bg-button-gradient-1 bg-[length:200%_auto] text-gray-800 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
              Read My Thoughts
            </a>

            <a 
              href="https://maximally.in" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-transparent hover:bg-button-gradient-3 bg-[length:200%_auto] text-gray-800 hover:text-white border-2 border-gray-300 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:border-transparent hover:shadow-lg"
            >
              Maximally.in
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;