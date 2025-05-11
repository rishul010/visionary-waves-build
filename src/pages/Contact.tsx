
import React from 'react';
import NavBar from '../components/NavBar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <FloatingElements />
      <NavBar />
      <main className="flex-grow relative z-10">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
