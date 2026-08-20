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
      // Սկզբում մարում ենք նկարը (fade out)
      setIsVisible(false);

      setTimeout(() => {
        // Փոխում ենք ինդեքսը
        setFaceIndex((prevIndex) => (prevIndex + 1) % faces.length);
        // Հայտնում ենք նոր նկարը (fade in)
        setIsVisible(true);
      }, 400); // Կիսաթափանցիկության փոփոխման ժամանակը

    }, 3500); // Ամեն 3.5 վայրկյանը մեկ

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Ձախ մաս (Դեմքի նկարը և հետնամասի եռանկյունին) */}
        <div className="lg:w-1/2 flex justify-center items-center relative mb-10 lg:mb-0">
          <div className="relative flex justify-center items-center">
            {/* Հետնամասի մանուշակագույն եռանկյունի ֆոն */}
            <div className="absolute w-[320px] h-[320px] bg-[#6400DC] rounded-[40px] rotate-45 opacity-10 pointer-events-none"></div>
            
            {/* Անընդհատ հայտնվող և փոխվող դեմքի նկարը */}
            <img 
              src={faces[faceIndex]} 
              alt="Biometric Identification" 
              className={`w-full max-w-[380px] h-auto object-contain relative z-10 transition-opacity duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
        </div>

        {/* Աջ մաս (Վերնագիր, նկարագրություն, QR կոդ և կոճակ) */}
        <div className="lg:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-lg text-neutral-600 max-w-lg">
            Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            {/* QR կոդի նկարը */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-neutral-100">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="Biometric QR Code" 
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Իմանալ ավելին կոճակ */}
            <div>
              <button className="font-bold text-base px-8 py-3.5 rounded-full text-white bg-[#6400DC] transition-all shadow-md cursor-pointer hover:opacity-90">
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