import React, { useState } from 'react';

function MerMasin() {
  const [activeSubTab, setActiveSubTab] = useState('Ընդհանուր');

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

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      {/* Ենթաթաբերի Նավիգացիա (Մանուշակագույն բար) */}
      <div className="bg-purple-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-6 py-3 text-sm font-medium whitespace-nowrap scrollbar-none">
          {subTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveSubTab(tab)}
              className={`pb-1 transition-colors hover:text-purple-200 cursor-pointer ${
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
              Մենք հատուկ ուշադրություն ենք դարձնում մ바일 (mobile-first) ծառայությունների զարգացմանը:
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
        <section className="space-y-12">
          <div className="bg-purple-900 text-white p-8 rounded-3xl shadow-md space-y-3">
            <h3 className="text-2xl font-bold">Մեր տեսլականը</h3>
            <p className="text-purple-200 leading-relaxed">
              Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու համար:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg" 
                alt="Մեր առաքելությունը" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">Մեր առաքելությունը</h3>
              <p className="text-gray-600 leading-relaxed">
                Որպես human-first և խելացի ֆինտեխ ընկերություն՝ մենք հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ, բիզնեսներին՝ բացահայտելու նոր հորիզոններ, և հասարակությանը՝ կառուցելու ավելի լավ ապագա:
              </p>
            </div>
          </div>
        </section>

        {/* 3. Բանկի պատմությունը */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-neutral-900">Բանկի պատմությունը</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="text-gray-600 leading-relaxed">
              Բանկը բացեց նոր «Աբովյան» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երդ:
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png" 
                alt="Բանկի պատմություն" 
                className="w-full h-auto object-cover"
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
            <h3 className="text-xl font-bold text-neutral-900 text-center">Evocabank: 2025 Q4 Ամփոփում | ARM</h3>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
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