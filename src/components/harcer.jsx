import React, { useState } from 'react';
import Footer from './footer'; // Եթե ֆայլի անունը փոքրատառով է կամ այլ, ուղղիր ըստ քո պանակի

function Harcer({ setActiveTab }) {
  // Սլաքով բացվող-փակվող հարցերի state-ը
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Պարտատոմսեր');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Կատեգորիաների սեղմման տրամաբանությունը
  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);

    // Եթե սեղմում են «Կարիերա», տեղափոխում ենք կարիերայի էջ
    if (cat === 'Կարիերա') {
      if (setActiveTab) {
        setActiveTab('kariera');
      }
    }

    // Եթե սեղմում են «Հիփոթեքային վարկեր», տեղափոխում ենք հիփոթեքի էջ
    if (cat === 'Հիփոթեքային վարկեր') {
      if (setActiveTab) {
        setActiveTab('hipoteq');
      }
    }

    // Եթե սեղմում են «Սպառողական վարկեր», տեղափոխում ենք սպառողական վարկերի էջ
    if (cat === 'Սպառողական վարկեր') {
      if (setActiveTab) {
        setActiveTab('sparoxakan');
      }
    }

    // Եթե սեղմում են «EvocaTouch», տեղափոխում ենք EvocaTouch էջ
    if (cat === 'EvocaTouch') {
      if (setActiveTab) {
        setActiveTab('evocatouch');
      }
    }
  };

  // Հարցերի և պատասխանների տվյալները
  const questionsList = [
    {
      q: "Ի՞նչ է պարտատոմսը:",
      a: "Պարտատոմսը (լատիներեն՝ obligation - պարտավորություն) պարտքային արժեթուղթ է, որը հավաստում է դրա տիրապետողի իրավունքը՝ դրանում նշված ժամկետում պարտատոմս թողարկած անձից ստանալ պարտատոմսի անվանական արժեքը, ինչպես նաև տոկոս։"
    },
    {
      q: "Ի՞նչ կլինի, եթե պարտատոմսերում ներդրված գումարն ինձ անհրաժեշտ լինի մինչև մարման ժամկետը:",
      a: "Evocabank-ի կողմից թողարկված պարտատոմսերը ցուցակվելու են Հայաստանի ֆոնդային բորսայում, և Դուք ցանկացած պահի կարող եք գնել կամ վաճառել դրանք:"
    },
    {
      q: "Ինչու՞ պետք է գնեմ պարտատոմսեր՝ ավանդ ներդնելու փոխարեն:",
      a: "Պարտատոմսեր գնելն է՛լ ավելի շահավետ է և հարմար։ Պարտատոմսերն ունեն մի շարք առավելություններ:\n• Պարտատոմսերից ստացված եկամուտները ազատված են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից:\n• Պարտատոմսերը վաճառելու դեպքում Դուք պահպանում եք մինչ այդ պահը կուտակված տոկոսագումարները:"
    },
    {
      q: "Իմ ավանդները երաշխավորված են ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից, իսկ պարտատոմսե՞րը:",
      a: "Պարտատոմսերը ևս երաշխավորված են։ «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի համաձայն՝ Բանկի կողմից թողարկված անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամի» կողմից:"
    },
    {
      q: "Ինչպե՞ս կարող եմ գնել Evocabank-ի պարտատոմսեր:",
      a: "Պարտատոմսեր գնելու համար անհրաժեշտ է՝ Մոտենալ Բանկի ցանկացած գրասենյակ, լրացնել պարտատոմսերի ձեռքբերման հայտ-հանձնարարականը, մուտքագրել գումարը հատուկ հաշվին կամ online տարբերակով` աշխարհի ցանկացած վայրից, օրվա ցանկացած ժամին։"
    },
    {
      q: "Կարող եմ արդյո՞ք անհրաժեշտության դեպքում պարտատոմսերի գրավով վարկ վերցնել:",
      a: "Այո, կարող եք: Ինչպես և ավանդի դեպքում, պարտատոմսերի դեպքում ևս կարելի է պարտատոմսերի գրավով վերցնել կարճաժամկետ վարկ։ Վարկը տրամադրվում է առավելագույնը պարտատոմսի մարման ժամկետով` պարտատոմսի արժեկտրոնային տոկոսադրույք +2%, այսինքն՝ ՀՀ դրամով՝ 12%, ԱՄՆ դոլարով՝ 7.5% տարեկան անվանական տոկոսադրույքով։"
    },
    {
      q: "Ի՞նչ է բաժնետոմսը։",
      a: "Բաժնետոմսը ընկերության սեփականության մասնաբաժին ներկայացնող արժեթուղթ է։ Բաժնետոմս գնելիս՝ ներդրողը դառնում է տվյալ ընկերության մասնակի սեփականատեր և կարող է շահույթ ստանալ բաժնետոմսի գնի աճից կամ ընկերության կողմից վճարվող դիվիդենտներից։"
    },
    {
      q: "Ի՞նչ է ETF-ը։",
      a: "ETF-ը (Exchange Traded Fund) ներդրումային ֆոնդ է, որը վաճառվում և գնվում է բորսայում սովորական բաժնետոմսի նման։ Այն սովորաբար միավորում է բազմաթիվ ակտիվներ մեկ գործիքի մեջ, օրինակ՝ բաժնետոմսեր, պարտատոմսեր կամ ամբողջ ինդեքս։"
    },
    {
      q: "Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև։",
      a: "Բաժնետոմսը կապվում է մեկ ընկերության հետ և ունի ավելի բարձր եկամտաբերության ու ռիսկի պոտենցիալ։ Պարտատոմսը ավելի կայուն գործիք է և ապահովում է կանխատեսելի եկամուտ։ ETF-ը թույլ է տալիս մեկ գործիքով ներդրում անել միանգամից շատ ակտիվներում:"
    },
    {
      q: "Կարո՞ղ եմ բրոքերային հաշիվ բացել առանց մասնաճյուղ այցելելու։",
      a: "Այո, իհարկե։ Հարկավոր է մուտք գործել EvocaTOUCH հավելված, «Հաշիվներ» բաժնում ընտրել «Բրոքերային հաշիվ» և գրանցվել ամբողջությամբ օնլայն՝ ընդամենը մի քանի քայլով։"
    },
    {
      q: "Ո՞ր շուկաներին և գործիքներին է EvocaINVEST-ը ապահովում հասանելիություն։",
      a: "Ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներին, որտեղ հասանելի են բաժնետոմսեր, պարտատոմսեր, եվրապարտատոմսեր և ETF-ներ։"
    },
    {
      q: "Ինչպե՞ս գտնել և գնել կոնկրետ արժեթուղթ։",
      a: "EvocaINVEST-ի Trade բաժնի որոնման դաշտում մուտքագրիր ընկերության անունը կամ կարճ հապավումը (ticker), ընտրիր արժեթուղթն ու նույն էկրանից տեղադրիր գնման պատվեր։"
    },
    {
      q: "Ի՞նչ է ticker-ը։",
      a: "Արժեթղթի կարճ, մի քանի տառանի անվանումն է բորսայում։ Օրինակ՝ Apple-ի ticker-ն է AAPL, իսկ Google-ինը՝ GOOGL։"
    },
    {
      q: "Ի՞նչ է դիվիդենտը։",
      a: "Դիվիդենտը ընկերության կողմից բաժնետերերին վճարվող շահույթի մասն է։"
    },
    {
      q: "Ինչո՞ւ է կարևոր դիվերսիֆիկացիան։",
      a: "Դիվերսիֆիկացիան նշանակում է ներդրումներդ բաշխել տարբեր գործիքների ու ոլորտների միջև, որպեսզի մեկ ակտիվի անկումը քիչ ազդի պորտֆելի վրա։"
    },
    {
      q: "Ի՞նչ ռիսկեր ունի ներդրումը։",
      a: "Արժեթղթերի գները կարող են աճել կամ նվազել՝ կախված շուկայից։ Հնարավոր է ստանալ ինչպես շահույթ, այնպես էլ կորուստ։"
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
                        {/* Վերև-ներքև փոքր սլաք */}
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

export default Harcer;