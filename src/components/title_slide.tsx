import React from 'react';

/**
 * Clean, focused title slide that matches the presentation design pattern
 */
const TitleSlideTemplate = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>
      
      <div className="p-8 flex flex-col items-center justify-center min-h-[36rem]">
        <div className="max-w-4xl w-full text-center">
          {/* Main title with enhanced hierarchy */}
          <h1 className="text-7xl font-bold mb-6 hand-drawn-text">
            Live Software
          </h1>
          
          {/* Subtitle with proper spacing */}
          <h2 className="text-3xl mb-8 hand-drawn-text">
            Growing Interfaces
          </h2>
          
          {/* Simple visual representation - updated to match the shared image */}
          <div className="flex justify-center mb-12">
            <div className="w-72 h-72 flex items-center justify-center relative overflow-hidden">
              <div className="hand-drawn-box w-full h-full flex items-center justify-center p-8 bg-white">
                {/* Top row of seeds/components */}
                <div className="absolute top-12 left-0 right-0 flex justify-center space-x-8">
                  <div className="hand-drawn-circle w-14 h-14 flex items-center justify-center bg-white border-2 border-green-500">
                    <span className="text-green-500 text-2xl">🌱</span>
                  </div>
                  <div className="hand-drawn-circle w-14 h-14 flex items-center justify-center bg-white border-2 border-green-500">
                    <span className="text-green-500 text-2xl">🌱</span>
                  </div>
                  <div className="hand-drawn-circle w-14 h-14 flex items-center justify-center bg-white border-2 border-green-500">
                    <span className="text-green-500 text-2xl">🌱</span>
                  </div>
                </div>
                
                {/* Arrow pointing down */}
                <div className="absolute top-32 left-0 right-0 flex justify-center">
                  <div className="w-16 h-8 relative">
                    <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-gray-600 transform -translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-4 h-4 border-b-2 border-r-2 border-gray-600 transform rotate-45 -translate-x-1/2"></div>
                  </div>
                </div>
                
                {/* Result - growing plant in a square container */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                  <div className="w-20 h-20 hand-drawn-box flex items-center justify-center border-2 border-gray-400">
                    <span className="text-green-500 text-3xl">🌿</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key concepts - updated to include composability */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 mb-8">
            {['P2P Interfaces', 'Composable', 'Human-Centered', 'Adaptive Growth'].map((tag, index) => (
              <span key={index} className="px-4 py-2 hand-drawn-tag text-lg">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Team information updated */}
          <div className="mt-8">
            <div className="flex justify-center gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 hand-drawn-text">Aayush Kucheria</h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 hand-drawn-text">Kuil Schoneveld</h3>
              </div>
            </div>
            <p className="text-gray-600 mt-2">AI Safety Camp | Live Theory 2025</p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>
    </div>
  );
};

export default TitleSlideTemplate;