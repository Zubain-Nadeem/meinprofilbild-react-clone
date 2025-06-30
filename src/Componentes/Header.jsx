import React from "react";

export default function Header() {
  return (
    <div>
      <header className=" h-16 bg-[#FFFFFF] flex justify-center items-center w-[100%] shadow-lg">
        <div className=" h-full w-[85%] flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            My <span className="text-[#006FF0]">profile picture</span>
          </h1>

          <nav>
            <ul className="flex gap-8 text-sm text-slate-700">
              <li>
                <a href="company">For companies</a>
              </li>
              <li>
                <a href="#howWork">How it works</a>
              </li>
              <li>
                <a href="#price">Price</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Examples</a>
              </li>
            </ul>
          </nav>

          <div className=" flex gap-3 ">
            <button className="px-5 py-3 border border-slate-600 font-semibold rounded-2xl cursor-pointer">
              Register
            </button>
            <button className="px-5 py-3.5 text-white rounded-2xl bg-orange-400 cursor-pointer hover:bg-slate-600">
              Start now
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
