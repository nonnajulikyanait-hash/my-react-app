import React, { useState } from 'react';

function Arjetxter() {
  const [activeSubTab, setActiveSubTab] = useState('investment'); // 'investment', 'bonds', 'hfc', 'repo', 'invest'
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

  // Helper renderer for bonds prospect/download buttons
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

  // Helper renderer for table creation
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
      title: "ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ",
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
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ:"
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
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.10.2020թ. թիվ 1/562 Ա որոշմամբ:"
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
        "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.10.2020թ. թիվ 1/562 Ա որոշմամբ:"
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

  const newsList = [
    {
      id: 1,
      category: 'Կենսակերպ',
      title: 'Դիլիջան, մենք գալիս ենք',
      date: '11.09.2026',
      img: 'https://www.evoca.am/images-cache/news/1/17891134831451/439x320.png',
    },
    {
      id: 2,
      category: 'Կենսակերպ',
      title: 'Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր',
      date: '03.09.2026',
      img: 'https://www.evoca.am/images-cache/news/1/17884237814941/439x320.png',
    },
    {
      id: 3,
      category: 'Պրոդուկտներ',
      title: 'Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով',
      date: '31.08.2026',
      img: 'https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png',
    },
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

        {/* Հիմնական բովանդակություն ըստ activeSubTab-ի */}
        {activeSubTab === 'investment' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-12">
            {/* Հացհատիկ (Breadcrumbs) */}
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Արժեթղթեր  &gt;  <span className="text-gray-600">Ներդրումային ծառայություններ</span>
            </div>

            {/* Վերնագիր և Նկար */}
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

            {/* Հիմնական տեքստ */}
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

            {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Ակորդեոններ) */}
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

        {activeSubTab === 'bonds' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-12">
            {/* Հացհատիկ (Breadcrumbs) */}
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Արժեթղթեր  &gt;  <span className="text-gray-600">Պարտատոմսեր</span>
            </div>

            {/* Վերնագիր և Նկար */}
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

            {/* Հիմնական տեքստ */}
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

            {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Պարտատոմսեր) */}
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

        {activeSubTab === 'hfc' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-12">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">ՀԿԾ ծառայություններ</h2>
            <p className="text-gray-700">Հաշվետերերի և հսկողության ծառայություններ արժեթղթերի շուկայում:</p>
          </div>
        )}

        {activeSubTab === 'repo' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-12">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">Ռեպո/Հակադարձ Ռեպո գործարքներ</h2>
            <p className="text-gray-700">Իրականացրեք ռեպո և հակադարձ ռեպո գործարքներ շահավետ պայմաններով:</p>
          </div>
        )}

        {activeSubTab === 'invest' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-12">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">EvocaINVEST</h2>
            <p className="text-gray-700">Ներդրումային հարթակ արագ և հարմարավետ առցանց առևտրի համար:</p>
          </div>
        )}

        {/* Վերջին նորությունների բաժին (Ընդհանուր էջի ներքևի մասում) */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-8 pt-8 pb-16 border-t border-gray-200 mt-12">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-neutral-900">Վերջին նորությունները</h2>
            <button className="bg-purple-100 text-[#6400dc] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-purple-200 transition-colors cursor-pointer">
              Բոլոր նորությունները &gt;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsList.map((news) => (
              <div 
                key={news.id}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img 
                    src={news.img} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                      | {news.category}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#6400dc] transition-colors leading-snug">
                      {news.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
                    {news.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arjetxter;