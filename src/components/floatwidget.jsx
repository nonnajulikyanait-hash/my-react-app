import React, { useState } from 'react';

function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'support', text: 'Մուտքագրեք Ձեր հաղորդագրությունը\nՕնլայն խորհրդատու' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: inputVal }]);
    setInputVal('');

    // Imitación de respuesta automática
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'support', text: 'Շնորհակալություն հաղորդագրության համար: Մենք շուտով կպատասխանենք:' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      
      {/* 1. CHAT WINDOW / ՉԱՏԻ ՊԱՀԱՐԱՆ */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 animate-fadeIn">
          
          {/* Chat Header */}
          <div className="bg-[#6400DC] text-white p-4 flex justify-between items-center relative">
            <div>
              <h4 className="font-bold text-sm">Օնլայն խորհրդատու</h4>
              <p className="text-[10px] opacity-80">Մուտքագրեք Ձեր հաղորդագրությունը</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full w-7 h-7 flex items-center justify-center transition cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-50 flex flex-col space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div 
                key={idx} 
                className={`p-3 rounded-2xl max-w-[80%] leading-relaxed whitespace-pre-line ${
                  m.sender === 'user' 
                    ? 'bg-[#6400DC] text-white self-end rounded-br-none' 
                    : 'bg-white text-gray-800 self-start shadow-sm border border-gray-100 rounded-bl-none'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input 
              type="text" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Մուտքագրեք հաղորդագրություն..." 
              className="flex-1 text-xs border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:border-[#6400DC]"
            />
            <button 
              type="submit"
              className="bg-[#6400DC] hover:bg-[#5200b3] text-white w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer shrink-0 shadow-sm"
            >
              ↑
            </button>
          </form>

        </div>
      )}

      {/* 2. FLOATING BUTTONS CONTAINER (ԶԱՆԳԻ ԵՎ ՉԱՏԻ ԿՈՃԱԿՆԵՐ) */}
      <div className="flex items-center space-x-3">
        
        {/* Call/Phone Button (Զանգահարելու կոճակ) */}
        <a 
          href="tel:+37410605555"
          className="bg-white hover:bg-gray-100 text-[#6400DC] w-12 h-12 rounded-full shadow-lg border border-gray-100 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
          title="Զանգահարել"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Chat Toggle Button (Չատ բացելու կոճակ) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#6400DC] hover:bg-[#5200b3] text-white px-5 py-3.5 rounded-full shadow-xl flex items-center space-x-2 transition-transform hover:scale-105 cursor-pointer font-medium text-xs sm:text-sm"
        >
          <span>Գրեք մեզ, մենք օնլայն ենք !</span>
          <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">💬</span>
        </button>

      </div>

    </div>
  );
}

export default FloatingWidget;