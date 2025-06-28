import React from 'react'
import Star from "../assets/images/hero-section-images/left-container-images/star.png"

const Success = () => {
  return (
    <div className='border-2 border-red-800 py-12 bg-[#F3F2EF]'>
        <div className='border border-black w-[85%] mx-auto py-5'>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='mb-6 text-5xl font-semibold'>From selfie to application hit: Our success stories</h1>
                <p className='text-xl'>Be inspired by our customers' transformations and take the next step in your career.</p>
            </div>
                {/* Cards */}
            <div className='border border-red-400 mt-3.5 p-2 w-full'>
                {/* Cards clid */}
                {/* Cards top */}
                    <div className='border border-black w-[30%] min-h-[400px] bg-white p-2 '>
                        <div className='flex border border-black items-center justify-between'>
                            <div className=' border border-black flex flex-col text-sm'>
                                <p>Fleix F.</p>
                                <p>feeelancer</p>
                            </div>
                            <div className='flex border border-black gap-2'>
                                <img src={Star} alt="Star image" />
                                <img src={Star} alt="Star image" />
                                <img src={Star} alt="Star image" />
                                <img src={Star} alt="Star image" />
                                <img src={Star} alt="Star image" />
                            </div>
                        </div>
                    </div>
   


            </div>
        </div>
    </div>
  )
}

export default Success
