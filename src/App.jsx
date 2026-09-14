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
import Review from './components/review';
import Footer from './components/footer';
import EvocaOnline from './components/evocaonline';
import Pahatuper from './components/pahatuper';
import Harcer from './components/harcer';
import Kariera from './components/kariera';
import Hipoteq from './components/hipoteq';
import Sparoxakan from './components/sparoxakan';
import EvocaTouch from './components/evocatouch'; 
import Poxancumner from './components/poxancumner';
import Qarter from './components/qarter';
import Avandner from './components/avandner';
import Ayl from './components/ayl';
import Dibrary from './components/dibrary';
import Bukletner from './components/bukletner';
import Kap from './components/kap'; // <--- Ավելացվել է Kap-ի իմպորտը

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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Եթե հատուկ էջերն են, գլխավոր Header-ը չենք ցուցադրում */}
        {activeTab !== 'harcer' && 
         activeTab !== 'kariera' && 
         activeTab !== 'hipoteq' && 
         activeTab !== 'sparoxakan' && 
         activeTab !== 'evocatouch' && 
         activeTab !== 'poxancumner' &&
         activeTab !== 'qarter' &&
         activeTab !== 'avandner' &&
         activeTab !== 'ayl' &&
         activeTab !== 'dibrary' &&
         activeTab !== 'bukletner' &&
         activeTab !== 'kap' && ( // <--- Ավելացվել է պայմանը Kap-ի համար
          <Header setActiveTab={setActiveTab} activeTab={activeTab} />
        )}
        
        {activeTab === 'home' && (
          <>
            <HeroSlider />
            <BiometricSection />
            <BestEvocabankSection />
            <EvocaCardsSlider />
            <EvocaCalculator /> 
            <Online /> 
            <Gortsyntrner /> 
            <Calculator />     
            <Review />         
          </>
        )}

        {(activeTab === 'biznes' || activeTab === 'varker') && <Varker />}

        {activeTab === 'karter' && <Karter />}

        {activeTab === 'akntartayinVcharumner' && <AkntartayinVcharumner />}

        {activeTab === 'evocaonline' && <EvocaOnline />}

        {activeTab === 'pahatuper' && <Pahatuper />}

        {activeTab === 'harcer' && <Harcer setActiveTab={setActiveTab} />}

        {activeTab === 'kariera' && <Kariera setActiveTab={setActiveTab} />}

        {activeTab === 'hipoteq' && <Hipoteq setActiveTab={setActiveTab} />}

        {activeTab === 'sparoxakan' && <Sparoxakan setActiveTab={setActiveTab} />}

        {activeTab === 'evocatouch' && <EvocaTouch setActiveTab={setActiveTab} />} 

        {activeTab === 'poxancumner' && <Poxancumner setActiveTab={setActiveTab} />}

        {activeTab === 'qarter' && <Qarter setActiveTab={setActiveTab} />}

        {activeTab === 'avandner' && <Avandner setActiveTab={setActiveTab} />}

        {activeTab === 'ayl' && <Ayl setActiveTab={setActiveTab} />}

        {activeTab === 'dibrary' && <Dibrary setActiveTab={setActiveTab} />}

        {activeTab === 'bukletner' && <Bukletner setActiveTab={setActiveTab} />}

        {activeTab === 'kap' && <Kap setActiveTab={setActiveTab} />} {/* <--- Ավելացվեց Kap էջը */}

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

      {/* Ամենաներքևում՝ Footer-ը */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;