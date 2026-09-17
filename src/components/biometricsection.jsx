import React, { useState, useEffect } from 'react';

// Բոլոր 3 դեմքերի նկարների զանգվածը
const faces = [
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png",
  "https://www.evoca.am/img/temp/biometric/face3.png"
];

function BiometricSection() {
  const [faceIndex, setFaceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setFaceIndex((prevIndex) => (prevIndex + 1) % faces.length);
        setIsVisible(true);
      }, 400);

    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս (Մանուշակագույն ֆոն և դեմքի նկար) */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <div className="relative flex justify-center items-center w-[320px] h-[320px] sm:w-[360px] sm:h-[360px]">
            
            {/* Հետնամասի մանուշակագույն կլորացված ձևը (Evoca-ի ոճով) */}
            <div 
              className="absolute w-[280px] h-[300px] sm:w-[310px] sm:h-[330px] bg-[#6400DC] rounded-[130px_130px_40px_40px] pointer-events-none"
            ></div>
            
            {/* Անընդհատ հայտնվող և փոխվող դեմքի նկարը */}
            <img 
              src={faces[faceIndex]} 
              alt="Biometric Identification" 
              className={`w-[250px] sm:h-[280px] object-cover relative z-10 transition-opacity duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
        </div>

        {/* Աջ մաս (Վերնագիր, նկարագրություն, QR կոդ և կոճակ) */}
        <div className="lg:w-1/2 space-y-4 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-neutral-900 tracking-tight leading-snug">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
            Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex flex-row items-center gap-6 pt-2">
            {/* QR կոդի բլոկ */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-neutral-100 shrink-0">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="Biometric QR Code" 
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
              />
            </div>

            {/* Իմանալ ավելին կոճակ */}
            <div>
              <button className="font-semibold text-sm sm:text-base px-7 py-3 rounded-full text-white bg-[#6400DC] transition-all shadow-md cursor-pointer hover:opacity-90">
                Իմանալ ավելին
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BiometricSection;