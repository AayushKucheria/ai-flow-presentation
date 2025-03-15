import React from 'react';

/**
 * Open Questions slide: Open Problems I'm Working Through
 * Discusses tensions and future directions in AI usage
 */
const OpenQuestionsSlide = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500"></div>
      
      <div className="p-8 flex flex-col items-center justify-center min-h-[36rem]">
        <div className="max-w-4xl w-full">
          {/* Main title */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            Open Thoughts
          </h1>
          
          <p className="text-center text-lg mb-8 text-gray-700">
            Using embodied experience to find balance in an evolving relationship with AI
          </p>
          
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column: Key tensions */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-rose-800 border-b border-rose-200 pb-2">
                Evolving Questions
              </h2>
              
              {/* Tension 1 */}
              <div className="p-5 border-l-4 border-rose-500 bg-rose-50 rounded-r-lg">
                <h3 className="font-semibold text-lg mb-2 text-rose-800">Skill Delegation vs. Development</h3>
                <p className="text-gray-700">
                  Finding the right balance between delegating to AI and maintaining critical skills. Working at higher abstraction layers while ensuring I don't lose fundamental capabilities.
                </p>
              </div>
              
              {/* Tension 3 */}
              <div className="p-5 border-l-4 border-rose-500 bg-rose-50 rounded-r-lg">
                <h3 className="font-semibold text-lg mb-2 text-rose-800">Efficiency vs. Experience</h3>
                <p className="text-gray-700">
                Finding the sweet spot where AI removes friction without removing meaning.
                </p>
              </div>
            </div>
            
            {/* Right column: My approach */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-emerald-800 border-b border-emerald-200 pb-2">
                My Navigation System
              </h2>
              
              {/* Approach 1 */}
              <div className="p-5 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg">
                <h3 className="font-semibold text-lg mb-2 text-emerald-800">Embodied Experience as Compass</h3>
                <p className="text-gray-700">
                  Staying deeply attuned to my moment-to-moment experience and using subtle feelings as guidance. If something feels disempowering, it likely is - my experience becomes the calibration mechanism.
                </p>
              </div>
              
              {/* Approach 2 */}
              <div className="p-5 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg">
                <h3 className="font-semibold text-lg mb-2 text-emerald-800">Intentional Structure vs. Output</h3>
                <p className="text-gray-700">
                  Using AI to suggest thinking structures rather than answers, or collaboratively reflecting instead of delegating the core thinking process itself.
                </p>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-2 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500"></div>
    </div>
  );
};

export default OpenQuestionsSlide; 