import React, { useState } from 'react';

function Avandner({ setActiveTab }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Ավանդներ');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);

    if (cat === 'Պարտատոմսեր' && setActiveTab) setActiveTab('harcer');
    if (cat === 'Կարիերա' && setActiveTab) setActiveTab('kariera');
    if (cat === 'Հիփոթեքային վարկեր' && setActiveTab) setActiveTab('hipoteq');
    if (cat === 'Սպառողական վարկեր' && setActiveTab) setActiveTab('sparoxakan');
    if (cat === 'EvocaTouch' && setActiveTab) setActiveTab('evocatouch');
    if (cat === 'Փոխանցումներ' && setActiveTab) setActiveTab('poxancumner');
    if (cat === 'Քարտեր' && setActiveTab) setActiveTab('qarter');
    if (cat === 'Ավանդներ' && setActiveTab) setActiveTab('avandner');
    if (cat === 'Այլ' && setActiveTab) setActiveTab('ayl');
  };

  const questionsList = [
    {
      q: "Վստահելի՞ է արդյոք ավանդ ներդնելը Evocabank-ում:",
      a: "Evocabank-ը հիմնադրվել է 1990թ. և գործում է շուրջ 29 տարի: Բանկն իր գործունեության ընթացքում արժանացել է բազմաթիվ միջազգային մրցանակների և հանդիսանում է իր բոլոր հաճախորդների համար ազնիվ և վստահելի գործընկեր:\nԻ հավելումն, համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի` Evocabank-ում ներդրված բոլոր ավանդները երաշխավորված են Ավանդների փոխհատուցումը երաշխավորող հիմնադրամի կողմից:"
    },
    {
      q: "Ի՞նչ է ավանդների հատուցումը երաշխավորող հիմնադրամը:",
      a: "Ավանդների հատուցումը երաշխավորող հիմնադրամը (այսուհետ` Հիմնադրամ) շահույթ ստանալու նպատակ չհետապնդող իրավաբանական անձ է, որի հիմնադրման հիմնական նպատակը Հայաստանի Հանրապետության բանկային համակարգի կայունության և հուսալիության ապահովումն է` ֆիզիկական անձանց և անհատ ձեռնարկատերերի բանկային ավանդների հատուցումը երաշխավորելու միջոցով: Հիմնադրամի հիմնադիրը Հայաստանի Հանրապետության Կենտրոնական բանկն է:"
    },
    {
      q: "Կարելի՞ է ավանդի գումարն օգտագործել պայմանագրի ժամկետից շուտ:",
      a: "Ժամկետից շուտ գումարի ելքագրումը համարվում է ավանդային պայմանագրի խզում, ինչի հետևանքով տեղի է ունենում հաշվեգրված տոկոսների վերահաշվարկ՝ համաձայն Բանկում գործող ավանդների ներգրավման պայմանների և սակագների:"
    },
    {
      q: "Ի՞նչ է եկամտային հարկը, և որքա՞ն հարկ եմ վճարելու ավանդ ներդնելու դեպքում:",
      a: "ՀՀ օրենքի համաձայն՝ սկսած 1995թ. ապրիլի 1-ից բանկերը և այլ ֆինանսավարկային կազմակերպությունները պարտավոր են հաշվարկել և պահել եկամտային հարկ Ֆիզիկական անձանցից և անհատ ձեռնարկատերերից ներգրաված ավանդների դիմաց վճարվող տոկոսագումարից, որը կազմում է տոկոսագումարի 10%-ը:"
    }
  ];

  const sidebarCategories = [
    'Պարտատոմսեր',
    'Կարիերա',
    'Հիփոթեքային վարկեր',
    'Սպառողական վարկեր',
    'EvocaTouch',
    'Փոխանցումներ',
    'Քարտեր',
    'Ավանդներ',
    'Այլ'
  ];

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        {/* Հավասար և մաքուր Header */}
        <header className="w-full bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-600">
            <div className="flex gap-6">
              <span className="font-semibold text-black cursor-pointer">Անհատ</span>
              <span className="cursor-pointer hover:text-black">Բիզնես</span>
              <span className="cursor-pointer hover:text-black">Ակնթարթային վճարումներ</span>
              <span className="cursor-pointer hover:text-black">Մեր մասին</span>
              <span className="cursor-pointer hover:text-black">Նորություններ</span>
              <span className="cursor-pointer hover:text-black">Բլոգ</span>
              <span className="cursor-pointer hover:text-black">Կարիերա</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="cursor-pointer">Առցանց հայտեր</span>
              <span className="cursor-pointer">Հետադարձ կապ</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-black tracking-wider text-black">evoca</h1>
            </div>
            <div>
              <a href="/online" className="bg-[#6400dc] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md hover:bg-[#5200b8] transition-colors">
                EvocaONLINE
              </a>
            </div>
          </div>
        </header>

        {/* Էջի հիմնական բովանդակություն */}
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Հաճախ տրվող հարցեր
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* ձախ կողմի մենյու */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-1">
              {sidebarCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryClick(cat)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    activeCategory === cat 
                      ? 'text-[#6400dc] font-bold bg-purple-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {activeCategory === cat && <span className="w-1 h-4 bg-[#6400dc] rounded-full"></span>}
                    {cat}
                  </span>
                </button>
              ))}
            </div>

            {/* Աջ կողմի հարցեր ու սլաքներ */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 border-b border-gray-200 pb-4">
                {activeCategory}
              </h2>

              <div className="space-y-4">
                {questionsList.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div 
                      key={index} 
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-gray-50/50 transition-colors"
                      >
                        <span className="font-semibold text-neutral-900 text-sm lg:text-base">
                          {item.q}
                        </span>
                        <svg 
                          className={`w-5 h-5 text-[#6400dc] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-gray-700 text-sm leading-relaxed border-t border-gray-100 whitespace-pre-line">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Avandner;