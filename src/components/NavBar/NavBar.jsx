import React, { useState, useContext, useEffect } from 'react'
import amarin10years from '../../assets/logo_10year.png';
import spotlight from '../../assets/spotlight.svg';
import { IoSearchSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import MenuSidebar from '../MenuSidebar/MenuSidebar';
import { ScreenWidthContext } from '../../context/ScreenWidth';

const NavBar = () => {

    const width = useContext(ScreenWidthContext);

    const [toggleOpen, setToggleOpen] = useState(false);

    const toggleSideBar = () => {
        setToggleOpen(!toggleOpen)
    }

    useEffect(() => {
        if(width.winWidth >= 1440) {
            setToggleOpen(false)
        }
    },[width.winWidth]);

    return (
        <div className='border-b pb-0'>
            <div className='px-4 grid grid-cols-[auto_1fr] relative'>
                <div className='flex justify-center items-center border-r'>
                    <div className='w-[100px] h-[60px]'>
                        <a className='my-[5px] mr-[15px] inline-block' href="#">
                            <img className='w-[65px]' src={amarin10years} alt="" />
                        </a>
                    </div>
                    <div className='pt-1 pb-[15px] pr-[15px]'>
                        <a className='h-[30px] bg-[#f2f2f2] rounded-[2px] py-[1px] px-[10px] block mt-[10px] flex justify-center items-center' href="#">
                            <img className='min-w-[70px] max-w-[70px] w-full' src={spotlight} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className=''>
                        <ul className='flex items-center justify-center h-full'>
                            <li className='px-2 text-[15px] font-semibold'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ข่าว</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">วีดีโอ</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ละคร</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold max-992:hidden'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ชีพจรลงพุงไกด์</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ไลฟ์สไตล์</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold max-1440:hidden'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ยานยนต์</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold max-1440:hidden'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ผังรายการ</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold max-1440:hidden'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ตรวจสลากกินแบ่งรัฐบาล</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold max-1440:hidden'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ผู้ประกาศข่าว</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center gap-3 pr-[15px]'>
                        <div className='flex items-center gap-3'>
                            <div className='border-[2px] border-[#444] w-[70px] h-[35px] rounded-[10px]'>
                                <a className='flex items-center justify-center uppercase h-full font-semibold' href="#">
                                    <div className='size-[9px] rounded-full bg-[#fe0200] mr-[5px]'>

                                    </div>
                                    Live
                                </a>
                            </div>
                            <IoSearchSharp size={20}/>
                            <p className='font-semibold'>ค้นหา</p>
                            </div>
                        <div>
                        <div className='hidden max-1440:flex items-center'>
                            {toggleOpen ? 
                                <IoClose className='text-3xl cursor-pointer' onClick={() => toggleSideBar()}/>
                                    :
                                <IoMdMenu className='text-3xl cursor-pointer' onClick={() => toggleSideBar()}/>    
                            }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <MenuSidebar toggleOpen={toggleOpen} setToggleOpen={setToggleOpen}/>
        </div>
    )
}

export default NavBar