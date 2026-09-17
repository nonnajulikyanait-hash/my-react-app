import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Ժամանակավոր Header՝ սխալներից խուսափելու համար */}
      <header className="w-full font-sans bg-white border-b border-gray-200 px-10 py-5 flex justify-between items-center shadow-sm">
        <button 
          onClick={() => setActiveTab('home')}
          className="text-3xl font-black text-neutral-800 tracking-tighter bg-transparent border-0 cursor-pointer"
        >
          evoca
        </button>
        <div className="space-x-6 font-medium">
          <button 
            onClick={() => setActiveTab('varker2')} 
            className="cursor-pointer bg-transparent border-0 text-gray-700 hover:text-purple-700"
          >
            Անհատ (varker2)
          </button>
          <button 
            onClick={() => setActiveTab('varker')} 
            className="cursor-pointer bg-transparent border-0 text-gray-700 hover:text-purple-700"
          >
            Բիզնես (varker)
          </button>
        </div>
      </header>

      {/* Բովանդակություն */}
      <div className="p-10 text-center">
        {activeTab === 'home' && (
          <h1 className="text-2xl font-bold text-gray-800">
            Գլխավոր էջ (Զրոյից սկսված)
          </h1>
        )}

        {activeTab === 'varker2' && (
          <h1 className="text-2xl font-bold text-blue-600">
            Անհատի վարկեր (varker2.jsx փոխարինող)
          </h1>
        )}

        {activeTab === 'varker' && (
          <h1 className="text-2xl font-bold text-purple-600">
            Բիզնեսի վարկեր (varker.jsx փոխարինող)
          </h1>
        )}
      </div>

      {/* Ներքևի հատված */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        Evoca Project © 2026
      </footer>
    </div>
  );
}

export default App;