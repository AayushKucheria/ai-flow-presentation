"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import IntroSlide from "@/components/intro_slide";
import EvolutionSlide from "@/components/evolution_slide";
import ToolsSlide from "@/components/tools_slide";
import BreakthroughsSlide from "@/components/breakthroughs_slide";
import SelfConnectionSlide from "@/components/self_connection_slide";
import OpenQuestionsSlide from "@/components/open_questions_slide";

// Define the structure of our presentation with sections
const presentationStructure = {
  intro: { title: 'My Posture Towards AI Use' },
  evolution: { title: 'How My Approach Evolved' },
  tools: { title: 'Tools I Use' },
  breakthroughs: { title: 'Personal Breakthrough Cases' },
  self_connection: { title: 'Connecting to Past & Future Selves' },
  open_questions: { title: 'Open Thoughts' }
};

// Type for our slide sections
type SlideSection = keyof typeof presentationStructure;

export default function Home() {
  // Track the current section
  const [activeSlide, setActiveSlide] = useState<SlideSection>('intro');
  
  // Define the slide order for navigation
  const slideOrder = useMemo<SlideSection[]>(() => 
    ['intro', 'evolution', 'tools', 'breakthroughs', 'self_connection', 'open_questions']
  , []);
  
  // Function to navigate to the next slide
  const goToNextSlide = useCallback(() => {
    const currentSectionIndex = slideOrder.indexOf(activeSlide);
    
    // Go to the next section (if available)
    if (currentSectionIndex < slideOrder.length - 1) {
      const nextSection = slideOrder[currentSectionIndex + 1];
      setActiveSlide(nextSection);
    }
  }, [activeSlide, slideOrder]);
  
  // Function to navigate to the previous slide
  const goToPreviousSlide = useCallback(() => {
    const currentSectionIndex = slideOrder.indexOf(activeSlide);
    
    // Go to the previous section (if available)
    if (currentSectionIndex > 0) {
      const prevSection = slideOrder[currentSectionIndex - 1];
      setActiveSlide(prevSection);
    }
  }, [activeSlide, slideOrder]);
  
  // Function to directly navigate to a specific section
  const goToSection = (section: SlideSection) => {
    setActiveSlide(section);
  };
  
  // Add keyboard event listeners for navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'ArrowRight') {
        event.preventDefault();
        goToNextSlide();
      } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSlide, goToNextSlide, goToPreviousSlide]);
  
  // Check if we're at the first slide overall
  const isFirstSlide = activeSlide === slideOrder[0];
  
  // Check if we're at the last slide overall
  const isLastSlide = activeSlide === slideOrder[slideOrder.length - 1];
  
  // Get background color for slide buttons based on section
  const getSectionColor = (section: SlideSection) => {
    const colors = {
      intro: 'bg-emerald-600',
      evolution: 'bg-blue-600',
      tools: 'bg-indigo-600',
      breakthroughs: 'bg-purple-600',
      self_connection: 'bg-amber-600',
      open_questions: 'bg-rose-600'
    };
    return colors[section] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500">
          How I Use AI Systems to Live a Better Life
        </h1>
        
        <div className="text-sm text-gray-500 mt-1">
          Humans of EA Finland 2025
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {slideOrder.map((section) => (
            <button 
              key={section}
              onClick={() => goToSection(section)} 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeSlide === section 
                  ? getSectionColor(section) + ' text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {presentationStructure[section].title}
            </button>
          ))}
        </div>
      </header>
      
      <div className="container mx-auto">
        {activeSlide === 'intro' ? (
          <IntroSlide />
        ) : activeSlide === 'evolution' ? (
          <EvolutionSlide />
        ) : activeSlide === 'tools' ? (
          <ToolsSlide />
        ) : activeSlide === 'breakthroughs' ? (
          <BreakthroughsSlide />
        ) : activeSlide === 'self_connection' ? (
          <SelfConnectionSlide />
        ) : (
          <OpenQuestionsSlide />
        )}
        
        {/* Author footer with social links */}
        <div className="mt-8 text-center text-gray-500 text-sm flex items-center justify-center gap-3">
          <span className="font-medium">Aayush Kucheria</span>
          <span className="text-gray-300">|</span>
          <a 
            href="https://x.com/Aay17ush" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>@Aay17ush</span>
          </a>
          <span className="text-gray-300">|</span>
          <a 
            href="https://www.linkedin.com/in/aayushkucheria/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      
      {/* Navigation controls */}
      <div className="flex justify-between mt-8 max-w-4xl mx-auto px-4">
        <button 
          onClick={goToPreviousSlide}
          disabled={isFirstSlide}
          className={`px-4 py-2 rounded-md ${
            isFirstSlide
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ← Previous
        </button>
        
        <div className="text-sm text-gray-500 self-center flex flex-col items-center">
          <div className="mb-1">
            {slideOrder.indexOf(activeSlide) + 1} / {slideOrder.length}
          </div>
          <div className="text-xs text-gray-400">
            {presentationStructure[activeSlide].title}
          </div>
        </div>
        
        <button 
          onClick={goToNextSlide}
          disabled={isLastSlide}
          className={`px-4 py-2 rounded-md ${
            isLastSlide
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
