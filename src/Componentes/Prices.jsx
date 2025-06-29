import React from "react";
import CheckedImg from "../assets/images/checked.png";
import Stander from "../assets/images/prices section/standard.png";
import Arrow from "../assets/images/prices section/Arrow.svg";
import Premium from "../assets/images/prices section/premium.png";
import Professional from "../assets/images/prices section/professional.png";

const Prices = () => {
  return (
    <div className="py-10 bg-[#F3F2EF]">
      <div className=" mx-auto w-[85%] py-5">
        <h2 className="text-center text-4xl font-semibold mb-8">Prices</h2>

        <div className=" flex justify-between">
          <div className=" w-[30%] bg-white rounded-2xl p-2.5 h-[353px]">
            <div className=" flex gap-2 items-center mb-3">
              <img src={Stander} alt="Prices label" className="h-7" />{" "}
              <span className="text-xl">Standard</span>
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

          <div className=" w-[30%] bg-white rounded-2xl border-2 border-black h-[440px]">
            <div className="bg-black text-white flex justify-center p-2 items-center rounded-2xl mb-3">
              <h2>Most Popular</h2>
            </div>

            <div className="p-2.5">
              <div className=" flex gap-2 items-center mb-3">
                <img src={Premium} alt="Prices label" className="h-7" />{" "}
                <span className="text-xl">Premium</span>
              </div>
              <div className=" flex flex-col justify-center gap-2 mb-3">
                <h2 className="text-5xl text-black mt-2 font-semibold">
                  € 39.90{" "}
                </h2>
                <p className="text-sm text-gray-500">/per person</p>
              </div>
              <div className="flex flex-col gap-3 text-xl">
                <div className="flex  items-center gap-2.5 ">
                  <img
                    src={CheckedImg}
                    alt="check image"
                    className="h-5  bg-contain"
                  />
                  <p>20 application photos</p>
                </div>
                <div className="flex  items-center gap-2.5">
                  <img
                    src={CheckedImg}
                    alt="check image"
                    className="h-5  bg-contain"
                  />
                  <p>3 different backgrounds + styles</p>
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
              <div className="border-2 border-black bg-orange-500 text-white flex justify-center gap-1.5 p-2.5 rounded-2xl mt-11 cursor-pointer hover:bg-gray-500 transition-all ease-in-out duration-300 ">
                <button>Start now</button>
                <img src={Arrow} alt=" Arrow Image" />
              </div>
            </div>
          </div>

          <div className=" w-[30%] bg-white rounded-2xl border-2 border-blue-500 h-[440px]">
            <div className="bg-blue-500 text-white flex justify-center p-2 items-center rounded-2xl mb-3">
              <h2>All Styles & BackGround</h2>
            </div>

            <div className="p-2.5">
              <div className=" flex gap-2 items-center mb-3">
                <img src={Professional} alt="Prices label" className="h-7" />{" "}
                <span className="text-xl">Professional</span>
              </div>
              <div className=" flex flex-col justify-center gap-2 mb-3">
                <h2 className="text-5xl text-black mt-2 font-semibold">
                  € 59.90{" "}
                </h2>
                <p className="text-sm text-gray-500">/per person</p>
              </div>
              <div className="flex flex-col gap-3 text-xl">
                <div className="flex  items-center gap-2.5 ">
                  <img
                    src={CheckedImg}
                    alt="check image"
                    className="h-5  bg-contain"
                  />
                  <p>30 application photos</p>
                </div>
                <div className="flex  items-center gap-2.5">
                  <img
                    src={CheckedImg}
                    alt="check image"
                    className="h-5  bg-contain"
                  />
                  <p>4 different backgrounds + styles</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <img
                    src={CheckedImg}
                    alt="check image"
                    className="h-5  bg-contain"
                  />
                  <p>Ready in 60 minutes</p>
                </div>
              </div>
              <div className="border-2 border-black flex justify-center gap-1.5 p-2.5 rounded-2xl mt-11 cursor-pointer hover:bg-gray-500 transition-all ease-in-out duration-300 ">
                <button>Start now</button>
                <img src={Arrow} alt=" Arrow Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
