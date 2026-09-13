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

function App() {
  const [activeTab, setActiveTab] = useState('home');

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
      {/* Հեդեր՝ փոխանցվող ֆունկցիայով և ընթացիկ թաբով */}
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
      {activeTab === 'mermasin' && <Mermasin />}
    </div>
  );
}

export default App;