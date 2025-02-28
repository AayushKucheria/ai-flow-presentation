"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

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
            <div className="w-full max-w-2xl relative overflow-hidden hand-drawn-container">
              <Image
                src="/images/live-interface-pattern.png"
                alt="Live Interface Pattern showing Users and Creators connected through a custom interface"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
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
                Live Software connects the space of created artifacts to the space of user prayers,
                creating custom interfaces that adapt to each user's unique context
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlideTemplate;