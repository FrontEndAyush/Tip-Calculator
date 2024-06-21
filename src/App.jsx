import { useEffect, useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState();
  const [billPercent, setBillPercent] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipPerPersonAmount, setTipPersonAmount] = useState("0.00");

  function forBillAmount(value) {
    setBillAmount(value);
  }

  function forBillPercent(value) {
    
    setBillPercent(value);
  }

  function forNumberOfPeople(value) {
    setNumberOfPeople(value);
  }
  useEffect(() => {
    if (
      billAmount &&
      billPercent &&
      numberOfPeople &&
      billAmount !== "0" &&
      billPercent !== "0" &&
      numberOfPeople !== "0"
    ) {
      const tipPercent = (parseInt(billPercent) / 100).toFixed(2);
      const tipAmount = tipPercent * billAmount;
      const billAmountWithTip = parseInt(billAmount) + parseInt(tipAmount);
      const tipPerPerson = billAmountWithTip / parseInt(numberOfPeople);

      setTipPersonAmount(tipPerPerson.toFixed(2));
    }
  }, [billAmount, billPercent, numberOfPeople]);

  return (
    <>
      <div className="w-full">
        <div className="mt-[100px]">
          <h1 className="text-center text-[20px] font-bold text-letter-spacing text-[#4C6F71]">
            SPLI
          </h1>
          <h1 className="text-center text-[20px]  font-bold text-letter-spacing text-[#4C6F71]">
            TTER
          </h1>
        </div>

        <div className="lg:w-[860px]  p-9 lg:h-[440px] h-full rounded-2xl mt-14 font-bold gap-7 bg-white flex flex-wrap lg:flex-nowrap mx-auto">
          {/* first main  div  */}
          <div>
            {/* first  */}
            <div className="relative">
              <label htmlFor="dollars text-[#687B7B]">Bill</label>
              <br />
              <img
                src="/images/icon-dollar.svg"
                className="absolute bottom-4 left-4"
                alt=""
              />

              <input
                type="number"
                name=""
                onChange={(e) => forBillAmount(e.target.value)}
                className="w-[354px] mt-2  text-[25px] bg-[#F3F8FB] py-2 text-[#073F43] rounded text-right pr-4 "
                id="dollars"
              />
            </div>

            {/* second  */}
            <div className="mt-8">
              <h1 className="text-[#687B7B]">Select Tip %</h1>
              <div className="mt-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => forBillPercent("5")}
                    className="border px-9 hover:bg-[#9FE8DF] hover:text-[#00474B] duration-300 py-1 text-[25px] bg-[#00474B] text-white rounded "
                  >
                    5%
                  </button>
                  <button
                    onClick={() => forBillPercent("10")}
                    className="border px-9 hover:bg-[#9FE8DF] hover:text-[#00474B] duration-300  py-1 text-[25px] bg-[#00474B] text-white rounded "
                  >
                    10%
                  </button>
                  <button
                    onClick={() => forBillPercent("15")}
                    className="border px-9  hover:bg-[#9FE8DF]  hover:text-[#00474B] duration-300 py-1 text-[25px] bg-[#00474B] text-white rounded "
                  >
                    15%
                  </button>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => forBillPercent("25")}
                    className="border px-7 hover:bg-[#9FE8DF] hover:text-[#00474B] duration-300 py-1 text-[25px] bg-[#00474B] text-white rounded "
                  >
                    25%
                  </button>
                  <button
                    onClick={() => forBillPercent("30")}
                    className="border px-9  hover:bg-[#9FE8DF] hover:text-[#00474B] duration-300 py-1 text-[25px] bg-[#00474B] text-white rounded "
                  >
                    30%
                  </button>
                  <input
                    type="number"
                    onClick={(e) => forBillPercent(e.target.value)}
                    className="w-[120px] text-[#00474B]  bg-[#F3F9F9] text-center text-[25px]"
                    placeholder="Custom"
                  />
                </div>
              </div>
            </div>

            {/* third  */}
            <div className="relative mt-8">
              <label htmlFor="dollars text-[#687B7B]">Number of People</label>
              <br />
              <img
                src="/images/icon-person.svg"
                className="absolute bottom-4 left-4"
                alt=""
              />

              <input
                type="number"
                name=""
                className="w-[354px] text-[25px] mt-2 bg-[#F3F8FB] py-2 text-[#073F43] rounded text-right pr-4 "
                id="dollars"
                defaultValue={1}
                onChange={(e) => forNumberOfPeople(e.target.value)}
              />
            </div>
          </div>

          <div className="w-[400px] relative bg-[#00474B] text-white px-6 h-[385px] ml-5 rounded-2xl">
            <div className="flex mt-10 justify-between">
              <h1>
                Tip Amount <h1 className="text-[#66999D]">/ Person</h1>
              </h1>
              <h1 className="text-5xl text-[#1AC8AC]">${tipPerPersonAmount}</h1>
            </div>
            <div className="flex mt-10 justify-between">
              <h1>
                Tip Amount <h1 className="text-[#66999D]">/ Person</h1>
              </h1>
              <h1 className="text-5xl text-[#1AC8AC]">${tipPerPersonAmount}</h1>
            </div>

            <button className="absolute bottom-8 rounded py-2 w-[330px] hover:bg-[#9FE8DF] duration-300 mx-auto text-[#00474D] bg-[#26C2AD]">
              RESET
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
