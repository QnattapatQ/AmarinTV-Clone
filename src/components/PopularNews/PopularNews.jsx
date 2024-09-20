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
                                    <div>
                                        <img src={news.newsImage} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className='swiper-prev-btn absolute left-[2%] size-[38px] top-1/2 bg-white z-[10] scale-[1.6] rounded-full text-black text-center cursor-pointer'><FiChevronLeft/></div>
                    <div className='swiper-next-btn absolute right-[2%] size-[38px] top-1/2 bg-white z-[10] scale-[1.6] rounded-full text-black text-center cursor-pointer'><FiChevronRight/></div>
                </div>
            </div>
        </div>
    )
}

export default PopularNews