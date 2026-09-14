import React from 'react';
import Online from './online';

function Pahatuper() {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen font-sans text-neutral-800">
      
      {/* Հատուկ ավելացված header-ի հատվածը Pahatuper-ի ներսում */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-600">
          <div className="flex gap-6">
            <span className="font-semibold text-black cursor-pointer">Անհատ</span>
            <span className="cursor-pointer hover:text-black">Բիզնես</span>
            <span className="cursor-pointer hover:text-black">Ակնթարթային վճարումներ</span>
            <span className="cursor-pointer hover:text-black">Մեր մասին</span>
            <span className="cursor-pointer hover:text-black">Նորություններ</span>
            <span className="cursor-pointer hover:text-black">Բլոգ</span>
            <span className="cursor-pointer hover:text-black">Կարիերա</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer">Առցանց հայտեր</span>
            <span className="cursor-pointer">Հետադարձ կապ</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-black tracking-wider text-black">evoca</h1>
          </div>
          <div>
            <a href="/online" className="bg-[#6400dc] text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md hover:bg-[#5200b8] transition-colors">
              EvocaONLINE
            </a>
          </div>
        </div>
      </header>

      {/* Էջի հիմնական բովանդակությունը */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        
        {/* Վերնագիր և Նկար */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Անհատական պահատուփեր
            </h1>
            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող անհատական պահատուփեր:
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17738350520558/780x585.jpg" 
              alt="Անհատական պահատուփեր" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Տեքստային հիմնական բաժին */}
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

          <div className="bg-white rounded-2xl shadow-sm border border-gray-300 overflow-x-auto">
            <table className="w-full text-left border-collapse text-[11px] lg:text-xs">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300 text-neutral-800">
                  <th className="py-2.5 px-3 font-bold border-r border-gray-300">Ժամկետ</th>
                  <th className="py-2.5 px-3 font-bold text-center" colSpan="3">Պահարանի չափերը</th>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-300 text-neutral-700">
                  <th className="py-2 px-3 border-r border-gray-300"></th>
                  <th className="py-2 px-3 text-center border-r border-gray-300">փոքր</th>
                  <th className="py-2 px-3 text-center border-r border-gray-300">միջին</th>
                  <th className="py-2 px-3 text-center">մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 text-gray-700">
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">14 օր</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">5,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">7,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">10,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">1 ամիս</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">7,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">10,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">12,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">3 ամիս</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">10,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">15,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">6 ամիս</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">15,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">20,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">25,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">12 ամիս</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">30,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">40,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Երկարաժամկետ</td>
                  <td className="py-2.5 px-3 text-center text-[#6400dc] font-semibold border-r border-gray-300" colSpan="3">պայմանագրային</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Պահարանի բանալու կորուստ կամ վնասում</td>
                  <td className="py-2.5 px-3 text-center font-semibold" colSpan="3">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Պահարանի վնասում</td>
                  <td className="py-2.5 px-3 text-center font-semibold" colSpan="3">Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                  <td className="py-2.5 px-3 text-center font-semibold" colSpan="3">Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                  <td className="py-2.5 px-3 text-center font-semibold" colSpan="3">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
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

          <div className="bg-white rounded-2xl shadow-sm border border-gray-300 overflow-x-auto">
            <table className="w-full text-left border-collapse text-[11px] lg:text-xs">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300 text-neutral-800">
                  <th className="py-2.5 px-3 font-bold border-r border-gray-300">Ժամկետ</th>
                  <th className="py-2.5 px-3 font-bold text-center" colSpan="3">Պահարանի չափսերը</th>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-300 text-neutral-700">
                  <th className="py-2 px-3 border-r border-gray-300"></th>
                  <th className="py-2 px-3 text-center border-r border-gray-300">փոքր</th>
                  <th className="py-2 px-3 text-center border-r border-gray-300">միջին</th>
                  <th className="py-2 px-3 text-center">մեծ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 text-gray-700">
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">14 օր</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">25,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">35,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">50,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">1 ամիս</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">35,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">50,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">60,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">3 ամիս</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">50,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">75,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">100,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">6 ամիս</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">75,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">100,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">125,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">12 ամիս</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">100,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center border-r border-gray-300">125,000 ՀՀ դրամ</td>
                  <td className="py-2.5 px-3 text-center">150,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Երկարաժամկետ</td>
                  <td className="py-2.5 px-3 text-center text-[#6400dc] font-semibold border-r border-gray-300" colSpan="3">պայմանագրային</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Պահարանի բանալու կորուստ կամ վնասում</td>
                  <td className="py-2.5 px-3 text-center font-semibold" colSpan="3">20,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Պահարանի վնասում</td>
                  <td className="py-2.5 px-3 text-center font-semibold" colSpan="3">Հասցված վնասի եռապատիկը</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                  <td className="py-2.5 px-3 text-center font-semibold" colSpan="3">Յուրաքանչյուր ուշացրած օրվա համար 1,000 ՀՀ դրամ</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-medium border-r border-gray-300">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                  <td className="py-2.5 px-3 text-center font-semibold" colSpan="3">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 italic pt-2">
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
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
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