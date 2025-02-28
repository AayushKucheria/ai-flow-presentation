"use client";

interface MethodologySlideProps {
  currentSubsection?: string;
  updateCurrentSubsection?: (subsection: string) => void;
}

const MethodologySlideTemplate = ({ currentSubsection = 'demo', updateCurrentSubsection }: MethodologySlideProps = {}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 flex flex-col items-center justify-center min-h-[24rem]">
          <h2 className="text-5xl font-bold hand-drawn-text mb-8">Demo</h2>
          
          <div className="hand-drawn-box p-6 w-full max-w-xl">
            <h3 className="text-xl font-semibold hand-drawn-text mb-4 text-center">Let's see it in action</h3>
            <p className="hand-drawn-text text-center mb-4">
              Watch how a live interface emerges from multiple creators' components
            </p>
            
            <div className="hand-drawn-container p-4 bg-blue-50">
              <ol className="space-y-2">
                <li className="hand-drawn-text">
                  <span className="font-bold">Step 1:</span> Show the interface components from different creators
                </li>
                <li className="hand-drawn-text">
                  <span className="font-bold">Step 2:</span> Demonstrate how they compose based on user context
                </li>
                <li className="hand-drawn-text">
                  <span className="font-bold">Step 3:</span> Highlight how the composition adapts to changing needs
                </li>
              </ol>
            </div>
            
            <div className="mt-4 flex justify-center">
              <div className="hand-drawn-box p-3 bg-purple-50 max-w-md">
                <p className="hand-drawn-text text-center">
                  <span className="font-bold">Key Demo Point:</span> The interface isn't just personalized—it's 
                  composed from multiple creators' components working together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySlideTemplate;