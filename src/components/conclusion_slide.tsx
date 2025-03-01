"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface ConclusionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const ConclusionSlideTemplate = ({ currentSubsection = 'near_term', updateCurrentSubsection }: ConclusionSlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'near_term': 0,
    'mid_term': 1,
    'long_term': 2
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'near_term',
    1: 'mid_term',
    2: 'long_term'
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
    // Near-term Vision
    {
      title: "Near Future",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Growing UI Ecosystem: First Steps</h2>
          
          <div className="hand-drawn-container p-5 mb-6">
            <div className="flex justify-center mb-6">
              <div className="relative p-3 hand-drawn-box bg-amber-50 text-center">
                <h3 className="text-lg font-semibold hand-drawn-text mb-2">From Standardized to Heterogeneous</h3>
                <p className="text-sm hand-drawn-text">
                  Reimagining what software distribution can be
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 hand-drawn-box">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl">📦</span>
                  <span className="text-xl mx-2">→</span>
                  <span className="text-3xl">💻</span>
                </div>
                <h4 className="text-center font-semibold hand-drawn-text mb-2">Traditional Approach</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="hand-drawn-text">Standardized application packages</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="hand-drawn-text">Download and install process</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="hand-drawn-text">Fixed interfaces with limited modifiability</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 hand-drawn-box bg-amber-50">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl">📝</span>
                  <span className="text-xl mx-2">→</span>
                  <span className="text-3xl">🪄</span>
                </div>
                <h4 className="text-center font-semibold hand-drawn-text mb-2">Our Vision</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="hand-drawn-text">Heterogeneous design recipes</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="hand-drawn-text">"Steal" and reproduce approach</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="hand-drawn-text">Tailored to user preferences</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="hand-drawn-box p-3 bg-amber-50 max-w-lg mx-auto">
              <p className="hand-drawn-text text-center">
                Phase 1: Building early prototypes and proof-of-concept implementations
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Mid-term Vision
    {
      title: "Mid Term",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Evolving Interfaces: Growing Connections</h2>
          
          <div className="hand-drawn-container p-5 mb-6">
            <div className="flex justify-center mb-6">
              <div className="relative p-3 hand-drawn-box bg-teal-50 text-center">
                <h3 className="text-lg font-semibold hand-drawn-text mb-2">From Products to Creators</h3>
                <p className="text-sm hand-drawn-text">
                  Changing how we attribute and reward digital creation
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 hand-drawn-box">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl">💰</span>
                  <span className="text-xl mx-2">→</span>
                  <span className="text-3xl">🛒</span>
                </div>
                <h4 className="text-center font-semibold hand-drawn-text mb-2">Traditional Approach</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="hand-drawn-text">Purchase/Subscribe to digital products</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="hand-drawn-text">Services as commodities</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="hand-drawn-text">Limited connection to creators</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 hand-drawn-box bg-teal-50">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl">👩‍🎨</span>
                  <span className="text-xl mx-2">→</span>
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-center font-semibold hand-drawn-text mb-2">Our Vision</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="hand-drawn-text">Subscribe to designers and creators</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="hand-drawn-text">Support aesthetic design recipes</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-teal-600 mr-2">•</span>
                    <span className="hand-drawn-text">Direct connection between creator and user</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="hand-drawn-box p-3 bg-teal-50 max-w-lg mx-auto">
              <p className="hand-drawn-text text-center">
                Phase 2: Building thriving communities and ecosystems of creators
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Long-term Vision
    {
      title: "Long Term",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">A New Digital Ecosystem</h2>
          
          <div className="hand-drawn-container p-5 mb-6">
            <div className="flex justify-center mb-6">
              <div className="relative p-3 hand-drawn-box bg-purple-50 text-center">
                <h3 className="text-lg font-semibold hand-drawn-text mb-2">From Infrastructure to Intelligence</h3>
                <p className="text-sm hand-drawn-text">
                  Reimagining the foundation of software experiences
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 hand-drawn-box">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl">🏗️</span>
                  <span className="text-xl mx-2">+</span>
                  <span className="text-3xl">📜</span>
                </div>
                <h4 className="text-center font-semibold hand-drawn-text mb-2">Traditional Approach</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="hand-drawn-text">Standardized protocols</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="hand-drawn-text">Focused development chains</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="hand-drawn-text">Rigid ecosystem boundaries</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 hand-drawn-box bg-purple-50">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl">🤖</span>
                  <span className="text-xl mx-2">+</span>
                  <span className="text-3xl">🌱</span>
                </div>
                <h4 className="text-center font-semibold hand-drawn-text mb-2">Our Vision</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="hand-drawn-text">AI software agents as infrastructure</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="hand-drawn-text">Fluid boundaries between systems</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="hand-drawn-text">Living interfaces that evolve naturally</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="hand-drawn-box p-3 bg-purple-50 max-w-lg mx-auto">
              <p className="hand-drawn-text text-center">
                Phase 3: A flourishing digital ecosystem of adaptive, personalized interfaces
              </p>
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
                    ? 'bg-amber-600 text-white' 
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
              : 'bg-amber-600 text-white hover:bg-amber-700'
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
                currentSlide === index ? 'bg-amber-600' : 'bg-gray-300'
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
              : 'bg-amber-600 text-white hover:bg-amber-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConclusionSlideTemplate;