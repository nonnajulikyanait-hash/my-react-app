import React, { useState } from 'react';

function EvocaOnlineMobile() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        
        {/* Մանուշակագույն կոր բլոկ */}
        <div className="relative bg-[#6400dc] rounded-t-[80px] sm:rounded-t-[120px] rounded-b-[40px] pt-12 pb-16 px-6 lg:px-16 text-white overflow-hidden shadow-2xl">
          
          {/* Ֆոնային դեկորատիվ տարրեր (պատկերին համապատասխան եռանկյունի, կետեր և այլն) */}
          <div className="absolute top-10 left-12 w-6 h-6 bg-[#ffcc00] transform rotate-12 rounded-xs opacity-90 hidden sm:block"></div>
          <div className="absolute bottom-10 left-8 w-4 h-4 bg-[#ff3366] transform -rotate-12 rounded-xs opacity-90 hidden sm:block"></div>
          <div className="absolute top-8 right-16 w-8 h-8 text-[#ffcc00] opacity-80 hidden sm:block">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 22 21 2 21" /></svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Ձախ մաս՝ Նոթբուք և Հեռախոս */}
            <div className="w-full lg:w-7/12 flex items-center justify-center relative">
              
              {/* Կոմպյուտերի նկար / Վիդեո բլոկ */}
              <div className="relative w-full max-w-[480px]">
                {!isPlaying ? (
                  <div className="relative cursor-pointer group" onClick={() => setIsPlaying(true)}>
                    <img 
                      src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
                      alt="Online Banking Laptop" 
                      className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
                    />
                    {/* Play կոճակը կենտրոնում՝ հենց նկարի վրա */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#6400dc]/80 group-hover:bg-[#6400dc] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 border-2 border-white/80">
                        <svg className="w-8 h-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-[16/10] bg-black rounded-lg overflow-hidden shadow-2xl">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/KwAgMHEx8ys?autoplay=1" 
                      title="Evocabank Video" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Հեռախոսի նկար (դրված է նոթբուքի վրա՝ աջ մասում) */}
              <div className="absolute -right-2 sm:right-4 bottom-[-20px] sm:bottom-[-10px] w-[90px] sm:w-[110px] drop-shadow-2xl z-10">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                  alt="Mobile Banking Phone" 
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>

            </div>

            {/* Աջ մաս՝ Տեքստեր, QR կոդ և Կոճակներ */}
            <div className="w-full lg:w-5/12 text-left flex flex-col space-y-5">
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Օնլայն և մոբայլ բանկինգ
              </h2>

              <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
              </p>

              <div>
                <a 
                  href="#register" 
                  className="inline-block bg-white text-[#6400dc] hover:bg-neutral-100 font-bold px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105 text-sm sm:text-base"
                >
                  Դառնալ հաճախորդ
                </a>
              </div>

              {/* QR կոդ և Հավելվածների խանութներ */}
              <div className="pt-4 border-t border-purple-400/30">
                <span className="text-xs text-purple-200 block mb-3 font-medium">
                  Ներբեռնել հավելվածները՝
                </span>

                <div className="flex items-center gap-4">
                  {/* QR կոդ */}
                  <div className="bg-white p-1 rounded-lg shadow-md shrink-0">
                    <img 
                      src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                      alt="QR Code" 
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />
                  </div>

                  {/* App Store / Google Play կոճակներ */}
                  <div className="flex flex-col space-y-2">
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                        alt="App Store" 
                        className="h-8 sm:h-9 object-contain"
                      />
                    </a>
                    <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                        alt="Google Play" 
                        className="h-8 sm:h-9 object-contain"
                      />
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default EvocaOnlineMobile;