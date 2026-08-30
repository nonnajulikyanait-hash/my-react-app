import React, { useState } from 'react';

function EvocaCalculator() {
  const [activeTab, setActiveTab] = useState('loan'); // 'loan' կամ 'deposit'
  
  // Վարկի վիճակներ
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanMonths, setLoanMonths] = useState(1);
  const [loanRate, setLoanRate] = useState(1);
  const [repaymentType, setRepaymentType] = useState('equal'); // 'equal' (Զանգվածաձև) կամ 'annuity' (Անուիտետ)

  // Ավանդի վիճակներ
  const [depositAmount, setDepositAmount] = useState(0);
  const [depositMonths, setDepositMonths] = useState(1);
  const [depositRate, setDepositRate] = useState(1);

  // Ճշգրիտ հաշվարկման տրամաբանություն
  const calculateLoanResult = () => {
    const p = loanAmount;
    const r = loanRate / 100 / 12;
    const n = loanMonths;

    if (p === 0 || n === 0) return 0;
    if (r === 0) return Math.round(p / n);

    if (repaymentType === 'annuity') {
      const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      return Math.round(monthlyPayment);
    } else {
      const principalPart = p / n;
      const firstMonthInterest = p * r;
      return Math.round(principalPart + firstMonthInterest);
    }
  };

  const calculateDepositResult = () => {
    const p = depositAmount;
    const r = depositRate / 100;
    const t = depositMonths / 12;
    const totalProfit = p * r * t;
    return Math.round(p + totalProfit);
  };

  return (
    <section className="bg-white py-16">
      {/* max-w-5xl դարձրեցի, որ ավելի նեղ ու հավաք լինի, իսկ mx-auto px-6-ի հետ տեքստերը գնան ձախ */}
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Վերնագիրը հիմա ձախ է (text-left) */}
        <h2 className="text-3xl lg:text-4xl font-black text-neutral-900 text-left mb-8">
          Հաշվիչներ
        </h2>

        {/* Գլխավոր բլոկի շրջանակ */}
        <div className="bg-white border border-neutral-200/80 rounded-3xl shadow-lg p-6 lg:p-10">
          
          {/* Ներդիրներ (Tabs) */}
          <div className="flex gap-4 mb-8 border-b border-neutral-100 pb-4">
            <button
              onClick={() => setActiveTab('loan')}
              className={`px-7 py-2.5 rounded-xl font-bold text-base transition-all cursor-pointer ${
                activeTab === 'loan'
                  ? 'bg-[#f0f7fe] text-[#6400DC]'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Վարկ
            </button>
            <button
              onClick={() => setActiveTab('deposit')}
              className={`px-7 py-2.5 rounded-xl font-bold text-base transition-all cursor-pointer ${
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
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Վարկի գումար */}
                <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-neutral-500 text-sm font-medium">Վարկի գումար</span>
                    <span className="text-xl font-black text-neutral-900">
                      {loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[#6400DC] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                    <span>0</span>
                    <span>50000000</span>
                  </div>
                </div>

                {/* Ժամկետ */}
                <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-neutral-500 text-sm font-medium">Ժամկետ</span>
                    <span className="text-xl font-black text-neutral-900">
                      {loanMonths} ամիս
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="1200"
                    step="1"
                    value={loanMonths}
                    onChange={(e) => setLoanMonths(Number(e.target.value))}
                    className="w-full accent-[#6400DC] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                    <span>1 ամիս</span>
                    <span>1200 ամիս</span>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                
                {/* Տոկոսադրույք */}
                <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-neutral-500 text-sm font-medium">Տարեկան տոկոսադրույք</span>
                    <span className="text-xl font-black text-neutral-900">
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
                  <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                    <span>1%</span>
                    <span>36%</span>
                  </div>
                </div>

                {/* Մարման ձև */}
                <div>
                  <span className="text-neutral-500 text-sm font-medium block mb-2">Մարման ձև</span>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="repayment"
                        checked={repaymentType === 'equal'}
                        onChange={() => setRepaymentType('equal')}
                        className="w-4 h-4 accent-[#6400DC]"
                      />
                      <span className="text-sm font-semibold text-neutral-800">Զանգվածաձև</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="repayment"
                        checked={repaymentType === 'annuity'}
                        onChange={() => setRepaymentType('annuity')}
                        className="w-4 h-4 accent-[#6400DC]"
                      />
                      <span className="text-sm font-semibold text-neutral-800">Անուիտետ</span>
                    </label>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            /* --- ԱՎԱՆԴԻ ՀԱՇՎԻՉ --- */
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Ավանդի գումար */}
                <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-neutral-500 text-sm font-medium">Ավանդի գումար</span>
                    <span className="text-xl font-black text-neutral-900">
                      {depositAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000000"
                    step="100000"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full accent-[#6400DC] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                    <span>0</span>
                    <span>20000000</span>
                  </div>
                </div>

                {/* Ժամկետ */}
                <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-neutral-500 text-sm font-medium">Ժամկետ</span>
                    <span className="text-xl font-black text-neutral-900">
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
                  <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                    <span>1 ամիս</span>
                    <span>36 ամիս</span>
                  </div>
                </div>

              </div>

              {/* Տոկոսադրույք */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border border-neutral-200 rounded-2xl p-4 bg-neutral-50/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-neutral-500 text-sm font-medium">Տարեկան տոկոսադրույք</span>
                    <span className="text-xl font-black text-neutral-900">
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
                  <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                    <span>1%</span>
                    <span>15%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ստորին հատված՝ հայտարարություն և հաշվելու կոճակ */}
          <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-[11px] text-neutral-400 max-w-md text-left">
              Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
            </p>

            <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
              <div className="text-right">
                <span className="block text-[11px] text-neutral-400">
                  {activeTab === 'loan' ? 'Բոլոր հաշվարկները կրում են մոտավոր բնույթ' : 'Ընդհանուր գումար'}
                </span>
                <span className="text-xl lg:text-2xl font-black text-[#6400DC]">
                  {activeTab === 'loan' 
                    ? `${calculateLoanResult().toLocaleString()} AMD` 
                    : `${calculateDepositResult().toLocaleString()} AMD`}
                </span>
              </div>

              <button 
                onClick={() => alert('Հաշվարկը հաստատվեց։')}
                className="bg-[#6400DC] hover:bg-[#5200b3] text-white font-bold px-7 py-3 rounded-2xl shadow-md transition-transform hover:scale-105 cursor-pointer text-sm"
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