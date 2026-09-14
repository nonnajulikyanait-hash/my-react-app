  // import React, { useState } from 'react';
  // import Footer from './footer'; // Եթե ֆայլի անունը փոքրատառով է կամ այլ, ուղղիր ըստ քո պանակի

  // function Hipoteq({ setActiveTab }) {
  //   // Սլաքով բացվող-փակվող հարցերի state-ը
  //   const [openIndex, setOpenIndex] = useState(null);
  //   const [activeCategory, setActiveCategory] = useState('Հիփոթեքային վարկեր');

  //   const toggleAccordion = (index) => {
  //     setOpenIndex(openIndex === index ? null : index);
  //   };

  //   // Կատեգորիաների սեղմման տրամաբանությունը
  //   const handleCategoryClick = (cat) => {
  //     setActiveCategory(cat);

  //     // Անցումներ այլ էջեր ըստ կատեգորիաների
  //     if (cat === 'Պարտատոմսեր') {
  //       if (setActiveTab) {
  //         setActiveTab('harcer');
  //       }
  //     }
  //     if (cat === 'Կարիերա') {
  //       if (setActiveTab) {
  //         setActiveTab('kariera');
  //       }
  //     }
  //     if (cat === 'Հիփոթեքային վարկեր') {
  //       if (setActiveTab) {
  //         setActiveTab('hipoteq');
  //       }
  //     }
  //   };

  //   // Հիփոթեքային վարկերին վերաբերող հարցերի և պատասխանների տվյալները
  //   const questionsList = [
  //     {
  //       q: "Ի՞նչ է նշանակում առաջնային շուկա, և ի՞նչ է նշանակում երկրորդային շուկա:",
  //       a: "Առաջնային շուկան անմիջապես կառուցապատողից ձեռք բերվող գույքի շուկան է, իսկ երկրորդայինը` արդեն առկա սեփականատիրոջից ձեռք բերվող գույքի շուկան:"
  //     },
  //     {
  //       q: "Հիփոթեքի ժամանակ պարտադի՞ր է, որ երկու ամուսիններն էլ գրանցված աշխատող լինեն, կամ երկուսն էլ աշխատեն:",
  //       a: "Ոչ, պարտադիր չէ:"
  //     },
  //     {
  //       q: "Ինչպե՞ս ստանալ հիփոթեքային վարկ, եթե նորաստեղծ ընտանիք եք, սակայն «Բնակարան երիտասարդներին» հիփոթեքային ծրագրով վարկավորման տարիքային շեմին չեք համապատասխանում:",
  //       a: "Կարող եք վարկավորվել Ազգային հիփոթեքային ընկերության ծրագրով կամ Evocabank-ի սեփական ռեսուրսներով:"
  //     },
  //     {
  //       q: "Հնարավո՞ր է ծրագրային հիփոթեք վերցնել անավարտ նորակառույց շենքերից:",
  //       a: "Եթե շենքը դեռ անավարտ է, ապա վարկավորումը հնարավոր է միայն այն դեպքում, եթե շենքի ավարտական ակտը պատրաստ լինի 270 օրվա ընթացքում:"
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

  // export default Hipoteq;