"use client";

import { useState, useEffect, useMemo } from 'react';

// Define the props interface for the component
interface DiscussionSlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const DiscussionSlideTemplate = ({ currentSubsection = 'design_philosophy', updateCurrentSubsection }: DiscussionSlideProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Design Philosophy</h2>
          
          <div className="hand-drawn-container p-5 mb-6">
            <h3 className="text-xl font-semibold hand-drawn-text mb-5 text-center">Growing Elegant Interfaces</h3>
            
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-xl relative overflow-hidden">
                <div className="grid grid-cols-3 gap-4">
                  <div className="hand-drawn-circle p-4 flex flex-col items-center justify-center">
                    <span className="text-2xl mb-2">👩‍🎨</span>
                    <span className="hand-drawn-text text-center">Creator</span>
                  </div>
                  
                  <div className="hand-drawn-box p-4 flex flex-col items-center justify-center">
                    <span className="text-2xl mb-2">🌱</span>
                    <span className="hand-drawn-text text-center">Growing Components</span>
                  </div>
                  
                  <div className="hand-drawn-circle p-4 flex flex-col items-center justify-center">
                    <span className="text-2xl mb-2">👨‍💻</span>
                    <span className="hand-drawn-text text-center">User</span>
                  </div>
                </div>
                
                <div className="mt-4 hand-drawn-arrow w-full"></div>
              </div>
            </div>
            
            <div className="hand-drawn-box p-4 bg-green-50 mb-6 max-w-2xl mx-auto">
              <p className="hand-drawn-text text-center text-lg">
                Our platform cultivates a new approach to UI design where components 
                grow and adapt to connect creators with users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionSlideTemplate;