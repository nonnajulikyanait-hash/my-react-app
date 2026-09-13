import React from 'react';

function Header({ setActiveTab, activeTab }) {
  return (
    <header className="w-full font-sans bg-white border-b border-gray-200">
      {/* Վերին փոքր մենյու */}
      <div className="hidden lg:flex justify-between items-center px-10 py-3 text-sm text-gray-600 border-b border-gray-100">
        <div className="flex space-x-6 items-center">
          <button 
            onClick={() => setActiveTab('home')}
            className={`cursor-pointer bg-transparent border-0 font-medium transition-colors ${
              activeTab === 'home' 
                ? 'font-bold text-purple-700 border-b-2 border-purple-700 pb-0.5' 
                : 'hover:text-purple-700'
            }`}
          >
            Անհատ
          </button>
          <button 
            onClick={() => setActiveTab('biznes')}
            className={`cursor-pointer bg-transparent border-0 font-medium transition-colors ${
              activeTab === 'biznes' 
                ? 'font-bold text-purple-700 border-b-2 border-purple-700 pb-0.5' 
                : 'hover:text-purple-700'
            }`}
          >
            Բիզնես
          </button>
          <button 
            onClick={() => setActiveTab('akntartayinVcharumner')}
            className={`cursor-pointer bg-transparent border-0 font-medium transition-colors ${
              activeTab === 'akntartayinVcharumner' ? 'text-purple-700 font-bold' : 'hover:text-black'
            }`}
          >
            Ակնթարթային վճարումներ
          </button>
          <button 
            onClick={() => setActiveTab('merMasin')}
            className={`cursor-pointer bg-transparent border-0 font-medium transition-colors ${
              activeTab === 'merMasin' ? 'text-purple-700 font-bold' : 'hover:text-black'
            }`}
          >
            Մեր մասին
          </button>
          <button 
            onClick={() => setActiveTab('norutyunner')}
            className={`cursor-pointer bg-transparent border-0 font-medium transition-colors ${
              activeTab === 'norutyunner' ? 'text-purple-700 font-bold' : 'hover:text-black'
            }`}
          >
            Նորություններ
          </button>
          <button 
            onClick={() => setActiveTab('blog')}
            className={`cursor-pointer bg-transparent border-0 font-medium transition-colors ${
              activeTab === 'blog' ? 'text-purple-700 font-bold' : 'hover:text-black'
            }`}
          >
            Բլոգ
          </button>
          <button 
            onClick={() => setActiveTab('kariera')}
            className={`cursor-pointer bg-transparent border-0 font-medium transition-colors ${
              activeTab === 'kariera' ? 'text-purple-700 font-bold' : 'hover:text-black'
            }`}
          >
            Կարիերա
          </button>
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

      {/* Հիմնական նավիգացիա */}
      <div className="flex justify-between items-center px-6 lg:px-10 py-5">
        <div className="flex items-center">
          <button 
            onClick={() => setActiveTab('home')}
            className="text-4xl font-black text-neutral-800 tracking-tighter m-0 bg-transparent border-0 cursor-pointer"
          >
            evoca
          </button>
        </div>
        
        <nav className="hidden xl:flex space-x-7 text-lg font-medium text-neutral-800">
          <button 
            onClick={() => setActiveTab('varker')} 
            className={`bg-transparent border-0 cursor-pointer transition-colors ${activeTab === 'varker' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}
          >
            Վարկեր
          </button>
          <button 
            onClick={() => setActiveTab('karter')} 
            className={`bg-transparent border-0 cursor-pointer transition-colors ${activeTab === 'karter' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}
          >
            Քարտեր
          </button>
          <button 
            onClick={() => setActiveTab('avandner')} 
            className={`bg-transparent border-0 cursor-pointer transition-colors ${activeTab === 'avandner' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}
          >
            Ավանդներ
          </button>
          <button 
            onClick={() => setActiveTab('hashivner')} 
            className={`bg-transparent border-0 cursor-pointer transition-colors ${activeTab === 'hashivner' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}
          >
            Հաշիվներ
          </button>
          <button 
            onClick={() => setActiveTab('poxancumner')} 
            className={`bg-transparent border-0 cursor-pointer transition-colors ${activeTab === 'poxancumner' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}
          >
            Փոխանցումներ
          </button>
          <button 
            onClick={() => setActiveTab('arjetxter')} 
            className={`bg-transparent border-0 cursor-pointer transition-colors ${activeTab === 'arjetxter' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}
          >
            Արժեթղթեր
          </button>
          <button 
            onClick={() => setActiveTab('evocasalary')} 
            className={`bg-transparent border-0 cursor-pointer transition-colors ${activeTab === 'evocasalary' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}
          >
            EvocaSALARY
          </button>
          <button 
            onClick={() => setActiveTab('evocatouch')} 
            className={`bg-transparent border-0 cursor-pointer transition-colors ${activeTab === 'evocatouch' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}
          >
            EvocaTOUCH
          </button>
        </nav>

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