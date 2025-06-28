import React from "react";
import CheckedImg from "../assets/images/checked.png";
import Stander from "../assets/images/prices section/standard.png";
import Arrow from "../assets/images/prices section/Arrow.svg"

const Prices = () => {
  return (
    <div className="border-2 border-red-700 py-10 bg-[#F3F2EF]">
      <div className="border border-black mx-auto w-[85%] py-5">
        <h2 className="text-center text-4xl font-semibold">Prices</h2>

        <div className="border border-red-400">
          <div className=" w-[30%] bg-white rounded-2xl p-2.5">
            <div className=" flex gap-2 items-center mb-3">
              <img src={Stander} alt="Prices label" /> <span>Standard</span>
            </div>
            <div className=" flex flex-col justify-center gap-2 mb-3">
              <h2 className="text-5xl text-blue-500 font-semibold">€ 24.90 </h2>
              <p className="text-sm text-gray-500">/per person</p>
            </div>
            <div className="flex flex-col gap-3 text-xl">
              <div className="flex  items-center gap-2.5 ">
                <img
                  src={CheckedImg}
                  alt="check image"
                  className="h-5  bg-contain"
                />
                <p>10 application photos</p>
              </div>
              <div className="flex  items-center gap-2.5">
                <img
                  src={CheckedImg}
                  alt="check image"
                  className="h-5  bg-contain"
                />
                <p>2 different backgrounds + styles</p>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src={CheckedImg}
                  alt="check image"
                  className="h-5  bg-contain"
                />
                <p>Ready in 90 minutes</p>
              </div>
            </div>
            <div className="border-2 border-black flex justify-center gap-1.5 p-2.5 rounded-2xl mt-11 cursor-pointer hover:bg-gray-400 transition-all ease-in-out duration-300 ">
                <button>Start now</button>
                <img src={Arrow} alt=" Arrow Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
