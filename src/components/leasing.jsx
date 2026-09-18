import React, { useState } from 'react';

function Leasing({ setActiveTab }) {
  // Վերահսկում ենք բացվող ակորդեոնների վիճակը (0-րդը բաց է սկզբում, կամ կարող եք փոխել)
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Ենթամենյուի գույնզգույն գոտի */}
      <div className="bg-purple-700 text-white px-10 py-3 flex space-x-8 text-sm font-medium">
        <span className="border-b-2 border-white pb-1 cursor-pointer">Evoca Leasing</span>
        <span className="opacity-80 hover:opacity-100 cursor-pointer">Հատուկ առաջարկ</span>
      </div>

      {/* Նավիգացիոն ուղի (Breadcrumbs) */}
      <div className="px-10 py-4 text-xs text-gray-500 flex items-center space-x-2">
        <span className="cursor-pointer hover:underline" onClick={() => setActiveTab('home')}>🏠</span>
        <span>›</span>
        <span className="cursor-pointer hover:underline" onClick={() => setActiveTab('business-varker')}>Բիզնես</span>
        <span>›</span>
        <span className="cursor-pointer hover:underline" onClick={() => setActiveTab('business-leasing')}>Լիզինգ</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Evoca Leasing</span>
      </div>

      {/* Հիմնական բովանդակություն */}
      <div className="px-6 lg:px-16 py-6 flex-grow">
        <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">Evoca Leasing</h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8 mb-12">
          <h2 className="text-xl font-bold text-neutral-800 mb-6 border-b pb-4">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>

          {/* Ակորդեոն 1: Evoca Leasing */}
          <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 font-semibold text-neutral-800 transition-colors cursor-pointer"
            >
              <span>Evoca Leasing</span>
              <span className="text-purple-700 text-lg font-bold">{openAccordion === 0 ? '−' : '+'}</span>
            </button>

            {openAccordion === 0 && (
              <div className="p-6 border-t border-gray-200 text-sm text-neutral-700 space-y-6 bg-white">
                <div>
                  <p className="mb-3 leading-relaxed">
                    Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից` առաջնային և երկրորդային շուկաներից: Լիզինգի առարկա կարող են հանդիսանալ`
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
                    <li>Արտադրական/արդյունաբերական հաստոցներ/հոսքագծեր,</li>
                    <li>Բեռնատար/մարդատար ավտոմեքենաներ,</li>
                    <li>Շինարարական տեխնիկա,</li>
                    <li>Արևային կայաններ,</li>
                    <li>Բժշկական սարքավորումներ,</li>
                    <li>Կոմերցիոն անշարժ գույք,</li>
                    <li>և այլն:</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">Լիզինգի առավելությունները</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
                    <li>Առանց գրավի առկայության պրոդուկտ է,</li>
                    <li>Առանց նոտարական/կադաստրային ծախսերի,</li>
                    <li>Հնարավորություն է տալիս իրականացնել ԱԱՀ-ի հաշվանցումներ և ծախսագրումներ,</li>
                    <li>Լիզինգի առարկայի ձեռքբերում արտերկրից` առանց հաճախորդի մասնակցության գնման գործընթացին,</li>
                    <li>Ստանալ էքսպերտային գնահատում և խորհրդատվություն լիզինգային նախագծի վերաբերյալ:</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-neutral-900 mb-3">Պայմաններ և սակագներ</h3>
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-left border-collapse text-xs lg:text-sm">
                      <tbody>
                        <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700 w-1/3">Արժույթը</td><td className="p-3 text-neutral-600">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td></tr>
                        <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Լիզինգառուները</td><td className="p-3 text-neutral-600">ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր</td></tr>
                        <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Լիզինգի առարկայի ձեռքբերման հնարավորությունները</td><td className="p-3 text-neutral-600">Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից` առաջնային և երկրորդային շուկաներից</td></tr>
                        <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Լիզինգի սահմանաչափերը</td><td className="p-3 text-neutral-600">5,000,001-1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</td></tr>
                        <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Կանխավճար</td><td className="p-3 text-neutral-600">Նվազագույնը` 10%</td></tr>
                        <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Մարման ժամկետը</td><td className="p-3 text-neutral-600">6-72 ամիս` կախված ձեռքբերվող Լիզինգի առարկայից</td></tr>
                        <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Մարման եղանակը</td><td className="p-3 text-neutral-600">Անուիտետային, Զսպանակաձև, Պայմանագրային</td></tr>
                        <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Տարեկան տոկոսադրույքը</td><td className="p-3 text-neutral-600">ՀՀ դրամ՝ սկսած 10.5%-ից, ԱՄՆ դոլար՝ սկսած 8%-ից, Եվրո՝ սկսած 6%-ից</td></tr>
                        <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Տույժեր ուշացման դեպքում</td><td className="p-3 text-neutral-600">Մայր գումարի դեպքում` օրական 0.015%, Տոկոսագումարների դեպքում` օրական 0.1%</td></tr>
                        <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Ժամկետից շուտ մարելու տուգանք</td><td className="p-3 text-neutral-600">Մինչև պայմանագրի կեսը մարելիս՝ գերազանցող մայր գումարի 5%-ի չափով</td></tr>
                        <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Ապահովվածություն</td><td className="p-3 text-neutral-600">Երաշխավորություններ և գույքի/իրավունքի գրավ` ըստ պահանջի</td></tr>
                        <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Գանձվող վճարներ</td><td className="p-3 text-neutral-600">Հայտի ուսումնասիրում` 20,000 ՀՀ դրամ, Միջնորդավճար` 0.4-1% (ոչ ավել քան 500,000 դրամ), Սեփականության փոխանցում` 10,000 ՀՀ դրամ</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Ակորդեոն 2: ՀՀ Կառավարության Տնտեսության Արդիականացման նպատակային ծրագիր */}
          <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 font-semibold text-neutral-800 transition-colors cursor-pointer"
            >
              <span>ՀՀԿառավարության Տնտեսության Արդիականացման նպատակային ծրագրի ներքո արտադրողականության խթանման ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)</span>
              <span className="text-purple-700 text-lg font-bold">{openAccordion === 1 ? '−' : '+'}</span>
            </button>

            {openAccordion === 1 && (
              <div className="p-6 border-t border-gray-200 text-sm text-neutral-700 space-y-4 bg-white">
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="w-full text-left border-collapse text-xs lg:text-sm">
                    <tbody>
                      <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700 w-1/3">Ֆինանսավորում</td><td className="p-3 text-neutral-600">Լիզինգ</td></tr>
                      <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Արժույթ</td><td className="p-3 text-neutral-600">ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո</td></tr>
                      <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Լիզինգառու</td><td className="p-3 text-neutral-600">ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր</td></tr>
                      <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Նպատակ</td><td className="p-3 text-neutral-600">Նոր մեքենասարքավորումների գնում/ներմուծում, թվայնացման ծրագրեր, խորհրդատվական ծառայություններ</td></tr>
                      <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Սուբսիդավորվող ոլորտները</td><td className="p-3 text-neutral-600">Մշակող արդյունաբերություն, շինարարություն, գյուղատնտեսություն, առողջապահություն, կրթություն և այլն</td></tr>
                      <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Մարման ժամկետ</td><td className="p-3 text-neutral-600">Մինչև 120 ամիս</td></tr>
                      <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Տարեկան տոկոսադրույք</td><td className="p-3 text-neutral-600">ՀՀ դրամ` 9%-14%, ԱՄՆ դոլար/Եվրո` 6%-10% (Սուբսիդավորվում է ՀՀ դրամով՝ 8%, ԱՄՆ դոլար/Եվրոյով՝ 6%)</td></tr>
                      <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Կանխավճար</td><td className="p-3 text-neutral-600">Նվազագույնը` 10%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Ակորդեոն 3: Լիզինգ՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 font-semibold text-neutral-800 transition-colors cursor-pointer"
            >
              <span>Լիզինգ՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով</span>
              <span className="text-purple-700 text-lg font-bold">{openAccordion === 2 ? '−' : '+'}</span>
            </button>

            {openAccordion === 2 && (
              <div className="p-6 border-t border-gray-200 text-sm text-neutral-700 space-y-4 bg-white">
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="w-full text-left border-collapse text-xs lg:text-sm">
                    <tbody>
                      <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700 w-1/3">Արժույթ</td><td className="p-3 text-neutral-600">ՀՀ դրամ</td></tr>
                      <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Գործունեության ոլորտ</td><td className="p-3 text-neutral-600">Գյուղատնտեսություն</td></tr>
                      <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Նպատակ</td><td className="p-3 text-neutral-600">Տրակտորների, կոմբայների, գութանների, սրսկիչների և այլ գյուղատնտեսական տեխնիկայի ձեռքբերում</td></tr>
                      <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Լիզինգի սահմանաչափ</td><td className="p-3 text-neutral-600">5,100,000 - 500,000,000 ՀՀ դրամ</td></tr>
                      <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Կանխավճար</td><td className="p-3 text-neutral-600">Լիզինգի առարկայի արժեքի 20%</td></tr>
                      <tr className="border-b"><td className="p-3 font-semibold text-neutral-700">Մարման ժամկետ</td><td className="p-3 text-neutral-600">36-120 ամիս</td></tr>
                      <tr className="border-b bg-gray-50"><td className="p-3 font-semibold text-neutral-700">Տարեկան տոկոսադրույք</td><td className="p-3 text-neutral-600">Մինչև 14% (սուբսիդավորվում է այնպես, որ հաճախորդի համար կազմի 2%, իսկ սահմանամերձ բնակավայրերում/կոոպերատիվների համար՝ 0%)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Թարմացման ամսաթիվ */}
        <div className="text-right text-xs text-gray-400 mb-6">
          Թարմացվել է` 26/05/2026 16:56
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-10 py-10 text-sm text-neutral-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-black text-neutral-800 tracking-tighter mb-4">evocaBANK</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-neutral-900 mb-3">Բանկի մասին</h3>
              <ul className="space-y-2 text-xs">
                <li className="hover:text-purple-700 cursor-pointer">Մեր մասին</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-3">Օգտակար հղումներ</h3>
              <ul className="space-y-2 text-xs">
                <li className="hover:text-purple-700 cursor-pointer">Հաճախորդի իրավունքները (Բողոքի ներկայացման)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-3">Այլ հղումներ</h3>
              <ul className="space-y-2 text-xs">
                <li className="hover:text-purple-700 cursor-pointer">EvocaONLINE</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex space-x-4">
            <span className="cursor-pointer">f</span>
            <span className="cursor-pointer">📷</span>
            <span className="cursor-pointer">📌</span>
            <span className="cursor-pointer">in</span>
          </div>
          <div className="flex space-x-4">
            <span className="bg-black text-white px-3 py-1.5 rounded cursor-pointer">App Store</span>
            <span className="bg-black text-white px-3 py-1.5 rounded cursor-pointer">Google Play</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Leasing;