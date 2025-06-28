import React from 'react'
import Image1 from "../assets/images/companies/social_step.png"
import Image2 from "../assets/images/companies/social_fb.png"
import Image3 from "../assets/images/companies/imgpsh_fullsize_anim.png"
import Image4 from "../assets/images/companies/social_linkedin.png"
import Image5 from "../assets/images/companies/social_xing.png"
import Image6 from "../assets/images/companies/imgpsh_fullsize_anim2.png"
const companies = () => {
  return (
    <div className=' py-10 bg-[#F3F2EF]'>
        <h2 className='text-center text-gray-500 mb-5'>Seen on</h2>

        <div className='w-[85%] mx-auto p-3 flex items-center justify-evenly'>
              <img src={Image1} alt="Social companies images" />
              <img src={Image2} alt="Social companies images" />
              <img src={Image3} alt="Social companies images" />
              <img src={Image4} alt="Social companies images" />
              <img src={Image5} alt="Social companies images" />
              <img src={Image6} alt="Social companies images" />
        </div>
    </div>
  )
}

export default companies
