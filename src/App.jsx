import { useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import Header from './components/header'; // Համոզվեք, որ ֆայլի անունը (Header.jsx) մեծատառով է

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

      {/* Հիմնական բովանդակություն */}
      <main className="p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">React + Firebase + Tailwind</h2>
        <p className="text-gray-600">
          Տվյալը հաջողությամբ ուղարկվել է Firebase բազա (ստուգեք Console-ը և բազան):
        </p>
      </main>
    </div>
  );
}

export default App;