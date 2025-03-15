import React from 'react';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';

/**
 * Tools slide: Tools I Use
 * Showcases the purpose-driven tool selection
 */
const ToolsSlide = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500"></div>
      
      <div className="p-8 flex flex-col items-center justify-center min-h-[36rem]">
        <div className="max-w-4xl w-full">
          {/* Main title */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            Tools I Use
          </h1>
          
          <p className="text-center text-lg mb-8 text-gray-700">
            Different tools serve different purposes in my workflow.
          </p>
          
          {/* Primary tools (most important) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Claude */}
            <div className="p-5 border-2 border-amber-400 rounded-lg bg-amber-50 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center mr-3 overflow-hidden">
                  <Image 
                    src={getImagePath("/docs/images/claude.png")} 
                    alt="Claude" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <a 
                  href="https://claude.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-semibold text-amber-800 hover:underline"
                >
                  Claude
                </a>
                <span className="ml-2 px-2 py-1 bg-amber-200 text-amber-800 text-xs rounded-full">Primary</span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Reflection partner for my thoughts, applying different frameworks and helping me see patterns, development over time</li>
                <li>Suggesting thinking structures (Five Ws, morning pages, decision flowchart) rather than answers, enabling me to better engage with my thoughts </li>
                <li>Navigating daily decisions by leveraging its knowledge - like creating meal ideas based on what's in my fridge and specific cravings</li>
              </ul>
            </div>
            
            {/* VoiceNotes - Changed to white theme */}
            <div className="p-5 border-2 border-gray-300 rounded-lg bg-white hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center mr-3 overflow-hidden">
                  <Image 
                    src={getImagePath("/docs/images/voicenotes.png")} 
                    alt="VoiceNotes" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <a 
                  href="https://voicenotes.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  VoiceNotes
                </a>
                <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">Primary</span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Overcomes my writing psychological barriers and physical limitations like carpal tunnel syndrome</li>
                <li>Enables location independence and movement while capturing thoughts for journals and documents</li>
              </ul>
            </div>
          </div>
          
          {/* Secondary tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Exa.ai */}
            <div className="p-5 border border-blue-300 rounded-lg bg-blue-50 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center mr-3 overflow-hidden">
                  <Image 
                    src={getImagePath("/docs/images/exa.jpeg")} 
                    alt="Exa.ai" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <a 
                  href="https://exa.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-semibold text-blue-800 hover:underline"
                >
                  Exa.ai
                </a>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Finding content similar to something I already have (person, idea, blog post, paper)</li>
                <li>Exploring specific "subspaces" of knowledge when I know what I want more of</li>
              </ul>
            </div>
            
            {/* Perplexity - Changed to teal */}
            <div className="p-5 border border-teal-300 rounded-lg bg-teal-50 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-300 flex items-center justify-center mr-3 overflow-hidden">
                  <Image 
                    src={getImagePath("/docs/images/perplexity.png")} 
                    alt="Perplexity" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <a 
                  href="https://perplexity.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-semibold text-teal-800 hover:underline"
                >
                  Perplexity
                </a>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Replaced Google as my primary information gathering tool</li>
                <li>Offers both shallow exploration and deep research capabilities</li>
              </ul>
            </div>
            
            {/* Elicit */}
            <div className="p-5 border border-green-300 rounded-lg bg-green-50 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center mr-3 overflow-hidden">
                  <Image 
                    src={getImagePath("/docs/images/elicit.jpeg")} 
                    alt="Elicit" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <a 
                  href="https://elicit.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-semibold text-green-800 hover:underline"
                >
                  Elicit
                </a>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Addressing questions that can be described scientifically</li>
                <li>Research assistant for evidence-based exploration of topics</li>
              </ul>
            </div>
          </div>
          
          {/* Cursor - Changed to black */}
          <div className="mt-6">
            <div className="p-5 border border-gray-700 rounded-lg bg-gray-900 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center mr-3 overflow-hidden">
                  <Image 
                    src={getImagePath("/docs/images/cursor.png")} 
                    alt="Cursor" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <a 
                  href="https://cursor.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-semibold text-white hover:underline"
                >
                  Cursor
                </a>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Swiftly creating personal products and tools to solve problems I encounter</li>
                <li>Built web-based presentations and a semantic search tool for my Goodreads library</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500"></div>
    </div>
  );
};

export default ToolsSlide; 