import React from 'react';

function BestEvocabankSection() {
  return (
    <section className="relative bg-[#6400DC] py-20 lg:py-28 overflow-hidden text-white mt-6">
      {/* Ֆոնային դեկորատիվ տարրեր և երկրաչափական պատկերներ (ինչպես օրիգինալում) */}
      <div className="absolute top-12 left-16 w-8 h-8 border-2 border-white/20 rotate-45 pointer-events-none"></div>
      <div className="absolute top-24 right-32 w-6 h-6 bg-yellow-300 rounded-sm rotate-12 pointer-events-none"></div>
      <div className="absolute bottom-16 right-20 w-10 h-10 border-4 border-pink-400 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-12 left-1/4 w-3 h-3 bg-yellow-300 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Վերնագիր և Արձան / Ձախ մաս */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <div className="text-center lg:text-left w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white">
              Լավագույնը Evocabank-ից
            </h2>
          </div>
        </div>

        {/* Հիմնական բովանդակություն՝ Արձանը ձախում և 4 քարտերը աջում */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/*Ձախ կողմ՝ Արձանի նկարը և մանուշակագույն ալիքաձև հետնամասը*/}
          <div className="lg:w-5/12 relative flex justify-center items-center">
            <div className="relative w-full flex justify-center items-center">
              {/* Հետնամասի կետավոր ցանցը */}
              <div className="absolute -left-6 top-10 w-48 h-64 border border-dashed border-white/30 rounded-full pointer-events-none"></div>
              
              {/* Արձանի նկարը */}
              <img 
                src="https://www.evoca.am/img/temp/best/best-evocabank.png" 
                alt="Լավագույնը Evocabank-ից" 
                className="w-[380px] lg:w-[440px] h-auto object-contain relative z-10"
                onError={(e) => {
                  // Եթե լինի լոդինգի խնդիր, կարող ես փոխարինել կամ թողնել այս հղումը
                  e.target.src = ""; 
                }}
              />
            </div>
          </div>

          {/* Աջ կողմ՝ 4 սպիտակ ինտերակտիվ քարտերը (2x2 գրիդով) */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
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