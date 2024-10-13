import React, { useState, useContext, useEffect } from 'react'
import amarin10years from '../../assets/logo_10year.png';
import spotlight from '../../assets/spotlight.svg';
import { IoSearchSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import MenuSidebar from '../MenuSidebar/MenuSidebar';
import { ScreenWidthContext } from '../../context/ScreenWidth';
import app_amarin_icon from '../../assets/app_amarin_icon.png'; 

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
            <div className='px-4 grid grid-cols-[auto_1fr] relative max-768:border-b'>
                <div className='flex justify-center items-center border-r max-768:border-0'>
                    <div className='w-[100px] h-[60px]'>
                        <a className='my-[5px] mr-[15px] inline-block' href="#">
                            <img className='w-[65px]' src={amarin10years} alt="" />
                        </a>
                    </div>
                    <div className='pt-1 pb-[15px] pr-[15px] max-768:hidden'>
                        <a className='h-[30px] bg-[#f2f2f2] rounded-[2px] py-[1px] px-[10px] mt-[10px] flex justify-center items-center' href="#">
                            <img className='min-w-[70px] max-w-[70px] w-full' src={spotlight} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className=''>
                        <ul className='flex items-center justify-center h-full max-768:hidden'>
                            <li className='group/submenu px-2 text-[15px] font-semibold relative'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ข่าว</a>
                                <div className='absolute shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] min-w-[230px] w-full top-[38px] pt-[3px] duration-100 left-[0px] flex flex-col bg-gradient-to-r from-amber-500 to-yellow-400 z-[300] opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible hover:opacity-100 hover:invisible'>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ทั้งหมด</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ข่าวทั่วไป</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ทุบโต๊ะข่าว</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ข่าวบันเทิง</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ข่าวเศรษฐกิจ</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ข่าวการเมือง</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ข่าวกีฬา</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ข่าวต่างประเทศ</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ข่าวไอที</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ข่าวเกษตรกรรม</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">สกู๊ปพิเศษ</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ข่าวประชาสัมพันธ์</a>
                                </div>
                            </li>
                            <li className='group/submenu px-2 text-[15px] font-semibold relative'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">วีดีโอ</a>
                                <div className='absolute shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] min-w-[230px] w-full top-[38px] pt-[3px] duration-100 left-[0px] flex flex-col bg-gradient-to-t from-[#82399e] to-[#b86bcd] z-[300] opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible hover:opacity-100 hover:invisible'>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">วีดีโอทั้งหมด</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">คลิปทุบโต๊ะข่าว</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">ข่าวอรุณอัมรินทร์</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">ข่าวเที่ยงอมรินทร์</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">ข่าวเย็นอมรินทร์</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">APOP TODAY</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">Spotlight</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">วาไรตี้</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">ละครย้อนหลัง</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white text-nowrap bg-white font-light' href="#">Original Online</a>
                                </div>
                            </li>
                            <li className='px-2 text-[15px] font-semibold relative after:absolute after:h-[3px] after:opacity-0 after:w-0 after:left-0 after:bottom-[-70%] after:bg-red-500 after:hover:w-full after:duration-200 after:hover:opacity-100'>
                                <a className='px-[5px] py-[15px] text-nowrap w-full' href="#">ละคร</a>
                            </li>
                            <li className='group/submenu px-2 text-[15px] font-semibold relative max-992:hidden'> 
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ชีพจรลงพุงไกด์</a>
                                <div className='absolute shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] min-w-[230px] w-full top-[38px] pt-[3px] duration-100 left-[0px] flex flex-col bg-gradient-to-t from-[#c62a0f] to-[#ea3516] z-[300] opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible hover:opacity-100 hover:invisible'>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารไทย</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารเมนูเส้น</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารจานเดียว</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">คาเฟ่ / ร้านกาแฟ</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารนานาชาติ</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารอีสาน</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านบุฟเฟ่ต์</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารฟิวชั่น</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านขนมไทย</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารเจและมังสวิรัติ</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารทะเล</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารว่าง</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านเบอร์เกอร์-สเต๊ก</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารข้างทาง</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารใต้</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">ร้านอาหารเหนือ</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">บทความชีพจรลงพุงไกด์</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white bg-white text-nowrap font-light' href="#">จานอร่อย By เชฟปอ</a>
                                </div>
                            </li>
                            <li className='group/submenu px-2 text-[15px] font-semibold relative'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ไลฟ์สไตล์</a>
                                <div className='absolute shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] min-w-[230px] w-full top-[38px] pt-[3px] duration-100 left-[0px] flex flex-col bg-gradient-to-r from-amber-500 to-yellow-400 z-[300] opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible hover:opacity-100 hover:invisible'>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ล่าสุด</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">ดูดวง</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">บ้านและสวน</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">สุขภาพและความงาม</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white text-nowrap bg-white font-light' href="#">เทรนดี้</a>
                                </div>
                            </li>
                            <li className='px-2 text-[15px] font-semibold relative max-1440:hidden after:absolute after:h-[3px] after:opacity-0 after:w-0 after:left-0 after:bottom-[-70%] after:bg-[#00aef6] after:hover:w-full after:duration-200 after:hover:opacity-100'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ยานยนต์</a>
                            </li>
                            <li className='group/submenu px-2 text-[15px] font-semibold relative max-1440:hidden'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ผังรายการ</a>
                                <div className='absolute shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] min-w-[230px] w-full top-[38px] pt-[3px] duration-100 left-[0px] flex flex-col bg-gradient-to-r from-[#ff7b00] to-[#ffb200] z-[300] opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible hover:opacity-100 hover:invisible'>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-[#ff7b00] to-[#ffb200] hover:text-white text-nowrap bg-white font-light' href="#">ข่าว</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-[#ff7b00] to-[#ffb200] hover:text-white text-nowrap bg-white font-light' href="#">บันเทิง</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-[#ff7b00] to-[#ffb200] hover:text-white text-nowrap bg-white font-light' href="#">ละคร</a>
                                </div>
                            </li>
                            <li className='group/submenu px-2 text-[15px] font-semibold relative max-1440:hidden'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ตรวจสลากกินแบ่งรัฐบาล</a>
                                <div className='absolute shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] min-w-[230px] w-full top-[38px] pt-[3px] duration-100 left-[0px] flex flex-col bg-gradient-to-r from-[#00aef6] to-[#00d7fb] z-[300] opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible hover:opacity-100 hover:invisible'>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-[#00aef6] to-[#00d7fb] hover:text-white text-nowrap bg-white font-light' href="#">ล่าสุด</a>
                                    <a className='py-[10px] px-[25px] hover:bg-gradient-to-r from-[#00aef6] to-[#00d7fb] hover:text-white text-nowrap bg-white font-light' href="#">ย้อนหลัง</a>
                                </div>
                            </li>
                            <li className='px-2 text-[15px] font-semibold relative max-1440:hidden after:absolute after:h-[3px] after:opacity-0 after:w-0 after:left-0 after:bottom-[-70%] after:bg-[#82399e] after:hover:w-full after:duration-200 after:hover:opacity-100'>
                                <a className='px-[5px] py-[15px] text-nowrap' href="#">ผู้ประกาศข่าว</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center pr-[15px] max-768:gap-0 max-768:pr-0'>
                        <div className='flex items-center relative'>
                            <div className='hidden max-768:inline-block'>
                                <a href="#">
                                    <img className='h-[30px]' src={app_amarin_icon} alt="" />
                                </a>
                            </div>
                            <div className='border-[2px] border-[#444] w-[70px] h-[35px] max-768:h-[30px] rounded-[10px] absolute z-[-10] right-[90px]'>
                                <a className='flex items-center justify-center uppercase h-full font-semibold' href="#">
                                    <div className='size-[9px] rounded-full bg-[#fe0200] mr-[5px]'>

                                    </div>
                                    Live
                                </a>
                            </div>
                            <div className='max-768:hidden flex items-center justify-end gap-1 pl-2'>
                                <IoSearchSharp size={20}/>
                                <input className='p-2 bg-white w-[55px] duration-200 focus:border focus:w-full placeholder:text-black outline-none' type="text" placeholder='ค้นหา'/>
                                {/* <p className='font-semibold'>ค้นหา</p> */}
                            </div>
                        </div>
                        <div>
                            <div className='hidden max-1440:flex items-center max-768:hidden'>
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
            <div className='hidden items-center justify-between px-4 max-768:flex'>
                <div className='flex items-center'>
                    <div className='px-1 py-1 border-r'>
                        <a className='h-[30px] w-fit bg-[#f2f2f2] rounded-[2px] py-1 px-2 flex' href="#">
                            <img className='min-w-[65px] max-w-[65px] w-full' src={spotlight} alt="" />
                        </a>
                    </div>
                    <div className='h-full'>
                        <ul className='flex'>
                            <li className='px-2 text-[15px] font-semibold'>
                                <a className='text-nowrap' href="#">หน้าแรก</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold'>
                                <a className='text-nowrap' href="#">ข่าว</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold'>
                                <a className='text-nowrap' href="#">วีดีโอ</a>
                            </li>
                            <li className='px-2 text-[15px] font-semibold'>
                                <a className='text-nowrap' href="#">ละคร</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='hidden max-1440:flex items-center max-768:block'>
                    {toggleOpen ? 
                        <IoClose className='text-3xl cursor-pointer' onClick={() => toggleSideBar()}/>
                            :
                        <IoMdMenu className='text-3xl cursor-pointer' onClick={() => toggleSideBar()}/>    
                    }
                </div>
            </div>
            <MenuSidebar toggleOpen={toggleOpen} setToggleOpen={setToggleOpen}/>
        </div>
    )
}

export default NavBar