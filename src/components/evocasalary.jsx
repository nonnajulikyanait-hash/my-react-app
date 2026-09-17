import React, { useState } from 'react';

function EvocaSalary() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqItems = [
    {
      question: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:",
      answer: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից։"
    },
    {
      question: "Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում:",
      answer: "Ո՛չ։ Բավական է ձեր գործատուին ներկայացնել Evoca քարտի տվյալները, և աշխատավարձը կփոխանցվի արդեն Evoca-ում բացված հաշվին։"
    },
    {
      question: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:",
      answer: "Այո՛, կարող եք դիմել և դառնալ Evocabank-ի հաճախորդ՝ միաժամանակ օգտվելով աշխատավարձային նախագծի բոլոր արտոնություններից։"
    },
    {
      question: "Ե՞րբ կսկսեմ օգտվել արտոնություններից:",
      answer: "Արտոնություններից կարող ես օգտվել այն պահից, երբ առաջին աշխատավարձդ փոխանցվի Evocabank-ի քարտին։ Քարտերի առավելությունները գործում են անմիջապես, իսկ վարկային առավելություններից կարող ես օգտվել աշխատավարձդ Բանկի քարտին մեկ անգամ ստանալուց հետո։"
    },
    {
      question: "Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:",
      answer: "Այո՛, կարող ես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարող ես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձդ, իսկ Evoca Travel Card-ը կարող ես ձեռք բերել 50% զեղչով։"
    },
    {
      question: "Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար:",
      answer: (
        <div className="space-y-2">
          <p>Միանալու համար կարող ես՝</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Զանգահարել +374 10 605555 | 8444 հեռախոսահամարներով</li>
            <li>Այցելել Evocabank-ի ցանկացած մասնաճյուղ և ստանալ խորհրդատվություն</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 space-y-16">
        
        {/* Վերնագրի հատված և Նկար */}
        <div className="bg-purple-900 rounded-3xl p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between shadow-xl">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
              Evoca աշխատավարձային նախագիծ
            </h1>
            <p className="text-purple-100 text-base lg:text-lg leading-relaxed">
              Քո աշխատավարձը կարող է քեզ տալ շատ ավելին։ Պարզապես պետք է ընտրել Evocabank-ը։
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
              alt="Evoca Salary" 
              className="max-w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Ներածական տեքստ */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm text-gray-700 text-base lg:text-lg leading-relaxed">
          Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ նոր հնարավորություններ ու առավելություններ։
        </div>

        {/* Առավելությունների ցանկ */}
        <div className="space-y-10">
          
          {/* 1. Mastercard Gold */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xl lg:text-2xl font-extrabold text-purple-700">
              Բեր աշխատավարձդ Evoca, Տար անվճար Mastercard Gold
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Պրեմիում դասի քարտ</span></li>
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Հասանելի ամբողջ աշխարհում</span></li>
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Գումարի անվտանգության բարձր մակարդակ</span></li>
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Դրական մնացորդի նկատմամբ 2% տարեկան տոկոսադրույք</span></li>
            </ul>
          </div>

          {/* 2. Evoca Travel Card */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xl lg:text-2xl font-extrabold text-purple-700">
              Բեր աշխատավարձդ Evoca, Տար 50% զեղչով Evoca Travel Card
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև 1.5% cashback արտասահմանում իրականացրած վճարումների համար</span></li>
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Անվճար 6 մուտք Lounge Key սրահներ քեզ և հյուրերիդ համար</span></li>
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Անվճար 6 անգամ Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</span></li>
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Այլ ճամփորդական առավելություններ</span></li>
            </ul>
          </div>

          {/* 3. Evoca Benefits */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-xl lg:text-2xl font-extrabold text-purple-700">
              Բեր աշխատավարձդ Evoca Տար մի շարք Բենեֆիթներ
            </h2>
            <p className="text-gray-700">
              Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու Evoca Benefits նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև 25% զեղչ</span></li>
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև 25% cashback</span></li>
              <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Նվեր քարտեր</span></li>
            </ul>
          </div>

          {/* 4. Վարկեր */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm space-y-6">
            <h2 className="text-xl lg:text-2xl font-extrabold text-purple-700">
              Բեր աշխատավարձդ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր
            </h2>
            
            {/* Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ */}
            <div className="space-y-3 pb-4 border-b border-gray-100">
              <h3 className="font-bold text-lg text-neutral-900 border-b-2 border-purple-700 pb-1 inline-block">
                Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև աշխատավարձի 15-ապատիկի չափով</span></li>
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև 10 մլն դրամ գումար</span></li>
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև 60 ամիս մարման ժամկետ</span></li>
              </ul>
            </div>

            {/* Ավտովարկ */}
            <div className="space-y-3 pb-4 border-b border-gray-100">
              <h3 className="font-bold text-lg text-neutral-900 border-b-2 border-purple-700 pb-1 inline-block">
                Ավտովարկ
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>0.5-ով ցածր տոկոսադրույք</span></li>
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև 50 մլն դրամ գումար</span></li>
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև 84 ամիս մարման ժամկետ</span></li>
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից</span></li>
              </ul>
            </div>

            {/* Անշարժ գույքի գրավով սպառողական վարկ */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-neutral-900 border-b-2 border-purple-700 pb-1 inline-block">
                Անշարժ գույքի գրավով սպառողական վարկ
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>0.5-ով ցածր տոկոսադրույք</span></li>
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև 100 մլն դրամ գումար</span></li>
                <li className="flex items-center space-x-2"><span className="text-purple-700 font-bold">•</span><span>Մինչև 120 ամիս մարման ժամկետ</span></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Վերջին նորությունները */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-neutral-900">Վերջին նորությունները</h2>
            <button className="border border-purple-700 text-purple-700 hover:bg-purple-50 font-semibold px-4 py-2 rounded-full text-sm transition-colors">
              Բոլոր նորությունները &gt;
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Նորություն 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="bg-neutral-900 h-48 flex items-center justify-center text-white p-4 font-bold text-center">
                  Դիլիջան, մենք գալիս ենք
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs text-purple-700 font-bold uppercase">Կենսակերպ</span>
                  <h3 className="font-bold text-neutral-900 line-clamp-2">Դիլիջան, մենք գալիս ենք</h3>
                </div>
              </div>
              <div className="px-5 pb-5 text-xs text-gray-400">11.09.2026</div>
            </div>

            {/* Նորություն 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="bg-purple-800 h-48 flex items-center justify-center text-white p-4 font-bold text-center">
                  Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs text-purple-700 font-bold uppercase">Կենսակերպ</span>
                  <h3 className="font-bold text-neutral-900 line-clamp-2">Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր</h3>
                </div>
              </div>
              <div className="px-5 pb-5 text-xs text-gray-400">03.09.2026</div>
            </div>

            {/* Նորություն 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="bg-purple-900 h-48 flex items-center justify-center text-white p-4 font-bold text-center">
                  Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs text-purple-700 font-bold uppercase">Պրոդուկտներ</span>
                  <h3 className="font-bold text-neutral-900 line-clamp-2">Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով</h3>
                </div>
              </div>
              <div className="px-5 pb-5 text-xs text-gray-400">21.08.2026</div>
            </div>
          </div>
        </div>

        {/* Հաճախ տրվող հարցեր (Ակորդեոն) */}
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-neutral-900">Հաճախ տրվող հարցեր</h2>
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left font-bold text-neutral-800 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                >
                  <span>{item.question}</span>
                  <span className="text-purple-700 text-lg font-bold">{openAccordion === index ? '∧' : '∨'}</span>
                </button>
                {openAccordion === index && (
                  <div className="px-6 pb-5 border-t border-gray-100 pt-4 text-gray-600 text-sm lg:text-base leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ՄԻԱԿ ԵՎ ՎԵՐՋՆԱԿԱՆ FOOTER */}
      <footer className="bg-gray-100 border-t border-gray-200 text-gray-600 text-sm py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-black text-purple-900 tracking-wider">evocaBANK</div>
            <p className="text-xs leading-relaxed">
              ք. Երևան, 0010, Հանրապետության 44/2
            </p>
            <p className="text-xs leading-relaxed text-gray-500">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից<br />
              1990 - 2026 © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ։
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Բանկի մասին</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:underline">Մեր մասին</a></li>
              <li><a href="#" className="hover:underline">Ղեկավարություն</a></li>
              <li><a href="#" className="hover:underline">Բաժնետերեր</a></li>
              <li><a href="#" className="hover:underline">Հաշվետվություններ</a></li>
              <li><a href="#" className="hover:underline">Իրավական ակտեր</a></li>
              <li><a href="#" className="hover:underline">Սակագներ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Օգտակար հղումներ</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:underline">Հաճախորդի իրավունքները</a></li>
              <li><a href="#" className="hover:underline">Կարգավորում</a></li>
              <li><a href="#" className="hover:underline">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="#" className="hover:underline">Ֆին. հաշտարար</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Այլ հղումներ</h3>
            <ul className="space-y-2 text-xs mb-6">
              <li><a href="#" className="hover:underline">EvocaONLINE</a></li>
              <li><a href="#" className="hover:underline">Հաճախ տրվող հարցեր</a></li>
              <li><a href="#" className="hover:underline">Հետադարձ կապ</a></li>
            </ul>
            <div className="text-xs font-semibold text-gray-800 space-y-1">
              <p>📞 +374 10 605555</p>
              <p>📞 8444</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default EvocaSalary;