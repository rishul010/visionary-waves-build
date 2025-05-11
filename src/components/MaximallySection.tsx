
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MaximallySection: React.FC = () => {
  return (
    <section id="maximally" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-maximally-gradient opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-psychedelic-purple opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            <span className="text-gradient gradient-1">Maximally</span>
          </h2>
          
          <div className="mb-12">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                We're creating India's most ambitious community for teens focused on entrepreneurship, technology, and real-world skills.
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Through our bootcamps, hackathons, and workshops, we empower teens with practical skills in AI, Digital Marketing, and No-Code Development.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                <AccordionItem value="why">
                  <AccordionTrigger className="text-xl font-semibold">Why We Built Maximally</AccordionTrigger>
                  <AccordionContent>
                    <div className="prose prose-lg">
                      <p className="mb-4">
                        In tier-2 cities across India, opportunities to learn beyond traditional academics are limited. Topics like AI, entrepreneurship, and digital skills remain unexplored in an education system focused primarily on grades and college preparation.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">Our Core Programs</h3>
                      <p className="mb-4">
                        We run intensive 7-day bootcamps teaching practical skills in AI, Digital Marketing, Content Creation, and No-code solutions. These programs are designed to give teens hands-on experience and clear direction in modern career paths.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">Hackathons & Events</h3>
                      <p className="mb-4">
                        Our hackathons include pre-event training in Python, AI, and coding fundamentals, ensuring participants can build meaningful projects. We've successfully organized some of India's largest school-level hackathons.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">Community Impact</h3>
                      <p className="mb-4">
                        Beyond education, we're building a supportive community where teens can connect, innovate, and grow together. Our focus is on practical application and real-world impact.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-button-gradient-1 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Bootcamps</h3>
              <p className="text-gray-700 text-center">
                7-day intensive programs in AI, Digital Marketing, and No-Code Development
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-button-gradient-2 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Hackathons</h3>
              <p className="text-gray-700 text-center">
                School-level tech competitions with comprehensive pre-event training
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-button-gradient-3 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Community</h3>
              <p className="text-gray-700 text-center">
                A network of ambitious teens learning and growing together
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://maximally.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-button-gradient-1 hover:bg-button-gradient-3 bg-[length:200%_auto] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Join Maximally
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaximallySection;
