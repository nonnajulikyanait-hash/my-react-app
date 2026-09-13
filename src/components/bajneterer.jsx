import React, { useState } from 'react';

function Bajneterer() {
  // Ստեյթեր բացվող բաժինների (Accordion) համար
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>
      {/* Բրեդքրամփս (Հղումների ուղին) */}
      <div className="max-w-7xl mx-auto px-6 pt-6 text-xs text-gray-500 flex items-center space-x-2">
        <span className="cursor-pointer hover:underline">🏠</span>
        <span>›</span>
        <span className="cursor-pointer hover:underline">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer hover:underline">Evoca-ի մասին</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Բաժնետերեր</span>
      </div>

      {/* Գլխավոր բովանդակություն */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
        
        {/* Վերնագիր */}
        <div>
          <h2 className="text-3xl font-bold text-neutral-900">Բաժնետերեր</h2>
        </div>

        {/* Մարետա Գևորկյանի բաժին */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 lg:col-span-1">
            <img 
              src="https://www.evoca.am/file_manager/Shareholders/Mareta%20Gevorkyan%20Evocabank.png" 
              alt="Մարետա Գևորկյան" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-2xl font-bold text-neutral-900">Մարետա Գևորկյան</h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              Մարետա Գևորկյանը միանձնյա տիրապետում է Evocabank-ի բաժնետոմսերի 100%-ին։
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Նա ծնվել է Դիլիջանում, ավարտել Դիլիջանի միջնակարգ դպրոցը, այնուհետև՝ Երևանի պետական մանկավարժական ակադեմիան: 2008 թվականից բնակվելով Շվեյցարիայում՝ նա ակտիվորեն ներգրավված է բանկային, տարածքային զարգացման և սոցիալական նախաձեռնություններում՝ նպաստելով Հայաստանի կայուն զարգացմանը:
            </p>
            <p className="text-gray-500 text-sm italic pt-2">
              <strong>Նշում.</strong> Բանկն անդղղակի նշանակալից մասնակից չունի։
            </p>
          </div>
        </div>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-neutral-900">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h3>

          <div className="space-y-4">
            
            {/* Ակորդեոն 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleAccordion(1)}
                className="w-full px-6 py-4 text-left font-semibold text-neutral-800 flex items-center space-x-4 bg-purple-50/60 hover:bg-purple-50 cursor-pointer transition-colors"
              >
                <span className={`transform transition-transform text-[#6400dc] ${openAccordion === 1 ? 'rotate-90' : ''}`}>▶</span>
                <span>Ուշադրություն.</span>
              </button>
              {openAccordion === 1 && (
                <div className="px-6 pb-6 text-gray-700 text-base space-y-4 border-t border-gray-100 pt-4 leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի յուրաքանչյուր բաժնետեր, համաձայն «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ մասի, իրավունք ունի ստանալու մեր վերջին տարեկան հաշվետվության և արտաքին աուդիտի եզրակացության պատճենները:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի տեղաբաշխված քվեարկող բաժնետոմսերի 2%-ին և ավելիին տիրապետող յուրաքանչյուր բաժնետեր իրավունք ունի ստանալու «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ և 5-րդ մասերով սահմանված տեղեկությունները:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>Վերոնշյալ տեղեկությունները տրամադրում ենք ԱՆՎՃԱՐ՝ բաժնետիրոջ գրավոր դիմումը ստանալուց հետո 3 (երեք) աշխատանքային օրվա ընթացքում: Գրավոր դիմումը կարող է ներկայացվել առձեռն՝ մեր Գլխամասային գրասենյակում, ցանկացած մասնաճյուղում կամ ներկայացուցչությունում, էլեկտրոնային հասցեով՝ hello@evoca.am կամ փոստով՝ ՀՀ, 0010, ք. Երևան, Հանրապետության 44/2 հասցեով:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>Շահութաբաժինների բաշխումը կատարվում է ՀՀ օրենսդրական ակտերի համաձայն և Բանկի կանոնադրությամբ սահմանված կարգով:</p>
                  </div>
                </div>
              )}
            </div>

            {/* Ակորդեոն 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleAccordion(2)}
                className="w-full px-6 py-4 text-left font-semibold text-neutral-800 flex items-center space-x-4 bg-purple-50/60 hover:bg-purple-50 cursor-pointer transition-colors"
              >
                <span className={`transform transition-transform text-[#6400dc] ${openAccordion === 2 ? 'rotate-90' : ''}`}>▶</span>
                <span>Տեղեկատվություն մեր կանոնադրական կապիտալի փոփոխության վերաբերյալ</span>
              </button>
              {openAccordion === 2 && (
                <div className="px-6 pb-6 text-gray-700 text-base space-y-4 border-t border-gray-100 pt-4 leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2011թ. Բանկի կանոնադրական կապիտալը համալրվել է 7.2 մլրդ դրամով՝ կազմելով 14 մլրդ. 400 մլն. դրամ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>Մեր մասնակիցների 08.07.2016թ. արտահերթ ընդհանուր ժողովի որոշմամբ՝ Բանկը սահմանափակ պատասխանատվության ընկերությունից վերակազմավորվել է փակ բաժնետիրական ընկերության և մեր փաստացի համալրված կանոնադրական կապիտալը (14 մլրդ. 400 մլն. դրամ) բաժանվել է 144,000 հատ հասարակ բաժնետոմսերի, յուրաքանչյուրը՝ 100,000 դրամ անվանական արժեքով:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2016թ. Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. 550 մլն. դրամով և կազմել 17 մլրդ. 950 մլն. դրամ: Մենք տեղաբաշխել ենք 100,000 դրամ անվանական արժեքով 35,500 հատ արտոնյալ բաժնետոմս:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2020թ. Բանկի կանոնադրական կապիտալը համալրվել է 2 մլրդ. 50 մլն. դրամով և կազմել 20 մլրդ. դրամ: Այդ թվում` մենք տեղաբաշխել ենք նաև 29.05.2020թ. թողարկման 100,000 դրամ անվանական արժեքով 14,500 հատ արտոնյալ բաժնետոմս:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2020թ. ՀՀ քաղաքացի Մարետա Գևորկյանը դարձել է Բանկի ուղղակի նշանակալից բաժնետերը:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2022թ. ՀՀ քաղաքացի Մարետա Գևորկյանի կողմից Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. դրամով և կազմել 23 մլրդ. դրամ: Այդ թվում` մենք տեղաբաշխել ենք 12.03.2022թ. թողարկման 100,000 ՀՀ դրամ անվանական արժեքով 7,500 հատ արտոնյալ բաժնետոմս:</p>
                  </div>
                </div>
              )}
            </div>

            {/* Ակորդեոն 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleAccordion(3)}
                className="w-full px-6 py-4 text-left font-semibold text-neutral-800 flex items-center space-x-4 bg-purple-50/60 hover:bg-purple-50 cursor-pointer transition-colors"
              >
                <span className={`transform transition-transform text-[#6400dc] ${openAccordion === 3 ? 'rotate-90' : ''}`}>▶</span>
                <span>Տեղեկատվություն շահաբաժինների բաշխման վերաբերյալ</span>
              </button>
              {openAccordion === 3 && (
                <div className="px-6 pb-6 text-gray-700 text-base space-y-4 border-t border-gray-100 pt-4 leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2003-2006 թթ. մեր մասնակիցների միջև շահաբաժիններ չեն բաշխվել: Ընդհանուր ժողովի որոշմամբ՝ փաստացի ստացված զուտ շահույթն ուղղվել է մեր կանոնադրական հիմնադրամի համալրմանը կամ որպես չբաշխված շահույթ թողնվել մեր տրամադրության տակ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2006թ. 9 ամսվա գործունեություն արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 80 մլն. դրամ շահաբաժին:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2007թ. 9 ամսվա գործունեություն արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 55 մլն. դրամ շահաբաժին:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2008թ. փաստացի ստացված զուտ շահույթն Ընդհանուր ժողովի որոշմամբ թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2009թ. Ընդհանուր ժողովի որոշմամբ՝ փաստացի ստացված զուտ շահույթից 70 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2010-2012 թթ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2013թ. փաստացի ստացված զուտ շահույթից 895 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2014-2016 թթ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2017թ. փաստացի ստացված զուտ շահույթից 78 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2018թ. փաստացի ստացված զուտ շահույթից 426 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2019թ. փաստացի ստացված զուտ շահույթից 426 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2020թ. փաստացի ստացված զուտ շահույթից 426 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2021թ. փաստացի ստացված զուտ շահույթից 482 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6400dc] mt-2 flex-shrink-0"></span>
                    <p>2022թ. փաստացի ստացված զուտ շահույթից 571 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Փաստաթղթեր */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-neutral-900">Փաստաթղթեր</h3>

          <div className="space-y-3">
            <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center justify-between shadow-sm hover:border-purple-300 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📄</span>
                <span className="font-semibold text-neutral-800 text-base">Կանոնադրություն</span>
              </div>
              <span className="text-gray-400">↓</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center justify-between shadow-sm hover:border-purple-300 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📄</span>
                <span className="font-semibold text-neutral-800 text-base">Բանկային գործունեության լիցենզիա</span>
              </div>
              <span className="text-gray-400">↓</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center justify-between shadow-sm hover:border-purple-300 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📄</span>
                <span className="font-semibold text-neutral-800 text-base">Բանկի գրանցման վկայականը</span>
              </div>
              <span className="text-gray-400">↓</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Bajneterer;