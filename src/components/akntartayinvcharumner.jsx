// import React from 'react';

// function AkntartayinVcharumner() {
//   const items = [
//     { 
//       title: "EVOCABANK", 
//       icon: "https://resource.evoca.am/images/WebPayment/evoca.png" 
//     },
//     { 
//       title: "Միջազգային բջջային օպերատորներ", 
//       icon: "https://resource.evoca.am/images/WebPayment/international.png" 
//     },
//     { 
//       title: "Կոմունալ վճարումներ", 
//       icon: "https://resource.evoca.am/images/WebPayment/utility.png" 
//     },
//     { 
//       title: "Ինտերնետ և TV", 
//       icon: "https://resource.evoca.am/images/WebPayment/internettv.png" 
//     },
//     { 
//       title: "ՃՈ վճարներ", 
//       icon: "https://resource.evoca.am/images/WebPayment/roadpolice.png" 
//     },
//     { 
//       title: "Վարկային կազմակերպություններ", 
//       icon: "https://resource.evoca.am/images/WebPayment/loan.png" 
//     },
//     { 
//       title: "Միջոցառումներ", 
//       icon: "https://resource.evoca.am/images/WebPayment/event.png" 
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
//       <div className="max-w-6xl mx-auto px-4 py-12 w-full">
//         <h1 className="text-3xl font-bold text-center text-neutral-800 mb-10">Գլխավոր</h1>

//         {/* Քառակուսիների ցանց (Grid) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
//           {items.map((item, index) => {
//             const isLast = index === items.length - 1;

//             return (
//               <div 
//                 key={index}
//                 className={`bg-white rounded-2xl p-8 h-64 flex flex-col items-center justify-center text-center shadow-sm border border-gray-200 transition-all duration-300 cursor-pointer hover:border-purple-600 hover:shadow-xl hover:ring-2 hover:ring-purple-600/20 group ${
//                   isLast ? 'lg:col-start-2' : ''
//                 }`}
//               >
//                 <div className="h-24 flex items-center justify-center mb-4">
//                   <img 
//                     src={item.icon} 
//                     alt={item.title} 
//                     className="max-h-20 max-w-[120px] object-contain group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <h3 className="text-neutral-800 font-semibold text-base sm:text-lg">
//                   {item.title}
//                 </h3>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Ստորին Ֆութեր (Footer) */}
//       <footer className="bg-white border-t border-gray-200 pt-12 pb-6 px-6 lg:px-16 text-gray-600 text-sm">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-10 border-b border-gray-200">
          
//           {/* Ձախ մաս՝ Լոգո և հասցե */}
//           <div className="space-y-3">
//             <div className="text-3xl font-black text-neutral-900 tracking-tighter">evocaBANK</div>
//             <p className="text-gray-600">ք. Երևան, 0010, Հանրապետության 44/2</p>
//             <p className="text-gray-500 text-xs">Բանկը վերահսկվում է ՀՀ ԿԲ-ի կողմից</p>
//             <p className="text-gray-400 text-xs">Copyright © 1990-2026 Evocabank</p>
//           </div>

//           {/* Մեջտեղի մաս՝ Էլ. փոստ և հեռախոս */}
//           <div className="space-y-2">
//             <p className="text-purple-700 font-medium hover:underline cursor-pointer">hello@evoca.am</p>
//             <p className="text-lg font-bold text-neutral-800">+374 10 605555</p>
//           </div>

//           {/* Աջ մաս՝ Սոց. ցանցեր, QR և App Store / Google Play */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
//             {/* Սոցցանցեր և Հավելվածների կոճակներ */}
//             <div className="flex flex-col space-y-4">
//               <div className="flex space-x-3">
//                 {['f', 'ig', 'yt', 'in', 'p'].map((net, i) => (
//                   <div key={i} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-purple-700 hover:text-white flex items-center justify-center text-xs font-bold transition-colors cursor-pointer text-gray-700">
//                     {net}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
//                   <img 
//                     src="https://resource.evoca.am/images/google_play_badge.png" 
//                     alt="Google Play" 
//                     className="h-10 object-contain cursor-pointer"
//                   />
//                 </a>
//                 <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
//                   <img 
//                     src="https://resource.evoca.am/images/app_store_badge.png" 
//                     alt="App Store" 
//                     className="h-10 object-contain cursor-pointer"
//                   />
//                 </a>
//               </div>
//             </div>

//             {/* QR կոդ */}
//             <div className="p-2 border border-gray-200 rounded-xl bg-white shadow-sm">
//               <img 
//                 src="https://payments.evoca.am/assets/images/qr-evoca.png" 
//                 alt="QR Code" 
//                 className="w-20 h-20 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Ամենաներքևի իրավական տեքստը և մոխրագույն փոքրիկ լոգոները */}
//         <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400 leading-relaxed">
//           <p className="max-w-3xl">
//             Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով...
//           </p>
//           <div className="flex items-center space-x-3 opacity-85">
//             <img src="https://payments.evoca.am/assets/images/cb.png" alt="CB" className="h-6 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
//             <img src="https://payments.evoca.am/assets/images/financial_systen_mediator.png" alt="Mediator" className="h-6 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
//             <img src="https://payments.evoca.am/assets/images/abc_finance.png" alt="ABC Finance" className="h-6 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
//             <img src="https://payments.evoca.am/assets/images/deposit_guarantee.png" alt="Deposit Guarantee" className="h-6 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
//             <img src="https://payments.evoca.am/assets/images/arca.png" alt="ArCa" className="h-6 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer" />
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default AkntartayinVcharumner;