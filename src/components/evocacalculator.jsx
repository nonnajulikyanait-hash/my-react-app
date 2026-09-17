import React, { useState } from 'react';

function EvocaCalculator() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-white py-12 overflow-hidden border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ձախ մաս՝ Փոխարժեքներ / Բացատրություն և 4 թաբերով աղյուսակներ (7 սյունակ) */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            
            {/* Վերևի տեքստ (տեղեկատվություն փոխարկման մասին) */}
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed text-left">
              20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
            </p>

            {/* 4 Հատկանիշ-Թաբեր (Կանխիկ, Անկանխիկ, Ոսկու փոխարժեք, Ռուբլու կանխիկ մուտք) */}
            <div className="flex flex-wrap items-center gap-2 border-b border-neutral-200 pb-3 text-xs sm:text-sm font-medium text-neutral-600">
              <button 
                onClick={() => setActiveTab(0)}
                className={`pb-2 transition-colors cursor-pointer relative ${activeTab === 0 ? 'text-[#6400dc] font-bold border-b-2 border-[#6400dc]' : 'hover:text-neutral-900'}`}
              >
                Կանխիկ
              </button>
              <button 
                onClick={() => setActiveTab(1)}
                className={`pb-2 transition-colors cursor-pointer relative ${activeTab === 1 ? 'text-[#6400dc] font-bold border-b-2 border-[#6400dc]' : 'hover:text-neutral-900'}`}
              >
                Անկանխիկ
              </button>
              <button 
                onClick={() => setActiveTab(2)}
                className={`pb-2 transition-colors cursor-pointer relative ${activeTab === 2 ? 'text-[#6400dc] font-bold border-b-2 border-[#6400dc]' : 'hover:text-neutral-900'}`}
              >
                Ոսկու փոխարժեք
              </button>
              <button 
                onClick={() => setActiveTab(3)}
                className={`pb-2 transition-colors cursor-pointer relative ${activeTab === 3 ? 'text-[#6400dc] font-bold border-b-2 border-[#6400dc]' : 'hover:text-neutral-900'}`}
              >
                Ռուբլու կանխիկ մուտք
              </button>
            </div>

            {/* Թաբերի բովանդակություն */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm text-left">
              
              {/* Թաբ 0: Կանխիկ */}
              {activeTab === 0 && (
                <div>
                  <div className="grid grid-cols-3 text-xs text-neutral-400 font-semibold mb-4 px-2">
                    <span>Արտարժույթ</span>
                    <span className="text-right">Առք</span>
                    <span className="text-right">Վաճառք</span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-3 items-center px-2 py-1.5 hover:bg-neutral-50 rounded-lg">
                      <div className="flex items-center space-x-2 font-bold text-neutral-800">
                        <span className="text-red-600 font-extrabold">USD</span>
                      </div>
                      <span className="text-right text-red-600 font-semibold flex items-center justify-end gap-1">
                        <span className="text-[10px]">▼</span> 361
                      </span>
                      <span className="text-right text-green-600 font-semibold flex items-center justify-end gap-1">
                        <span className="text-[10px]">▲</span> 365
                      </span>
                    </div>

                    <div className="grid grid-cols-3 items-center px-2 py-1.5 hover:bg-neutral-50 rounded-lg">
                      <div className="flex items-center space-x-2 font-bold text-neutral-800">
                        <span className="text-blue-800 font-extrabold">EUR</span>
                      </div>
                      <span className="text-right text-red-600 font-semibold flex items-center justify-end gap-1">
                        <span className="text-[10px]">▼</span> 411
                      </span>
                      <span className="text-right text-green-600 font-semibold flex items-center justify-end gap-1">
                        <span className="text-[10px]">▲</span> 422
                      </span>
                    </div>

                    <div className="grid grid-cols-3 items-center px-2 py-1.5 hover:bg-neutral-50 rounded-lg">
                      <div className="flex items-center space-x-2 font-bold text-neutral-800">
                        <span className="text-blue-900 font-extrabold">RUB</span>
                      </div>
                      <span className="text-right text-red-600 font-semibold flex items-center justify-end gap-1">
                        <span className="text-[10px]">▼</span> 4.16
                      </span>
                      <span className="text-right text-green-600 font-semibold flex items-center justify-end gap-1">
                        <span className="text-[10px]">▲</span> 4.3
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Թաբ 1: Անկանխիկ */}
              {activeTab === 1 && (
                <div>
                  <div className="grid grid-cols-3 text-xs text-neutral-400 font-semibold mb-4 px-2">
                    <span>Արտարժույթ</span>
                    <span className="text-right">Առք</span>
                    <span className="text-right">Վաճառք</span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-3 items-center px-2 py-1.5 hover:bg-neutral-50 rounded-lg">
                      <span className="font-bold text-neutral-800">USD</span>
                      <span className="text-right text-red-600 font-semibold flex items-center justify-end gap-1"><span className="text-[10px]">▼</span> 361</span>
                      <span className="text-right text-green-600 font-semibold flex items-center justify-end gap-1"><span className="text-[10px]">▲</span> 365.5</span>
                    </div>
                    <div className="grid grid-cols-3 items-center px-2 py-1.5 hover:bg-neutral-50 rounded-lg">
                      <span className="font-bold text-neutral-800">EUR</span>
                      <span className="text-right text-red-600 font-semibold flex items-center justify-end gap-1"><span className="text-[10px]">▼</span> 411</span>
                      <span className="text-right text-green-600 font-semibold flex items-center justify-end gap-1"><span className="text-[10px]">▲</span> 422</span>
                    </div>
                    <div className="grid grid-cols-3 items-center px-2 py-1.5 hover:bg-neutral-50 rounded-lg">
                      <span className="font-bold text-neutral-800">RUB</span>
                      <span className="text-right text-red-600 font-semibold flex items-center justify-end gap-1"><span className="text-[10px]">▼</span> 4.24</span>
                      <span className="text-right text-green-600 font-semibold flex items-center justify-end gap-1"><span className="text-[10px]">▲</span> 4.39</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Թաբ 2: Ոսկու փոխարժեք */}
              {activeTab === 2 && (
                <div>
                  <div className="grid grid-cols-2 text-xs text-neutral-400 font-semibold mb-4 px-2">
                    <span>Հարգ</span>
                    <span className="text-right">Սահմանային (Արժեքը ՀՀ Դրամով 1 գրამის համար)</span>
                  </div>

                  <div className="space-y-3 text-sm">
                    {[{h: 375, p: '18,400'}, {h: 500, p: '24,600'}, {h: 583, p: '28,700'}, {h: 750, p: '36,900'}, {h: 875, p: '43,000'}, {h: 900, p: '44,300'}, {h: 958, p: '47,100'}, {h: 999, p: '49,100'}].map((item, idx) => (
                      <div key={idx} className="grid grid-cols-2 items-center px-2 py-1.5 border-b border-neutral-100 last:border-0">
                        <span className="font-bold text-neutral-800">{item.h}</span>
                        <span className="text-right font-semibold text-neutral-900">{item.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Թաբ 3: Ռուբլու կանխիկ մուտք */}
              {activeTab === 3 && (
                <div>
                  <div className="grid grid-cols-2 text-xs text-neutral-400 font-semibold mb-4 px-2">
                    <span>Արտարժույթ</span>
                    <span className="text-right">Սահմանային</span>
                  </div>

                  <div className="grid grid-cols-2 items-center px-2 py-2">
                    <span className="font-bold text-neutral-800">RUB</span>
                    <span className="text-right font-semibold text-neutral-900">10%</span>
                  </div>
                </div>
              )}

              {/* Ներքևի թարմացման ժամը և հղումը */}
              <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Թարմացվել է՝ 17:09:25</span>
                <a href="#all" className="text-[#6400dc] hover:underline font-medium">Այլ արժույթներ</a>
              </div>

            </div>

          </div>

          {/* աջ մաս՝ Մեր հասցեները (Քարտի նկարով և հղումով) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 pt-2">
            <h3 className="text-xl font-bold text-neutral-900">
              Մեր հասցեները
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Բանկի հասցեները, աշխատաժամերը, բանկոմատները
            </p>

            {/* Քարտի նկարը */}
            <div className="pt-2">
              <img 
                src="https://www.evoca.am/img/addresses.png" 
                alt="Evoca Addresses Map" 
                className="w-full max-w-[280px] h-auto object-contain drop-shadow-md"
              />
            </div>

            {/* «Դիտել քարտեզը» կոճակ */}
            <div>
              <a 
                href="#map" 
                className="inline-flex items-center space-x-1 text-sm font-bold text-[#6400dc] hover:text-[#5200b3] transition-colors"
              >
                <span>Դիտել քարտեզը</span>
                <span className="text-lg leading-none">&gt;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default EvocaCalculator;