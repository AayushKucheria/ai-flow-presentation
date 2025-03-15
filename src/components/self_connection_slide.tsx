import React from 'react';

/**
 * Self-Connection slide: Connecting to Past & Future Selves
 * Explores connecting with past and future selves
 */
const SelfConnectionSlide = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500"></div>
      
      <div className="p-8 flex flex-col items-center justify-center min-h-[36rem]">
        <div className="max-w-4xl w-full">
          {/* Main title */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            Connecting Through Time
          </h1>
          
          <p className="text-center text-lg mb-8 text-gray-700">
            Building a collaborative relationship with my past and future selves
          </p>
          
          {/* Timeline visualization */}
          <div className="mb-10 relative">
            <div className="h-2 bg-amber-200 absolute top-10 left-0 right-0 rounded-full"></div>
            
            {/* Past Self */}
            <div className="flex justify-between items-start mb-16">
              <div className="relative pt-16 w-1/3 text-center px-4">
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-amber-400 border-4 border-white shadow"></div>
                <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl mb-2">
                  👤
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Past Me</h3>
                <p className="text-gray-600 text-sm">Thoughts, ideas, and perspectives I once held</p>
              </div>
              
              {/* Present Self */}
              <div className="relative pt-16 w-1/3 text-center px-4">
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 border-4 border-white shadow"></div>
                <div className="w-24 h-24 mx-auto rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-3xl mb-2">
                  👤
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Present Me</h3>
                <p className="text-gray-600 text-sm">Current thinking shaped by past exploration</p>
              </div>
              
              {/* Future Self */}
              <div className="relative pt-16 w-1/3 text-center px-4">
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-amber-400 border-4 border-white shadow"></div>
                <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl mb-2 opacity-70">
                  👤
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Future Me</h3>
                <p className="text-gray-600 text-sm">The person I'm becoming, with continuity to who I am now</p>
              </div>
            </div>
            
            {/* Connection arrows */}
            <div className="flex justify-center mb-6">
              <svg width="300" height="60" viewBox="0 0 300 60">
                <path d="M50,10 C100,50 200,50 250,10" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M250,10 C200,50 100,50 50,10" fill="none" stroke="#d97706" strokeWidth="2" />
              </svg>
            </div>
          </div>
          
          {/* Connection aspects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pattern Recognition */}
            <div className="p-5 border border-amber-300 rounded-lg bg-amber-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Tracking Thought Evolution</h3>
              <p className="text-gray-700">
                AI helps me see concrete patterns in how my thinking changed over time - identifying specific shifts in language, focus, and problem approach across months of journal entries.
              </p>
            </div>
            
            {/* Thought Evolution */}
            <div className="p-5 border border-amber-300 rounded-lg bg-amber-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Connecting Daily Thoughts</h3>
              <p className="text-gray-700">
                Map incremental changes day-by-day rather than just remembering dramatic shifts - seeing how small adjustments in thinking built upon each other to create meaningful evolution.
              </p>
            </div>
            
            {/* Self-Connection */}
            <div className="p-5 border border-amber-300 rounded-lg bg-amber-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Reducing Self-Alienation</h3>
              <p className="text-gray-700">
                Feel less disconnected from past versions of myself - no longer simply "moving on" from old thinking but maintaining a relationship with how I used to see the world.
              </p>
            </div>
            
            {/* Collaborative Bond */}
            <div className="p-5 border border-amber-300 rounded-lg bg-amber-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Temporal Collaboration</h3>
              <p className="text-gray-700">
                Creating a new kind of internal trust where my future self cares for my past self and my past self trusts my future direction - forming a cohesive bond across time rather than separate identities.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500"></div>
    </div>
  );
};

export default SelfConnectionSlide; 