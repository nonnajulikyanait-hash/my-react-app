import React from 'react';

function Review() {
  return (
    <div className="w-full bg-white py-12 px-4 relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto text-center relative">
        
        {/* Աստղերի պատկերը վերևում */}
        <div className="flex justify-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-xl">★</span>
          ))}
        </div>

        {/* Ձախ մանուշակագույն մեջբերման նշանը և ձեռքի նկարը */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block opacity-90">
          <span className="text-[#6400dc] text-5xl font-serif">“</span>
        </div>

        {/* Աջ մանուշակագույն մեջբերման նշանը և ձեռքի նկարը */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block opacity-90">
          <span className="text-[#6400dc] text-5xl font-serif">”</span>
        </div>

        {/* Հիմնական տեքստ */}
        <p className="text-neutral-800 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6 px-4">
          Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառումով ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց։ <span className="font-bold">Evocabank</span>-ն առաջինն իսկ վայրկյանից ստիպեց նորովի և ժամանակակից...
        </p>

        {/* Հեղինակ */}
        <div className="space-y-1">
          <h4 className="font-bold text-neutral-900 text-sm">Կամո Թովմասյան</h4>
          <p className="text-gray-400 text-xs">KAMOBLOG մեդիա հարթակի հիմնադիր, influencer</p>
        </div>

        {/* Սլայդերի կետերը (dots) */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-[#6400dc]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>

      </div>
    </div>
  );
}

export default Review;