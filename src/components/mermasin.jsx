import React, { useState } from 'react';

function MerMasin() {
  const [activeSubTab, setActiveSubTab] = useState('Ընդհանուր');
  const [activeYear, setActiveYear] = useState('2026');

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

  // Տվյալներ տարեթվերի պատմության համար (կարող ես նկարներն ու տեքստերը փոխել ըստ ցանկության)
  const historyData = {
    '2026': {
      text: 'Բանկը բացեց նոր «Աբովյան» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երդ:',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
    },
    '2025': {
      text: '2025 թվականին բանկն ընդլայնեց իր թվային հարթակները, գործարկեց նոր պրոդուկտներ բիզնեսի և անհատների համար, և ամրապնդեց դիրքերը շուկայում։',
      image: 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png'
    },
    '2024': {
      text: '2024-ին շեշտը դրվեց mobile-first լուծումների և հաճախորդների սպասարկման որակի բարելավման վրա՝ ներդնելով արհեստական բանականության գործիքներ։',
      image: 'https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg'
    },
    '2023': {
      text: 'Բանկը ստացավ մի շարք հեղինակավոր միջազգային մրցանակներ տարվա լավագույն ֆինტեխ գործընկեր և նորարար բանկ անվանակարգերում։',
      image: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png'
    },
    '2022': {
      text: '2022 թվականին իրականացվեցին մասնաճյուղերի լայնածավալ արդիականացումներ և ներդրվեցին անվտանգության նորագույն ստանդարտներ։',
      image: 'https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png'
    },
    '2021': {
      text: 'Հիմնվեցին նոր ռազմավարական ուղղություններ, որոնք հիմք հանդիսացան բանկի հետագա արագ զարգացման և թվային հեղափոխության համար։',
      image: 'https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg'
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      {/* Ենթաթաբերի Նավիգացիա (#6400dc գույնով) */}
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

          {/* Առաքելությունը՝ նկարը վերևում, տեքստը տակը (1-ին նկարի նման) */}
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

        {/* 3. Բանկի պատմությունը (Տարեթվերով սանդղակ, սեղմելիս փոխվում է) */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-neutral-900 text-center">Բանկի պատմությունը</h2>
          
          {/* Տարեթվերի հորիզոնական ընտրացանկ */}
          <div className="relative max-w-xl mx-auto py-4">
            {/* Հորիզոնական գիծ հետևում */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex justify-between items-center px-4">
              {Object.keys(historyData).map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`flex flex-col items-center bg-transparent border-0 cursor-pointer group focus:outline-none`}
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
          </div>

          {/* Ընտրված տարվա բովանդակություն (Տեքստ և Նկար) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-3xl border border-gray-100 mt-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              {historyData[activeYear].text}
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <img 
                src={historyData[activeYear].image} 
                alt={`Բանկի պատմություն ${activeYear}`} 
                className="w-full h-auto object-cover transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* 4. Բանկի լոգոտիպը */}
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

        {/* 5. Բանկի բրենդբուքը և տեսանյութը */}
        <section className="space-y-8 bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-neutral-900">Բանկի բրենդբուքը</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները, տառատեսակները և բրենդի այլ կարևոր տարրեր:
            </p>
            <div className="pt-2">
              <img 
                src="https://www.evoca.am/file_manager/other/52.png" 
                alt="Brandbook" 
                className="mx-auto rounded-xl shadow-md max-h-48 object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* YouTube տեսանյութ */}
          <div className="space-y-4 pt-6">
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
          </div>
        </section>

      </div>
    </div>
  );
}

export default MerMasin;