import React, { useState, useEffect } from 'react';

const slides = [
  { id: 1, title: "Evoca Travel Card", description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը", buttonText: "Իմանալ ավելին", bgColor: "#dadada", textColor: "#333333", cardImage: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png" },
  { id: 2, title: "Evoca Աշխատավարձային նախագիծ", description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...", buttonText: "Իմանալ ավելին", bgColor: "#6539aa", textColor: "#FFFFFF", cardImage: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png" },
  { id: 3, title: "Կարճ հեռախոսահամար՝ 8444", description: "Բարի գալուստ, Evocabank: Մենք սպասում ենք Ձեր զանգին...", buttonText: "Իմանալ ավելին", bgColor: "#000000", textColor: "#CCCCCC", cardImage: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png" },
  { id: 4, title: "Visa Vision", description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով...", buttonText: "Իմանալ ավելին", bgColor: "#27292b", textColor: "#CCCCCC", cardImage: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg" },
  { id: 5, title: "Visa Infinite", description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա", buttonText: "Իմանալ ավելին", bgColor: "#000000", textColor: "#CCCCCC", cardImage: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg" },
  { id: 6, title: "Հիփոթեքային վարկեր Evocabank-ում", description: "Ձեռք բեր քո երազանքի բնակարանը՝ ցածր տոկոսադրույքով:", buttonText: "Իմանալ ավելին", bgColor: "#e6d2ff", textColor: "#333333", cardImage: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg" },
  { id: 7, title: "UnionPay Gold", description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը", buttonText: "Իմանալ ավելին", bgColor: "#b6a44f", textColor: "#fef3c7", cardImage: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png" },
  { id: 8, title: "Օնլայն ավանդ EvocaTOUCH", description: "Դի’ր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:", buttonText: "Ծանոթանալ պայմաններին", bgColor: "#FFDCFB", textColor: "#333333", cardImage: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg" }
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full py-16 lg:py-24 overflow-hidden rounded-bl-[40px] rounded-br-[140px] shadow-sm transition-colors duration-700" style={{ backgroundColor: currentSlide.bgColor }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between min-h-[350px]">
        
        <div className="lg:w-1/2 space-y-6 text-left z-10" style={{ color: currentSlide.textColor }}>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tight">{currentSlide.title}</h1>
          <p className="text-lg lg:text-xl max-w-lg">{currentSlide.description}</p>
          <button className="font-bold text-base px-8 py-3.5 rounded-full text-white transition-all shadow-md cursor-pointer hover:opacity-90" style={{ backgroundColor: "#6400DC" }}>
            {currentSlide.buttonText}
          </button>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center relative">
          <img src={currentSlide.cardImage} alt={currentSlide.title} className="w-full max-h-[380px] object-contain rounded-3xl" />
        </div>
      </div>

      {/* Նավիգացիա */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center space-x-4">
        <button onClick={() => setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1))} className="text-current opacity-60 hover:opacity-100 text-3xl font-bold cursor-pointer">←</button>
        <div className="flex space-x-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} className={`h-2.5 rounded-full transition-all ${currentIndex === i ? 'w-8 bg-current' : 'w-2.5 bg-current opacity-30'}`} />
          ))}
        </div>
        <button onClick={() => setCurrentIndex(prev => (prev + 1) % slides.length)} className="text-current opacity-60 hover:opacity-100 text-3xl font-bold cursor-pointer">→</button>
      </div>
    </div>
  );
}

export default HeroSlider;