import React from 'react';

function AkntartayinVcharumner() {
  const items = [
    { 
      title: "EVOCABANK", 
      icon: "https://resource.evoca.am/images/WebPayment/evoca.png" 
    },
    { 
      title: "Միջազգային բջջային օպերատորներ", 
      icon: "https://resource.evoca.am/images/WebPayment/international.png" 
    },
    { 
      title: "Կոմունալ վճարումներ", 
      icon: "https://resource.evoca.am/images/WebPayment/utility.png" 
    },
    { 
      title: "Ինտերնետ և TV", 
      icon: "https://resource.evoca.am/images/WebPayment/internettv.png" 
    },
    { 
      title: "ՃՈ վճարներ", 
      icon: "https://resource.evoca.am/images/WebPayment/roadpolice.png" 
    },
    { 
      title: "Վարկային կազմակերպություններ", 
      icon: "https://resource.evoca.am/images/WebPayment/loan.png" 
    },
    { 
      title: "Միջոցառումներ", 
      icon: "https://resource.evoca.am/images/WebPayment/event.png" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      <div className="max-w-6xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-center text-neutral-800 mb-10">Գլխավոր</h1>

        {/* Քառակուսիների ցանց (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 h-64 flex flex-col items-center justify-center text-center shadow-sm border border-gray-200 transition-all duration-300 cursor-pointer hover:border-purple-600 hover:shadow-xl hover:ring-2 hover:ring-purple-600/20 group"
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="max-h-16 max-w-[80px] object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-neutral-800 font-semibold text-base sm:text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AkntartayinVcharumner;