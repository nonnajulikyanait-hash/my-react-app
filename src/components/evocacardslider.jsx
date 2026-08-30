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
    name: "Evoca Digital Card", 
    text: "Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում:",
    img: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png" 
  },
  { 
    id: 3, 
    name: "Evoca Touch", 
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
    name: "Visa Infinite", 
    text: "Բացառիր սահմանափակումները Visa Infinite-ի հետ։ Վայելիր պրեմիում դասի սպասարկում ամբողջ աշխարհում:",
    img: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png" 
  },
  { 
    id: 6, 
    name: "Visa Signature", 
    text: "Նախագծված է հատուկ քո ճկուն և բարձրակարգ ոճին համապատասխան։",
    img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png" 
  },
  { 
    id: 7, 
    name: "Mastercard World Black Edition", 
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
    name: "Mastercard Gold", 
    text: "Ոսկեդարյան հնարավորություններ և հուսալիություն Mastercard-ից։",
    img: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png" 
  },
  { 
    id: 10, 
    name: "Visa Gold", 
    text: "Ընդգծիր քո կարգավիճակը և վայելիր հատուկ արտոնություններ Visa Gold-ի միջոցով։",
    img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png" 
  },
  { 
    id: 11, 
    name: "Visa Classic", 
    text: "Ամենօրյա հարմարավետ և ապահով վճարային գործիք ամբողջ աշխարհում:",
    img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png" 
  },
  { 
    id: 12, 
    name: "Mastercard Standard", 
    text: "Վստահելի և արագ վճարումներ ցանկացված վայրում:",
    img: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png" 
  },
  { 
    id: 13, 
    name: "Visa Business", 
    text: "Հարմարավետ գործիք ձեր բիզնես ծախսերի կառավարման համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png" 
  },
  { 
    id: 14, 
    name: "Mastercard Business", 
    text: "Վստահելի լուծումներ ձեր բիզնեսի առօրյա ֆինանսների համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png" 
  },
  { 
    id: 15, 
    name: "ArCa Business", 
    text: "Տեղական բիզնես քարտ՝ հուսալի և արագ գործարքների համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png" 
  },
  { 
    id: 16, 
    name: "ArCa Classic", 
    text: "Տեղական հուսալի քարտ Հայաստանում անհոգ գնումների և գործարքների համար:",
    img: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png" 
  },
  { 
    id: 17, 
    name: "Evoca Pension", 
    text: "Հատուկ պայմաններ և հարմարավետություն թոշակառուների համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png" 
  },
  { 
    id: 18, 
    name: "Digital Gift Card", 
    text: "Անակնկալիր մտերիմներին ակնթարթորեն առաքվող թվային նվեր քարտով:",
    img: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png" 
  },
  { 
    id: 19, 
    name: "Evoca Student Card", 
    text: "Ուսանողական հատուկ զեղչեր և հարմարավետ ֆինանսական գործիքներ երիտասարդների համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png" 
  },
  { 
    id: 20, 
    name: "Evoca Junior", 
    text: "Հատուկ քարտ երեխաների և դեռահասների ֆինանսական գրագիտության համար:",
    img: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png" 
  },
  { 
    id: 21, 
    name: "Evoca Card Special", 
    text: "Ժամանակակից և նորարարական լուծումներ ձեր առօրյայի համար։",
    img: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png" 
  }
];

function EvocaCardsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative bg-[#f0f7fe] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Ձախ մաս՝ Ուղղահայաց Swiper սլայդեր */}
        <div className="flex flex-col items-center w-full lg:w-4/12">
          
          {/* Վերևի սլաք */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 text-[#6400DC] hover:scale-125 transition-transform mb-1 focus:outline-none cursor-pointer z-10"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Swiper բլոկ */}
          <div className="h-[400px] w-full max-w-[240px] overflow-hidden relative flex justify-center">
            <Swiper
              direction={'vertical'}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              mousewheel={true}
              spaceBetween={2} 
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
                  <SwiperSlide key={card.id} className="flex flex-col justify-center items-center py-1">
                    <div 
                      onClick={() => swiperRef.current?.slideToLoop(index)}
                      className={`cursor-pointer transition-all duration-300 rounded-lg overflow-hidden shadow-sm bg-white ${
                        isCenter 
                          ? "scale-100 opacity-100 border border-[#6400DC] z-10 w-[150px]" 
                          : "scale-75 opacity-40 w-[120px]"
                      }`}
                    >
                      <img src={card.img} alt={card.name} className="w-full h-auto object-cover" />
                    </div>
                    {/* Քարտի անունը տակից */}
                    <span className={`text-[11px] font-medium text-center mt-1 transition-opacity duration-300 ${isCenter ? 'opacity-100 text-neutral-900 font-bold' : 'opacity-0'}`}>
                      {card.name}
                    </span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Ներքևի սլաք */}
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 text-[#6400DC] hover:scale-125 transition-transform mt-1 focus:outline-none cursor-pointer z-10"
            aria-label="Next card"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Աջ մաս՝ Մեծացված քարտ, ձախ հավասարեցված տեքստ և վերնագիր */}
        <div className="w-full lg:w-7/12 flex flex-col lg:flex-row items-center justify-between gap-8 p-4">
          
          {/* Մեծ քարտի նկար (ավելի մեծ չափով) */}
          <div className="w-full lg:w-6/12 flex justify-center">
            <img 
              src={cardsData[activeIndex]?.img} 
              alt={cardsData[activeIndex]?.name} 
              className="w-full max-w-[420px] h-[280px] object-contain drop-shadow-2xl transition-all duration-500"
            />
          </div>

          {/* Անուն, տեքստ և կոճակ՝ հավասարեցված ձախ (text-left, items-start) */}
          <div className="w-full lg:w-6/12 text-left flex flex-col items-start">
            <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 mb-4">
              {cardsData[activeIndex]?.name}
            </h3>
            <p className="text-base text-neutral-600 mb-8 leading-relaxed">
              {cardsData[activeIndex]?.text}
            </p>
            <a 
              href="#details"
              className="inline-block bg-[#6400DC] hover:bg-[#5200b3] text-white font-bold px-9 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Մանրամասն
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default EvocaCardsSlider;