import React from 'react';
import { Search, MapPin, Globe, Menu, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full font-sans select-none">
      {/* --- ՎԵՐԻՆ ՄՈՒԳ ՇԵՐՏ (Top Bar) --- */}
      <div className="bg-[#1f103f] text-white text-xs md:text-sm px-4 lg:px-12 py-2 flex items-center justify-between">
        {/* Ձախ մաս՝ Հիմնական տեսակներ */}
        <nav className="flex items-center space-x-6">
          {/* Անհատ բաժինը՝ ակտիվ գծով վերևում */}
          <div className="relative py-1">
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-white"></span>
            <a href="#anhat" className="text-white font-medium">Անհատ</a>
          </div>
          <a href="#biznes" className="text-gray-300 hover:text-white transition">Բիզնես</a>
          <a href="#aknarthayin" className="text-gray-300 hover:text-white transition hidden md:inline">Ակնթարթային վճարումներ</a>
          <a href="#mer-masin" className="text-gray-300 hover:text-white transition hidden lg:inline">Մեր մասին</a>
          <a href="#norutyunner" className="text-gray-300 hover:text-white transition hidden lg:inline">Նորություններ</a>
          <a href="#blog" className="text-gray-300 hover:text-white transition hidden xl:inline">Բլոգ</a>
          <a href="#kariera" className="text-gray-300 hover:text-white transition hidden xl:inline">Կարիերա</a>
        </nav>

        {/* Աջ մաս՝ Հայտեր, Կապ և Գործիքներ */}
        <div className="flex items-center space-x-5 lg:space-x-6">
          {/* Առցանց հայտեր */}
          <div className="relative group cursor-pointer flex items-center space-x-1 text-gray-200 hover:text-white">
            <span>Առցանց հայտեր</span>
            <ChevronDown size={14} />
          </div>

          {/* Հետադարձ կապ */}
          <div className="relative group cursor-pointer hidden sm:flex items-center space-x-1 text-gray-200 hover:text-white">
            <span>Հետադարձ կապ</span>
            <ChevronDown size={14} />
          </div>

          {/* Գործիքների նշաններ */}
          <div className="flex items-center space-x-4 text-gray-300">
            <button aria-label="Մասնաճյուղեր" className="hover:text-white transition">
              <MapPin size={18} />
            </button>
            <button aria-label="Փոխել լեզուն" className="hover:text-white transition flex items-center gap-0.5 text-xs font-semibold">
              <Globe size={16} />
              <span>HY</span>
            </button>
            <button aria-label="Որոնել" className="hover:text-white transition">
              <Search size={18} />
            </button>
            <button aria-label="Մենյու" className="hover:text-white transition lg:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* --- ՍՏՈՐԻՆ ՍՊԻՏԱԿ ՇԵՐՏ (Main Header) --- */}
      <div className="bg-white border-b border-gray-100 px-4 lg:px-12 py-4 flex items-center justify-between shadow-sm">
        {/* Ձախ մաս՝ Evoca լոգո */}
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-center">
            <div className="text-2xl font-extrabold tracking-tight flex items-center">
              <span className="text-[#3b1c75] lowercase">evoca</span>
              <span className="w-2 h-2 rounded-full bg-[#6500dc] ml-0.5 mb-2"></span>
            </div>
          </a>

          {/* Միջնամաս՝ Ծառայությունների մենյու (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-800">
            <a href="#varker" className="hover:text-[#6500dc] transition">Վարկեր</a>
            <a href="#qarter" className="hover:text-[#6500dc] transition">Քարտեր</a>
            <a href="#avandner" className="hover:text-[#6500dc] transition">Ավանդներ</a>
            <a href="#hashivner" className="hover:text-[#6500dc] transition">Հաշիվներ</a>
            <a href="#poxancumner" className="hover:text-[#6500dc] transition">Փոխանցումներ</a>
            <a href="#arjeptxter" className="hover:text-[#6500dc] transition">Արժեթղթեր</a>
            <a href="#evocasalary" className="hover:text-[#6500dc] transition">EvocaSALARY</a>
            <a href="#evocatouch" className="hover:text-[#6500dc] transition">EvocaTOUCH</a>
          </nav>
        </div>

        {/* Աջ մաս՝ EvocaONLINE կոճակ */}
        <div>
          <a
            href="#online"
            className="bg-[#6500dc] hover:bg-[#5200b3] text-white text-sm font-medium px-6 py-2.5 rounded-xl shadow-md transition duration-200 flex items-center justify-center"
          >
            EvocaONLINE
          </a>
        </div>
      </div>
    </header>
  );
}