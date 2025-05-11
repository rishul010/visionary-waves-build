
import React, { useEffect, useRef } from 'react';

const FloatingElements: React.FC = () => {
  const animationRef = useRef<number | null>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Store current positions
    const positions = Array.from({ length: 12 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      scale: Math.random() * 0.5 + 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
    }));
    
    // Animation function
    const animate = () => {
      elementsRef.current.forEach((element, i) => {
        if (!element) return;
        
        // Update position
        positions[i].x += positions[i].vx;
        positions[i].y += positions[i].vy;
        positions[i].rotation += positions[i].rotationSpeed;
        
        // Bounce off edges with some padding
        if (positions[i].x < -100 || positions[i].x > window.innerWidth + 100) positions[i].vx *= -1;
        if (positions[i].y < -100 || positions[i].y > window.innerHeight + 100) positions[i].vy *= -1;
        
        // Apply new position and rotation
        element.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px) rotate(${positions[i].rotation}deg) scale(${positions[i].scale})`;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Define shapes for elements
  const shapes = [
    'rounded-full', // Circle
    'rounded-lg rotate-45', // Diamond
    'clip-path-hexagon', // Hexagon
    'clip-path-blob', // Blob
    'rounded-full', // Circle
    'clip-path-triangle', // Triangle
    'rounded-lg', // Square
    'clip-path-star', // Star
    'clip-path-blob', // Blob
    'rounded-full', // Circle
    'clip-path-triangle', // Triangle
    'clip-path-hexagon', // Hexagon
  ];
  
  // Define gradients for elements
  const gradients = [
    'bg-gradient-to-r from-psychedelic-purple to-psychedelic-pink',
    'bg-gradient-to-br from-psychedelic-blue to-psychedelic-purple',
    'bg-gradient-to-l from-psychedelic-orange to-psychedelic-pink',
    'bg-button-gradient-1',
    'bg-button-gradient-2',
    'bg-button-gradient-3',
    'bg-gradient-to-tr from-psychedelic-purple to-psychedelic-blue',
    'bg-gradient-to-bl from-psychedelic-pink to-psychedelic-orange',
    'bg-gradient-to-r from-psychedelic-purple via-psychedelic-blue to-psychedelic-pink',
    'bg-gradient-to-r from-psychedelic-pink via-psychedelic-orange to-psychedelic-purple',
    'bg-gradient-to-r from-psychedelic-orange via-psychedelic-blue to-psychedelic-purple',
    'bg-gradient-to-r from-psychedelic-blue via-psychedelic-purple to-psychedelic-orange',
  ];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          className={`absolute opacity-20 blur-md ${shape} ${gradients[index]}`}
          style={{
            width: `${index % 2 ? 100 : 80}px`,
            height: `${index % 2 ? 100 : 80}px`,
            transition: 'transform 5s ease-out',
            transformOrigin: 'center center',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
