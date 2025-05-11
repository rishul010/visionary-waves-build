
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Learnings = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <FloatingElements />
      <NavBar />
      <main className="flex-grow relative z-10 pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-playfair">
              My <span className="text-gradient gradient-1">Learnings</span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Building Communities</h2>
                <p className="text-lg">Success isn't just about individual achievement—it's about creating spaces where others can thrive and grow together.</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Entrepreneurship</h2>
                <p className="text-lg">Starting early gives you the freedom to experiment, fail, and learn without the pressure of adult responsibilities.</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Technology</h2>
                <p className="text-lg">Technology is not just about coding—it's about solving real problems and making impact at scale.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Learnings;
