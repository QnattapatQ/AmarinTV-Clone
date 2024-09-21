import React from 'react'

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import latest_1 from '../../assets/LifeStyle/Latest/latest_1.png';
import lifeStyleData from './lifeStyle';

const LifeStyle = () => {
    return (
        <div className='relative py-[60px] px-[15px] overflow-hidden bg-[#f2f2f2]'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#565656] pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#ffb200] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl uppercase'>Lifestyle</h2>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-[#ff7b00] to-[#ffb200] text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                <div  className='relative overflow-hidden'>
                    <div className='grid grid-cols-2 mt-6 gap-6'>
                        <div className='bg-white overflow-hidden rounded-md'>
                            <a href="#">
                                <div>
                                    <div>
                                        <img src={latest_1} alt="" />
                                    </div>
                                    <div className='relative px-4 pt-4 pb-8'>
                                        <div className='absolute top-[-8%] text-[11px] font-light py-[6px] px-[13px] left-[20px] bg-[rgb(96_18_186)] text-white'>
                                            ดูดวง
                                        </div>
                                        <h3 className='line-clamp-2 font-semibold text-[#444] text-[28px]'>ดวงรายวัน คำทำนายประจำวันที่ 21 กันยายน 2567 เช็กดวงดีประจำวัน</h3>
                                        <p className='text-xs font-light mt-4 text-[#444]'>21 ก.ย 67</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <div className='flex gap-4'>
                                    <button>ล่าสุด</button>
                                    <button>ดูดวง</button>
                                    <button>บ้านและสวน</button>
                                    <button>สุขภาพและความงาม</button>
                                    <button>เทรนดี้</button>
                                </div>
                                <div className='mt-5'>
                                    <p>บทความไลฟ์สไตล์น่าอ่าน ที่มีทั้งสาระตามเทรน ทั้งแฟชั่น ท่องเที่ยว เทคโนโลยี รถยนต์ สุขภาพ อาหาร ไอเดียแต่งบ้าน และอื่นๆอีกมากมาย อ่านไลฟ์สไตล์ อมรินทร์ออนไลน์ อมรินทร์ทีวี ช่อง 34</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex justify-end'>
                                    <div className='max-768:hidden swiper-prev-btn size-[38px] z-[10] text-black text-center cursor-pointer flex items-center justify-center -translate-y-1/2'><FiChevronLeft size={30} /></div>
                                    <div className='max-768:hidden swiper-next-btn size-[38px] z-[10] text-black text-center cursor-pointer flex items-center justify-center -translate-y-1/2'><FiChevronRight size={30}/></div>
                                </div>
                                <div className=''>
                                    <Swiper
                                        navigation={{
                                            nextEl: '.swiper-next-btn',
                                            prevEl: '.swiper-prev-btn',
                                            clickable: true,
                                        }}
                                        modules={[Navigation, Autoplay]}
                                        slidesPerView={2.3}
                                        spaceBetween={20}
                                        loop={true}
                                        autoplay={{
                                            delay: 10000,
                                        }}
                                        // breakpoints={{
                                        //     768: {
                                        //     slidesPerView: 3,
                                        //     spaceBetween: 30,
                                        //     },
                                        // }}
                                        className=''
                                    >   
                                        {lifeStyleData.map((news, index) => (
                                                <SwiperSlide key={index} className=''>
                                                    <div className='bg-white overflow-hidden rounded-md h-full'>
                                                        <a href="#">
                                                            <div>
                                                                <div>
                                                                    <img src={news.newsImage} alt="" />
                                                                </div>
                                                                <div className='relative p-4'>
                                                                    <div className='absolute top-[-8%] text-[11px] font-light py-[6px] px-[13px] left-[20px] bg-[rgb(96_18_186)] text-white'>
                                                                        {news.newsTag}
                                                                    </div>
                                                                    <h3 className='line-clamp-2 font-semibold text-[#444] text-[16px]'>{news.newsTopic}</h3>
                                                                    <p className='text-xs font-light mt-4 text-[#444]'>{news.date}</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className='hidden max-992:block w-full mt-6 mb-3'>
                <div className='flex justify-center items-center'>
                    <button className='w-[190px] bg-gradient-to-r from-[#ff7b00] to-[#ffb200] text-white py-2 px-[30px] text-lg rounded font-semibol'>ดูทั้งหมด</button>
                </div>
            </div>
        </div>
    )
}

export default LifeStyle