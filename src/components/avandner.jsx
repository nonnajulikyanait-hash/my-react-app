import React, { useState } from 'react';

function DepositsComponent() {
  const [activeSubTab, setActiveSubTab] = useState('deposits');

  // Ավանդների տվյալները՝ հիմնված տրամադրված տեղեկատվության և նկարների վրա
  const depositsList = [
    {
      id: 1,
      title: "Դասական ավանդ",
      description: "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:",
      image: "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg",
      details: [
        { label: "Գումար", value: "սկսած 100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "31-1,825 օր", sub: "" },
        { label: "Տոկոսադրույք", value: "մինչև 10.5% ֏", sub: "մինչև" },
        { label: "Համալրման հնարավորություն", value: "սկսած 100,000 ֏", sub: "սկսած" }
      ]
    },
    {
      id: 2,
      title: "Մանկական ավանդ",
      description: "Ձեր երեխայի աճող ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ։ «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով:",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg",
      details: [
        { label: "Գումար", value: "սկսած 100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "մինչև 18 լրանալը", sub: "մինչև" },
        { label: "Տոկոսադրույք", value: "9.5% ֏", sub: "" },
        { label: "Համալրման հնարավորություն", value: "սկսած 40,000 ֏", sub: "սկսած" }
      ]
    },
    {
      id: 3,
      title: "Ավանդ Evoca Online",
      description: "Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ։ Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու։ Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg",
      details: [
        { label: "Գումար", value: "սկսած 100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "31-1,825 օր", sub: "" },
        { label: "Տոկոսադրույք", value: "մինչև 10.75% ֏", sub: "մինչև" }
      ]
    }
  ];

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-16">
      {/* Մանուշակագույն Ենթամենյու (Subheader) */}
      <div className="w-full bg-purple-800 text-white px-6 lg:px-10 shadow-inner">
        <div className="flex space-x-8 text-sm font-medium">
          <button 
            onClick={() => setActiveSubTab('deposits')}
            className={`py-3 cursor-pointer transition-colors border-b-2 ${
              activeSubTab === 'deposits' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
            }`}
          >
            Ավանդներ
          </button>
          <button 
            onClick={() => setActiveSubTab('info')}
            className={`py-3 cursor-pointer transition-colors border-b-2 ${
              activeSubTab === 'info' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
            }`}
          >
            Կարևոր տեղեկատվություն
          </button>
        </div>
      </div>

      {/* Հացհատիկ (Breadcrumbs) և Էջի Վերնագիր */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6">
        <div className="text-xs text-gray-400 mb-2">
          Անհատ  &gt;  Ավանդներ  &gt;  <span className="text-gray-600">Ավանդներ</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-8">Ավանդներ</h2>
      </div>

      {/* Բովանդակություն ըստ ենթամենյուի */}
      {activeSubTab === 'deposits' ? (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-8">
          {depositsList.map((deposit) => (
            <div 
              key={deposit.id} 
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-8 transition-all hover:shadow-md"
            >
              {/* Նկար */}
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <img 
                  src={deposit.image} 
                  alt={deposit.title} 
                  className="w-full h-48 lg:h-52 object-cover rounded-xl shadow-sm"
                />
              </div>

              {/* Տեղեկատվություն և Բնութագրեր */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3">{deposit.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                    {deposit.description}
                  </p>
                </div>

                {/* Ցուցանիշների վանդակներ */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                  {deposit.details.map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs text-gray-400 mb-1">{item.sub}</span>
                      <span className="text-lg lg:text-xl font-bold text-neutral-800">{item.value}</span>
                      <span className="text-xs text-gray-500 mt-0.5">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Մանրամասն կոճակ */}
                <div className="mt-6 flex justify-end">
                  <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold px-5 py-2 rounded-full text-sm transition-colors cursor-pointer flex items-center space-x-1">
                    <span>Մանրամասն</span>
                    <span>›</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-neutral-800 mb-4">Կարևոր տեղեկատվություն ավանդների վերաբերյալ</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            ՀՀ օրենսդրության համաձայն՝ ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորված է «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքով:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Դրամային ավանդների դեպքում երաշխավորված ավանդի առավելագույն չափը 16 միլիոն ՀՀ դրամ է։</li>
            <li>Արտարժութային ավանդների դեպքում երաշխավորված ավանդի առավելագույն չափը 7 միլիոն ՀՀ դրամ է։</li>
            <li>Ավանդների տոկոսագումարները հաշվեգրվում են պայմանագրով սահմանված կարգով։</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DepositsComponent;