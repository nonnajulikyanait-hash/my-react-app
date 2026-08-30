import { useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import Header from './components/header';
import HeroSlider from './components/heroslider';
import BiometricSection from './components/biometricsection';
import BestEvocabankSection from './components/bestevocabanksection'; 
import EvocaCardsSlider from './components/evocacardslider'; 
import EvocaCalculator from './components/evocacalculator'; 
import EvocaOnlineMobile from './components/evocaonlinemobile'; 

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
      
      {/* Գլխավոր սլայդեր բաժինը */}
      <HeroSlider />

      {/* Օնլայն և մոբայլ բանկինգի բաժինը */}
      <EvocaOnlineMobile />

      {/* Բիոմետրիկ նույնականացման բաժինը */}
      <BiometricSection />

      {/* "Լավագույնը Evocabank-ից" բաժինը */}
      <BestEvocabankSection />

      {/* Քարտերի սլայդեր բաժինը */}
      <EvocaCardsSlider />

      {/* Հաշվիչների բաժինը */}
      <EvocaCalculator />
    </div>
  );
}

export default App;