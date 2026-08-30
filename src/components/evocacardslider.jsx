import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// Քարտերի տվյալների զանգվածը՝ ներառյալ նոր 16-րդ և 17-րդ քարտերը
const cardsData = [
  { id: 1, name: "Evoca Travel Card", img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg" },
  { id: 2, name: "Evoca Digital Card", img: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png" },
  { id: 3, name: "Evoca Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png" },
  { id: 4, name: "Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png" },
  { id: 5, name: "Visa Signature", img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png" },
  { id: 6, name: "Mastercard World Black Edition", img: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png" },
  { id: 7, name: "Visa Platinum", img: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png" },
  { id: 8, name: "Mastercard Gold", img: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png" },
  { id: 9, name: "Visa Gold", img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png" },
  { id: 10, name: "Visa Classic", img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png" },
  { id: 11, name: "Mastercard Standard", img: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png" },
  { id: 12, name: "ArCa Classic", img: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png" },
  { id: 13, name: "Evoca Pension", img: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png" },
  { id: 14, name: "Digital Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png" },
  { id: 15, name: "Evoca Student Card", img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png" },
  { id: 16, name: "Evoca Card 16", img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png" },
  { id: 17, name: "Evoca Card 17", img: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png" },
];

function EvocaCardsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս՝ Swiper-ով կառավարվող ուղղահայաց քարտեր */}
        <div className="flex flex-col items-center w-full lg:w-4/12">
          
          {/* Վերևի սլաք */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 text-purple-700 hover:scale-110 transition-transform mb-4 focus:outline-none cursor-pointer z-10"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Swiper բլոկ */}
          <div className="h-[380px] w-full max-w-[260px] overflow-hidden relative flex justify-center">
            <Swiper
              direction={'vertical'}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              mousewheel={true}
              modules={[Mousewheel, Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="h-full w-full py-4"
            >
              {cardsData.map((card, index) => {
                const isCenter = activeIndex === index;
                return (
                  <SwiperSlide key={card.id} className="flex justify-center items-center">
                    <div 
                      onClick={() => swiperRef.current?.slideToLoop(index)}
                      className={`cursor-pointer transition-all duration-300 rounded-xl overflow-hidden shadow-md bg-white ${
                        isCenter 
                          ? "scale-105 opacity-100 border-2 border-purple-600 z-10 w-[210px]" 
                          : "scale-85 opacity-40 w-[180px]"
                      }`}
                    >
                      <img src={card.img} alt={card.name} className="w-full h-auto object-cover" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Ներքևի սլաք */}
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 text-purple-700 hover:scale-110 transition-transform mt-4 focus:outline-none cursor-pointer z-10"
            aria-label="Next card"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Աջ մաս՝ մեծացված ընտրված քարտը և վերնագիրը */}
        <div className="w-full lg:w-7/12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-slate-50 p-8 rounded-3xl shadow-inner">
          
          {/* Ընտրված մեծ քարտի նկարը */}
          <div className="w-full lg:w-7/12 flex justify-center">
            <img 
              src={cardsData[activeIndex].img} 
              alt={cardsData[activeIndex].name} 
              className="max-w-full h-auto object-contain drop-shadow-2xl transition-all duration-500 transform scale-100"
            />
          </div>

          {/* Քարտի վերնագիրը և մանրամասների կոճակը */}
          <div className="w-full lg:w-5/12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="text-3xl font-black text-neutral-900 mb-6">
              {cardsData[activeIndex].name}
            </h3>
            <a 
              href="#details"
              className="inline-block bg-[#6400DC] hover:bg-[#5200b3] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
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