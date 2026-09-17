import React, { useState } from 'react';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

function DepositsComponent({ setActiveTab }) {
  const [activeSubTab, setActiveSubTab] = useState('deposits');
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [detailTab, setDetailTab] = useState('about');

  // Սլայդերի տարբերակները
  const sliderItems = [
    {
      title: "Ավանդ Evoca Online",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg"
    },
    {
      title: "Մանկական ավանդ",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg"
    },
    {
      title: "Դասական ավանդ",
      image: "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg"
    },
    {
      title: "Ավանդ Evoca Online",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1));
  };

  const depositsList = [
    {
      id: 1,
      title: "Դասական ավանդ",
      description: "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:",
      image: "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg",
      details: [
        { label: "Գումար", value: "սկսած 100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "31-1,825 օր", sub: "" },
        { label: "Տոկոսադրույք", value: "մինչև 10.5% ֏", sub: "մինչև" },
        { label: "Համալրման հնարավորություն", value: "սկսած 100,000 ֏", sub: "սկսած" }
      ]
    },
    {
      id: 2,
      title: "Մանկական ավանդ",
      description: "Ձեր երեխայի աճող ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ։ «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով:",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg",
      details: [
        { label: "Գումար", value: "սկսած 100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "մինչև 18 լրանալը", sub: "մինչև" },
        { label: "Տոկոսադրույք", value: "9.5% ֏", sub: "" },
        { label: "Համալրման հնարավորություն", value: "սկսած 40,000 ֏", sub: "սկսած" }
      ]
    },
    {
      id: 3,
      title: "Ավանդ Evoca Online",
      description: "Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ։ Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու։ Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg",
      details: [
        { label: "Գումար", value: "սկսած 100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "31-1,825 օր", sub: "" },
        { label: "Տոկոսադրույք", value: "մինչև 10.75% ֏", sub: "մինչև" }
      ]
    }
  ];

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen flex flex-col justify-between">
      <div>
        {/* Մանուշակագույն Ենթամենյու (Subheader) */}
        <div className="w-full bg-purple-800 text-white px-6 lg:px-10 shadow-inner">
          <div className="flex space-x-8 text-sm font-medium">
            <button 
              onClick={() => { setActiveSubTab('deposits'); setSelectedDeposit(null); }}
              className={`py-3 cursor-pointer transition-colors border-b-2 ${
                activeSubTab === 'deposits' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Ավանդներ
            </button>
            <button 
              onClick={() => { setActiveSubTab('info'); setSelectedDeposit(null); }}
              className={`py-3 cursor-pointer transition-colors border-b-2 ${
                activeSubTab === 'info' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Կարևոր տեղեկատվություն
            </button>
          </div>
        </div>

        {/* Եթե բացված է կոնկրետ ավանդի մանրամասն էջը */}
        {selectedDeposit ? (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-16">
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Ավանդներ  &gt;  Ավանդներ  &gt;  <span className="text-gray-600">{selectedDeposit.title}</span>
            </div>

            <button 
              onClick={() => setSelectedDeposit(null)}
              className="text-sm text-purple-700 hover:text-purple-900 font-semibold mb-4 flex items-center space-x-1 cursor-pointer"
            >
              <span>‹ Վերադառնալ</span>
            </button>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-6">{selectedDeposit.title}</h2>

            <div className="flex space-x-8 border-b border-gray-200 mb-8">
              <button 
                onClick={() => setDetailTab('about')}
                className={`pb-3 font-semibold text-sm cursor-pointer border-b-2 transition-colors ${
                  detailTab === 'about' ? 'border-purple-800 text-purple-800' : 'border-transparent text-gray-500 hover:text-neutral-800'
                }`}
              >
                Ավանդի մասին
              </button>
              <button 
                onClick={() => setDetailTab('terms')}
                className={`pb-3 font-semibold text-sm cursor-pointer border-b-2 transition-colors ${
                  detailTab === 'terms' ? 'border-purple-800 text-purple-800' : 'border-transparent text-gray-500 hover:text-neutral-800'
                }`}
              >
                Պայմաններ և սակագներ
              </button>
            </div>

            {detailTab === 'about' ? (
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <img 
                    src={selectedDeposit.image} 
                    alt={selectedDeposit.title} 
                    className="w-full h-48 lg:h-52 object-cover rounded-xl shadow-sm"
                  />
                </div>
                <div className="w-full lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-3">{selectedDeposit.title}</h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                      {selectedDeposit.description} Որպես Բանկի ավանդատու՝ Դուք կստանաք նաև միջազգային քարտ՝ բացարձակ անվճար, որին ցանկության դեպքում կփոխանցվեն Ձեր ավանդի տոկոսագումարները։
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                    {selectedDeposit.details.map((item, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xs text-gray-400 mb-1">{item.sub}</span>
                        <span className="text-lg lg:text-xl font-bold text-neutral-800">{item.value}</span>
                        <span className="text-xs text-gray-500 mt-0.5">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-8 text-sm text-gray-700 overflow-x-auto">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Ընդունման ժամկետներն ըստ օրերի քանակի և տոկոսադրույքներ</h3>
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-gray-200 text-xs text-gray-500">
                      <th className="py-3 px-2">Նվազագույն գումար և արժույթ</th>
                      <th className="py-3 px-2">Տոկոսների վճարման եղանակը</th>
                      <th className="py-3 px-2">31 - 90 օր</th>
                      <th className="py-3 px-2">91 - 180 օր</th>
                      <th className="py-3 px-2">181 - 270 օր</th>
                      <th className="py-3 px-2">271 - 365 օր</th>
                      <th className="py-3 px-2">366 - 549 օր</th>
                      <th className="py-3 px-2">550 - 730 օր</th>
                      <th className="py-3 px-2">731 - 1825 օր</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    <tr>
                      <td className="py-3 px-2 font-bold" rowSpan="3">100,000 ՀՀ դրամ</td>
                      <td className="py-3 px-2">Տոկոսները ժամկետի վերջում վճարմամբ</td>
                      <td className="py-3 px-2">4.50 %</td>
                      <td className="py-3 px-2">6.00 %</td>
                      <td className="py-3 px-2">7.00 %</td>
                      <td className="py-3 px-2">8.00 %</td>
                      <td className="py-3 px-2">9.50 %</td>
                      <td className="py-3 px-2">10.00 %</td>
                      <td className="py-3 px-2">10.50 %</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2">Ամենամսյա տոկոսների վճարմամբ</td>
                      <td className="py-3 px-2">4.00 %</td>
                      <td className="py-3 px-2">5.50 %</td>
                      <td className="py-3 px-2">6.50 %</td>
                      <td className="py-3 px-2">7.50 %</td>
                      <td className="py-3 px-2">9.00 %</td>
                      <td className="py-3 px-2">9.50 %</td>
                      <td className="py-3 px-2">10.00 %</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2">Տոկոսները եռամսյա վճարմամբ</td>
                      <td className="py-3 px-2">-</td>
                      <td className="py-3 px-2">5.50 %</td>
                      <td className="py-3 px-2">6.50 %</td>
                      <td className="py-3 px-2">7.50 %</td>
                      <td className="py-3 px-2">9.00 %</td>
                      <td className="py-3 px-2">9.50 %</td>
                      <td className="py-3 px-2">10.00 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6">
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Ավանդներ  &gt;  <span className="text-gray-600">Ավանդներ</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-8">Ավանդներ</h2>

            {activeSubTab === 'deposits' ? (
              <div className="space-y-8">
                {depositsList.map((deposit) => (
                  <div 
                    key={deposit.id} 
                    className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-8 transition-all hover:shadow-md"
                  >
                    <div className="w-full lg:w-1/3 flex-shrink-0">
                      <img 
                        src={deposit.image} 
                        alt={deposit.title} 
                        className="w-full h-48 lg:h-52 object-cover rounded-xl shadow-sm"
                      />
                    </div>

                    <div className="w-full lg:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-800 mb-3">{deposit.title}</h3>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                          {deposit.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                        {deposit.details.map((item, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-xs text-gray-400 mb-1">{item.sub}</span>
                            <span className="text-lg lg:text-xl font-bold text-neutral-800">{item.value}</span>
                            <span className="text-xs text-gray-500 mt-0.5">{item.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex justify-end">
                        <button 
                          onClick={() => setSelectedDeposit(deposit)}
                          className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold px-5 py-2 rounded-full text-sm transition-colors cursor-pointer flex items-center space-x-1"
                        >
                          <span>Մանրամասն</span>
                          <span>›</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">Կարևոր տեղեկատվություն ավանդների վերաբերյալ</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ՀՀ օրենսդրության համաձայն՝ ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորված է «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքով:
                </p>
              </div>
            )}
          </div>
        )}

        {/* Այլ ավանդներ Սլայդեր */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 mb-12">
          <h3 className="text-2xl font-extrabold text-neutral-800 mb-6">Այլ ավանդներ</h3>
          
          <div className="relative flex items-center">
            {/* Ձախ սլաք */}
            <button 
              onClick={prevSlide}
              className="absolute -left-4 lg:-left-6 z-10 bg-white shadow-md border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              ‹
            </button>

            {/* Սլայդերի կոնտեյներ */}
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-300 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {sliderItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="min-w-[100%] sm:min-w-[50%] lg:min-w-[32%] flex-shrink-0 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      const found = depositsList.find(d => d.title === item.title);
                      if(found) { setSelectedDeposit(found); setActiveSubTab('deposits'); window.scrollTo(0, 0); }
                    }}
                  >
                    <div className="w-full h-44 rounded-xl overflow-hidden mb-4 bg-purple-900 flex items-center justify-center p-4">
                      <img src={item.image} alt={item.title} className="max-h-full object-contain rounded-lg" />
                    </div>
                    <h4 className="text-base font-bold text-neutral-800 text-center">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Աջ սլաք */}
            <button 
              onClick={nextSlide}
              className="absolute -right-4 lg:-right-6 z-10 bg-white shadow-md border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>

        {/* Evoca Online & Mobile բաժին */}
        <EvocaOnlineMobile />
      </div>

      {/* Ստորին հատված (Footer) */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default DepositsComponent;