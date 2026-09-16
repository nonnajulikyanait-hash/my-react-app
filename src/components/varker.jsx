// import React from 'react';

// function Varker() {
//   const businessLoans = [
//     {
//       id: 1,
//       title: "Արագ բիզնես վարկ/վարկային գիծ",
//       description: "Արագ ֆինանսավորում ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով:",
//       image: "https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png",
//       stats: [
//         { label: "ժամկետ", value: "Մինչև 60 ամիս" },
//         { label: "Սահմանաչափ կամ համարժեք արտարժույթ", value: "Մինչև 30 մլն ֏" },
//         { label: "Տարեկան տոկոսադրույք", value: "9.22%-17.89%" }
//       ]
//     },
//     {
//       id: 2,
//       title: "Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ",
//       description: "Evocabank-ը տրամադրում է բիզնես վարկ՝ տեքստիլ հումքի ներմուծման համար: Շտապեք դիմել, զարգացնել ձեր բիզնեսը և դառնալ ոլորտում մրցունակ:",
//       image: "https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png",
//       stats: [
//         { label: "ժամկետ", value: "Մինչև 36 ամիս" },
//         { label: "Սահմանաչափ կամ համարժեք արտարժույթ", value: "Մինչև 500 մլն ֏" },
//         { label: "Տոկոսադրույքի սուբսիդավորման չափ", value: "8%" }
//       ]
//     },
//     {
//       id: 3,
//       title: "Բիզնես վարկերի վերաֆինանսավորում",
//       description: "Տեղափոխեք ձեր բիզնես վարկը Evocabank, ստացեք վարկի վերաֆինանսավորում և լրացուցիչ ֆինանսավորում՝ ավելի հարմար պայմաններով:",
//       image: "https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png",
//       stats: [
//         { label: "ժամկետ", value: "36-120 ամիս" },
//         { label: "Գումար (ՀՀ դրամ կամ համարժեք արտարժույթ)", value: "15մլն-500մլն" },
//         { label: "Տարեկան անվանական տոկոսադրույք (ՀՀ դրամ)", value: "սկսած 12%" },
//         { label: "Տարեկան անվանական տոկոսադրույք (ԱՄՆ դոլար)", value: "սկսած 9%" }
//       ]
//     },
//     {
//       id: 4,
//       title: "Պարտատոմսերով ապահովված վարկ",
//       description: "Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել ձեր բիզնեսը:",
//       image: "https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png",
//       stats: []
//     },
//     {
//       id: 5,
//       title: "Խոշոր և ՓՄՁ բիզնես վարկ",
//       description: "Զարգացրե՛ք ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:",
//       image: "https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg",
//       stats: [
//         { label: "Կամ համարժեք արտարժույթ", value: "Մինչև 4 մլրդ ֏" },
//         { label: "ամիս", value: "Մինչև 180" },
//         { label: "Տոկոսադրույք", value: "սկսած 8.2%-ից" }
//       ]
//     },
//     {
//       id: 6,
//       title: "Evoca GO",
//       description: "Օգտվեք Եվրոպական ներդրումային բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից:",
//       image: "https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg",
//       stats: [
//         { label: "Սահմանաչափ", value: "Մինչև 500 մլն. ֏" },
//         { label: "Մարման ժամկետ", value: "Մինչև 90 ամիս" },
//         { label: "Տոկոսադրույք", value: "10.5 %" },
//         { label: "Մայր գումարի արտոնյալ ժամկետ (ոչ պարտադիր)", value: "Մինչև 30 ամիս" }
//       ]
//     },
//     {
//       id: 7,
//       title: "Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր",
//       description: "Եթե Դուք ցանկանում եք ձեռք բերել էներգաարդյունավետ սարքավորումներ և մեքենաներ կամ իրականացնել այլ էներգաարդյունավետ ներդրումներ, այս վարկատեսակը ձեզ համար է:",
//       image: "https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg",
//       stats: [
//         { label: "Սահմանաչափ", value: "Մինչև 500 մլն. ֏" },
//         { label: "Մարման ժամկետ", value: "Մինչև 5 տարի" },
//         { label: "Տոկոսադրույք", value: "սկսած 9%-ից" }
//       ]
//     },
//     {
//       id: 8,
//       title: "Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ",
//       description: "Մի՛ օգտագործեք կուտակված խնայողությունները. Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք:",
//       image: "https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg",
//       stats: [
//         { label: "Ավանդի գումարի մինչև", value: "95%" },
//         { label: "Պարտատոմսի գումարի մինչև", value: "80%" }
//       ]
//     },
//     {
//       id: 9,
//       title: "KfW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
//       description: "Եթե ցանկանում եք իրականացնել էներգաարդյունավետ և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով, այս ֆինանսավորումը ձեզ համար է:",
//       image: "https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg",
//       stats: [
//         { label: "Սահմանաչափ (ներառյալ առանց գրավի)", value: "մինչև 10 մլն. ֏" },
//         { label: "Տարեկան անվանական տոկոսադրույք", value: "9.5%" },
//         { label: "Մարման ժամկետ", value: "Մինչև 120 ամիս" }
//       ]
//     },
//     {
//       id: 10,
//       title: "Պարզ բիզնես վարկ",
//       description: "Ստացեք Պարզ բիզնես վարկ՝ անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով:",
//       image: "https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg",
//       stats: [
//         { label: "Սահմանաչափ", value: "Մինչև 50 մլն. ֏" },
//         { label: "Մարման ժամկետ", value: "Մինչև 60 ամիս" },
//         { label: "Տոկոսադրույք", value: "սկսած 7.5%-ից" }
//       ]
//     },
//     {
//       id: 11,
//       title: "Հաշվի վարկավորում",
//       description: "Հանդիսանում եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ ձեր բիզնեսի ընթացիկ ծախսերը:",
//       image: "https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg",
//       stats: [
//         { label: "Առավելագույնը", value: "500 մլն ֏" },
//         { label: "Մարման ժամկետ", value: "12 ամիս" },
//         { label: "Տոկոսադրույք", value: "սկսած 7%-ից" }
//       ]
//     },
//     {
//       id: 12,
//       title: "Վարկային գիծ",
//       description: "Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր եք և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ:",
//       image: "https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg",
//       stats: [
//         { label: "Սահմանաչափ", value: "Մինչև 1.5 մլրդ. ֏" },
//         { label: "Մարման ժամկետ", value: "Մինչև 5 տարի" },
//         { label: "Տոկոսադրույք", value: "սկսած 6%-ից" }
//       ]
//     },
//     {
//       id: 13,
//       title: "Արտադրողականության խթանման ծրագրի ներքո վարկ",
//       description: "Մատչելի ֆինանսավորում ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով:",
//       image: "https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg",
//       stats: [
//         { label: "Սահմանաչափ", value: "Մինչև 1 մլրդ ֏" },
//         { label: "Մարման ժամկետ", value: "Մինչև 120 ամիս" },
//         { label: "Տոկոսադրույք", value: "Սկսած 6%" }
//       ]
//     },
//     {
//       id: 14,
//       title: "KfW բանկի կողմից ՓՄՁ-ների ֆինանսավորում",
//       description: "Կատարե՛ք ձեր կապիտալ ներդրումները և իրականացրե՛ք բիզնես գործունեության նպատակները Evocabank-ի հետ:",
//       image: "https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png",
//       stats: [
//         { label: "Սահմանաչափ", value: "Մինչև 160 մլն. ֏" },
//         { label: "Մարման ժամկետ", value: "Մինչև 60 ամիս" },
//         { label: "Տոկոսադրույք", value: "սկսած 9.5%-ից" }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Բիզնես վարկեր վերնագրի հատված */}
//       <div className="bg-[#6400dc] text-white py-6 px-6 lg:px-16">
//         <h1 className="text-3xl lg:text-4xl font-extrabold">Բիզնես վարկեր</h1>
//       </div>

//       {/* Հիմնական բովանդակություն */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow">
//         <div className="space-y-8">
//           {businessLoans.map((loan) => (
//             <div 
//               key={loan.id} 
//               className="bg-white rounded-2xl shadow-md p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-100 transition-all hover:shadow-lg"
//             >
//               {/* Նկարը */}
//               <div className="w-full lg:w-[360px] shrink-0 flex justify-center">
//                 <img 
//                   src={loan.image} 
//                   alt={loan.title} 
//                   className="w-full max-w-[320px] h-[200px] object-cover rounded-xl shadow-sm"
//                 />
//               </div>

//               {/* Տեքստային մաս և պայմաններ */}
//               <div className="flex-grow space-y-4">
//                 <h2 className="text-2xl font-bold text-neutral-900">
//                   {loan.title}
//                 </h2>
//                 <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
//                   {loan.description}
//                 </p>

//                 {/* Վարկային ցուցանիշներ */}
//                 {loan.stats && loan.stats.length > 0 && (
//                   <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
//                     {loan.stats.map((stat, idx) => (
//                       <div key={idx} className="space-y-1">
//                         <div className="text-lg lg:text-xl font-black text-[#6400dc]">
//                           {stat.value}
//                         </div>
//                         <div className="text-xs text-gray-500 font-medium">
//                           {stat.label}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Մանրամասն կոճակ */}
//               <div className="shrink-0">
//                 <button 
//                   onClick={() => alert(`Բացվում է մանրամասն էջը՝ ${loan.title}`)}
//                   className="bg-[#f3efff] text-[#6400dc] hover:bg-[#6400dc] hover:text-white font-bold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm shadow-sm"
//                 >
//                   <span>Մանրամասն</span>
//                   <span className="text-lg">›</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Varker;