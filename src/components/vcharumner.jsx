import React from 'react';

const Vcharumner = ({ setActiveTab }) => {
  const paymentCategories = [
    {
      id: 'evocabank',
      title: 'EVOCABANK',
      icon: (
        <svg className="w-16 h-16 text-purple-600" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20 20 L50 80 L80 20 L50 50 Z" />
        </svg>
      ),
      bgGradient: 'from-purple-100 to-indigo-50',
    },
    {
      id: 'international_mobile',
      title: 'Միջազգային բջջային օպերատորներ',
      icon: (
        <div className="w-20 h-20 relative flex items-center justify-center">
          <span className="text-4xl">🌐</span>
        </div>
      ),
      bgGradient: 'from-purple-100 to-pink-50',
    },
    {
      id: 'utility',
      title: 'Կոմունալ վճարումներ',
      icon: (
        <div className="w-20 h-20 relative flex items-center justify-center">
          <span className="text-4xl">💡</span>
        </div>
      ),
      bgGradient: 'from-purple-100 to-indigo-50',
    },
    {
      id: 'internet_tv',
      title: 'Ինտերնետ և TV',
      icon: (
        <div className="w-20 h-20 relative flex items-center justify-center">
          <span className="text-4xl">📺</span>
        </div>
      ),
      bgGradient: 'from-purple-100 to-pink-50',
    },
    {
      id: 'road_police',
      title: 'ՃՈ վճարներ',
      icon: (
        <div className="w-20 h-20 relative flex items-center justify-center">
          <span className="text-4xl">🚘</span>
        </div>
      ),
      bgGradient: 'from-purple-100 to-indigo-50',
    },
    {
      id: 'loan_organizations',
      title: 'Վարկային կազմակերպություններ',
      icon: (
        <div className="w-20 h-20 relative flex items-center justify-center">
          <span className="text-4xl">💰</span>
        </div>
      ),
      bgGradient: 'from-purple-100 to-pink-50',
    },
    {
      id: 'events',
      title: 'Միջոցառումներ',
      icon: (
        <div className="w-20 h-20 relative flex items-center justify-center">
          <span className="text-4xl">🎟️</span>
        </div>
      ),
      bgGradient: 'from-purple-100 to-indigo-50',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-16">
      {/* Վերին նավիգացիոն հատված / Header (Վճարումների էջի համար) */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div 
            onClick={() => setActiveTab && setActiveTab('home')}
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

      {/* Էջի վերնագիր */}
      <main className="max-w-6xl mx-auto px-4 pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Գլխավոր
        </h1>

        {/* Քարտերի ցանց (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {paymentCategories.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full max-w-sm rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[260px]"
            >
              {/* Իկոնայի ֆոն/տուփ */}
              <div className={`w-28 h-28 rounded-full bg-gradient-to-tr ${item.bgGradient} flex items-center justify-center mb-6 shadow-inner`}>
                {item.icon}
              </div>

              {/* Անվանում */}
              <h3 className="text-lg font-medium text-gray-800 text-center leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Vcharumner;