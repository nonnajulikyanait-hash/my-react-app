// import React, { useRef } from 'react';

// function Gortsyntrner() {
//   const scrollRef = useRef(null);

//   // 15 գործընկերների լոգոները
//   const partners = [
//     { id: 1, name: 'Partner 1', img: 'https://www.evoca.am/images-cache/partners/1/16104603665095/185x80_grayscale.png' },
//     { id: 2, name: 'Partner 2', img: 'https://www.evoca.am/images-cache/partners/1/16104604109064/185x80_grayscale.png' },
//     { id: 3, name: 'Partner 3', img: 'https://www.evoca.am/images-cache/partners/1/16104604382658/185x80_grayscale.png' },
//     { id: 4, name: 'Partner 4', img: 'https://www.evoca.am/images-cache/partners/1/17104032198171/185x80_grayscale.png' },
//     { id: 5, name: 'Partner 5', img: 'https://www.evoca.am/images-cache/partners/1/17077436606929/185x80_grayscale.png' },
//     { id: 6, name: 'Partner 6', img: 'https://www.evoca.am/images-cache/partners/1/17107493820339/185x80_grayscale.png' },
//     { id: 7, name: 'Partner 7', img: 'https://www.evoca.am/images-cache/partners/1/17072192942611/185x80_grayscale.png' },
//     { id: 8, name: 'Partner 8', img: 'https://www.evoca.am/images-cache/partners/1/17072192635138/185x80_grayscale.png' },
//     { id: 9, name: 'Partner 9', img: 'https://www.evoca.am/images-cache/partners/1/17072192435541/185x80_grayscale.png' },
//     { id: 10, name: 'Partner 10', img: 'https://www.evoca.am/images-cache/partners/1/16104577054001/185x80_grayscale.png' },
//     { id: 11, name: 'Partner 11', img: 'https://www.evoca.am/images-cache/partners/1/16104583322099/185x80_grayscale.png' },
//     { id: 12, name: 'Partner 12', img: 'https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png' },
//     { id: 13, name: 'Partner 13', img: 'https://www.evoca.am/images-cache/partners/1/16104594273635/185x80_grayscale.png' },
//     { id: 14, name: 'Partner 14', img: 'https://www.evoca.am/images-cache/partners/1/1610459808737/185x80_grayscale.png' },
//     { id: 15, name: 'Partner 15', img: 'https://www.evoca.am/images-cache/partners/1/16104599802947/185x80_grayscale.png' },
//   ];

//   // Վերջին նորությունների տվյալները
//   const newsList = [
//     {
//       id: 1,
//       category: 'Կենսակերպ',
//       title: 'Դիլիջան, մենք գալիս ենք',
//       date: '11.09.2026',
//       img: 'https://www.evoca.am/images-cache/news/1/17891134831451/439x320.png',
//     },
//     {
//       id: 2,
//       category: 'Կենսակերպ',
//       title: 'Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր',
//       date: '03.09.2026',
//       img: 'https://www.evoca.am/images-cache/news/1/17884237814941/439x320.png',
//     },
//     {
//       id: 3,
//       category: 'Պրոդուկտներ',
//       title: 'Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով',
//       date: '31.08.2026',
//       img: 'https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png',
//     },
//   ];

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="w-full bg-white font-sans py-16 space-y-20">
      
//       {/* 1. ԳՈՐԾԸՆԿԵՐՆԵՐԻ ԲԱԺԻՆ */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="bg-[#fbfbfb] border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          
//           {/* Ձախ մաս՝ Տեքստ */}
//           <div className="lg:col-span-5 space-y-6">
//             <h2 className="text-3xl font-bold text-neutral-900">Գործընկերներ</h2>
//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//               Դարձեք Evocabank-ի գործընկեր և եկեք միասին գնանք դեպի նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք եք գործում ժամանակակից և յուրահատուկ աշխարհ:
//             </p>
//             <div>
//               <button className="bg-[#6400dc] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-purple-800 transition-colors cursor-pointer">
//                 Բոլոր գործընկերները &gt;
//               </button>
//             </div>
//           </div>

//           {/* Աջ մաս՝ Սայդեր բոլոր 15 լոգոներով */}
//           <div className="lg:col-span-7 relative flex items-center">
//             <button 
//               onClick={scrollLeft}
//               className="absolute -left-4 z-10 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
//             >
//               &lt;
//             </button>

//             <div 
//               ref={scrollRef}
//               className="flex space-x-6 overflow-x-auto scrollbar-none py-4 px-2 w-full scroll-smooth"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {partners.map((partner) => (
//                 <div 
//                   key={partner.id} 
//                   className="bg-white border border-gray-100 rounded-2xl p-6 min-w-[200px] h-[120px] flex items-center justify-center shadow-sm flex-shrink-0 hover:shadow-md transition-shadow"
//                 >
//                   <img 
//                     src={partner.img} 
//                     alt={partner.name} 
//                     className="max-h-16 max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
//                   />
//                 </div>
//               ))}
//             </div>

//             <button 
//               onClick={scrollRight}
//               className="absolute -right-4 z-10 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
//             >
//               &gt;
//             </button>
//           </div>

//         </div>
//       </div>


//       {/* 2. ՎԵՐՋԻՆ ՆՈՐՈՒԹՅՈՒՆՆԵՐԻ ԲԱԺԻՆ */}
//       <div className="max-w-7xl mx-auto px-6 space-y-8">
        
//         {/* Վերնագիր և «Բոլոր նորությունները» կոճակ */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-3xl font-bold text-neutral-900">Վերջին նորությունները</h2>
//           <button className="bg-purple-100 text-[#6400dc] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-purple-200 transition-colors cursor-pointer">
//             Բոլոր նորությունները &gt;
//           </button>
//         </div>

//         {/* Նորությունների քարտերի ցանց (Grid) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {newsList.map((news) => (
//             <div 
//               key={news.id}
//               className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
//             >
//               {/* Նկարի բլոկ */}
//               <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
//                 <img 
//                   src={news.img} 
//                   alt={news.title} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* Տեքստային բլոկ */}
//               <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
//                 <div className="space-y-2">
//                   <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
//                     | {news.category}
//                   </span>
//                   <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#6400dc] transition-colors leading-snug">
//                     {news.title}
//                   </h3>
//                 </div>
//                 <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
//                   {news.date}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Gortsyntrner;