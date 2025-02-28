"use client";

const SummarySlideTemplate = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Live Software: Growing Interfaces</h2>
          
          <div className="hand-drawn-container p-5 mb-6">
            <div className="hand-drawn-box p-4 bg-green-50 mb-6 max-w-2xl mx-auto">
              <p className="hand-drawn-text text-center text-lg">
                A platform for growing UI components that adapt and evolve 
                to connect creators with users
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
              <div className="hand-drawn-box p-4 flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🧩</span>
                  <span className="text-2xl">+</span>
                  <span className="text-2xl ml-2">🧩</span>
                </div>
                <h4 className="font-semibold hand-drawn-text mb-1 text-center">Composable Design</h4>
                <p className="hand-drawn-text text-center text-sm">
                  Components that naturally grow together
                </p>
              </div>
              
              <div className="hand-drawn-box p-4 flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🌿</span>
                  <span className="text-2xl">→</span>
                  <span className="text-2xl ml-2">🏷️</span>
                </div>
                <h4 className="font-semibold hand-drawn-text mb-1 text-center">Natural Attribution</h4>
                <p className="hand-drawn-text text-center text-sm">
                  Recognizing the gardeners of each component
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="hand-drawn-box px-5 py-3 bg-amber-50 max-w-lg">
                <p className="hand-drawn-text text-center">
                  "Let's grow interfaces that understand their users"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySlideTemplate; 