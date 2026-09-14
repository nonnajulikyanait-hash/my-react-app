// import React, { useState } from 'react';

// function Ayl({ setActiveTab }) {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [activeCategory, setActiveCategory] = useState('Այլ');

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleCategoryClick = (cat) => {
//     setActiveCategory(cat);

//     if (cat === 'Պարտատոմսեր' && setActiveTab) setActiveTab('harcer');
//     if (cat === 'Կարիերա' && setActiveTab) setActiveTab('kariera');
//     if (cat === 'Հիփոթեքային վարկեր' && setActiveTab) setActiveTab('hipoteq');
//     if (cat === 'Սպառողական վարկեր' && setActiveTab) setActiveTab('sparoxakan');
//     if (cat === 'EvocaTouch' && setActiveTab) setActiveTab('evocatouch');
//     if (cat === 'Փոխանցումներ' && setActiveTab) setActiveTab('poxancumner');
//     if (cat === 'Քարտեր' && setActiveTab) setActiveTab('qarter');
//     if (cat === 'Ավանդներ' && setActiveTab) setActiveTab('avandner');
//     if (cat === 'Այլ' && setActiveTab) setActiveTab('ayl');
//   };

//   const questionsList = [
//     {
//       q: "Evocabank-ը նոր բա՞նկ է ֆինանսական շուկայում:",
//       a: "Evocabank բրենդը ստեղծվել է 2017թ., սակայն բանկն ունի ավելի քան 29 տարվա փորձառություն:"
//     },
//     {
//       q: "Ի՞նչ է Evoca Benefits-ը։",
//       a: "Evoca Benefits-ը նոր նախագիծ է, որի շրջանակում Evoca բոլոր քարտապանները ստանում են բենեֆիթներ` զեղչեր, քեշբեքեր կամ այլ առավելություններ՝ 100-ից ավել գործընկերների մոտ՝ պարզապես վճարելով իրենց Evoca քարտերով:"
//     },
//     {
//       q: "Ի՞նչ բենեֆիթներից կարող են օգտվել Բանկի քարտապանները։",
//       a: "Բենեֆիթներն են՝\n• Զեղչ, որը կստանաք տեղում՝ վճարելով Ձեր Evoca քարտով:\n• Cashback, որը տվյալ ամսվա բոլոր գնումների համար հանրագումարային կփոխանցվի Ձեր քարտին մինչև հաջորդ ամսվա 20-ը։\n• Նվեր քարտ, որը կարող եք օգտագործել տեղում կամ Ձեր հաջորդ գնման ժամանակ։"
//     },
//     {
//       q: "Ի՞նչպես օգտվել բենեֆիթներից։",
//       a: "• Օֆլայն՝ խանութում, սրճարանում կամ վաճառակետում բենեֆիթներից օգտվելու համար պարզապես պետք է վճարել Ձեր Evoca քարտով: Վճարելուց առաջ պետք է զգուշացնել, որ Դուք վճարելու եք Evoca քարտով, որպեսզի աշխատակիցը կիրառի զեղչը՝ նախքան վճարումը։ Ի դեպ, կարող եք վճարել ֆիզիկական քարտով կամ Ձեր օնլայն դրամապանակին՝ Apple Pay-ին, Google Pay-ին կցված Evoca քարտով։\n• Օնլայն՝ կայքերում կամ հավելվածներում բենեֆիթներից օգտվելու համար հարկավոր է կայքի վճարման էջում մուտքագրել Ձեր Evoca քարտի տվյալները, և բենեֆիթն ավտոմատ կգործի։ Գնման ժամանակ կայքում Դուք կտեսնեք ապրանքի կամ ծառայության ամբողջական արժեքը, սակայն քարտից կգանձվի արդեն զեղչված գինը։\n• Եթե վճարելիս առաջացել է որևէ խնդիր, կարող եք կապ հաստատել մեզ հետ +37443010340 հեռախոսահամարով:"
//     },
//     {
//       q: "Քանի՞ անգամ է հնարավոր օգտվել Evoca բենեֆիթներից։",
//       a: "Evoca բենեֆիթներից կարող եք օգտվել անսահմանափակ՝ ընդամենը վճարելով Ձեր Evoca քարտով։"
//     },
//     {
//       q: "Եթե տվյալ գործընկերոջ մոտ արդեն գործում են զեղչեր, Evoca բենեֆիթները կգործե՞ն։",
//       a: "Բենեֆիթները տարբեր են, յուրաքանչյուր գործընկերոջ պայմանները կարող եք տեսնել վերևում՝ տվյալ գործընկերոջ նկարագրությունում։"
//     },
//     {
//       q: "Evocabank-ի ո՞ր քարտերն ունեն բենեֆիթներ։",
//       a: "Բենեֆիթները տրամադրվում են բոլոր Evoca քարտերի համար: Էջի վերևում` Քարտատեսակ բաժնից, կարող եք ընտրել քարտի տեսակը և տեսնել հենց Ձեր քարտին տրամադրվող բենեֆիթները։"
//     },
//     {
//       q: "Ինչպե՞ս պատվիրել Evoca քարտ։",
//       a: "Քարտ կարող եք պատվիրել evoca.am կայքի կամ EvocaTOUCH հավելվածի միջոցով, ինչպես նաև մոտենալով Evocabank-ի ցանկացած գրասենյակ։"
//     },
//     {
//       q: "Ինչպե՞ս կարող է իմ բիզնեսը միանալ Evoca Benefits ծրագրին։",
//       a: "Ձգտելով մեր հաճախորդներին տրամադրել լավագույն առաջարկներն ու լուծումները՝ մենք միշտ բաց ենք համագործակցությունների համար։ Միանալու համար կարող եք կապ հաստատել մեր թիմի հետ՝\n📞 +37443010340\n📧 benefits@evoca.am\nՄեր մասնագետները սիրով կպատասխանեն Ձեր բոլոր հարցերին և կներկայացնեն համագործակցության հնարավոր տարբերակները։"
//     },
//     {
//       q: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին։",
//       a: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից։"
//     },
//     {
//       q: "Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում։",
//       a: "Ո՛չ։ Բավական է ձեր գործատուին ներկայացնել Evoca քարտի տվյալները, և աշխատավարձը կփոխանցվի արդեն Evoca-ում բացված հաշվին։"
//     },
//     {
//       q: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ։",
//       a: "Իհարկե՛։ Եթե դեռ Evoca-ի հաճախորդ չես, դու նույնպես կարող ես միանալ Evoca աշխատավարձային նախագծին:"
//     },
//     {
//       q: "Ե՞րբ կսկսեմ օգտվել արտոնություններից։",
//       a: "Արտոնություններից կարող ես օգտվել այն պահից, երբ առաջին աշխատավարձդ փոխանցվի Evocabank-ի քարտին։\nՔարտերի առավելությունները գործում են անմիջապես, իսկ վարկային առավելություններից կարող ես օգտվել աշխատավարձդ Բանկի քարտին մեկ անգամ ստանալուց հետո։"
//     },
//     {
//       q: "Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում։",
//       a: "Այո՛, կարող ես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարող ես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձդ, իսկ Evoca Travel Card-ը կարող ես ձեռք բերել 50% զեղչով։"
//     },
//     {
//       q: "Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար։",
//       a: "Միանալու համար կարող ես՝\n• Զանգահարել +37410605555 | 8444 հեռախոսահամարներով\n• Այցելել Evocabank-ի ցանկացած մասնաճյուղ և ստանալ խորհրդատվություն"
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
//               <span className="cursor-pointer hover:text-black">Կարիերա</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="cursor-pointer">Առցանց հայտեր</span>
//               <span className="cursor-pointer">Հետադարձ կապ</span>
//             </div>
//           </div>

//           <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//             <div className="flex items-center gap-8">
//               <h1 className="text-2xl font-black tracking-wider text-black">evoca</h1>
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

// export default Ayl;