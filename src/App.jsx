// trigger build
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import Header from './components/header';
import HeroSlider from './components/heroslider';
import BiometricSection from './components/biometricsection';
import BiometricTriangle from './components/biometrictriangle';
import EvocaCardsSlider from './components/evocacardsslider';
import EvocaOnlineMobile from './components/evocaonlinemobile';
import Gortsynkerner from './components/gortsynkerner';
import EvocaCalculator from './components/evocacalculator';
import Hachaxord from './components/hachaxord'; 
import Footer from './components/footer';
import Varker from './components/varker';
import BusinessVarker from './components/businessvarker'; 
import DepositsComponent from './components/avandner'; 
import BusinessAvandner from './components/businessavandner'; 
import HashivnerComponent from './components/hashivner'; 
import Pahatuper from './components/pahatuper'; 
import Poxancumner from './components/poxancumner'; 
import Arjetxter from './components/arjetxter';
import EvocaSalary from './components/evocasalary'; 
import EvocaTouch from './components/evocatouch';
import Leasing from './components/leasing'; 
import BusinessHashivner from './components/businesshashivner'; 
import Vcharumner from './components/vcharumner';
import Norutyunner from './components/norutyunner';
import MerMasin from './components/mermasin';
import Bajneterer from './components/bajneterer';
import Karucvacq from './components/karucvacq';
import Qarter from './components/qarter'; // 👈 ԱՎԵԼԱՑՎԵՑ «ՔԱՐՏԵՐ» ԲԱՂԱԴՐԻՉԻ ԻՄՊՈՐՏԸ

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // 1. Ստուգում ենք URL-ը, որ եթե նոր տաբով է բացվել (?tab=vcharumner), միանգամից բացվի վճարումների էջը
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('tab') === 'vcharumner') {
      setActiveTab('vcharumner');
    }
  }, []);

  useEffect(() => {
    const addData = async () => {
      try {
        await addDoc(collection(db, "testCollection"), {
          message: "Hello from React & Firebase!",
          time: new Date()
        });
        console.log("Document successfully written!");
      } catch (e) {
        console.error("Error writing document: ", e);
      }
    };

    addData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* 2. Header-ը չենք ցուցադրում, եթե գտնվում ենք վճարումների էջում */}
        {activeTab !== 'vcharumner' && (
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'home' && (
          <>
            <HeroSlider />
            <BiometricSection />
            <BiometricTriangle />
            <EvocaCardsSlider />
            <EvocaOnlineMobile />
            <Gortsynkerner />
            <EvocaCalculator />
            <Hachaxord />
          </>
        )}

        {activeTab === 'varker' && <Varker />}
        
        {/* 👈 «ՔԱՐՏԵՐ» ԷՋԻ ԿԱՆՉԸ */}
        {activeTab === 'cards' && <Qarter setActiveTab={setActiveTab} />}

        {activeTab === 'business-varker' && <BusinessVarker setActiveTab={setActiveTab} />}
        {activeTab === 'business-leasing' && <Leasing setActiveTab={setActiveTab} />}
        {activeTab === 'business-hashivner' && <BusinessHashivner setActiveTab={setActiveTab} />}
        {activeTab === 'deposits' && <DepositsComponent setActiveTab={setActiveTab} />}
        {activeTab === 'business-avandner' && <BusinessAvandner setActiveTab={setActiveTab} />}
        {activeTab === 'hashivner' && <HashivnerComponent setActiveTab={setActiveTab} />}
        {activeTab === 'pahatuper' && <Pahatuper setActiveTab={setActiveTab} />}
        {activeTab === 'poxancumner' && <Poxancumner setActiveTab={setActiveTab} />}
        {activeTab === 'arjetxter' && <Arjetxter setActiveTab={setActiveTab} />}
        {activeTab === 'evocasalary' && <EvocaSalary setActiveTab={setActiveTab} />}
        {activeTab === 'evocatouch' && <EvocaTouch setActiveTab={setActiveTab} />}
        
        {/* Վճարումների էջ */}
        {activeTab === 'vcharumner' && <Vcharumner setActiveTab={setActiveTab} />}

        {/* Նորությունների էջ */}
        {activeTab === 'norutyunner' && <Norutyunner setActiveTab={setActiveTab} />}

        {/* «Մեր մասին» էջ */}
        {activeTab === 'mermasin' && <MerMasin setActiveTab={setActiveTab} />}

        {/* «Բայներեր» էջ */}
        {activeTab === 'bajneterer' && <Bajneterer setActiveTab={setActiveTab} />}

        {/* «Կառուցվածք» էջ */}
        {activeTab === 'karucvacq' && <Karucvacq setActiveTab={setActiveTab} />}

        {activeTab === 'haytararutyun' && (
          <main className="max-w-7xl mx-auto px-4 py-10">
            {/* Հայտարարությունների բովանդակություն */}
          </main>
        )}
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;