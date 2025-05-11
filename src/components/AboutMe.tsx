
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            About <span className="text-gradient gradient-2">Me</span>
          </h2>
          
          <div className="space-y-8 text-lg">
            <p className="leading-relaxed">
              I'm the <span className="text-gradient gradient-1 font-semibold">16-year-old</span> who built India's biggest school hackathon and created <span className="text-gradient gradient-3 font-semibold">Maximally</span>, a startup designed to teach teens the skills they need now.
            </p>
            
            <p className="leading-relaxed">
              I believe in <span className="font-semibold">building solutions that others overlook</span>. While most focus on immediate problems, I'm working on the long-term challenges that will shape our future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-3 text-psychedelic-purple">Visionary</h3>
                <p className="text-gray-700">Seeing opportunities where others see obstacles</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-3 text-psychedelic-pink">Rebellious</h3>
                <p className="text-gray-700">Challenging conventions and creating new paths</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-3 text-psychedelic-blue">Builder</h3>
                <p className="text-gray-700">Turning ambitious ideas into tangible projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
