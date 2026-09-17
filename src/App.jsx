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
import Footer from './components/footer';

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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Evoca բանկի վերնամասը */}
        <Header setActiveTab={setActiveTab} />

        {/* Էջերի պայմանական ռենդեր ըստ activeTab-ի */}
        {activeTab === 'home' && (
          <>
            {/* Hero Slider */}
            <HeroSlider />

            {/* Biometric Section */}
            <BiometricSection />

            {/* Biometric Triangle */}
            <BiometricTriangle />

            {/* Evoca Cards Slider */}
            <EvocaCardsSlider />

            {/* Օնլայն և մոբայլ բանկինգ բլոկ */}
            <EvocaOnlineMobile />

            {/* Գործընկերներ բլոկ */}
            <Gortsynkerner />

            {/* Արտարժույթի փոխարժեքներ և հասցեներ */}
            <EvocaCalculator />
          </>
        )}

        {/* Եթե սեղմել են Հայտարարություններ */}
        {activeTab === 'haytararutyun' && (
          <main className="max-w-7xl mx-auto px-4 py-10">
            <Haytararutyun />
          </main>
        )}

        {/* Այլ էջերի կամ հիմնական բովանդակության համար */}
        <main className="p-10">
        </main>
      </div>

      {/* Ստորին հատված (Footer) */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;