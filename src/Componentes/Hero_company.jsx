import React from "react";
import CheckedImg from "../assets/images/checked.png";
import Star from "../assets/images/hero-section-images//left-container-images/star.png";
import People1 from "../assets/images/hero-section-images/left-container-images/people1.png";
import People2 from "../assets/images/hero-section-images/left-container-images/people2.png";
import People3 from "../assets/images/hero-section-images/left-container-images/people3.png";
import People4 from "../assets/images/hero-section-images/left-container-images/people4.png";
import People5 from "../assets/images/hero-section-images/left-container-images/people5.png";
import RightSideImage from "../assets/images/for-companies-section images/hero-compnayimages/Rectangle.png"
const Hero = () => {
  return (
    <div>
      <main className=" min-h-[80vh] pt-7 flex justify-center items-center  bg-[#F3F2EF] ">
        <div className=" w-[85%] min-h-[500px] flex p-2.5  gap-4">
          {/* left */}
          <section className=" w-[50%] h-[500px] flex flex-col gap-5">
            <h1 className="text-5xl">
             Create professional team photos and employee portraits
            </h1>
            <p className="text-2xl">
              Turn your employees' selfies into high-quality employee photos
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex  items-center gap-2.5">
                <img
                  src={CheckedImg}
                  alt="check image"
                  className="h-5  bg-contain"
                />
                <p>Simply upload & show team spirit</p>
              </div>
              <div className="flex  items-center gap-2.5">
                <img
                  src={CheckedImg}
                  alt="check image"
                  className="h-5  bg-contain"
                />
                <p> Advanced AI technology</p>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src={CheckedImg}
                  alt="check image"
                  className="h-5  bg-contain"
                />
                <p> Fast implementation</p>
              </div>
            </div>
            <div>
              <button className="bg-[#FF6B00] px-6 py-3.5 rounded-2xl text-white hover:bg-slate-600 cursor-pointer">
                Start now
              </button>
            </div>
            <div className="flex gap-[40px]  items-center">
              <div className="flex items-center relative">
                <img
                  src={People1}
                  alt="people"
                  className="relative top-0 left-0"
                />
                <img
                  src={People2}
                  alt="people"
                  className="relative top-0 right-[14px]"
                />
                <img
                  src={People3}
                  alt="people"
                  className="relative top-0 right-[24px]"
                />
                <img
                  src={People4}
                  alt="people"
                  className="relative top-0 right-[34px]"
                />
                <img
                  src={People5}
                  alt="people"
                  className="relative top-0 right-[44px]"
                />
              </div>

              <div>
                <div className="flex gap-2">
                  <img src={Star} alt="star image" />
                  <img src={Star} alt="star image" />
                  <img src={Star} alt="star image" />
                  <img src={Star} alt="star image" />
                  <img src={Star} alt="star image" />
                </div>
                <p>50+ satisfied customers</p>
              </div>
            </div>
          </section>
          {/* right */}
          <section className=" w-[50%] ">
            <img src={RightSideImage} alt="reactandgle iamge" className="w-full h-[700px] bg-cover" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Hero;
