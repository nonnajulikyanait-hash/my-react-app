import React from 'react';
import Online from './online';

function Pahatuper() {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen font-sans text-neutral-800">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        
        {/* Վերնագիր և Նկար */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900">
            Անհատական պահատուփեր
          </h1>

          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17738350520558/780x585.jpg" 
              alt="Անհատական պահատուփեր" 
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>
        </div>

        {/* Տեքստային բաժին */}
        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100 space-y-6 text-sm lg:text-base text-gray-700 leading-relaxed">
          <p>
            Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է: Դրանցում կարող եք պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր (դրամ, արժեթղթեր, թանկարժեք մետաղներ և քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և տեսաժապավեններ, մագնիսական կրիչներ և այլն):
          </p>

          <p>
            Պահատուփերը գտնվում են առանձնացված տարածքում՝ շուրջօրյա հսկողության ներքո: Դրանք զինված են միջազգային չափանիշներին համապատասխան անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ, պահատուփերի առանձնացված տարածքում կարող եք գտնվել մինչև 15 րոպե:
          </p>

          <p className="font-semibold text-[#6400dc]">
            Առաջարկում ենք 3 չափսի պահատուփեր` փոքր, միջին, մեծ:
          </p>

          <p>
            Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ, իսկ մյուսը պահվում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն երկու բանալիների միաժամանակյա կիրառմամբ): Ձեզ տրամադրված բանալիի օրինակը պարտավոր եք վերադարձնել՝ պահատուփի վարձակալության պայմանագրի գործողության ժամկետի վերջում:
          </p>

          <p>
            Պահատուփերը վարձակալության ենք տրամադրում անհատական պայմանագրի հիման վրա, ձեր նախընտրած վարձակալության ժամկետով: Վարձակալման գինը կախված է պահարանի չափից և ժամկետից՝ ըստ մեր սակագների:
          </p>

          <p>
            12 ամսից երկար ժամկետով վարձակալելու դեպքում պահատուփերի սակագները սահմանվում են պայմանագրային կարգով:
          </p>

          <p>
            Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և ժամերին:
          </p>
        </div>

        {/* Առաջին աղյուսակ (Ռեզիդենտների համար) */}
        <div className="space-y-4">
          <h2 className="text-xl lg:text-2xl font-bold text-neutral-900">
            Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
          </h2>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs lg:text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-neutral-700">
                  <th className="p-4 font-bold">Ժամկետ</th>
                  <th className="p-4 font-bold text-center" colSpan="3">Պահարանի չափերը</th>
                </tr>
                <tr className="bg-gray-50/50 border-b border-gray-200 text-neutral-600">
                  <th className="p-4"></th>
                  <th className="p-4 text-center">փոքր</th>
                  <th className="p-4 text-center">միջին</th>
                  <th className="p-4 text-center">մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="p-4 font-medium">14 օր</td>
                  <td className="p-4 text-center">5,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">7,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">10,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">1 ամիս</td>
                  <td className="p-4 text-center">7,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">10,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">12,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">3 ամիս</td>
                  <td className="p-4 text-center">10,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">15,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">6 ամիս</td>
                  <td className="p-4 text-center">15,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">20,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">25,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">12 ամիս</td>
                  <td className="p-4 text-center">30,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">40,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Երկարաժամկետ</td>
                  <td className="p-4 text-center text-[#6400dc] font-semibold">պայմանագրային</td>
                  <td className="p-4 text-center text-[#6400dc] font-semibold">պայմանագրային</td>
                  <td className="p-4 text-center text-[#6400dc] font-semibold">պայմանագրային</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Պահարանի բանալու կորուստ կամ վնասում</td>
                  <td className="p-4 text-center font-semibold" colSpan="3">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Պահարանի վնասում</td>
                  <td className="p-4 text-center font-semibold" colSpan="3">Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                  <td className="p-4 text-center font-semibold" colSpan="3">Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                  <td className="p-4 text-center font-semibold" colSpan="3">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Երկրորդ աղյուսակ (Օտարերկրյա քաղաքացիների համար) */}
        <div className="space-y-4 pt-6">
          <h2 className="text-xl lg:text-2xl font-bold text-neutral-900">
            Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար
          </h2>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs lg:text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-neutral-700">
                  <th className="p-4 font-bold">Ժամկետ</th>
                  <th className="p-4 font-bold text-center" colSpan="3">Պահարանի չափսերը</th>
                </tr>
                <tr className="bg-gray-50/50 border-b border-gray-200 text-neutral-600">
                  <th className="p-4"></th>
                  <th className="p-4 text-center">փոքր</th>
                  <th className="p-4 text-center">միջին</th>
                  <th className="p-4 text-center">մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="p-4 font-medium">14 օր</td>
                  <td className="p-4 text-center">25,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">35,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">1 ամիս</td>
                  <td className="p-4 text-center">35,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">50,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">60,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">3 ամիս</td>
                  <td className="p-4 text-center">50,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">75,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">100,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">6 ամիս</td>
                  <td className="p-4 text-center">75,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">100,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">125,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">12 ամիս</td>
                  <td className="p-4 text-center">100,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">125,000 ՀՀ դրամ</td>
                  <td className="p-4 text-center">150,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Երկարաժամկետ</td>
                  <td className="p-4 text-center text-[#6400dc] font-semibold">պայմանագրային</td>
                  <td className="p-4 text-center text-[#6400dc] font-semibold">պայմանագրային</td>
                  <td className="p-4 text-center text-[#6400dc] font-semibold">պայմանագրային</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Պահարանի բանալու կորուստ կամ վնասում</td>
                  <td className="p-4 text-center font-semibold" colSpan="3">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Պահարանի վնասում</td>
                  <td className="p-4 text-center font-semibold" colSpan="3">Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                  <td className="p-4 text-center font-semibold" colSpan="3">Յուրաքանչյուր ուշացրած օրվա համար 1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                  <td className="p-4 text-center font-semibold" colSpan="3">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs lg:text-sm text-gray-500 italic pt-2">
            Նշում - Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:
          </p>
        </div>

        {/* Փաստաթղթեր բաժին */}
        <div className="space-y-4 pt-6">
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
          </div>
        </div>

      </div>

      {/* Online բաղադրիչը ֆուտերից անմիջապես առաջ */}
      <div className="mt-16">
        <Online />
      </div>

    </div>
  );
}

export default Pahatuper;