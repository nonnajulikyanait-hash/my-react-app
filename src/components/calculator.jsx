import React, { useState } from 'react';

function Calculator() {
  const [activeTab, setActiveTab] = useState('kantsik'); // 'kantsik', 'ankantsik', 'gold', 'terminal'

  // Արտարժույթի հաշվիչի վիճակներ (Կանխիկ / Անկանխիկ)
  const [haveAmount, setHaveAmount] = useState('1');
  const [haveCurrency, setHaveCurrency] = useState('USD');
  const [wantCurrency, setWantCurrency] = useState('AMD');

  // Փոխարժեքների բազա (Գնում / Վաճառք)
  const rates = {
    USD: { buy: 361, sell: 365.5 },
    EUR: { buy: 416, sell: 428 },
    RUB: { buy: 4.18, sell: 4.32 },
  };

  // Ոսկու փոխարժեքների աղյուսակ
  const goldRates = [
    { purity: 375, price: 19000 },
    { purity: 500, price: 25300 },
    { purity: 583, price: 29500 },
    { purity: 750, price: 38000 },
    { purity: 875, price: 44300 },
    { purity: 900, price: 45600 },
    { purity: 958, price: 48500 },
    { purity: 999, price: 50600 },
  ];

  // Ճշգրիտ հաշվարկ Կանխիկ/Անկանխիկի համար
  const calculateExchange = () => {
    const val = parseFloat(haveAmount) || 0;

    if (haveCurrency === 'AMD' && wantCurrency !== 'AMD') {
      const rate = rates[wantCurrency]?.sell || 1;
      return (val / rate).toFixed(2);
    } else if (haveCurrency !== 'AMD' && wantCurrency === 'AMD') {
      const rate = rates[haveCurrency]?.buy || 1;
      return (val * rate).toFixed(2);
    } else if (haveCurrency !== 'AMD' && wantCurrency !== 'AMD') {
      const buyRate = rates[haveCurrency]?.buy || 1;
      const sellRate = rates[wantCurrency]?.sell || 1;
      const inAmd = val * buyRate;
      return (inAmd / sellRate).toFixed(2);
    }
    return val.toFixed(2);
  };

  return (
    <div className="w-full bg-[#f8f9fa] py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Վերին տեքստային բլոկը և հասցեների քարտը */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Ձախ կողմի տեքստ */}
          <div className="lg:col-span-8 text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով։ 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ։
            </p>
          </div>

          {/* Աջ կողմի «Մեր հասցեները» քարտ */}
          <div className="lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-neutral-900">Մեր հասցեները</h3>
              <p className="text-xs text-gray-500">Բանկի հասցեները, աշխատաժամերը, բանկոմատները</p>
              <button className="text-[#6400dc] font-bold text-sm hover:underline pt-2 inline-block bg-transparent border-0 cursor-pointer">
                Դիտել քարտեզը &gt;
              </button>
            </div>
            <div className="w-20 h-20 flex-shrink-0">
              <img 
                src="https://www.evoca.am/images-cache/branches/map_icon.png" 
                alt="Map" 
                className="w-full h-full object-contain"
                onError={(e)=>{e.target.style.display='none'}}
              />
            </div>
          </div>

        </div>

        {/* Հաշվիչի հիմնական կոնտեյներ */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 lg:p-8 shadow-sm">
          
          {/* Ներդիրների (Tabs) ընտրություն */}
          <div className="flex space-x-8 border-b border-gray-100 pb-4 mb-6 overflow-x-auto scrollbar-none">
            <button 
              onClick={() => setActiveTab('kantsik')}
              className={`font-bold text-sm sm:text-base cursor-pointer pb-2 transition-colors relative bg-transparent border-0 ${
                activeTab === 'kantsik' ? 'text-[#6400dc]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Կանխիկ
              {activeTab === 'kantsik' && <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#6400dc] rounded-t-md"></div>}
            </button>

            <button 
              onClick={() => setActiveTab('ankantsik')}
              className={`font-bold text-sm sm:text-base cursor-pointer pb-2 transition-colors relative bg-transparent border-0 ${
                activeTab === 'ankantsik' ? 'text-[#6400dc]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Անկանխիկ
              {activeTab === 'ankantsik' && <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#6400dc] rounded-t-md"></div>}
            </button>

            <button 
              onClick={() => setActiveTab('gold')}
              className={`font-bold text-sm sm:text-base cursor-pointer pb-2 transition-colors relative bg-transparent border-0 ${
                activeTab === 'gold' ? 'text-[#6400dc]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Ոսկու փոխարժեք
              {activeTab === 'gold' && <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#6400dc] rounded-t-md"></div>}
            </button>

            <button 
              onClick={() => setActiveTab('terminal')}
              className={`font-bold text-sm sm:text-base cursor-pointer pb-2 transition-colors relative bg-transparent border-0 ${
                activeTab === 'terminal' ? 'text-[#6400dc]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Ռոբոտու կանխիկ մուտք
              {activeTab === 'terminal' && <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#6400dc] rounded-t-md"></div>}
            </button>
          </div>

          {/* ԲԱԺԻՆ 1 & 2: ԿԱՆԽԻԿ / ԱՆԿԱՆԽԻԿ */}
          {(activeTab === 'kantsik' || activeTab === 'ankantsik') && (
            <div>
              <div className="grid grid-cols-3 text-xs sm:text-sm font-bold text-gray-400 pb-4 border-b border-gray-100">
                <div>Արտարժույթ</div>
                <div className="text-center">Գնում</div>
                <div className="text-right">Վաճառք</div>
              </div>

              {[
                { code: 'USD', name: 'ԱՄՆ դոլար', icon: '🇺🇸', buy: rates.USD.buy, sell: activeTab === 'ankantsik' ? rates.USD.sell : 365.5 },
                { code: 'EUR', name: 'Եվրո', icon: '🇪🇺', buy: rates.EUR.buy, sell: rates.EUR.sell },
                { code: 'RUB', name: 'Ռուսական ռուբլի', icon: '🇷🇺', buy: rates.RUB.buy, sell: activeTab === 'ankantsik' ? 4.32 : rates.RUB.sell },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-3 items-center py-4 border-b border-gray-50 text-sm sm:text-base font-semibold text-neutral-900">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.code}</span>
                  </div>
                  <div className="text-center text-green-600 flex items-center justify-center space-x-1">
                    <span className="text-xs">🟢</span>
                    <span>{item.buy}</span>
                  </div>
                  <div className="text-right text-red-500 flex items-center justify-end space-x-1">
                    <span className="text-xs">🔴</span>
                    <span>{item.sell}</span>
                  </div>
                </div>
              ))}

              {/* Հաշվիչի հատվածը */}
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                  <label className="text-xs text-gray-500 block mb-1">Ունեմ</label>
                  <div className="flex items-center justify-between">
                    <input 
                      type="number" 
                      value={haveAmount}
                      onChange={(e) => setHaveAmount(e.target.value)}
                      className="bg-transparent text-xl font-bold text-neutral-900 outline-none w-1/2 border-0"
                    />
                    <select 
                      value={haveCurrency}
                      onChange={(e) => setHaveCurrency(e.target.value)}
                      className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 font-bold text-sm text-[#6400dc] outline-none cursor-pointer"
                    >
                      <option value="AMD">AMD</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="RUB">RUB</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                  <label className="text-xs text-gray-500 block mb-1">Կստանամ</label>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-neutral-900 w-1/2 overflow-hidden text-ellipsis">
                      {calculateExchange()}
                    </span>
                    <select 
                      value={wantCurrency}
                      onChange={(e) => setWantCurrency(e.target.value)}
                      className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 font-bold text-sm text-[#6400dc] outline-none cursor-pointer"
                    >
                      <option value="AMD">AMD</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="RUB">RUB</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ԲԱԺԻՆ 3: ՈՍԿՈՒ ՓՈԽԱՐԺԵՔ */}
          {activeTab === 'gold' && (
            <div>
              <div className="grid grid-cols-2 text-xs sm:text-sm font-bold text-gray-400 pb-4 border-b border-gray-100">
                <div>Հարգ</div>
                <div className="text-right">Մեկ գրամի դիմաց (ՀՀ դրամով) 1 գրամի համար</div>
              </div>

              {goldRates.map((item, idx) => (
                <div key={idx} className="grid grid-cols-2 items-center py-4 border-b border-gray-50 text-sm sm:text-base font-semibold text-neutral-900">
                  <div>{item.purity}</div>
                  <div className="text-right">{item.price.toLocaleString()}</div>
                </div>
              ))}
            </div>
          )}

          {/* ԲԱԺԻՆ 4: ՌՈԲՈՏՈՒ ԿԱՆԽԻԿ ՄՈՒՏՔ */}
          {activeTab === 'terminal' && (
            <div>
              <div className="grid grid-cols-2 text-xs sm:text-sm font-bold text-gray-400 pb-4 border-b border-gray-100">
                <div>Արտարժույթ</div>
                <div className="text-right">Սահմանային</div>
              </div>

              <div className="grid grid-cols-2 items-center py-4 border-b border-gray-50 text-sm sm:text-base font-semibold text-neutral-900">
                <div>RUB</div>
                <div className="text-right">10%</div>
              </div>
            </div>
          )}

          {/* Թարմացման ամսաթիվ */}
          <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-400">
            Թարմացվել է՝ {new Date().toLocaleDateString()}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Calculator; // (կամ export default Calculator;)