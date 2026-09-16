// import React from 'react';
// import Footer from './footer';

// function Bukletner({ setActiveTab }) {
//   const bookletsList = [
//     {
//       id: 1,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/Car%20Parking_Web_Visual.png',
//       pdfUrl: 'https://www.evoca.am/file_manager/parking%20loan.pdf'
//     },
//     {
//       id: 2,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/%D4%B1%D5%BE%D5%BF%D5%B8%D5%B4%D5%A5%D6%84%D5%A5%D5%B6%D5%A1%D5%B5%D5%AB-%D5%B1%D5%A5%D5%BC%D6%84%D5%A2%D5%A5%D6%80%D5%B4%D5%A1%D5%B6-%D5%B6%D5%BA%D5%A1%D5%BF%D5%A1%D5%AF%D5%B8%D5%BE-%D5%BE%D5%A1%D6%80%D5%AF.png',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/car-loan_Booklet.pdf'
//     },
//     {
//       id: 3,
//       url: 'https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%86%D5%87%D4%B1%D5%90%D4%BA-%D4%B5%D5%8E-%D5%87%D4%B1%D5%90%D4%BA%D4%B1%D4%BF%D4%B1%D5%86-%D4%B3%D5%88%D5%92%D5%85%D5%94%D4%BB-%D4%B3%D5%90%D4%B1%D5%8E%D5%88%D5%8E-%D5%8E%D4%B1%D5%90%D4%BF%D5%95%D5%99.png',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%86%D5%87%D4%B1%D5%90%D4%BA%20%D6%87%20%D5%B7%D5%A1%D6%80%D5%AA%D5%A1%D5%BA%D5%A1%D5%B6%20%D5%A3%D5%B8%D6%82%D5%B5%D5%A9%D5%AB%20%D5%A3%D6%80%D5%A1%D5%BE%D5%B8%D5%BE%20%D5%BE%D5%A1%D6%80%D5%AF%D5%A5%D6%80.pdf'
//     },
//     {
//       id: 4,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/5-mortgage-loans.jpg',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/2024/%D5%80%D5%AB%D5%B8%D5%A9%D5%A5%D6%84%D5%A1%D5%B5%D5%AB%D5%B6-%D5%BE%D5%A1%D6%80%D5%AF%D5%A5%D5%B0-04.10.24.pdf'
//     },
//     {
//       id: 5,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/6-business-loans.jpg',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/%D4%B2%D5%AB%D5%A6%D5%B6%D5%A5%D5%BD-%D5%8E%D5%A1%D6%80%D5%AF%D5%A5%D5%B0-19-08-2022%20.pdf'
//     },
//     {
//       id: 6,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/10-gold-secured-loans.jpg',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/%D5%88%D5%BD%D5%AF%D5%B8%D6%82%20%D5%A3%D6%80%D5%A1%D5%BE%D5%B8%D5%BE%20%D5%BE%D5%A1%D6%80%D5%AF%D5%A5%D6%80.pdf'
//     },
//     {
//       id: 7,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/11-safe-deposit-boxes.jpg',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/%D5%8A%D5%A1%D5%B...19-08-2022.pdf'
//     },
//     {
//       id: 8,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/12-factoring.jpg',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/Images/12-factoring.jpg'
//     },
//     {
//       id: 9,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/%D4%B4%D6%80%D5%A1%D5%B...png',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/%D4%B4%D6%80%D5%A1%D5%B4%D...pdf'
//     },
//     {
//       id: 10,
//       url: 'https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%B6%D5%A3%D6%80%D5%A1%D5%BE...png',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/2026/%D4%B5%D6%80%D5%A1%D5%B...pdf'
//     },
//     {
//       id: 11,
//       url: 'https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%BE%D5%A1%D...png',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D...2024.pdf'
//     },
//     {
//       id: 12,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/%D4%BC%D5%AB%D5%A...png',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/%D5%AC%D5%AB%D5%A6%D5%AB%D5%B6%D5%A3.pdf'
//     },
//     {
//       id: 13,
//       url: 'https://www.evoca.am/file_manager/Booklets/Images/%D5%B8%D6%82%D5...png',
//       pdfUrl: 'https://www.evoca.am/file_manager/Booklets/Images/%D5%B8%D6%82%D...png'
//     }
//   ];

//   return (
//     <div className="w-full bg-[#f4f4f4] min-h-screen font-sans text-neutral-800 flex flex-col justify-between">
//       <div>
//         {/* Header */}
//         <header className="w-full bg-white border-b border-gray-100 shadow-sm">
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
//         <div className="max-w-7xl mx-auto px-4 py-12 space-y-6">
          
//           {/* Հացի փշրանքներ / Breadcrumb */}
//           <div className="text-xs text-gray-500 flex items-center gap-2 mb-8">
//             <span className="cursor-pointer hover:text-[#6400dc]" onClick={() => setActiveTab && setActiveTab('home')}>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//               </svg>
//             </span>
//             <span>/</span>
//             <span className="text-neutral-800 font-medium">Բուկլետներ</span>
//           </div>

//           {/* Վերնագիր */}
//           <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight mb-8">
//             Բուկլետներ
//           </h1>

//           {/* Բուկլետների ցանկ */}
//           <div className="space-y-4">
//             {bookletsList.map((item) => (
//               <a 
//                 key={item.id}
//                 href={item.pdfUrl} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="block bg-white hover:bg-gray-50 transition-colors w-full shadow-xs"
//               >
//                 <div className="w-full flex justify-center items-center py-6 md:py-10">
//                   <img 
//                     src={item.url} 
//                     alt={`Բուկլետ ${item.id}`}
//                     className="max-w-full h-auto object-contain"
//                     style={{ maxHeight: '250px' }}
//                     onError={(e) => { e.target.style.display = 'none'; }}
//                   />
//                 </div>
//               </a>
//             ))}
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

// export default Bukletner;