import React from 'react';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function BusinessAvandner() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      {/* Գլխավոր բաժին */}
      <section className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900">Դասական ավանդ</h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Դասական ավանդը կայուն բարձր եկամտաբերությամբ կավելացնի ձեր խնայողությունները: 
            Դասական ժամկետային ավանդն ընդունում ենք ֆիզիկական և իրավաբանական անձանցից: 
            Ավանդ ներդնելիս ձեզ տրամադրում ենք անվճար միջազգային քարտ:
          </p>
        </div>
        <div className="flex-1">
          <img 
            src="https://www.evoca.am/images-cache/menu/1/1615568375393/780x585.jpg" 
            alt="Դասական ավանդ" 
            className="rounded-lg shadow-md w-full object-cover max-h-[350px]"
          />
        </div>
      </section>

      {/* Անհրաժեշտ տեղեկատվություն */}
      <section className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <h2 className="text-2xl font-bold text-purple-900 border-b pb-2">Անհրաժեշտ տեղեկատվություն</h2>

        {/* Ընդհանուր տեղեկատվություն */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <h3 className="text-lg font-semibold text-purple-800">Ընդհանուր տեղեկատվություն</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
            <li>Ժամկետային ավանդներն ընդունում ենք ֆիզիկական (այդ թվում՝ անհատ ձեռնարկատեր) և իրավաբանական անձ հաճախորդներից (ռեզիդենտ, ոչ ռեզիդենտ)՝ դրամով, դոլարով, եվրոյով և ռուբլով, կանխիկ և անկանխիկ տարբերակով:</li>
            <li>Ավանդներն ընդունում ենք մեր կողմից հաստատված պայմաններով և տոկոսադրույքներով:</li>
            <li>Ավանդների ընդունման և վերադարձման գործընթացում ղեկավարվում ենք Օրենսդրությամբ, Կենտրոնական բանկի որոշումներով և այլ իրավական ակտերով:</li>
            <li>Մենք, օրենսդրական ակտերի համաձայն, ապահովում ենք ավանդի ներդրման և դրա հետ կապված այլ գործառնությունների գաղտնիությունը: Ավանդի վերաբերյալ տեղեկատվության տրամադրումը երրորդ անձանց կատարվում է բացառապես «Բանկային գաղտնիքի մասին» օրենքով սահմանված դեպքերում և ընթացակարգով:</li>
            <li><strong className="text-gray-900">Ուշադրություն։</strong> Մեր կողմից պարբերաբար անցկացվող ավանդային ակցիաների պայմանները տարբերվում են մեր համակարգում ավանդների ներգրավման ընդհանուր պայմաններից և գործում են միայն պաշտոնապես հրապարակված ակցիայի շրջանակում ներգրավված ավանդների նկատմամբ:</li>
          </ul>
        </div>

        {/* Տոկոսագումարների հաշվարկման և վճարման կարգը */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <h3 className="text-lg font-semibold text-purple-800">Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգը</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
            <li>Տոկոսագումարները հաշվում ենք ավանդի փաստացի մնացորդի նկատմամբ՝ օրական կտրվածքով, պարզ եղանակով, ավանդային պայմանագրի ամբողջ ժամկետի համար: Ավանդի յուրաքանչյուր օրվա տոկոսադրույքը հաշվում ենք սահմանված տոկոսադրույքի 1/365, իսկ նահանջ տարվա համար՝ 1/366 հարաբերակցությամբ:</li>
            <li>Տոկոսագումարները հաշվում ենք ավանդը բանկ մուտք լինելու օրվանից մինչև այն վերադարձնելու կամ ավանդային հաշվից այլ հիմքերով դուրս գրելու օրն նախորդող օրն ընկած ժամանակահատվածի օրացույցային օրերի համար:</li>
            <li>Ավանդների դիմաց հաշվեգրվող տոկոսագումարները վճարում ենք կանխիկ և անկանխիկ եղանակով՝ ավանդատուի ցանկությամբ տոկոսագումարները կարող են վճարվել այն արտարժույթով, որով ներգրավվել է ավանդը, ինչպես նաև ՀՀ դրամով` հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ առքի փոխարժեքը:</li>
            <li>
              <strong className="text-gray-900">Ձեր ընտրությամբ տոկոսագումարները վճարում ենք հետևյալ տարբերակներով՝</strong>
              <ul className="list-decimal list-inside pl-4 mt-1 space-y-1">
                <li>Տոկոսագումարների պարբերաբար վճարումով (երկկողմանի համաձայնեցված ժամանակացույցով), կամ՝</li>
                <li>Տոկոսագումարների վճարմամբ՝ պայմանագրի ժամկետի վերջում (ավանդի գումարի հետ միասին):</li>
              </ul>
            </li>
            <li><strong className="text-gray-900">Ուշադրություն՝</strong> Ձեր հաշվին առկա միջոցների նկատմամբ տոկոսագումարները հաշվում ենք ԱՆՎԱՆԱԿԱՆ տոկոսադրույքի հիման վրա, իսկ տարեկան ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ ցույց է տալիս, թե որքան եկամուտ կստանայիք դուք, եթե ձեր ավանդի դիմաց ստացված տոկոսագումարները վերաներդնեիք ավանդի տեսքով: Տարեկան տոկոսային եկամտաբերության հաշվարկման կարգին (Կանոնակարգ 8-02) կարող եք ծանոթանալ www.cba.am կայքում:</li>
          </ul>
        </div>

        {/* Ավանդային հաշվի վերաբերյալ տեղեկատվություն */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <h3 className="text-lg font-semibold text-purple-800">Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
            <li>Պայմանագրի գործողության ընթացքում պարտավոր ենք առնվազն 30-օրյա պարբերականությամբ ձեզ տրամադրել յուրաքանչյուր ավանդային հաշվի վերաբերյալ համապատասխան քաղվածք:</li>
            <li>Քաղվածքները ձեզ տրամադրում ենք գրավոր՝ փոստային կապի միջոցով, բացառությամբ այն դեպքի, երբ դուք գրավոր կամ էլեկտրոնային դիմումի հիման վրա հրաժարվել եք դրանցից: Քաղվածքների տրամադրման եղանակն ամրագրվում է Ավանդային պայմանագրով:</li>
            <li>Ավանդային հաշվի վերաբերյալ քաղվածքների կրկնօրինակների կամ այլ տեղեկատվության տրամադրման դիմաց ձեզանից գանձվում է միջնորդավճար՝ ըստ մեր սակագների:</li>
          </ul>
        </div>

        {/* Այլ պայմաններ */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <h3 className="text-lg font-semibold text-purple-800">Այլ պայմաններ</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
            <li>Եթե պայմանագրի ժամկետի ավարտից հետո չեք պահանջում վճարել ժամկետային ավանդի գումարը, ապա ավանդային պայմանագիրը համարվում է երկարաձգված ցպահանջ ավանդի պայմաններով:</li>
            <li>Մենք չենք կարող միակողմանի նվազեցնել պայմանագրով որոշված ավանդի տոկոսագումարների չափը:</li>
            <li>Օրենսդրությամբ սահմանված կարգով՝ դուք իրավունք ունեք ավանդ ներդնել երրորդ անձանց անունով:</li>
          </ul>
        </div>

        {/* Երաշխավորված ավանդների սահմանաչափերը */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <h3 className="text-lg font-semibold text-purple-800">Երաշխավորված ավանդների սահմանաչափերը</h3>
          <p className="text-sm text-gray-700">Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
            <li><strong>Միայն դրամային ավանդ՝</strong> երաշխավորված ավանդի չափը 16 միլիոն դրամ է:</li>
            <li><strong>Միայն արտարժութային ավանդ՝</strong> երաշխավորված ավանդի չափը 7 միլիոն դրամ է:</li>
            <li><strong>Դրամային ու արտարժութային ավանդներ (դրամայինը 7 մլն-ից ավել է)՝</strong> երաշխավորվում է միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով:</li>
            <li><strong>Դրամային ու արտարժութային ավանդներ (դրամայինը պակաս է 7 մլն-ից)՝</strong> երաշխավորվում է դրամայինն ամբողջությամբ և արտարժութայինը՝ մնացած գումարի չափով:</li>
          </ul>
        </div>

        {/* Պայմաններ և սակագներ */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-purple-900 border-b pb-2">Պայմաններ և սակագներ</h2>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-800">Ներգրավվող գումարների սահմանաչափեր և տոկոսադրույքներ</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border border-gray-200 p-2 text-left">Արժույթ / Սահմանաչափ</th>
                    <th className="border border-gray-200 p-2">91-180 օր</th>
                    <th className="border border-gray-200 p-2">181-365 օր</th>
                    <th className="border border-gray-200 p-2">366-545 օր</th>
                    <th className="border border-gray-200 p-2">546-730 օր</th>
                    <th className="border border-gray-200 p-2">731-1095 օր</th>
                  </tr>
                </thead>
                <tbody className="text-center text-gray-600">
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">200,000 - 25,000,000 ՀՀ դրամ</td>
                    <td className="border border-gray-200 p-2">6%</td>
                    <td className="border border-gray-200 p-2">8%</td>
                    <td className="border border-gray-200 p-2">9.5%</td>
                    <td className="border border-gray-200 p-2">10%</td>
                    <td className="border border-gray-200 p-2">10.5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">500 - 50,000 ԱՄՆ դոլար</td>
                    <td className="border border-gray-200 p-2">2%</td>
                    <td className="border border-gray-200 p-2">3%</td>
                    <td className="border border-gray-200 p-2">4%</td>
                    <td className="border border-gray-200 p-2">4.5%</td>
                    <td className="border border-gray-200 p-2">5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">500 - 40,000 Եվրո</td>
                    <td className="border border-gray-200 p-2">1%</td>
                    <td className="border border-gray-200 p-2">1.5%</td>
                    <td className="border border-gray-200 p-2">2%</td>
                    <td className="border border-gray-200 p-2">2.5%</td>
                    <td className="border border-gray-200 p-2">3%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">30,000 - 3,000,000 ՌԴ ռուբլի</td>
                    <td className="border border-gray-200 p-2">5%</td>
                    <td className="border border-gray-200 p-2">5.5%</td>
                    <td className="border border-gray-200 p-2">6%</td>
                    <td className="border border-gray-200 p-2">-</td>
                    <td className="border border-gray-200 p-2">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <h4 className="text-sm font-semibold text-gray-800">Ժամկետից շուտ լուծման վերահաշվարկի դրույքաչափեր</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border border-gray-200 p-2 text-left">Ավանդի արժույթ</th>
                    <th className="border border-gray-200 p-2">Մինչև 365 օր</th>
                    <th className="border border-gray-200 p-2">366 - 1095 օր</th>
                  </tr>
                </thead>
                <tbody className="text-center text-gray-600">
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">ՀՀ դրամ</td>
                    <td className="border border-gray-200 p-2">0.5%</td>
                    <td className="border border-gray-200 p-2">8.5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">ԱՄՆ դոլար</td>
                    <td className="border border-gray-200 p-2">0.1%</td>
                    <td className="border border-gray-200 p-2">3.5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">Եվրո</td>
                    <td className="border border-gray-200 p-2">0.1%</td>
                    <td className="border border-gray-200 p-2">1.5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">ՌԴ ռուբլի</td>
                    <td className="border border-gray-200 p-2">0.1%</td>
                    <td className="border border-gray-200 p-2">5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <h4 className="text-sm font-semibold text-gray-800">Տրամադրվող վճարային քարտեր ըստ ավանդի գումարի</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border border-gray-200 p-2 text-left">Արժույթ / Քարտի տեսակ</th>
                    <th className="border border-gray-200 p-2">Mastercard Standart / Visa Classic</th>
                    <th className="border border-gray-200 p-2">Mastercard Gold / Visa Gold</th>
                    <th className="border border-gray-200 p-2">VISA Infinite</th>
                  </tr>
                </thead>
                <tbody className="text-center text-gray-600">
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">ՀՀ դրամ</td>
                    <td className="border border-gray-200 p-2">500,000 – 25,000,000</td>
                    <td className="border border-gray-200 p-2">25,000,001 – 50,000,000</td>
                    <td className="border border-gray-200 p-2">50,000,001 և ավել</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">ԱՄՆ դոլար</td>
                    <td className="border border-gray-200 p-2">1,000 – 50,000</td>
                    <td className="border border-gray-200 p-2">50,001 – 100,000</td>
                    <td className="border border-gray-200 p-2">100,001 և ավել</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">Եվրո</td>
                    <td className="border border-gray-200 p-2">1,000 – 40,000</td>
                    <td className="border border-gray-200 p-2">40,001 – 100,000</td>
                    <td className="border border-gray-200 p-2">100,001 և ավել</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-2 text-left font-medium">ՌԴ ռուբլի</td>
                    <td className="border border-gray-200 p-2">60,000 – 3,000,000</td>
                    <td className="border border-gray-200 p-2">3,000,001 – 7,000,000</td>
                    <td className="border border-gray-200 p-2">7,000,001 և ավել</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FATCA Ծանուցում */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <h3 className="text-lg font-semibold text-purple-800">Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Հարգելի Հաճախորդ, «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ն Հայաստանի Հանրապետության և Ամերիկայի Միացյալ Նահանգների միջև «Օտարերկրյա հաշիվների հարկային համապատասխանության ակտի» կիրարկմանն օժանդակելու համագործակցության մասին համաձայնագրի պահանջներից ելնելով իրավասու է հաճախորդներից պահանջել լրացուցիչ տեղեկատվություն (FATCA ինքնահայտարարագրման ձևեր):
          </p>
        </div>
      </section>

      {/* Evoca Online / Mobile բաժին */}
      <EvocaOnlineMobile />

      {/* Footer բաժին */}
      <Footer />
    </div>
  );
}