"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface DiscussionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const DiscussionSlideTemplate = ({ currentSubsection = 'human_centered', updateCurrentSubsection }: DiscussionSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'human_centered': 0,
    'decentralized': 1
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'human_centered',
    1: 'decentralized'
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
  
  const slides = [
    {
      title: "Human-Centered Design",
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold hand-drawn-text mb-6">Human-Centered Design Philosophy</h2>
              
              <div className="hand-drawn-container p-5 mb-6">
                <h3 className="text-xl font-semibold hand-drawn-text mb-3 text-center">Core Principles</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="hand-drawn-box p-4 bg-blue-50">
                    <h4 className="font-semibold hand-drawn-text mb-2">Empathy First</h4>
                    <p className="hand-drawn-text">
                      Understanding the user's context, needs, and goals before designing solutions
                    </p>
                  </div>
                  
                  <div className="hand-drawn-box p-4 bg-green-50">
                    <h4 className="font-semibold hand-drawn-text mb-2">Adaptive Growth</h4>
                    <p className="hand-drawn-text">
                      Interfaces that learn and evolve with the user over time
                    </p>
                  </div>
                </div>
                
                <div className="hand-drawn-box p-4 bg-purple-50 mb-4">
                  <h4 className="font-semibold hand-drawn-text mb-2 text-center">Personalization vs. Standardization</h4>
                  <p className="hand-drawn-text text-center">
                    Moving from one-size-fits-all to interfaces that adapt to individual needs
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mb-4">
                <div className="hand-drawn-box px-5 py-3 bg-amber-50 max-w-md">
                  <p className="hand-drawn-text text-center">
                    "The interface should adapt to the human, not the human to the interface"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Decentralized Approach",
      content: (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold hand-drawn-text mb-6">Decentralized P2P Approach</h2>
              
              <div className="hand-drawn-container p-5 mb-6">
                <div className="flex justify-center mb-6">
                  <div className="w-full max-w-xl relative overflow-hidden">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="hand-drawn-circle p-4 flex flex-col items-center justify-center">
                        <span className="text-2xl mb-2">👩‍🎨</span>
                        <span className="hand-drawn-text text-center">Creator</span>
                      </div>
                      
                      <div className="hand-drawn-box p-4 flex flex-col items-center justify-center">
                        <span className="text-2xl mb-2">🔄</span>
                        <span className="hand-drawn-text text-center">P2P Network</span>
                      </div>
                      
                      <div className="hand-drawn-circle p-4 flex flex-col items-center justify-center">
                        <span className="text-2xl mb-2">👨‍💻</span>
                        <span className="hand-drawn-text text-center">User</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 hand-drawn-arrow w-full"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold hand-drawn-text mb-3 text-center">Benefits</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="hand-drawn-box p-4">
                    <h4 className="font-semibold hand-drawn-text mb-2 text-center">Direct Connection</h4>
                    <p className="hand-drawn-text text-center">
                      Creator intentions directly reach users
                    </p>
                  </div>
                  
                  <div className="hand-drawn-box p-4">
                    <h4 className="font-semibold hand-drawn-text mb-2 text-center">Ownership</h4>
                    <p className="hand-drawn-text text-center">
                      Users control their data and experience
                    </p>
                  </div>
                  
                  <div className="hand-drawn-box p-4">
                    <h4 className="font-semibold hand-drawn-text mb-2 text-center">Resilience</h4>
                    <p className="hand-drawn-text text-center">
                      No central point of failure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-500">
            Philosophy - {slides[currentSlide].title}
          </div>
          <div className="flex space-x-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`text-xs px-2 py-0.5 rounded ${
                  currentSlide === index 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
        {slides[currentSlide].content}
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <button 
          onClick={() => currentSlide > 0 && handleSlideChange(currentSlide - 1)} 
          disabled={currentSlide === 0}
          className={`text-sm px-3 py-1 rounded-md ${
            currentSlide === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-teal-600 text-white hover:bg-teal-700'
          }`}
        >
          Previous
        </button>
        
        <div className="flex space-x-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-teal-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => currentSlide < slides.length - 1 && handleSlideChange(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
          className={`text-sm px-3 py-1 rounded-md ${
            currentSlide === slides.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-teal-600 text-white hover:bg-teal-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DiscussionSlideTemplate;