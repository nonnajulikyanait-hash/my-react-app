import React from 'react';

const Vcharumner = ({ setActiveTab }) => {
  const paymentCategories = [
    {
      id: 'evocabank',
      title: 'EVOCABANK',
      icon: 'https://resource.evoca.am/images/WebPayment/evoca.png',
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
          {paymentCategories.map((item, index) => {
            // Եթե սա վերջին տարրն է (7-րդը), այն լայն էկրանների վրա դնում ենք մեջտեղում (col-span-full և flex ցանցով կենտրոնացում)
            const isLast = index === paymentCategories.length - 1;

            return (
              <div
                key={item.id}
                className={`bg-white w-full max-w-sm rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[260px] group hover:bg-purple-50/60 ${
                  isLast ? 'sm:col-span-2 lg:col-span-3 justify-self-center' : ''
                }`}
              >
                {/* Իկոնայի ֆոն/տուփ (Hover-ի ժամանակ փոխվում է ավելի հագեցած բաց մանուշակագույնի) */}
                <div className="w-28 h-28 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 shadow-inner transition-colors duration-300 p-4">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-16 h-16 object-contain" 
                  />
                </div>

                {/* Անվանում */}
                <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Vcharumner;