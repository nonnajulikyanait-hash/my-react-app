import React, { useState } from 'react';

const loansData = [
  {
    id: 1,
    image: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg",
    title: "Անգրավ սպառողական վարկ",
    category: "Angrav",
    description: "Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ․ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։",
    details: [
      { label: "Գումար", value: "մինչև 10 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 60 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 19%-ից" }
    ]
  },
  {
    id: 2,
    image: "https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg",
    title: "Ավտոմեքենայի ձեռքբերման նպատակով վարկ",
    category: "Avto",
    description: "Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։",
    details: [
      { label: "Գումար", value: "մինչև 50 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 84 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 13%-ից" },
      { label: "Կանխավճար", value: "սկսած 10%-ից" }
    ]
  },
  {
    id: 3,
    image: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg",
    title: "Գույքի գրավով ապահովված վարկ",
    category: "Gravov",
    description: "Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։",
    details: [
      { label: "Գումար", value: "մինչև 150 մլն. ֏" },
      { label: "Վարկի մարման ժամկետը (անշարժ գույք)", value: "24-180 ամիս" },
      { label: "Վարկի մարման ժամկետը (շարժական գույք)", value: "60 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 14%-ից" }
    ]
  },
  {
    id: 4,
    image: "https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png",
    title: "Արևային կայանների ձեռք բերման վարկ EvocaPOWER",
    category: "Online",
    description: "Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից։ EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության։",
    details: [
      { label: "Գումար", value: "Մինչև 5 մլն. ֏" },
      { label: "Ժամկետ", value: "Մինչև 60 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 0%-ից" }
    ]
  },
  {
    id: 5,
    image: "https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg",
    title: "Ոսկու գրավով (լոմբարդային) վարկ",
    category: "Gravov",
    description: "Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։",
    details: [
      { label: "Գումար", value: "մինչև 50 մլն. ֏" },
      { label: "Ժամկետ", value: "3-60 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 15.5%-ից" },
      { label: "Վարկ / գրավ հարաբերակցություն", value: "մինչև 150%" }
    ]
  },
  {
    id: 6,
    image: "https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg",
    title: "Տեղում Ապառիկ",
    category: "Aparik",
    description: "Ցանկանո՞ւմ ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից։ Օգտվիր Evoca-ի տեղում ապառիկից։",
    details: [
      { label: "Գումար", value: "մինչև 5 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 60 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 0%-ից" }
    ]
  },
  {
    id: 7,
    image: "https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg",
    title: "Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ",
    category: "Angrav",
    description: "Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։",
    details: []
  },
  {
    id: 8,
    image: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg",
    title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով",
    category: "Hypothec",
    description: "Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով։",
    details: [
      { label: "Գումար", value: "մինչև 80 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 240 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 13.2%" }
    ]
  },
  {
    id: 9,
    image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png",
    title: "Action",
    category: "Online",
    description: "Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի։",
    details: [
      { label: "Սահմանաչափ", value: "մինչև 10 մլն ֏" },
      { label: "Մարման ժամկետ", value: "մինչև 60 ամիս" },
      { label: "Տարեկան անվանական տոկոսադրույք", value: "սկսած 18%-ից" }
    ]
  },
  {
    id: 10,
    image: "https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png",
    title: "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին",
    category: "Hypothec",
    description: "Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:",
    details: [
      { label: "Գումար", value: "մինչև 55 մլն ֏" },
      { label: "Մարման ժամկետ", value: "մինչև 120 ամիս" },
      { label: "Տոկոսադրույք", value: "13%" }
    ]
  },
  {
    id: 11,
    image: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg",
    title: "Հողամասի ձեռքբերման վարկ",
    category: "Hypothec",
    description: "Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դու արդեն գտել ես այն։",
    details: [
      { label: "Գումար", value: "մինչև 80 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 240 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 14%-ից" }
    ]
  },
  {
    id: 12,
    image: "https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png",
    title: "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով",
    category: "Hypothec",
    description: "Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից։",
    details: [
      { label: "Գումար", value: "մինչև 5 մլն. ֏" },
      { label: "Ժամկետ", value: "60 ամիս" },
      { label: "Տոկոսադրույք", value: "17%" }
    ]
  },
  {
    id: 13,
    image: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png",
    title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ",
    category: "Avto",
    description: "Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:",
    details: [
      { label: "Գումար", value: "Մինչև 50 մլն ֏" },
      { label: "Ժամկետ", value: "Մինչև 60 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 14%-ից" }
    ]
  },
  {
    id: 14,
    image: "https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png",
    title: "Վճարային քարտով օվերդրաֆտ (վարկային քարտ)",
    category: "Online",
    description: "Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:",
    details: [
      { label: "Սահմանաչափ", value: "մինչև 10 մլն ֏" },
      { label: "Մարման ժամկետ", value: "36 ամիս" },
      { label: "Տարեկան անվանական տոկոսադրույք", value: "սկսած 16%-ից" }
    ]
  },
  {
    id: 15,
    image: "https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png",
    title: "Անհատական վարկ «Ներդրումային»",
    category: "Gravov",
    description: "Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։",
    details: [
      { label: "Գումար", value: "մինչև 350 մլն ֏" },
      { label: "Մարման ժամկետ", value: "մինչև 240 ամիս" },
      { label: "Տոկոսադրույք", value: "15%" }
    ]
  },
  {
    id: 16,
    image: "https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg",
    title: "Ավտոկայանատեղիի ձեռքբերման վարկ",
    category: "Avto",
    description: "Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:",
    details: [
      { label: "Գումար", value: "մինչև 8 մլն ֏" },
      { label: "Մարման ժամկետ", value: "մինչև 60 ամիս" },
      { label: "Տոկոսադրույք", value: "16%" }
    ]
  },
  {
    id: 17,
    image: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png",
    title: "Հեծանիվի ձեռքբերման վարկ",
    category: "Aparik",
    description: "Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ։",
    details: [
      { label: "Գումար", value: "Մինչև 300,000 ֏" },
      { label: "Ժամկետ", value: "Մինչև 36 ամիս" },
      { label: "Տոկոսադրույք", value: "Սկսած 16%-ից" },
      { label: "Պետության կողմից սուբսիդավորվող տոկոսադրույք", value: "16%" }
    ]
  },
  {
    id: 18,
    image: "https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png",
    title: "Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ",
    category: "Hypothec",
    description: "Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։",
    details: [
      { label: "Գումար", value: "մինչև 80 մլն. ֏ (Համարժեք արտարժույթ)" },
      { label: "Ժամկետ", value: "մինչև 180 ամիս" },
      { label: "Ֆիքսված տոկոսադրույքով", value: "սկսած 8.2%-ից" },
      { label: "Լողացող տոկոսադրույքով", value: "սկսած 7.7%-ից" }
    ]
  },
  {
    id: 19,
    image: "https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png",
    title: "Վերանորոգման վարկ EvocaHOME",
    category: "Hypothec",
    description: "Ցանկանո՞ւմ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք։ Evoca-ի կողմից առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը՝ ամենահարմար պայմաններով։",
    details: [
      { label: "Գումար", value: "մինչև 10 մլն ֏" },
      { label: "Մարման ժամկետ", value: "մինչև 60 ամիս" },
      { label: "Տոկոսադրույք", value: "16%" }
    ]
  },
  {
    id: 20,
    image: "https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg",
    title: "Դրամական միջոցների գրավով ապահովված անհատական վարկ",
    category: "Gravov",
    description: "Ստացիր վարկ՝ գրավադրելով քո ավանդը կամ պարտատոմսը՝ արագ, հեշտ և առանց ավելորդ ձևակերպումների։",
    details: [
      { label: "Ավանդի գումարի սահմանաչափ", value: "մինչև 95%" },
      { label: "Պարտատոմսի գումարի սահմանաչափ", value: "մինչև 80%" }
    ]
  },
  {
    id: 21,
    image: "https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg",
    title: "Առևտրային հիփոթեքային վարկեր",
    category: "Hypothec",
    description: "Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարա՞ր չեն, եկե՛ք Evocabank։",
    details: [
      { label: "Գումար", value: "մինչև 120 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 240 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 7.2%-ից" }
    ]
  },
  {
    id: 22,
    image: "https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg",
    title: "ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր",
    category: "Hypothec",
    description: "Evocabank-ն առաջարկում է Ազգային հիփոթեքային ընկերության ծրագրի շրջանակներում տրամադրվող բնակարանային հիփոթեքային վարկեր։",
    details: [
      { label: "Գումար", value: "մինչև 45 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 240 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 12%-ից" }
    ]
  },
  {
    id: 23,
    image: "https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png",
    title: "ԱՀԸ-ի ծրագրով կառուցապատման վարկեր",
    category: "Hypothec",
    description: "Կատարիր ներդրում քո բնակարանի էներգաարդյունավետ կառուցապատման մեջ և ստացիր հնարավորություն վճարել ավելի քիչ ծախսված էլեկտրաէներգիայի և գազի համար:",
    details: [
      { label: "Գումար", value: "մինչև 45 մլն. ֏" },
      { label: "Վարկի մարման ժամկետ", value: "առավելագույնը 240 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 12.5%" }
    ]
  },
  {
    id: 24,
    image: "https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg",
    title: "ԱՀԸ-ի ծրագրով վերանորոգման վարկեր",
    category: "Hypothec",
    description: "Կազմակերպիր քո բնակարանի էներգաարդյունավետ վերանորոգումն Evocabank-ի հետ։",
    details: [
      { label: "Գումար", value: "մինչև 15 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 84 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 12.5%-ից" }
    ]
  },
  {
    id: 25,
    image: "https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg",
    title: "Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»",
    category: "Hypothec",
    description: "Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ։ Մեզ հետ բնակարան գնելը հեշտ է, գործընթացն էլ՝ պարզեցված:",
    details: [
      { label: "Գումար", value: "մինչև 27 մլն. ֏" },
      { label: "Վարկի մարման ժամկետը", value: "մինչև 180 ամիս" },
      { label: "Սուբսիդավորվող տոկոս", value: "2-ից - 4%" },
      { label: "Տոկոսադրույք", value: "6.9-ից - 7.9%" }
    ]
  },
  {
    id: 26,
    image: "https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg",
    title: "Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ",
    category: "Online",
    description: "Ստացե՛ք օվերդրաֆտ Evocabank-ից Visa միջազգային վճարային համակարգի ամենաբարձր դասի Visa Infinite քարտով և կունենաք բանալի` դեպի արտոնությունների մեծ աշխարհ:",
    details: [
      { label: "Գումար", value: "մինչև 10 մլն. ֏" },
      { label: "Ժամկետ", value: "12-36 ամիս" },
      { label: "Տոկոսադրույք", value: "15%" },
      { label: "Արտոնյալ ժամանակահատված", value: "Մինչև 45 օր" }
    ]
  },
  {
    id: 27,
    image: "https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png",
    title: "Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին",
    category: "Hypothec",
    description: "Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով տեղահանված ընտանիքներին:",
    details: [
      { label: "Գումար", value: "մինչև 45 մլն ֏" },
      { label: "Վարկի մարման ժամկետ", value: "մինչև 120 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 10%-ից" }
    ]
  },
  {
    id: 28,
    image: "https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png",
    title: "Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին",
    category: "Hypothec",
    description: "Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանային կամ բնակելի տան վերանորոգման համար։",
    details: [
      { label: "Գումար", value: "մինչև 10 մլն ֏" },
      { label: "Վարկի մարման ժամկետ", value: "մինչև 60 ամիս" },
      { label: "Տոկոսադրույք", value: "13%" }
    ]
  },
  {
    id: 29,
    image: "https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg",
    title: "«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ",
    category: "Angrav",
    description: "Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի Ձեր փոխարեն։",
    details: [
      { label: "Գումար", value: "մինչև 4 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 120 ամիս" },
      { label: "Տոկոսադրույք", value: "9%" },
      { label: "Սուբսիդավորվող տոկոս", value: "2-ից - 3%" }
    ]
  },
  {
    id: 30,
    image: "https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png",
    title: "Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր",
    category: "Hypothec",
    description: "Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր ՀՀ սահմանամերձ համայնքների բնակիչներին:",
    details: [
      { label: "Գումար", value: "մինչև 21 մլն ֏" },
      { label: "Վարկի մարման ժամկետ", value: "մինչև 120 ամիս" },
      { label: "Տոկոսադրույք", value: "13%" }
    ]
  },
  {
    id: 31,
    image: "https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png",
    title: "Evolution",
    category: "Angrav",
    description: "Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի քո փոխարեն։",
    details: [
      { label: "Գումար", value: "մինչև 1 մլն. ֏" },
      { label: "Ժամկետ", value: "մինչև 18 ամիս" },
      { label: "Տոկոսադրույք", value: "սկսած 18%-ից" }
    ]
  },
  {
    id: 32,
    image: "https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png",
    title: "Հիփոթեքային վարկեր Զինծառայողներին",
    category: "Hypothec",
    description: "Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում։",
    details: [
      { label: "Սահմանաչափ", value: "մինչև 25.65 մլն ֏" },
      { label: "Մարման ժամկետ", value: "120-240 ամիս" },
      { label: "Տարեկան անվանական տոկոսադրույք", value: "11-ից - 12.75%" },
      { label: "Սուբսիդավորվող տոկոսադրույք", value: "5%" }
    ]
  }
];

export default function Varker({ loansData = [] }) {
  // 1. Սահմանում ենք dataToUse-ը, որպեսզի ReferenceError չլինի
  const dataToUse = loansData;

  const [activeSubTab, setActiveSubTab] = useState('teghekatvutyun');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterButtons = [
    { id: 'all', label: 'Բոլորը' },
    { id: 'Gravov', label: 'Գրավով ապահովված սպառողական վարկեր' },
    { id: 'Angrav', label: 'Անգրավ սպառողական վարկեր' },
    { id: 'Hypothec', label: 'Հիփոթեքային վարկեր' },
    { id: 'Avto', label: 'Ավտոմեքենաների ձեռքբերման ֆինանսավորում' },
    { id: 'Aparik', label: 'Ապառիկ' },
    { id: 'Online', label: 'Օնլայն վարկեր' }
  ];

  const filteredLoans = selectedFilter === 'all' 
    ? dataToUse 
    : dataToUse.filter(loan => loan.category === selectedFilter);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Վերին մանուշակագույն ենթամենյու */}
        <div className="bg-[#6400dc] text-white py-4 px-6 lg:px-12 flex space-x-8 text-sm font-medium">
          <button 
            onClick={() => setActiveSubTab('varker')}
            className={`cursor-pointer pb-1 border-b-2 transition-colors ${activeSubTab === 'varker' ? 'border-white font-bold' : 'border-transparent text-gray-200 hover:text-white'}`}
          >
            Վարկեր
          </button>
          <button 
            onClick={() => setActiveSubTab('patmutyun')}
            className={`cursor-pointer pb-1 border-b-2 transition-colors ${activeSubTab === 'patmutyun' ? 'border-white font-bold' : 'border-transparent text-gray-200 hover:text-white'}`}
          >
            Վարկային պատմություն և սքոր
          </button>
          <button 
            onClick={() => setActiveSubTab('teghekatvutyun')}
            className={`cursor-pointer pb-1 border-b-2 transition-colors ${activeSubTab === 'teghekatvutyun' ? 'border-white font-bold' : 'border-transparent text-gray-200 hover:text-white'}`}
          >
            Կարևոր տեղեկատվություն
          </button>
        </div>

        {/* Էջի հիմնական բովանդակություն */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {activeSubTab === 'varker' && (
            <>
              <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
                <span>🏠</span>
                <span>›</span>
                <span>Անհատ</span>
                <span>›</span>
                <span>Վարկեր</span>
                <span>›</span>
                <span className="text-gray-800 font-medium">Վարկեր</span>
              </div>

              <h1 className="text-4xl font-extrabold text-neutral-900 mb-8">Վարկեր</h1>

              {/* Զտման կոճակներ */}
              <div className="flex flex-wrap gap-3 mb-10">
                {filterButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setSelectedFilter(btn.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer shadow-sm ${
                      selectedFilter === btn.id
                        ? 'bg-[#6400dc] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Վարկերի ցանկ */}
              <div className="space-y-8">
                {filteredLoans.length > 0 ? (
                  filteredLoans.map((loan) => (
                    <div 
                      key={loan.id} 
                      className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-md transition-shadow"
                    >
                      <div className="w-full md:w-5/12 h-64 rounded-2xl overflow-hidden bg-purple-50 flex items-center justify-center relative">
                        <img src={loan.image} alt={loan.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-full md:w-7/12 flex flex-col justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-neutral-900 mb-3">{loan.title}</h2>
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">{loan.description}</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 border-t border-b border-gray-100 py-4">
                          {/* 2. Ավելացվել է անվտանգ ստուգում (loan.details?), որպեսզի դատարկ զանգվածների դեպքում սխալ չտա */}
                          {loan.details && loan.details.map((detail, idx) => (
                            <div key={idx}>
                              <p className="text-[#6400dc] font-bold text-lg sm:text-xl">{detail.value}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{detail.label}</p>
                            </div>
                          ))}
                        </div>
                        <div>
                          <button className="inline-flex items-center space-x-2 text-[#6400dc] bg-purple-50 hover:bg-purple-100 font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer text-sm">
                            <span>Մանրամասն</span>
                            <span>›</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-10 text-lg">Այս բաժնում վարկեր չեն գտնվել:</p>
                )}
              </div>
            </>
          )}

          {activeSubTab === 'patmutyun' && (
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-8 text-gray-800 leading-relaxed">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-6">Վարկային պատմություն և սքոր</h1>
              
              <div className="bg-purple-50 border-l-4 border-[#6400dc] p-5 rounded-r-2xl">
                <h4 className="font-bold text-[#6400dc] mb-1">Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ</h4>
                <p className="text-sm text-gray-700">Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ վրա:</p>
              </div>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Ինչ է վարկային պատմությունը</h2>
                <p className="text-gray-600">
                  «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ:
                </p>
                <p className="text-gray-600">
                  Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Որոնք են վարկային պատմության ձևավորման աղբյուրները</h2>
                <p className="text-gray-600">
                  Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ (տվյալներ):
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Ինչ է վարկային բյուրոն</h2>
                <p className="text-gray-600">
                  Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն:
                </p>
                <p className="text-gray-600 font-medium">Վարկային բյուրոյի ծառայությունների շնորհիվ յուրաքանչյուր իրավաբանական կամ ֆիզիկական անձ հնարավորություն է ստանում՝</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4 marker:text-[#6400dc]">
                  <li>ժամանակին կատարելով իր ֆինանսական պարտավորությունները՝ կերտել դրական վարկային պատմություն և օգտագործել այն որպես ծանրակշիռ ակտիվ ֆինանսական ծառայություններից արտոնյալ պայմաններով օգտվելու համար,</li>
                  <li>ճիշտ կառավարել սեփական ֆինանսական պարտավորությունները և մշտապես տեղեկացված լինել սեփական ֆինանսական պարտավորությունների կատարման ընդհանուր պատկերից:</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Ինչ է վարկային զեկույցը</h2>
                <p className="text-gray-600">
                  Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած տնտեսվարող կազմակերպությունների նկատմամբ ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն:
                </p>
                <p className="text-gray-600">
                  Զեկույցը կազմված է ԱՔՌԱ գործընկեր կազմակերպություններից ստացված տվյալների հիման վրա և արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները:
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Որքան ժամանակ է պահպանվում վարկային պատմությունը</h2>
                <p className="text-gray-600">
                  Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն»:
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Ինչպես բարելավել վարկային պատմությունը</h2>
                <p className="text-gray-600">
                  Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Որր դիմել, եթե վարկային պատմությունը սխալ է</h2>
                <p className="text-gray-600">
                  Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն կարող է այդ մասին տեղեկացնել վարկային բյուրոյին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին՝ գրավոր դիմումի կամ «Իմ ԱՔՌԱ» առցանց անձնական գրասենյակի միջոցով:
                </p>
              </section>
            </div>
          )}

          {activeSubTab === 'teghekatvutyun' && (
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-8 text-gray-800 leading-relaxed">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-6">Կարևոր տեղեկատվություն</h1>

              {/* Ընդհանուր դրույթներ */}
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Տոկոսագումարների հաշվարկ:</strong> Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:
                </p>
                <p>
                  <strong>Վաղաժամկետ մարում:</strong> Հիփոթեքային վարկերի դեպքում Դուք իրավունք ունեք ժամկետից շուտ իրականացնել վարկի մասնակի կամ ամբողջական մարում, որի դեպքում Բանկի կողմից տույժեր չեն կիրառվում:
                </p>
                <p>
                  <strong>Ժամկետանց պարտավորություններ:</strong> Վարկի մարման ժամանակացույցը խախտելու դեպքում վարկի ժամկետանց մասի վրա կարող է կիրառվել ՀՀ կենտրոնական բանկի կողմից սահմանված բանկային տոկոսի հաշվարկային դրույքը, որը ամրագրվում է վարկային պայմանագրով։
                </p>
                <p>
                  <strong>Ծանոթացում պայմանագրին:</strong> Դուք իրավունք ունեք նախքան վարկային պայմանագիր կնքելու ծանոթանալ պայմանագրի նախագծի հետ։
                </p>
              </div>

              {/* Էական պայմանների անհատական թերթիկ */}
              <div className="bg-purple-50 border-l-4 border-[#6400dc] p-5 rounded-r-2xl">
                <h4 className="font-bold text-[#6400dc] mb-1">ԷԱԿԱՆ ՊԱՅՄԱՆՆԵՐԻ ԱՆՀԱՏԱԿԱՆ ԹԵՐԹԻԿ</h4>
                <p className="text-sm text-gray-700">ՎԱՐԿ ՍՏԱՆԱԼՈՒ ՀԱՄԱՐ ԴԻՄԵԼԻՍ ՎԱՐԿԱՏՈՒՆ ՁԵԶ ԿՏՐԱՄԱԴՐԻ ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿԻ ԷԱԿԱՆ ՊԱՅՄԱՆՆԵՐԻ ԱՆՀԱՏԱԿԱՆ ԹԵՐԹԻԿ, ՈՐՈՒՄ ԿՆԵՐԿԱՅԱՑՎԵՆ ՁԵԶ ՏՐԱՄԱԴՐՎԵԼԻՔ ՎԱՐԿԻ ԱՆՀԱՏԱԿԱՆ ՊԱՅՄԱՆՆԵՐԸ:</p>
              </div>

              {/* Տոկոսադրույքներ և արտարժույթ */}
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Տոկոսադրույքների տեսակները:</strong> Վարկի տոկոսագումարները հաշվարկվում են <strong>ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ</strong> հիման վրա, իսկ <strong>ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԸ</strong> ցույց է տալիս, թե որքան կարժենա վարկը Ձեզ համար տոկոսագումարները և այլ վճարները սահմանված ժամկետներում և չափերով կատարելու դեպքում:
                </p>
                <p>
                  <strong>Արտարժույթի ռիսկեր:</strong> Արտարժույթով տրամադրվող վարկերի գծով արտարժույթի փոխարժեքի փոփոխությունները կարող են ազդեցություն ունենալ վարկի մարումների վրա:
                </p>
                <p>
                  <strong>Քաղվածքների տրամադրում:</strong> Բանկը Ձեզ, ՀՀ օրենսդրությամբ սահմանված կարգով և դեպքերում Ձեր նախընտրած հաղորդակցման եղանակով 30-օրյա պարբերականությամբ կտրամադրի վարկի վերաբերյալ քաղվածք:
                </p>
              </div>

              {/* Զգուշացումներ և ծանուցումներ */}
              <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-2xl space-y-3">
                <h4 className="font-bold text-red-700">ԶԳՈՒՇԱՑՈՒՄ</h4>
                <p className="text-sm text-gray-700">
                  ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՄԱՆ ԳՐԱՖԻԿՈՎ ՍԱՀՄԱՆՎԱԾ ԺԱՄԿԵՏՆԵՐՈՒՄ ՁԵՐ ԿՈՂՄԻՑ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆԸ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԿԱՄ ԹԵՐԻ ԿԱՏԱՐԵԼՈՒ ԴԵՊՔԵՐՈՒՄ ԲԱՆԿԸ 3 ԱՇԽԱՏԱՆՔԱՅԻՆ ՕՐՎԱ ԸՆԹԱՑՔՈՒՄ ՁԵՐ ՏՎՅԱԼՆԵՐԸ ՈՒՂԱՐԿՈՒՄ Է ՎԱՐԿԱՅԻՆ ԲՅՈՒՐՈ:
                </p>
                <p className="text-sm text-gray-700 pt-2 border-t border-red-200">
                  <strong>ՏԵՂԵԿԱՑՈՒՄ:</strong> Վարկի ստացման դիմում-հայտերի քանակը (անկախ հաստատումից կամ մերժումից) բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:
                </p>
              </div>

              {/* Գրավի և գույքի վտանգներ */}
              <div className="space-y-3 text-gray-600">
                <p><strong>Անշարժ գույքից զրկվելու վտանգ:</strong> Վարկային պայմանագրով Ձեր կողմից ստանձնած պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում դուք կարող եք զրկվել անշարժ գույքի նկատմամբ Ձեր իրավունքներից:</p>
                <p><strong>Գրավի բռնագանձում:</strong> ՏՈԿՈՍԱԳՈՒՄԱՐՆԵՐԻ և ՎԱՐԿԻ ԳՈՒՄԱՐԻ ՄԱՐՈՒՄՆԵՐԸ ԺԱՄԱՆԱԿԻՆ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ, ԳՐԱՎԱԴՐՎԱԾ ԳՈՒՅՔԸ ԿԱՐՈՂ Է ՕՐԵՆՔՈՎ ՍԱՀՄԱՆՎԱՐԿԱՅԻՆ ԿԱՐԳՈՎ ԲՌՆԱԳԱՆՁՎԵԼ:</p>
                <p><strong>Այլ գույքի հաշվին մարում:</strong> Եթե գրավի արժեքը չի բավարարում պարտավորությունները ծածկելու համար, Բանկը կարող է կատարել մարումներ Ձեր այլ գույքի հաշվին:</p>
              </div>

              {/* Լողացող տոկոսադրույք */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-neutral-900">Լողացող տոկոսադրույքի հաշվարկման կարգ</h2>
                <p className="text-gray-600">
                  Լողացող տոկոսադրույքի կիրառման դեպքում անվանական տոկոսադրույքը հաշվարկվում է հետևյալ բանաձևով՝ <strong>ՏԼ = ՏՀ + ՏՓ</strong>, որտեղ <strong>ՏԼ</strong>-ն Լողացող տոկոսադրույքն է, <strong>ՏՀ</strong>-ն՝ Հաստատուն բաղադրիչը, իսկ <strong>ՏՓ</strong>-ն՝ Փոփոխուն բաղադրիչը:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-purple-50 text-[#6400dc]">
                        <th className="p-3 border border-purple-100">Ամսաթիվ</th>
                        <th className="p-3 border border-purple-100">ՀՀ դրամ</th>
                        <th className="p-3 border border-purple-100">ԱՄՆ դոլար</th>
                        <th className="p-3 border border-purple-100">Եվրո</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr><td className="p-3 border border-gray-100">01/02/2025</td><td className="p-3 border border-gray-100">8.5%</td><td className="p-3 border border-gray-100">1.0%</td><td className="p-3 border border-gray-100">0.0%</td></tr>
                      <tr><td className="p-3 border border-gray-100">01/08/2025</td><td className="p-3 border border-gray-100">8.0%</td><td className="p-3 border border-gray-100">1.0%</td><td className="p-3 border border-gray-100">0.0%</td></tr>
                      <tr><td className="p-3 border border-gray-100">01/02/2026</td><td className="p-3 border border-gray-100">7.5%</td><td className="p-3 border border-gray-100">1.0%</td><td className="p-3 border border-gray-100">0.0%</td></tr>
                      <tr><td className="p-3 border border-gray-100">01/08/2026</td><td className="p-3 border border-gray-100">7%</td><td className="p-3 border border-gray-100">1.0%</td><td className="p-3 border border-gray-100">0.0%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Համագործակցող ապահովագրականներ և գնահատողներ */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-neutral-900">Համագործակցող ընկերություններ</h2>
                <p className="text-gray-600 text-sm">
                  Վարկի ձևակերպման հետ կապված ապահովագրական և գույքի գնահատման ծախսերը կատարվում են գործընկեր կազմակերպությունների հաստատված սակագներով (օրինակ՝ գրավադրվող գույքի գնահատում՝ 10,000 – 150,000 ՀՀ դրամ, գույքի ապահովագրություն՝ վարկի մնացորդի 0.15% – 2.5% չափով):
                </p>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}