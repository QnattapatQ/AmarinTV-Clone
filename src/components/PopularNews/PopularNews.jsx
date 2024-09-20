import React from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import popularNews from './popularNews.js';


const PopularNews = () => {
    return (
        <div className='relative py-[60px] px-[15px] overflow-hidden bg-white'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#e9e9e9] pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#ea3516] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl'>ข่าวยอดนิยม</h2>
                    </div>
                </div>
                <div className='mt-[30px] relative w-full'>
                    <Swiper
                         navigation={{
                            nextEl: '.swiper-next-btn',
                            prevEl: '.swiper-prev-btn',
                            clickable: true,
                        }}
                        modules={[Navigation, Autoplay]}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 10000,
                        }}
                    >   
                        {popularNews.map((news, index) => (
                                <SwiperSlide key={index}>
                                    <div className='border h-full rounded-md overflow-hidden pb-4'>
                                        <img src={news.newsImage} alt="" />
                                        <div className='mt-5'>
                                            <div className='w-[20%] text-[55px] font-semibold border-r border-black p-[10px] float-left text-center'>
                                                {index + 1}
                                            </div>
                                            <div className='w-[80&] flex flex-col justify-between px-[10px]'>
                                                <h3 className='line-clamp-2 text-base font-semibold'>{news.newsTopic}</h3>
                                                <p className='text-xs font-light'>{news.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className='swiper-prev-btn absolute left-[-2%] size-[38px] top-1/2 bg-white z-[10] rounded-full text-black text-center cursor-pointer flex items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] -translate-y-1/2'><FiChevronLeft className='text-xl mr-[2px]'/></div>
                    <div className='swiper-next-btn absolute right-[-2%] size-[38px] top-1/2 bg-white z-[10] rounded-full text-black text-center cursor-pointer flex items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] -translate-y-1/2'><FiChevronRight className='text-xl'/></div>
                </div>
            </div>
        </div>
    )
}

export default PopularNews