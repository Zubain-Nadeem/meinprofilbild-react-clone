import React from "react";
import Card1Image1 from "../assets/images/threestep/card1-1.png";
import Card1Image2 from "../assets/images/threestep/card1-2.png";
import Card2Image1 from "../assets/images/threestep/card2-1.png"
import Card2Image2 from "../assets/images/threestep/card2-2.svg"
import Card3Image1 from "../assets/images/checked.png"
import Card3Image2 from "../assets/images/threestep/card2-2.webp"
const ThreeStep = () => {
  return (
    <div className=" bg-[#F3F2EF]">
      <div className=" mx-auto w-[85%] py-6 flex flex-col gap-8 items-center  ">
        <h1 className="text-6xl text-center mb-6">
          It's that simple: 3 steps to your professional application photo
        </h1>
        <div className=" mt-3 flex justify-between">
          <div className=" w-[30%] bg-white rounded-2xl p-2 flex flex-col justify-center items-center gap-6">
            <div className="mb-2.5">
              <img src={Card1Image1} alt="Cards images" />
            </div>

            <h2 className="text-2xl font-semibold">Upload images</h2>

            <p>
              Select your selfies and upload them to our secure platform. A
              simple background and good lighting are key—and of course, your
              smile!
            </p>

            <img src={Card1Image2} alt="cardimages" />
          </div>

          <div className=" w-[30%] bg-white rounded-2xl p-2 flex flex-col justify-center items-center gap-6">
            <div className="mb-2.5">
              <img src={Card3Image1} alt="Cards images" className="h-8" />
            </div>

            <h2 className="text-2xl font-semibold">Upload images</h2>

            <p>
              Select your selfies and upload them to our secure platform. A
              simple background and good lighting are key—and of course, your
              smile!
            </p>

            <img src={Card3Image2} alt="cardimages" />
          </div>

          <div className=" w-[30%] bg-white rounded-2xl p-2 flex flex-col justify-center items-center gap-6">
            <div className="mb-2.5">
              <img src={Card2Image1} alt="Cards images" />
            </div>

            <h2 className="text-2xl font-semibold">Upload images</h2>

            <p>
              Select your selfies and upload them to our secure platform. A
              simple background and good lighting are key—and of course, your
              smile!
            </p>

            <img src={Card2Image2} alt="cardimages" />
          </div>

        </div>
        <button className="px-5 bg-orange-500 py-4 rounded-2xl text-white cursor-pointer hover:bg-slate-600">Start now  </button>
      </div>
    </div>
  );
};

export default ThreeStep;
