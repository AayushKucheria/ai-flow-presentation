"use client";

import { useState, useEffect, useMemo } from 'react';

interface IntroductionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const IntroductionSlideTemplate = ({ currentSubsection = 'overview', updateCurrentSubsection }: IntroductionSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'overview': 0,
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'overview',
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
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">The Live Interface Pattern</h2>
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-2xl h-72 relative overflow-hidden hand-drawn-container">
              {/* Enhanced P2P diagram showing multiple Creators → Growing Software → User */}
              <div className="absolute left-0 top-0 w-1/3 h-full flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center">
                  <div className="hand-drawn-circle w-16 h-16 flex items-center justify-center mb-2">
                    <span className="text-xl">👩‍🎨</span>
                  </div>
                  <div className="hand-drawn-circle w-16 h-16 flex items-center justify-center mb-2">
                    <span className="text-xl">👨‍🎨</span>
                  </div>
                  <div className="hand-drawn-circle w-16 h-16 flex items-center justify-center">
                    <span className="text-xl">👩‍🎨</span>
                  </div>
                </div>
                <span className="hand-drawn-text mt-2">Multiple Creators</span>
                <div className="mt-2 hand-drawn-text text-center">
                  Inspirations → Components
                </div>
              </div>
              
              <div className="absolute left-1/3 top-0 w-1/3 h-full flex flex-col items-center justify-center p-4">
                <div className="hand-drawn-box w-32 h-24 flex items-center justify-center mb-2">
                  <span className="hand-drawn-text text-center">Composing & Growing of the software</span>
                </div>
              </div>
              
              <div className="absolute right-0 top-0 w-1/3 h-full flex flex-col items-center justify-center p-4">
                <div className="hand-drawn-circle w-20 h-20 flex items-center justify-center mb-2">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <span className="hand-drawn-text">User</span>
                <div className="mt-4 hand-drawn-text text-center">
                  Unique Context & Needs
                </div>
              </div>
              
              {/* Connecting arrows */}
              <div className="absolute top-1/2 w-full h-2 hand-drawn-arrow"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="hand-drawn-box p-4 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold hand-drawn-text mb-2">Traditional Software</h3>
              <p className="hand-drawn-text">
                Fixed structure, single-source design, one-size-fits-all
              </p>
            </div>
            
            <div className="hand-drawn-box p-4 flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold hand-drawn-text mb-2">Live Software</h3>
              <p className="hand-drawn-text">
                <span className="font-bold">Composable</span>, multi-source, personalized experience
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <div className="hand-drawn-box p-3 bg-blue-50 max-w-lg">
              <p className="hand-drawn-text text-center">
                Live Software emerges from the composition of multiple creators' components,
                adapting to each user's unique context
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlideTemplate;