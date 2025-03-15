import React from 'react';

/**
 * Evolution slide: How My Approach Evolved
 * Shows the journey from delegation to augmentation
 */
const EvolutionSlide = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"></div>
      
      <div className="p-8 flex flex-col items-center justify-center min-h-[36rem]">
        <div className="max-w-4xl w-full">
          {/* Main title */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            How My Approach Evolved
          </h1>
          
          {/* River flow metaphor */}
          <div className="flex justify-center mb-8">
            <div className="w-full relative">
              <div className="h-24 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-xl flex items-center justify-between px-8 relative overflow-hidden">
                {/* "River" curve shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="100%" height="100%" viewBox="0 0 600 100" preserveAspectRatio="none">
                    <path d="M0,80 C150,100 350,0 600,50" fill="none" stroke="#3b82f6" strokeWidth="8" />
                  </svg>
                </div>
                
                {/* Start of the journey (Delegation) */}
                <div className="z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 border-2 border-red-300 flex items-center justify-center text-xl mb-2">
                    🤖
                  </div>
                  <span className="font-semibold text-red-800 bg-white px-2 py-1 rounded shadow-sm">
                    Delegating to AI
                  </span>
                </div>
                
                {/* End of the journey (Augmentation) */}
                <div className="z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center text-xl mb-2">
                    🧠
                  </div>
                  <span className="font-semibold text-green-800 bg-white px-2 py-1 rounded shadow-sm">
                    AI Augmentation
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Journey sections */}
          <div className="space-y-6">
            {/* The initial problem with delegation */}
            <div className="p-5 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-red-800">Delegating as the primary strategy</h3>
              <p className="text-gray-700 mb-3">Trying to automate everything, including things I should have been doing myself.</p>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="italic text-sm text-gray-600">"In my work I was writing code which I didn't understand. I tried to automate my whole master's thesis writing process using AI where I created this whole workflow... For a bunch of reasons that wasn't a really smart thing to do."</p>
              </div>
            </div>
            
            {/* Finding balance */}
            <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-blue-800">Finding a Better Way</h3>
              <p className="text-gray-700 mb-3">Making my content and thought structures the primary focus again.</p>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="italic text-sm text-gray-600">"My content, my inspiration, my thought structures are the primary object that we're engaging with. For example, instead of asking AI directly, I describe what I'm confused about and ask 'Can you suggest different structures that can help me think here?'"</p>
              </div>
            </div>
            
            {/* Using experience as a guide */}
            <div className="p-5 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
              <h3 className="font-semibold text-xl mb-2 text-green-800">Tuning In to My Experience</h3>
              <p className="text-gray-700 mb-3">Tuning into my experience as the core guide for what's working. If something is disempowering, it feels disempowering.</p>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="italic text-sm text-gray-600">"Attuning to my moment-to-moment experience... being connected to those very subtle feelings gives me this base confidence that if something is going wrong, how am I going to know about it? It's going wrong with me, for my experience. So my experience is going to let me know."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"></div>
    </div>
  );
};

export default EvolutionSlide; 