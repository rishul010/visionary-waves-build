
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import MaximallySection from '../components/MaximallySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import '../components/FloatingElements.css';

const Index = () => {
  useEffect(() => {
    // Update the title and meta description for SEO
    document.title = "Rishul Chanana | Building what others overlook";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <FloatingElements />
      <NavBar />
      <main className="flex-grow relative z-10">
        <Hero />
        <AboutMe />
        <MaximallySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
