import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const reviewsData = [
  {
    id: 1,
    text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ։ Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին ՝ նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի։ Շնորհակալ ենք, որ Դուք կաք:",
    author: "Սուսաննա Վանյան",
    role: "Հաճախորդ"
  },
  {
    id: 2,
    text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եм, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների` հեշտ, արագ, որակով:",
    author: "Նունե Գևորգյան",
    role: "Հաճախորդ"
  },
  {
    id: 3,
    text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում` ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս։ Ավելի քան 5 տարի համագործակցելով` կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ՝ լի…",
    author: "Արամ Ազարյան",
    role: "Հաճախորդ"
  },
  {
    id: 4,
    text: "Լավագույն նորարարական և թվային բանկ ՝ լավագույն ծառայություններով և անձնակազմով:",
    author: "Էլեն Վարդանյան",
    role: "Հաճախորդ"
  },
  {
    id: 5,
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց։ Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից…",
    author: "Կամո Թովմասյան",
    role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer"
  }
];

function Hachaxord() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative">
        
        {/* Ձախ կողմի շարժվող ձեռքի նկար (Animate pulse / bounce) */}
        <div className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none animate-bounce duration-1000">
          <img 
            src="https://www.evoca.am/img/reviews/hand2.png" 
            alt="Hand Left" 
            className="w-20 lg:w-24 h-auto object-contain"
          />
        </div>

        {/* Աջ կողմի շարժվող ձեռքի նկար */}
        <div className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none animate-bounce duration-1000">
          <img 
            src="https://www.evoca.am/img/reviews/hand2.png" 
            alt="Hand Right" 
            className="w-20 lg:w-24 h-auto object-contain transform scale-x-[-1]"
          />
        </div>

        {/* Սլայդեր բլոկ */}
        <div className="px-6 md:px-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {reviewsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center text-center px-4">
                  
                  {/* 5 Աստղեր */}
                  <div className="flex items-center space-x-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Կարծիքի տեքստը մեջբերման նշաններով */}
                  <div className="relative max-w-2xl mb-6">
                    {/* Ձախ մեջբերման նշան */}
                    <span className="absolute -left-6 -top-3 text-[#6400dc] text-3xl font-serif select-none">
                      ❝
                    </span>
                    
                    <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
                      {item.text}
                    </p>

                    {/* Աջ մեջբերման նշան */}
                    <span className="absolute -right-6 -bottom-3 text-[#6400dc] text-3xl font-serif select-none">
                      ❞
                    </span>
                  </div>

                  {/* Հեղինակ */}
                  <div className="flex flex-col items-center">
                    <h4 className="font-bold text-neutral-900 text-sm sm:text-base">
                      {item.author}
                    </h4>
                    <span className="text-xs text-neutral-500 mt-0.5">
                      {item.role}
                    </span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Custom styles for Swiper pagination dots to match Evoca violet color */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 1 !important;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #6400dc !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}

export default Hachaxord;