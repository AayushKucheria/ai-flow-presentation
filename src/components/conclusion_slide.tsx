"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface ConclusionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const ConclusionSlideTemplate = ({ currentSubsection = 'vision', updateCurrentSubsection }: ConclusionSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'vision': 0,
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'vision',
  }), []);
  
  // Set the current slide based on the subsection prop
  const [currentSlide, setCurrentSlide] = useState(subsectionMap[currentSubsection as keyof typeof subsectionMap] || 0);
  
  // Update the current slide when the subsection prop changes
  useEffect(() => {
    const slideIndex = subsectionMap[currentSubsection as keyof typeof subsectionMap];
    if (slideIndex !== undefined) {
      setCurrentSlide(slideIndex);
    }
  }, [currentSubsection, subsectionMap]);
  
  // Function to handle slide changes
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    // Sync with parent component if the updateCurrentSubsection function is provided
    if (updateCurrentSubsection) {
      updateCurrentSubsection(indexToSubsectionMap[index as keyof typeof indexToSubsectionMap]);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Building a Community of Live Interfaces</h2>
          
          <div className="hand-drawn-container p-6 mb-6">
            <h3 className="text-xl font-semibold hand-drawn-text mb-4 text-center">Vision</h3>
            <p className="hand-drawn-text text-center mb-4">
              A world where software adapts to humans, not humans to software
            </p>
            
            <div className="flex justify-center mb-6">
              <div className="hand-drawn-box px-5 py-3 bg-amber-50 max-w-md">
                <p className="hand-drawn-text text-center font-semibold">
                  "Every person deserves an interface that understands their unique context and needs"
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="hand-drawn-box p-4">
              <h3 className="text-lg font-semibold hand-drawn-text mb-2 text-center">Near Future</h3>
              <ul className="space-y-2">
                <li className="hand-drawn-text">• Initial prototype</li>
                <li className="hand-drawn-text">• Creator community</li>
                <li className="hand-drawn-text">• Basic adaptations</li>
              </ul>
            </div>
            
            <div className="hand-drawn-box p-4">
              <h3 className="text-lg font-semibold hand-drawn-text mb-2 text-center">Mid-term</h3>
              <ul className="space-y-2">
                <li className="hand-drawn-text">• Advanced adaptations</li>
                <li className="hand-drawn-text">• P2P marketplace</li>
                <li className="hand-drawn-text">• Developer tools</li>
              </ul>
            </div>
            
            <div className="hand-drawn-box p-4">
              <h3 className="text-lg font-semibold hand-drawn-text mb-2 text-center">Long-term</h3>
              <ul className="space-y-2">
                <li className="hand-drawn-text">• Ecosystem growth</li>
                <li className="hand-drawn-text">• Industry adoption</li>
                <li className="hand-drawn-text">• New interface paradigm</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="hand-drawn-text font-semibold text-lg">
              Join us in creating a more human-centered digital world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSlideTemplate;