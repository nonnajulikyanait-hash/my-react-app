import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import Header from './components/header';
import HeroSlider from './components/heroslider';
import BiometricSection from './components/biometricsection';
import BestEvocabankSection from './components/bestevocabanksection'; 
import EvocaCardsSlider from './components/evocacardslider'; 
import EvocaCalculator from './components/evocacalculator'; 
import Varker from './components/varker'; 
import Karter from './components/karter'; 
import AkntartayinVcharumner from './components/akntartayinvcharumner';
import Mermasin from './components/mermasin';
import Karucvacq from './components/karucvacq';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSubTab, setActiveSubTab] = useState('Ընդհանուր');

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
      {/* Հեդերը մնում է բոլոր էջերի համար */}
      <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      
      {/* Գլխավոր էջի բովանդակություն */}
      {activeTab === 'home' && (
        <>
          <HeroSlider />
          <BiometricSection />
          <BestEvocabankSection />
          <EvocaCardsSlider />
          <EvocaCalculator />
        </>
      )}

      {/* Երբ սեղմում ես Բիզնես կամ Վարկեր */}
      {(activeTab === 'biznes' || activeTab === 'varker') && <Varker />}

      {/* Երբ սեղմում ես Քարտեր */}
      {activeTab === 'karter' && <Karter />}

      {/* Երբ սեղմում ես Ակնթարթային վճարումներ */}
      {activeTab === 'akntartayinVcharumner' && <AkntartayinVcharumner />}

      {/* Երբ սեղմում ես Մեր մասին */}
      {activeTab === 'mermasin' && (
        <>
          {activeSubTab === 'Ընդհանուր' && (
            <Mermasin setActiveSubTab={setActiveSubTab} activeSubTab={activeSubTab} />
          )}
          {activeSubTab === 'Կառուցվածք' && (
            <>
              {/* Մանուշակագույն ենթաթաբերի նավիգացիան Կառուցվածքի էջում */}
              <div className="bg-[#6400dc] text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-6 py-3 text-sm font-medium whitespace-nowrap scrollbar-none">
                  {[
                    'Ընդհանուր',
                    'Կառուցվածք',
                    'Բաժնետերեր',
                    'Ղեկավարություն',
                    'Գործընկերներ',
                    'Մրցանակներ',
                    'CSR',
                    'Էվոկա ֆինանսական խումբ',
                  ].map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSubTab(tab)}
                      className={`pb-1 transition-colors hover:text-purple-200 cursor-pointer bg-transparent border-0 ${
                        activeSubTab === tab ? 'border-b-2 border-white font-bold' : ''
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <Karucvacq />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;