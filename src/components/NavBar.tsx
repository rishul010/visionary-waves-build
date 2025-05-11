
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-playfair font-bold">
          <span className="text-gradient gradient-1">RC</span>
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-psychedelic-purple transition-colors">Home</a>
          <a href="#about" className="text-gray-800 hover:text-psychedelic-purple transition-colors">Story</a>
          <a href="#maximally" className="text-gray-800 hover:text-psychedelic-pink transition-colors">Maximally</a>
          <a href="#contact" className="text-gray-800 hover:text-psychedelic-blue transition-colors">Contact</a>
          <a 
            href="https://maximally.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-psychedelic-purple font-medium hover:text-psychedelic-pink transition-colors"
          >
            Maximally.in
          </a>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden py-4">
            <div className="flex flex-col items-center space-y-4">
              <a href="#" className="text-gray-800 hover:text-psychedelic-purple transition-colors" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="text-gray-800 hover:text-psychedelic-purple transition-colors" onClick={() => setIsOpen(false)}>Story</a>
              <a href="#maximally" className="text-gray-800 hover:text-psychedelic-pink transition-colors" onClick={() => setIsOpen(false)}>Maximally</a>
              <a href="#contact" className="text-gray-800 hover:text-psychedelic-blue transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
              <a 
                href="https://maximally.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-psychedelic-purple font-medium hover:text-psychedelic-pink transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Maximally.in
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
