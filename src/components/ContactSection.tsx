
import React from 'react';
import { Mail, Calendar, Instagram, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            Let's <span className="text-gradient gradient-3">Get in Touch</span>
          </h2>
          
          <div className="mb-12 text-center">
            <p className="text-xl mb-6">
              Have a project in mind? Want to collaborate? Just want to say hi?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 group">
                <div className="flex items-center justify-center h-12 w-12 bg-button-gradient-1 rounded-full group-hover:bg-button-gradient-2 bg-[length:200%_auto] transition-all duration-300">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Schedule a meeting</h3>
                  <a 
                    href="https://cal.com/rishul-chanana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-psychedelic-purple hover:underline"
                  >
                    Book a time on my calendar
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="flex items-center justify-center h-12 w-12 bg-button-gradient-2 rounded-full group-hover:bg-button-gradient-1 bg-[length:200%_auto] transition-all duration-300">
                  <Mail className="h-6 w-6 text-gray-800 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email me</h3>
                  <a 
                    href="mailto:hello@rishulchanana.com" 
                    className="text-psychedelic-blue hover:underline"
                  >
                    hello@rishulchanana.com
                  </a>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/chanana_rishul/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-12 w-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-psychedelic-pink"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rishul-chanana/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-12 w-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-psychedelic-blue"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-10 mb-4">
                <iframe 
                  data-tally-src="https://tally.so/embed/3jpqyQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%" 
                  height="1121" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Connect with Rishul"
                  className="rounded-lg"
                ></iframe>
                <script
                  dangerouslySetInnerHTML={{
                    __html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
