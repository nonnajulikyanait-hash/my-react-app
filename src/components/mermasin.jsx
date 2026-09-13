import React, { useState, useRef } from 'react';
import Karucvacq from './karucvacq.jsx';
import Bajneterer from './bajneterer.jsx'; // Ներմուծում ենք Բաժնետերերի ֆայլը

function Mermasin() {
  const [activeSubTab, setActiveSubTab] = useState('Ընդհանուր');
  const [activeYear, setActiveYear] = useState('2026');
  const scrollRef = useRef(null);

  const subTabs = [
    'Ընդհանուր',
    'Կառուցվածք',
    'Բաժնետերեր',
    'Ղեկավարություն',
    'Գործընկերներ',
    'Մրցանակներ',
    'CSR',
    'Էվոկա ֆինանսական խումբ',
  ];

  const yearsList = [
    '2026', '2025', '2024', '2023', '2022', '2021', 
    '2020', '2019', '2018', '2017', '2016', '2015', 
    '2012', '2008', '2006', '2005', '2000', '1993', '1990'
  ];

  const historyData = {
    '2026': {
      text: 'Բանկը բացեց նոր «Աջափնյակ» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երը:',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
    },
    '2025': {
      text: 'Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ ՓԲԸ-ից ԲԲԸ-ի: Evoca-ն և EBRD-ն ստորագրեցին համագործակցության համաձայնագիր։ Ներկայացվեց Evoca Travel Card-ը։ Մեկնարկեցին Evoca Partners Club-ն և Evoca Benefits նախագիծը։',
      image: 'https://www.evoca.am/images-cache/histories/1/17574211752061/450x330.png'
    },
    '2024': {
      text: 'Evocabank-ը ձեռք է բերել նոր միջազգային գործընկերներ, այդ թվում՝ EIB Global-ը, հովանավորել մի շարք նախագծեր, ներկայացրել իր նոր EvocaHOME օվերդրաֆտը, ինչպես նաև արժանացել միջազգային մրցանակների։',
      image: 'https://www.evoca.am/images-cache/histories/1/17240707281875/450x330.png'
    },
    '2023': {
      text: 'Evocabank-ը թողարկել է նոր, գերժամանակակից EvocaTOUCH 2 և EvocaINVEST հավելվածները։ Գործընկերներին է ներկայացրել Evoca Digital քարտը, Action օնլայն վարկը, Էլեկտրոնային ստորագրության e-Sign համակարգը։',
      image: 'https://www.evoca.am/images-cache/histories/1/17001230844576/450x330.jpg'
    },
    '2022': {
      text: 'Evoca-ն համալրել է կանոնադրական կապիտալը 3 մլրդ դրամով: Թողարկել է պարտատոմսեր։ Ներկայացրել է Visa Vision քարտը։ ՀայՓոստի հետ սկսել է համագործակցություն՝ հարմարավետ և հասանելի ֆինտեխ ծառայությունների գծով։ Գործարկել է Evoca mobile POS-ը։',
      image: 'https://www.evoca.am/images-cache/histories/1/16542512333235/450x330.png'
    },
    '2021': {
      text: 'Evoca-ի նոր, կրեատիվ լուծումներով կայքը Awwwards թիմի կողմից արժանացել է 2 մրցանակի: Բանկը ներկայացրել է իր Evoca Gift Card-ը: Բանկը 2 փուլով թողարկել է պարտատոմսեր, այդ թվում՝ online տարբերակով:',
      image: 'https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png'
    },
    '2020': {
      text: 'Evocabank-ը յուրահատուկ կերպով նշեց իր 3 և Բանկի հիմնադրման 30-ամյակը՝ առաջին անգամ Հայաստանում կազմակերպելով լուսային դրոն շոու: 300 դրոն միաժամանակ լուսավորեցին Երևանի երկինքը՝ շնորհավորելով Evocabank-ի տարեդարձը:',
      image: 'https://www.evoca.am/images-cache/histories/1/16328279547034/450x330.png'
    },
    '2019': {
      text: 'Evocabank-ի Վարչության նախագահի տեղակալ Կարեն Եղիազարյանը նշանակվել է Բանկի Վարչության նախագահ: Ներկայացվել է Visa Infinite քարտը: Բանկը դարձել է Եվրատեսիլ 2019-ի հեռարձակման գլխավոր հովանավոր։',
      image: 'https://www.evoca.am/images-cache/histories/1/16099255150877/450x330.jpg'
    },
    '2018': {
      text: 'Evocabank-ը երկրորդ տարին անընդմեջ Global Finance հեղինակավոր ամսագրի կողմից ճանաչվել է Լավագույն սպառողական թվային բանկը Հայաստանում: Ներկայացվել են ArCa-MIR և Shopping Card քարտերը:',
      image: 'https://www.evoca.am/images-cache/histories/1/16099254755799/450x330.jpg'
    },
    '2017': {
      text: 'Բանկը վերանվանվել է Evocabank-ի՝ փոխելով իր ռազմավարությունը և բիզնես մոդելը՝ անցնելով mobile-first ֆորմատի: Անդամակցել է VISA վճարային համակարգին: Ներկայացրել է SingleTOUCH օնլայն վարկատեսակը:',
      image: 'https://www.evoca.am/images-cache/histories/1/16099254320292/450x330.jpg'
    },
    '2016': {
      text: 'Բանկի նորմատիվային ընդհանուր կապիտալը գերազանցել է ԿԲ սահմանած 30 մլրդ. ՀՀ դրամ նվազագույն պահանջը: Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ վերակազմավորվելով ՍՊԸ-ից ՓԲԸ-ի:',
      image: 'https://www.evoca.am/images-cache/histories/1/16099253889356/450x330.jpg'
    },
    '2015': {
      text: 'Ներդրվել է Prometey Mobile բջջային հավելվածը և իրականացվել է հավելվածի՝ Իվետա Մուկուչյանի մասնակցությամբ գովազդային արշավը, որի շրջանակներում թողարկվել է հատուկ բրենդավորված քարտ: Գործարկվել է Prometey Token անվտանգության բջջային հավելվածն App Store-ում և Play Store-ում:',
      image: 'https://www.evoca.am/images-cache/histories/1/16099253491717/450x330.jpg'
    },
    '2012': {
      text: 'Միացել է "UNIStream" դրամական փոխանցումների համակարգին: "Global Finance" ամսագիրը, երկրորդ տարին անդընդմեջ, Բանկին ճանաչել է որպես աշխարհի լավագույն ենթապահառու բանկերից մեկը և 2012թ. «Լավագույն ենթապահառու բանկը» Հայաստանում:',
      image: 'https://www.evoca.am/images-cache/histories/1/1609925307811/450x330.jpg'
    },
    '2008': {
      text: 'Առաջին անգամ Հայաստանում` Բանկը թողարկել և Շվեյցարական առաջատար բանկերից մեկին է վաճառել սեփական ոչ փաստաթղթային առանց ապահովվածության պարտատոմսեր:',
      image: 'https://www.evoca.am/images-cache/histories/1/16099252548716/450x330.jpg'
    },
    '2006': {
      text: 'Ստացել է «MasterCard Europe» վճարային համակարգի աֆիլիատ անդամի կարգավիճակ: Սկսել է թողարկել «Maestro», «MasterCard Standard», «MasterCard Gold», «MasterCard Business» տիպի պլաստիկ քարտեր:',
      image: 'https://www.evoca.am/images-cache/histories/1/16099251674213/450x330.jpg'
    },
    '2005': {
      text: 'Դարձել է «Արմենիան Քարդ» ՓԲԸ բաժնետեր և «ԱրՔա» վճարային համակարգի լիիրավ անդամ:',
      image: 'https://www.evoca.am/images-cache/histories/1/1609925107995/450x330.jpg'
    },
    '2000': {
      text: 'Անդամակցել է S.W.I.F.T. միջազգային փոխանցումների համակարգին:',
      image: 'https://www.evoca.am/images-cache/histories/1/16099250658162/450x330.jpg'
    },
    '1993': {
      text: 'Լիցենզավորվել է ՀՀ Կենտրոնական բանկի կողմից` թիվ 27 ընդհանուր արտոնագրով:',
      image: 'https://www.evoca.am/images-cache/histories/1/16099250213165/450x330.jpg'
    },
    '1990': {
      text: 'Բանկը հիմնադրվել է 1990թ. և մինչև 2017թ. գործել է Պրոմեթևս և Պրոմեթեյ Բանկ անուններով:',
      image: 'https://www.evoca.am/images-cache/histories/1/16099221719641/450x330.jpg'
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      
      {/* 1. Երկրորդ հեդեր՝ լոգո և EvocaONLINE կոճակ */}
      <div className="bg-white py-3.5 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <img 
              src="https://www.evoca.am/file_manager/icons/logo.png" 
              alt="Evocabank Logo" 
              className="h-6 object-contain"
            />
            <div className="hidden md:flex space-x-6 text-sm font-semibold text-neutral-800">
              <a href="#" className="text-[#6400dc]">Evoca-ի մասին</a>
              <a href="#" className="hover:text-[#6400dc]">Սակագներ</a>
              <a href="#" className="hover:text-[#6400dc]">Հաշվետվություններ</a>
              <a href="#" className="hover:text-[#6400dc]">Հայտարարություններ</a>
            </div>
          </div>
          <div>
            <button className="bg-[#6400dc] text-white px-5 py-2 rounded-xl font-bold text-sm shadow-md hover:bg-purple-800 transition-colors cursor-pointer">
              EvocaONLINE
            </button>
          </div>
        </div>
      </div>

      {/* 2. Մանուշակագույն ենթաթաբերի նավիգացիա */}
      <div className="bg-[#6400dc] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-6 py-3 text-sm font-medium whitespace-nowrap scrollbar-none">
          {subTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveSubTab(tab)}
              className={`pb-1 transition-colors hover:text-purple-200 cursor-pointer bg-transparent border-0 ${
                activeSubTab === tab ? 'border-b-2 border-white font-bold' : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Պայմանական ռենդեր՝ կախված ընտրված ենթաթաբից */}
      {activeSubTab === 'Կառուցվածք' ? (
        <Karucvacq setActiveSubTab={setActiveSubTab} />
      ) : activeSubTab === 'Բաժնետերեր' ? (
        <Bajneterer />
      ) : (
        // «Ընդհանուր» բաժնի բովանդակությունը
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-20">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-neutral-900">Ընդհանուր տեղեկատվություն</h2>
              <p className="text-gray-600 leading-relaxed">
                <strong>Evocabank</strong>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
                alt="Evocabank Ընդհանուր" 
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-neutral-900 text-center">Բանկի պատմությունը</h2>
            
            <div className="relative max-w-4xl mx-auto flex items-center">
              <button 
                onClick={scrollLeft}
                className="absolute -left-4 z-20 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                ←
              </button>

              <div 
                ref={scrollRef}
                className="flex space-x-12 overflow-x-auto scrollbar-none px-12 py-4 items-center w-full scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {yearsList.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className="flex flex-col items-center bg-transparent border-0 cursor-pointer group flex-shrink-0 focus:outline-none"
                  >
                    <span className={`text-sm font-semibold mb-2 transition-colors ${activeYear === year ? 'text-[#6400dc]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {year}
                    </span>
                    <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                      activeYear === year 
                        ? 'bg-[#6400dc] border-[#6400dc] scale-125 shadow-md' 
                        : 'bg-white border-gray-300 group-hover:border-gray-400'
                    }`}></div>
                  </button>
                ))}
              </div>

              <button 
                onClick={scrollRight}
                className="absolute -right-4 z-20 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                →
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-3xl border border-gray-100 mt-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {historyData[activeYear] ? historyData[activeYear].text : 'Տվյալ տարվա մասին տեղեկատվություն առայժմ չկա:'}
              </p>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                <img 
                  src={historyData[activeYear] ? historyData[activeYear].image : 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png'} 
                  alt={`Բանկի պատմություն ${activeYear}`} 
                  className="w-full h-auto object-cover transition-all duration-300"
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Mermasin;