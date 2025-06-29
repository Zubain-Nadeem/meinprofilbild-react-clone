import React from 'react'
import Youtube from "../assets/images/footer/social_youtube_w.72529415.svg"
import Facebook from "../assets/images/footer/social_fb_w.ce5fa350.svg"
import Linkedin from "../assets/images/footer/social_linkedin_w.01a6a53c.svg"
import Twitter from "../assets/images/footer/social_x_w.c7ac2782.svg"

const Footer = () => {
    return (
        <div className=' bg-[#222628]'>
            <div className='w-[85%] h-[270px] py-3 mx-auto flex justify-evenly'>
                <div className='text-white  w-[22%] flex flex-col gap-5'>
                    <h2 className='text-2xl font-semibold'>My profile picture</h2>
                    <p>MeinProfilbild.de – Your quick access to professional application photos thanks to the latest AI technology.</p>
                    <a href="#">info@meinprofilbild.de</a>
                </div>
                <div className='text-white  w-[22%] flex flex-col gap-4'>
                    <span className='text-sm text-gray-400'>Left</span>
                    <ul className='flex flex-col gap-2.5'>
                        <li>question and answer</li>
                        <li>price</li>
                        <li>blog</li>
                    </ul>
                </div>
                <div className='text-white  w-[25%] flex flex-col gap-4'>
                    <span className='text-sm text-gray-400'>LEGAL</span>
                    <ul className='flex flex-col gap-2.5'>
                        <li>General terms and conditions of business</li>
                        <li>Privacy policy</li>
                        <li>imprint</li>
                        <li>Affiliate</li>
                    </ul>
                </div>
                <div className='text-white  w-[22%]'>
                    <h2>Follow us</h2>
                    <ul className='flex gap-2.5'>
                        <li>
                            <a href="#"><img src={Youtube} alt="youtube" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={Facebook} alt="facebook" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={Linkedin} alt="linkedin" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={Twitter} alt="twitter" /></a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Footer
