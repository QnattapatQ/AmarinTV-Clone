import React from 'react'
import amarin10years from '../../assets/logo_10year.png';
import spotlight from '../../assets/spotlight.svg';

const NavBar = () => {
    return (
        <div className='border-b'>
            <div className='px-4 flex'>
                <div className='flex justify-center items-center border-r'>
                    <div className='w-[100px]'>
                        <a className='my-[5px] mr-[15px] inline-block' href="#">
                            <img className='w-[65px]' src={amarin10years} alt="" />
                        </a>
                    </div>
                    <div className='pt-1 pb-[15px] pr-[15px]'>
                        <a className='h-[30px] bg-[#f2f2f2] rounded-[2px] py-[1px] px-[10px] block mt-[10px] flex justify-center items-center' href="#">
                            <img className='w-[70px]' src={spotlight} alt="" />
                        </a>
                    </div>
                </div>
                <div>
                    <ul className='flex items-center justify-center h-full'>
                        <li className='px-2 text-[15px] font-semibold'>
                            <a href="#">ข่าว</a>
                        </li>
                        <li className='px-2 text-[15px] font-semibold'>
                            <a href="#">วีดีโอ</a>
                        </li>
                        <li className='px-2 text-[15px] font-semibold'>
                            <a href="#">ละคร</a>
                        </li>
                        <li className='px-2 text-[15px] font-semibold'>
                            <a href="#">ชีพจรลงพุงไกด์</a>
                        </li>
                        <li className='px-2 text-[15px] font-semibold'>
                            <a href="#">ไลฟ์สไตล์</a>
                        </li>
                        <li className='px-2 text-[15px] font-semibold'>
                            <a href="#">ยานยนต์</a>
                        </li>
                        <li className='px-2 text-[15px] font-semibold'>
                            <a href="#">ผังรายการ</a>
                        </li>
                        <li className='px-2 text-[15px] font-semibold'>
                            <a href="#">ตรวจสลากกินแบ่งรัฐบาล</a>
                        </li>
                        <li className='px-2 text-[15px] font-semibold'>
                            <a href="#">ผู้ประกาศข่าว</a>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default NavBar