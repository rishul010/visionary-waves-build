
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-playfair font-bold">
              <span className="text-gradient gradient-1">RC</span>
            </a>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-600">
              <span className="group inline-block">
                Keep it <span className="text-gradient gradient-2">moving</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-button-gradient-1"></span>
              </span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            © 2023 Rishul Chanana. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
