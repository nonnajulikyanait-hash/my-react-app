import React, { useState } from 'react';

function Poxancumner() {
  const [activeSubTab, setActiveSubTab] = useState('transfers'); // 'transfers' կամ 'systems'
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Փոխանցումներ դրամով",
      content: (
        <div className="space-y-3 text-gray-600 text-sm lg:text-base">
          <p>
            Մեզ մոտ գործող վճարահաշվարկային համակարգն ապահովում է արագ և հուսալի դրամային փոխանցումներ ինչպես մեր համակարգում, այնպես էլ հայաստանյան այլ բանկերի միջև:
          </p>
          <p>
            Դրամով փոխանցումները Հայաստանի տարածքում կատարվում են 1 բանկային օրվա ընթացքում:
          </p>
        </div>
      )
    },
    {
      title: "Միջազգային փոխանցումներ",
      content: (
        <div className="space-y-3 text-gray-600 text-sm lg:text-base">
          <p>
            Մենք SWIFT համակարգի անդամ ենք և ձեր արտարժութային միջազգային փոխանցումներն իրականացնում ենք այս համակարգով: Այն ապահովում է արագ և անվտանգ փոխանցումներ՝ միջազգային բանկային ստանդարտներին համապատասխան:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Փոխանցումը կատարում ենք միայն փոխանցվող գումարի և միջնորդավճարի գումարի փաստացի առկայության դեպքում:</li>
            <li>Արտարժութային միջազգային փոխանցում իրականացնելու համար մեզ եք ներկայացնում սահմանված ձևանմուշի վճարման հանձնարարագիր (անհրաժեշտության դեպքում մեր աշխատակիցները կօգնեն լրացնել այն):</li>
            <li>Արտարժութային միջազգային բանկային փոխանցումները, ըստ մեր սակագների, իրականացվում են OUR (ծախսերը՝ փոխանցողի հաշվին), Guaranted OUR (գումարը ստացողին հասնում է ամբողջական) և BEN (ծախսերը՝ ստացողի հաշվին) տարբերակներով:</li>
            <li>Արտարժութային միջազգային փոխանցումները, որպես կանոն, տևում են 1-3 բանկային օր: Փոխանցումների կատարման տևողությունը կախված է այն բանկերի թվից, որոնց միջոցով կատարվում է փոխանցումը:</li>
          </ul>
        </div>
      )
    },
    {
      title: "Վճարային համակարգեր",
      content: (
        <div className="space-y-3 text-gray-600 text-sm lg:text-base">
          <p>
            Դրամական փոխանցումների վճարային համակարգերը հնարավորություն են տալիս շատ արագ՝ առանց բանկային հաշվի բացման, պարզեցված ընթացակարգով, ոչ առևտրային բնույթի փոխանցումներ կատարել ֆիզիկական անձանց միջև՝ դեպի աշխարհի տարբեր երկրներ:
          </p>
          <p>
            Մեր կողմից սպասարկվող վճարային համակարգերին կարող եք ծանոթանալ այստեղ:
          </p>
        </div>
      )
    },
    {
      title: "Փոխանցման պայմանների փոփոխում կամ չեղյալացում",
      content: (
        <div className="space-y-3 text-gray-600 text-sm lg:text-base">
          <p>
            Փոխանցումների վավերապայմանների փոփոխումը կամ փոխանցման չեղյալացումը կատարում ենք փոխանցումը նախաձեռնող անձի գրավոր դիմումի հիման վրա՝ նրանից գանձելով միջնորդավճարներ (սակագներին կարող եք ծանոթանալ Բանկային փոխանցումներ բաժնում):
          </p>
          <p>
            Փոխանցման մեջ առկա սխալների ուղղումը, ինչպես նաև փոխանցման չեղյալացումն իրականացում ենք փոխանցող և ստացող բանկերի հնարավորության սահմաններում և ժամկետներում, սովորաբար դա կարող է տևել 2-5 բանկային օր:
          </p>
          <p>
            Եթե փոխանցումը նախաձեռնող անձը ներկայացրել է փոխանցման չեղյալացման հայտ, սակայն ըստ հարցման՝ միջոցներն արդեն հաշվեգրված են, ապա մենք չենք կարող պատասխանատվություն կրել գումարների վերադարձի համար:
          </p>
          <p>
            Փոխանցված միջոցները ստացողին չհասնելու դեպքում` Փոխանցված միջոցները թղթակից բանկի կողմից վերադարձվում են փոխանցում կատարած բանկին: Դրամական միջոցների վերադարձի ժամկետները կախված են թղթակից բանկերում գործող ընթացակարգային ժամկետներից և այն բանկերի թվից, որոնց միջոցով կատարվել է փոխանցումը:
          </p>
          <p>
            Վերադարձված դրամական միջոցները հաշվեգրում ենք փոխանցում իրականացրած անձի բանկային հաշվին, իսկ առանց բանկային հաշվի բացման կատարված փոխանցման դեպքում՝ փոխանցման հանձնարարագրում նշված անձնագրային հիմքերով վերադարձնում ենք փոխանցում իրականացրած անձին:
          </p>
          <p>
            Վճարային համակարգերով իրականացված փոխանցումների (ֆիզանձանց միջև ոչ առևտրային բնույթի արագ դրամական փոխանցումներ) վավերապայմանների փոփոխման/սխալների ուղղման, կատարված փոխանցման չեղյալացման, ինչպես նաև փոխանցում ստացողի կողմից գումարի չհայտնաբերման պարագայում դրամական միջոցների հետ վերադարձի համար գործում են տվյալ համակարգերի ներքին ընթացակարգերով սահմանված պայմանները և ժամկետները:
          </p>
        </div>
      )
    }
  ];

  const paymentSystems = [
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png",
      description: "MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակը Ամերիկայի և Հայաստանի միջև ապահով ու պաշտպանված գործարքների ապահովումն է՝ հիմնված տասնամյակների փորձի վրա: Դրամական փոխանցումները կազմում են MoneyTun-ի կողմից մատուցվող ծառայությունների զգալի մասը:",
      phoneTitle: "MoneyTun Հաճախորդների սպասարկման հեռախոսահամար՝",
      phone: "+374 10 27 72 85",
      scheduleTitle: "Աշխատանքային գրաֆիկ՝",
      schedule: ["Երկուշաբթի-ուրբաթ 10:00-17:30", "Շաբաթ 10:00-14:00", "Կիրակի 10:00-13:00"]
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png",
      description: "Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ RIA համակարգի սահմանած սակագների:",
      phoneTitle: "Ria Հաճախորդների սպասարկման հեռախոսահամար Հայաստանի համար՝",
      phone: "+374 94 23 59 00",
      scheduleTitle: "Աշխատանքային գրաֆիկ՝",
      schedule: ["երկուշաբթի-ուրբաթ, 09:00-18:00 (Երևանի ժամանակով)"],
      languagesTitle: "Հաճախորդների աջակցության լեզուներ՝",
      languages: "ռուսերեն, անգլերեն"
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png",
      description: "UBPay – ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար: Համակարգի միջոցով կարող եք իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ:",
      phoneTitle: "UBPay Հաճախորդների սպասարկման հեռախոսահամար`",
      phone: "+374 43 00 49 35"
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png",
      description: "Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, եվրոպական երկրներ և այլն)։ Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ IntelExpress-ի սահմանած սակագների:",
      phoneTitle: "INTELEXPRESS Հաճախորդների սպասարկման հեռախոսահամար՝",
      phone: "+995 32 2 49 25 25"
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png",
      description: "«ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակը ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է։ Համակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դոլարով և, ինչպես նաև եվրոյով։"
    },
    {
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png",
      description: "Գործում է 170 երկրի ավելի քան 125,000 կետերում: Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար: Միջնորդավճարը գանձվում է ըստ MoneyGram-ի սահմանած սանդղակի:",
      phoneTitle: "MoneyGram Հաճախորդների սպասարկման հեռախոսահամար`",
      phone: "1-800-926-9400"
    }
  ];

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen flex flex-col justify-between">
      <div>
        {/* Մանուշակագույն Ենթամենյու (Subheader) */}
        <div className="w-full bg-purple-800 text-white px-6 lg:px-10 shadow-inner">
          <div className="flex flex-wrap space-x-6 lg:space-x-10 text-sm font-medium">
            <button 
              onClick={() => setActiveSubTab('transfers')}
              className={`py-3 cursor-pointer transition-colors border-b-2 ${
                activeSubTab === 'transfers' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Դրամական փոխանցումներ
            </button>
            <button 
              onClick={() => setActiveSubTab('systems')}
              className={`py-3 cursor-pointer transition-colors border-b-2 ${
                activeSubTab === 'systems' ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'
              }`}
            >
              Վճարային համակարգեր
            </button>
          </div>
        </div>

        {/* Հիմնական բովանդակություն ըստ activeSubTab-ի */}
        {activeSubTab === 'transfers' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-12">
            
            {/* Հացհատիկ (Breadcrumbs) */}
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Փոխանցումներ  &gt;  <span className="text-gray-600">Դրամական փոխանցումներ</span>
            </div>

            {/* Վերնագիր և Նկար (Flex շարվածք) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Դրամական փոխանցումներ
                </h1>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով: Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող համակարգերով:
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
                  alt="Դրամական փոխանցումներ" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Ընդհանուր դրույթներ */}
            <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100 space-y-6 text-sm lg:text-base text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-neutral-900">Ընդհանուր դրույթներ</h2>
              
              <p>
                Ձեր բանկային փոխանցումներն իրականացնում ենք՝ ղեկավարվելով «Բանկերի և բանկային գործունեության մասին» ՀՀ օրենքով, ՀՀ Կենտրոնական բանկի իրավական ակտերով, ՀՀ այլ իրավական ակտերով, թղթակից բանկերի հետ կնքված պայմանագրերով և սպասարկման սահմանված պայմաններով:
              </p>

              <p>
                Ձեր փոխանցումները կատարում ենք վճարման հանձնարարագրերի հիման վրա (կախված գումարի չափից, փոխանցման բնույթից և նպատակից` կարող են պահանջվել նաև այլ փաստթղթեր):
              </p>

              <p>
                Յուրաքանչյուր աշխատանքային օրվա ընթացքում՝ մինչև ժամը 15:30 ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը, իսկ ժամը 15:30-ից հետո ներկայացված վճարման հանձնարարագրերը` հաջորդ բանկային օրը: Մինչև ժամը 16:30 ներկայացված դրամով փոխանցումները (պետական և տեղական բյուջեի վճարներ, կոմունալ կամ սոցիալական այլ վճարներ) կատարման ենք ընդունում նույն բանկային օրը:
              </p>

              <p>
                Դրամով և արտարժույթով բանկային փոխանցումներ իրականացնելիս ձեզանից գանձում ենք միջնորդավճարներ՝ ըստ մեր դրույքաչափերի և սակագների: Կոմունալ վճարների սպասարկման դիմաց միջնորդավճար չենք գանձում: Միջնորդավճարները գանձվում են ՀՀ դրամով: Արտարժույթի տոկոսային հարաբերակցությամբ սահմանված միջնորդավճարները գանձվում են ՀՀ դրամով՝ հիմք ընդունելով գանձման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ վաճառքի փոխարժեքը:
              </p>

              <p>
                Մենք պարտավոր ենք տրամադրել յուրաքանչյուր փոխանցման կատարումը հավաստող փաստաթուղթ, որտեղ նշված կլինեն փոխանցման գումարը, արժույթը, միջնորդավճարի չափը և այլ մանրամասներ:
              </p>
            </div>

            {/* Երկար նկարով բլոկ (Սպիտակ տեքստով) */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-purple-900 text-white min-h-[260px] flex items-center justify-center text-center p-8">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg" 
                  alt="Background" 
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-xl lg:text-2xl font-extrabold leading-snug">
                  Կարող եք գումարներ փոխանցել ինչպես ձեր հաշվից, այնպես էլ առանց հաշվի բացման:
                </h3>
              </div>
            </div>

            {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Ակորդեոններ) */}
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-neutral-900">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h3>
              <div className="space-y-3">
                {accordionItems.map((item, index) => (
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

        {activeSubTab === 'systems' && (
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-12 space-y-8">
            
            {/* Հացհատիկ (Breadcrumbs) */}
            <div className="text-xs text-gray-400 mb-2">
              Անհատ  &gt;  Փոխանցումներ  &gt;  <span className="text-gray-600">Վճարային համակարգեր</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight mb-8">
              Վճարային համակարգեր
            </h1>

            {/* Քարտերի ցանց (Grid) 6 համակարգերի համար */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paymentSystems.map((sys, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between space-y-4">
                  <div className="h-16 flex items-center justify-center mb-2">
                    <img src={sys.logo} alt="Payment System Logo" className="max-h-full max-w-[150px] object-contain" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    {sys.description}
                  </p>
                  
                  {sys.phone && (
                    <div className="pt-3 border-t border-gray-100 space-y-1">
                      <span className="block text-xs font-bold text-neutral-800">{sys.phoneTitle}</span>
                      <span className="block text-purple-700 font-bold text-sm">{sys.phone}</span>
                    </div>
                  )}

                  {sys.schedule && (
                    <div className="pt-2 space-y-1">
                      <span className="block text-xs font-bold text-neutral-800">{sys.scheduleTitle}</span>
                      {sys.schedule.map((sch, sIdx) => (
                        <span key={sIdx} className="block text-gray-600 text-xs">{sch}</span>
                      ))}
                    </div>
                  )}

                  {sys.languages && (
                    <div className="pt-2 space-y-1">
                      <span className="block text-xs font-bold text-neutral-800">{sys.languagesTitle}</span>
                      <span className="block text-gray-600 text-xs">{sys.languages}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Evoca Online & Mobile բաժին */}
        <EvocaOnlineMobile />
      </div>
    </div>
  );
}

export default Poxancumner;