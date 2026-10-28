import React, { useState } from 'react';

const Qarter = ({ setActiveTab }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;

  // ԲՈԼՈՐ 22 ՔԱՐՏԵՐԻ ՏՎՅԱԼՆԵՐԸ ԿԱՏԵԳՈՐԻԱՆԵՐՈՎ
  const cardsList = [
    {
      id: 1,
      title: "Evoca Travel Card",
      image: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg",
      desc: "Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը։",
      categories: ['Mastercard'],
      features: [
        { label: "Cashback արտասահմանում իրականացրած վճարումների համար", value: "1.5%", prefix: "Մինչև" },
        { label: "Lounge Key սրահներ քեզ և հյուրերիդ համար", value: "6 մուտք", prefix: "Անվճար" },
        { label: "Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար", value: "6 անգամ", prefix: "Անվճար" },
        { label: "Քարտի տարեկան սպասարկում", value: "16․000֏" }
      ]
    },
    {
      id: 2,
      title: "Evoca Visa Platinum",
      image: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png",
      desc: "Պրեմիում առավելություններ պրեմիում քարտով։",
      categories: ['Պրեմիում', 'VISA'],
      features: [
        { label: "Սպասարկման վճար", value: "30.000 ֏" },
        { label: "Օդանավակայանների բիզնես սրահներ", value: "6 մուտք", prefix: "Անվճար" }
      ]
    },
    {
      id: 3,
      title: "Wilco Visa Infinite",
      image: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png",
      desc: "Բացահայտեք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ։",
      categories: ['Պրեմիում', 'VISA'],
      features: []
    },
    {
      id: 4,
      title: "Evoca Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
      desc: "Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:)",
      categories: ['Նվեր քարտեր'],
      features: []
    },
    {
      id: 5,
      title: "Digital Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png",
      desc: "Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ կհավանի՞, թե՞ ոչ։ Մենք առաջարկում ենք իդեալական նվերի տարբերակ։",
      categories: ['Նվեր քարտեր', 'Թվային քարտեր', 'Mastercard'],
      features: []
    },
    {
      id: 6,
      title: "Visa Infinite",
      image: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
      desc: "Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է։",
      categories: ['Պրեմիում', 'VISA'],
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում", value: "1%" },
        { label: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում", value: "1.2%" },
        { label: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում", value: "1.5%", prefix: "min 2,500 ֏" },
        { label: "Տարեկան սպասարկում", value: "100,000 ֏" }
      ]
    },
    {
      id: 7,
      title: "Visa Vision",
      image: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
      desc: "Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:)",
      categories: ['VISA'],
      features: []
    },
    {
      id: 8,
      title: "Mastercard World Digital",
      image: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
      desc: "Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում։",
      categories: ['Թվային քարտեր', 'Mastercard'],
      features: [
        { label: "Կանխիկացում բանկի բանկոմատներից", value: "2%" },
        { label: "Կանխիկացում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով", value: "2.5%" }
      ]
    },
    {
      id: 9,
      title: "UnionPay Business Platinum",
      image: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
      desc: "Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:",
      categories: ['Պրեմիում', 'UnionPay'],
      features: [
        { label: "Կանխիկացում", value: "0.5%" },
        { label: "Քարտի ժամկետ", value: "5 տարի" },
        { label: "Տարեկան սպասարկման վճար", value: "15,000 ֏" },
        { label: "Կիրառություն", value: "Ամենուր" }
      ]
    },
    {
      id: 10,
      title: "MyLer Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png",
      desc: "Մեկ քարտ, անսահմանափակ արկածներ:)",
      categories: ['Նվեր քարտեր', 'arca'],
      features: []
    },
    {
      id: 11,
      title: "UnionPay Gold",
      image: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
      desc: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:",
      categories: ['UnionPay'],
      features: [
        { label: "Կանխիկացում", value: "0.5%" },
        { label: "Քարտի ժամկետ", value: "5 տարի" },
        { label: "Տարեկան սպասարկման վճար", value: "15,000 ֏" }
      ]
    },
    {
      id: 12,
      title: "4U.am Gift card",
      image: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png",
      desc: "Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր։",
      categories: ['Նվեր քարտեր', 'arca'],
      features: []
    },
    {
      id: 13,
      title: "Mastercard Gold",
      image: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png",
      desc: "Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով։",
      categories: ['Mastercard'],
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում մինչև 2 մլն ֏", value: "0%" },
        { label: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում", value: "0.8%" },
        { label: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում", value: "1%", prefix: "min 1,500 ֏" },
        { label: "Տարեկան սպասարկում", value: "15․000 ֏" }
      ]
    },
    {
      id: 14,
      title: "Mastercard Standard",
      image: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png",
      desc: "Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն։",
      categories: ['Mastercard'],
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում մինչև 1 մլն ֏", value: "0%" },
        { label: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում", value: "0.8%" },
        { label: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում", value: "1%", prefix: "min 1,500 ֏" },
        { label: "Քարտի տարեկան սպասարկում", value: "5000 ֏" }
      ]
    },
    {
      id: 15,
      title: "Visa Digital",
      image: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png",
      desc: "Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում:",
      categories: ['Թվային քարտեր', 'VISA'],
      features: [
        { label: "Կանխիկացում բանկի բանկոմատներից", value: "2%" },
        { label: "Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք", value: "4%", prefix: "մինչև" },
        { label: "Տարեկան սպասարկում", value: "1000 ֏" },
        { label: "Քեշբեք", value: "0.5%", prefix: "մինչև" }
      ]
    },
    {
      id: 16,
      title: "Visa Classic",
      image: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png",
      desc: "Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:",
      categories: ['VISA'],
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում", value: "0.2%" },
        { label: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում", value: "0.8%" },
        { label: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում", value: "1%", prefix: "min 1,500 ֏" },
        { label: "Տարեկան սպասարկում", value: "5,000 ֏" }
      ]
    },
    {
      id: 17,
      title: "Arca Classic",
      image: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png",
      desc: "Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի։",
      categories: ['arca'],
      features: [
        { label: "Քարտերով կանխիկի տրամադրում Բանկի ATM-ով", value: "0.5%", prefix: "Արտարժույթ" },
        { label: "Քարտերով կանխիկի տրամադրում Բանկի ATM-ով", value: "0.2%", prefix: "մինչև 300,000 ֏` անվճար" },
        { label: "Քարտերով կանխիկի տրամադրում «ԱրՔա» համակարգի այլ բանկերի ATM-ով և POS-ով", value: "1%" },
        { label: "Տարեկան սպասարկում", value: "1500 ֏" }
      ]
    },
    {
      id: 18,
      title: "Arca-UnionPay",
      image: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png",
      desc: "Մեկ քարտ, բազմաթիվ հնարավորություններ. Arca՝ ամենօրյա գնումների և UnionPay՝ ճամփորդությունների և միջազգային գնումների համար։",
      categories: ['arca', 'UnionPay'],
      features: [
        { label: "տարեկան (ամսական՝ 250֏)", value: "2,500֏", prefix: "Սակագին" },
        { label: "տեղական գործարքներից", value: "2%", prefix: "Cashback" },
        { label: "անվճար կանխիկացում Բանկի ATM-ով", value: "1,000,000֏", prefix: "Մինչև" },
        { label: "երկրում քարտով գործարքներ կատարելու հնարավորություն", value: "189", prefix: "Ավելի քան" }
      ]
    },
    {
      id: 19,
      title: "Visa Business",
      image: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png",
      desc: "Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով։",
      categories: ['VISA'],
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում", value: "0.2%" },
        { label: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում", value: "0.8%" },
        { label: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում", value: "1%", prefix: "min 1,500 ֏" },
        { label: "Բանկի տարածքում քարտային հաշվից կանխիկի տրամադրում", value: "0.2%" }
      ]
    },
    {
      id: 20,
      title: "Dalma Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png",
      desc: "Նվեր ընտրելն այլևս դժվար չէ:)",
      categories: ['Նվեր քարտեր'],
      features: []
    },
    {
      id: 21,
      title: "Rio Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png",
      desc: "Ամեն ինչ մեկ նվեր քարտում",
      categories: ['Նվեր քարտեր'],
      features: []
    },
    {
      id: 22,
      title: "Visa Gold",
      image: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png",
      desc: "Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից",
      categories: ['VISA'],
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում", value: "0.2%" },
        { label: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում", value: "0.8%" },
        { label: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում", value: "1%", prefix: "min 1,500 ֏" },
        { label: "Տարեկան սպասարկում", value: "15,000 ֏" }
      ]
    }
  ];

  // FILTRAR
  const filteredCards = activeFilter === 'Բոլորը'
    ? cardsList
    : cardsList.filter(card => card.categories && card.categories.includes(activeFilter));

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const filterButtons = [
    'Բոլորը',
    'Պրեմիում',
    'Նվեր քարտեր',
    'Թվային քարտեր',
    'arca',
    'VISA',
    'Mastercard',
    'UnionPay'
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <div className="bg-purple-700 text-white py-3 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-wrap space-x-6 text-sm font-medium">
            <span className="font-bold border-b-2 border-white pb-1 cursor-pointer">Քարտեր</span>
            <span className="hover:opacity-80 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
            <span className="hover:opacity-80 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
            <span className="hover:opacity-80 cursor-pointer">Evoca Benefits</span>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 md:px-12 pt-8 pb-16">
          {selectedCard ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-purple-700 font-medium transition cursor-pointer"
                >
                  <span>← Վերադառնալ</span>
                </button>
                <div className="text-sm text-gray-400 flex items-center space-x-2">
                  <span onClick={() => { setSelectedCard(null); setActiveTab && setActiveTab('home'); }} className="cursor-pointer hover:text-purple-600">Անհատ</span>
                  <span>/</span>
                  <span onClick={() => setSelectedCard(null)} className="cursor-pointer hover:text-purple-600">Քարտեր</span>
                  <span>/</span>
                  <span className="text-gray-600 font-medium">{selectedCard.title}</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 max-w-5xl mx-auto mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="flex justify-center">
                    <img src={selectedCard.image} alt={selectedCard.title} className="w-full max-w-md h-auto object-contain drop-shadow-xl" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4">{selectedCard.title}</h1>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">{selectedCard.desc}</p>
                    
                    {selectedCard.features.length > 0 && (
                      <div className="grid grid-cols-2 gap-6 mb-8 bg-gray-50 p-6 rounded-2xl">
                        {selectedCard.features.map((feat, idx) => (
                          <div key={idx}>
                            {feat.prefix && <span className="text-xs text-gray-400 block">{feat.prefix}</span>}
                            <div className="text-xl font-bold text-purple-700">{feat.value}</div>
                            <div className="text-xs text-gray-500 mt-1">{feat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-base px-8 py-3.5 rounded-full transition shadow-md cursor-pointer">
                      Պատվիրել քարտը
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-sm text-gray-400 mb-4 flex items-center space-x-2">
                <span onClick={() => setActiveTab && setActiveTab('home')} className="cursor-pointer hover:text-purple-600">Անհատ</span>
                <span>/</span>
                <span className="text-gray-600 font-medium">Քարտեր</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8">
                Քարտեր
              </h1>

              {/* FILTER BUTTONS */}
              <div className="flex flex-wrap gap-3 mb-12">
                {filterButtons.map((btn) => (
                  <button
                    key={btn}
                    onClick={() => handleFilterClick(btn)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition cursor-pointer ${
                      activeFilter === btn
                        ? 'bg-purple-700 text-white shadow-sm'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'
                    }`}
                  >
                    {btn}
                  </button>
                ))}
              </div>

              {/* CARD LIST */}
              {currentCards.length > 0 ? (
                <div className="space-y-12 mb-16">
                  {currentCards.map((card) => (
                    <div key={card.id} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-10 hover:shadow-md transition">
                      <div 
                        onClick={() => setSelectedCard(card)} 
                        className="w-full lg:w-1/3 flex justify-center cursor-pointer transform hover:scale-105 transition duration-300"
                      >
                        <img src={card.image} alt={card.title} className="w-full max-w-sm h-auto object-contain drop-shadow-md" />
                      </div>
                      
                      <div className="w-full lg:w-2/3">
                        <h3 
                          onClick={() => setSelectedCard(card)} 
                          className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-4 hover:text-purple-700 transition cursor-pointer"
                        >
                          {card.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{card.desc}</p>
                        
                        {card.features.length > 0 && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {card.features.map((feat, fIdx) => (
                              <div key={fIdx}>
                                {feat.prefix && <span className="text-xs text-gray-400 block">{feat.prefix}</span>}
                                <div className="text-lg md:text-xl font-bold text-purple-700">{feat.value}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{feat.label}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        <button
                          onClick={() => setSelectedCard(card)}
                          className="inline-flex items-center space-x-1 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer"
                        >
                          <span>Մանրամասն</span>
                          <span>›</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center text-gray-500 shadow-sm border border-gray-100 mb-16">
                  <p className="text-lg">Այս կատեգորիայում քարտեր չեն գտնվել:</p>
                </div>
              )}

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 my-10">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-lg font-bold transition ${
                      currentPage === 1 ? 'opacity-40 cursor-not-allowed bg-gray-100' : 'hover:bg-purple-700 hover:text-white cursor-pointer bg-white'
                    }`}
                  >
                    ←
                  </button>

                  <span className="text-sm font-medium text-gray-600">
                    Էջ <strong className="text-purple-700">{currentPage}</strong> / {totalPages}
                  </span>

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-lg font-bold transition ${
                      currentPage === totalPages ? 'opacity-40 cursor-not-allowed bg-gray-100' : 'hover:bg-purple-700 hover:text-white cursor-pointer bg-white'
                    }`}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

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

export default Qarter;