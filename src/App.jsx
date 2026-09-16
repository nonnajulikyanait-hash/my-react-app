import { useState } from 'react';
import Header from './components/header';
import Varker from './components/varker'; // Ներմուծում ենք Varker բաղադրիչը

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Header setActiveTab={setActiveTab} activeTab={activeTab} />
        
        {/* Եթե activeTab-ը դառնում է 'varker', բացվում է Varker բաղադրիչը */}
        {activeTab === 'varker' && <Varker />}

        {/* Այստեղ հետագայում կարող եք ավելացնել այլ էջեր ևս, օրինակ՝ */}
        {/* {activeTab === 'karter' && <Karter />} */}
      </div>
    </div>
  );
}

export default App;