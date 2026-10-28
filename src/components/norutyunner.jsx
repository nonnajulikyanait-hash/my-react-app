import React, { useState } from 'react';

const Norutyunner = ({ setActiveTab }) => {
  const [activeCategory, setActiveCategory] = useState('Բոլորը');
  const [selectedNews, setSelectedNews] = useState(null);
  const [visibleCount, setVisibleCount] = useState(20);

  const categories = [
    'Գլխավոր',
    'Բանկային',
    'Հարցազրույցներ',
    'Պրոդուկտներ',
    'Նորարարություններ',
    'Կենսակերպ',
    'Մրցանակներ',
    'CSR',
    'Այլ',
    'Բոլորը'
  ];

  // «Գլխավոր» բաժնի նորությունը
  const mainNewsDetail = {
    id: 'norakaruyc-signing',
    title: 'Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել',
    shortDesc: 'Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից։',
    date: '22.06.2026',
    category: 'Գլխավոր',
    image: 'https://www.evoca.am/images-cache/news/1/1782137837549/780x585.jpg',
    fullText: [
      'Evocabank-ը և Norakaruyc.am հարթակը ստորագրել են համագործակցության հուշագիր՝ նպատակ ունենալով պարզեցնել և արագացնել բնակարանի գնման ու հիփոթեքային ֆինանսավորման գործընթացները։',
      'Համագործակցության արդյունքում Norakaruyc.am-ի օգտատերերը կկարողանան ոչ միայն ծանոթանալ նորակառույց շենքերի բնակարանների մասին ամբողջական տեղեկատվությանը, այլ նաև անմիջապես հարթակից կապ հաստատել կառուցապատողի և Բանկի հետ, ստանալ խորհրդատվություն և ներկայացնել հիփոթեքային վարկի հայտ։',
      'Հարթակում ներկայացված են բնակարանների հատակագծերը, ֆինանսավորման հնարավոր տարբերակները, ամսական վճարների չափը և մարման գրաֆիկները։ Օգտատերերը, լրացնելով անհրաժեշտ տվյալները, կարող են իրենց հայտն ավտոմատ կերպով փոխանցել ինչպես կառուցապատողին, այնպես էլ Evocabank-ին։',
      '«Այս նորարարական լուծումը հնարավորություն է տալիս մեկտեղել անշարժ գույքի ընտրության ու ֆինանսավորման բոլոր փուլերը մեկ միասնական թվային հարթակում: Դրա շնորհիվ մենք կարողանում ենք առավելագույնս կրճատել թե՛ հաճախորդի ծախսած ժամանակը, և թե՛ թղթաբանությունը։ Մեր այս նախաձեռնությունը միտված է հենց դրան՝ փոխելու շուկայի մոտեցումները և բնակարանի գնման ողջ գործընթացը՝ այն հաճախորդի համար դարձնելով անհամեմատ ավելի արագ, հարմարավետ և ամբողջովին թվայնացված:\nNorakaruyc.am-ի հետ համագործակցությունը հնարավորություն է տալիս մեկ հարթակում ինտեգրել Բանկի բոլոր հիփոթեքային պրոդուկտները, որպեսզի յուրաքանչյուր հաճախորդ կարողանա ընտրել իր կարիքներին և հնարավորություններին առավել համապատասխան տարբերակը»,- նշել է Evocabank-ի Սպառողական վարչության ղեկավար Ստեփան Ավետիսյանը:',
      '«Այսուհետ Norakaruyc.am հարթակի օրական ավելի քան 2,500 օգտատերեր կկարողանան մեկ հարթակում ընտրել իրենց նախընտրած բնակարանը, անցնել նույնականացման գործընթացը և անմիջապես առցանց դիմել հիփոթեքային վարկի համար։\nՍկսած 2019թ.-ից՝ մեր փորձը ցույց է տալիս, որ, ավելացնելով թվային միջավայրի գործիքակազմը, մեզ հետ համագործակցող կառուցապատողների հետ հասնում ենք ավելի արդյունավետ և արագ վաճառքների։ Նախաեռնությունը միտված է պարզեցնելու և արագացնելու բնակարանի գնման գործընթացը՝ նվազեցնելով այցելությունների և փաստաթղթաշրջանառության ծավալը, ինչպես նաև ապահովելով ավելի հարմար և ժամանակակից սպասարկում հաճախորդների համար»,- նշել է Norakaruyc.am հարթակի հիմնադիր Սերգեյ Խաչատրյանը։',
      'Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից:',
      'Evocabank-ի և Norakaruyc.am-ի համատեղ թվային լուծումը ևս մեկ քայլ է դեպի Հայաստանի անշարժ գույքի շուկայի թվայնացում:'
    ]
  };

  // 117 ԱՌԱՆՁԻՆ ՆԿԱՐՆԵՐԻ ՀՂՈՒՄՆԵՐԸ
  const imageUrls = [
    "https://www.evoca.am/images-cache/news/1/17930164747919/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17908437653512/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17852444643548/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17870544210976/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17864472573391/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17854167235525/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17842875742396/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17806626445767/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17800482277397/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17785839458922/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17780463751358/510x383.png",
    "https://www.evoca.am/images-cache/news/1/1776162446379/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17757342882486/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17746129517291/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17707319421286/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17683825017248/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/1765801881883/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17649374043883/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17624341580743/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17623251404538/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17611221350351/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17610618951769/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17604369402663/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17600922901514/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17587062793679/510x383.png",
    "https://www.evoca.am/images-cache/news/1/1755691060325/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17556116751548/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17540357468511/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17543142671349/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17501430419171/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17472925002048/510x383.png",
    "https://www.evoca.am/images-cache/news/1/1740120458201/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17386587462914/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17373763573222/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17371104329802/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17369249643186/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17340172368299/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17339403687437/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17338293917613/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17337479879173/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17332069569872/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17325417143896/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17283954133829/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17313236323207/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17304388351704/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17279603303089/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17273569939811/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17271616844358/510x383.png",
    "https://www.evoca.am/images-cache/news/1/1723534469539/510x383.png",
    "https://www.evoca.am/images-cache/news/1/1725277850499/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17225181707938/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17222414491934/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17217242754328/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17198345573851/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17198345573851/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17182807965555/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17111163408005/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17255457525076/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17065349106759/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17008349940521/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/17008145898933/510x383.png",
    "https://www.evoca.am/images-cache/news/1/17000469131451/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16964027775467/510x383.png",
    "https://www.evoca.am/images-cache/news/1/169590947043/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16956433417196/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16903727089801/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16902075440877/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16801705777805/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/1680009514293/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16796664377463/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16751514125779/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16739643337781/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16698094822872/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16644550079199/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16603095118151/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16599446337235/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16584991069785/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16564205795872/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16536583638942/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16535697338703/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16527058751379/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16526888102013/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16524458685351/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16521720469586/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16480274613347/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/1642501519511/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16383421382899/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16366388551494/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/1620735937822/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16170289183574/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16170289363375/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16178798192635/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16098750729028/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16100042278431/510x383.png",
    "https://www.evoca.am/images-cache/news/1/161038217147/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16183858492287/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16104325455044/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16183879270733/510x383.png",
    "https://www.evoca.am/images-cache/news/1/1610620440257/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16106099043041/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16120953971318/510x383.jpg",
    "https://www.evoca.am/images-cache/news/1/16106932022056/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16107181805155/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16107208220542/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16183887871112/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16184703522597/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16184011238938/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16108088469328/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16108142158282/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16108654865257/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16109032298506/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16109033604138/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16109039688796/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16115052068736/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16119976718751/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16119985899372/510x383.png",
    "https://www.evoca.am/images-cache/news/1/16120154872134/510x383.png"
  ];

  // 117 ՅՈՒՐԱՔԱՆՉՅՈՒՐ ՆՈՐՈՒԹՅՈՒՆ ԻՐ ԱՌԱՆՁԻՆ ՆԿԱՐՈՎ
  const bankingNews = imageUrls.map((imgUrl, index) => {
    const id = index + 1;
    return {
      id: `banking-${id}`,
      title: `Evocabank-ի բանկային նորություն թիվ ${id}`,
      shortDesc: `Սա բանկային բաժնի հերթական կարևոր նորությունն է, որը վերաբերում է Բանկի կողմից մատուցվող ծառայություններին և պրոդուկտներին (${id})։`,
      date: '26.10.2026',
      category: 'Բանկային',
      image: imgUrl,
      fullText: [
        `Սա Evocabank-ի բանկային բաժնի թիվ ${id} նորության ամբողջական տեքստն է։`,
        'Բանկը շարունակում է զարգացնել իր թվային հարթակներն ու առաջարկել նորարարական լուծումներ իր հաճախորդներին:',
        'Մանրամասների համար կարող եք կապ հաստատել մեզ հետ կամ այցելել մոտակա մասնաճյուղ:'
      ]
    };
  });

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <main className="max-w-7xl mx-auto px-4 md:px-12 pt-10 pb-16">
          
          {/* ԵԹԵ ԸՆՏՐՎԱԾ Է ԱՌԱՆՁԻՆ ՆՈՐՈՒԹՅԱՆ ՄԱՆՐԱՄԱՍՆ ԷՋԸ */}
          {selectedNews ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-purple-700 font-medium transition cursor-pointer"
                >
                  <span>← Վերադառնալ</span>
                </button>
                <div className="text-sm text-gray-400 flex items-center space-x-2">
                  <span onClick={() => { setSelectedNews(null); setActiveTab && setActiveTab('home'); }} className="cursor-pointer hover:text-purple-600">Գլխավոր</span>
                  <span>/</span>
                  <span onClick={() => setSelectedNews(null)} className="cursor-pointer hover:text-purple-600">Նորություններ</span>
                  <span>/</span>
                  <span className="text-gray-600 font-medium truncate max-w-xs">{selectedNews.title}</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 max-w-5xl mx-auto mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
                  <div>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {selectedNews.category}
                    </span>
                    <h1 className="text-2xl md:text-4xl font-extrabold text-neutral-900 leading-snug mb-6">
                      {selectedNews.title}
                    </h1>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
                      {selectedNews.shortDesc}
                    </p>
                    <div className="text-sm text-gray-400 font-medium">{selectedNews.date}</div>
                  </div>

                  <div className="overflow-hidden rounded-2xl shadow-md">
                    <img 
                      src={selectedNews.image} 
                      alt={selectedNews.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed pt-6 border-t border-gray-100 text-sm md:text-base">
                  {selectedNews.fullText.map((paragraph, index) => (
                    <p key={index} className={paragraph.startsWith('«') ? 'italic bg-purple-50/50 p-4 rounded-xl border-l-4 border-purple-600' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* ՆՈՐՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆԿԻ ԷՋԸ */
            <div>
              <div className="text-sm text-gray-400 mb-4 flex items-center space-x-2">
                <span onClick={() => setActiveTab && setActiveTab('home')} className="cursor-pointer hover:text-purple-600">Գլխավոր</span>
                <span>/</span>
                <span className="text-gray-600 font-medium">Նորություններ</span>
                {activeCategory !== 'Բոլորը' && (
                  <>
                    <span>/</span>
                    <span className="text-gray-600 font-medium">{activeCategory}</span>
                  </>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8">
                Նորություններ
              </h1>

              {/* Կատեգորիաների կոճակներ */}
              <div className="flex flex-wrap gap-3 mb-16">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setActiveCategory(cat); setVisibleCount(20); }}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition shadow-sm cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-purple-700 text-white shadow-purple-200'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* ԵԹԵ ԸՆՏՐՎԱԾ Է «ԳԼԽԱՎՈՐ» ՖԻԼՏՐԸ */}
              {activeCategory === 'Գլխավոր' ? (
                <div>
                  <section 
                    onClick={() => setSelectedNews(mainNewsDetail)}
                    className="mb-16 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 cursor-pointer hover:shadow-xl transition duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                      <div>
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                          Գլխավոր
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 leading-snug mb-6 hover:text-purple-700 transition">
                          Evocabank-ը և Norakaruyc.am-ը համագործակցության հուշագիր են ստորագրել
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Նոր թվային լուծումը հնարավորություն կտա բնակարան ընտրել և հիփոթեքի հայտ ներկայացնել մեկ հարթակից։
                        </p>
                        <div className="text-sm text-gray-400 font-medium">22.06.2026</div>
                      </div>
                      <div className="overflow-hidden rounded-2xl shadow-inner">
                        <img 
                          src="https://www.evoca.am/images-cache/news/1/1782137837549/780x585.jpg" 
                          alt="Evocabank and Norakaruyc" 
                          className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              ) : activeCategory === 'Բանկային' ? (
                /* «ԲԱՆԿԱՅԻՆ» ՖԻԼՏՐԻ ՆՈՐՈՒԹՅՈՒՆՆԵՐ (117 հատ, ամեն 20-ը մեկ) */
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {bankingNews.slice(0, visibleCount).map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedNews(item)}
                        className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
                      >
                        <div>
                          <div className="overflow-hidden rounded-2xl mb-4 h-48 bg-gray-100">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
                          </div>
                          <span className="inline-block bg-purple-50 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                            Բանկային
                          </span>
                          <h4 className="font-bold text-base text-neutral-900 mb-2 line-clamp-2 hover:text-purple-700 transition">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-xs line-clamp-3 mb-4">
                            {item.shortDesc}
                          </p>
                        </div>
                        <div className="text-xs text-gray-400 pt-3 border-t border-gray-100 flex justify-between items-center">
                          <span>{item.date}</span>
                          <span className="text-purple-600 font-medium hover:underline">Կարդալ ավելին →</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Բեռնել ավելին (Load More) կոճակ 20-ական բաժանումով */}
                  {visibleCount < bankingNews.length && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setVisibleCount((prev) => Math.min(prev + 20, bankingNews.length))}
                        className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm px-8 py-3.5 rounded-full transition shadow-md cursor-pointer"
                      >
                        Բեռնել ավելին ({bankingNews.length - visibleCount} մնացած)
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* ՄՅՈՒՍ ԿԱՏԵԳՈՐԻԱՆԵՐԻ ՑԱՆԿԸ */
                <div className="bg-white rounded-3xl p-12 text-center text-gray-500 shadow-sm border border-gray-100">
                  <p className="text-lg">Այս կատեգորիայում նորություններն ավելացման փուլում են:</p>
                </div>
              )}
            </div>
          )}

        </main>
      </div>

      {/* ՖՈՒՏԵՐ */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6 md:px-12 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-bold text-gray-800 text-sm">evocaBANK</span>
            <p className="mt-1">ք. Երևան, 0010, Հանրապետության 44/2</p>
          </div>
          <div className="text-center md:text-right">
            <p>hello@evoca.am</p>
            <p>+374 10 605555</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Norutyunner;