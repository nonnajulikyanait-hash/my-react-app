import React from 'react';

function AkntartayinVcharumner() {
  // Ցանկի տվյալները (կարող ես նկարների/իկոնկաների փոխարեն դնել քո ուզած նկարները կամ SVG-ները)
  const items = [
    { title: "EVOCABANK", icon: "🟣" },
    { title: "Միջազգային բջջային օպերատորներ", icon: "🌐" },
    { title: "Կոմունալ վճարումներ", icon: "💡" },
    { title: "Ինտերնետ և TV", icon: "💻" },
    { title: "ՃՈ վճարներ", icon: "🚗" },
    { title: "Վարկային կազմակերպություններ", icon: "🏦" },
    { title: "Միջոցառումներ", icon: "🎫" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      <div>
        {/* Վերին վնդակ / Header */}
        <div className="bg-white border-b border-gray-200 px-6 lg:px-12 py-4 flex justify-between items-center">
          <div className="text-3xl font-black text-neutral-800 tracking-tighter">evoca</div>
          <div className="text-gray-500 font-medium">Online payment</div>
          <div className="flex items-center space-x-6">
            <span className="text-sm font-semibold text-gray-700">+374 10 605555</span>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-sm transition-colors">
              Պատմություն
            </button>
          </div>
        </div>

        {/* Բովանդակություն */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center text-neutral-800 mb-10">Գլխավոր</h1>

          {/* Քառակուսիների ցանց (Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 transition-all duration-300 cursor-pointer hover:border-purple-600 hover:shadow-xl hover:ring-2 hover:ring-purple-600/20 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-neutral-800 font-semibold text-base sm:text-lg">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ստորին հատված (Footer) */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-8 px-6 lg:px-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-black text-neutral-800">evocaBANK</span>
            <p>ք. Երևան, 0010, Հանրապետության 44/2</p>
          </div>
          <div>
            <p>hello@evoca.am | +374 10 605555</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AkntartayinVcharumner;