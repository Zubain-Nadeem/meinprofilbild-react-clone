import React from "react";
import GroupImage from "../assets/images/group/group-me.png"
import Arrow from "../assets/images/prices section/Arrow.svg";

const PhotoSection = () => {
  return (
    <div className=" h-[600px] bg-[#F3F2EF] flex justify-center items-center">
      <div className="w-[85%]  mx-auto h-[380px] bg-white rounded-2xl flex justify-between">
        <div className=" w-[48%] h-full p-4 flex flex-col items-center gap-4">
          <h1 className="text-4xl">
            Get started now with your new application photos – quickly and
            easily!
          </h1>
          <p className="text-gray-500">
            Experience for yourself how our AI technology transforms your
            everyday photos into professional application photos. Perfect for
            LinkedIn, resumes, and all other professional needs.
          </p>
          <div className="self-start  flex px-6 py-4 rounded-3xl bg-orange-500  text-white ">
            <button>Start now</button>
            <img src={Arrow} alt="arrow image" />
          </div>
        </div>

        <div className=" w-[48%] ">
            <img src={GroupImage} alt="goupe image" className=" bg-contain w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;
