import { useEffect, useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [billPercent, setBillPercent] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipPerPersonAmount, setTipPersonAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  function forBillAmount(value) {
    setBillAmount(parseFloat(value));
  }

  function forBillPercent(value) {
    setBillPercent(parseFloat(value));
  }

  function forNumberOfPeople(value) {
    setNumberOfPeople(parseInt(value));
  }

  useEffect(() => {
    if (billAmount > 0 && billPercent > 0 && numberOfPeople > 0) {
      const tipPercent = billPercent / 100;
      const tipAmount = tipPercent * billAmount;
      const billAmountWithTip = billAmount + tipAmount;
      const tipPerPerson = tipAmount / numberOfPeople;
      const totalPerPerson = billAmountWithTip / numberOfPeople;

      setTipPersonAmount(tipPerPerson.toFixed(2));
      setTotalAmount(totalPerPerson.toFixed(2));
    }
  }, [billAmount, billPercent, numberOfPeople]);

  return (
    <div className="w-full min-h-screen bg-[#C5E4E7] flex flex-col items-center justify-center px-4 py-8">
      <div className="mt-8 mb-12">
        <h1 className="text-center text-2xl font-bold tracking-[0.5em] text-[#4C6F71]">
          SPLI
        </h1>
        <h1 className="text-center text-2xl font-bold tracking-[0.5em] text-[#4C6F71]">
          TTER
        </h1>
      </div>

      <div className="w-full max-w-4xl p-6 md:p-8 rounded-3xl bg-white shadow-lg">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Input Section */}
          <div className="flex-1 space-y-6">
            {/* Bill Input */}
            <div className="relative">
              <label htmlFor="dollars" className="text-[#687B7B]">
                Bill
              </label>
              <img
                src="/images/icon-dollar.svg"
                className="absolute bottom-4 left-4"
                alt="dollar icon"
              />
              <input
                type="number"
                onChange={(e) => forBillAmount(e.target.value)}
                className="w-full mt-2 text-2xl bg-[#F3F8FB] py-2 text-[#073F43] rounded text-right pr-4"
                id="dollars"
                min="0"
              />
            </div>

            {/* Tip Selection */}
            <div>
              <h1 className="text-[#687B7B]">Select Tip %</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                {[5, 10, 15, 25, 30].map((percent) => (
                  <button
                    key={percent}
                    onClick={() => forBillPercent(percent)}
                    className="py-2 text-xl bg-[#00474B] text-white rounded hover:bg-[#9FE8DF] hover:text-[#00474B] transition duration-300"
                  >
                    {percent}%
                  </button>
                ))}
                <input
                  type="number"
                  onChange={(e) => forBillPercent(e.target.value)}
                  className="py-2 text-xl bg-[#F3F9F9] text-[#00474B] text-center rounded"
                  placeholder="Custom"
                  min="0"
                />
              </div>
            </div>

            {/* Number of People Input */}
            <div className="relative">
              <label htmlFor="people" className="text-[#687B7B]">
                Number of People
              </label>
              <img
                src="/images/icon-person.svg"
                className="absolute bottom-4 left-4"
                alt="person icon"
              />
              <input
                type="number"
                className="w-full mt-2 text-2xl bg-[#F3F8FB] py-2 text-[#073F43] rounded text-right pr-4"
                id="people"
                defaultValue={1}
                onChange={(e) => forNumberOfPeople(e.target.value)}
                min="1"
              />
            </div>
          </div>

          {/* Result Section */}
          <div className="flex-1 bg-[#00474B] text-white p-6 rounded-2xl flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1>Tip Amount</h1>
                  <h2 className="text-[#66999D]">/ person</h2>
                </div>
                <h1 className="text-4xl text-[#1AC8AC]">
                  ${tipPerPersonAmount}
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h1>Total</h1>
                  <h2 className="text-[#66999D]">/ person</h2>
                </div>
                <h1 className="text-4xl text-[#1AC8AC]">${totalAmount}</h1>
              </div>
            </div>
            <button
              className="w-full mt-8 py-3 rounded text-[#00474D] bg-[#26C2AD] hover:bg-[#9FE8DF] transition duration-300"
              onClick={() => {
                setBillAmount(0);
                setBillPercent(0);
                setNumberOfPeople(1);
                setTipPersonAmount("0.00");
                setTotalAmount("0.00");
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
