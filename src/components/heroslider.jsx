import React, { useState, useEffect } from 'react';

// Evoca կայքի իրական 10 սլայդները
const slides = [
  {
    id: 1,
    title: "Evoca Travel Card",
    description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
    buttonText: "Իմանալ ավելին",
    bgColor: "bg-neutral-100 text-neutral-900",
    textColor: "text-neutral-600",
    btnColor: "bg-purple-700 hover:bg-purple-800 text-white",
    cardImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Evoca Աշխատավարձային նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    buttonText: "Իմանալ ավելին",
    bgColor: "bg-purple-700 text-white",
    textColor: "text-purple-100",
    btnColor: "bg-white text-purple-900 hover:bg-neutral-100",
    cardImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Կարճ հեռախոսահամար՝ 8444",
    description: "Բարի գալուստ, Evocabank: Մենք սպասում ենք Ձեր զանգին...",
    buttonText: "Իմանալ ավելին",
    bgColor: "bg-neutral-900 text-white",
    textColor: "text-neutral-300",
    btnColor: "bg-white text-neutral-900 hover:bg-neutral-200",
    cardImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Visa Vision",
    description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
    buttonText: "Իմանալ ավելին",
    bgColor: "bg-neutral-900 text-white",
    textColor: "text-neutral-300",
    btnColor: "bg-white text-neutral-900 hover:bg-neutral-200",
    cardImage: "https://images.unsplash.com/photo-1556742049-0a67d553c2ec?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Visa Infinite",
    description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
    buttonText: "Իմանալ ավելին",
    bgColor: "bg-neutral-900 text-white",
    textColor: "text-neutral-300",
    btnColor: "bg-white text-neutral-900 hover:bg-neutral-200",
    cardImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Հիփոթեքային վարկեր Evocabank-ում՝ ամենահարմար պայմաններով",
    description: "Ձեռք բեր քո երազանքի բնակարանը՝ ցածր տոկոսադրույքով:",
    buttonText: "Իմանալ ավելին",
    bgColor: "bg-purple-200 text-neutral-900",
    textColor: "text-neutral-700",
    btnColor: "bg-purple-700 hover:bg-purple-800 text-white",
    cardImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    title: "UnionPay Gold",
    description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
    buttonText: "Իմանալ ավելին",
    bgColor: "bg-amber-100 text-neutral-900",
    textColor: "text-neutral-700",
    btnColor: "bg-purple-700 hover:bg-purple-800 text-white",
    cardImage: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
    description: "Դի'ր ավանդ Evocabank-ում՝ բարձր, շա'տ բարձր տոկոսներով:",
    buttonText: "Ծանոթանալ պայմաններին",
    bgColor: "bg-pink-100 text-neutral-900",
    textColor: "text-neutral-700",
    btnColor: "bg-purple-700 hover:bg-purple-800 text-white",
    cardImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    title: "Evoca Digital",
    description: "Կառավարիր քո ֆինանսներն առցանց՝ ցանկացած պահի, ցանկացած վայրում",
    buttonText: "Ներբեռնել հավելվածը",
    bgColor: "bg-purple-900 text-white",
    textColor: "text-purple-200",
    btnColor: "bg-white text-purple-900 hover:bg-neutral-100",
    cardImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    title: "Բիզնես լուծումներ Evoca-ից",
    description: "Զարգացրու քո բիզնեսը մեր նորարարական բանկային պրոդուկտների հետ",
    buttonText: "Սկսել հիմա",
    bgColor: "bg-blue-900 text-white",
    textColor: "text-blue-200",
    btnColor: "bg-white text-blue-900 hover:bg-neutral-100",
    cardImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
  }
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ավտոմատ փոխվելու ֆունկցիա (ամեն 6 վայրկյանը մեկ)
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
    <div className={`relative w-full py-16 lg:py-24 overflow-hidden rounded-b-[40px] shadow-sm transition-colors duration-700 ${currentSlide.bgColor}`}>
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
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-500">
            <img 
              src={currentSlide.cardImage} 
              alt={currentSlide.title} 
              className="w-full h-auto object-cover rounded-3xl shadow-2xl border border-white/20"
            />
          </div>
        </div>

      </div>

      {/* Ներքևի նավիգացիա (Սլաքներ և բոլոր 10 կետերը) */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center space-x-4">
        {/*Ձախ սլաք*/}
        <button 
          onClick={prevSlide}
          className="text-current opacity-80 hover:opacity-100 text-2xl font-bold cursor-pointer transition-opacity"
        >
          ←
        </button>

        {/*10 հատ կետերը (dots)*/}
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

        {/*Աջ սլաք*/}
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