import React, { useState, useRef, useEffect } from 'react'
import { IoChevronForward } from "react-icons/io5";

const MenuSidebar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const openMenuDropdown = () => {
        setOpenMenu(!openMenu)
    }
    
    return (
        <div className='z-[100] fixed flex w-full inset-0'>
            <div className='bg-[rgba(0,0,0,0.4)] w-full'>

            </div>
            <div className='absolute w-[300px] px-4 bg-white right-0 bottom-0 top-0'>
                <a href="#" className='w-full text-center'>
                    <img className='h-[50px] mx-auto my-4' src="https://static.amarintv.com/assets/images/logo.svg" alt="" />
                </a>
                <div>
                    <input className='border outline-none w-full p-2 rounded-sm' type="text" name="" id="" />
                </div>
                <div className='mt-[10px]'>
                    <ul>
                        <li className='px-[6px]'>
                            <div className="collapse collapse-arrow border-t">
                                <input type="checkbox" name="my-accordion-2" />
                                <div className="collapse-title">ข่าว</div>
                                <div className="collapse-content relative flex flex-col">
                                    <div className='absolute w-[4px] bg-gradient-to-r from-amber-500 top-0 left-0 bottom-5'></div>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                </div>
                            </div>
                        </li>
                        <li className='px-[6px]'>
                            <div className="collapse collapse-arrow border-t">
                                <input type="checkbox" name="my-accordion-2" />
                                <div className="collapse-title">ข่าว</div>
                                <div className="collapse-content relative flex flex-col">
                                    <div className='absolute w-[4px] bg-gradient-to-r from-amber-500 top-0 left-0 bottom-5'></div>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                </div>
                            </div>
                        </li>
                        <li className='px-[6px]'>
                            <div className="collapse collapse-arrow border-y">
                                <input type="checkbox" name="my-accordion-2" />
                                <div className="collapse-title">ข่าว</div>
                                <div className="collapse-content relative flex flex-col">
                                    <div className='absolute w-[4px] bg-gradient-to-r from-amber-500 top-0 left-0 bottom-5'></div>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuSidebar