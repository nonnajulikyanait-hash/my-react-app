import React from 'react';

function Karucvacq({ setActiveSubTab }) {
  const subTabs = [
    'Ընդհանուր',
    'Կառուցվածք',
    'Բաժնետերեր',
    'Ղեկավարություն',
    'Գործընկերներ',
    'Մրցանակներ',
    'CSR',
    'Էվոկա ֆինանսական խումբ',
  ];

  return (
    <div>
      {/* Մանուշակագույն ենթաթաբերի նավիգացիա */}
      <div className="bg-[#6400dc] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-6 py-3 text-sm font-medium whitespace-nowrap scrollbar-none">
          {subTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveSubTab(tab)}
              className={`pb-1 transition-colors hover:text-purple-200 cursor-pointer bg-transparent border-0 ${
                tab === 'Կառուցվածք' ? 'border-b-2 border-white font-bold' : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Բրեդքրամփս (Հղումների ուղին) */}
      <div className="max-w-7xl mx-auto px-6 pt-6 text-xs text-gray-500 flex items-center space-x-2">
        <span className="cursor-pointer hover:underline">🏠</span>
        <span>›</span>
        <span className="cursor-pointer hover:underline">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer hover:underline">Evoca-ի մասին</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Կառուցվածք</span>
      </div>

      {/* Բովանդակություն */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        
        {/* Վերնագիր */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-neutral-900">Բանկի կառուցվածքը</h2>
        </div>

        {/* Կառուցվածքային սխեմայի նկար */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center overflow-x-auto">
          <img 
            src="https://www.evoca.am/file_manager/structure/Organizational%20Structure-arm.png" 
            alt="Evocabank Կառուցվածքային սխեմա" 
            className="w-full h-auto max-w-6xl object-contain mx-auto"
          />
        </div>

      </div>
    </div>
  );
}

export default Karucvacq;