import React from 'react';

function Header() {
  return (
    <header className="w-full font-sans bg-white border-b border-gray-200">
      {/* Վերին փոքր մենյու (ტառերը փոքր-ինչ մեծացված՝ text-sm) */}
      <div className="hidden lg:flex justify-between items-center px-10 py-3 text-sm text-gray-600 border-b border-gray-100">
        <div className="flex space-x-6">
          <span className="font-bold text-purple-700 border-b-2 border-purple-700 pb-0.5 cursor-pointer">Անհատ</span>
          <span className="cursor-pointer hover:text-black transition-colors">Բիզնես</span>
          <span className="cursor-pointer hover:text-black transition-colors">Ակնթարթային վճարումներ</span>
          <span className="cursor-pointer hover:text-black transition-colors">Մեր մասին</span>
          <span className="cursor-pointer hover:text-black transition-colors">Նորություններ</span>
          <span className="cursor-pointer hover:text-black transition-colors">Բլոգ</span>
          <span className="cursor-pointer hover:text-black transition-colors">Կարիերա</span>
        </div>
        <div className="flex items-center space-x-5">
          <span className="cursor-pointer hover:text-black">Առցանց հայտեր ▾</span>
          <span className="cursor-pointer hover:text-black">Հետադարձ կապ ▾</span>
          <span className="cursor-pointer">📍</span>
          <span className="cursor-pointer">🌐</span>
          <span className="cursor-pointer">🔍</span>
          <span className="cursor-pointer">☰</span>
        </div>
      </div>

      {/* Հիմնական նավիգացիա (Լոգո և հիմնական բաժիններ) */}
      <div className="flex justify-between items-center px-6 lg:px-10 py-5">
        {/* Լոգո */}
        <div className="flex items-center">
          <h1 className="text-4xl font-black text-neutral-800 tracking-tighter m-0">evoca</h1>
        </div>
        
        {/* Հիմնական մենյուի հղումներ (ավելի մեծ տառեր՝ text-lg) */}
        <nav className="hidden xl:flex space-x-7 text-lg font-medium text-neutral-800">
          <a href="#loans" className="hover:text-purple-700 transition-colors">Վարկեր</a>
          <a href="#cards" className="hover:text-purple-700 transition-colors">Քարտեր</a>
          <a href="#deposits" className="hover:text-purple-700 transition-colors">Ավանդներ</a>
          <a href="#accounts" className="hover:text-purple-700 transition-colors">Հաշիվներ</a>
          <a href="#transfers" className="hover:text-purple-700 transition-colors">Փոխանցումներ</a>
          <a href="#securities" className="hover:text-purple-700 transition-colors">Արժեթղթեր</a>
          <a href="#salary" className="hover:text-purple-700 transition-colors">EvocaSALARY</a>
          <a href="#touch" className="hover:text-purple-700 transition-colors">EvocaTOUCH</a>
        </nav>

        {/* EvocaONLINE կոճակ */}
        <div className="flex items-center space-x-4">
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-base px-7 py-3 rounded-full transition-colors cursor-pointer shadow-sm">
            EvocaONLINE
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
// test update 1