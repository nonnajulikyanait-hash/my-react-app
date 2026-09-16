// import React from 'react';
// import Footer from './footer';

// function Dibrary({ setActiveTab }) {
//   const partnerImages = [
//     { id: 1, url: 'https://www.evoca.am/file_manager/Dibrary/1_Ebso.jpg' },
//     { id: 2, url: 'https://www.evoca.am/file_manager/Dibrary/Openstax.jpg' },
//     { id: 3, url: 'https://www.evoca.am/file_manager/Dibrary/5_Logo_OAPEN.png' },
//     { id: 4, url: 'https://www.evoca.am/file_manager/Dibrary/N.jpg' },
//     { id: 5, url: 'https://www.evoca.am/file_manager/Dibrary/2_Sp[1].jpg' },
//     { id: 6, url: 'https://www.evoca.am/file_manager/Dibrary/3_POlP.jpg' },
//     { id: 7, url: 'https://www.evoca.am/file_manager/Dibrary/431ea875.jpg' },
//     { id: 8, url: 'https://www.evoca.am/file_manager/Dibrary/RS.jpg' },
//     { id: 9, url: 'https://www.evoca.am/file_manager/Dibrary/Library.ru.jpg' },
//     { id: 10, url: 'https://www.evoca.am/file_manager/Dibrary/4_71691ad9.jpg' },
//     { id: 11, url: 'https://www.evoca.am/file_manager/Dibrary/e6797964.jpg' },
//     { id: 12, url: 'https://www.evoca.am/file_manager/Dibrary/NLA.jpg' },
//     { id: 13, url: 'https://www.evoca.am/file_manager/Dibrary/4_Doab.jpg' },
//     { id: 14, url: 'https://www.evoca.am/file_manager/Dibrary/1_c55c00d4.jpg' },
//     { id: 15, url: 'https://www.evoca.am/file_manager/Dibrary/OpD.jpg' },
//     { id: 16, url: 'https://www.evoca.am/file_manager/Dibrary/Duke.jpg' },
//     { id: 17, url: 'https://www.evoca.am/file_manager/Dibrary/5_JS[1].jpg' },
//     { id: 18, url: 'https://www.evoca.am/file_manager/Dibrary/2_OBP.jpg' },
//     { id: 19, url: 'https://www.evoca.am/file_manager/Dibrary/Sage.jpg' },
//     { id: 20, url: 'https://www.evoca.am/file_manager/Dibrary/3e144dee.jpg' },
//     { id: 21, url: 'https://www.evoca.am/file_manager/Dibrary/6_Quest.jpg' },
//     { id: 22, url: 'https://www.evoca.am/file_manager/Dibrary/Logo_Journals4free.png' },
//     { id: 23, url: 'https://www.evoca.am/file_manager/Dibrary/SD.jpg' },
//     { id: 24, url: 'https://www.evoca.am/file_manager/Dibrary/OKM.jpg' },
//     { id: 25, url: 'https://www.evoca.am/file_manager/Dibrary/dibrary-2.jpg' },
//     { id: 26, url: 'https://www.evoca.am/file_manager/Dibrary/4_Logo_OpenKnowledgeRepository.png' },
//     { id: 27, url: 'https://www.evoca.am/file_manager/Dibrary/Elg.jpg' },
//     { id: 28, url: 'https://www.evoca.am/file_manager/Dibrary/Search.jpg' },
//     { id: 29, url: 'https://www.evoca.am/file_manager/Dibrary/Logo_BookBoon.png' },
//     { id: 30, url: 'https://www.evoca.am/file_manager/Dibrary/ideas.png' }
//   ];

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
//               <span className="cursor-pointer hover:text-black">Կարիերա</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="cursor-pointer">Առցանց հայտեր</span>
//               <span className="cursor-pointer">Հետադարձ կապ</span>
//             </div>
//           </div>

//           <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//             <div className="flex items-center gap-8">
//               <h1 className="text-2xl font-black tracking-wider text-black cursor-pointer" onClick={() => setActiveTab && setActiveTab('home')}>evoca</h1>
//             </div>
//             <div>
//               <a href="/online" className="bg-[#6400dc] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md hover:bg-[#5200b8] transition-colors">
//                 EvocaONLINE
//               </a>
//             </div>
//           </div>
//         </header>

//         {/* Բովանդակություն */}
//         <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          
//           {/* Հացի փշրանքներ / Breadcrumb */}
//           <div className="text-xs text-gray-500 flex items-center gap-2">
//             <span className="cursor-pointer hover:text-[#6400dc]" onClick={() => setActiveTab && setActiveTab('home')}>🏠</span>
//             <span>/</span>
//             <span className="text-neutral-800 font-medium">Dibrary</span>
//           </div>

//           {/* Վերին բաժին (Վերնագիր, տեքստ և մեծ նկար կողքին) */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
//                 Dibrary - Digital Library
//               </h1>
//               <p className="text-gray-700 text-base leading-relaxed">
//                 Evocabank-ի նոր և գերժամանակակից «Թումանյան» մասնաճյուղում` Թումանյան 15 հասցեով, բացի ստանդարտ բանկային ծառայություններից, կգործի նաև <strong>Dibrary – digital library</strong>:
//               </p>
//             </div>
//             <div>
//               <img 
//                 src="https://www.evoca.am/images-cache/menu/1/16117479662777/780x585.jpg" 
//                 alt="Dibrary Interior" 
//                 className="w-full rounded-2xl shadow-md object-cover h-[350px]"
//               />
//             </div>
//           </div>

//           {/* Հիմնական տեքստային պարբերություններ */}
//           <div className="space-y-6 text-gray-700 text-base leading-relaxed bg-white p-8 rounded-3xl border border-gray-100 shadow-xs">
//             <p>
//               <strong>#dibrary</strong>-ում կարելի է անվճար օգտվել էլեկտրոնային բիզնես ռեսուրսներից՝ e-Duke Journals Scholarly Collection, ASTM Compass, Edward Elgar Publishing Journals, Mathematical Sciences Publishers Journals, Royal Society Journals Collection, SAGE Premier և այլն․․․
//             </p>
//             <p>
//               <strong>#dibrary</strong>-ի գրքերը, հոդվածները և հրապարակումները շարունակաբար համալրվելու են՝ ներառելով նաև համաշխարհային լավագույն համալսարանների փակ վճարովի ռեսուրսները։ Բացի էլեկտրոնային նյութերից, <strong>#dibrary</strong>-ում կարելի է գտնել նաև դասական գրքեր, ինչպես նաև ժամանակակից բիզնես գրականության բեսթսելլերները, որոնք կարելի է կարդալ տեղում, իսկ ցանկության դեպքում՝ նաև տանել տուն։
//             </p>
//             <p>
//               <strong>#dibrary</strong>-ի բացման գործում մեզ աջակցել են՝ <strong>DLAA</strong>-ը՝ Հայաստանի թվային գրադարանների ասոցիացիան (Digital Library Association of Armenia), Ավետիք Իսահակյանի անվան գրադարանը և <strong>American Corner Yerevan</strong>-ը։ Նրանց աջակցության շնորհիվ՝ <strong>#dibrary</strong>-ում կարելի է անվճար օգտվել այնպիսի հրատարակիչների նյութերից, որոնց անդամակցությունը բավականին թանկ է և շատերի համար՝ անհասանելի։
//             </p>
//           </div>

//           {/* Փոքրիկ պատկերների ցանց (Գործընկերների լոգոներ) */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-bold text-neutral-900">Գործընկերներ և ռեսուրսներ</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//               {partnerImages.map((img) => (
//                 <div 
//                   key={img.id} 
//                   className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center justify-center h-24 shadow-2xs hover:shadow-md transition-shadow"
//                 >
//                   <img 
//                     src={img.url} 
//                     alt={`Partner logo ${img.id}`} 
//                     className="max-h-14 max-w-full object-contain"
//                     onError={(e) => { e.target.style.display = 'none'; }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

// export default Dibrary;