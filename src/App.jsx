function App() {
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

        <div className="w-[700px] p-9 h-[440px] rounded-2xl mt-14 font-bold bg-white flex mx-auto">
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
                className="w-[354px] mt-2  text-[25px] bg-[#F3F8FB] py-2 text-[#073F43] rounded text-right pr-4 "
                id="dollars"
              />
            </div>

            {/* second  */}
            <div className="mt-8">
              <h1 className="text-[#687B7B]">Select Tip %</h1>
              <div className="mt-2">
                <div className="flex gap-2">
                  <button className="border px-9 hover:bg-[#9FE8DF] hover:text-[#00474B] duration-300 py-1 text-[25px] bg-[#00474B] text-white rounded ">
                    5%
                  </button>
                  <button className="border px-9 hover:bg-[#9FE8DF] hover:text-[#00474B] duration-300  py-1 text-[25px] bg-[#00474B] text-white rounded ">
                    10%
                  </button>
                  <button className="border px-9  hover:bg-[#9FE8DF]  hover:text-[#00474B] duration-300 py-1 text-[25px] bg-[#00474B] text-white rounded ">
                    15%
                  </button>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="border px-7 hover:bg-[#9FE8DF] hover:text-[#00474B] duration-300 py-1 text-[25px] bg-[#00474B] text-white rounded ">
                    25%
                  </button>
                  <button className="border px-9  hover:bg-[#9FE8DF] hover:text-[#00474B] duration-300 py-1 text-[25px] bg-[#00474B] text-white rounded ">
                    30%
                  </button>
                 <input type="number" className="w-[120px] text-[#00474B]  bg-[#F3F9F9] text-center text-[25px]" placeholder="Custom"  />
                </div>

                <div></div>
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
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
