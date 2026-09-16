// import React, { useState } from 'react';

// function Harcer({ setActiveTab }) {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [activeCategory, setActiveCategory] = useState('Պարտատոմսեր');

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleCategoryClick = (cat) => {
//     setActiveCategory(cat);
//     setOpenIndex(null); // Կատեգորիա փոխելիս փակել բացված հարցը
//   };

//   // Բոլոր բաժինների հարցերը և պատասխանները ամբողջությամբ
//   const questionsData = {
//     'Պարտատոմսեր': [
//       {
//         q: "Ի՞նչ են բանկային պարտատոմսերը:",
//         a: "Բանկային պարտատոմսը բանկի կողմից թողարկված արժեթուղթ է, որը հավաստում է պարտատիրոջ իրավունքը՝ ստանալու պարտատոմսի անվանական արժեքը և դրա դիմաց հաշվեգրված տոկոսները սահմանված ժամկետում:"
//       },
//       {
//         q: "Որքա՞ն է պարտատոմսերի եկամտաբերությունը:",
//         a: "Evocabank-ի թողարկած պարտատոմսերն ունեն բարձր եկամտաբերություն, ընդ որում՝ ստացված տոկոսային եկամուտներն ազատված են եկամտային հարկից:"
//       },
//       {
//         q: "Ինչպե՞ս ձեռք բերել Evocabank-ի պարտատոմսեր:",
//         a: "Պարտատոմսեր ձեռք բերելու համար կարող եք այցելել Բանկի ցանկացած մասնաճյուղ կամ դրանք գնել EvocaTOUCH հավելվածի միջոցով:"
//       }
//     ],
//     'Կարիերա': [
//       {
//         q: "Ինչպե՞ս դիմել Evocabank-ում աշխատանքի համար:",
//         a: "Դուք կարող եք ուղարկել Ձեր ինքնակենսագրությունը (CV) մեր էլ. հասցեին կամ հետևել բաց թափուր աշխատատեղերին մեր պաշտոնական կայքում և լրացնել առցանց հայտը:"
//       },
//       {
//         q: "Ի՞նչ հնարավորություններ է առաջարկում Բանկն իր աշխատակիցներին:",
//         a: "Evocabank-ն առաջարկում է մասնագիտական զարգացման հնարավորություններ, դինամիկ և նորարար միջավայր, մրցունակ աշխատավարձ և այլ արտոնություններ:"
//       },
//       {
//         q: "Արդյո՞ք կազմակերպվում են վերապատրաստումներ նոր աշխատակիցների համար:",
//         a: "Այո, բոլոր նոր աշխատակիցներն անցնում են համապատասխան ուսուցում և վերապատրաստում մինչև աշխատանքին անցնելը:"
//       }
//     ],
//     'Հիփոթեքային վարկեր': [
//       {
//         q: "Ի՞նչ կանխավճար է պահանջվում հիփոթեքային վարկ ստանալու համար:",
//         a: "Կանխավճարի չափը կախված է գնվող գույքի տեսակից և շուկայից, սակայն սկսվում է համապատասխան նվազագույն շեմերից՝ հաճախակի սկսած 10%-ից:"
//       },
//       {
//         q: "Ո՞ր տարիքային շեմում է հնարավոր ստանալ հիփոթեքային վարկ:",
//         a: "Վարկառուն վարկի մարման պահին պետք է լինի առնվազն 18 տարեկան, իսկ վարկի առավելագույն ժամկետի ավարտին հաճախ տարիքային սահմանափակումը գործում է համաձայն բանկի ներքին կանոնակարգերի:"
//       },
//       {
//         q: "Ոρքա՞ն է հիփոթեքային վարկի առավելագույն ժամկետը:",
//         a: "Հիփոթեքային վարկերը տրամադրվում են մինչև 20-30 տարի ժամկետով՝ կախված վարկային ծրագրից:"
//       }
//     ],
//     'Սպառողական վարկեր': [
//       {
//         q: "Քանի՞ տարեկանից է հնարավոր ստանալ վարկ:",
//         a: "Evocabank-ում կարելի է վարկ ստանալ 18 տարեկանից, իսկ օնլայն վարկատեսակների դեպքում՝ 21 տարեկանից:"
//       },
//       {
//         q: "Ինչպե՞ս կատարել վարկի մարում ոչ աշխատանքային ժամերին:",
//         a: "Վարկի մարումները կարելի է կատարել EvocaTOUCH հավելվածով՝ ցանկացած ժամի, կամ TelCell, EasyPay, MobiDram և iDram տերմինալներով:"
//       },
//       {
//         q: "Կարո՞ղ եմ վարկ ստանալ, եթե այլ բանկերում ունեմ գործող վարկեր:",
//         a: "Այո, իհարկե կարող եք: Նոր վարկի հաստատումը կախված է տվյալ պահին Ձեր վարկային ծանրաբեռնվածությունից:"
//       },
//       {
//         q: "Կարելի՞ է ստանալ վարկ, եթե ունեմ վատ վարկային պատմություն:",
//         a: "Դրական վարկային պատմություն ունենալը խիստ ցանկալի է, սակայն որոշ դեպքերում փոքր ուշացումները կարող են հաշվի չառնվել:"
//       }
//     ],
//     'EvocaTouch': [
//       {
//         q: "Ինչպե՞ս դառնալ Evocatouch հավելվածի օգտատեր:",
//         a: "Անհրաժեշտ է Play Market-ից կամ App Store-ից ներբեռնել հավելվածը և կցել Ձեր քարտը կամ դիմել նոր քարտի համար:"
//       },
//       {
//         q: "Ի՞նչ կարող եմ անել EvocaTOUCH հավելվածով:",
//         a: "Հավելվածով հնարավոր է կատարել ավելի քան 300 տեսակի գործարք՝ բացել հաշիվներ, պատվիրել քարտ, դիմել վարկի, կատարել փոխանցումներ և վճարումներ:"
//       },
//       {
//         q: "Անվտա՞՞նգ է արդյոք օգտվել EvocaTOUCH հավելվածից:",
//         a: "Այո, հավելվածն ապահովված է ժամանակակից անվտանգության համակարգերով (biometric authentication, OTP կոդեր):"
//       }
//     ],
//     'Փոխանցումներ': [
//       {
//         q: "Ի՞նչ տարբերակներով կարող եմ կատարել փոխանցումներ:",
//         a: "EvocaTOUCH հավելվածի միջոցով կարող եք առանց բանկ մոտենալու կատարել փոխանցումներ ինչպես ՀՀ տարածքում, այնպես էլ ՀՀ տարածքից դուրս:"
//       },
//       {
//         q: "SWIFT փոխանցումներ կատարիս իմ գումարն ամբողջությա՞մբ է տեղ հասնում:",
//         a: "Կարող եք ընտրել միջնորդավճարի տարբերակը՝ վճարել ամբողջը նախապես (OUR) կամ թողնել, որ միջնորդ բանկերը պահումներ անեն (BEN):"
//       },
//       {
//         q: "Կարո՞ղ եմ գումար փոխանցել ոչ աշխատանքային ժամերի:",
//         a: "Այո, EvocaTOUCH հավելվածով հնարավոր է շուրջօրյա կատարել փոխանցումներ:"
//       }
//     ],
//     'Քարտեր': [
//       {
//         q: "Ո՞րն է MasterCard և VISA քարտերի տարբերությունը:",
//         a: "VISA և MasterCard վճարային համակարգերի միջև էական գործառնական տարբերություն չկա, երկուսն էլ միջազգային են և գործում են ամբողջ աշխարհում:"
//       },
//       {
//         q: "Ի՞նչ առավելություններ ունեն Evocabank-ի քարտերը:",
//         a: "Տրամադրվում են միջազգային չիպային քարտեր, contactless PayWave հնարավորությամբ, ինչպես նաև 2-44% զեղչեր գործընկեր վայրերում Evoca Benefits-ի շրջանակում:"
//       },
//       {
//         q: "Ինչու՞ է երկար տևում քարտից քարտ փոխանցումը:",
//         a: "Բանկոմատներով կամ arca.am-ով կատարված փոխանցումները քարտային հաշվին արտացոլվում են հաջորդ աշխատանքային օրը, իսկ հավելվածով կարող է ավելի արագ լինել:"
//       },
//       {
//         q: "Online փոխանցումները չեղարկելիս ե՞րբ է գումարը հետ նստում քարտին:",
//         a: "Գումարը քարտին հետ կմուտքագրվի մինչև 20 աշխատանքային օրվա ընթացքում՝ պայմանավորված միջազգային համակարգերի կանոններով:"
//       },
//       {
//         q: "Հնարավո՞ր է փոխել քարտի PIN ծածկագիրը:",
//         a: "Այո, հնարավոր է փոխել Evocabank-ի բանկոմատների միջոցով («Լրացուցիչ» բաժնից):"
//       }
//     ],
//     'Ավանդներ': [
//       {
//         q: "Վստահելի՞ է արդյոք ավանդ ներդնելը Evocabank-ում:",
//         a: "Evocabank-ը հիմնադրվել է 1990թ. և գործում է շուրջ 29 տարի: Բանկն իր գործունեության ընթացքում արժանացել է բազմաթիվ միջազգային մրցանակների և հանդիսանում է իր բոլոր հաճախորդների համար ազնիվ և վստահելի գործընկեր:\nԻ հավելումն, համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի` Evocabank-ում ներդրված բոլոր ավանդները երաշխավորված են Ավանդների փոխհատուցումը երաշխավորող հիմնադրամի կողմից:"
//       },
//       {
//         q: "Ի՞նչ է ավանդների հատուցումը երաշխավորող հիմնադրամը:",
//         a: "Ավանդների հատուցումը երաշխավորող հիմնադրամը շահույթ ստանալու նպատակ չհետապնդող իրավաբանական անձ է, որի նպատակն է ապահովել ՀՀ բանկային համակարգի կայունությունը:"
//       },
//       {
//         q: "Կարելի՞ է ավանդի գումարն օգտագործել պայմանագրի ժամկետից շուտ:",
//         a: "Ժամկետից շուտ գումարի ելքագրումը համարվում է ավանդային պայմանագրի խզում, ինչի հետևանքով տեղի է ունենում հաշվեգրված տոկոսների վերահաշվարկ:"
//       },
//       {
//         q: "Ի՞նչ է եկամտային հարկը, և որքա՞ն հարկ եմ վճարելու ավանդ ներդնելու դեպքում:",
//         a: "Ավանդների դիմաց վճարվող տոկոսագումարից պահվում է եկամտային հարկ, որը կազմում է տոկոսագումարի 10%-ը:"
//       }
//     ],
//     'Այլ': [
//       {
//         q: "Evocabank-ը նոր բա՞նկ է ֆինանսական շուկայում:",
//         a: "Evocabank բրենդը ստեղծվել է 2017թ., սակայն բանկն ունի ավելի քան 29 տարվա փորձառություն:"
//       },
//       {
//         q: "Ի՞նչ է Evoca Benefits-ը։",
//         a: "Evoca Benefits-ը նոր նախագիծ է, որի շրջանակում Evoca բոլոր քարտապանները ստանում են զեղչեր, քեշբեքեր կամ այլ առավելություններ ավելի քան 100 գործընկերների մոտ:"
//       },
//       {
//         q: "Ի՞նչ բենեֆիթներից կարող են օգտվել Բանկի քարտապանները։",
//         a: "Բենեֆիթներն են՝ զեղչ տեղում վճարելիս, Cashback ամսվա վերջում, և նվեր քարտեր:"
//       },
//       {
//         q: "Ինչպե՞ս պատվիրել Evoca քարտ։",
//         a: "Քարտ կարող եք պատվիրել evoca.am կայքի կամ EvocaTOUCH հավելվածի միջոցով, ինչպես նաև մոտենալով Evocabank-ի ցանկացած գրասենյակ։"
//       },
//       {
//         q: "Ինչպե՞ս կարող է իմ բիզնեսը միանալ Evoca Benefits ծրագրին։",
//         a: "Միանալու համար կարող եք կապ հաստատել մեր թիմի հետ benefits@evoca.am էլ. հասցեով կամ զանգահարել:"
//       }
//     ]
//   };

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

//   const currentQuestions = questionsData[activeCategory] || [];

//   return (
//     <div className="w-full bg-[#fcfcfc] min-h-screen font-sans text-neutral-800 flex flex-col justify-between">
//       <div>
//         {/* Header */}
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
//               <button 
//                 onClick={() => setActiveTab && setActiveTab('mutq')}
//                 className="bg-[#6400dc] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md hover:bg-[#5200b8] transition-colors cursor-pointer border-0"
//               >
//                 EvocaONLINE
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Էջի հիմնական բովանդակություն */}
//         <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
//           <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
//             Հաճախ տրվող հարցեր
//           </h1>

//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
//             {/* Ձախ կողմի մենյու */}
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
//                 {currentQuestions.map((item, index) => {
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

// export default Harcer;