import React, { useState } from 'react';

function EvocaInvestBottomSection() {
  // Վիդեոների և հարցերի բացման/փակման վիճակները
  const [openUseful, setOpenUseful] = useState(false);
  const [openFaq, setOpenFaq] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const faqList = [
    {
      question: "Ի՞նչ է բաժնետոմսը։",
      answer: "Բաժնետոմսը ընկերության սեփականության մասնաբաժին ներկայացնող արժեթուղթ է։ Բաժնետոմս գնելիս՝ ներդրողը դառնում է տվյալ ընկերության մասնակի սեփականատեր և կարող է շահույթ ստանալ բաժնետոմսի գնի աճից կամ ընկերության կողմից վճարվող դիվիդենտներից։ Բաժնետոմսերի արժեքը կարող է փոփոխվել՝ շուկայական պահանջարկից, ընկերության արդյունքներից և տնտեսական պայմաններից կախված։"
    },
    {
      question: "Ի՞նչ է պարտատոմսը։",
      answer: "Պարտատոմսը պարտքային արժեթուղթ է։ Այն գնելիս` փաստացի գումար ես տրամադրում ընկերությանը կամ պետությանը որոշակի ժամկետով և դրա դիմաց ստանում ես կանխատեսելի տոկոսային եկամուտ։"
    },
    {
      question: "Ի՞նչ է ETF-ը։",
      answer: "ETF-ը (Exchange Traded Fund) ներդրումային ֆոնդ է, որը վաճառվում և գնվում է բորսայում սովորական բաժնետոմսի նման։ Այն սովորաբար միավորում է բազմաթիվ ակտիվներ մեկ գործիքի մեջ, օրինակ՝ բաժնետոմսեր, պարտատոմսեր կամ ամբողջ ինդեքս։"
    },
    {
      question: "Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև։",
      answer: "Բաժնետոմսը կապվում է մեկ ընկերության հետ և սովորաբար ունի ավելի բարձր եկամտաբերության, բայց նաև ավելի բարձր ռիսկի պոտենցիալ։\nՊարտատոմսը սովորաբար ավելի կայուն գործիք է և կարող է ապահովել կանխատեսելի տոկոսային եկամուտ։\nETF-ը թույլ է տալիս մեկ գործիքի միջոցով ներդրում կատարել միանգամից բազմաթիվ ակտիվներում, ինչը հաճախ օգնում է դիվերսիֆիկացնել ռիսկը։"
    }
  ];

  return (
    <div className="evocainvest-bottom-container mt-12 pt-8 border-t border-gray-200">
      
      {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
      <h2 className="text-2xl lg:text-3xl font-extrabold text-neutral-900 mb-6">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      {/* EvocaINVEST օգտակար նյութեր (Dropdown) */}
      <div className="mb-6 border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
        <div 
          onClick={() => setOpenUseful(!openUseful)}
          className="bg-gray-50 px-6 py-4 cursor-pointer flex justify-between items-center text-purple-800 font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          <span>EvocaINVEST օգտակար նյութեր</span>
          <span>{openUseful ? '▲' : '▼'}</span>
        </div>

        {openUseful && (
          <div className="p-6 flex flex-col space-y-4 bg-white border-t border-gray-100">
            <a href="https://www.youtube.com/watch?v=5kUF-3KueZ8&t=2s" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900 underline font-medium">
              ▶ Տեսանյութ 1 (Դիտել YouTube-ում)
            </a>
            <a href="https://www.youtube.com/watch?v=wax5BjEOAGQ&t=32s" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900 underline font-medium">
              ▶ Տեսանյութ 2 (Դիտել YouTube-ում)
            </a>
            <a href="https://www.youtube.com/watch?v=oxxOZXf2kPA&t=12s" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900 underline font-medium">
              ▶ Տեսանյութ 3 (Դիտել YouTube-ում)
            </a>
            <a href="https://www.youtube.com/watch?v=XCz2N5eicHs" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900 underline font-medium">
              ▶ Տեսանյութ 4 (Դիտել YouTube-ում)
            </a>
          </div>
        )}
      </div>

      {/* Հաճախ տրվող հարցեր */}
      <div className="mb-6 border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
        <div 
          onClick={() => setOpenFaq(!openFaq)}
          className="bg-gray-50 px-6 py-4 cursor-pointer flex justify-between items-center text-purple-800 font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          <span>Հաճախ տրվող հարցեր</span>
          <span>{openFaq ? '▲' : '▼'}</span>
        </div>

        {openFaq && (
          <div className="bg-white border-t border-gray-100">
            {faqList.map((item, index) => (
              <div key={index} className={index !== faqList.length - 1 ? 'border-b border-gray-100' : ''}>
                <div 
                  onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                  className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-purple-900 font-semibold">{item.question}</span>
                  <span className="text-purple-700 font-bold text-lg">{activeFaqIndex === index ? '−' : '+'}</span>
                </div>
                {activeFaqIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed whitespace-pre-line text-sm lg:text-base">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

function Arjetxter() {
  const [activeSubTab, setActiveSubTab] = useState('invest'); // Կարող եք փոխել ըստ ցանկության
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openBondsAccordion, setOpenBondsAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleBondsAccordion = (index) => {
    setOpenBondsAccordion(openBondsAccordion === index ? null : index);
  };

  const investmentAccordionItems = [
    {
      title: "Ներդրումային ծառայությունների մատուցման կանոններ",
      content: (
        <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
          <div>
            <a 
              href="https://www.evoca.am/files/global_files/1/16708305350017.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-700 underline font-semibold hover:text-purple-900 block mb-1"
            >
              Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ
            </a>
            <p className="mt-1">
              Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100">
            <a 
              href="https://www.evoca.am/files/global_files/1/16708304747333.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-700 underline font-semibold hover:text-purple-900 block mb-1"
            >
              Արժեթղթերի Պահառության գործունեության կանոններ
            </a>
            <p className="mt-1">
              Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում` Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Ծառայությունների մատուցման սակագներ",
      content: (
        <div className="space-y-3 text-gray-600 text-sm lg:text-base leading-relaxed">
          <p className="font-medium text-neutral-800">Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման սակագներ</p>
          <div>
            <a 
              href="https://www.evoca.am/file_manager/Bonds%202026/Tariffs%20armenian.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-700 underline font-semibold hover:text-purple-900 block"
            >
              Միջազգային շուկաներում ծառայությունների մատուցման սակագներ
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Լրացուցիչ տեղեկատվություն",
      content: (
        <div className="space-y-3 text-gray-600 text-sm lg:text-base leading-relaxed">
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.evoca.am/files/global_files/1/16708298612185.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 underline hover:text-purple-900"
              >
                «Արժեթղթերով գործարքներ կնքելու նպատակով պատվերների ընդունման և կատարման» ընթացակարգ
              </a>
            </li>
            <li>
              <a 
                href="https://www.evoca.am/files/global_files/1/16161384835757.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 underline hover:text-purple-900"
              >
                «Շահերի բախման սահմանափակման» ընթացակարգ
              </a>
            </li>
            <li>
              <a 
                href="https://www.evoca.am/file_manager/stock-list.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 underline hover:text-purple-900"
              >
                Ֆոնդային բորսաներ
              </a>
            </li>
            <li>
              <a 
                href="https://www.evoca.am/files/global_files/1/16161384961689.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 underline hover:text-purple-900"
              >
                Տեղեկացումներ հնարավոր ռիսկերի վերաբերյալ
              </a>
            </li>
          </ul>
        </div>
      )
    }
  ];

  const renderBondsFiles = () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
      <a 
        href="https://www.evoca.am/file_manager/News-Bonds/prospectous-bonds.png" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center hover:bg-purple-50 hover:border-purple-200 transition-all group flex flex-col items-center justify-center space-y-2"
      >
        <span className="text-xs font-bold text-purple-700 uppercase tracking-wider group-hover:underline">ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ</span>
        <div className="w-12 h-16 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center text-gray-400 group-hover:text-purple-700">
          📄
        </div>
      </a>
      <a 
        href="https://www.evoca.am/file_manager/News-Bonds/prospectous-bonds-amd.png" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center hover:bg-purple-50 hover:border-purple-200 transition-all group flex flex-col items-center justify-center space-y-2"
      >
        <span className="text-xs font-bold text-purple-700 uppercase tracking-wider group-hover:underline">ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ</span>
        <div className="w-12 h-16 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center text-gray-400 group-hover:text-purple-700">
          📄
        </div>
      </a>
      <a 
        href="https://www.evoca.am/file_manager/News-Bonds/prospectous-bonds-dollar.png" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center hover:bg-purple-50 hover:border-purple-200 transition-all group flex flex-col items-center justify-center space-y-2"
      >
        <span className="text-xs font-bold text-purple-700 uppercase tracking-wider group-hover:underline">ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ</span>
        <div className="w-12 h-16 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center text-gray-400 group-hover:text-purple-700">
          📄
        </div>
      </a>
    </div>
  );

  const renderBondsTable = (headers, rows, note) => (
    <div className="space-y-6 text-sm lg:text-base text-gray-700">
      <h4 className="font-extrabold text-neutral-900 text-center tracking-wide uppercase text-lg mb-4">
        ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
      </h4>
      <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-purple-900 text-white">
              <th className="p-3.5 border-b border-purple-800 font-bold">Դաս</th>
              <th colSpan={headers.length} className="p-3.5 border-b border-purple-800 font-bold text-center">
                Անվանական արժեկտրոնային
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-3.5 border-b border-gray-100 font-medium text-neutral-900 w-1/3">{row.label}</td>
                {row.values.map((val, vIdx) => (
                  <td key={vIdx} className="p-3.5 border-b border-gray-100 text-gray-600 text-center">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="text-xs text-gray-500 italic mt-2">{note}</p>}
      {renderBondsFiles()}
    </div>
  );

  const bondsAccordionItems = [
    {
      title: "Պարտատոմսերի թողարկում",
      content: renderBondsTable(
        ["ՀՀ դրամ", "ԱՄՆ դոլար"],
        [
          { label: "Անվանական արժեք", values: ["10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"] },
          { label: "Ընդհանուր ծավալ", values: ["3,000,000,000 ՀՀ դրամ", "15,000,000 ԱՄՆ դոլար"] },
          { label: "Թողարկվող պարտատոմսերի քանակ", values: ["300,000 հատ", "150,000 հատ"] },
          { label: "Շրջանառության ժամկետ", values: ["36 ամիս", "36 ամիս"] },
          { label: "Արժեկտրոնային տարեկան տոկոսադրույք", values: ["10%", "5%"] },
          { label: "Արժեկտրոնների վճարման պարբերականություն", values: ["Եռամսյակային", "Եռամսյակային"] },
          { label: "Տեղաբաշխող", values: ["«Էվոկաբանկ» ԲԲԸ", "«Էվոկաբանկ» ԲԲԸ"] },
        ],
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:"
      )
    },
    {
      title: "ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՔԵՐՈՐԴ",
      content: renderBondsTable(
        ["ՀՀ դրամ", "ԱՄՆ դոլար"],
        [
          { label: "Անվանական արժեք", values: ["10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"] },
          { label: "Ընդհանուր ծավալ", values: ["3,000,000,000 ՀՀ դրամ", "15,000,000 ԱՄՆ դոլար"] },
          { label: "Թողարկվող պարտատոմսերի քանակ", values: ["300,000 հատ", "150,000 հատ"] },
          { label: "Շրջանառության ժամկետ", values: ["36 ամիս", "36 ամիս"] },
          { label: "Արժեկտրոնային տարեկան տոկոսադրույք", values: ["10.25%", "5.25%"] },
          { label: "Արժեկտրոնների վճարման պարբերականություն", values: ["Եռամսյակային", "Եռամսյակային"] },
          { label: "Տեղաբաշխող", values: ["«Էվոկաբանկ» ԲԲԸ", "«Էվոկաբանկ» ԲԲԸ"] },
        ],
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:"
      )
    },
    {
      title: "ՏԱՍԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ",
      content: renderBondsTable(
        ["ՀՀ դրամ", "ԱՄՆ դոլար"],
        [
          { label: "Անվանական արժեք", values: ["10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"] },
          { label: "Ընդհանուր ծավալ", values: ["2,000,000,000 ՀՀ դրամ", "10,000,000 ԱՄՆ դոլար"] },
          { label: "Թողարկվող պարտատոմսերի քանակ", values: ["200,000 հատ", "100,000 հատ"] },
          { label: "Շրջանառության ժամկետ", values: ["30 ամիս", "30 ամիս"] },
          { label: "Արժեկտրոնային տարեկան տոկոսադրույք", values: ["11%", "5%"] },
          { label: "Արժեկտրոնների վճարման պարբերականություն", values: ["Եռամսյակային", "Եռամսյակային"] },
          { label: "Տեղաբաշխող", values: ["«Էվոկաբանկ» ԲԲԸ", "«Էվոկաբանկ» ԲԲԸ"] },
        ],
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ:"
      )
    },
    {
      title: "ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      content: (
        <div className="space-y-6 text-sm lg:text-base text-gray-700">
          <h4 className="font-extrabold text-neutral-900 text-center tracking-wide uppercase text-lg mb-4">
            ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
          </h4>
          <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-purple-900 text-white">
                  <th className="p-3.5 border-b border-purple-800 font-bold">Դաս</th>
                  <th colSpan={3} className="p-3.5 border-b border-purple-800 font-bold text-center">
                    Անվանական արժեկտրոնային
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3.5 border-b border-gray-100 font-medium text-neutral-900">Անվանական արժեք</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">10,000 ՀՀ դրամ</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">100 ԱՄՆ դոլար</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">100 Եվրո</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3.5 border-b border-gray-100 font-medium text-neutral-900">Ընդհանուր ծավալ</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">2,000,000,000 ՀՀ դրամ</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">10,000,000 ԱՄՆ դոլար</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">7,000,000 Եվրո</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3.5 border-b border-gray-100 font-medium text-neutral-900">Թողարկվող պարտատոմսերի քանակ</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">200,000 հատ</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">100,000 հատ</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">70,000 հատ</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3.5 border-b border-gray-100 font-medium text-neutral-900">Շրջանառության ժամկետ</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">30 ամիս</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">39 ամիս</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">39 ամիս</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3.5 border-b border-gray-100 font-medium text-neutral-900">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">11%</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">5.25%</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">4%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3.5 border-b border-gray-100 font-medium text-neutral-900">Արժեկտրոնների վճարման պարբերականություն</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">Եռամսյակային</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">Եռամսյակային</td>
                  <td className="p-3.5 border-b border-gray-100 text-gray-600 text-center">Եռամսյակային</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3.5 border-b border-gray-100 font-medium text-neutral-900">Տեղաբաշխող</td>
                  <td colSpan={3} className="p-3.5 border-b border-gray-100 text-gray-600 text-center">«Էվոկաբանկ» ԲԲԸ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 italic mt-2">Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ:</p>
          {renderBondsFiles()}
        </div>
      )
    },
    {
      title: "ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      content: renderBondsTable(
        ["ՀՀ դրամ", "ԱՄՆ դոլար"],
        [
          { label: "Անվանական արժեք", values: ["10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"] },
          { label: "Ընդհանուր ծավալ", values: ["2,000,000,000 ՀՀ դրամ", "10,000,000 ԱՄՆ դոլար"] },
          { label: "Թողարկվող պարտատոմսերի քանակ", values: ["200,000 հատ", "100,000 հատ"] },
          { label: "Շրջանառության ժամկետ", values: ["30 ամիս", "30 ամիս"] },
          { label: "Արժեկտրոնային տարեկան տոկոսադրույք", values: ["11%", "5%"] },
          { label: "Արժեկտրոնների վճարման պարբերականություն", values: ["Եռամսյակային", "Եռամսյակային"] },
          { label: "Տեղաբաշխող", values: ["«Էվոկաբանկ» ԲԲԸ", "«Էվոկաբանկ» ԲԲԸ"] },
        ],
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ."
      )
    },
    {
      title: "ԵՐՐՈՐԴ ԵՎ ՉՈՐՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      content: renderBondsTable(
        ["ՀՀ դրամ", "ԱՄՆ դոլար"],
        [
          { label: "Անվանական արժեք", values: ["10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"] },
          { label: "Ընդհանուր ծավալ", values: ["500,000,000 ՀՀ դրամ", "5,000,000 ԱՄՆ դոլար"] },
          { label: "Թողարկվող պարտատոմսերի քանակ", values: ["50,000 հատ", "50,000 հատ"] },
          { label: "Շրջանառության ժամկետ", values: ["30 ամիս", "30 ամիս"] },
          { label: "Արժեկտրոնային տարեկան տոկոսադրույք", values: ["10%", "5.5%"] },
          { label: "Արժեկտրոնների վճարման պարբերականություն", values: ["Եռամսյակային", "Եռամսյակային"] },
          { label: "Տեղաբաշխող", values: ["«Էվոկաբանկ» ԲԲԸ", "«Էվոկաբանկ» ԲԲԸ"] },
        ],
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.10.2020թ. թիվ 1/562 Ա որոշմամբ."
      )
    },
    {
      title: "ԱՌԱՋԻՆ ԵՎ ԵՐԿՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      content: renderBondsTable(
        ["ՀՀ դրամ", "ԱՄՆ դոլար"],
        [
          { label: "Անվանական արժեք", values: ["10,000 ՀՀ դրամ", "100 ԱՄՆ դոլար"] },
          { label: "Ընդհանուր ծավալ", values: ["500,000,000 ՀՀ դրամ", "5,000,000 ԱՄՆ դոլար"] },
          { label: "Թողարկվող պարտատոմսերի քանակ", values: ["50,000 հատ", "50,000 հատ"] },
          { label: "Շրջանառության ժամկետ", values: ["30 ամիս", "30 ամիս"] },
          { label: "Արժեկտրոնային տարեկան տոկոսադրույք", values: ["10%", "5.5%"] },
          { label: "Արժեկտրոնների վճարման պարբերականություն", values: ["Եռամսյակային", "Եռամսյակային"] },
          { label: "Տեղաբաշխող", values: ["«Էվոկաբանկ» ԲԲԸ", "«Էվոկաբանկ» ԲԲԸ"] },
        ],
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.10.2020թ. թիվ 1/562 Ա որոշմամբ."
      )
    },
    {
      title: "Հաճախ տրվող հարցեր պարտատոմսերի մասին",
      content: (
        <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
          <p>Այստեղ կարող եք գտնել պարտատոմսերի ձեռքբերման, մարման և շրջանառության հետ կապված հաճախ տրվող հարցերի պատասխանները:</p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen flex flex-col justify-between">
      <div>
        {/* Մանուշակագույն Ենթամենյու (Subheader) */}
        <div className="w-full bg-purple-800 text-white px-6 lg:px-10 shadow-inner">
          <div className="flex flex-wrap space-x-6 lg:space-x-10 text-sm font-medium overflow-x-auto">
            <button 
              onClick={() => setActiveSubTab('investment')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'investment' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Ներդրումային ծառայություններ
            </button>
            <button 
              onClick={() => setActiveSubTab('bonds')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'bonds' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Պարտատոմսեր
            </button>
            <button 
              onClick={() => setActiveSubTab('hfc')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'hfc' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              ՀԿԾ ծառայություններ
            </button>
            <button 
              onClick={() => setActiveSubTab('repo')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'repo' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Ռեպո/Հակադարձ Ռեպո գործարքներ
            </button>
            <button 
              onClick={() => setActiveSubTab('invest')}
              className={`py-3 cursor-pointer transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'invest' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              EvocaINVEST
            </button>
          </div>
        </div>

        {/* 1. Ներդրումային ծառայություններ */}
        {activeSubTab === 'investment' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-12">
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Արժեթղթեր  &gt;  <span className="text-gray-600">Ներդրումային ծառայություններ</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Ներդրումային ծառայություններ
                </h1>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան։
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
                  alt="Ներդրումային ծառայություններ" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100 space-y-6 text-sm lg:text-base text-gray-700 leading-relaxed">
              <p>
                Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold text-neutral-900">Ինչպե՞ս դառնալ հաճախորդ։</h3>
                <p>
                  Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ <span className="text-purple-700 font-semibold cursor-pointer underline">այստեղ</span>:
                </p>
                <p>
                  Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ։
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Հասցե՝</h4>
                  <p className="text-gray-600">Երևան, Հանրապետության 44/2</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Հետադարձ կապ՝</h4>
                  <p className="text-gray-600">Հեռ.՝ 374 33 777 453</p>
                  <p className="text-gray-600">374 33 603 055</p>
                  <p className="text-gray-600 mt-2">Էլ․ հասցե՝ <a href="mailto:investsecurities@evoca.am" className="text-purple-700 underline">investsecurities@evoca.am</a></p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 font-medium text-xs lg:text-sm mt-4">
                <strong>ՈՒՇԱԴՐՈՒԹՅՈՒՆ․</strong> Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում։
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-neutral-900">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h3>
              <div className="space-y-3">
                {investmentAccordionItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <button 
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4 text-left font-bold text-neutral-800 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span>{item.title}</span>
                      <span className="text-purple-700 font-bold text-lg">{openAccordion === index ? '−' : '+'}</span>
                    </button>
                    {openAccordion === index && (
                      <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. Պարտատոմսեր */}
        {activeSubTab === 'bonds' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-12">
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Արժեթղթեր  &gt;  <span className="text-gray-600">Պարտատոմսեր</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Պարտատոմսեր
                </h1>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Evocabank-ը հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և ստանալ բարձր եկամուտներ։ Մենք ցանկանում ենք դառնալ Ձեր բարեկեցիկ ապագայի մի մասնիկը։
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg" 
                  alt="Պարտատոմսեր" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100 space-y-6 text-sm lg:text-base text-gray-700 leading-relaxed">
              <p>
                Առաջին անգամ հայաստանյան ֆինանսական համակարգում Evocabank-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ EvocaTOUCH հավելվածի միջոցով։
              </p>
              
              <div className="space-y-3 pt-2">
                <p className="font-semibold text-neutral-900">
                  Պարտատոմսերը պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ՝
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:
                  </li>
                  <li>
                    ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-neutral-900">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h3>
              <div className="space-y-3">
                {bondsAccordionItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <button 
                      onClick={() => toggleBondsAccordion(index)}
                      className="w-full px-6 py-4 text-left font-bold text-neutral-800 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span>{item.title}</span>
                      <span className="text-purple-700 font-bold text-lg">{openBondsAccordion === index ? '−' : '+'}</span>
                    </button>
                    {openBondsAccordion === index && (
                      <div className="px-6 pb-6 border-t border-gray-100 pt-4 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. ՀԿԾ ծառայություններ */}
        {activeSubTab === 'hfc' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-12">
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Արժեթղթեր  &gt;  <span className="text-gray-600">ՀԿԾ ծառայություններ</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Հայաստանի կենտրոնական դեպոզիտարիայի (ՀԿԴ) ծառայություններ
                </h1>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Evocabank-ը հանդիսանում է ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր՝ միջնորդավորելով ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ռեեստրավարման և արժեթղթերի պահառության հետ կապված բոլոր ծառայությունները:
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16783474498811/780x585.jpg" 
                  alt="ՀԿԾ ծառայություններ" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100 space-y-6 text-sm lg:text-base text-gray-700 leading-relaxed">
              <p>
                ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումը իրականացնում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
              </p>
              <p>
                Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքած պայմանագրի հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունները:
              </p>
            </div>
          </div>
        )}

        {/* 4. Ռեպո/Հակադարձ Ռեպո գործարքներ */}
        {activeSubTab === 'repo' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-12">
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Արժեթղթեր  &gt;  <span className="text-gray-600">Ռեպո/Հակադարձ Ռեպո գործարքներ</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Ռեպո/Հակադարձ Ռեպո գործարքներ
                </h1>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Կարճաժամկետ դրամական միջոցներ ներգրավելու և տեղաբաշխելու նպատակով Evocabank-ն իրականացնում է Ռեպո/Հակադարձ Ռեպո գործարքներ։ Ռեպո/Հակադարձ Ռեպո գործարքների շնորհիվ՝ Բանկը կատարում է կարճաժամկետ իրացվելիության կառավարում։
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16783548886405/780x585.jpg" 
                  alt="Ռեպո/Հակադարձ Ռեպո գործարքներ" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100 space-y-6 text-sm lg:text-base text-gray-700 leading-relaxed">
              <p>
                Բանկը Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված, մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային ընկերություններ, Ներդրումային ֆոնդեր, Վարկային կազմակերպություններ, Ապահովագրական ընկերություններ):
              </p>
              <p>
                Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային կազմակերպությունների կողմից թողարկված և Հայաստանի Ֆոնդային Բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով:
              </p>
              <p className="font-medium text-gray-900 bg-gray-50 p-4 rounded-xl border-l-4 border-purple-800">
                Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների արդյունքում:
              </p>
            </div>
          </div>
        )}

        {/* 5. EvocaINVEST */}
        {activeSubTab === 'invest' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-12">
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Արժեթղթեր  &gt;  <span className="text-gray-600">EvocaINVEST</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  EvocaINVEST
                </h1>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Բացահայտեք նոր հնարավորություններ EvocaINVEST-ի հետ միասին։ Ներդրեք արագ, հարմարավետ և անվտանգ։
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="w-full h-64 bg-purple-100 flex items-center justify-center text-purple-800 font-bold text-xl">
                  EvocaINVEST
                </div>
              </div>
            </div>

            {/* Ավելացված EvocaInvestBottomSection կոմպոնենտի լոգիկան */}
            <EvocaInvestBottomSection />
          </div>
        )}
      </div>

      {/* FOOTER */}
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
              <li><a href="#" className="hover:underline">Օտարվող գույք</a></li>
              <li><a href="#" className="hover:underline">Կառուցապատողներ</a></li>
              <li><a href="#" className="hover:underline">Գործընկեր ավտոսրահներ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Օգտակար հղումներ</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:underline">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
              <li><a href="#" className="hover:underline">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
              <li><a href="#" className="hover:underline">Կարգավորում</a></li>
              <li><a href="#" className="hover:underline">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="#" className="hover:underline">Ֆին. հաշտարար</a></li>
              <li><a href="#" className="hover:underline">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Այլ հղումներ</h3>
            <ul className="space-y-2 text-xs mb-6">
              <li><a href="#" className="hover:underline">EvocaONLINE</a></li>
              <li><a href="#" className="hover:underline">Պահատուփեր</a></li>
              <li><a href="#" className="hover:underline">Հաճախ տրվող հարցեր</a></li>
              <li><a href="#" className="hover:underline">Հայտարարություններ</a></li>
              <li><a href="#" className="hover:underline">Dibrary</a></li>
              <li><a href="#" className="hover:underline">Բուկլետներ</a></li>
              <li><a href="#" className="hover:underline">Հետադարձ կապ</a></li>
              <li><a href="#" className="hover:underline">Կայքի քարտեզ</a></li>
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

export default Arjetxter;