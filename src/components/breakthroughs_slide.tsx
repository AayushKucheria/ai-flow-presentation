import React from 'react';

/**
 * Breakthroughs slide: Personal Breakthrough Cases
 * Showcases the case studies of personal limitations overcome
 */
const BreakthroughsSlide = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500"></div>
      
      <div className="p-8 flex flex-col items-center justify-center min-h-[36rem]">
        <div className="max-w-4xl w-full">
          {/* Main title */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            Personal Breakthrough Cases
          </h1>
          
          <p className="text-center text-lg mb-8 text-gray-700">
            How AI helped me transform limitations into creative solutions
          </p>
          
          {/* Case studies */}
          <div className="space-y-8">

            {/* Case 3: Voice Transition */}
            <div className="border border-purple-300 rounded-lg overflow-hidden">
              <div className="bg-purple-100 p-4">
                <h3 className="text-xl font-semibold text-purple-800">Voice-Based Digital Life</h3>
                <p className="text-gray-700">Transforming my physical relationship with technology through voice</p>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 border-2 border-red-300 flex items-center justify-center text-xl shrink-0">
                    ❌
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 mb-1">The Challenge</h4>
                    <p className="text-gray-700">Feeling desk-bound and physically restricted when interacting with digital tools, alongside writing barriers (both psychological and physical like carpal tunnel syndrome).</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center text-xl shrink-0">
                    ✅
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-1">The Approach</h4>
                    <p className="text-gray-700">Made voice the primary mode of digital interaction - creating dedicated topic docs, capturing thoughts while walking, and working from parks and coffee shops instead of always at a desk. More location independence, increased physical movement, and produced more writing than ever before.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case 1: Presentation Design */}
            <div className="border border-purple-300 rounded-lg overflow-hidden">
              <div className="bg-purple-100 p-4">
                <h3 className="text-xl font-semibold text-purple-800">Presentations Without PowerPoint</h3>
                <p className="text-gray-700">Creating web-based presentations through code instead of slides</p>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 border-2 border-red-300 flex items-center justify-center text-xl shrink-0">
                    ❌
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 mb-1">The Challenge</h4>
                    <p className="text-gray-700">Struggled with traditional slide creation - the ppt format never got to me, leading to frustration and really bad slides.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center text-xl shrink-0">
                    ✅
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-1">The Approach</h4>
                    <p className="text-gray-700">Leveraged AI's coding strengths to build a reusable template for web-based presentations. I focus on content and narrative while AI helps translate my vision into code (and thus, slides).</p>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            {/* Case 2: Goodreads Library (adding this from context.md) */}
            <div className="border border-purple-300 rounded-lg overflow-hidden">
              <div className="bg-purple-100 p-4">
                <h3 className="text-xl font-semibold text-purple-800">Semantic Book Discovery</h3>
                <p className="text-gray-700">Creating a personal search tool for my extensive reading library</p>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 border-2 border-red-300 flex items-center justify-center text-xl shrink-0">
                    ❌
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 mb-1">The Challenge</h4>
                    <p className="text-gray-700">Managing a 2,000+ book Goodreads library with no way to search by concept, theme, or "vibe" - making it difficult to rediscover books I'd already curated.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center text-xl shrink-0">
                    ✅
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-1">The Approach</h4>
                    <p className="text-gray-700">Built a custom app that exports Goodreads data into an embedding space, enabling semantic search across my entire library based on concepts rather than just keywords.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-xl shrink-0">
                    🔄
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-1">The Transformation</h4>
                    <p className="text-gray-700">Now connect with my past book curation decisions, rediscovering relevant reading material when exploring new interests rather than always looking externally for recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-2 bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500"></div>
    </div>
  );
};

export default BreakthroughsSlide; 