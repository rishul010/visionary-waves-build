
import React, { useEffect, useRef, useState } from 'react';
import { Book, Cpu, Rocket, Layers, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const StoryChapters: React.FC = () => {
  const [visibleChapters, setVisibleChapters] = useState<number[]>([]);
  const chaptersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = chaptersRef.current.findIndex((ref) => ref === entry.target);
            if (index !== -1 && !visibleChapters.includes(index)) {
              setVisibleChapters((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    chaptersRef.current.forEach((chapter) => {
      if (chapter) observer.observe(chapter);
    });

    return () => {
      chaptersRef.current.forEach((chapter) => {
        if (chapter) observer.unobserve(chapter);
      });
    };
  }, [visibleChapters]);

  // Chapter data
  const chapters = [
    {
      id: 'beginning',
      title: 'The Beginning of a Vision',
      icon: <Book className="w-8 h-8" />,
      content: "I'm Rishul Chanana — a creator, builder, and innovator, driven by an insatiable curiosity. Born in Zirakpur, India, in a city that's not just about tradition but about shaping the future, my story has always been about breaking barriers and pushing the limits of what's possible."
    },
    {
      id: 'tech-kid',
      title: 'The Tech Kid Era',
      subtitle: 'Building the Foundations',
      icon: <Cpu className="w-8 h-8" />,
      content: "Growing up, I was always the tech kid — the one who could fix tech problems before they even became problems. I started young with tech, from running my own Minecraft server to monetizing it (before I even knew what a startup was). At age 10, my first laptop became my playground, and that's where I learned to create, explore, and innovate. Little did I know that this love for technology would soon fuel a series of bigger adventures."
    },
    {
      id: 'hustle',
      title: 'The Hustle Awakens',
      subtitle: 'From Gamer to Innovator',
      icon: <Rocket className="w-8 h-8" />,
      content: "By the time I hit high school, I was all in on hackathons, video editing competitions, and starting my own events. I noticed a huge gap — school students had no access to hackathons. So, I created them. My hackathon, CodeQuest, quickly became the largest in North India, with over 250 school partnerships, ₹4L+ in sponsorships, and a net profit of ₹1.8L+. The best part? It wasn't just about tech. It was about empowering students to create, innovate, and dream bigger than the classroom allowed."
    },
    {
      id: 'side-quests',
      title: 'Side Quests & Exploration',
      subtitle: 'A Constant Evolution',
      icon: <Layers className="w-8 h-8" />,
      content: "While working on Maximally, I've explored a variety of side ventures. From dropshipping to running a digital agency and launching a probiotics brand, I've learned that success isn't linear. The entrepreneurial world is about experimentation, failure, and learning fast. Every venture brought me closer to what I truly care about — creating impact through innovation. Maximally is just one of many steps toward my larger vision."
    },
    {
      id: 'future',
      title: 'Future Chapters',
      subtitle: 'The Ongoing Story',
      icon: <ArrowRight className="w-8 h-8" />,
      content: "I'm just getting started. Maximally is Level 1 of the game I'm here to play. There's much more on the horizon — more initiatives, more challenges, and more ways to disrupt the traditional learning landscape. My vision? A world where ambition, innovation, and real-world experience are the currency that drives the next generation forward. Stay tuned."
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-playfair">
          My <span className="text-gradient gradient-1">Story</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              ref={(el) => (chaptersRef.current[index] = el)}
              id={chapter.id}
              className={`chapter-reveal mb-8 ${visibleChapters.includes(index) ? 'visible' : ''}`}
            >
              <Accordion type="single" collapsible className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md">
                <AccordionItem value={chapter.id} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-psychedelic-purple to-psychedelic-pink shadow-lg`}>
                        {chapter.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold font-playfair">{chapter.title}</h3>
                        {chapter.subtitle && (
                          <p className="text-lg text-gray-600">{chapter.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pl-16">
                      <p className="text-lg leading-relaxed">{chapter.content}</p>
                      
                      {/* Specific chapter elements */}
                      {chapter.id === 'hustle' && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <h4 className="font-bold text-xl text-psychedelic-purple">250+</h4>
                            <p>School Partnerships</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <h4 className="font-bold text-xl text-psychedelic-pink">₹4L+</h4>
                            <p>Sponsorships Raised</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <h4 className="font-bold text-xl text-psychedelic-blue">1000+</h4>
                            <p>Student Participants</p>
                          </div>
                        </div>
                      )}
                      
                      {chapter.id === 'hustle' && (
                        <div className="mt-6 flex justify-center">
                          <a 
                            href="#maximally" 
                            className="inline-block bg-button-gradient-1 hover:bg-button-gradient-3 bg-[length:200%_auto] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
                          >
                            Learn about Maximally
                          </a>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryChapters;
