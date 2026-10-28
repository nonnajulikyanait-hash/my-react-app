import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';

import 'swiper/css';

const cardsData = [
  { 
    id: 1, 
    name: "Evoca Travel Card", 
    text: "Ճանապարհորդիր աշխարհով մեկ Evoca Travel Card-ով և ստացիր բազմաթիվ արտոնություններ ու cashback-ներ:",
    img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg" 
  },
  { 
    id: 2, 
    name: "Mastercard World Digital", 
    text: "Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում:",
    img: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png" 
  },
  { 
    id: 3, 
    name: "Wilco Visa Infinite", 
    text: "Արագ և ապահով վճարումներ քո ամենօրյա գնումների համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png" 
  },
  { 
    id: 4, 
    name: "Evoca Gift Card", 
    text: "Նվիրիր անմոռանալի պահեր Evoca Gift Card-ի հետ։ Հարմար է ցանկացած առիթի համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png" 
  },
  { 
    id: 5, 
    name: "Digital Gift Card", 
    text: "Բացառիր սահմանափակումները Digital Gift Card-ի հետ։ Վայելիր պրեմիում դասի սպասարկում ամբողջ աշխարհում:",
    img: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png" 
  },
  { 
    id: 6, 
    name: "Visa Infinite", 
    text: "Նախագծված է հատուկ քո ճկուն և բարձրակարգ ոճին համապատասխան։",
    img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png" 
  },
  { 
    id: 7, 
    name: "Visa Vision", 
    text: "Ընտրիր բացառիկ հնարավորություններ, ճանապարհորդական ապահովագրություն և VIP սրահների հասանելիություն։",
    img: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png" 
  },
  { 
    id: 8, 
    name: "Visa Platinum", 
    text: "Վայելիր բարձրակարգ հարմարավետություն և անվտանգություն ձեր ամենօրյա գնումների ժամանակ։",
    img: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png" 
  },
  { 
    id: 9, 
    name: "UnionPay Business Platinum", 
    text: "Ոսկեդարյան հնարավորություններ և հուսալիություն UnionPay-ից։",
    img: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png" 
  },
  { 
    id: 10, 
    name: "MyLer Gift Card", 
    text: "Մեկ քարտ, անսահմանափակ արկածներ:)",
    img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png" 
  },
  { 
    id: 11, 
    name: "UnionPay Gold", 
    text: "Ամենօրյա հարմարավետ և ապահով վճարային գործիք ամբողջ աշխարհում:",
    img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png" 
  },
  { 
    id: 12, 
    name: "4U.am Gift card", 
    text: "Վստահելի և արագ վճարումներ ցանկացված վայրում:",
    img: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png" 
  },
  { 
    id: 13, 
    name: "Mastercard Gold", 
    text: "Հարմարավետ գործիք ձեր ծախսերի կառավարման համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png" 
  },
  { 
    id: 14, 
    name: "Mastercard Standard", 
    text: "Վստահելի լուծումներ ձեր առօրյա ֆինանսների համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png" 
  },
  { 
    id: 15, 
    name: "Visa Digital", 
    text: "Թվային քարտ՝ հուսալի և արագ գործարքների համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png" 
  },
  { 
    id: 16, 
    name: "Visa Classic", 
    text: "Տեղական հուսալի քարտ Հայաստանում անհոգ գնումների և գործարքների համար:",
    img: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png" 
  },
  { 
    id: 17, 
    name: "Arca Classic", 
    text: "Հատուկ պայմաններ և հարմարավետություն:",
    img: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png" 
  },
  { 
    id: 18, 
    name: "Arca-UnionPay", 
    text: "Անակնկալիր մտերիմներին ակնթարթորեն առաքվող քարտով:",
    img: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png" 
  },
  { 
    id: 19, 
    name: "Dalma Gift Card", 
    text: "Նվեր ընտրելն այլևս դժվար չէ:)",
    img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png" 
  },
  { 
    id: 20, 
    name: "Rio Gift Card", 
    text: "Ամեն ինչ մեկ նվեր քարտում",
    img: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png" 
  },
  { 
    id: 21, 
    name: "Visa Gold", 
    text: "Ժամանակակից և նորարարական լուծումներ ձեր առօրյայի համար։",
    img: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png" 
  }
];

function EvocaCardsSlider({ setActiveTab, setSelectedCard }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // 👈 ՍԵՂՄԵԼԻՍ ԲԱՑՈՒՄ Է ՀԵՆՑ ԱՅԴ ՔԱՐՏԻ ԷՋԸ
  const handleDetailsClick = (e) => {
    e.preventDefault();
    const currentCard = cardsData[activeIndex];
    
    if (setSelectedCard) {
      setSelectedCard({
        id: currentCard.id,
        title: currentCard.name,
        image: currentCard.img,
        desc: currentCard.text,
        features: []
      });
    }

    if (setActiveTab) {
      setActiveTab('cards');
    }
  };

  return (
    <section className="relative bg-[#f0f7fe] py-10 lg:py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Swiper */}
        <div className="flex flex-col items-center w-full lg:w-2/12">
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-1 text-[#6400DC] hover:scale-110 transition-transform mb-1 focus:outline-none cursor-pointer z-10"
          >
            <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="h-[320px] w-full max-w-[170px] overflow-hidden relative flex justify-center">
            <Swiper
              direction={'vertical'}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              mousewheel={true}
              spaceBetween={4} 
              modules={[Mousewheel, Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="h-full w-full"
            >
              {cardsData.map((card, index) => {
                const isCenter = activeIndex === index;
                return (
                  <SwiperSlide key={card.id} className="flex flex-col justify-center items-center py-0.5">
                    <div 
                      onClick={() => swiperRef.current?.slideToLoop(index)}
                      className={`cursor-pointer transition-all duration-300 rounded-md overflow-hidden shadow-sm bg-white ${
                        isCenter 
                          ? "scale-100 opacity-100 border-2 border-[#6400DC] z-10 w-[150px]" 
                          : "scale-75 opacity-40 w-[110px]"
                      }`}
                    >
                      <img src={card.img} alt={card.name} className="w-full h-auto object-cover" />
                    </div>
                    <span className={`text-[10px] font-medium text-center mt-0.5 transition-opacity duration-300 ${isCenter ? 'opacity-100 text-neutral-900 font-bold' : 'opacity-0'}`}>
                      {card.name}
                    </span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="p-1 text-[#6400DC] hover:scale-110 transition-transform mt-1 focus:outline-none cursor-pointer z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Աջ մաս */}
        <div className="w-full lg:w-10/12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-7/12 flex justify-center">
            <img 
              src={cardsData[activeIndex]?.img} 
              alt={cardsData[activeIndex]?.name} 
              className="w-full max-w-[440px] h-[260px] object-contain drop-shadow-xl transition-all duration-500 cursor-pointer hover:scale-105"
              onClick={handleDetailsClick}
            />
          </div>

          <div className="w-full lg:w-5/12 text-left flex flex-col items-start space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 cursor-pointer hover:text-[#6400DC] transition" onClick={handleDetailsClick}>
              {cardsData[activeIndex]?.name}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {cardsData[activeIndex]?.text}
            </p>
            <div className="pt-2">
              <button 
                onClick={handleDetailsClick}
                className="inline-block bg-[#6400DC] hover:bg-[#5200b3] text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-full shadow-md transition-transform hover:scale-105 cursor-pointer border-none"
              >
                Մանրամասն
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EvocaCardsSlider;