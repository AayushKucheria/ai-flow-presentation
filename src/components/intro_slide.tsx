import React from 'react';

/**
 * Introduction slide: Tools, Flows & AI
 * Introduces the main concepts and sets up the presentation
 */
const IntroSlide = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500"></div>
      
      <div className="p-8 flex flex-col items-center justify-center min-h-[36rem]">
        <div className="max-w-4xl w-full">
          {/* Main title */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            My Posture Towards AI Use
          </h1>
          
          {/* Garden metaphor visualization - keeping this visualization but changing text */}
          <div className="flex justify-center mb-8">
            <div className="w-80 h-80 relative border-2 border-emerald-200 rounded-lg p-4 bg-emerald-50">
              {/* The Gardener (You) */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl">
                    👨‍🌾
                  </div>
                  <p className="mt-1 text-sm font-medium">Me</p>
                </div>
              </div>
              
              {/* AI Tools as Plants */}
              <div className="absolute top-10 left-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center">
                    🌱
                  </div>
                  <p className="mt-1 text-xs">Exa.ai</p>
                </div>
              </div>
              
              <div className="absolute top-8 right-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-300 flex items-center justify-center">
                    🌿
                  </div>
                  <p className="mt-1 text-xs">Perplexity</p>
                </div>
              </div>
              
              <div className="absolute top-32 right-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center">
                    🌱
                  </div>
                  <p className="mt-1 text-xs">Elicit</p>
                </div>
              </div>
              
              <div className="absolute top-24 left-12">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 border-2 border-indigo-300 flex items-center justify-center">
                    🌿
                  </div>
                  <p className="mt-1 text-xs">VoiceNotes</p>
                </div>
              </div>
              
              <div className="absolute top-36 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-300 flex items-center justify-center">
                    🌳
                  </div>
                  <p className="mt-1 text-xs">Cursor</p>
                </div>
              </div>
              
              {/* Sun (Self-Connection) */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-yellow-200 border-2 border-yellow-400 flex items-center justify-center text-2xl">
                    ☀️
                  </div>
                  <p className="mt-1 text-xs font-medium">Connection to Self</p>
                </div>
              </div>
              
              {/* Watering Can (Embodied Experience) */}
              <div className="absolute bottom-12 right-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center text-xl">
                    🚿
                  </div>
                  <p className="mt-1 text-xs">My Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key introduction points */}
          <div className="mt-4 space-y-4">

          <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Tools are cool, but they're instrumental</h3>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">The person, experience, and meaning is central</h3>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Tapping into this potential is important, even crucial</h3>
            </div>
            
            
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-2 bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500"></div>
    </div>
  );
};

export default IntroSlide; 