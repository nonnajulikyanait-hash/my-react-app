import React, { useState } from 'react';

const loansData = [
  {
    id: 1,
    image: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg",
    title: "Անգրավ սպառողական վարկ",
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
    description: "Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։",
    details: []
  },
  {
    id: 8,
    image: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg",
    title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով",
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
  const [activeSubTab, setActiveSubTab] = useState('varker');

  return (
    <div id="varker" className="w-full min-h-screen bg-gray-50 pb-16">
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
        {/* Հացի փշրանքներ (Breadcrumbs) */}
        <div className="text-xs text-gray-500 mb-6 flex items-center space-x-2">
          <span>🏠</span>
          <span>›</span>
          <span>Անհատ</span>
          <span>›</span>
          <span>Վարկեր</span>
          <span>›</span>
          <span className="text-gray-800 font-medium">Վարկեր</span>
        </div>

        {/* Վերնագիր */}
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-8">Վարկեր</h1>

        {/* Վարկերի ցանկ */}
        <div className="space-y-8">
          {loansData.map((loan) => (
            <div 
              key={loan.id} 
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-md transition-shadow"
            >
              {/* Ձախ մաս՝ Նկար */}
              <div className="w-full md:w-5/12 h-64 rounded-2xl overflow-hidden bg-purple-50 flex items-center justify-center relative">
                <img 
                  src={loan.image} 
                  alt={loan.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Աջ մաս՝ Տեքստ և պարամետրեր */}
              <div className="w-full md:w-7/12 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-3">{loan.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {loan.description}
                  </p>
                </div>

                {/* Ցուցանիշներ (Գումար, ժամկետ, տոկոս) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 border-t border-b border-gray-100 py-4">
                  {loan.details.map((detail, idx) => (
                    <div key={idx}>
                      <p className="text-[#6400dc] font-bold text-lg sm:text-xl">{detail.value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{detail.label}</p>
                    </div>
                  ))}
                </div>

                {/* Մանրամասն կոճակ */}
                <div>
                  <button className="inline-flex items-center space-x-2 text-[#6400dc] bg-purple-50 hover:bg-purple-100 font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer text-sm">
                    <span>Մանրամասն</span>
                    <span>›</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Varker;