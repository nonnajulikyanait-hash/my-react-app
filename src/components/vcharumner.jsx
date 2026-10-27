import React, { useState } from 'react';

const Vcharumner = ({ setActiveTab }) => {
  // state՝ ընտրված կատեգորիան պահելու համար (null = Գլխավոր ցուցակ)
  const [selectedCategory, setSelectedCategory] = useState(null);

  const paymentCategories = [
    {
      id: 'evocabank',
      title: 'EVOCABANK',
      icon: 'https://resource.evoca.am/images/WebPayment/evoca.png',
      subCategories: [
        {
          id: 'loan_repayment',
          title: 'Վարկի մարում',
          icon: 'https://resource.evoca.am/images/webPayment/Account-Replenishment.png',
        },
        {
          id: 'account_replenishment',
          title: 'Հաշվի համալրում',
          icon: 'https://resource.evoca.am/images/webPayment/Account-Replenishment.png',
        },
        {
          id: 'card_replenishment',
          title: 'Քարտի համալրում',
          icon: 'https://resource.evoca.am/images/webPayment/cardtocard.png',
        },
      ],
    },
    {
      id: 'international_mobile',
      title: 'Միջազգային բջջային օպերատորներ',
      icon: 'https://resource.evoca.am/images/WebPayment/international.png',
    },
    {
      id: 'utility',
      title: 'Կոմունալ վճարումներ',
      icon: 'https://resource.evoca.am/images/WebPayment/utility.png',
    },
    {
      id: 'internet_tv',
      title: 'Ինտերնետ և TV',
      icon: 'https://resource.evoca.am/images/WebPayment/internettv.png',
    },
    {
      id: 'road_police',
      title: 'ՃՈ վճարներ',
      icon: 'https://resource.evoca.am/images/WebPayment/roadpolice.png',
    },
    {
      id: 'loan_organizations',
      title: 'Վարկային կազմակերպություններ',
      icon: 'https://resource.evoca.am/images/WebPayment/loan.png',
    },
    {
      id: 'events',
      title: 'Միջոցառումներ',
      icon: 'https://resource.evoca.am/images/WebPayment/event.png',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Header (Վճարումների էջի համար) */}
        <header className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div 
              onClick={() => {
                setSelectedCategory(null);
                if (setActiveTab) setActiveTab('home');
              }}
              className="text-2xl font-extrabold tracking-tight cursor-pointer text-gray-900"
            >
              evoca <span className="text-purple-600 font-normal text-sm ml-2 hidden sm:inline">Online payment</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm hidden md:inline">+374 10 605555</span>
            <button className="p-1 rounded-full hover:bg-gray-100 transition">
              🌐
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-full transition shadow-sm">
              Պատմություն
            </button>
          </div>
        </header>

        {/* Բովանդակություն */}
        <main className="max-w-6xl mx-auto px-4 pt-10 pb-12">
          {/* ԵԹԵ ԸՆՏՐՎԱԾ Է EVOCABANK-Ը (ԵՆԹԱԲԱԺԻՆՆԵՐԻ ԷՋ) */}
          {selectedCategory && selectedCategory.id === 'evocabank' ? (
            <div>
              {/* Breadcrumbs / Նավիգացիա */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="hover:text-purple-600 transition-colors cursor-pointer font-medium"
                >
                  Գլխավոր
                </button>
                <span>/</span>
                <span className="text-gray-400 font-medium">EVOCABANK</span>
              </div>

              {/* Վերնագիր */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-purple-700 uppercase tracking-wide mb-12">
                EVOCABANK
              </h1>

              {/* EVOCABANK-ի 3 քարտերը */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-4xl mx-auto">
                {selectedCategory.subCategories.map((sub) => (
                  <div
                    key={sub.id}
                    className="bg-white w-full max-w-xs rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60"
                  >
                    <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                      <img 
                        src={sub.icon} 
                        alt={sub.title} 
                        className="w-16 h-16 object-contain" 
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">
                      {sub.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* ԳԼԽԱՎՈՐ ԷՋԸ (ԲՈԼՈՐ ԿԱՏԵԳՈՐԻԱՆԵՐԸ) */
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                Գլխավոր
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                {paymentCategories.map((item, index) => {
                  const isLast = index === paymentCategories.length - 1;

                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        if (item.subCategories) {
                          setSelectedCategory(item);
                        }
                      }}
                      className={`bg-white w-full max-w-sm rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[260px] group hover:bg-purple-50/60 ${
                        isLast ? 'sm:col-span-2 lg:col-span-3 justify-self-center' : ''
                      }`}
                    >
                      <div className="w-28 h-28 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 shadow-inner transition-colors duration-300 p-4">
                        <img 
                          src={item.icon} 
                          alt={item.title} 
                          className="w-16 h-16 object-contain" 
                        />
                      </div>

                      <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Ֆուտեր միայն EVOCABANK էջի համար (ինչպես նկարում է) */}
      {selectedCategory && (
        <footer className="bg-white border-t border-gray-100 py-6 px-6 text-xs text-gray-500">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
      )}
    </div>
  );
};

export default Vcharumner;