import React from 'react';

function Pahatuper({ setActiveTab }) {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen font-sans text-neutral-800">
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
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pahatuper;