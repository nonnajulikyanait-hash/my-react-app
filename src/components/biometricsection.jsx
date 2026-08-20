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
    <section className="py-20 lg:py-32 bg-white overflow-hidden mt-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Ձախ մաս (Դեմքի նկարը և հետնամասի ճիշտ շրջված եռանկյունին) */}
        <div className="lg:w-1/2 flex justify-center items-center relative mb-12 lg:mb-0">
          <div className="relative flex justify-center items-center w-[380px] h-[380px]">
            
            {/* Հետնամասի մանուշակագույն շրջված եռանկյունի (Evoca ոճով) */}
            <div 
              className="absolute w-[300px] h-[300px] bg-[#6400DC] rounded-[36px] pointer-events-none"
              style={{
                clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)"
              }}
            ></div>
            
            {/* Անընդհատ հայտնվող և փոխվող դեմքի նկարը */}
            <img 
              src={faces[faceIndex]} 
              alt="Biometric Identification" 
              className={`w-full max-w-[340px] h-auto object-contain relative z-10 transition-opacity duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
        </div>

        {/* Աջ մաս (Վերնագիր, նկարագրություն, մեծացված QR կոդ և կոճակ) */}
        <div className="lg:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl lg:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-lg leading-relaxed">
            Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
            {/* Մեծացված QR կոդի բլոկ */}
            <div className="bg-white p-3 rounded-3xl shadow-md border border-neutral-100">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="Biometric QR Code" 
                className="w-40 h-40 object-contain"
              />
            </div>

            {/* Իմանալ ավելին կոճակ */}
            <div>
              <button className="font-bold text-base px-9 py-4 rounded-full text-white bg-[#6400DC] transition-all shadow-lg cursor-pointer hover:opacity-90">
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