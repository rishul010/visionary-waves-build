
import React from 'react';

const MaximallySection: React.FC = () => {
  return (
    <section id="maximally" className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-maximally-gradient opacity-5"></div>
      
      {/* Blurred circle for effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-psychedelic-purple opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            <span className="text-gradient gradient-1">Maximally</span>
          </h2>
          
          <div className="mb-12 text-center">
            <p className="text-xl md:text-2xl mb-6">
              Empowering teens with real-world skills they need now, not later.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Maximally is more than just a bootcamp. It's a mission to bridge the gap between traditional education and the rapidly changing professional world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-button-gradient-1 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">₹2L+ Raised</h3>
              <p className="text-gray-700 text-center">
                Funding to support our mission of transforming education for teenagers across India.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-button-gradient-2 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">250+ School Partnerships</h3>
              <p className="text-gray-700 text-center">
                Collaborating with educational institutions to bring cutting-edge skills to students.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://maximally.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-button-gradient-1 hover:bg-button-gradient-3 bg-[length:200%_auto] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Apply for Bootcamp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaximallySection;
