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
import HashivnerComponent from './components/hashivner'; 
import Pahatuper from './components/pahatuper'; 
import Poxancumner from './components/poxancumner'; 
import Arjetxter from './components/arjetxter';
import EvocaSalary from './components/evocasalary'; 
import EvocaTouch from './components/evocatouch';
import Leasing from './components/leasing'; // 👈 Ներմուծում ենք Leasing բաղադրիչը

function App() {
  const [activeTab, setActiveTab] = useState('home');

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

  // Էջը փոխվելիս բարձրացնում ենք վերև
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Evoca բանկի վերնամասը */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Էջերի պայմանական ռենդեր ըստ activeTab-ի */}
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

        {activeTab === 'varker' && (
          <Varker />
        )}

        {activeTab === 'business-varker' && (
          <BusinessVarker setActiveTab={setActiveTab} />
        )}

        {/* Լիզինգի էջը */}
        {activeTab === 'business-leasing' && (
          <Leasing setActiveTab={setActiveTab} />
        )}

        {activeTab === 'deposits' && (
          <DepositsComponent setActiveTab={setActiveTab} />
        )}

        {activeTab === 'hashivner' && (
          <HashivnerComponent setActiveTab={setActiveTab} />
        )}

        {activeTab === 'pahatuper' && (
          <Pahatuper setActiveTab={setActiveTab} />
        )}

        {activeTab === 'poxancumner' && (
          <Poxancumner setActiveTab={setActiveTab} />
        )}

        {activeTab === 'arjetxter' && (
          <Arjetxter setActiveTab={setActiveTab} />
        )}

        {activeTab === 'evocasalary' && (
          <EvocaSalary setActiveTab={setActiveTab} />
        )}

        {activeTab === 'evocatouch' && (
          <EvocaTouch setActiveTab={setActiveTab} />
        )}

        {activeTab === 'haytararutyun' && (
          <main className="max-w-7xl mx-auto px-4 py-10">
            {/* Հայտարարությունների բովանդակություն */}
          </main>
        )}
      </div>

      {/* ՄԻԱԿ ԵՎ ՎԵՐՋԻՆ FOOTER-Ը ԱՄԵՆԱՎԵՐՋՈՒՄ */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;