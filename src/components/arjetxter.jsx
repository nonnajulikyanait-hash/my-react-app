import React, { useState } from 'react';

function Arjetxter() {
  const [activeSubTab, setActiveSubTab] = useState('investment'); // 'investment', 'bonds', 'hfc', 'repo', 'invest'
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const investmentAccordionItems = [
    {
      title: "Ներդրումային ծառայությունների մատուցման կանոններ",
      content: (
        <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
          <div>
            <a 
              href="https://www.evoca.am/files/global_files/1/16708305350017.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-700 underline font-semibold hover:text-purple-900 block mb-1"
            >
              Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ
            </a>
            <p className="mt-1">
              Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100">
            <a 
              href="https://www.evoca.am/files/global_files/1/16708304747333.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-700 underline font-semibold hover:text-purple-900 block mb-1"
            >
              Արժեթղթերի Պահառության գործունեության կանոններ
            </a>
            <p className="mt-1">
              Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում` Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Ծառայությունների մատուցման սակագներ",
      content: (
        <div className="space-y-3 text-gray-600 text-sm lg:text-base leading-relaxed">
          <p className="font-medium text-neutral-800">Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման սակագներ</p>
          <div>
            <a 
              href="https://www.evoca.am/file_manager/Bonds%202026/Tariffs%20armenian.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-700 underline font-semibold hover:text-purple-900 block"
            >
              Միջազգային շուկաներում ծառայությունների մատուցման սակագներ
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Լրացուցիչ տեղեկատվություն",
      content: (
        <div className="space-y-3 text-gray-600 text-sm lg:text-base leading-relaxed">
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.evoca.am/files/global_files/1/16708298612185.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 underline hover:text-purple-900"
              >
                «Արժեթղթերով գործարքներ կնքելու նպատակով պատվերների ընդունման և կատարման» ընթացակարգ
              </a>
            </li>
            <li>
              <a 
                href="https://www.evoca.am/files/global_files/1/16161384835757.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 underline hover:text-purple-900"
              >
                «Շահերի բախման սահմանափակման» ընթացակարգ
              </a>
            </li>
            <li>
              <a 
                href="https://www.evoca.am/file_manager/stock-list.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 underline hover:text-purple-900"
              >
                Ֆոնդային բորսաներ
              </a>
            </li>
            <li>
              <a 
                href="https://www.evoca.am/files/global_files/1/16161384961689.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 underline hover:text-purple-900"
              >
                Տեղեկացումներ հնարավոր ռիսկերի վերաբերյալ
              </a>
            </li>
          </ul>
        </div>
      )
    }
  ];

  const newsList = [
    {
      id: 1,
      category: 'Կենսակերպ',
      title: 'Դիլիջան, մենք գալիս ենք',
      date: '11.09.2026',
      img: 'https://www.evoca.am/images-cache/news/1/17891134831451/439x320.png',
    },
    {
      id: 2,
      category: 'Կենսակերպ',
      title: 'Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր',
      date: '03.09.2026',
      img: 'https://www.evoca.am/images-cache/news/1/17884237814941/439x320.png',
    },
    {
      id: 3,
      category: 'Պրոդուկտներ',
      title: 'Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով',
      date: '31.08.2026',
      img: 'https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png',
    },
  ];

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen flex flex-col justify-between">
      <div>
        {/* Մանուշակագույն Ենթամենյու (Subheader) */}
        <div className="w-full bg-purple-800 text-white px-6 lg:px-10 shadow-inner">
          <div className="flex flex-wrap space-x-6 lg:space-x-10 text-sm font-medium overflow-x-auto">
            <button 
              onClick={() => setActiveSubTab('investment')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'investment' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Ներդրումային ծառայություններ
            </button>
            <button 
              onClick={() => setActiveSubTab('bonds')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'bonds' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Պարտատոմսեր
            </button>
            <button 
              onClick={() => setActiveSubTab('hfc')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'hfc' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              ՀԿԾ ծառայություններ
            </button>
            <button 
              onClick={() => setActiveSubTab('repo')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'repo' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Ռեպո/Հակադարձ Ռեպո գործարքներ
            </button>
            <button 
              onClick={() => setActiveSubTab('invest')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'invest' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              EvocaINVEST
            </button>
          </div>
        </div>

        {/* Հիմնական բովանդակություն ըստ activeSubTab-ի */}
        {activeSubTab === 'investment' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-12">
            
            {/* Հացհատիկ (Breadcrumbs) */}
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Արժեթղթեր  &gt;  <span className="text-gray-600">Ներդրումային ծառայություններ</span>
            </div>

            {/* Վերնագիր և Նկար (Flex շարվածք) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Ներդրումային ծառայություններ
                </h1>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան։
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
                  alt="Ներդրումային ծառայություններ" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Հիմնական տեքստ */}
            <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100 space-y-6 text-sm lg:text-base text-gray-700 leading-relaxed">
              <p>
                Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold text-neutral-900">Ինչպե՞ս դառնալ հաճախորդ։</h3>
                <p>
                  Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ <span className="text-purple-700 font-semibold cursor-pointer underline">այստեղ</span>:
                </p>
                <p>
                  Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ։
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Հասցե՝</h4>
                  <p className="text-gray-600">Երևան, Հանրապետության 44/2</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Հետադարձ կապ՝</h4>
                  <p className="text-gray-600">Հեռ.՝ 374 33 777 453</p>
                  <p className="text-gray-600">374 33 603 055</p>
                  <p className="text-gray-600 mt-2">Էլ․ հասցե՝ <a href="mailto:investsecurities@evoca.am" className="text-purple-700 underline">investsecurities@evoca.am</a></p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 font-medium text-xs lg:text-sm mt-4">
                <strong>ՈՒՇԱԴՐՈՒԹՅՈՒՆ․</strong> Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում։
              </div>
            </div>

            {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Ակորդեոններ) */}
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-neutral-900">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h3>
              <div className="space-y-3">
                {investmentAccordionItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <button 
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4 text-left font-bold text-neutral-800 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span>{item.title}</span>
                      <span className="text-purple-700 font-bold text-lg">{openAccordion === index ? '−' : '+'}</span>
                    </button>
                    {openAccordion === index && (
                      <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Վերջին նորությունների բաժին */}
            <div className="space-y-8 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-neutral-900">Վերջին նորությունները</h2>
                <button className="bg-purple-100 text-[#6400dc] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-purple-200 transition-colors cursor-pointer">
                  Բոլոր նորությունները &gt;
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsList.map((news) => (
                  <div 
                    key={news.id}
                    className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                      <img 
                        src={news.img} 
                        alt={news.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                          | {news.category}
                        </span>
                        <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#6400dc] transition-colors leading-snug">
                          {news.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
                        {news.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'bonds' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-12">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">Պարտատոմսեր</h2>
            <p className="text-gray-700">Ծանոթացեք Evocabank-ի կողմից առաջարկվող բարձր եկամտաբեր պարտատոմսերին:</p>
          </div>
        )}

        {activeSubTab === 'hfc' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-12">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">ՀԿԾ ծառայություններ</h2>
            <p className="text-gray-700">Հաշվետերերի և հսկողության ծառայություններ արժեթղթերի շուկայում:</p>
          </div>
        )}

        {activeSubTab === 'repo' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-12">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">Ռեպո/Հակադարձ Ռեպո գործարքներ</h2>
            <p className="text-gray-700">Իրականացրեք ռեպո և հակադարձ ռեպո գործարքներ շահավետ պայմաններով:</p>
          </div>
        )}

        {activeSubTab === 'invest' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-12">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">EvocaINVEST</h2>
            <p className="text-gray-700">Ներդրումային հարթակ արագ և հարմարավետ առցանց առևտրի համար:</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Arjetxter;