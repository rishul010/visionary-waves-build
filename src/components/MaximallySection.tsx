
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
      {/* Gradient background */}
      <div className="absolute inset-0 bg-maximally-gradient opacity-5"></div>
      
      {/* Blurred circle for effect */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-psychedelic-purple opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            <span className="text-gradient gradient-1">Maximally</span>
          </h2>
          
          <div className="mb-12">
            <div className="text-center mb-8">
              
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                I'm trying to build a community of ambitious teens in India and giving them a platform focused on entrepreneurship.
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We are currently building it using bootcamps and hackathons, but it's going to be a whole empire soon.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                <AccordionItem value="why">
                  <AccordionTrigger className="text-xl font-semibold">Why I'm Building Maximally</AccordionTrigger>
                  <AccordionContent>
                    <div className="prose prose-lg">
                      <p className="mb-4">
                        Growing up in a tier-2 city, I quickly realized that opportunities to learn about anything beyond traditional academics were virtually non-existent. AI, no-code, entrepreneurship - these concepts were foreign in an environment focused solely on grades and college preparation.
                      </p>
                      
                      <p className="mb-4">
                        During teenage years (13-18), when peer perception matters most, asking parents for money becomes awkward. This drives many to explore online money-making opportunities, but without proper guidance, most attempts fail, leaving teens feeling stuck and hesitant to seek help.
                      </p>
                      
                      <p className="mb-4">
                        The traditional education system, especially in tier-2 cities, lacks practical skill development. While tier-1 cities might offer some coding or digital marketing opportunities, tier-2 cities remain focused on rote learning, missing crucial real-world skills.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">Real Skills, Real Impact</h3>
                      <p className="mb-4">
                        Maximally focuses on practical, money-making skills: AI, Digital Marketing, Content Creation, and No-code solutions. Our 7-day crash courses give teens hands-on experience and clear direction. But it's more than skills - we're building a community where teens learn, grow, and hustle together.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">The Hackathon That Changed Everything</h3>
                      <p className="mb-4">
                        After hosting one of India's largest school hackathons and seeing numerous incomplete projects, we realized the need for foundational training. This led to implementing pre-hackathon training in Python, AI, and coding basics, significantly improving project quality in subsequent events.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">Changing the School System</h3>
                      <p className="mb-4">
                        India's education system, particularly in tier-2 cities, needs reform. While academic excellence is important, real-world skills are equally crucial. Maximally bridges this gap by providing practical tools, business knowledge, and technology training to make teens industry-ready.
                      </p>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">Community + Innovation</h3>
                      <p className="mb-4">
                        Maximally is more than an educational platform - it's a community where teens connect, innovate, and create their future. Whether through coding, startups, or content creation, we're empowering teens to take action now rather than waiting for opportunities to come to them.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-button-gradient-1 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Bootcamps</h3>
              <p className="text-gray-700 text-center">
                Intensive learning experiences focused on entrepreneurship, public speaking, AI, and digital marketing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 bg-button-gradient-2 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Community</h3>
              <p className="text-gray-700 text-center">
                Building a network of ambitious teens across India to collaborate, learn, and grow together.
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
