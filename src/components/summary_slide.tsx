"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface SummarySlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const SummarySlideTemplate = ({ currentSubsection = 'key_points', updateCurrentSubsection }: SummarySlideProps) => {
  // Map subsection IDs to slide indices
  const subsectionMap = useMemo(() => ({
    'key_points': 0,
  }), []);
  
  // Reverse map to get subsection from index
  const indexToSubsectionMap = useMemo(() => ({
    0: 'key_points',
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
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Key Insights & Takeaways</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="hand-drawn-box p-5 bg-blue-50">
              <h3 className="text-xl font-semibold hand-drawn-text mb-3">Live Interface Pattern</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li className="hand-drawn-text"><span className="font-semibold">Postformal:</span> Beyond fixed formalisms</li>
                <li className="hand-drawn-text"><span className="font-semibold">Attentive:</span> Actively responsive to contexts</li>
                <li className="hand-drawn-text"><span className="font-semibold">Adaptive:</span> Dynamically evolving structures</li>
              </ul>
            </div>
            
            <div className="hand-drawn-box p-5 bg-green-50">
              <h3 className="text-xl font-semibold hand-drawn-text mb-3">Live Software Platform</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li className="hand-drawn-text"><span className="font-semibold">DIY Tool Recipes:</span> Heterogeneous components</li>
                <li className="hand-drawn-text"><span className="font-semibold">AI as Infrastructure:</span> Backgrounds technology</li>
                <li className="hand-drawn-text"><span className="font-semibold">User-centered:</span> Tailored reproduction</li>
              </ul>
            </div>
          </div>
          
          <div className="hand-drawn-container p-5 bg-purple-50 mb-6">
            <h3 className="text-xl font-semibold hand-drawn-text mb-3 text-center">From Theory to Implementation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="font-semibold hand-drawn-text mb-1">Pattern</div>
                <div className="w-16 h-16 hand-drawn-circle bg-indigo-100 flex items-center justify-center">
                  <span className="text-xl">👥</span>
                </div>
                <div className="hand-drawn-text text-center text-sm mt-1">Person-to-person</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="font-semibold hand-drawn-text mb-1">Process</div>
                <div className="w-16 h-16 hand-drawn-circle bg-blue-100 flex items-center justify-center">
                  <span className="text-xl">⚙️</span>
                </div>
                <div className="hand-drawn-text text-center text-sm mt-1">Fluid structures</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="font-semibold hand-drawn-text mb-1">Platform</div>
                <div className="w-16 h-16 hand-drawn-circle bg-green-100 flex items-center justify-center">
                  <span className="text-xl">🔄</span>
                </div>
                <div className="hand-drawn-text text-center text-sm mt-1">Decentralized</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="hand-drawn-box px-5 py-3 bg-yellow-50 max-w-lg">
              <p className="hand-drawn-text text-center font-semibold">
                "Live Interfaces enable meaning to happen in the middle, between us,<br/>
                with Live Software backgrounding AI to foreground human connection"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySlideTemplate; 