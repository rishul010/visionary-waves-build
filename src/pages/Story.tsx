
import React from 'react';
import NavBar from '../components/NavBar';
import StoryChapters from '../components/StoryChapters';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Story = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <FloatingElements />
      <NavBar />
      <main className="flex-grow relative z-10 pt-20">
        <StoryChapters />
      </main>
      <Footer />
    </div>
  );
};

export default Story;
