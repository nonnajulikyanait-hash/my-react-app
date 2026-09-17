import React, { useState } from 'react';

function Calculator() {
  const [tab, setTab] = useState('loan'); // 'loan' կամ 'deposit'

  // Վարկի վիճակ (State)
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(12); // ամիս
  const [loanRate, setLoanRate] = useState(14); // %
  const [loanType, setLoanType] = useState('annuity'); // 'annuity' կամ 'bullet'

  // Ավանդի վիճակ (State)
  const [depositAmount, setDepositAmount] = useState(1000000);
  const [depositRate, setDepositRate] = useState(8); // %
  const [depositTerm, setDepositTerm] = useState(365); // օր

  // Վարկի հաշվարկ
  const calculateLoan = () => {
    const monthlyRate = loanRate / 100 / 12;
    if (monthlyRate === 0) return Math.round(loanAmount / loanTerm);
    if (loanType === 'annuity') {
      const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
      return Math.round(payment);
    } else {
      // Զանգվածաձև (Մայր գումարը վերջում, ամսական միայն տոկոս)
      return Math.round((loanAmount * monthlyRate));
    }
  };

  // Ավանդի հաշվարկ (օրական կտրվածքով տոկոսագումար և եկամտային հարկ 10%)
  const calculateDeposit = () => {
    const grossInterest = (depositAmount * (depositRate / 100) * depositTerm) / 365;
    const tax = grossInterest * 0.10; // 10% հարկ
    const netInterest = grossInterest - tax;
    return {
      daily: Math.round(grossInterest / depositTerm),
      totalGross: Math.round(grossInterest),
      totalNet: Math.round(netInterest)
    };
  };

  const depositResults = calculateDeposit();

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        
        {/* Վերնագիր */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-8 text-left">
          Հաշվիչներ
        </h2>

        {/* Գլխավոր կոնտեյներ */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-xl border border-neutral-100">
          
          {/* Վարկ / Ավանդ թաբեր */}
          <div className="flex space-x-4 mb-8 border-b border-neutral-100 pb-4">
            <button
              onClick={() => setTab('loan')}
              className={`pb-2 text-lg font-bold transition-colors border-b-2 cursor-pointer ${
                tab === 'loan'
                  ? 'border-[#6400DC] text-[#6400DC]'
                  : 'border-transparent text-neutral-400 hover:text-neutral-600'
              }`}
            >
              Վարկ
            </button>
            <button
              onClick={() => setTab('deposit')}
              className={`pb-2 text-lg font-bold transition-colors border-b-2 cursor-pointer ${
                tab === 'deposit'
                  ? 'border-[#6400DC] text-[#6400DC]'
                  : 'border-transparent text-neutral-400 hover:text-neutral-600'
              }`}
            >
              Ավանդ
            </button>
          </div>

          {/* ----------------- ՎԱՐԿԻ ՀԱՇՎԻՉ ----------------- */}
          {tab === 'loan' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Ձախ սյունակ՝ Վարկի գումար և տոկոսադրույք */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-neutral-600">Վարկի գումար</label>
                      <input 
                        type="number" 
                        value={loanAmount} 
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-36 text-right font-bold text-lg bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-1 focus:outline-none focus:border-[#6400DC]"
                      />
                    </div>
                    <input 
                      type="range" min="100000" max="50000000" step="50000"
                      value={loanAmount} 
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full accent-[#6400DC] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1">
                      <span>0</span>
                      <span>50 000 000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-neutral-600">Տարեկան տոկոսադրույք</label>
                      <span className="font-bold text-lg text-neutral-900">{loanRate}%</span>
                    </div>
                    <input 
                      type="range" min="1" max="36" step="0.5"
                      value={loanRate} 
                      onChange={(e) => setLoanRate(Number(e.target.value))}
                      className="w-full accent-[#6400DC] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1">
                      <span>1%</span>
                      <span>36%</span>
                    </div>
                  </div>
                </div>

                {/* Աջ սյունակ՝ Ժամկետ, մարման ձև և հաշվարկված արդյունք */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-neutral-600">Ժամկետ</label>
                      <span className="font-bold text-lg text-neutral-900">{loanTerm} ամիս</span>
                    </div>
                    <input 
                      type="range" min="1" max="120" step="1"
                      value={loanTerm} 
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full accent-[#6400DC] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1">
                      <span>1 ամիս</span>
                      <span>120 ամիս</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-neutral-600 block mb-2">Մարման ձև</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer font-medium text-sm">
                        <input 
                          type="radio" name="loanType" value="bullet" 
                          checked={loanType === 'bullet'} 
                          onChange={() => setLoanType('bullet')}
                          className="accent-[#6400DC]"
                        />
                        Զանգվածաձև
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-medium text-sm">
                        <input 
                          type="radio" name="loanType" value="annuity" 
                          checked={loanType === 'annuity'} 
                          onChange={() => setLoanType('annuity')}
                          className="accent-[#6400DC]"
                        />
                        Անուիտետ
                      </label>
                    </div>
                  </div>
                </div>

              </div>

              {/* Ներքևի մաս՝ Հաշվարկել կոճակ և նախազգուշացում */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-neutral-100 gap-4">
                <p className="text-xs text-neutral-400 max-w-lg text-center sm:text-left">
                  Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
                </p>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-xs text-neutral-500 block">Ամսական վճար</span>
                    <span className="text-2xl font-bold text-[#6400DC]">{calculateLoan().toLocaleString()} AMD</span>
                  </div>
                  <button className="bg-[#6400DC] hover:bg-[#5200b3] text-white font-bold px-8 py-3 rounded-full shadow-md transition-all cursor-pointer">
                    Հաշվել
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ----------------- ԱՎԱՆԴԻ ՀԱՇՎԻՉ ----------------- */}
          {tab === 'deposit' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Ձախ սյունակ՝ Ներդրվող գումար, տոկոս, ժամկետ */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-neutral-600">Ներդրվող գումար</label>
                      <input 
                        type="number" 
                        value={depositAmount} 
                        onChange={(e) => setDepositAmount(Number(e.target.value))}
                        className="w-36 text-right font-bold text-lg bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-1 focus:outline-none focus:border-[#6400DC]"
                      />
                    </div>
                    <input 
                      type="range" min="10000" max="50000000" step="10000"
                      value={depositAmount} 
                      onChange={(e) => setDepositAmount(Number(e.target.value))}
                      className="w-full accent-[#6400DC] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1">
                      <span>0</span>
                      <span>50 000 000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-neutral-600">Տարեկան տոկոսադրույք</label>
                      <span className="font-bold text-lg text-neutral-900">{depositRate}%</span>
                    </div>
                    <input 
                      type="range" min="0.5" max="20" step="0.5"
                      value={depositRate} 
                      onChange={(e) => setDepositRate(Number(e.target.value))}
                      className="w-full accent-[#6400DC] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1">
                      <span>0.5%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-neutral-600">Ավանդի ժամկետ</label>
                      <span className="font-bold text-lg text-neutral-900">{depositTerm} օր</span>
                    </div>
                    <input 
                      type="range" min="30" max="1095" step="1"
                      value={depositTerm} 
                      onChange={(e) => setDepositTerm(Number(e.target.value))}
                      className="w-full accent-[#6400DC] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-neutral-400 mt-1">
                      <span>30 օր</span>
                      <span>1095 օր</span>
                    </div>
                  </div>
                </div>

                {/* Աջ սյունակ՝ Հաշվարկված եկամուտներ */}
                <div className="bg-neutral-50 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                      <span className="text-xs sm:text-sm text-neutral-600">Օրական կտրվածքով հաշվարկվող տոկոսագումար *</span>
                      <span className="font-bold text-neutral-900">{depositResults.daily.toLocaleString()} AMD</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                      <span className="text-xs sm:text-sm text-neutral-600">Ավանդային պայմանագրի գործողության ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ</span>
                      <span className="font-bold text-neutral-900">{depositResults.totalGross.toLocaleString()} AMD</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-xs sm:text-sm text-neutral-600">Ավանդային պայմանագրի գործողության ընթացքում փաստացի վճարվող զուտ տոկոսային եկամուտ</span>
                      <span className="font-bold text-[#6400DC] text-lg">{depositResults.totalNet.toLocaleString()} AMD</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-400 italic">
                    * Ներդրված ավանդի դիմաց ստացվող տոկոսագումարներին հարկվում են 10% եկամտային հարկի չափով:
                  </p>
                </div>

              </div>

              {/* Ներքևի մաս՝ ծանոթագրություն */}
              <div className="pt-6 border-t border-neutral-100">
                <p className="text-xs text-neutral-400">
                  Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Calculator;