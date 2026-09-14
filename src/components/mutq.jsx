import React, { useState, useRef, useEffect } from 'react';

function EvocaOnline({ setActiveTab }) {
  const [lang, setLang] = useState('HY');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const langMenuRef = useRef(null);

  // Փակել լեզուների մենյուն, երբ սեղմում ենք դրսում
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Բառարան ըստ լեզուների
  const t = {
    HY: {
      loginTitle: 'Մուտք համակարգ',
      username: 'Մուտքանուն',
      password: 'Գաղտնաբառ',
      loginBtn: 'Մուտք',
      forgot: 'Մոռացե՞լ եք մուտքանունը կամ գաղտնաբառը',
      qrLogin: 'Մուտք QR կոդով',
      oldSite: 'Կայքի հին տարբերակ',
      copyright: '© 2026 Էվոկաբանկ',
      license: 'Բանկը վերահսկվում է ՀՀ Կենտրոնական բանկի կողմից',
      version: 'Տարբերակ 8.19.0.0',
      qrModalTitle: 'Արագ և ապահով',
      qrModalDesc: 'Եթե ունեք EvocaTOUCH հավելվածը, սկանավորեք QR կոդը՝ ավելի արագ մուտք գործելու համար'
    },
    RU: {
      loginTitle: 'Вход в систему',
      username: 'Имя пользователя',
      password: 'Пароль',
      loginBtn: 'Войти',
      forgot: 'Забыли имя пользователя или пароль',
      qrModalTitle: 'Быстро и безопасно',
      qrLogin: 'Вход по QR-коду',
      oldSite: 'Старая версия сайта',
      copyright: '© 2026 Эвокабанк',
      license: 'Банк контролируется Центральным банком РА',
      version: 'Версия 8.19.0.0',
      qrModalDesc: 'Если у вас есть приложение EvocaTOUCH, сканируйте QR-код для быстрого входа'
    },
    ENG: {
      loginTitle: 'System Login',
      username: 'Username',
      password: 'Password',
      loginBtn: 'Login',
      forgot: 'Forgot username or password',
      qrLogin: 'Login with QR code',
      oldSite: 'Old version of the website',
      copyright: '© 2026 Evocabank',
      license: 'The Bank is supervised by the Central Bank of Armenia',
      version: 'Version 8.19.0.0',
      qrModalTitle: 'Fast and Secure',
      qrModalDesc: 'If you have the EvocaTOUCH app, scan the QR code for a faster login'
    }
  };

  const currentT = t[lang];

  return (
    <div className="w-full min-h-screen bg-[#f4f7f6] flex flex-col justify-between font-sans select-none relative">
      
      {/* Վերին հատված (Header) */}
      <header className="w-full px-8 py-5 flex justify-between items-center bg-transparent">
        {/* Լոգո */}
        <div 
          onClick={() => setActiveTab && setActiveTab('home')}
          className="text-2xl font-black tracking-wider text-neutral-800 cursor-pointer flex items-center gap-1"
        >
          evoca<span className="text-[#6400dc] uppercase text-sm font-bold">bank</span>
        </div>

        {/* Լեզուների փոխարկման կոճակ և մենյու */}
        <div className="relative" ref={langMenuRef}>
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 border border-gray-100 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          {/* Լեզուների ցանկը (Dropdown) */}
          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50 flex flex-col items-center py-1">
              <button 
                onClick={() => { setLang('ENG'); setIsLangOpen(false); }}
                className={`w-full py-2 text-xs font-bold transition-colors cursor-pointer ${lang === 'ENG' ? 'bg-[#6400dc] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                ENG
              </button>
              <button 
                onClick={() => { setLang('HY'); setIsLangOpen(false); }}
                className={`w-full py-2 text-xs font-bold transition-colors cursor-pointer ${lang === 'HY' ? 'bg-[#6400dc] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                ՀԱՅ
              </button>
              <button 
                onClick={() => { setLang('RU'); setIsLangOpen(false); }}
                className={`w-full py-2 text-xs font-bold transition-colors cursor-pointer ${lang === 'RU' ? 'bg-[#6400dc] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                РУС
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Միջնամաս (Login Form Container) */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 my-auto">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-sm border border-gray-200/80 p-8 sm:p-10 flex flex-col items-center">
          
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-8 w-full text-left">
            {currentT.loginTitle}
          </h2>

          {/* Մուտքանուն */}
          <div className="w-full mb-4">
            <input 
              type="text" 
              placeholder={currentT.username}
              className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#6400dc] text-sm text-neutral-800 transition-colors"
            />
          </div>

          {/* Գաղտնաբառ */}
          <div className="w-full mb-6 relative">
            <input 
              type="password" 
              placeholder={currentT.password}
              className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#6400dc] text-sm text-neutral-800 transition-colors"
            />
            <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </span>
          </div>

          {/* Մուտք կոճակ */}
          <button className="w-full bg-[#6400dc] hover:bg-[#5200b8] text-white font-medium py-3.5 rounded-md transition-colors cursor-pointer mb-6 text-sm shadow-sm">
            {currentT.loginBtn}
          </button>

          {/* Մոռացել եք հղում */}
          <div className="mb-8">
            <a href="#forgot" className="text-xs text-neutral-600 hover:text-[#6400dc] transition-colors">
              {currentT.forgot}
            </a>
          </div>

          {/* Մուտք QR կոդով */}
          <div className="w-full border-t border-gray-100 pt-6 flex justify-center">
            <button 
              onClick={() => setIsQrOpen(true)}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-700 hover:text-[#6400dc] bg-transparent border-0 cursor-pointer transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6400dc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              {currentT.qrLogin}
            </button>
          </div>

        </div>

        {/* Կայքի հին տարբերակ */}
        <div className="mt-8 text-center">
          <a 
            href="https://online.evoca.am/internetbank/MainForm.wgx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-medium text-neutral-600 hover:text-[#6400dc] transition-colors border-b border-dashed border-neutral-400 pb-0.5"
          >
            {currentT.oldSite}
          </a>
        </div>
      </main>

      {/* Ստորին հատված (Footer) */}
      <footer className="w-full px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 gap-4 bg-transparent">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-center sm:text-left">
          <span>{currentT.copyright}</span>
          <span className="hidden sm:inline">|</span>
          <span>{currentT.license}</span>
          <span className="hidden sm:inline">|</span>
          <span>{currentT.version}</span>
        </div>

        {/* App Store & Google Play Նկարներ/Հղումներ */}
        <div className="flex items-center gap-3">
          <a href="https://apps.apple.com/us/app/evocatouch/id970309076" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://online.evoca.am/OnlineBanking/Web/images/app-store.svg" 
              alt="App Store" 
              className="h-8 cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://online.evoca.am/OnlineBanking/Web/images/google-play.svg" 
              alt="Google Play" 
              className="h-8 cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </a>
        </div>
      </footer>

      {/* QR Կոդի մոդալ պատուհան (Modal) */}
      {isQrOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative flex flex-col items-center text-center animate-in fade-in zoom-in duration-200">
            
            {/* Փակելու կոճակ (X) */}
            <button 
              onClick={() => setIsQrOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-transparent border-0 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* QR Կոդի նկարը */}
            <div className="my-4 p-2 bg-white border border-gray-100 rounded-lg shadow-inner">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAACCElEQVR4nO2Y2Y3DMAxEBbgAl+TWXZILMKCdgz6STdbfs5BgJIH88kGRHJJq/WntbSDjXEYwPCdJ41rwY+orfrR57dsybdydMhF8Y6/Yer94JxXZGvbw7HPH02bsEcQBRCPcI7LiEzv/AFEYrjb9i9E5iAITIUmLts3nQ+zGIBYPx+bt+a0vMcghfsNvZTr8+SrwYQgikVZ2u1FLOWdPJiJMNYJIr0sX5dirZGUhjk28ZymmoVBEulFKH4kgHimB9CQ+G70q8aDMxyK0VU6zG2G0j+FwYxiCbxdeKgckEHZbHSUhkYh6CmXYeqqIMu8mHlGIOj6aK7+VwLuIhSJML3lPHZ869Jo8Ln0JQ7hgqDtZWL8wMBmt2gxEKr04avC9Olm1TvpvIlJtEvKtFUhKxTkUkd8qMKsal3KcchiGuPBS/xiefKmutg4jEpHdzC2157KYungT+DDkEPVrXof1HhBDERcrp5psrWhlkGYi0zVFaYhXqNbgm4mcQqhGicrBkd3zRyxSOuEWyQPHOSwGItQMxqbuIThOufVT35SJeHnGhcXGawrJRHwBZuU4ahcz79bMhiGa13Whom6Cbywk914qC/EtkVLNXZKdyXvlZESFi+XXg9RbyUpELB409+gBHaGRiAKzWj91f+XY99iNQSwedT2p21bPhS8lKwretsew1knMsIhqck+QFEnocyIZAJZgAAAABJRU5ErkJggg==" 
                alt="QR Code" 
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Վերնագիր և բացատրություն */}
            <h3 className="text-lg font-bold text-neutral-800 mb-2">
              {currentT.qrModalTitle}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed px-4">
              {currentT.qrModalDesc}
            </p>

          </div>
        </div>
      )}

    </div>
  );
}

export default EvocaOnline;