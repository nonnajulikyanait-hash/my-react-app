import React, { useState, useEffect } from 'react';

// Evoca կայքի իրական 10 սլայդները
const slides = [
  {
    id: 1,
    title: "Evoca Travel Card",
    description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
    buttonText: "Իմանալ ավելին",
    bgColor: "#dadada",
    textColor: "#333333",
    btnColor: "#6400DC",
    cardImage: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png"
  },
  {
    id: 2,
    title: "Evoca Աշխատավարձային նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    buttonText: "Իմանալ ավելին",
    bgColor: "#6539aa",
    textColor: "#CCCCCC",
    btnColor: "#FFFFFF",
    cardImage: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png"
  },
  {
    id: 3,
    title: "Կարճ հեռախոսահամար՝ 8444",
    description: "Բարի գալուստ, Evocabank: Մենք սպասում ենք Ձեր զանգին...",
    buttonText: "Իմանալ ավելին",
    bgColor: "#000000",
    textColor: "CCCCCC",
    btnColor: "#FFFFFF",
    cardImage: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png"
  },
  {
    id: 4,
    title: "Visa Vision",
    description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
    buttonText: "Իմանալ ավելին",
    bgColor: "#27292b;",
    textColor: "#CCCCCC",
    btnColor: "#FFFFFF",
    cardImage: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg"
  },
  {
    id: 5,
    title: "Visa Infinite",
    description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
    buttonText: "Իմանալ ավելին",
    bgColor: "#000000",
    textColor: "#CCCCCC",
    btnColor: "#FFFFFF",
    cardImage: "https://www.evoca.am/images-cache/sliders/1/168561…3579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg"
  },
  {
    id: 6,
    title: "Հիփոթեքային վարկեր Evocabank-ում՝ ամենահարմար պայմաններով",
    description: "Ձեռք բեր քո երազանքի բնակարանը՝ ցածր տոկոսադրույքով:",
    buttonText: "Իմանալ ավելին",
    bgColor: "#e6d2ff",
    textColor: "text-neutral-700",
    btnColor: "#6400DC",
    cardImage: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg"
  },
  {
    id: 7,
    title: "UnionPay Gold",
    description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
    buttonText: "Իմանալ ավելին",
    bgColor: "#b6a44f", 
    textColor: "text-amber-100",
    btnColor: "#6400Dc",
    cardImage: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png"
  },
  {
    id: 8,
    title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
    description: "Դի’ր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:",
    buttonText: "Ծանոթանալ պայմաններին",
    bgColor: "FFDCFB",
    textColor: "text-neutral-700",
    btnColor: "#6400DC",
    cardImage: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg"
  }
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    // Ավելացվել է rounded-br-[120px]՝ աջ ներքևի անկյունում կորություն ստեղծելու համար (ինչպես իրական կայքում)
    <div className={`relative w-full py-16 lg:py-24 overflow-hidden rounded-bl-[40px] rounded-br-[140px] shadow-sm transition-colors duration-700 ${currentSlide.bgColor}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between min-h-[350px]">
        
        {/* Ձախ մաս (Վերնագիր, նկարագրություն, կոճակ) */}
        <div className="lg:w-1/2 space-y-6 text-left z-10">
          <h1 className="text-4xl lg:text-6xl font-black tracking-tight transition-all duration-500">
            {currentSlide.title}
          </h1>
          <p className={`text-lg lg:text-xl max-w-lg transition-all duration-500 ${currentSlide.textColor}`}>
            {currentSlide.description}
          </p>
          <div>
            <button className={`font-bold text-base px-8 py-3.5 rounded-full transition-all shadow-md cursor-pointer ${currentSlide.btnColor}`}>
              {currentSlide.buttonText}
            </button>
          </div>
        </div>

        {/* Աջ մաս (Նկարը) */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center relative">
          <div className="relative w-full max-w-sm lg:max-w-md transition-transform duration-500">
            <img 
              src={currentSlide.cardImage} 
              alt={currentSlide.title} 
              className="w-full max-h-[380px] object-contain rounded-3xl"
            />
          </div>
        </div>

      </div>

      {/* Ներքևի նավիգացիա (Սլաքներ և բոլոր 10 կետերը) */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center space-x-4">
        <button 
          onClick={prevSlide}
          className="text-current opacity-80 hover:opacity-100 text-2xl font-bold cursor-pointer transition-opacity"
        >
          ←
        </button>

        <div className="flex items-center space-x-1.5 overflow-x-auto px-2 py-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? 'w-8 bg-current' : 'w-2.5 bg-current opacity-30'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="text-current opacity-80 hover:opacity-100 text-2xl font-bold cursor-pointer transition-opacity"
        >
          →
        </button>
      </div>

    </div>
  );
}

export default HeroSlider;