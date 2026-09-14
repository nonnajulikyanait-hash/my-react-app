import React from 'react';
import Footer from './footer';

function KayqiQartez({ setActiveTab }) {
  const handleNavClick = (tabName) => {
    if (setActiveTab) {
      setActiveTab(tabName);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#f4f4f4] min-h-screen font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        {/* Header */}
        <header className="w-full bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-600">
            <div className="flex gap-6">
              <span className="font-semibold text-black cursor-pointer" onClick={() => handleNavClick('home')}>Անհատ</span>
              <span className="cursor-pointer hover:text-black" onClick={() => handleNavClick('biznes')}>Բիզնես</span>
              <span className="cursor-pointer hover:text-black" onClick={() => handleNavClick('akntartayinVcharumner')}>Ակնթարթային վճարումներ</span>
              <span className="cursor-pointer hover:text-black" onClick={() => handleNavClick('mermasin')}>Մեր մասին</span>
              <span className="cursor-pointer hover:text-black">Նորություններ</span>
              <span className="cursor-pointer hover:text-black">Բլոգ</span>
              <span className="cursor-pointer hover:text-black" onClick={() => handleNavClick('kariera')}>Կարիերա</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="cursor-pointer">Առցանց հայտեր</span>
              <span className="cursor-pointer font-medium text-black" onClick={() => handleNavClick('kap')}>Հետադարձ կապ</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-black tracking-wider text-black cursor-pointer" onClick={() => handleNavClick('home')}>evoca</h1>
            </div>
            <div>
              <button 
                onClick={() => handleNavClick('evocaonline')} 
                className="bg-[#6400dc] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md hover:bg-[#5200b8] transition-colors cursor-pointer border-0"
              >
                EvocaONLINE
              </button>
            </div>
          </div>
        </header>

        {/* Բովանդակություն */}
        <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
          
          {/* Հացի փշրանքներ / Breadcrumb */}
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <span className="cursor-pointer hover:text-[#6400dc]" onClick={() => handleNavClick('home')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>
            <span>/</span>
            <span className="text-neutral-800 font-medium">Կայքի քարտեզ</span>
          </div>

          {/* Վերնագիր */}
          <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight pb-4">
            Կայքի քարտեզ
          </h1>

          {/* Քարտեզի երկսյուն կառուցվածք */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 text-sm">
            
            {/* Ձախ սյունակ */}
            <div className="space-y-6">
              <div>
                <h2 className="font-extrabold text-lg text-neutral-900 mb-2">Անհատ</h2>
                <div className="w-12 h-1 bg-[#6400dc] mb-4"></div>
              </div>

              <div className="space-y-1 font-bold text-neutral-900">
                <p className="pt-2">Վարկեր</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><button onClick={() => handleNavClick('varker')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Վարկեր</button></li>
                <li><a href="#varkayin-patmutyun" className="hover:text-[#6400dc]">Վարկային պատմություն և սքոր</a></li>
                <li><a href="#karavor-t_ekatvutyun" className="hover:text-[#6400dc]">Կարևոր տեղեկատվություն</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Քարտեր</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><button onClick={() => handleNavClick('karter')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Քարտեր</button></li>
                <li><a href="#karteri-tramadrum" className="hover:text-[#6400dc]">Քարտերի տրամադրում և սպասարկում</a></li>
                <li><a href="#social-cards" className="hover:text-[#6400dc]">Սոցիալական ապահովության վճարային քարտեր</a></li>
                <li><a href="#evoca-benefits" className="hover:text-[#6400dc]">Evoca Benefits</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Ավանդներ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><button onClick={() => handleNavClick('avandner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ավանդներ</button></li>
                <li><a href="#avandner-info" className="hover:text-[#6400dc]">Կարևոր տեղեկատվություն</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Հաշիվներ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#accounts-open" className="hover:text-[#6400dc]">Հաշիվների բացում և սպասարկում</a></li>
                <li><a href="#metal-accounts" className="hover:text-[#6400dc]">Առարկայազուրկ մետաղական հաշիվներ</a></li>
                <li><a href="#non-resident" className="hover:text-[#6400dc]">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <button onClick={() => handleNavClick('pahatuper')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left font-bold text-neutral-900">Պահատուփեր</button>
              </div>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Փոխանցումներ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><button onClick={() => handleNavClick('poxancumner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Դրամական փոխանցումներ</button></li>
                <li><a href="#payment-systems" className="hover:text-[#6400dc]">Վճարային համակարգեր</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Արժեթղթեր</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#investment-services" className="hover:text-[#6400dc]">Ներդրումային ծառայություններ</a></li>
                <li><a href="#bonds" className="hover:text-[#6400dc]">Պարտատոմսեր</a></li>
                <li><a href="#hkd-services" className="hover:text-[#6400dc]">ՀԿԴ ծառայություններ</a></li>
                <li><a href="#repo" className="hover:text-[#6400dc]">Ռեպո/Հակադարձ Ռեպո գործարքներ</a></li>
                <li><a href="#evocainvest" className="hover:text-[#6400dc]">EvocaINVEST</a></li>
              </ul>

              <div className="space-y-2 text-xs font-bold text-neutral-900 pt-2">
                <p><a href="#evocasalary" className="hover:text-[#6400dc]">EvocaSALARY</a></p>
                <p><button onClick={() => handleNavClick('evocatouch')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">EvocaTOUCH</button></p>
                <p><a href="#evocacodes" className="hover:text-[#6400dc]">Evoca codes</a></p>
              </div>

              {/* Բիզնես */}
              <div className="pt-6">
                <h2 className="font-extrabold text-lg text-neutral-900 mb-2">Բիզնես</h2>
                <div className="w-12 h-1 bg-[#6400dc] mb-4"></div>
              </div>

              <div className="space-y-1 font-bold text-neutral-900">
                <p>Վարկեր</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><button onClick={() => handleNavClick('biznes')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Բիզնես վարկեր</button></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Լիզինգ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#evoca-leasing" className="hover:text-[#6400dc]">Evoca Leasing</a></li>
                <li><a href="#special-offer" className="hover:text-[#6400dc]">Հատուկ առաջարկ</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Հաշիվներ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#biz-accounts" className="hover:text-[#6400dc]">Հաշիվների բացում և սպասարկում</a></li>
                <li><a href="#biz-metal" className="hover:text-[#6400dc]">Առարկայազուրկ մետաղական հաշիվներ</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Ավանդներ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#biz-deposit" className="hover:text-[#6400dc]">Դասական ավանդ</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Արժեթղթերի շուկա</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#biz-invest" className="hover:text-[#6400dc]">Ներդրումային ծառայություններ</a></li>
                <li><a href="#biz-bonds" className="hover:text-[#6400dc]">Պարտատոմսեր</a></li>
                <li><a href="#biz-hkd" className="hover:text-[#6400dc]">ՀԿԴ ծառայություններ</a></li>
                <li><a href="#biz-repo" className="hover:text-[#6400dc]">Ռեպո/Հակադարձ ռեպո գործարքներ</a></li>
                <li><a href="#biz-evocainvest" className="hover:text-[#6400dc]">EvocaINVEST</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Առևտրի ֆինանսավորում</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#guarantee" className="hover:text-[#6400dc]">Երաշխիք</a></li>
                <li><a href="#factoring" className="hover:text-[#6400dc]">Ֆակտորինգային ֆինանսավորում</a></li>
                <li><a href="#accreditive" className="hover:text-[#6400dc]">Ակրեդիտիվ</a></li>
                <li><a href="#inkaso" className="hover:text-[#6400dc]">Ինկասո</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Դիջիթալ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#vpos" className="hover:text-[#6400dc]">V-POS Տերմինալ</a></li>
                <li><a href="#pos" className="hover:text-[#6400dc]">POS Տերմինալ</a></li>
                <li><a href="#tariffs" className="hover:text-[#6400dc]">Սակագներ</a></li>
                <li><a href="#terminal-form" className="hover:text-[#6400dc]">Տերմինալի տեղադրման հայտ</a></li>
                <li><a href="#mpos" className="hover:text-[#6400dc]">Evoca Mobile POS՝ mPOS</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Այլ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#biz-pahatuper" className="hover:text-[#6400dc]">Պահատուփեր</a></li>
                <li><a href="#biz-poxancumner" className="hover:text-[#6400dc]">Փոխանցումներ</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <button onClick={() => handleNavClick('akntartayinVcharumner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left font-bold text-neutral-900">Ակնթարթային վճարումներ</button>
              </div>

              {/* Մեր մասին */}
              <div className="pt-6">
                <h2 className="font-extrabold text-lg text-neutral-900 mb-2">Մեր մասին</h2>
                <div className="w-12 h-1 bg-[#6400dc] mb-4"></div>
              </div>

              <div className="space-y-1 font-bold text-neutral-900">
                <p>Evoca-ի մասին</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><button onClick={() => handleNavClick('mermasin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ընդհանուր</button></li>
                <li><button onClick={() => handleNavClick('mermasin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կառուցվածք</button></li>
                <li><button onClick={() => handleNavClick('mermasin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Բաժնետերեր</button></li>
                <li><button onClick={() => handleNavClick('mermasin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ղեկավարություն</button></li>
                <li><button onClick={() => handleNavClick('mermasin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Գործընկերներ</button></li>
                <li><a href="#mrsanakner" className="hover:text-[#6400dc]">Մրցանակներ</a></li>
                <li><a href="#csr" className="hover:text-[#6400dc]">CSR</a></li>
                <li><a href="#evoca-group" className="hover:text-[#6400dc]">Էվոկա ֆինանսական խումբ</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Սակագներ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#varker-fiz" className="hover:text-[#6400dc]">Վարկեր ֆիզիկական անձանց</a></li>
                <li><a href="#varker-jur" className="hover:text-[#6400dc]">Վարկեր իրավաբանական անձանց</a></li>
                <li><a href="#commissions" className="hover:text-[#6400dc]">Միջնորդավճարների սակագները</a></li>
                <li><a href="#deposits-tariffs" className="hover:text-[#6400dc]">Ավանդների սակագներ</a></li>
                <li><a href="#archive" className="hover:text-[#6400dc]">Արխիվ</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Հաշվետվություններ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#audit" className="hover:text-[#6400dc]">Աուդիտորական եզրակացություն</a></li>
                <li><a href="#fin-reports" className="hover:text-[#6400dc]">Ֆինանսական հաշվետվություններ</a></li>
                <li><a href="#investors" className="hover:text-[#6400dc]">Ներդրողների համար</a></li>
                <li><a href="#semi-annual" className="hover:text-[#6400dc]">Կիսամյակային հաշվետվություն</a></li>
                <li><a href="#annual" className="hover:text-[#6400dc]">Տարեկան հաշվետվություն</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p><a href="#haytararutyunner" className="hover:text-[#6400dc]">Հայտարարություններ</a></p>
              </div>
            </div>

            {/* աջ սյունակ */}
            <div className="space-y-6">
              <div>
                <h2 className="font-extrabold text-lg text-neutral-900 mb-2 opacity-0 hidden md:block">Աջ սյուն</h2>
                <div className="w-12 h-1 bg-transparent mb-4 hidden md:block"></div>
              </div>

              <div className="space-y-1 font-bold text-neutral-900">
                <p><a href="#norutyunner" className="hover:text-[#6400dc]">Նորություններ</a></p>
              </div>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p><a href="#blog" className="hover:text-[#6400dc]">Բլոգ</a></p>
              </div>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p><button onClick={() => handleNavClick('kariera')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left font-bold text-neutral-900">Կարիերա</button></p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#evoca-life" className="hover:text-[#6400dc]">Evoca Լայֆ</a></li>
                <li><a href="#culture" className="hover:text-[#6400dc]">Մշակույթ</a></li>
                <li><a href="#advantages" className="hover:text-[#6400dc]">Առավելություններ</a></li>
                <li><a href="#faq-career" className="hover:text-[#6400dc]">Հաճախ տրվող հարցեր</a></li>
                <li><a href="#how-to-apply" className="hover:text-[#6400dc]">Ինչպես ընդունվել աշխատանքի Evocabank-ում</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Աշխատանք և պրակտիկա</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#job-evoca" className="hover:text-[#6400dc]">Աշխատանք Evoca-ում</a></li>
                <li><a href="#internship" className="hover:text-[#6400dc]">Ուսումնական պրակտիկա</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p><a href="#evocabridge" className="hover:text-[#6400dc]">EvocaBRIDGE</a></p>
              </div>

              {/* Բանկի մասին (կրկնվող բաժին ըստ կառուցվածքի) */}
              <div className="pt-6">
                <h2 className="font-extrabold text-lg text-neutral-900 mb-2">Բանկի մասին</h2>
                <div className="w-12 h-1 bg-[#6400dc] mb-4"></div>
              </div>

              <div className="space-y-1 font-bold text-neutral-900">
                <p>Մեր մասին</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><button onClick={() => handleNavClick('mermasin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ղեկավարություն</button></li>
                <li><button onClick={() => handleNavClick('mermasin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Բաժնետերեր</button></li>
                <li><a href="#about-reports" className="hover:text-[#6400dc]">Հաշվետվություններ</a></li>
                <li><a href="#legal-acts" className="hover:text-[#6400dc]">Իրավական ակտեր</a></li>
                <li><a href="#tariffs-list" className="hover:text-[#6400dc]">Սակագներ</a></li>
                <li><a href="#property" className="hover:text-[#6400dc]">Օտարվող գույք</a></li>
                <li><a href="#developers" className="hover:text-[#6400dc]">Կառուցապատողներ</a></li>
                <li><a href="#car-salons" className="hover:text-[#6400dc]">Գործընկեր ավտոսրահներ</a></li>
                <li><a href="#tariffs-archive" className="hover:text-[#6400dc]">Սակագների արխիվ</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Օգտակար հղումներ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><a href="#customer-rights" className="hover:text-[#6400dc]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
                <li><a href="#residency" className="hover:text-[#6400dc]">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
                <li><a href="#regulation" className="hover:text-[#6400dc]">Կարգավորում</a></li>
                <li><a href="#privacy" className="hover:text-[#6400dc]">Գաղտնիության քաղաքականություն</a></li>
                <li><a href="#ombudsman" className="hover:text-[#6400dc]">Ֆին. հաշտարար</a></li>
                <li><a href="#fraud" className="hover:text-[#6400dc]">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
                <li><a href="#cardholders" className="hover:text-[#6400dc]">Հղումներ Բանկի քարտապանների համար</a></li>
              </ul>

              <div className="space-y-1 font-bold text-neutral-900 pt-2">
                <p>Այլ հղումներ</p>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs pl-2">
                <li><button onClick={() => handleNavClick('evocaonline')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">EvocaONLINE</button></li>
                <li><button onClick={() => handleNavClick('pahatuper')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Պահատուփեր</button></li>
                <li><button onClick={() => handleNavClick('harcer')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հաճախ տրվող հարցեր</button></li>
                <li><a href="#haytararutyunner-2" className="hover:text-[#6400dc]">Հայտարարություններ</a></li>
                <li><button onClick={() => handleNavClick('dibrary')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Dibrary</button></li>
                <li><button onClick={() => handleNavClick('bukletner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Բուկլետներ</button></li>
                <li><button onClick={() => handleNavClick('kap')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հետադարձ կապ</button></li>
                <li><button onClick={() => handleNavClick('kayqiqartez')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կայքի քարտեզ</button></li>
              </ul>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default KayqiQartez;