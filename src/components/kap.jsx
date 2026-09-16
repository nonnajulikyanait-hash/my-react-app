// import React, { useState } from 'react';
// import Footer from './footer';

// function Kap({ setActiveTab }) {
//   // Վիճակներ ֆորմայի դաշտերի համար
//   const [personType, setPersonType] = useState('physical'); // 'physical' կամ 'legal'
//   const [contactType, setContactType] = useState('thanks'); // 'thanks' կամ 'suggestion'
//   const [formData, setFormData] = useState({
//     name: '',
//     surname: '',
//     phone: '',
//     email: '',
//     message: '',
//     captcha: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Ստուգում ենք՝ արդյոք պարտադիր դաշտերը լրացված են թե ոչ
//     if (
//       !formData.name.trim() ||
//       !formData.surname.trim() ||
//       !formData.phone.trim() ||
//       !formData.email.trim() ||
//       !formData.message.trim() ||
//       !formData.captcha.trim()
//     ) {
//       alert('Լրացրեք բոլոր դաշտերը');
//     } else {
//       alert('Հաջողությամբ ուղարկվեց');
//     }
//   };

//   return (
//     <div className="w-full bg-[#f4f4f4] min-h-screen font-sans text-neutral-800 flex flex-col justify-between">
//       <div>
//         {/* Header */}
//         <header className="w-full bg-white border-b border-gray-100 shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-600">
//             <div className="flex gap-6">
//               <span className="font-semibold text-black cursor-pointer" onClick={() => setActiveTab && setActiveTab('home')}>Անհատ</span>
//               <span className="cursor-pointer hover:text-black">Բիզնես</span>
//               <span className="cursor-pointer hover:text-black">Ակնթարթային վճարումներ</span>
//               <span className="cursor-pointer hover:text-black">Մեր մասին</span>
//               <span className="cursor-pointer hover:text-black">Նորություններ</span>
//               <span className="cursor-pointer hover:text-black">Բլոգ</span>
//               <span className="cursor-pointer hover:text-black">Կարիերա</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="cursor-pointer">Առցանց հայտեր</span>
//               <span className="cursor-pointer font-medium text-black">Հետադարձ կապ</span>
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
//         <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
          
//           {/* Հացի փշրանքներ / Breadcrumb */}
//           <div className="text-xs text-gray-500 flex items-center gap-2">
//             <span className="cursor-pointer hover:text-[#6400dc]" onClick={() => setActiveTab && setActiveTab('home')}>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//               </svg>
//             </span>
//             <span>/</span>
//             <span className="text-neutral-800 font-medium">Հետադարձ կապ</span>
//           </div>

//           {/* Վերնագիր */}
//           <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
//             Հետադարձ կապ
//           </h1>

//           {/* Աղյուսակ 1: Կոնտակտային տվյալներ */}
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden text-sm">
//             <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 last:border-b-0">
//               <div className="p-4 font-normal text-gray-700 bg-gray-50/50 md:border-r border-gray-200 flex items-center">
//                 Հասցե
//               </div>
//               <div className="p-4 md:col-span-2 text-neutral-800 flex items-center">
//                 ՀՀ, 0010 Երևան, Հանրապետության փող. 44/2 շենք
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 last:border-b-0">
//               <div className="p-4 font-normal text-gray-700 bg-gray-50/50 md:border-r border-gray-200 flex items-center">
//                 Հեռախոսահամար
//               </div>
//               <div className="p-4 md:col-span-2 text-neutral-800 space-y-1">
//                 <p>• +374 10 605555,</p>
//                 <p>• 84-44</p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 last:border-b-0">
//               <div className="p-4 font-normal text-gray-700 bg-gray-50/50 md:border-r border-gray-200 flex items-center">
//                 Էլ. փոստ
//               </div>
//               <div className="p-4 md:col-span-2 text-neutral-800 flex items-center">
//                 hello@evoca.am
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 last:border-b-0">
//               <div className="p-4 font-normal text-gray-700 bg-gray-50/50 md:border-r border-gray-200 flex items-center">
//                 SWIFT
//               </div>
//               <div className="p-4 md:col-span-2 text-neutral-800 flex items-center">
//                 PRML AM 22
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 last:border-b-0">
//               <div className="p-4 font-normal text-gray-700 bg-gray-50/50 md:border-r border-gray-200 flex items-center">
//                 Աշխատանքային ժամեր
//               </div>
//               <div className="p-4 md:col-span-2 text-neutral-800 flex items-center">
//                 9:00 - 18:00
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3">
//               <div className="p-4 font-normal text-gray-700 bg-gray-50/50 md:border-r border-gray-200 flex items-center">
//                 Հաճախորդների սպասարկման ժամեր
//               </div>
//               <div className="p-4 md:col-span-2 text-neutral-800 flex items-center">
//                 9:30 - 17:00
//               </div>
//             </div>
//           </div>

//           {/* Նկարագրություն */}
//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4 text-sm text-gray-700 leading-relaxed">
//             <p>
//               Մենք կցանկանայինք լսել ձեր մտքերը, առաջարկությունները, մտահոգությունները կամ ցանկացած խնդրի հետ կապված խնդիրները, որպեսզի կարողանանք բարելավել մեր ծառայությունները:
//             </p>
//             <p className="font-medium text-neutral-900 pt-2">
//               Հաղորդագրություն ուղարկելու համար լրացրեք ստորև բերված դաշտերը՝
//             </p>

//             {/* Ֆորմա */}
//             <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              
//               {/* Դուք հանդիսանում եք */}
//               <div className="space-y-2">
//                 <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider">
//                   Դուք հանդիսանում եք
//                 </label>
//                 <div className="flex gap-6">
//                   <label className="flex items-center gap-2 cursor-pointer text-sm">
//                     <input 
//                       type="radio" 
//                       name="personType" 
//                       checked={personType === 'physical'} 
//                       onChange={() => setPersonType('physical')}
//                       className="accent-[#6400dc]"
//                     />
//                     Ֆիզիկական անձ
//                   </label>
//                   <label className="flex items-center gap-2 cursor-pointer text-sm">
//                     <input 
//                       type="radio" 
//                       name="personType" 
//                       checked={personType === 'legal'} 
//                       onChange={() => setPersonType('legal')}
//                       className="accent-[#6400dc]"
//                     />
//                     Իրավաբանական անձ
//                   </label>
//                 </div>
//               </div>

//               {/* Հետադարձ կապի տեսակը */}
//               <div className="space-y-2">
//                 <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider">
//                   Հետադարձ կապի տեսակը <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex gap-6">
//                   <label className="flex items-center gap-2 cursor-pointer text-sm">
//                     <input 
//                       type="radio" 
//                       name="contactType" 
//                       checked={contactType === 'thanks'} 
//                       onChange={() => setContactType('thanks')}
//                       className="accent-[#6400dc]"
//                     />
//                     Հայտնել շնորհակալություն
//                   </label>
//                   <label className="flex items-center gap-2 cursor-pointer text-sm">
//                     <input 
//                       type="radio" 
//                       name="contactType" 
//                       checked={contactType === 'suggestion'} 
//                       onChange={() => setContactType('suggestion')}
//                       className="accent-[#6400dc]"
//                     />
//                     Ներկայացնել առաջարկ
//                   </label>
//                 </div>
//               </div>

//               {/* Անուն */}
//               <div className="space-y-1">
//                 <label className="block text-xs font-medium text-neutral-700">
//                   Անուն <span className="text-red-500">*</span>
//                 </label>
//                 <input 
//                   type="text" 
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#6400dc]"
//                 />
//               </div>

//               {/* Ազգանուն */}
//               <div className="space-y-1">
//                 <label className="block text-xs font-medium text-neutral-700">
//                   Ազգանուն <span className="text-red-500">*</span>
//                 </label>
//                 <input 
//                   type="text" 
//                   name="surname"
//                   value={formData.surname}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#6400dc]"
//                 />
//               </div>

//               {/* Հեռ. */}
//               <div className="space-y-1">
//                 <label className="block text-xs font-medium text-neutral-700">
//                   Հեռ. <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-[#6400dc]">
//                   <div className="bg-gray-100 px-3 py-2 flex items-center gap-1 text-xs border-r border-gray-300">
//                     <span>🇦🇲</span>
//                     <span>+374</span>
//                   </div>
//                   <input 
//                     type="text" 
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 text-sm focus:outline-none"
//                     placeholder="XX XXXXXX"
//                   />
//                 </div>
//               </div>

//               {/* Էլ. փոստ */}
//               <div className="space-y-1">
//                 <label className="block text-xs font-medium text-neutral-700">
//                   Էլ. փոստ <span className="text-red-500">*</span>
//                 </label>
//                 <input 
//                   type="email" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#6400dc]"
//                 />
//               </div>

//               {/* Հաղորդագրություն */}
//               <div className="space-y-1">
//                 <label className="block text-xs font-medium text-neutral-700">
//                   Հաղորդագրություն <span className="text-red-500">*</span>
//                 </label>
//                 <textarea 
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#6400dc]"
//                 ></textarea>
//               </div>

//               {/* Կցել փաստաթուղթ */}
//               <div className="space-y-1">
//                 <label className="block text-xs font-medium text-neutral-700">
//                   Կցել փաստաթուղթ
//                 </label>
//                 <div className="border border-dashed border-gray-300 rounded p-4 flex items-center justify-between bg-gray-50/50">
//                   <span className="text-xs text-gray-500">Կցել ֆայլը</span>
//                   <button type="button" className="p-1 rounded hover:bg-gray-200 transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Ստուգման ծածկագիր */}
//               <div className="space-y-2">
//                 <label className="block text-xs font-medium text-neutral-700">
//                   Ստուգման ծածկագիր <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex items-center gap-4">
//                   <input 
//                     type="text" 
//                     name="captcha"
//                     placeholder="Մուտքագրել ծածկագիրը"
//                     value={formData.captcha}
//                     onChange={handleChange}
//                     className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#6400dc] w-48"
//                   />
//                   <div className="bg-gray-100 border border-gray-200 px-4 py-2 rounded flex items-center gap-3">
//                     <span className="font-serif italic tracking-widest text-lg font-bold text-gray-700 line-through select-none">
//                       AQ1G9j
//                     </span>
//                     <button type="button" className="text-gray-500 hover:text-black">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Ուղարկել կոճակ */}
//               <div className="pt-2">
//                 <button 
//                   type="submit" 
//                   className="bg-[#6400dc] text-white px-8 py-2.5 rounded font-medium text-sm shadow-md hover:bg-[#5200b8] transition-colors cursor-pointer"
//                 >
//                   Ուղարկել
//                 </button>
//               </div>

//             </form>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

// export default Kap;