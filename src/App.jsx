import { useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import Header from './components/header';
import HeroSlider from './components/heroslider';
import BiometricSection from './components/biometricsection';
import BestEvocabankSection from './components/bestevocabanksection'; 
import EvocaCardsSlider from './components/evocacardslider'; 
import EvocaCalculator from './components/evocacalculator'; 

// Օնլայն և մոբայլ բանկինգի բլոկը ուղղակիորեն այստեղ
function EvocaOnlineMobile() {
  return (
    <section className="relative bg-white overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#6400dc] rounded-tr-[80px] rounded-bl-[80px] lg:rounded-tr-[120px] lg:rounded-bl-[120px] overflow-hidden py-16 px-6 lg:px-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
            
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8">
              <div className="w-full max-w-[420px] lg:max-w-[485px]">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
                  alt="Laptop" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
              <div className="w-[130px] lg:w-[140px] shrink-0">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                  alt="Phone" 
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>

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

              <div className="pt-4 flex items-center gap-5">
                <div className="bg-white p-2 rounded-xl shadow-md shrink-0">
                  <img 
                    src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                    alt="QR Code" 
                    className="w-[85px] h-[85px] object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-semibold text-purple-200 block">
                    Ներբեռնել հավելվածները՝
                  </span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-[34px] w-auto" />
                    </a>
                    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-[34px] w-auto" />
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

function App() {
  useEffect(() => {
    const addData = async () => {
      try {
        await addDoc(collection(db, "testCollection"), {
          message: "Hello from React & Firebase!",
          time: new Date()
        });
      } catch (e) {
        console.error("Error writing document: ", e);
      }
    };
    addData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSlider />
      <EvocaOnlineMobile />
      <BiometricSection />
      <BestEvocabankSection />
      <EvocaCardsSlider />
      <EvocaCalculator />
    </div>
  );
}

export default App;