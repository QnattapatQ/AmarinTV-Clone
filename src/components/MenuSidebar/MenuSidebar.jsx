import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

const MenuSidebar = ({ toggleOpen, setToggleOpen }) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleCheckboxChange = (event) => {
        const newValue = event.target.value;
        setSelectedOption(newValue === selectedOption ? null : newValue);
    };
    
    return (
        <div className={`${toggleOpen ? 'flex visible' : 'opacity-0 invisible'} z-[100] fixed w-full inset-0 duration-300`}>
            <div className='bg-[rgba(0,0,0,0.4)] w-full' onClick={() => setToggleOpen(!toggleOpen)}>

            </div>
            <div className={`${toggleOpen ? 'translate-x-[0]' : 'translate-x-[300px]'} menu-scroll absolute w-[300px] px-4 bg-white right-0 bottom-0 top-0 overflow-scroll duration-300`}>
                <a href="#" className='w-full text-center'>
                    <img className='h-[50px] mx-auto my-4' src="https://static.amarintv.com/assets/images/logo.svg" alt="" />
                </a>
                <div className='w-full bg-gray-100 overflow-hidden rounded-sm'>
                    <div className='flex items-center justify-center'>
                        <IoSearch size={20}/>
                        <input className='outline-none p-2 w-[80px] bg-gray-100 rounded-sm focus:w-full duration-200' type="text" placeholder='ค้นหา' />
                    </div>
                </div>
                <div className='mt-[10px]'>
                    <ul>
                        <li className='px-[6px]' data-menu="1">
                            <div className="collapse collapse-arrow border-t">
                                <input 
                                    type="checkbox" 
                                    name="my-accordion-2"
                                    value="option1"
                                    checked={selectedOption === 'option1'}
                                    onChange={handleCheckboxChange} 
                                />
                                <div className="collapse-title font-semibold">ข่าว</div>
                                <div className="collapse-content relative flex flex-col">
                                    <div className='absolute w-[4px] bg-gradient-to-r from-amber-500 top-0 left-0 bottom-5'></div>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ทั้งหมด</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวทั่วไป</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ทุบโต๊ะข่าว</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวบันเทิง</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวเศรษฐกิจ</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวการเมือง</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวกีฬา</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวต่างประเทศ</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวไอที</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวเกษตรกรรม</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">สกู๊ปพิเศษ</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ข่าวประชาสัมพันธ์</a>
                                </div>
                            </div>
                        </li>
                        <li className='px-[6px]' data-menu="2">
                            <div className="collapse collapse-arrow border-t">
                                <input 
                                    type="checkbox" 
                                    name="my-accordion-2"
                                    value="option2"
                                    checked={selectedOption === 'option2'}
                                    onChange={handleCheckboxChange} 
                                />
                                <div className="collapse-title font-semibold">วีดีโอ</div>
                                <div className="collapse-content relative flex flex-col">
                                    <div className='absolute w-[4px] bg-gradient-to-t from-[#82399e] to-[#b86bcd] top-0 left-0 bottom-5'></div>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">วีดีโอทั้งหมด</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">คลิปทุบโต๊ะข่าว</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">ข่าวอรุณอัมรินทร์</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">ข่าวเที่ยงอมรินทร์</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">ข่าวเย็นอมรินทร์</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">APOP TODAY</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">Spotlight</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">วาไรตี้</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">ละครย้อนหลัง</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#82399e] to-[#b86bcd] hover:text-white' href="#">Original Online</a>
                                </div>
                            </div>
                        </li>
                        <li className='px-[6px] border-t relative after:absolute after:opacity-0 after:h-[3px] after:bg-red-500 after:left-0 after:bottom-0 after:w-0 after:hover:w-full after:hover:opacity-100 after:duration-300'>
                            <a href='#'>
                                <div className="collapse-title w-full font-semibold">
                                    ละคร
                                </div>
                            </a>
                        </li>
                        <li className='px-[6px]' data-menu="3">
                            <div className="collapse collapse-arrow border-t">
                                <input 
                                    type="checkbox" 
                                    name="my-accordion-2"
                                    value="option3"
                                    checked={selectedOption === 'option3'}
                                    onChange={handleCheckboxChange} 
                                />
                                <div className="collapse-title font-semibold">ชีพจรลงพุงไกด์</div>
                                <div className="collapse-content relative flex flex-col">
                                    <div className='absolute w-[4px] bg-gradient-to-t from-[#c62a0f] to-[#ea3516] top-0 left-0 bottom-5'></div>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารไทย</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารเมนูเส้น</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารจานเดียว</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">คาเฟ่ / ร้านกาแฟ</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารนานาชาติ</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารอีสาน</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านบุฟเฟ่ต์</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารฟิวชั่น</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านขนมไทย</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารเจและมังสวิรัติ</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารทะเล</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารว่าง</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านเบอร์เกอร์-สเต๊ก</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารข้างทาง</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารใต้</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">ร้านอาหารเหนือ</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">บทความชีพจรลงพุงไกด์</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-t from-[#c62a0f] to-[#ea3516] hover:text-white' href="#">จานอร่อย By เชฟปอ</a>
                                </div>
                            </div>
                        </li>
                        <li className='px-[6px]' data-menu="4">
                            <div className="collapse collapse-arrow border-t">
                                <input 
                                    type="checkbox" 
                                    name="my-accordion-2"
                                    value="option4"
                                    checked={selectedOption === 'option4'}
                                    onChange={handleCheckboxChange} 
                                />
                                <div className="collapse-title font-semibold">ไลฟ์สไตล์</div>
                                <div className="collapse-content relative flex flex-col">
                                    <div className='absolute w-[4px] bg-gradient-to-r from-amber-500 top-0 left-0 bottom-5'></div>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ล่าสุด</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">ดูดวง</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">บ้านและสวน</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">สุขภาพและความงาม</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-amber-500 to-yellow-400 hover:text-white' href="#">เทรนดี้</a>
                                </div>
                            </div>
                        </li>
                        <li className='px-[6px] border-t relative after:absolute after:opacity-0 after:h-[3px] after:bg-[#00aef6] after:left-0 after:bottom-0 after:w-0 after:hover:w-full after:hover:opacity-100 after:duration-300'>
                            <a href='#'>
                                <div className="collapse-title w-full font-semibold">
                                    ยานยนต์
                                </div>
                            </a>
                        </li>
                        <li className='px-[6px]'>
                            <div className="collapse collapse-arrow border-t">
                                <input 
                                    type="checkbox" 
                                    name="my-accordion-2"
                                    value="option5"
                                    checked={selectedOption === 'option5'}
                                    onChange={handleCheckboxChange} 
                                />
                                <div className="collapse-title font-semibold">ผังรายการ</div>
                                <div className="collapse-content relative flex flex-col">
                                    <div className='absolute w-[4px] bg-gradient-to-r from-[#ff7b00] top-0 left-0 bottom-5'></div>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-[#ff7b00] to-[#ffb200] hover:text-white' href="#">ข่าว</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-[#ff7b00] to-[#ffb200] hover:text-white' href="#">บันเทิง</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-[#ff7b00] to-[#ffb200] hover:text-white' href="#">ละคร</a>
                                </div>
                            </div>
                        </li>
                        <li className='px-[6px]'>
                            <div className="collapse collapse-arrow border-t">
                                <input 
                                    type="checkbox" 
                                    name="my-accordion-2"
                                    value="option6"
                                    checked={selectedOption === 'option6'}
                                    onChange={handleCheckboxChange} 
                                />
                                <div className="collapse-title font-semibold">ตรวจสลากกินแบ่งรัฐบาล</div>
                                <div className="collapse-content relative flex flex-col">
                                    <div className='absolute w-[4px] bg-gradient-to-r from-[#00aef6] top-0 left-0 bottom-5'></div>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-[#00aef6] to-[#00d7fb] hover:text-white' href="#">ล่าสุด</a>
                                    <a className='py-2 px-4 hover:bg-gradient-to-r from-[#00aef6] to-[#00d7fb] hover:text-white' href="#">ย้อนหลัง</a>
                                </div>
                            </div>
                        </li>
                        <li className='px-[6px] border-y relative after:absolute after:opacity-0 after:h-[3px] after:bg-[#82399e] after:left-0 after:bottom-0 after:w-0 after:hover:w-full after:hover:opacity-100 after:duration-300'>
                            <a href='#'>
                                <div className="collapse-title w-full font-semibold">
                                    ผู้ประกาศข่าว
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className='pb-[20px] pt-[30px]'>
                        <div className='mb-3'>
                            <p className='font-semibold'>Follow Us</p>
                        </div>
                        <div className='flex'>
                            <a className='mr-[5px]' href="#">
                                <img className='size-[33px]' src="https://static.amarintv.com/assets/images/icon-fb.svg" alt="" />
                            </a>
                            <a className='mr-[5px]' href="#">
                                <img className='size-[33px]' src="https://static.amarintv.com/assets/images/icon-x.svg" alt="" />
                            </a>
                            <a className='mr-[5px]' href="#">
                                <img className='size-[33px]' src="https://static.amarintv.com/assets/images/icon-line.svg" alt="" />
                            </a>
                            <a className='mr-[5px]' href="#">
                                <img className='size-[33px]' src="https://static.amarintv.com/assets/images/icon-yt.svg" alt="" />
                            </a>
                            <a className='mr-[5px]' href="#">
                                <img className='size-[33px]' src="https://static.amarintv.com/assets/images/icon-ig.svg" alt="" />
                            </a>
                            <a className='mr-[5px]' href="#">
                                <img className='size-[33px]' src="https://static.amarintv.com/assets/images/icon-tiktok.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSidebar