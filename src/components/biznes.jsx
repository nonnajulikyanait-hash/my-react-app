import React from 'react';
import Varker from './varker'; // Ներմուծում ենք վարկերի կոմպոնենտը

function Biznes() {
  return (
    <div>
      {/* Այստեղ կարող է լինել բիզնեսին հատուկ հեդեր կամ անմիջապես վարկերը */}
      <div className="bg-[#6400dc] text-white py-6 px-6 lg:px-16">
        <h1 className="text-3xl lg:text-4xl font-extrabold">Բիզնես վարկեր</h1>
      </div>

      {/* Միանգամից բացվում է varker.jsx-ի բովանդակությունը */}
      <Varker />
    </div>
  );
}

export default Biznes;