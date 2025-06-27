import React from 'react'
import { IoIosContact } from "react-icons/io";
import { BsBuildingsFill } from "react-icons/bs";
import { IoGift } from "react-icons/io5";




const Packages = () => {
  return (
    <div>
      <section className=' flex justify-center bg-[#F3F2EF] py-2'>
            <div className='  bg-white w-[65%] h-[120px] rounded-4xl flex flex-col items-center justify-center justify-evenly p-2'>
                    <h2 className='text-center text-xl font-semibold'>Our packages at a glance</h2>
                    <div className='flex  items-center'>
                        <div className='flex  items-center gap-2.5'>
                            <IoIosContact className='text-orange-500 text-2xl' />
                            <p>From 10 application photos</p> |
                        </div>
                        <div className='flex  items-center gap-2.5'>
                            <BsBuildingsFill className='text-orange-500 text-2xl' />
                            <p>Various background packages to choose from</p> |
                        </div>
                        <div className='flex  items-center gap-2.5'>
                            <IoGift className='text-orange-500 text-2xl' />
                            <p>FProfessional clothing for the perfect look</p> |
                        </div>
                    </div>
            </div>
            <div className=' w-[15%] h-[120px] rounded-4xl bg-[#FF6B00] flex justify-center items-center flex-col gap-2'>
            <h2 className='text-2xl text-white'>From €24.90</h2>
            <p className='text-white'>/Per person</p>
            </div>
      </section>
    </div>
  )
}

export default Packages
