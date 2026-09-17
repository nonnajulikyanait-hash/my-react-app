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

function Varker() {
  const [activeSubTab, setActiveSubTab] = useState('patmutyun'); // Դրված է 'patmutyun', որ ուղղակիորեն տեսնես Ձեր ուղարկած տեքստերը
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
    ? loansData 
    : loansData.filter(loan => loan.category === selectedFilter);

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
                          {loan.details.map((detail, idx) => (
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

              {/* Կարևոր տեղեկատվություն */}
              <div className="bg-purple-50 border-l-4 border-[#6400dc] p-5 rounded-r-2xl">
                <h4 className="font-bold text-[#6400dc] mb-1">Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ</h4>
                <p className="text-sm text-gray-700">Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ վրա:</p>
              </div>

              {/* Ինչ է վարկային պատմությունը */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Ինչ է վարկային պատմությունը</h2>
                <p className="text-gray-600">
                  «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ:
                </p>
                <p className="text-gray-600">
                  Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:
                </p>
              </section>

              {/* Որոնք են վարկային պատմության ձևավորման աղբյուրները */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Որոնք են վարկային պատմության ձևավորման աղբյուրները</h2>
                <p className="text-gray-600">
                  Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ(տվյալներ):
                </p>
              </section>

              {/* Ինչ է վարկային բյուրոն */}
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
                <p className="text-gray-600 pt-2">
                  Վարկային բյուրոյի ծառայությունները թույլ են տալիս վարկատուներին (բանկեր, վարկային կազմակերպություններ), ինչպես նաև տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքներ վաճառող կամ ծառայություններ մատուցող կազմակերպություններին կանխելու վարկառուների/հաճախորդների կողմից ավելորդ պարտավորությունների ստանձնումը, կրճատելու անհուսալի պարտավորությունները և աջակցելու պարտավորությունների ժամանակին կատարմանը:
                </p>
              </section>

              {/* Ինչ է վարկային զեկույցը */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Ինչ է վարկային զեկույցը</h2>
                <p className="text-gray-600">
                  Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած տնտեսվարող կազմակերպությունների նկատմամբ ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն:
                </p>
                <p className="text-gray-600">
                  Զեկույցը կազմված է ԱՔՌԱ գործընկեր կազմակերպություններից ստացված տվյալների հիման վրա և արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները:
                </p>
              </section>

              {/* Որքան ժամանակ է պահպանվում վարկային պատմությունը */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Որքան ժամանակ է պահպանվում վարկային պատմությունը</h2>
                <p className="text-gray-600">
                  Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն»:
                </p>
              </section>

              {/* Ինչպես բարելավել վարկային պատմությունը */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Ինչպես բարելավել վարկային պատմությունը</h2>
                <p className="text-gray-600">
                  Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:
                </p>
              </section>

              {/* Որր դիմել եթե վարկային պատմությունը սխալ է */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Որր դիմել եթե վարկային պատմությունը սխալ է</h2>
                <p className="text-gray-600">
                  Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն՝ համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի դրույթների, կարող է այդ մասին տեղեկացնել վարկային բյուրոյին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին (վարկային տեղեկատվության աղբյուրին): Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում վարկային բյուրոյին ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ առցանց ռեժիմում Իմ ԱՔՌԱ անձնական գրասենյակից: ԱՔՌԱ-ի կողմից տրամադրված վարկային զեկույցների վերաբերյալ հաճախորդների բողոքների ընդունման/ստացման, քննարկման և վերջիններիս արձագանքման գործընթացը, գործողությունների հաջորդականությունը սահմանվում է «ԱՔՌԱ Քրեդիտ Ռեփորթինգ» ՓԲԸ-ի «Վեճերի լուծման ընթացակարգ»-ով:
                </p>
              </section>

              {/* Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները</h2>
                <p className="font-semibold text-gray-800">Դրական որոշման կայացման չափանիշները`</p>
                <ul className="list-disc list-inside space-y-1.5 text-gray-600 pl-4 marker:text-[#6400dc]">
                  <li>Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները,</li>
                  <li>Մշտական բնակության վայրը,</li>
                  <li>Կայուն եկամտի աղբյուրը,</li>
                  <li>Դրական կամ չեզոք վարկային պատմությունը,</li>
                  <li>Արժանահավատ և լիարժեք փաստաթղթերը:</li>
                </ul>
                <p className="font-semibold text-gray-800 pt-2">Բացասական որոշման կայացման չափանիշները`</p>
                <ul className="list-disc list-inside space-y-1.5 text-gray-600 pl-4 marker:text-[#6400dc]">
                  <li>Ոչ արժանահավատ փաստաթղթերը ներկայացնելը,</li>
                  <li>Բացասական վարկային պատմությունը,</li>
                  <li>Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ, ոչ հստակ պարբերականությամբ եկամուտներ),</li>
                  <li>Գրավի պայմանագրի կամ երաշխավորության համաձայնագրերի կնքման համար անհրաժեշտ փաստաթղթեր չներկայացնելը:</li>
                </ul>
              </section>

              {/* Վարկային սքոր */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900">Վարկային սքոր</h2>
                <p className="text-gray-600">
                  Բանկը կիրառում է իր կողմից մշակված վարկային սքորը վարկավորման վերաբերյալ որոշումների կայացման ժամանակ։ Վարկային սքորը հաճախորդի վարկային պատմության և որոկական ցուցանիշների ուսումնասիրության հիման վրա ձևավորվող վիճակագրական գնահատականն է, որն արտահայտում է հավանականությունը հայցվող վարկը ժամանակին և պատշաճ մարելու գծով։ Վարկային պատմությունը ներառվում է սքորի հաշվարկի մեջ դիմելու պահից վերջին 5 տարվա վաղեմությամբ։
                </p>
                <p className="text-gray-600">
                  Բանկի ներքին սքոր գնահատականի վրա ազդող հիմնական գործոններն են՝ ՖԱՅԿՈ սքորը (բարձր ՖԱՅԿՈ սքոր - դրական ազդեցություն), գործող վարկերի քանակը (գործող վարկերի քանակի ավելացում – բացասական ազդեցություն), վարկային բեռը (բարձր վարկային բեռ – բացասական ազդեցություն), վարկային պարտավորությունների ժամանակին կատարման փաստը (ժամկետանցների առկայություն – բացասական ազդեցություն), նոր վարկային հայտեր ներկայացնելու հաճախականությունը (հայտերի քանակի ավելացում – բացասական ազդեցություն), հաճախորդի աշխատանքային փորձը (քիչ փորձառություն – բացասական ազդեցություն), եկամուտների մեծությունը (բարձր եկամուտների առկայություն – դրական ազդեցություն)։
                </p>
                <p className="text-gray-600">
                  Վարկային պատմությունը և/կամ սքոր գնահատականը հնարավոր է բարելավվել վարկն առանց ժամկետանցների մարելու, նպատակային օգտագործելու, վարկերի մնացորդային գումարը և քանակը նվազեցնելու, տրված երաշխավորությունների գծով պարտավորությունները ժամանակին կատարելու դեպքում։
                </p>
                <p className="text-gray-600">
                  Վարկային պատմության և սքոր վատթարացումից խուսափելու նպատակով հաճախորդները չպետք է ունենան ժամկետանցներ, անհիմն ավելացնեն վարկային ծանրաբեռնվածությունը, վարկերի քանակը, հաճախակի վարկավորման հարցումներ ուղարկեն տարբեր կազմակերպություններին, հանդիսանան երաշխավոր անվստահելի անձանց համար։
                </p>
                <p className="text-gray-600">
                  Վարկային պատմության և ՖԱՅԿՈ սքորի վերաբերյալ առավել մանրամասն տեղեկատվություն կարելի է ստանալ այցելելով՝ <a href="https://www.abcfinance.am" target="_blank" rel="noreferrer" className="text-[#6400dc] underline font-medium">https://www.abcfinance.am</a>, Հաճախ տրվող հարցեր - ԱՔՌԱ (<a href="https://www.acra.am" target="_blank" rel="noreferrer" className="text-[#6400dc] underline font-medium">acra.am</a>) և <a href="https://www.acra.am" target="_blank" rel="noreferrer" className="text-[#6400dc] underline font-medium">www.acra.am</a> կայքեր։
                </p>
              </section>

            </div>
          )}

          {activeSubTab === 'teghekatvutyun' && (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h1 className="text-3xl font-extrabold text-neutral-900 mb-4">Կարևոր տեղեկատվություն</h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                Այս բաժնում ներկայացված են վարկավորման ընդհանուր պայմանները, տոկոսադրույքների հաշվարկման կարգը, հնարավոր միջնորդավճարները և օրենսդրությամբ սահմանված այլ իրավական տեղեկություններ։
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm marker:text-[#6400dc]">
                <li>Ուշադրություն՝ վարկը չվճարելու դեպքում ձեր գույքը կարող է օրենքով սահմանված կարգով առգրավվել։</li>
                <li>Վարկային տոկոսները հաշվարկվում են վարկի մնացորդի նկատմամբ։</li>
                <li>Տարեկան փաստացի տոկոսադրույքը ցույց է տալիս, թե որքան կարժենա վարկը ձեզ համար։</li>
              </ul>
            </div>
          )}

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-gray-400 py-12 px-6 lg:px-12 mt-16 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Evocabank</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Արագ, նորարարական և հարմարավետ բանկային ծառայություններ բոլորի համար։</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Անհատների համար</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#varker" className="hover:text-white transition-colors">Վարկեր</a></li>
              <li><a href="#varker" className="hover:text-white transition-colors">Քարտեր</a></li>
              <li><a href="#varker" className="hover:text-white transition-colors">Ավանդներ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Բիզնեսի համար</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#varker" className="hover:text-white transition-colors">Բիզնես վարկեր</a></li>
              <li><a href="#varker" className="hover:text-white transition-colors">Հաշիվներ և փոխանցումներ</a></li>
              <li><a href="#varker" className="hover:text-white transition-colors">Բիզնես քարտեր</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Կապ</h4>
            <p className="text-sm mb-2">Հեռ․՝ +374 10 60 55 55</p>
            <p className="text-sm">Էլ․ հասցե՝ info@evocabank.am</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-neutral-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Evocabank. Բոլոր իրավունքները պաշտպանված են։
        </div>
      </footer>
    </div>
  );
}

export default Varker;