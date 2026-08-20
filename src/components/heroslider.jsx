import React, { useState, useEffect } from 'react';

// Սլայդերի տվյալների զանգվածը (կարող եք ավելացնել շատ սլայդեր)
const slides = [
  {
    id: 1,
    title: "Evoca Travel Card",
    description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
    buttonText: "Իմանալ ավելին",
    // Ժամանակավոր նկար (կարող եք փոխել ձեր նկարի հղումով կամ import անել)
    cardImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Evoca Digital Card",
    description: "Բացահայտիր թվային բանկինգի նոր հորիզոններ անվտանգ և արագ լուծումներով",
    buttonText: "Պատվիրել հիմա",
    cardImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Ապառիկ տեղում",
    description: "Գնիր այսօր, վճարիր հետո՝ առանց հավելյալ բարդությունների և թղթաբանության",
    buttonText: "Մանրամասն",
    cardImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
  }
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ավտոմատ փոխվելու ֆունկցիա (ըստ ցանկության, ամեն 5 վայրկյանը մեկ)
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
    <div className="relative w-full bg-neutral-100 py-16 lg:py-24 overflow-hidden rounded-b-[40px] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between min-h-[350px]">
        
        {/* Ձախ մաս (Վերնագիր, նկարագրություն, կոճակ) */}
        <div className="lg:w-1/2 space-y-6 text-left z-10">
          <h1 className="text-4xl lg:text-6xl font-black text-neutral-900 tracking-tight transition-all duration-500">
            {currentSlide.title}
          </h1>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-lg transition-all duration-500">
            {currentSlide.description}
          </p>
          <div>
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-base px-8 py-3.5 rounded-full transition-all shadow-md cursor-pointer">
              {currentSlide.buttonText}
            </button>
          </div>
        </div>

        {/* Աջ մաս (Քարտի նկարը) */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-500">
            <img 
              src={currentSlide.cardImage} 
              alt={currentSlide.title} 
              className="w-full h-auto object-cover rounded-3xl shadow-2xl border border-white/40"
            />
          </div>
        </div>

      </div>

      {/* Ներքևի նավիգացիա (Սլաքներ և կետեր) */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center space-x-6">
        {/*Ձախ սլաք*/}
        <button 
          onClick={prevSlide}
          className="text-purple-700 hover:text-purple-900 text-2xl font-bold cursor-pointer transition-colors"
        >
          ←
        </button>

        {/*Կետեր (dots)*/}
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? 'w-8 bg-purple-700' : 'w-2.5 bg-neutral-300'
              }`}
            />
          ))}
        </div>

        {/*Աջ սլաք*/}
        <button 
          onClick={nextSlide}
          className="text-purple-700 hover:text-purple-900 text-2xl font-bold cursor-pointer transition-colors"
        >
          →
        </button>
      </div>

    </div>
  );
}

export default HeroSlider;