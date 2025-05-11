
import React, { useEffect, useRef } from 'react';

const FloatingElements: React.FC = () => {
  const animationRef = useRef<number>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    // Store current positions
    const positions = Array.from({ length: 8 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      scale: Math.random() * 0.5 + 0.5,
    }));
    
    // Animation function
    const animate = () => {
      elementsRef.current.forEach((element, i) => {
        if (!element) return;
        
        // Update position
        positions[i].x += positions[i].vx;
        positions[i].y += positions[i].vy;
        
        // Bounce off edges
        if (positions[i].x < 0 || positions[i].x > window.innerWidth) positions[i].vx *= -1;
        if (positions[i].y < 0 || positions[i].y > window.innerHeight) positions[i].vy *= -1;
        
        // Apply new position
        element.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px) scale(${positions[i].scale})`;
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
  ];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          ref={(el) => el && (elementsRef.current[index] = el)}
          className={`absolute opacity-20 blur-md ${shape} ${gradients[index]}`}
          style={{
            width: `${index % 2 ? 100 : 80}px`,
            height: `${index % 2 ? 100 : 80}px`,
            transition: 'transform 5s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
