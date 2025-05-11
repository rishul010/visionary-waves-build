
import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white border-t border-gray-200 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-playfair font-bold">
              <span className="text-gradient gradient-1">RC</span>
            </a>
          </div>
          
          <div className="flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-psychedelic-purple" />
            <p className="text-gray-600">
              <span className="group inline-block">
                <span className="text-gradient gradient-2">The story continues...</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-button-gradient-1"></span>
              </span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            © {currentYear} Rishul Chanana. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
