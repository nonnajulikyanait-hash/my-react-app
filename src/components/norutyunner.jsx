import React, { useState } from 'react';

const Norutyunner = ({ setActiveTab }) => {
  const [activeCategory, setActiveCategory] = useState('Բոլորը');
  const [selectedNews, setSelectedNews] = useState(null);

  const categories = [
    'Գլխավոր',
    'Բանկային',
    'Հարցազրույցներ',
    'Պրոդուկտներ',
    'Նորարարություններ',
    'Կենսակերպ',
    'Մրցանակներ',
    'CSR',
    'Այլ',
    'Բոլորը'
  ];

  // «Գլխավոր» բաժնի մանրամասն նորությունը
  const mainNewsDetail = {
    id: 'norakaruyc-signing',
    title: 'Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել',
    shortDesc: 'Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից։',
    date: '22.06.2026',
    category: 'Գլխավոր',
    image: 'https://www.evoca.am/images-cache/news/1/1782137837549/780x585.jpg',
    fullText: [
      'Evocabank-ը և Norakaruyc.am հարթակը ստորագրել են համագործակցության հուշագիր՝ նպատակ ունենալով պարզեցնել և արագացնել բնակարանի գնման ու հիփոթեքային ֆինանսավորման գործընթացները։',
      'Համագործակցության արդյունքում Norakaruyc.am-ի օգտատերերը կկարողանան ոչ միայն ծանոթանալ նորակառույց շենքերի բնակարանների մասին ամբողջական տեղեկատվությանը, այլ նաև անմիջապես հարթակից կապ հաստատել կառուցապատողի և Բանկի հետ, ստանալ խորհրդատվություն և ներկայացնել հիփոթեքային վարկի հայտ։',
      'Հարթակում ներկայացված են բնակարանների հատակագծերը, ֆինանսավորման հնարավոր տարբերակները, ամսական վճարների չափը և մարման գրաֆիկները։ Օգտատերերը, լրացնելով անհրաժեշտ տվյալները, կարող են իրենց հայտն ավտոմատ կերպով փոխանցել ինչպես կառուցապատողին, այնպես էլ Evocabank-ին։',
      '«Այս նորարարական լուծումը հնարավորություն է տալիս մեկտեղել անշարժ գույքի ընտրության ու ֆինանսավորման բոլոր փուլերը մեկ միասնական թվային հարթակում: Դրա շնորհիվ մենք կարողանում ենք առավելագույնս կրճատել թե՛ հաճախորդի ծախսած ժամանակը, և թե՛ թղթաբանությունը։ Մեր այս նախաձեռնությունը միտված է հենց դրան՝ փոխելու շուկայի մոտեցումները և բնակարանի գնման ողջ գործընթացը՝ այն հաճախորդի համար դարձնելով անհամեմատ ավելի արագ, հարմարավետ և ամբողջովին թվայնացված:\nNorakaruyc.am-ի հետ համագործակցությունը հնարավորություն է տալիս մեկ հարթակում ինտեգրել Բանկի բոլոր հիփոթեքային պրոդուկտները, որպեսզի յուրաքանչյուր հաճախորդ կարողանա ընտրել իր կարիքներին և հնարավորություններին առավել համապատասխան տարբերակը»,- նշել է Evocabank-ի Սպառողական վարչության ղեկավար Ստեփան Ավետիսյանը:',
      '«Այսուհետ Norakaruyc.am հարթակի օրական ավելի քան 2,500 օգտատերեր կկարողանան մեկ հարթակում ընտրել իրենց նախընտրած բնակարանը, անցնել նույնականացման գործընթացը և անմիջապես առցանց դիմել հիփոթեքային վարկի համար։\nՍկսած 2019թ.-ից՝ մեր փորձը ցույց է տալիս, որ, ավելացնելով թվային միջավայրի գործիքակազմը, մեզ հետ համագործակցող կառուցապատողների հետ հասնում ենք ավելի արդյունավետ և արագ վաճառքների։ Նախաձեռնությունը միտված է պարզեցնելու և արագացնելու բնակարանի գնման գործընթացը՝ նվազեցնելով այցելությունների և փաստաթղթաշրջանառության ծավալը, ինչպես նաև ապահովելով ավելի հարմար և ժամանակակից սպասարկում հաճախորդների համար»,- նշել է Norakaruyc.am հարթակի հիմնադիր Սերգեյ Խաչատրյանը։',
      'Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից:',
      'Evocabank-ի և Norakaruyc.am-ի համատեղ թվային լուծումը ևս մեկ քայլ է դեպի Հայաստանի անշարժ գույքի շուկայի թվայնացում:'
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <main className="max-w-7xl mx-auto px-4 md:px-12 pt-10 pb-16">
          
          {/* ԵԹԵ ԸՆՏՐՎԱԾ Է ԱՌԱՆՁԻՆ ՆՈՐՈՒԹՅԱՆ ՄԱՆՐԱՄԱՍՆ ԷՋԸ (3-րդ և 4-րդ նկարների էջը) */}
          {selectedNews ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-purple-700 font-medium transition cursor-pointer"
                >
                  <span>← Վերադառնալ</span>
                </button>
                <div className="text-sm text-gray-400 flex items-center space-x-2">
                  <span onClick={() => { setSelectedNews(null); setActiveTab && setActiveTab('home'); }} className="cursor-pointer hover:text-purple-600">Գլխավոր</span>
                  <span>/</span>
                  <span onClick={() => setSelectedNews(null)} className="cursor-pointer hover:text-purple-600">Նորություններ</span>
                  <span>/</span>
                  <span onClick={() => setSelectedNews(null)} className="cursor-pointer hover:text-purple-600">Գլխավոր</span>
                  <span>/</span>
                  <span className="text-gray-600 font-medium truncate max-w-xs">{selectedNews.title}</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 max-w-5xl mx-auto mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
                  <div>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {selectedNews.category}
                    </span>
                    <h1 className="text-2xl md:text-4xl font-extrabold text-neutral-900 leading-snug mb-6">
                      {selectedNews.title}
                    </h1>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
                      {selectedNews.shortDesc}
                    </p>
                    <div className="text-sm text-gray-400 font-medium">{selectedNews.date}</div>
                  </div>

                  <div className="overflow-hidden rounded-2xl shadow-md">
                    <img 
                      src={selectedNews.image} 
                      alt={selectedNews.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Ամբողջական տեքստը */}
                <div className="space-y-6 text-gray-700 leading-relaxed pt-6 border-t border-gray-100 text-sm md:text-base">
                  {selectedNews.fullText.map((paragraph, index) => (
                    <p key={index} className={paragraph.startsWith('«') ? 'italic bg-purple-50/50 p-4 rounded-xl border-l-4 border-purple-600' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* ՆՈՐՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆԿԻ ԷՋԸ */
            <div>
              <div className="text-sm text-gray-400 mb-4 flex items-center space-x-2">
                <span onClick={() => setActiveTab && setActiveTab('home')} className="cursor-pointer hover:text-purple-600">Գլխավոր</span>
                <span>/</span>
                <span className="text-gray-600 font-medium">Նորություններ</span>
                {activeCategory === 'Գլխավոր' && (
                  <>
                    <span>/</span>
                    <span className="text-gray-600 font-medium">Գլխավոր</span>
                  </>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8">
                Նորություններ
              </h1>

              {/* Կատեգորիաների կոճակներ */}
              <div className="flex flex-wrap gap-3 mb-16">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition shadow-sm cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-purple-700 text-white shadow-purple-200'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* ԵԹԵ ԸՆՏՐՎԱԾ Է «ԳԼԽԱՎՈՐ» ՖԻԼՏՐԸ */}
              {activeCategory === 'Գլխավոր' ? (
                <div>
                  <section 
                    onClick={() => setSelectedNews(mainNewsDetail)}
                    className="mb-16 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 cursor-pointer hover:shadow-xl transition duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                      <div>
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                          Գլխավոր
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 leading-snug mb-6 hover:text-purple-700 transition">
                          Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից։
                        </p>
                        <div className="text-sm text-gray-400 font-medium">22.06.2026</div>
                      </div>
                      <div className="overflow-hidden rounded-2xl shadow-inner">
                        <img 
                          src="https://www.evoca.am/images-cache/news/1/1782137837549/780x585.jpg" 
                          alt="Evocabank and Norakaruyc" 
                          className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Փոքր քարտ ներքևում (2-րդ նկարից) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div 
                      onClick={() => setSelectedNews(mainNewsDetail)}
                      className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between cursor-pointer hover:shadow-lg transition"
                    >
                      <div>
                        <img src="https://www.evoca.am/images-cache/news/1/1782137837549/780x585.jpg" alt="News" className="w-full h-48 object-cover rounded-2xl mb-4" />
                        <span className="text-purple-700 text-xs font-bold">Գլխավոր</span>
                        <h4 className="font-bold text-lg text-neutral-900 mt-2 mb-3">Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել</h4>
                      </div>
                      <span className="text-xs text-gray-400">22.06.2026</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* ՍՏԱՆԴԱՐՏ ՆՈՐՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆԿԸ */
                <div>
                  {/* 1-ԻՆ ԲԱԺԻՆ */}
                  <section className="mb-20 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                      <div>
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                          Բանկային
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 leading-snug mb-6">
                          Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          IFC-ն Evocabank-ին տրամադրել է 10 մլն դոլարի վարկ` Հայաստանում ՄՓՄՁ-ներին աջակցելու, աշխատատեղեր ստեղծելու և բնապահպանական ծրագրեր ֆինանսավորելու համար։
                        </p>
                        <div className="text-sm text-gray-400 font-medium">26.10.2026</div>
                      </div>
                      <div className="overflow-hidden rounded-2xl shadow-inner">
                        <img 
                          src="https://www.evoca.am/images-cache/news/1/17930164747919/780x585.png" 
                          alt="Evocabank and IFC" 
                          className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                        />
                      </div>
                    </div>
                  </section>

                  {/* 2-ՐԴ ԲԱԺԻՆ */}
                  <section className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
                        <div>
                          <div className="overflow-hidden rounded-2xl mb-6 shadow-inner">
                            <img 
                              src="https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png" 
                              alt="AMX Awards" 
                              className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition duration-500"
                            />
                          </div>
                          <span className="inline-block text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
                            Մրցանակներ
                          </span>
                          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                            Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակին։
                          </p>
                        </div>
                        <div className="text-sm text-gray-400">16.06.2026</div>
                      </div>

                      <div className="flex flex-col space-y-6">
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                          <div>
                            <img src="https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png" alt="News" className="w-full h-40 object-cover rounded-xl mb-4" />
                            <span className="text-purple-700 text-xs font-bold">Մրցանակներ</span>
                            <h4 className="font-bold text-lg text-neutral-900 mt-1 mb-2">Evocabank. Լավագույն ՄՓՄՁ բանկը Հայաստանում՝ երկրորդ...</h4>
                          </div>
                          <span className="text-xs text-gray-400 mt-4">08.05.2026</span>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                          <div>
                            <img src="https://www.evoca.am/images-cache/news/1/17722002491716/450x295.png" alt="News" className="w-full h-40 object-cover rounded-xl mb-4" />
                            <span className="text-purple-700 text-xs font-bold">Պրոդուկտներ</span>
                            <h4 className="font-bold text-lg text-neutral-900 mt-1 mb-2">Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում</h4>
                          </div>
                          <span className="text-xs text-gray-400 mt-4">27.02.2026</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 3-ՐԴ ԲԱԺԻՆ (Կարևոր) */}
                  <section className="mb-20 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-extrabold text-neutral-900 mb-8">Կարևոր</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                      <div className="overflow-hidden rounded-2xl shadow-inner bg-neutral-900 flex items-center justify-center p-6">
                        <img 
                          src="https://www.evoca.am/images-cache/news/1/17852444643548/780x585.png" 
                          alt="Գործարքների արգելափակում" 
                          className="w-full h-auto object-contain transform hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div>
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                          Բանկային
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug mb-6">
                          Գործարքների արգելափակում 1 կոճակով
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը։
                        </p>
                        <div className="text-sm text-gray-400 font-medium">01.06.2026</div>
                      </div>
                    </div>
                  </section>

                  {/* 4-ՐԴ ԲԱԺԻՆ */}
                  <section className="mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                        <div>
                          <img src="https://www.evoca.am/images-cache/news/1/17812556342544/438x328.png" alt="News" className="w-full h-48 object-cover rounded-2xl mb-4" />
                          <span className="text-purple-700 text-xs font-bold">Կենսակերպ</span>
                          <h4 className="font-bold text-lg text-neutral-900 mt-2 mb-3">Evocabank-ը նոր գույներ է տալիս մեր քաղաքին</h4>
                        </div>
                        <span className="text-xs text-gray-400">12.06.2026</span>
                      </div>

                      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                        <div>
                          <img src="https://www.evoca.am/images-cache/news/1/17757342882486/438x328.png" alt="News" className="w-full h-48 object-cover rounded-2xl mb-4" />
                          <span className="text-purple-700 text-xs font-bold">Բանկային</span>
                          <h4 className="font-bold text-lg text-neutral-900 mt-2 mb-3">ESG կառավարման համակարգը Evocabank-ում</h4>
                        </div>
                        <span className="text-xs text-gray-400">31.05.2026</span>
                      </div>

                      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                        <div>
                          <img src="https://www.evoca.am/images-cache/news/1/17707319421286/438x328.png" alt="News" className="w-full h-48 object-cover rounded-2xl mb-4" />
                          <span className="text-purple-700 text-xs font-bold">Բանկային</span>
                          <h4 className="font-bold text-lg text-neutral-900 mt-2 mb-3">Evocabank-ը միացել է AmCham Armenia-ին</h4>
                        </div>
                        <span className="text-xs text-gray-400">10.02.2026</span>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          )}

        </main>
      </div>

      {/* ՖՈՒՏԵՐ */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6 md:px-12 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-bold text-gray-800 text-sm">evocaBANK</span>
            <p className="mt-1">ք. Երևան, 0010, Հանրապետության 44/2</p>
          </div>
          <div className="text-center md:text-right">
            <p>hello@evoca.am</p>
            <p>+374 10 605555</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Norutyunner;