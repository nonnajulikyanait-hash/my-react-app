import React, { useState } from 'react';

function EvocaTouch() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const documentItems = [
    {
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      fileUrl: "https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf"
    },
    {
      title: "SWIFT Transfers (20.03.2026)",
      fileUrl: "https://www.evoca.am/files/global_files/1/evocatouch-eng.pdf"
    },
    {
      title: "SWIFT переводы в РФ (20.03.2026)",
      fileUrl: "https://www.evoca.am/files/global_files/1/evocatouch-rus.pdf"
    }
  ];

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-16 space-y-10">
        
        {/* Հացի փշրանքներ (Breadcrumbs) */}
        <div className="text-xs text-gray-400">
          Անհատ  &gt;  <span className="text-gray-600">EvocaTOUCH</span>
        </div>

        {/* Վերնագիր */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
          EvocaTOUCH
        </h1>

        {/* Հիմնական տեքստային բլոկ */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
          <p>
            Շատերին թվում է՝ դժվար ու անիրական է ֆինանսական ոլորտում լինել կրեատիվ, սակայն Evocabank-ին տարիներ շարունակ հաջողվում է գտնել out of box լուծումներ և շուկային ներկայանալ նոր և ժամանակակից պրոդուկտներով։
          </p>
          <p>
            Այդ գաղափարների շարքից է նոր EvocaTOUCH հավելվածը, որն առանձնանում է ժամանակակից թվային լուծումներով և հնարավորություններով։
          </p>
          <p>
            EvocaTOUCH հավելվածն անվտանգ է, հարմար և նախատեսված է անմիջապես smartphone-ից մի շարք բանկային ծառայություններից օգտվելու համար։ Կարևորելով հավելվածի անվտանգ օգտագործումը՝ Բանկն ապահովում է օգտատերերի մասին ինֆորմացիայի և կատարած գործարքների պաշտպանությունը՝ օգտագործելով գաղտնագրման վերջին տեխնոլոգիաները:
          </p>
          <p>
            EvocaTOUCH հավելվածը կառուցված է այս պահին հայտնի ամենավերջին մոբայլ տեխնոլոգիաներով:
          </p>
          <p>
            Հավելվածը գրվել է User Interface և User Experience նորագույն սկզբունքներով, ունի գունային 2 appearance` Dark և Light։ Այն ավելի նման է facebook-ի կամ instagram-ի feed-ի՝ ամենակարևոր ու շատ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջին են` Քարտեր, Հաշիվներ, Վարկեր, Ավանդեր: Օգտատերերը հնարավորություն ունեն ստեղծել Template-ներ, որի շնորհիվ բանկային փոխանցումները կատարվում են ավելի արագ ու հեշտ։ Հնարավոր է ծանոթանալ Բանկի նորություններին ու ամենաակտուալ պրոդուկտներին՝ թերթվող story-ների միջոցով։
          </p>
          <p>
            EvocaTOUCH հավելվածը 24/7 հասանելի է իր բոլոր օգտատերերին աշխարհի ցանկացած կետից, ցանկացած ժամի։
          </p>

          <p className="font-medium text-neutral-900 pt-2">
            Նոր հավելվածն առաջարկում է գործառույթների լայն շրջանակ, որը ներառում է ամենօրյա բանկային գործընթացները՝ վերացնելով ֆիզիկական մասնաճյուղ այցելելու անհրաժեշտությունը: Առանց գրանցման և սպասարկման վճարի՝ օգտատերերը կարող են․
          </p>

          {/* Ցանկ */}
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Բացել բանկային հաշիվներ,</li>
            <li>Պատվիրել քարտ կամ բացել թվային քարտ վայրկյանների ընթացքում,</li>
            <li>Ստանալ վարկ,</li>
            <li>Ներդնել ավանդ,</li>
            <li>Կատարել փոխանցումներ հաշիվներին և քարտերին, ինչպես հայաստանյան, այնպես էլ արտերկրյա բանկերին,</li>
            <li>Կատարել բանկային փոխանցումներ և վճարումներ,</li>
            <li>Կատարել կոմունալ վճարումներ,</li>
            <li>Առցանց ստանալ ավտոմեքենաների տուգանքները և իրականացնել վճարումներ մեկ հպումով,</li>
            <li>Կատարել փոխանցումներ կոնտակտային տվյալներով,</li>
            <li>24/7 ուղղել հարցեր նամակի միջոցով:</li>
          </ul>

          <p>
            Հավելվածի հիմնական ուժեղ կողմերից մեկն անհատականացված բանկային ծառայության տրամադրումն է: Հաճախորդակենտրոն մոտեցման շնորհիվ՝ Բանկը հնարավորություն է տալիս օգտատերերին հավելվածը հարմարեցնել իրենց նախասիրություններին և կարիքներին:
          </p>
          <p>
            Հավելվածից օգտվելու հարմարավետությունն ու անվտանգությունը բարձրացնելու համար օգտատերը կարող է ակտիվացնել կենսաչափական նույնականացումը՝ օգտագործելով մատնահետքի կամ դեմքի ճանաչման համակարգերը: Բացի այդ, նոր հավելվածն առաջարկում է արագ և հեշտ ինտեգրում այլ ֆինանսական գործիքների հետ, ինչը թույլ է տալիս օգտատերերին կառավարել իրենց ֆինանսները մեկ հավելվածի միջոցով:
          </p>
          <p>
            EvocaTOUCH-ի միջոցով օգտատերերը կարող են 24/7 հասանելիություն ունենալ իրենց ֆինանսներին, վերահսկել իրենց դրամական միջոցները, արագ ու անվտանգ գործարքներ կատարել աշխարհի ցանկացած կետից, ցանկացած ժամի:
          </p>
          <p className="font-semibold text-purple-900 pt-2">
            EvocaTOUCH-ը պարզապես բանկային հավելված չէ․ կարծում ենք, այն ձեզ համար դառնալու է ապրելակերպի մի մաս։
          </p>
        </div>

        {/* Փաստաթղթեր բաժին */}
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-neutral-900">
            Փաստաթղթեր
          </h2>
          <div className="space-y-3">
            {documentItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <a 
                  href={item.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 text-left font-semibold text-purple-900 flex justify-between items-center hover:bg-gray-50 transition-colors block"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-purple-700 text-xl">📄</span>
                    <span>{item.title}</span>
                  </span>
                  <span className="text-purple-700 font-bold">↓</span>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default EvocaTouch;