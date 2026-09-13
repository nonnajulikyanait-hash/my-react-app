import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import Header from './components/header';
import HeroSlider from './components/heroslider';
import BiometricSection from './components/biometricsection';
import BestEvocabankSection from './components/bestevocabanksection'; 
import EvocaCardsSlider from './components/evocacardslider'; 
import EvocaCalculator from './components/evocacalculator'; 
import Calculator from './components/calculator'; 
import Varker from './components/varker'; 
import Karter from './components/karter'; 
import AkntartayinVcharumner from './components/akntartayinvcharumner';
import Mermasin from './components/mermasin';
import Karucvacq from './components/karucvacq';
import Bajneterer from './components/bajneterer';
import Xekavarutyun from './components/xekavarutyun'; 
import Online from './components/online';
import Gortsyntrner from './components/gortsyntrner'; 
import Review from './components/review'; // <--- Փոքրատառով իմպորտ

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

  const subTabsList = [
    'Ընդհանուր',
    'Կառուցվածք',
    'Բաժնետերեր',
    'Ղեկավարություն',
    'Գործընկերներ',
    'Մրցանակներ',
    'CSR',
    'Էվոկա ֆինանսական խումբ',
  ];

  const renderSubTabsNav = () => (
    <div className="bg-[#6400dc] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-6 py-3 text-sm font-medium whitespace-nowrap scrollbar-none">
        {subTabsList.map((tab, index) => (
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
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setActiveTab={setActiveTab} activeTab={activeTab} />
      
      {activeTab === 'home' && (
        <>
          <HeroSlider />
          <BiometricSection />
          <BestEvocabankSection />
          <EvocaCardsSlider />
          <EvocaCalculator /> 
          <Online /> 
          <Gortsyntrner /> 
          <Review />         
          <Calculator />     
        </>
      )}

      {(activeTab === 'biznes' || activeTab === 'varker') && <Varker />}

      {activeTab === 'karter' && <Karter />}

      {activeTab === 'akntartayinVcharumner' && <AkntartayinVcharumner />}

      {activeTab === 'mermasin' && (
        <>
          {activeSubTab === 'Ընդհանուր' && (
            <Mermasin setActiveSubTab={setActiveSubTab} activeSubTab={activeSubTab} />
          )}
          
          {activeSubTab === 'Կառուցվածք' && (
            <>
              {renderSubTabsNav()}
              <Karucvacq />
            </>
          )}

          {activeSubTab === 'Բաժնետերեր' && (
            <>
              {renderSubTabsNav()}
              <Bajneterer />
            </>
          )}

          {activeSubTab === 'Ղեկավարություն' && (
            <>
              {renderSubTabsNav()}
              <Xekavarutyun />
            </>
          )}

          {activeSubTab === 'Գործընկերներ' && (
            <>
              {renderSubTabsNav()}
              <Gortsyntrner /> 
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;