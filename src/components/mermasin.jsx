import React, { useState, useRef } from 'react';

function MerMasin() {
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
      text: 'Բանկը բացեց նոր «Աբովյան» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երդ:',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
    },
    '2025': {
      text: '2025 թվականին բանկն ընդլայնեց իր թվային հարթակները, գործարկեց նոր պրոդուկտներ բիզնեսի և անհատների համար:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png'
    },
    '2024': {
      text: '2024-ին շեշտը դրվեց mobile-first լուծումների և հաճախորդների սպասարկման որակի բարելավման վրա:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg'
    },
    '2023': {
      text: 'Բանկը ստացավ մի շարք հեղինակավոր միջազգային մրցանակներ լավագույն ֆինտեխ գործընկեր անվանակարգում:',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
    },
    '2022': {
      text: '2022 թվականին իրականացվեցին մասնաճյուղերի արդիականացումներ և ներդրվեցին անվտանգության նոր ստանդարտներ:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png'
    },
    '2021': {
      text: 'Հիմնվեցին նոր ռազմավարական ուղղություններ բանկի արագ զարգացման և թվային հեղափոխության համար:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg'
    },
    '2020': {
      text: '2020 թվականին, չնայած մարտահրավերներին, բանկը լիովին անցավ հեռակա և թվային ծառայությունների մատուցմանը:',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
    },
    '2019': {
      text: 'Գործարկվեցին նորարարական պրոդուկտներ և ընդլայնվեց սպասարկման ցանցը Հայաստանի ողջ տարածքով:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png'
    },
    '2018': {
      text: 'Բանկը պաշտոնապես վերանվանվեց և ստացավ նոր բրենդային ուղղվածություն՝ դառնալով Evocabank:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg'
    },
    '2017': {
      text: 'Ներդրվեցին նոր տեխնոլոգիական լուծումներ հաճախորդների սպասարկման արագությունը մեծացնելու համար:',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
    },
    '2016': {
      text: 'Կարևոր քայլեր կատարվեցին թվային բանկինգի զարգացման և հավելվածների արդիականացման ուղղությամբ:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png'
    },
    '2015': {
      text: 'Ընդլայնվեց կորպորատիվ հաճախորդների սպասարկման շրջանակը և առաջարկվեցին նոր ֆինանսական գործիքներ:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg'
    },
    '2012': {
      text: 'Բանկը նշեց հիմնադրման կարևոր հոբելյանական տարեդարձը՝ արձանագրելով աճող ցուցանիշներ:',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
    },
    '2008': {
      text: 'Հաջողությամբ հաղթահարվեցին համաշխարհային ֆինանսական մարտահրավերները՝ պահպանելով կայունությունը:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png'
    },
    '2006': {
      text: 'Ընդլայնվեց մասնաճյուղային ցանցը մայրաքաղաքում և մարզերում:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg'
    },
    '2005': {
      text: 'Ներդրվեցին առաջին ժամանակակից քարտային համակարգերն ու պրոցեսինգային լուծումները:',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
    },
    '2000': {
      text: 'Նոր հազարամյակի սկզբին բանկը ձևավորեց զարգացման երկարաժամկետ ռազմավարություն:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png'
    },
    '1993': {
      text: 'Բանկը հիմնադրվել է և սկսել իր գործունեությունը Հայաստանի ֆինանսական շուկայում:',
      image: 'https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg'
    },
    '1990': {
      text: 'Նախնական հիմքեր դրվեցին ապագա ֆինանսական համակարգի ձևավորման համար:',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
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
      
      {/* 1. Վերին Գլխավոր Մենյու (Անհատ, Բիզնես, և այլն) */}
      <div className="bg-white border-b border-gray-100 py-3 px-6 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-[#6400dc]">Անհատ</a>
            <a href="#" className="hover:text-[#6400dc]">Բիզնես</a>
            <a href="#" className="hover:text-[#6400dc]">Ակնթարթային վճարումներ</a>
            <span className="text-[#6400dc] font-bold border-b-2 border-[#6400dc] pb-1">Մեր մասին</span>
            <a href="#" className="hover:text-[#6400dc]">Նորություններ</a>
            <a href="#" className="hover:text-[#6400dc]">Բլոգ</a>
            <a href="#" className="hover:text-[#6400dc]">Կարիերա</a>
          </div>
          <div className="flex items-center space-x-6 text-gray-600">
            <a href="#" className="hover:text-[#6400dc]">Առցանց հայտեր</a>
            <a href="#" className="hover:text-[#6400dc]">Հետադարձ կապ</a>
          </div>
        </div>
      </div>

      {/* 2. Երկրորդ Մենյու (Լոգո + Վարկեր, Քարտեր և այլն) */}
      <div className="bg-white py-4 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center overflow-x-auto scrollbar-none">
          <div className="flex items-center space-x-10">
            <img 
              src="https://www.evoca.am/file_manager/icons/logo.png" 
              alt="Evocabank Logo" 
              className="h-7 object-contain"
            />
            <div className="hidden lg:flex space-x-6 text-sm font-semibold text-neutral-800 whitespace-nowrap">
              <a href="#" className="hover:text-[#6400dc]">Վարկեր</a>
              <a href="#" className="hover:text-[#6400dc]">Քարտեր</a>
              <a href="#" className="hover:text-[#6400dc]">Ավանդներ</a>
              <a href="#" className="hover:text-[#6400dc]">Հաշիվներ</a>
              <a href="#" className="hover:text-[#6400dc]">Փոխանցումներ</a>
              <a href="#" className="hover:text-[#6400dc]">Արժեթղթեր</a>
              <a href="#" className="hover:text-[#6400dc]">EvocaSALARY</a>
              <a href="#" className="hover:text-[#6400dc]">EvocaTOUCH</a>
            </div>
          </div>
          <div>
            <button className="bg-[#6400dc] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-purple-800 transition-colors">
              EvocaONLINE
            </button>
          </div>
        </div>
      </div>

      {/* 3. Ենթաթաբերի Նավիգացիա (#6400dc գույնով) */}
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

      {/* Բովանդակություն */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        
        {/* 1. Ընդհանուր տեղեկատվություն */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-neutral-900">Ընդհանուր տեղեկատվություն</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Evocabank</strong>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>
            <p className="text-gray-600 leading-relaxed">
              Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ (mobile-first) ծառայությունների զարգացմանը:
            </p>
            <p className="text-gray-600 leading-relaxed">
              Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն նախագծելիս նախառաջ հաշվի ենք առնելու դրա՝ հավելվածով օգտագործման հարմարավետությունը:
            </p>
            <p className="text-gray-600 leading-relaxed">
              Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:
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

        {/* 2. Մեր տեսլականը և առաքելությունը */}
        <section className="space-y-16">
          {/* Տեսլականը՝ ամբողջ լայնությամբ #6400dc բլոկ */}
          <div className="w-full bg-[#6400dc] text-white p-10 rounded-3xl shadow-md space-y-4">
            <h3 className="text-3xl font-bold">Մեր տեսլականը</h3>
            <p className="text-purple-100 leading-relaxed text-lg">
              Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու համար:
            </p>
          </div>

          {/* Առաքելությունը՝ նկարը վերևում, տեքստը տակը */}
          <div className="space-y-6 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-neutral-900">Մեր առաքելությունը</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg" 
                alt="Մեր առաքելությունը" 
                className="w-full h-auto object-cover max-h-[450px]"
              />
            </div>
            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto pt-2">
              Որպես human-first և խելացի ֆինտեխ ընկերություն՝ մենք հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ, բիզնեսներին՝ բացահայտելու նոր հորիզոններ, և հասարակությանը՝ կառուցելու ավելի լավ ապագա:
            </p>
          </div>
        </section>

        {/* 3. Արժեքներ և առաջնայնություններ */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-neutral-900">Արժեքներ և առաջնայնություններ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">Human-first</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Առաջին տեղում միշտ մարդիկ են՝ մեր հաճախորդները, էվոկատերերի թիմը և հասարակությունը: Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց կողմից՝ մարդկանց համար:
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">Նորարարություն</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այսօր միակ հաստատունն է: Մենք բաց ենք և պատրաստակամ՝ զարգանալու համար:
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">Դրական ազդեցություն</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն ավելի լավը դարձնելուն:
              </p>
            </div>
          </div>
        </section>

        {/* 4. Կորպորատիվ սոցիալական պատասխանատվություն */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-neutral-900">Կորպորատիվ սոցիալական պատասխանատվություն</h2>
          <p className="text-gray-600 leading-relaxed">
            Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start space-x-3 bg-purple-50/50 p-4 rounded-xl border border-purple-100/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm leading-relaxed">Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-եր:</p>
            </div>
            <div className="flex items-start space-x-3 bg-purple-50/50 p-4 rounded-xl border border-purple-100/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm leading-relaxed">Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ:</p>
            </div>
            <div className="flex items-start space-x-3 bg-purple-50/50 p-4 rounded-xl border border-purple-100/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm leading-relaxed">Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ:</p>
            </div>
            <div className="flex items-start space-x-3 bg-purple-50/50 p-4 rounded-xl border border-purple-100/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm leading-relaxed">Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:</p>
            </div>
          </div>
        </section>

        {/* 5. Բանկի պատմությունը (Սլաքներով և սահող տարեթվերով) */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-neutral-900 text-center">Բանկի պատմությունը</h2>
          
          <div className="relative max-w-4xl mx-auto flex items-center">
            {/* Ձախ սլաք */}
            <button 
              onClick={scrollLeft}
              className="absolute -left-4 z-20 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              ←
            </button>

            {/* Տարեթվերի սահող կոնտեյներ */}
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

            {/* Աջ սլաք */}
            <button 
              onClick={scrollRight}
              className="absolute -right-4 z-20 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              →
            </button>
          </div>

          {/* Ընտրված տարվա բովանդակություն */}
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

        {/* 6. Բանկի լոգոտիպը */}
        <section className="space-y-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900">Բանկի լոգոտիպը</h2>
          <p className="text-gray-600 leading-relaxed">
            Բանկի լոգոն կազմված է evolution՝ էվոլյուցիա բառի արմատից և նմանեցված է evoke՝ զարթնեցնել բառին: Բանկի ձգտումն է դեպի առաջընթաց:
          </p>
          <div className="py-6 flex justify-center">
            <img 
              src="https://www.evoca.am/file_manager/icons/logo.png" 
              alt="Evocabank Logo" 
              className="h-16 object-contain"
            />
          </div>
        </section>

        {/* 7. Բանկի բրենդբուքը */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-neutral-900">ԲԱՆԿԻ ԲՐԵՆԴԲՈՒՔԸ</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 max-w-4xl mx-auto bg-black">
            <img 
              src="https://www.evoca.am/file_manager/other/52.png" 
              alt="Brandbook Cover" 
              className="w-full h-auto object-cover cursor-pointer hover:opacity-95 transition-opacity"
            />
          </div>
        </section>

        {/* 8. Բանկի կորպորատիվ գույները */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900">Բանկի կորպորատիվ գույները</h2>
          <p className="text-gray-600 leading-relaxed">
            Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-center space-x-4">
              <span className="w-5 h-5 rounded-full border border-gray-300 bg-white flex-shrink-0"></span>
              <p className="text-gray-700 text-sm"><strong>Սպիտակը</strong> խորհրդանշում է նորը:</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-5 h-5 rounded-full bg-gray-500 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm"><strong>Մոխրագույնը</strong> խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-5 h-5 rounded-full bg-[#6400dc] flex-shrink-0"></span>
              <p className="text-gray-700 text-sm"><strong>Մանուշակագույնը</strong> երիտասարդության, ստեղծարարության և նորարարության գույնն է:</p>
            </div>
          </div>
        </section>

        {/* 9. Տեսանյութ */}
        <section className="space-y-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h3 className="text-xl font-bold text-neutral-900 text-center">Evocabank</h3>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/QTuqGz3USRE" 
              title="Evocabank Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
}

export default MerMasin;