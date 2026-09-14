// import React, { useState } from 'react';

// function Sparoxakan({ setActiveTab }) {
//   // Սլաքով բացվող-փակվող հարցերի state-ը
//   const [openIndex, setOpenIndex] = useState(null);
//   const [activeCategory, setActiveCategory] = useState('Սպառողական վարկեր');

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // Կատեգորիաների սեղմման տրամաբանությունը
//   const handleCategoryClick = (cat) => {
//     setActiveCategory(cat);

//     if (cat === 'Կարիերա' && setActiveTab) {
//       setActiveTab('kariera');
//     } else if (cat === 'Հիփոթեքային վարկեր' && setActiveTab) {
//       setActiveTab('hipoteq');
//     } else if (cat === 'Պարտատոմսեր' && setActiveTab) {
//       setActiveTab('harcer'); // Վերադարձ պարտատոմսերի/հարցերի էջ
//     } else if (cat === 'Սպառողական վարկեր' && setActiveTab) {
//       setActiveTab('sparoxakan');
//     }
//   };

//   // Սպառողական վարկերի հարցերի և պատասխանների տվյալները
//   const questionsList = [
//     {
//       q: "Քանի՞ տարեկանից է հնարավոր ստանալ վարկ:",
//       a: "Evocabank-ում կարելի է վարկ ստանալ 18 տարեկանից, իսկ օնլայն վարկատեսակների դեպքում՝ 21 տարեկանից:"
//     },
//     {
//       q: "Ինչպե՞ս կատարել վարկի մարում ոչ աշխատանքային ժամերին:",
//       a: "Վարկի մարումները կարելի է կատարել EvocaTOUCH հավելվածով՝ ցանկացած ժամի: Ոչ աշխատանքային ժամերին մարումները կարելի է կատարել նաև TelCell, EasyPay, MobiDram և iDram վճարային տերմինալներով՝ ֆինանսական հաստատությունների ցանկից ընտրելով Evocabank, Վարկի մարում և մուտքագրելով Ձեր տվյալները: Վարկի մարումները կարելի է կատարել Ձեր վարկի մարման օրը, մինչև 23:59:"
//     },
//     {
//       q: "Կարո՞ղ եմ վարկ ստանալ, եթե այլ բանկերում ունեմ գործող վարկեր:",
//       a: "Այո, իհարկե կարող եք: Նոր վարկի հաստատումը կախված է տվյալ պահին Ձեր վարկային ծանրաբեռնվածությունից: Մանրամասները անհրաժեշտ է քննարկել վարկային մասնագետի հետ՝ այցելելով Evocabank-ի ցանկացած մասնաճյուղ:"
//     },
//     {
//       q: "Կարելի՞ է ստանալ վարկ, եթե ունեմ վատ վարկային պատմություն:",
//       a: "Դրական վարկային պատմություն ունենալը վարկավորման դեպքում խիստ ցանկալի է, սակայն որոշ դեպքերում մի քանի օրվա ուշացումները կարող են հաշվի չառնվել՝ կախված տվյալ վարկատեսակից: Մանրամասները անհրաժեշտ է քննարկել վարկային մասնագետի հետ՝ այցելելով Evocabank-ի ցանկացած մասնաճյուղ:"
//     }
//   ];

//   const sidebarCategories = [
//     'Պարտատոմսեր',
//     'Կարիերա',
//     'Հիփոթեքային վարկեր',
//     'Սպառողական վարկեր',
//     'EvocaTouch',
//     'Փոխանցումներ',
//     'Քարտեր',
//     'Ավանդներ',
//     'Այլ'
//   ];

//   return (
//     <div className="w-full bg-[#fcfcfc] min-h-screen font-sans text-neutral-800 flex flex-col justify-between">
//       <div>
//         {/* Հավասար և մաքուր Header */}
//         <header className="w-full bg-white border-b border-gray-100">
//           <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-600">
//             <div className="flex gap-6">
//               <span className="font-semibold text-black cursor-pointer">Անհատ</span>
//               <span className="cursor-pointer hover:text-black">Բիզնես</span>
//               <span className="cursor-pointer hover:text-black">Ակնթարթային վճարումներ</span>
//               <span className="cursor-pointer hover:text-black">Մեր մասին</span>
//               <span className="cursor-pointer hover:text-black">Նորություններ</span>
//               <span className="cursor-pointer hover:text-black">Բլոգ</span>
//               <span className="cursor-pointer hover:text-black" onClick={() => setActiveTab && setActiveTab('kariera')}>Կարիերա</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="cursor-pointer">Առցանց հայտեր</span>
//               <span className="cursor-pointer">Հետադարձ կապ</span>
//             </div>
//           </div>

//           <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//             <div className="flex items-center gap-8">
//               <h1 className="text-2xl font-black tracking-wider text-black cursor-pointer" onClick={() => setActiveTab && setActiveTab('harcer')}>evoca</h1>
//             </div>
//             <div>
//               <a href="/online" className="bg-[#6400dc] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md hover:bg-[#5200b8] transition-colors">
//                 EvocaONLINE
//               </a>
//             </div>
//           </div>
//         </header>

//         {/* Էջի հիմնական բովանդակություն */}
//         <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          
//           <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
//             Հաճախ տրվող հարցեր
//           </h1>

//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
//             {/* ձախ կողմի մենյու */}
//             <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-1">
//               {sidebarCategories.map((cat, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => handleCategoryClick(cat)}
//                   className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
//                     activeCategory === cat 
//                       ? 'text-[#6400dc] font-bold bg-purple-50' 
//                       : 'text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   <span className="flex items-center gap-2">
//                     {activeCategory === cat && <span className="w-1 h-4 bg-[#6400dc] rounded-full"></span>}
//                     {cat}
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {/* Աջ կողմի հարցեր ու սլաքներ */}
//             <div className="lg:col-span-3 space-y-6">
              
//               <h2 className="text-2xl font-bold text-neutral-900 border-b border-gray-200 pb-4">
//                 {activeCategory}
//               </h2>

//               <div className="space-y-4">
//                 {questionsList.map((item, index) => {
//                   const isOpen = openIndex === index;
//                   return (
//                     <div 
//                       key={index} 
//                       className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
//                     >
//                       <button
//                         onClick={() => toggleAccordion(index)}
//                         className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-gray-50/50 transition-colors"
//                       >
//                         <span className="font-semibold text-neutral-900 text-sm lg:text-base">
//                           {item.q}
//                         </span>
//                         {/* Վերև-ներքև փոքր սլաք */}
//                         <svg 
//                           className={`w-5 h-5 text-[#6400dc] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
//                           fill="none" 
//                           stroke="currentColor" 
//                           viewBox="0 0 24 24"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </button>

//                       {isOpen && (
//                         <div className="px-6 pb-5 pt-1 text-gray-700 text-sm leading-relaxed border-t border-gray-100 whitespace-pre-line">
//                           {item.a}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>

//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sparoxakan;