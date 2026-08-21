import React from 'react';

// Օգտագործիր թափանցիկ ֆոնով արձանի նկարը
const EVOCA_STATUE_URL = "https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png";

function BestEvocabankSection() {
  return (
    <section 
      className="relative bg-[#6400DC] overflow-hidden text-white h-[70vh] lg:h-[65vh]"
      // Բարձրությունը դրված է հարաբերական (h-[70vh])
    >
      {/* Ֆոնային ալիքաձև կտրվածքը (Clip-Path) */}
      <div 
        className="absolute inset-0 bg-[#6400DC]"
        style={{
          // Այս հատկությունն ապահովում է բնօրինակի կորությունը
          clipPath: "ellipse(65% 80% at 50% -35%)", 
          // Փորձարկիր այս արժեքները, մինչև ստանաս քո ուզած կորությունը
          // ellipse(Լայնություն Բարձրություն at X Y)
        }}
      >
        {/* Ներքին ֆոնային դեկորատիվ էլեմենտները (ինչպես օրիգինալում) */}
        <div className="absolute top-12 left-16 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none hidden lg:block"></div>
        <div className="absolute top-24 right-32 w-6 h-6 bg-yellow-300 rounded-sm rotate-12 pointer-events-none hidden lg:block"></div>
        <div className="absolute bottom-16 right-20 w-10 h-10 border-4 border-pink-400 rounded-full pointer-events-none hidden lg:block"></div>
        <div className="absolute bottom-12 left-1/4 w-3 h-3 bg-yellow-300 rounded-full pointer-events-none hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Ձախ կողմ՝ Արձանը և կետավոր շրջանագիծը */}
        <div className="w-full lg:w-5/12 flex justify-center items-center relative h-full">
          <div className="relative flex justify-center items-center w-full h-full">
            {/* Կետավոր պտտվող շրջանագիծ */}
            <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-dotted border-white/40 animate-spin-slow pointer-events-none"></div>

            {/* Արձանի նկարը */}
            <img 
              src={EVOCA_STATUE_URL} 
              alt="Evocabank Statue" 
              className="relative z-10 h-[460px] object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Աջ կողմ՝ 4 սպիտակ բլոկները */}
        <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 z-20 pb-12">
          {/* Բլոկ 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02]">
            <div>
              <span className="inline-block bg-[#F3E8FF] text-[#6400DC] text-xs font-bold px-3 py-1 rounded-full mb-3">
                Թվային քարտեր
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Evoca Digital քարտ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը:
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
    </section>
  );
}

export default BestEvocabankSection;