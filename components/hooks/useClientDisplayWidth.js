"use client"
import { useState, useEffect } from 'react';

export function useClientDisplayWidth() {
  const [clientDisplayWidth, setClientDisplayWidth] = useState(null);

  useEffect(() => {
    const updateDisplayWidth = () => {
      const width = window.innerWidth;
      setClientDisplayWidth(width);
    };

    // Initially, get the client's display width
    updateDisplayWidth();

    // Add an event listener to update the display width on window resize
    window.addEventListener('resize', updateDisplayWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateDisplayWidth);
    };
  }, []);

  return clientDisplayWidth;
}
