import React, { useState } from 'react';

function Online() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // YouTube լինքից վերցնում ենք վիդեոյի ID-ն (KwAgMHEx8ys) մոդալ պատուհանի համար
  const videoEmbedUrl = "https://www.youtube.com/embed/KwAgMHEx8ys?autoplay=1";

  return (
    <div className="w-full bg-white font-sans py-12">
      {/* Հիմնական մանուշակագույն բլոկը՝ ֆոնի ճշգրիտ կորություններով */}
      <div className="relative max-w-7xl mx-auto bg-[#6400dc] rounded-t-[50px] rounded-b-[50px] overflow-hidden py-20 px-8 lg:px-16 shadow-2xl">
        
        {/* Ֆոնի դեկորատիվ երկրաչափական պատկերներ (օղակ, եռանկյուն, սլաքներ, կետեր) */}
        <div className="absolute top-12 left-16 w-8 h-8 rounded-full bg-purple-400 opacity-60 flex items-center justify-center text-white font-bold text-xs">
          0
        </div>
        <div className="absolute bottom-16 left-12 grid grid-cols-4 gap-1 opacity-40">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-yellow-400 rotate-45"></div>
        <div className="absolute top-10 right-20 w-6 h-6 border-2 border-white opacity-40 rotate-12"></div>
        <div className="absolute top-1/3 right-12 text-white opacity-50 text-2xl font-bold">▶</div>
        <div className="absolute bottom-1/4 right-16 w-6 h-6 bg-pink-400 opacity-50 transform rotate-45"></div>
        <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-purple-300 rounded-full opacity-60"></div>

        {/* Բովանդակության կառուցվածքը (Grid 2 սյունակ) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Ձախ մաս՝ Նոութբուք, հեռախոս և վիդեո նվագարկիչ */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative flex items-center justify-center">
              
              {/* Նոութբուքի պատկերը */}
              <div className="relative w-full max-w-[520px]">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
                  alt="Evoca Online Laptop" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />

                {/* Վիդեոյի գործարկման կոճակը նոութբուքի էկրանի վրա */}
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute top-[46%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer group"
                  title="Դիտել տեսանյութը"
                >
                  <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-white ml-1 group-hover:scale-105 transition-transform"></div>
                </button>
              </div>

              {/* Կողքի հեռախոսի պատկերը՝ դրված նոութբուքի վրա */}
              <div className="absolute -right-4 sm:-right-8 bottom-4 w-28 sm:w-36 drop-shadow-2xl">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                  alt="Evoca Mobile App Phone" 
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>

            </div>
          </div>

          {/* Աջ մաս՝ Տեքստ, կոճակ, QR կոդ և հավելվածների խանութներ */}
          <div className="lg:col-span-5 text-white space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
              Օնլայն և մոբայլ բանկինգ
            </h2>
            <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>

            {/* «Դառնալ հաճախորդ» կոճակ */}
            <div>
              <button className="bg-white text-[#6400dc] px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-purple-50 transition-colors cursor-pointer">
                Դառնալ հաճախորդ
              </button>
            </div>

            {/* QR կոդ և հավելվածների ներբեռնման բաժին */}
            <div className="pt-4 flex items-center space-x-6">
              {/* QR Code */}
              <div className="bg-white p-2 rounded-xl shadow-md flex-shrink-0">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                  alt="QR Code" 
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Ներբեռնման հղումներ և տեքստ */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-200">
                  Ներբեռնել հավելվածը՝
                </p>
                <div className="flex flex-col space-y-2">
                  <a 
                    href="https://apps.apple.com/am/app/evoca/id1454159801" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                      alt="App Store" 
                      className="h-8 object-contain hover:opacity-90 transition-opacity"
                    />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=am.evocabank.mobile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                      alt="Google Play" 
                      className="h-8 object-contain hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* YouTube Վիդեոյի Մոդալ Պատուհան (Modal) */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Փակելու կոճակ */}
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center text-xl font-bold transition-colors cursor-pointer"
            >
              ✕
            </button>
            {/* Տեսանյութի Iframe */}
            <div className="relative w-full aspect-video">
              <iframe 
                className="w-full h-full"
                src={videoEmbedUrl} 
                title="Evocabank Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Online;