import React from 'react';

function Header({ activeTab, setActiveTab }) {
  // Ստուգում ենք արդյոք գտնվում ենք Բիզնես բաժնում թե Անհատ
  const isBusinessTab = [
    'business', 
    'business-varker', 
    'business-leasing', 
    'business-hashivner', 
    'business-avandner', 
    'business-arjetxter', 
    'business-arevtur', 
    'business-digital', 
    'business-ayl'
  ].includes(activeTab);

  return (
    <header className="w-full font-sans bg-white border-b border-gray-200">
      {/* Վերին փոքր մենյու */}
      <div className="hidden lg:flex justify-between items-center px-10 py-3 text-sm text-gray-600 border-b border-gray-100">
        <div className="flex space-x-6">
          {/* Անհատ կոճակ */}
          <span 
            onClick={() => setActiveTab('home')}
            className={`cursor-pointer transition-colors ${
              !isBusinessTab
                ? 'font-bold text-purple-700 border-b-2 border-purple-700 pb-0.5' 
                : 'hover:text-black'
            }`}
          >
            Անհատ
          </span>

          {/* Բիզնես կոճակ */}
          <span 
            onClick={() => setActiveTab('business')}
            className={`cursor-pointer transition-colors ${
              isBusinessTab
                ? 'font-bold text-purple-700 border-b-2 border-purple-700 pb-0.5' 
                : 'hover:text-black'
            }`}
          >
            Բիզնես
          </span>

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
        <div className="flex items-center cursor-pointer" onClick={() => setActiveTab(isBusinessTab ? 'business' : 'home')}>
          <h1 className="text-4xl font-black text-neutral-800 tracking-tighter m-0">evoca</h1>
        </div>
        
        {/* Հիմնական մենյուի հղումներ (Կախված բաժնից՝ Անհատ կամ Բիզնես) */}
        {!isBusinessTab ? (
          /* ԱՆՀԱՏ ՄԵՆՅՈՒ */
          <nav className="hidden xl:flex space-x-7 text-lg font-medium text-neutral-800">
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('varker'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'varker' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Վարկեր
            </button>
            
            <a href="#cards" className="hover:text-purple-700 transition-colors">Քարտեր</a>
            
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('deposits'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'deposits' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Ավանդներ
            </button>
            
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('hashivner'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'hashivner' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Հաշիվներ
            </button>
            
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('poxancumner'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'poxancumner' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Փոխանցումներ
            </button>
            
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('arjetxter'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'arjetxter' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Արժեթղթեր
            </button>
            
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('evocasalary'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'evocasalary' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              EvocaSALARY
            </button>

            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('evocatouch'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'evocatouch' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              EvocaTOUCH
            </button>
          </nav>
        ) : (
          /* ԲԻԶՆԵՍ ՄԵՆՅՈՒ */
          <nav className="hidden xl:flex space-x-7 text-lg font-medium text-neutral-800">
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('business-varker'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'business-varker' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Վարկեր
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('business-leasing'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'business-leasing' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Լինգ
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('business-hashivner'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'business-hashivner' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Հաշիվներ
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('business-avandner'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'business-avandner' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Ավանդներ
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('business-arjetxter'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'business-arjetxter' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Արժեթղթերի շուկա
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('business-arevtur'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'business-arevtur' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Առևտրի ֆինանսավորում
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('business-digital'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'business-digital' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Դիջիթալ
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setActiveTab('business-ayl'); }}
              className={`hover:text-purple-700 transition-colors cursor-pointer bg-transparent border-none text-lg font-medium ${
                activeTab === 'business-ayl' ? 'text-purple-700 font-bold' : 'text-neutral-800'
              }`}
            >
              Այլ
            </button>
          </nav>
        )}

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