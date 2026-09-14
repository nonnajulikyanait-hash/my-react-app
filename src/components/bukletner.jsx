import React from 'react';
import Footer from './footer';

function Bukletner({ setActiveTab }) {
  const bookletsList = [
    {
      id: 1,
      title: 'Ավտոկայանատեղի ձեռքբերման վարկ',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/Car%20Parking_Web_Visual.png',
      pdfUrl: 'https://www.evoca.am/file_manager/parking%20loan.pdf'
    },
    {
      id: 2,
      title: 'Ավտոմեքենայի ձեռք բերման նպատակով վարկ',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/%D4%B1%D5%BE%D5%BF%D5%B8%D5%B4%D5%A5%D6%84%D5%A5%D5%B6%D5%A1%D5%B5%D5%AB-%D5%B1%D5%A5%D5%BC%D6%84%D5%A2%D5%A5%D6%80%D5%B4%D5%A1%D5%B6-%D5%B6%D5%BA%D5%A1%D5%B5%D5%A1%D5%B6%D5%A1%D5%AF%D5%B8%D5%AC-%D5%BE%D5%A1%D6%88%D5%BF.png'
    },
    {
      id: 3,
      title: 'Անշարժ և շարժական գույքի գրավով վարկեր',
      url: 'https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%86%D5%87%D4%B1%D5%90%D4%BA-%D4%B5%D5%8E-%D5%87%D4%B1%D5%90%D4%BA%D4%B1%D4%BF%D4%B1%D5%86-%D4%B3%D5%88%D5%92%D5%85%D5%94%D4%BB-%D4%B3%D5%90%D4%B1%D5%AF%D5%95%D5%96%D5%88%D5%8E-%D5%8E%D4%B1%D5%90%D4%BF%D5%95%D5%99.png'
    },
    {
      id: 4,
      title: 'Հիփոթեքային վարկեր',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/5-mortgage-loans.jpg'
    },
    {
      id: 5,
      title: 'Բիզնես վարկեր',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/6-business-loans.jpg'
    },
    {
      id: 6,
      title: 'Ոսկու գրավով վարկեր',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/10-gold-secured-loans.jpg'
    },
    {
      id: 7,
      title: 'Անհատական պահատուփեր',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/11-safe-deposit-boxes.jpg'
    },
    {
      id: 8,
      title: 'Ֆակտորինգ',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/12-factoring.jpg'
    },
    {
      id: 9,
      title: 'Դրամարկղային գործառնությունների սակագներ',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/%D4%B4%D6%80%D5%A1%D5%B...md...'
    },
    {
      id: 10,
      title: 'Անկողմ սպառողական վարկ',
      url: 'https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%B6%D5%A3%D6%80%D5%A1%D5%BE-%D5%BD%D5%A...png'
    },
    {
      id: 11,
      title: 'Ավանդի և պարտատոմսի գրավով վարկեր',
      url: 'https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%B...png'
    },
    {
      id: 12,
      title: 'Լիզինգ',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/%D4%BC%D5%AB%D5%A...png'
    },
    {
      id: 13,
      title: 'Ուսանողական վարկեր',
      url: 'https://www.evoca.am/file_manager/Booklets/Images/%D5%B8%D6%82%D5...png'
    }
  ];

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        {/* Header */}
        <header className="w-full bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-600">
            <div className="flex gap-6">
              <span className="font-semibold text-black cursor-pointer">Անհատ</span>
              <span className="cursor-pointer hover:text-black">Բիզնես</span>
              <span className="cursor-pointer hover:text-black">Ակնթարթային վճարումներ</span>
              <span className="cursor-pointer hover:text-black">Մեր մասին</span>
              <span className="cursor-pointer hover:text-black">Նորություններ</span>
              <span className="cursor-pointer hover:text-black">Բլոգ</span>
              <span className="cursor-pointer hover:text-black">Կարիերա</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="cursor-pointer">Առցանց հայտեր</span>
              <span className="cursor-pointer">Հետադարձ կապ</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-black tracking-wider text-black cursor-pointer" onClick={() => setActiveTab && setActiveTab('home')}>evoca</h1>
            </div>
            <div>
              <a href="/online" className="bg-[#6400dc] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md hover:bg-[#5200b8] transition-colors">
                EvocaONLINE
              </a>
            </div>
          </div>
        </header>

        {/* Բովանդակություն */}
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          
          {/* Հացի փշրանքներ / Breadcrumb */}
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <span className="cursor-pointer hover:text-[#6400dc]" onClick={() => setActiveTab && setActiveTab('home')}>🏠</span>
            <span>/</span>
            <span className="text-neutral-800 font-medium">Բուկլետներ</span>
          </div>

          {/* Վերնագիր */}
          <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Բուկլետներ
          </h1>

          {/* Բուկլետների ցանկ (Համապատասխան ճշգրիտ ձևաչափով՝ ինչպես նկարներում) */}
          <div className="space-y-6">
            {bookletsList.map((item) => (
              <a 
                key={item.id}
                href={item.pdfUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-3xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 block"
              >
                <div className="w-full md:w-1/2 flex justify-center bg-gray-50/50 rounded-2xl p-6 h-[260px] items-center">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#5200b8] tracking-tight">
                    {item.title}
                  </h2>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default Bukletner;