import React from 'react';

function Footer() {
  const partners = [
    { id: 1, url: 'https://www.evoca.am/img/temp/partners/partner-1.png' },
    { id: 2, url: 'https://www.evoca.am/img/temp/partners/partner-2.png' },
    { id: 3, url: 'https://www.evoca.am/img/temp/partners/partner-6.png' },
    { id: 4, url: 'https://www.evoca.am/img/temp/partners/partner-3.png' },
    { id: 5, url: 'https://www.evoca.am/img/temp/partners/partner-4.png' },
    { id: 6, url: 'https://www.evoca.am/img/temp/partners/partner-5-new.png' },
    { id: 7, url: 'https://www.evoca.am/img/temp/partners/partner-7.png' },
  ];

  return (
    <footer className="w-full bg-[#fcfcfc] border-t border-gray-200 pt-12 pb-6 font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Վերին բաժին (սյունակներ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Սյունակ 1: Լոգո և Հասցե */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold tracking-wider text-[#6400dc]">evocaBANK</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Սյունակ 2: Բանկի մասին */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-neutral-900">Բանկի մասին</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="/about" className="hover:text-[#6400dc]">Մեր մասին</a></li>
              <li><a href="/management" className="hover:text-[#6400dc]">Ղեկավարություն</a></li>
              <li><a href="/shareholders" className="hover:text-[#6400dc]">Բաժնետերեր</a></li>
              <li><a href="/reports" className="hover:text-[#6400dc]">Հաշվետվություններ</a></li>
              <li><a href="/legal-acts" className="hover:text-[#6400dc]">Իրավական ակտեր</a></li>
              <li><a href="/tariffs" className="hover:text-[#6400dc]">Սակագներ</a></li>
              <li><a href="/properties" className="hover:text-[#6400dc]">Օտարվող գույք</a></li>
              <li><a href="/developers" className="hover:text-[#6400dc]">Կառուցապատողներ</a></li>
              <li><a href="/car-salons" className="hover:text-[#6400dc]">Գործընկեր ավտոսրահներ</a></li>
              <li><a href="/tariffs-archive" className="hover:text-[#6400dc]">Սակագների արխիվ</a></li>
            </ul>
          </div>

          {/* Սյունակ 3: Օգտակար հղումներ */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-neutral-900">Օգտակար հղումներ</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="/customer-rights" className="hover:text-[#6400dc]">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
              <li><a href="/residency-criteria" className="hover:text-[#6400dc]">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
              <li><a href="/regulation" className="hover:text-[#6400dc]">Կարգավորում</a></li>
              <li><a href="/privacy-policy" className="hover:text-[#6400dc]">Գաղտնիության քաղաքականություն</a></li>
              <li><a href="/financial-ombudsman" className="hover:text-[#6400dc]">Ֆին. հաշտարար</a></li>
              <li><a href="/fraud-prevention" className="hover:text-[#6400dc]">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
              <li><a href="/cardholders-links" className="hover:text-[#6400dc]">Հղումներ Բանկի քարտապանների համար</a></li>
            </ul>
          </div>

          {/* Սյունակ 4: Այլ հղումներ */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-neutral-900">Այլ հղումներ</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="/evocaonline.jsx" className="hover:text-[#6400dc]">EvocaONLINE</a></li>
              <li><a href="/pahatuper.jsx" className="hover:text-[#6400dc]">Պահատուփեր</a></li>
              <li><a href="/harcer.jsx" className="hover:text-[#6400dc]">Հաճախ տրվող հարցեր</a></li>
              <li><a href="/haytararutyun.jsx" className="hover:text-[#6400dc]">Հայտարարություններ</a></li>
              <li><a href="/dibrary.jsx" className="hover:text-[#6400dc]">Dibrary</a></li>
              <li><a href="/bukletner.jsx" className="hover:text-[#6400dc]">Բուկլետներ</a></li>
              <li><a href="/kap.jsx" className="hover:text-[#6400dc]">Հետադարձ կապ</a></li>
              <li><a href="/qartez.jsx" className="hover:text-[#6400dc]">Կայքի քարտեզ</a></li>
            </ul>
          </div>

          {/* Սյունակ 5: Սոցցանցեր, Հավելվածներ և Կապ */}
          <div className="space-y-4">
            {/* Սոցցանցերի պատկերակներ */}
            <div className="flex space-x-3 text-gray-600 text-lg">
              <a href="#" aria-label="Facebook" className="hover:text-[#6400dc]">f</a>
              <a href="#" aria-label="Instagram" className="hover:text-[#6400dc]">ig</a>
              <a href="#" aria-label="Pinterest" className="hover:text-[#6400dc]">p</a>
              <a href="#" aria-label="YouTube" className="hover:text-[#6400dc]">yt</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#6400dc]">in</a>
            </div>

            {/* App Store / Google Play */}
            <div className="space-y-2 pt-2">
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
              </a>
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
              </a>
            </div>

            {/* Հասցեներ և հեռախոսահամարներ */}
            <div className="space-y-1 pt-2 text-xs">
              <a href="https://www.evoca.am/hy/branches-and-atms" target="_blank" rel="noopener noreferrer" className="block text-[#6400dc] font-bold hover:underline">
                Բանկի հասցեները և աշխատաժամերը
              </a>
              <p className="font-bold text-neutral-900 pt-1">Կապ մեզ հետ</p>
              <p className="font-bold text-neutral-900">+374 10 605555</p>
              <p className="font-bold text-neutral-900">8444</p>
            </div>
          </div>

        </div>

        {/* Միջնամասի իրավաբանական տեքստ */}
        <div className="border-t border-gray-200 pt-6 pb-6 text-[11px] text-gray-500 leading-relaxed">
          <p>
            Կայքի՝ այցելուի որևէ տեխնիկական միջոցներով վերցվող տվյալների անհամապատասխանության, ինչպես նաև տռտաներն ու անցքերն ընդունելու ոչ ադրեզնված ծրագրի տեխնիկական դեպքերում ինքնաբերաբար ինքն ապահովագրելը: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում ի՞նչ ինտերնետային կայքում այլ անձանց ինտերնետային կայքերի բովանդակության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկության օգտագործման հետևանքների համար:
          </p>
        </div>

        {/* Ամենաներքևի գործընկերների պատկերները */}
        <div className="border-t border-gray-200 pt-6 mt-6 flex items-center justify-between flex-wrap gap-4 opacity-80">
          {partners.map((partner) => (
            <div key={partner.id} className="h-10 flex items-center justify-center flex-1 min-w-[80px] max-w-[130px]">
              <img 
                src={partner.url} 
                alt={`Partner ${partner.id}`} 
                className="max-h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;