// import React, { useState } from 'react';

// function Calculator() {
//   const [activeTab, setActiveTab] = useState('kantsik'); // 'kantsik', 'ankantsik', 'gold', 'terminal'

//   // Արտարժույթի հաշվիչի վիճակներ (Կանխիկ / Անկանխիկ)
//   const [haveAmount, setHaveAmount] = useState('1');
//   const [haveCurrency, setHaveCurrency] = useState('USD');
//   const [wantCurrency, setWantCurrency] = useState('AMD');

//   // Փոխարժեքների բազա (Գնում / Վաճառք)
//   const rates = {
//     USD: { buy: 361, sell: 365.5 },
//     EUR: { buy: 416, sell: 428 },
//     RUB: { buy: 4.18, sell: 4.32 },
//   };

//   // Անկանխիկ փոխարժեքներ
//   const cashlessRates = {
//     USD: { buy: 361, sell: 366 },
//     EUR: { buy: 416, sell: 428 },
//     RUB: { buy: 4.24, sell: 4.41 },
//   };

//   // Ոսկու փոխարժեքների աղյուսակ
//   const goldRates = [
//     { purity: 375, price: '19,000' },
//     { purity: 500, price: '25,300' },
//     { purity: 583, price: '29,500' },
//     { purity: 750, price: '38,000' },
//     { purity: 875, price: '44,300' },
//     { purity: 900, price: '45,600' },
//     { purity: 958, price: '48,500' },
//     { purity: 999, price: '50,600' },
//   ];

//   // Հաշվարկ
//   const calculateExchange = () => {
//     const val = parseFloat(haveAmount) || 0;
//     const currentRates = activeTab === 'ankantsik' ? cashlessRates : rates;

//     if (haveCurrency === 'AMD' && wantCurrency !== 'AMD') {
//       const rate = currentRates[wantCurrency]?.sell || 1;
//       return (val / rate).toFixed(2);
//     } else if (haveCurrency !== 'AMD' && wantCurrency === 'AMD') {
//       const rate = currentRates[haveCurrency]?.buy || 1;
//       return (val * rate).toFixed(2);
//     } else if (haveCurrency !== 'AMD' && wantCurrency !== 'AMD') {
//       const buyRate = currentRates[haveCurrency]?.buy || 1;
//       const sellRate = currentRates[wantCurrency]?.sell || 1;
//       const inAmd = val * buyRate;
//       return (inAmd / sellRate).toFixed(2);
//     }
//     return val.toFixed(2);
//   };

//   const currentRates = activeTab === 'ankantsik' ? cashlessRates : rates;

//   return (
//     <div className="w-full bg-white py-6 font-sans">
//       <div className="max-w-6xl mx-auto px-4">
        
//         {/* Վերին տեքստային բլոկը և հասցեների քարտը */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
          
//           {/* Ձախ կողմի տեքստ */}
//           <div className="lg:col-span-8 text-neutral-800 text-xs sm:text-sm leading-relaxed space-y-3">
//             <p>
//               20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով։ 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ։
//             </p>
//           </div>

//           {/* Աջ կողմի «Մեր հասցեները» քարտ (դարձված հղում) */}
//           <a 
//             href="https://www.evoca.am/hy/branches-and-atms" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="lg:col-span-4 bg-[#fbfbfb] border border-gray-100 rounded-xl p-4 shadow-sm flex items-center justify-between no-underline hover:border-gray-300 transition-all cursor-pointer"
//           >
//             <div className="space-y-1">
//               <h3 className="text-sm font-bold text-neutral-900">Մեր հասցեները</h3>
//               <p className="text-[11px] text-gray-500 leading-tight">Բանկի հասցեները, աշխատաժամերը, բանկոմատները</p>
//               <span className="text-[#6400dc] font-bold text-xs hover:underline pt-1 inline-block">
//                 Դիտել քարտեզը &gt;
//               </span>
//             </div>
//             <div className="w-16 h-16 flex-shrink-0">
//               <img 
//                 src="https://www.evoca.am/images-cache/branches/map_icon.png" 
//                 alt="Map" 
//                 className="w-full h-full object-contain"
//                 onError={(e)=>{e.target.style.display='none'}}
//               />
//             </div>
//           </a>

//         </div>

//         {/* Հաշվիչի հիմնական կոնտեյներ */}
//         <div className="bg-white border border-gray-200/60 rounded-2xl p-5 shadow-sm">
          
//           {/* Ներդիրների (Tabs) ընտրություն */}
//           <div className="flex space-x-6 border-b border-gray-100 pb-3 mb-5 overflow-x-auto scrollbar-none">
//             {[
//               { id: 'kantsik', label: 'Կանխիկ' },
//               { id: 'ankantsik', label: 'Անկանխիկ' },
//               { id: 'gold', label: 'Ոսկու փոխարժեք' },
//               { id: 'terminal', label: 'Ռուբլու կանխիկ մուտք' },
//             ].map((tab) => (
//               <button 
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`text-xs sm:text-sm font-bold cursor-pointer pb-1 transition-colors relative bg-transparent border-0 ${
//                   activeTab === tab.id ? 'text-[#6400dc]' : 'text-gray-400 hover:text-gray-600'
//                 }`}
//               >
//                 {tab.label}
//                 {activeTab === tab.id && <div className="absolute -bottom-3 left-0 w-full h-[2px] bg-[#6400dc]"></div>}
//               </button>
//             ))}
//           </div>

//           {/* ԲԱԺԻՆ 1 & 2: ԿԱՆԽԻԿ / ԱՆԿԱՆԽԻԿ */}
//           {(activeTab === 'kantsik' || activeTab === 'ankantsik') && (
//             <div>
//               <div className="grid grid-cols-3 text-[11px] font-bold text-gray-400 pb-2 border-b border-gray-100">
//                 <div>Արտարժույթ</div>
//                 <div className="text-center">Գնում</div>
//                 <div className="text-right">Վաճառք</div>
//               </div>

//               {[
//                 { code: 'USD', name: 'ԱՄՆ դոլար', icon: '🇺🇸', buy: currentRates.USD.buy, sell: currentRates.USD.sell },
//                 { code: 'EUR', name: 'Եվրո', icon: '🇪🇺', buy: currentRates.EUR.buy, sell: currentRates.EUR.sell },
//                 { code: 'RUB', name: 'Ռուսական ռուբլի', icon: '🇷🇺', buy: currentRates.RUB.buy, sell: currentRates.RUB.sell },
//               ].map((item, idx) => (
//                 <div key={idx} className="grid grid-cols-3 items-center py-3 border-b border-gray-50 text-xs sm:text-sm font-semibold text-neutral-900">
//                   <div className="flex items-center space-x-2">
//                     <span className="text-lg">{item.icon}</span>
//                     <span>{item.code}</span>
//                   </div>
//                   <div className="text-center text-green-600 flex items-center justify-center space-x-1">
//                     <span className="text-[10px]">🟢</span>
//                     <span>{item.buy}</span>
//                   </div>
//                   <div className="text-right text-red-500 flex items-center justify-end space-x-1">
//                     <span className="text-[10px]">🔴</span>
//                     <span>{item.sell}</span>
//                   </div>
//                 </div>
//               ))}

//               {/* Հաշվիչի ներքին հատվածը */}
//               <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//                 <div className="bg-gray-50/80 p-3 rounded-xl border border-gray-100">
//                   <label className="text-[11px] text-gray-400 block mb-1">Ունեմ</label>
//                   <div className="flex items-center justify-between">
//                     <input 
//                       type="number" 
//                       value={haveAmount}
//                       onChange={(e) => setHaveAmount(e.target.value)}
//                       className="bg-transparent text-base font-bold text-neutral-900 outline-none w-1/2 border-0"
//                     />
//                     <select 
//                       value={haveCurrency}
//                       onChange={(e) => setHaveCurrency(e.target.value)}
//                       className="bg-white border border-gray-200 rounded-lg px-2 py-1 font-bold text-xs text-[#6400dc] outline-none cursor-pointer"
//                     >
//                       <option value="AMD">AMD</option>
//                       <option value="USD">USD</option>
//                       <option value="EUR">EUR</option>
//                       <option value="RUB">RUB</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50/80 p-3 rounded-xl border border-gray-100">
//                   <label className="text-[11px] text-gray-400 block mb-1">Կստանամ</label>
//                   <div className="flex items-center justify-between">
//                     <span className="text-base font-bold text-neutral-900 w-1/2 overflow-hidden text-ellipsis">
//                       {calculateExchange()}
//                     </span>
//                     <select 
//                       value={wantCurrency}
//                       onChange={(e) => setWantCurrency(e.target.value)}
//                       className="bg-white border border-gray-200 rounded-lg px-2 py-1 font-bold text-xs text-[#6400dc] outline-none cursor-pointer"
//                     >
//                       <option value="AMD">AMD</option>
//                       <option value="USD">USD</option>
//                       <option value="EUR">EUR</option>
//                       <option value="RUB">RUB</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* ԲԱԺԻՆ 3: ՈՍԿՈՒ ՓՈԽԱՐԺԵՔ */}
//           {activeTab === 'gold' && (
//             <div>
//               <div className="grid grid-cols-2 text-[11px] font-bold text-gray-400 pb-2 border-b border-gray-100">
//                 <div>Հարգ</div>
//                 <div className="text-right">Սակագին (Արժեքը ՀՀ դրամով) 1 գրամի համար</div>
//               </div>

//               {goldRates.map((item, idx) => (
//                 <div key={idx} className="grid grid-cols-2 items-center py-2.5 border-b border-gray-50 text-xs sm:text-sm font-semibold text-neutral-900">
//                   <div>{item.purity}</div>
//                   <div className="text-right">{item.price}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* ԲԱԺԻՆ 4: ՌՈՒԲԼՈՒ ԿԱՆԽԻԿ ՄՈՒՏՔ */}
//           {activeTab === 'terminal' && (
//             <div>
//               <div className="grid grid-cols-2 text-[11px] font-bold text-gray-400 pb-2 border-b border-gray-100">
//                 <div>Արժույթ</div>
//                 <div className="text-right">Սակագին</div>
//               </div>

//               <div className="grid grid-cols-2 items-center py-3 border-b border-gray-50 text-xs sm:text-sm font-semibold text-neutral-900">
//                 <div>RUB</div>
//                 <div className="text-right">10%</div>
//               </div>
//             </div>
//           )}

//           {/* Թարմացման ամսաթիվ */}
//           <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400">
//             Թարմացվել է՝ 13.09.2026
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Calculator;