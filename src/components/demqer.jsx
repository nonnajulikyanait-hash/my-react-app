import React, { useState, useEffect } from 'react';

export default function Demqer() {
  const images = [
    "https://www.evoca.am/img/temp/biometric/face3.png",
    "https://www.evoca.am/img/temp/biometric/face2.png",
    "https://www.evoca.am/img/temp/biometric/face1.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Ավտոմատ փոխվելու լոգիկան (3 վայրկյանը մեկ)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-gradient-to-r from-[#512595] to-[#6812cb] rounded-[40px] p-8 md:p-[50px_60px] flex flex-col md:flex-row items-center justify-between max-w-[1000px] w-full text-white relative overflow-hidden shadow-xl">
        
        {/* Ձախ մաս՝ նկար և բիոմետրիկ շրջանակ */}
        <div className="relative w-[320px] h-[320px] flex items-center justify-center shrink-0">
          {/* Մանուշակագույն ֆոնային կոնտեյներ */}
          <div className="absolute w-[290px] h-[310px] bg-[#8b3cfc] rounded-[130px_130px_40px_40px] z-10"></div>
          
          {/* Նկարների սլայդեր */}
          <div className="relative w-[260px] h-[260px] z-20 rounded-full overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Biometric Face ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Աջ մաս՝ տեքստ և QR կոդ */}
        <div className="max-w-[500px] mt-8 md:mt-0 md:ml-10 text-center md:text-left">
          <h2 className="text-2xl md:text-[32px] font-bold leading-tight mb-5">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-base leading-relaxed text-[#e0d4fc] mb-7">
            Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր քո հաշիվը և ստացիր քարտ
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            {/* QR Կոդ */}
            <div className="w-[110px] h-[110px] bg-white p-2 rounded-xl shadow-md shrink-0">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="QR Code" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Կոճակ */}
            <div>
              <a 
                href="https://www.evoca.am/hy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#7c2ae8] hover:bg-[#8c3ae9] text-white font-semibold py-3 px-8 rounded-full border-2 border-[#9b51e0] shadow-lg transition duration-300"
              >
                Իմանալ ավելին
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}