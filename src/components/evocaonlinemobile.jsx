import React from 'react';

function EvocaOnlineMobile() {
  return (
    <section className="relative bg-white overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Մանուշակագույն բլոկ՝ ձախ կողմի կլորացված/կորացված եզրով */}
        <div className="relative bg-[#6400dc] rounded-tr-[80px] rounded-bl-[80px] lg:rounded-tr-[120px] lg:rounded-bl-[120px] overflow-hidden py-16 px-6 lg:px-16 text-white">
          
          {/* Ֆոնային դեկորատիվ տարրեր (եռանկյուններ, կետեր, զարդանախշեր) */}
          <div className="absolute top-12 left-1/4 w-6 h-6 bg-pink-400 rounded-full opacity-60 blur-[1px]"></div>
          <div className="absolute top-10 right-1/4 w-8 h-8 border-4 border-purple-400 rotate-45 opacity-50"></div>
          <div className="absolute bottom-12 left-10 grid grid-cols-5 gap-1.5 opacity-40">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
            ))}
          </div>
          <div className="absolute bottom-10 right-12 w-6 h-6 border-2 border-pink-300 rotate-12 opacity-60"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
            
            {/* Ձախ և մեջտեղի մաս՝ Համակարգիչ + Հեռախոս */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8">
              
              {/* Համակարգչի նկար */}
              <div className="w-full max-w-[420px] lg:max-w-[485px] transition-transform duration-300 hover:scale-[1.02]">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
                  alt="Evocabank Online Banking on Laptop" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Հեռախոսի նկար */}
              <div className="w-[130px] lg:w-[140px] shrink-0 transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                  alt="Evocabank Mobile App" 
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>

            </div>

            {/* Աջ մաս՝ Տեքստեր, Կոճակ, QR և Հավելվածների խանութներ */}
            <div className="lg:col-span-5 text-left space-y-6">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Օնլայն և մոբայլ բանկինգ
              </h2>

              <p className="text-purple-100 text-base sm:text-lg leading-relaxed font-normal max-w-lg">
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
              </p>

              <div>
                <button 
                  onClick={() => alert('Բացվում է հաճախորդ դառնալու էջը...')}
                  className="bg-white text-[#6400dc] hover:bg-neutral-100 font-extrabold px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer text-base"
                >
                  Դառնալ հաճախորդ
                </button>
              </div>

              {/* QR կոդ և հավելվածների ներբեռնման կոճակներ */}
              <div className="pt-4 flex items-center gap-5">
                {/* QR կոդ */}
                <div className="bg-white p-2 rounded-xl shadow-md shrink-0">
                  <img 
                    src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                    alt="QR Code to download app" 
                    className="w-[85px] h-[85px] object-contain"
                  />
                </div>

                {/* Տեքստ և App Store / Google Play կոճակներ */}
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-semibold text-purple-200 block">
                    Ներբեռնել հավելվածները՝
                  </span>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    {/* App Store */}
                    <a 
                      href="https://apps.apple.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block transition-transform hover:scale-105"
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                        alt="Download on the App Store" 
                        className="h-[34px] w-auto"
                      />
                    </a>

                    {/* Google Play */}
                    <a 
                      href="https://play.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block transition-transform hover:scale-105"
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                        alt="Get it on Google Play" 
                        className="h-[34px] w-auto"
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