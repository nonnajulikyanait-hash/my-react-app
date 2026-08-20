import React from 'react';

function BiometricTriangle() {
  return (
    <div className="absolute flex justify-center items-center w-[455px] h-[455px] pointer-events-none">
      {/* Հետնամասի կետավոր շրջանագիծը */}
      <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-neutral-200/55"></div>

      {/* Մանուշակագույն եռանկյունի ֆոնը */}
      <div 
        className="absolute w-[410px] h-[360px] bg-[#6400DC]"
        style={{
          borderRadius: "50px",
          clipPath: "polygon(50% 100%, 4% 3%, 96% 3%)"
        }}
      ></div>
    </div>
  );
}

export default BiometricTriangle;