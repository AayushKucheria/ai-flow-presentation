"use client";

const VisionSlideTemplate = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold hand-drawn-text mb-6">Growing into the Future</h2>
          
          <div className="hand-drawn-container p-6 mb-6">
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-xl relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="hand-drawn-box p-4 bg-green-50">
                    <div className="text-center mb-2">
                      <span className="text-3xl">🌱</span>
                    </div>
                    <h3 className="text-lg font-semibold hand-drawn-text mb-2 text-center">Seed</h3>
                    <ul className="space-y-2">
                      <li className="hand-drawn-text text-sm">• First UI garden</li>
                      <li className="hand-drawn-text text-sm">• Component nursery</li>
                      <li className="hand-drawn-text text-sm">• Early adopters</li>
                    </ul>
                  </div>
                  
                  <div className="hand-drawn-box p-4 bg-emerald-50">
                    <div className="text-center mb-2">
                      <span className="text-3xl">🌿</span>
                    </div>
                    <h3 className="text-lg font-semibold hand-drawn-text mb-2 text-center">Growth</h3>
                    <ul className="space-y-2">
                      <li className="hand-drawn-text text-sm">• Thriving ecosystem</li>
                      <li className="hand-drawn-text text-sm">• Creator tools</li>
                      <li className="hand-drawn-text text-sm">• Community gardens</li>
                    </ul>
                  </div>
                  
                  <div className="hand-drawn-box p-4 bg-teal-50">
                    <div className="text-center mb-2">
                      <span className="text-3xl">🌳</span>
                    </div>
                    <h3 className="text-lg font-semibold hand-drawn-text mb-2 text-center">Forest</h3>
                    <ul className="space-y-2">
                      <li className="hand-drawn-text text-sm">• UI biodiversity</li>
                      <li className="hand-drawn-text text-sm">• Living interfaces</li>
                      <li className="hand-drawn-text text-sm">• Digital ecology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="hand-drawn-box px-5 py-3 bg-green-50 max-w-lg">
                <p className="hand-drawn-text text-center">
                  "From seeds of inspiration to forests of possibility"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSlideTemplate; 