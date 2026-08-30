import React, { useState } from 'react';

function EvocaCalculator() {
  const [activeTab, setActiveTab] = useState('loan'); // 'loan' կամ 'deposit'
  
  // Վարկի վիճակներ
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanMonths, setLoanMonths] = useState(12);
  const [loanRate, setLoanRate] = useState(12);
  const [repaymentType, setRepaymentType] = useState('annuity'); // 'annuity' կամ 'equal' (Զանգվածաձև/Մայր գումար)

  // Ավանդի վիճակներ
  const [depositAmount, setDepositAmount] = useState(1000000);
  const [depositMonths, setDepositMonths] = useState(12);
  const [depositRate, setDepositRate] = useState(8);

  // Ճշգրիտ հաշվարկման տրամաբանություն
  const calculateLoanResult = () => {
    const p = loanAmount;
    const r = loanRate / 100 / 12;
    const n = loanMonths;

    if (r === 0) return Math.round(p / n);

    if (repaymentType === 'annuity') {
      // Անուիտետային մարում (Հավասար ամսական վճարներ)
      const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      return Math.round(monthlyPayment);
    } else {
      // Զանգվածաձև / Մայր գումարի հավասար մասնաբաժինով
      const principalPart = p / n;
      const firstMonthInterest = p * r;
      return Math.round(principalPart + firstMonthInterest);
    }
  };

  const calculateDepositResult = () => {
    const p = depositAmount;
    const r = depositRate / 100;
    const t = depositMonths / 12;
    // Պարզ տոկոսագումարի հաշվարկ ավանդի համար
    const totalProfit = p * r * t;
    return Math.round(p + totalProfit);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Վերնագիր */}
        <h2 className="text-4xl font-black text-neutral-900 text-center mb-12">
          Հաշվիչներ
        </h2>

        {/* Գլխավոր բլոկի շրջանակ */}
        <div className="bg-white border border-neutral-200 rounded-3xl shadow-xl p-8 lg:p-12">
          
          {/* Ներդիրներ (Tabs) */}
          <div className="flex gap-4 mb-8 border-b border-neutral-100 pb-4">
            <button
              onClick={() => setActiveTab('loan')}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all cursor-pointer ${
                activeTab === 'loan'
                  ? 'bg-[#f0f7fe] text-[#6400DC]'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Վարկ
            </button>
            <button
              onClick={() => setActiveTab('deposit')}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all cursor-pointer ${
                activeTab === 'deposit'
                  ? 'bg-[#f0f7fe] text-[#6400DC]'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Ավանդ
            </button>
          </div>

          {activeTab === 'loan' ? (
            /* --- ՎԱՐԿԻ ՀԱՇՎԻՉ --- */
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Վարկի գումար */}
                <div className="border border-neutral-200 rounded-2xl p-5 bg-neutral-50/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-500 font-medium">Վարկի գումար</span>
                    <span className="text-2xl font-black text-neutral-900">
                      {loanAmount.toLocaleString()} AMD
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="50000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[#6400DC] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-neutral-400 mt-2">
                    <span>100,000</span>
                    <span>50,000,000</span>
                  </div>
                </div>

                {/* Ժամկետ */}
                <div className="border border-neutral-200 rounded-2xl p-5 bg-neutral-50/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-500 font-medium">Ժամկետ</span>
                    <span className="text-2xl font-black text-neutral-900">
                      {loanMonths} ամիս
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="120"
                    step="1"
                    value={loanMonths}
                    onChange={(e) => setLoanMonths(Number(e.target.value))}
                    className="w-full accent-[#6400DC] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-neutral-400 mt-2">
                    <span>1 ամիս</span>
                    <span>120 ամիս</span>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Տոկոսադրույք */}
                <div className="border border-neutral-200 rounded-2xl p-5 bg-neutral-50/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-500 font-medium">Տարեկան տոկոսադրույք</span>
                    <span className="text-2xl font-black text-neutral-900">
                      {loanRate} %
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="36"
                    step="0.5"
                    value={loanRate}
                    onChange={(e) => setLoanRate(Number(e.target.value))}
                    className="w-full accent-[#6400DC] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-neutral-400 mt-2">
                    <span>1%</span>
                    <span>36%</span>
                  </div>
                </div>

                {/* Մարման ձև */}
                <div>
                  <span className="text-neutral-500 font-medium block mb-3">Մարման ձև</span>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="repayment"
                        checked={repaymentType === 'annuity'}
                        onChange={() => setRepaymentType('annuity')}
                        className="w-5 h-5 accent-[#6400DC]"
                      />
                      <span className="font-semibold text-neutral-800">Անուիտետային</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="repayment"
                        checked={repaymentType === 'equal'}
                        onChange={() => setRepaymentType('equal')}
                        className="w-5 h-5 accent-[#6400DC]"
                      />
                      <span className="font-semibold text-neutral-800">Զանգվածաձև</span>
                    </label>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            /* --- ԱՎԱՆԴԻ ՀԱՇՎԻՉ --- */
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Ավանդի գումար */}
                <div className="border border-neutral-200 rounded-2xl p-5 bg-neutral-50/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-500 font-medium">Ավանդի գումար</span>
                    <span className="text-2xl font-black text-neutral-900">
                      {depositAmount.toLocaleString()} AMD
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="20000000"
                    step="100000"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full accent-[#6400DC] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-neutral-400 mt-2">
                    <span>100,000</span>
                    <span>20,000,000</span>
                  </div>
                </div>

                {/* Ժամկետ */}
                <div className="border border-neutral-200 rounded-2xl p-5 bg-neutral-50/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-500 font-medium">Ժամկետ</span>
                    <span className="text-2xl font-black text-neutral-900">
                      {depositMonths} ամիս
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="36"
                    step="1"
                    value={depositMonths}
                    onChange={(e) => setDepositMonths(Number(e.target.value))}
                    className="w-full accent-[#6400DC] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-neutral-400 mt-2">
                    <span>1 ամիս</span>
                    <span>36 ամիս</span>
                  </div>
                </div>

              </div>

              {/* Տոկոսադրույք */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border border-neutral-200 rounded-2xl p-5 bg-neutral-50/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-neutral-500 font-medium">Տարեկան տոկոսադրույք</span>
                    <span className="text-2xl font-black text-neutral-900">
                      {depositRate} %
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.5"
                    value={depositRate}
                    onChange={(e) => setDepositRate(Number(e.target.value))}
                    className="w-full accent-[#6400DC] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-neutral-400 mt-2">
                    <span>1%</span>
                    <span>15%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ստորին հատված՝ հայտարարություն և արդյունքի կոճակ */}
          <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-xs text-neutral-400 max-w-xl">
              Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
            </p>

            <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
              <div className="text-right">
                <span className="block text-xs text-neutral-400">
                  {activeTab === 'loan' ? 'Մոտավոր ամսական վճար' : 'Ընդհանուր գումար ժամկետի վերջում'}
                </span>
                <span className="text-2xl lg:text-3xl font-black text-[#6400DC]">
                  {activeTab === 'loan' 
                    ? `${calculateLoanResult().toLocaleString()} AMD` 
                    : `${calculateDepositResult().toLocaleString()} AMD`}
                </span>
              </div>

              <button 
                onClick={() => alert('Հաշվարկը հաստատվեց։')}
                className="bg-[#6400DC] hover:bg-[#5200b3] text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                Հաշվել
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default EvocaCalculator;