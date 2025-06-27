import React from "react";
import CheckedImg from "../assets/images/checked.png";
import Star from "../assets/images/hero-section-images//left-container-images/star.png";
import People1 from "../assets/images/hero-section-images/left-container-images/people1.png";
import People2 from "../assets/images/hero-section-images/left-container-images/people2.png";
import People3 from "../assets/images/hero-section-images/left-container-images/people3.png";
import People4 from "../assets/images/hero-section-images/left-container-images/people4.png";
import People5 from "../assets/images/hero-section-images/left-container-images/people5.png";
import Men1 from "../assets/images/hero-section-images/right-container-images/h_man1.png";
import Men2 from "../assets/images/hero-section-images/right-container-images/h_man2.png";
import Men3 from "../assets/images/hero-section-images/right-container-images/h_man3.png";
import Upload from "../assets/images/hero-section-images/right-container-images/upload_blue.4ff0c6dd.svg";
import SubMen1 from "../assets/images/hero-section-images/right-container-images/man_sub1.png";
import SubMen2 from "../assets/images/hero-section-images/right-container-images/man_sub2.png";
import SubMen3 from "../assets/images/hero-section-images/right-container-images/man_sub3.png";
import SubMen4 from "../assets/images/hero-section-images/right-container-images/man_sub4.png";
const Hero = () => {
  return (
    <div>
      <main className=" min-h-[100vh] flex justify-center items-center ">
        <div className=" w-[85%] min-h-[500px] flex p-2.5  gap-4">
          {/* left */}
          <section className=" w-[50%] h-[500px] flex flex-col gap-5">
            <h1 className="text-5xl">
              Turn your selfies into professional application photos!
            </h1>
            <p className="text-2xl">
              We transform your pictures into high-quality application photos
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex  items-center gap-2.5">
                <img
                  src={CheckedImg}
                  alt="check image"
                  className="h-5  bg-contain"
                />
                <p>Simply upload & relax</p>
              </div>
              <div className="flex  items-center gap-2.5">
                <img
                  src={CheckedImg}
                  alt="check image"
                  className="h-5  bg-contain"
                />
                <p>State-of-the-art AI technology</p>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src={CheckedImg}
                  alt="check image"
                  className="h-5  bg-contain"
                />
                <p>Fast delivery</p>
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
                <p>2,000+ satisfied customers</p>
              </div>
            </div>
          </section>
          {/* right */}
          <section className=" w-[50%]">
            <div>
              <div className="relative">
                <img src={Men1} alt="men 1" className="" />
                <img
                  src={Men2}
                  alt="men 2"
                  className="absolute top-2 right-6 -z-10"
                />
                <img
                  src={Men3}
                  alt="men 3"
                  className="absolute top-50 right-4"
                />
              </div>

              <div>
                <div className="flex gap-0.5">

                  <img src={Upload} alt="upload" />
                  <span className="text-blue-400 text-sm">Uploaded images</span>
                </div>
                <div className="border border-black w-[20%] h-[120px] rounded-3xl flex justify-center items-center gap-4.5">
                  <div className="flex flex-col gap-2">
                    <img src={SubMen1} alt="subm men" />
                    <img src={SubMen2} alt="subm men" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <img src={SubMen3} alt="subm men" />
                    <img src={SubMen4} alt="subm men" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Hero;
