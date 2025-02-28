"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface ConclusionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const ConclusionSlideTemplate = ({ currentSubsection = 'summary', updateCurrentSubsection }: ConclusionSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'summary': 0,
    'vision': 1
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'summary',
    1: 'vision'
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
    if (updateCurrentSubsection) {
      updateCurrentSubsection(indexToSubsectionMap[index as keyof typeof indexToSubsectionMap]);
    }
  };

  const slides = [
    // Summary Slide
    {
      title: "Summary",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Live Software: Growing Interfaces</h2>
          
          <div className="hand-drawn-container p-5 mb-6">
            <div className="hand-drawn-box p-4 bg-green-50 mb-6 max-w-2xl mx-auto">
              <p className="hand-drawn-text text-center text-lg">
                A platform for growing UI components that adapt and evolve 
                to connect creators with users
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
              <div className="hand-drawn-box p-4 flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🧩</span>
                  <span className="text-2xl">+</span>
                  <span className="text-2xl ml-2">🧩</span>
                </div>
                <h4 className="font-semibold hand-drawn-text mb-1 text-center">Composable Design</h4>
                <p className="hand-drawn-text text-center text-sm">
                  Components that naturally grow together
                </p>
              </div>
              
              <div className="hand-drawn-box p-4 flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🌿</span>
                  <span className="text-2xl">→</span>
                  <span className="text-2xl ml-2">🏷️</span>
                </div>
                <h4 className="font-semibold hand-drawn-text mb-1 text-center">Natural Attribution</h4>
                <p className="hand-drawn-text text-center text-sm">
                  Recognizing the gardeners of each component
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="hand-drawn-box px-5 py-3 bg-amber-50 max-w-lg">
                <p className="hand-drawn-text text-center">
                  "Let's grow interfaces that understand their users"
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Vision Slide
    {
      title: "Future Vision",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Growing into the Future</h2>
          
          <div className="hand-drawn-container p-6 mb-6">
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-xl relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="hand-drawn-box p-4 bg-green-50">
                    <div className="text-center mb-2">
                      <span className="text-3xl">🌱</span>
                    </div>
                    <h3 className="text-lg font-semibold hand-drawn-text mb-2 text-center">Seed</h3>
                    <ul className="space-y-2">
                      <li className="hand-drawn-text text-sm">• First UI garden</li>
                      <li className="hand-drawn-text text-sm">• Component nursery</li>
                      <li className="hand-drawn-text text-sm">• Early adopters</li>
                    </ul>
                  </div>
                  
                  <div className="hand-drawn-box p-4 bg-emerald-50">
                    <div className="text-center mb-2">
                      <span className="text-3xl">🌿</span>
                    </div>
                    <h3 className="text-lg font-semibold hand-drawn-text mb-2 text-center">Growth</h3>
                    <ul className="space-y-2">
                      <li className="hand-drawn-text text-sm">• Thriving ecosystem</li>
                      <li className="hand-drawn-text text-sm">• Creator tools</li>
                      <li className="hand-drawn-text text-sm">• Community gardens</li>
                    </ul>
                  </div>
                  
                  <div className="hand-drawn-box p-4 bg-teal-50">
                    <div className="text-center mb-2">
                      <span className="text-3xl">🌳</span>
                    </div>
                    <h3 className="text-lg font-semibold hand-drawn-text mb-2 text-center">Forest</h3>
                    <ul className="space-y-2">
                      <li className="hand-drawn-text text-sm">• UI biodiversity</li>
                      <li className="hand-drawn-text text-sm">• Living interfaces</li>
                      <li className="hand-drawn-text text-sm">• Digital ecology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="hand-drawn-box px-5 py-3 bg-green-50 max-w-lg">
                <p className="hand-drawn-text text-center">
                  "From seeds of inspiration to forests of possibility"
                </p>
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
            {slides[currentSlide].title}
          </div>
          <div className="flex space-x-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`text-xs px-2 py-0.5 rounded ${
                  currentSlide === index 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {slides[currentSlide].content}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <button 
          onClick={() => currentSlide > 0 && handleSlideChange(currentSlide - 1)} 
          disabled={currentSlide === 0}
          className={`text-sm px-3 py-1 rounded-md ${
            currentSlide === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-green-600 text-white hover:bg-green-700'
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
                currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
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
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConclusionSlideTemplate;