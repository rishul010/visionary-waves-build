
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="entrepreneurship" className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <AccordionTrigger className="text-xl font-semibold">Entrepreneurship & Building</AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-4">
                    <p>• Distribution beats product, almost every time.</p>
                    <p>• Nobody cares about your idea until you make it real.</p>
                    <p>• Beta > Stealth mode. Ship embarrassingly early.</p>
                    <p>• A warm intro is 10x better than a cold email.</p>
                    <p>• Speed is a moat when you're small.</p>
                    <p>• If people don't pay, they don't value it.</p>
                    <p>• Founding teams crumble more from ego than failure.</p>
                    <p>• Iterate on who you build for, as much as what you build.</p>
                    <p>• It's easier to sell aspirin than vitamins.</p>
                    <p>• Scarcity and exclusivity sell better than abundance.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="learning" className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <AccordionTrigger className="text-xl font-semibold">Learning & Career</AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-4">
                    <p>• Learning fast > knowing a lot.</p>
                    <p>• Side projects open more doors than resumes.</p>
                    <p>• Being interesting beats being impressive.</p>
                    <p>• Document your work publicly; opportunities will find you.</p>
                    <p>• The best way to learn is to teach.</p>
                    <p>• Talking to users/customers teaches more than any course.</p>
                    <p>• You're not behind. Most people are faking it.</p>
                    <p>• Compound skills, not just knowledge.</p>
                    <p>• People remember your curiosity, not your GPA.</p>
                    <p>• You learn faster around ambitious people.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="leadership" className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <AccordionTrigger className="text-xl font-semibold">Leadership & Teamwork</AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-4">
                    <p>• People follow energy, not titles.</p>
                    <p>• Delegate outcomes, not tasks.</p>
                    <p>• Praise in public, correct in private.</p>
                    <p>• Hire for drive and learning ability, not just credentials.</p>
                    <p>• Culture is set by what you tolerate, not what you say.</p>
                    <p>• Feedback is a gift—if you make it safe to give.</p>
                    <p>• Small teams move faster but require over-communication.</p>
                    <p>• It's okay to outgrow people (and vice versa).</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="marketing" className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <AccordionTrigger className="text-xl font-semibold">Marketing & Communication</AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-4">
                    <p>• Clarity wins over cleverness.</p>
                    <p>• Storytelling makes facts stick.</p>
                    <p>• If you confuse, you lose.</p>
                    <p>• Attention is earned, not owed.</p>
                    <p>• Copywriting is an unfair advantage.</p>
                    <p>• Write how you talk. People like humans, not robots.</p>
                    <p>• A clear CTA beats a beautiful design.</p>
                    <p>• Your personal brand compounds like startup equity.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mindset" className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <AccordionTrigger className="text-xl font-semibold">Mindset & Personal Growth</AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-4">
                    <p>• Consistency is rarer than talent.</p>
                    <p>• Most people quit too soon. Just stay in the game longer.</p>
                    <p>• Obsession looks like talent from the outside.</p>
                    <p>• Take big swings while you're young and broke.</p>
                    <p>• You can't outwork a bad system—optimize environment too.</p>
                    <p>• Confidence comes from keeping promises to yourself.</p>
                    <p>• If you don't ask, the answer is always no.</p>
                    <p>• Build things that make you proud, even if no one claps.</p>
                    <p>• Protect your energy like it's equity.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="life" className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <AccordionTrigger className="text-xl font-semibold">Life & Misc</AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-4">
                    <p>• Being kind is a cheat code in any industry.</p>
                    <p>• People remember how you made them feel, not what you said.</p>
                    <p>• The fastest way to level up is to help people who don't expect it.</p>
                    <p>• Most things are figureoutable (but Googling well is a skill).</p>
                    <p>• Have strong opinions, loosely held.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Learnings;
