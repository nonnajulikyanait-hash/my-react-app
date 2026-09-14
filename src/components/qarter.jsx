import React, { useState } from 'react';

function Qarter({ setActiveTab }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Քարտեր');

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
      q: "Ո՞րն է MasterCard և VISA քարտերի տարբերությունը:",
      a: "VISA և MasterCard վճարային համակարգերի միջև էական տարբերություն չկա: Երկուսն էլ միջազգային վճարային համակարգեր են, որոնք գործում են ամբողջ աշխարհում: Evocabank-ում կարելի է ձեռք բերել MasterCard Standard, MasterCard Gold, MasterCard Business, ինչպես նաև Visa Classic, Visa Gold, Visa Infinite տեսակի contactless PayWave քարտեր՝ առանց Բանկ այցելելու՝ EvocaTOUCH հավելվածի միջոցով: Քարտերն առաքվում են ՀՀ տարածքում անվճար:"
    },
    {
      q: "Ի՞նչ առավելություններ ունեն Evocabank-ի քարտերը:",
      a: "Evocabank-ը տրամադրում է միջազգային VISA և MasterCard վճարային համակարգերի քարտեր, ArCa լոկալ քարտեր, ինչպես նաև ArCa MIR տեսակի քարտեր, որոնք սպասարկվում են Ռուսաստանի բոլոր քաղաքներում` ռուսաստանյան քարտերի սակագներով:\n• VISA և MasterCard քարտերը միջազգային, չիպային քարտեր են, որոնք սպասարկվում են աշխարհի ավելի քան 210 երկրներում և ավելի քան 30 մլն. առևտրի կետերում:\n• Evocabank-ում կարելի է ձեռք բերել MasterCard Standard, MasterCard Gold, MasterCard Business, ինչպես նաև Visa Classic, Visa Gold և Visa Infinite տեսակի contactless PayWave քարտեր՝ առանց Բանկ այցելելու՝ EvocaTOUCH հավելվածի միջոցով:\n• Կատարելով գնումներ Evocabank-ի քարտերով` կստանաք 2-44% զեղչ Հայաստանի առաջատար խանութ-սրահներում և ժամանցի վայրերում:\n• Քարտի մնացորդին, քաղվածքին կարելի է հետևել Ձեզ անվճար տրամադրվող EvocaTOUCH հավելվածի միջոցով:"
    },
    {
      q: "Ինչու՞ է երկար տևում քարտից քարտ փոխանցումը:",
      a: "Քարտից քարտ փոխանցումը բանկոմատի կամ arca.am կայքի միջոցով կատարվում է անմիջապես, սակայն քարտային հաշվին արտացոլվում է հաջորդ աշխատանքային օրը:\nԻսկ EvocaTOUCH հավելվածի միջոցով քարտային հաշվից Evocabank-ի այլ քարտային հաշվին փոխանցելու դեպքում աշխատանքային ժամերին քարտին հասանելի է դառնում մինչև 1 ժամվա ընթացքում, իսկ ոչ աշխատանքային ժամերին` հաջորդ աշխատանքային օրը:\nԵթե ցանկանում եք, որ քարտային հաշվին փոխանցվող գումարը անմիջապես ակտիվանա քարտին, կարող եք գումարը փոխանցել հաշվարկային հաշվից:"
    },
    {
      q: "Online փոխանցումները չեղարկելիս ե՞րբ է գումարը հետ նստում քարտին:",
      a: "Եթե օնլայն գնումը չեղարկվել է, գումարը քարտին հետ կմուտքագրվի 20 աշխատանքային օրվա ընթացքում: Ժամկետը պայմանավորված է այն փաստով, որ գործարքը միջազգային է:"
    },
    {
      q: "Հնարավո՞ր է փոխել քարտի PIN ծածկագիրը:",
      a: "Քարտի PIN ծածկագիրը հնարավոր է փոխել Evocabank-ի բանկոմատների միջոցով: Պետք է հավաքել գործող PIN-ը, ընտրել «Լրացուցիչ» կոճակը և կատարել համապատասխան փոփոխությունները:"
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

export default Qarter;