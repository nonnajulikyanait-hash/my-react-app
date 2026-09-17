import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';

const partnersData = [
  { id: 1, name: "indigo", img: "https://www.evoca.am/images-cache/partners/1/1614078972624/180x80.png" },
  { id: 2, name: "Futuris Home", img: "https://www.evoca.am/images-cache/partners/1/17062590747209/180x80.png" },
  { id: 3, name: "Adelie & the Stone", img: "https://www.evoca.am/images-cache/partners/1/1614078972624/180x80.png" },
  { id: 4, name: "Partner 4", img: "https://www.evoca.am/images-cache/partners/1/17062590747209/180x80.png" },
  { id: 5, name: "Partner 5", img: "https://www.evoca.am/images-cache/partners/1/1614078972624/180x80.png" },
];

function Gortsynkerner() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        {/* Բլոկի վերնագիր և ձեռքի նկարը */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-2">
              Գործընկերներ
            </h2>
            <p className="text-sm text-neutral-600 max-w-xl">
              Դարձեք Evocabank-ի գործընկեր և եկեք միասին գնանք դեպի նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք եք գործում ժամանակակից և յուրահատուկ աշխարհ:
            </p>
          </div>

          {/* Այստեղ է ավելացված ձեռքի փոքր նկարը */}
          <div className="shrink-0">
            <img 
              src="https://www.evoca.am/img/hand.png" 
              alt="Hand decoration" 
              className="w-20 sm:w-24 h-auto object-contain"
            />
          </div>
        </div>

        {/* Գործընկերների Սլայդեր բլոկ */}
        <div className="relative bg-white rounded-3xl p-6 shadow-md border border-neutral-100">
          
          <div className="flex items-center justify-between">
            
            {/* Ձախ սլաք */}
            <button 
              ref={prevRef}
              className="absolute -left-4 z-10 w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-600 shadow-md hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Swiper */}
            <div className="w-full px-4">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="py-4"
              >
                {partnersData.map((partner) => (
                  <SwiperSlide key={partner.id} className="flex justify-center">
                    <div className="w-full h-28 bg-white border border-neutral-100 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                      <img 
                        src={partner.img} 
                        alt={partner.name} 
                        className="max-h-12 max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Աջ սլաք */}
            <button 
              ref={nextRef}
              className="absolute -right-4 z-10 w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-600 shadow-md hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

        </div>

        {/* «Բոլոր գործընկերները» կոճակ */}
        <div className="mt-8 text-left">
          <a 
            href="#all-partners" 
            className="inline-block bg-[#6400dc] hover:bg-[#5200b3] text-white font-semibold text-sm px-7 py-3 rounded-full shadow-md transition-transform hover:scale-105"
          >
            Բոլոր գործընկերները &gt;
          </a>
        </div>

      </div>
    </section>
  );
}

export default Gortsynkerner;