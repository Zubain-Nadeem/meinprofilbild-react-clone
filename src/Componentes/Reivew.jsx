import React from "react";
import Star from "../assets/images/hero-section-images/left-container-images/star.png";
import People1 from "../assets/images/hero-section-images/left-container-images/people1.png";
import People2 from "../assets/images/hero-section-images/left-container-images/people2.png";
import People3 from "../assets/images/hero-section-images/left-container-images/people3.png";
import People4 from "../assets/images/hero-section-images/left-container-images/people4.png";
import People5 from "../assets/images/hero-section-images/left-container-images/people5.png";
import Image1 from "../assets/images/companies/social_step.png";
import Image2 from "../assets/images/companies/social_fb.png";
import Image3 from "../assets/images/companies/imgpsh_fullsize_anim.png";
import Image4 from "../assets/images/companies/social_linkedin.png";
import Image5 from "../assets/images/companies/social_xing.png";
import Image6 from "../assets/images/companies/imgpsh_fullsize_anim2.png";
const Reivew = () => {
  return (
    <div className=" h-[500px] bg-[#F3F2EF]">
      <div className="w-[85%] mx-auto p-4 flex flex-col items-center justify-center gap-2.5">
        <div className="flex gap-2">
          <img src={Star} alt="star image" />
          <img src={Star} alt="star image" />
          <img src={Star} alt="star image" />
          <img src={Star} alt="star image" />
          <img src={Star} alt="star image" />
        </div>

        <div className="flex items-center relative">
          <img src={People1} alt="people" className="relative top-0 left-0" />
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
          <p className=" text-xl">
            Join tens of thousands of satisfied customers and take your career
            to the next level today.
          </p>
        </div>

        <div className="flex items-center gap-7">
          <img src={Image1} alt="Social companies images" />
          <img src={Image2} alt="Social companies images" />
          <img src={Image3} alt="Social companies images" />
          <img src={Image4} alt="Social companies images" />
          <img src={Image5} alt="Social companies images" />
          <img src={Image6} alt="Social companies images" />
        </div>
      </div>
    </div>
  );
};

export default Reivew;
