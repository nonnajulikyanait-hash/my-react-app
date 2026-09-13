import React, { useState } from 'react';

function EvocaOnline() {
  const [activeAccordion, setActiveAccordion] = useState('security');

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen font-sans text-neutral-800">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Վերնագիր */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-[#6400dc] mb-8">
          EvocaONLINE
        </h1>

        {/* Նկարագիրը և հնարավորությունները */}
        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100 space-y-6">
          <h2 className="text-xl lg:text-2xl font-bold text-neutral-900 border-b pb-4">
            Նկարագիրը և հնարավորությունները
          </h2>

          <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
            Evocabank-ը բանկային հաշիվների հեռակառավարման ինտերնետ-բանկ համակարգ է, որի միջոցով կարող եք հեռակառավարել ձեր բանկային հաշիվները: EvocaOnline-ից կարող եք օգտվել մեր կայքի համապատասխան հղման միջոցով: Համակարգի միջոցով կարող եք՝
          </p>

          {/* Բաժին 1 */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#6400dc] text-sm lg:text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span>
              Դիտել տարաբնույթ տեղեկատվություն.
            </h3>
            <ul className="pl-6 space-y-2 text-xs lg:text-sm text-gray-600 list-disc">
              <li>բանկային հաշիվների մնացորդներն ու գործառնությունները,</li>
              <li>հաշիվների, վճարային քարտերի, վարկերի, ավանդների քաղվածքները,</li>
              <li>վճարային քարտերի օնլայն մնացորդները,</li>
              <li>վարկերի մասին ամբողջ տեղեկատվությունն ու մարման ժամանակացույցը,</li>
              <li>ավանդների մասին ամբողջ տեղեկատվությունը,</li>
              <li>արտարժույթի փոխարժեքները:</li>
            </ul>
          </div>

          {/* Բաժին 2 */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#6400dc] text-sm lg:text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span>
              Կատարել գործարքներ.
            </h3>
            <ul className="pl-6 space-y-2 text-xs lg:text-sm text-gray-600 list-disc">
              <li>փոխանցումներ՝ միջազգային և Հայաստանի տարածքում (նաև խմբային),</li>
              <li>արտարժույթի փոխանակումներ,</li>
              <li>վարկի մարումներ,</li>
              <li>ավանդի բացում և համալրումներ,</li>
              <li>կոմունալ վճարումներ (նաև խմբային),</li>
              <li>բյուջետային փոխանցումներ,</li>
              <li>գույքահարկի վճարումներ,</li>
              <li>կանխիկացումներ,</li>
              <li>փաստաթղթերի չեղարկում:</li>
            </ul>
          </div>

          {/* Բաժին 3 */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#6400dc] text-sm lg:text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span>
              Ինչպես նաև.
            </h3>
            <ul className="pl-6 space-y-2 text-xs lg:text-sm text-gray-600 list-disc">
              <li>ուղարկել և ստանալ ազատ ֆորմատի նամակներ՝ կցված ֆայլերով (MS Word, Excel և այլն),</li>
              <li>ներմուծել տվյալներ xml ֆորմատով ֆայլից,</li>
              <li>ստեղծել փաստաթղթերի ձևանմուշներ (շաբլոններ):</li>
            </ul>
          </div>

          {/* Ուշադրություն */}
          <div className="bg-purple-50 border-l-4 border-[#6400dc] p-4 rounded-r-lg space-y-3 mt-6">
            <h4 className="font-bold text-neutral-900 text-sm">Ուշադրություն.</h4>
            <ul className="space-y-2 text-xs lg:text-sm text-gray-700 list-disc pl-4">
              <li>EvocaOnline հավելվածով գործարքներ կատարելիս գործում է միջնորդավճարների կիրառման շահավետ զեղչային համակարգ:</li>
              <li>Ծանոթացեք մեր Evoca Online ավանդատեսակին, որի ներդրման պարագայում գործում են ավելի բարձր տոկոսադրույքներ (մեր կողմից առաջարկվող այլ ավանդատեսակների համեմատ):</li>
              <li>
                Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong>ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ</strong>, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված՝ բանկային ծառայություններից օգտվելու հայտ/դիմում:
              </li>
            </ul>
          </div>

        </div>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Ակորդեոններ) */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-extrabold text-neutral-900 text-center mb-6">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          {/* Ակորդեոն 1: Անվտանգությունը */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <button 
              onClick={() => toggleAccordion('security')}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-neutral-900 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2 text-[#6400dc]">
                <span>⌃</span> Անվտանգությունը
              </span>
              <span className="transform transition-transform duration-300">
                {activeAccordion === 'security' ? '▲' : '▼'}
              </span>
            </button>

            {activeAccordion === 'security' && (
              <div className="p-6 pt-0 border-t border-gray-100 space-y-3 text-xs lg:text-sm text-gray-700">
                <ul className="space-y-3 list-disc pl-5 pt-4">
                  <li>Համակարգն առավել անվտանգ դարձնելու նպատակով մեր EvocaOnline համակարգի օգտատերերին առաջարկում ենք Vasco Token Digipass GO-6 սարք:</li>
                  <li>Vasco Token Digipass GO-6 անվտանգության սարքը մեր սեփականությունն է, որը տրամադրում ենք ձեզ EvocaOnline համակարգ մուտք գործելու անվտանգության համապատասխան գաղտնանիշերի գեներացման համար:</li>
                  <li>Տվյալների գաղտնագրման համար օգտագործվում է Secure Socket Layer (SSL) տեխնոլոգիան:</li>
                </ul>
              </div>
            )}
          </div>

          {/* Ակորդեոն 2: Ակտիվացման կարգը */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <button 
              onClick={() => toggleAccordion('activation')}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-neutral-900 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2 text-[#6400dc]">
                <span>⌃</span> Ակտիվացման կարգը
              </span>
              <span className="transform transition-transform duration-300">
                {activeAccordion === 'activation' ? '▲' : '▼'}
              </span>
            </button>

            {activeAccordion === 'activation' && (
              <div className="p-6 pt-0 border-t border-gray-100 space-y-3 text-xs lg:text-sm text-gray-700">
                <ul className="space-y-3 list-disc pl-5 pt-4">
                  <li>Հավելվածը մեր հաճախորդներին տրամադրում ենք «Միայն դիտելու» կամ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:</li>
                  <li>Մեր և ձեր միջև բանկային ծառայությունների մատուցման որևէ պայմանագիր կնքելու դեպքում հավելվածն ակտիվանում է ավտոմատ կերպով՝ «Միայն դիտելու» հնարավորությամբ:</li>
                  <li>Ցանկության դեպքում կարող եք ակտիվացնել հավելվածը՝ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:</li>
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Փաստաթղթեր բաժին (իրական հղումներով) */}
        <div className="mt-12 space-y-4">
          <h2 className="text-xl font-bold text-neutral-900">Փաստաթղթեր</h2>
          
          <div className="space-y-3">
            <a 
              href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-[#6400dc] text-lg">📄</span>
              <span className="text-xs lg:text-sm font-medium text-neutral-800">
                Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025
              </span>
            </a>

            <a 
              href="https://www.evoca.am/files/global_files/1/evocaonline-eng.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-[#6400dc] text-lg">📄</span>
              <span className="text-xs lg:text-sm font-medium text-neutral-800">
                SWIFT Transfers (20.03.2026)
              </span>
            </a>

            <a 
              href="https://www.evoca.am/files/global_files/1/evocaonline-rus.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-[#6400dc] text-lg">📄</span>
              <span className="text-xs lg:text-sm font-medium text-neutral-800">
                SWIFT переводы в РФ (20.03.2026)
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EvocaOnline;