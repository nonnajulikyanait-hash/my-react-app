import { useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import Header from './components/header';
import HeroSlider from './components/heroslider';
import BiometricSection from './components/biometricsection';
import BiometricTriangle from './components/biometrictriangle';
import EvocaCardsSlider from './components/evocacardsslider';
import Calculator from './components/calculator'; // Ներմուծում ենք հաշվիչը

function App() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Evoca բանկի վերնամասը */}
      <Header />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Biometric Section */}
      <BiometricSection />

      {/* Biometric Triangle */}
      <BiometricTriangle />

      {/* Evoca Cards Slider */}
      <EvocaCardsSlider />

      {/* Հաշվիչներ (Վարկ / Ավանդ) */}
      <Calculator />

      {/* Հիմնական բովանդակություն */}
      <main className="p-10">
      </main>
    </div>
  );
}

export default App;