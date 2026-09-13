import React from 'react';

// Օգտագործիր թափանցիկ ֆոնով արձանի նկարը
const EVOCA_STATUE_URL = "https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png";

function BestEvocabankSection() {
  return (
    <section className="relative bg-[#6400DC] py-20 lg:py-28 overflow-hidden text-white min-h-screen">
      
      {/* Ֆոնային ալիքաձև կտրվածքը (Clip-Path) */}
      <div 
        className="absolute inset-0 bg-[#6400DC]"
        style={{
          // Այս հատկությունն ապահովում է բնօրինակի կորությունը
          clipPath: "ellipse(65% 75% at 50% -25%)", 
          // Փորձարկիր այս արժեքները, մինչև ստանաս քո ուզած կորությունը
          // Կարող ես օգտագործել նաև polygon() ավելի բարդ ձևերի համար
        }}
      >
        {/* Ներքին ֆոնային դեկորատիվ էլեմենտները (ինչպես օրիգինալում) */}
        <div className="absolute top-12 left-16 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none hidden lg:block"></div>
        <div className="absolute top-24 right-32 w-6 h-6 bg-yellow-300 rounded-sm rotate-12 pointer-events-none hidden lg:block"></div>
        <div className="absolute bottom-16 right-20 w-10 h-10 border-4 border-pink-400 rounded-full pointer-events-none hidden lg:block"></div>
        <div className="absolute bottom-12 left-1/4 w-3 h-3 bg-yellow-300 rounded-full pointer-events-none hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        
        {/* Ձախ կողմ՝ Արձանը և կետավոր շրջանագիծը */}
        <div className="w-full lg:w-5/12 flex justify-center items-center relative h-[500px] order-2 lg:order-1 mt-10 lg:mt-0">
          <div className="relative flex justify-center items-center w-full h-full">
            
            {/* Կետավոր պտտվող շրջանագիծը */}
            <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-dotted border-white/40 animate-spin-slow pointer-events-none"></div>

            {/* Մանուշակագույն ետնամասի կոր ձևը (եթե անհրաժեշտ է ավելի շատ խորություն տալ) */}
            {/* 
            <div 
              className="absolute w-[380px] h-[340px] bg-[#5300B8] z-0"
              style={{
                borderRadius: "40px",
                clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)"
              }}
            ></div> 
            */}

            {/* Անտիկ արձանի նկարը (թափանցիկ ֆոնով) */}
            <img 
              src={EVOCA_STATUE_URL} 
              alt="Evocabank Statue" 
              className="relative z-10 h-[460px] object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Տեքստային մաս և Քարտերի բլոկները (աջ մաս) */}
        <div className="w-full lg:w-7/12 text-left order-1 lg:order-2">
          {/* Վերնագիրը (Տեղափոխված է ավելի աջ՝ համապատասխանելու բնօրինակին) */}
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white">
              Լավագույնը <span className="text-white">Evocabank</span>-ից
            </h2>
          </div>

          {/* 4 սպիտակ ինտերակտիվ քարտերը (2x2 գրիդով) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Քարտ 1: Evoca Digital քարտ */}
            <div className="bg-white text-neutral-900 p-8 rounded-[28px] shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-100 text-[#6400DC] text-xs font-bold rounded-full mb-4">
                  Թվային քարտեր
                </span>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-neutral-950">
                  Evoca Digital քարտ
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը:
                </p>
              </div>
            </div>

            {/* Քարտ 2: Evoca Gift Card */}
            <div className="bg-white text-neutral-900 p-8 rounded-[28px] shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-100 text-[#6400DC] text-xs font-bold rounded-full mb-4">
                  Նվեր քարտեր
                </span>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-neutral-950">
                  Evoca Gift Card
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:
                </p>
              </div>
            </div>

            {/* Քարտ 3: EvocaTOUCH 2 */}
            <div className="bg-white text-neutral-900 p-8 rounded-[28px] shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-100 text-[#6400DC] text-xs font-bold rounded-full mb-4">
                  Նոր հավելված
                </span>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-neutral-950">
                  EvocaTOUCH 2
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  EvocaTOUCH-ը պարզապես բանկային հավելված չէ. վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:
                </p>
              </div>
            </div>

            {/* Քարտ 4: Արագ online վճարումներ */}
            <div className="bg-white text-neutral-900 p-8 rounded-[28px] shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-100 text-[#6400DC] text-xs font-bold rounded-full mb-4">
                  Օնլայն վճարումներ
                </span>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-neutral-950">
                  Արագ online վճարումներ
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Կատարիր քո ընթացիկ վճարումներն Evocabank-ի օնլայն տերմինալի միջոցով՝ պարզ և արագ: Այն հասանելի է 24/7:
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default BestEvocabankSection;