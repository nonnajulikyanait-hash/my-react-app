import React from 'react';

function BiometricTriangle() {
  return (
    <div className="relative w-full min-h-screen bg-[#6400DC] overflow-hidden flex flex-col justify-center items-center py-12">
      
      {/* Վերնագիրը */}
      <div className="absolute top-16 left-24 z-20">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
          Լավագույնը <span className="text-white">Evocabank</span>-ից
        </h1>
      </div>

      {/* Հիմնական կոնտեյներ */}
      <div className="relative w-full max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between mt-16">
        
        {/* ձախ կողմ՝ Արձան և կետավոր շրջանագիծ */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2 h-[500px]">
          
          {/* Կետավոր պտտվող շրջանագիծ */}
          <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-dotted border-white/40 animate-spin-slow pointer-events-none"></div>

          {/* Մանուշակագույն ետնամասի կոր կտրվածքով ձևը */}
          <div 
            className="absolute w-[380px] h-[340px] bg-[#5300B8] z-0"
            style={{
              borderRadius: "40px",
              clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)"
            }}
          ></div>

          {/* Հստակ անտիկ արձանի նկարը */}
          <img 
            src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop" 
            alt="Evocabank Statue" 
            className="relative z-10 h-[460px] object-contain filter drop-shadow-2xl"
          />
        </div>

        {/* Աջ կողմ՝ 4 սպիտակ բլոկները */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 z-20">
          
          {/* Բլոկ 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02]">
            <div>
              <span className="inline-block bg-[#F3E8FF] text-[#6400DC] text-xs font-bold px-3 py-1 rounded-full mb-3">
                Թվային քարտեր
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Evoca Digital քարտ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Evocabank Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը:
              </p>
            </div>
          </div>

          {/* Բլոկ 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02]">
            <div>
              <span className="inline-block bg-[#F3E8FF] text-[#6400DC] text-xs font-bold px-3 py-1 rounded-full mb-3">
                Նվեր քարտեր
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Evoca Gift Card</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:
              </p>
            </div>
          </div>

          {/* Բլոկ 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02]">
            <div>
              <span className="inline-block bg-[#F3E8FF] text-[#6400DC] text-xs font-bold px-3 py-1 rounded-full mb-3">
                Նոր հավելված
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EvocaTOUCH 2</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:
              </p>
            </div>
          </div>

          {/* Բլոկ 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02]">
            <div>
              <span className="inline-block bg-[#F3E8FF] text-[#6400DC] text-xs font-bold px-3 py-1 rounded-full mb-3">
                Առցանց վճարումներ
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Արագ online վճարումներ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Կատարիր քո ընթացիկ վճարումները Evocabank-ի օնլայն տերմինալի միջոցով՝ պարզ և արագ: Այն հասանելի է 24/7:
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BiometricTriangle;