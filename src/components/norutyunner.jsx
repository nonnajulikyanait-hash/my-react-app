import React, { useState } from 'react';

const Norutyunner = ({ setActiveTab }) => {
  const [activeCategory, setActiveCategory] = useState('Բոլորը');

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

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Նորությունների գլխավոր վերնագիր և ֆիլտրեր */}
        <main className="max-w-7xl mx-auto px-4 md:px-12 pt-10 pb-16">
          <div className="text-sm text-gray-400 mb-4 flex items-center space-x-2">
            <span onClick={() => setActiveTab && setActiveTab('home')} className="cursor-pointer hover:text-purple-600">Գլխավոր</span>
            <span>/</span>
            <span className="text-gray-600 font-medium">Նորություններ</span>
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

          {/* 1-ԻՆ ԲԱԺԻՆ (Մեծ նկարով գլխավոր նորություն) */}
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

          {/* 2-ՐԴ ԲԱԺԻՆ (Մրցանակներ և այլ նորություններ) */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Մեծ քարտ ձախից */}
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

              {/* Աջ կողմի փոքր նորություններ */}
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

          {/* 3-ՐԴ ԲԱԺԻՆ (Կարևոր - Գործարքների արգելափակում) */}
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

          {/* 4-ՐԴ ԲԱԺԻՆ (Լրացուցիչ 3 նորություններ) */}
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
        </main>
      </div>

      {/* Ֆուտեր */}
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