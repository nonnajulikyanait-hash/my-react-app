import { useState } from 'react';
import Header from './components/header';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Header setActiveTab={setActiveTab} activeTab={activeTab} />
        
        {/* Այստեղ կարող եք ավելացնել ձեր էջերը կամ բաղադրիչները ըստ ցանկության */}
      </div>
    </div>
  );
}

export default App;