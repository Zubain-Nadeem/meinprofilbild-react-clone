import React from "react";
// card 1
import Star from "../assets/images/hero-section-images/left-container-images/star.png";
import Card1Left1 from "../assets/images/susscess stories section/card-1-left1.png";
import Card1Left2 from "../assets/images/susscess stories section/card-1-left-2.png";
import Card1Left3 from "../assets/images/susscess stories section/card-1-left-3.png";
import Card1Right1 from "../assets/images/susscess stories section/card-1-right-1.png";
import Card1Right2 from "../assets/images/susscess stories section/card-1-right-2.png";
import Card1Right3 from "../assets/images/susscess stories section/card-1-right-3.png";
// card 2
import Card2Left1 from "../assets/images/susscess stories section/card-2-left-1.png";
import Card2Left2 from "../assets/images/susscess stories section/card-2-left-2.png";
import Card2Left3 from "../assets/images/susscess stories section/card-2-left-3.jpeg";
import Card2Right1 from "../assets/images/susscess stories section/card-2-right-1.png";
import Card2Right2 from "../assets/images/susscess stories section/card-2-right-2.png";
import Card2Right3 from "../assets/images/susscess stories section/card-2-right-3.jpeg";
// card 3
import Card3Left1 from "../assets/images/susscess stories section/card-3-left-1.jpeg";
import Card3Left2 from "../assets/images/susscess stories section/card-3-left-2.png";
import Card3Left3 from "../assets/images/susscess stories section/card-3-left-3.png";
import Card3Right1 from "../assets/images/susscess stories section/card-3-right-1.jpeg";
import Card3Right2 from "../assets/images/susscess stories section/card-3-right-2.png";
import Card3Right3 from "../assets/images/susscess stories section/card-3-right-3.png";

const Success = () => {
  return (
    <div className="py-12 bg-[#F3F2EF]">
      <div className=" w-[85%] mx-auto py-5 flex flex-col justify-center items-center gap-9">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="mb-6 text-5xl font-semibold">
            From selfie to application hit: Our success stories
          </h1>
          <p className="text-xl">
            Be inspired by our customers' transformations and take the next step
            in your career.
          </p>
        </div>
        {/* Cards */}
        <div className=" mt-4.5 p-2 w-full flex justify-between">
          <div className=" w-[30%] py-2.5 flex flex-col  bg-white p-2 rounded-2xl ">
            <div className="flex items-center justify-between">
              <div className=" flex flex-col text-sm">
                <p>Fleix F.</p>
                <p>feeelancer</p>
              </div>
              <div className="flex  gap-2">
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
              </div>
            </div>

            <div className=" my-2.5">
              <p>
                In my industry, first impressions are crucial. MeinProfilbild.de
                turned my selfie into an application photo that was not only
                professional but also authentic. I've received nothing but
                positive feedback!
              </p>
            </div>

            <div className=" flex items-center justify-evenly">
              <div className="border border-blue-400 bg-[#F3F2EF] flex flex-col gap-2">
                <img
                  src={Card1Left1}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card1Left2}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card1Left3}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
              </div>
              <div className="border border-blue-400 bg-white flex flex-col gap-2">
                <img
                  src={Card1Right1}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card1Right2}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card1Right3}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
              </div>
            </div>
          </div>

          <div className=" w-[30%] py-2.5 flex flex-col  bg-white p-2 rounded-2xl ">
            <div className="flex items-center justify-between">
              <div className=" flex flex-col text-sm">
                <p>Isa W.</p>
                <p>graduate</p>
              </div>
              <div className="flex  gap-2">
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
              </div>
            </div>

            <div className=" my-2.5">
              <p>
                As a recent graduate, I had neither the time nor the money for a
                professional photoshoot. MeinProfilbild.de enabled me to have a
                first-class application photo, and in a very short time. I'm
                convinced this contributed to my successful job entry.
              </p>
            </div>

            <div className=" flex items-center justify-evenly">
              <div className="border border-blue-400 bg-[#F3F2EF] flex flex-col gap-2">
                <img
                  src={Card2Left1}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card2Left2}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card2Left3}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
              </div>
              <div className="border border-blue-400 bg-white flex flex-col gap-2">
                <img
                  src={Card2Right1}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card2Right2}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card2Right3}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
              </div>
            </div>
          </div>

          <div className=" w-[30%] py-2.5 flex flex-col  bg-white p-2 rounded-2xl ">
            <div className="flex items-center justify-between">
              <div className=" flex flex-col text-sm">
                <p>Sarha B.</p>
                <p>project manager</p>
              </div>
              <div className="flex  gap-2">
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
                <img src={Star} alt="Star image" />
              </div>
            </div>

            <div className=" my-2.5">
              <p>
                I've always had trouble looking good in photos, especially for
                job applications. With MeinProfilbild.de, I was finally able to
                get a photo that shows me at my best. This has definitely
                improved the quality of my applications.
              </p>
            </div>

            <div className=" flex items-center justify-evenly">
              <div className="border border-blue-400 bg-[#F3F2EF] flex flex-col gap-2">
                <img
                  src={Card3Left1}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card3Left2}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card3Left3}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
              </div>
              <div className="border border-blue-400 bg-white flex flex-col gap-2">
                <img
                  src={Card3Right1}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card3Right2}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
                <img
                  src={Card3Right3}
                  alt="card images"
                  className="h-[164px] w-[164px]"
                />
              </div>
            </div>
          </div>
        </div>

        <button className="bg-[#FF6B00] px-5 py-4 text-white cursor-pointer hover:bg-slate-600 rounded-2xl">
          See more examples
        </button>
      </div>
    </div>
  );
};

export default Success;
