import React from 'react'
import logo_longpung from '../../assets/FoodStoreNews/logo-longpung-w.svg';
import recommendFood, { articleStore, recommendStore } from './longpungData.js';
import { FaMapMarkerAlt } from "react-icons/fa";

const LongpungSection = () => {
    return (
        <div className='relative py-[60px] px-[15px] overflow-hidden bg-[#2d2d2d]'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#565656] pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#ea3516] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <div>
                            <img className='w-[250px]' src={logo_longpung} alt="" />
                        </div>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-[#ea3516] text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='mb-[20px]'>
                        {recommendFood.map((food, index) => (
                            <a href='#' className='flex bg-white rounded-md overflow-hidden relative' key={index}>
                                <div className='w-1/2 pl-[85px] py-[30px] pr-[15px]'>
                                    <div className='flex items-center'>
                                        <FaMapMarkerAlt className='text-[#ea3516] text-[11px] mr-[5px]'/>
                                        <span className='text-[#666] text-[11px]'>{food.location}</span>
                                    </div>
                                    <h3 className='text-[30px] font-semibold my-[10px]'>{food.storeName}</h3>
                                    <p className='text-lg text-[#666] font-light'>{food.recommendStoreName}</p>
                                    <p className='mt-[35px] text-sm text-[#666]'>{food.date}</p>
                                </div>
                                <div className='w-1/2'>
                                    <img src={food.menuImage} alt="" />
                                </div>
                                <div className='h-[75px] text-center w-[400px] m-auto py-[25px] uppercase absolute left-[-175px] top-0 bottom-0 bg-[#ea3516] -rotate-90'>
                                    New Update
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className='flex gap-[30px] mt-[40px]'>
                        <div className='w-[58.33%] bg-[#1e1e1e] rounded-md px-[30px] pb-[5px] pt-[25px]'>
                            <h3 className='text-white text-center mx-auto mb-[30px]'>
                                <a className='text-[26px] border-b-2 border-b-[#cc4027] font-semibold' href="#">บทความ</a>
                            </h3>
                            <div className='flex gap-[30px]'>
                                {articleStore.map((data, index) => (
                                    <a href='#' className='bg-white rounded-md overflow-hidden mb-[20px]' key={index}>
                                        <div>
                                            <img src={data.articleImage} alt="" />
                                        </div>
                                        <div className='py-[5px] px-[10px]'>
                                            <h3 className='line-clamp-1 my-[5px] font-medium text-base h-[25px]'>{data.articleTopic}</h3>
                                            <p className='line-clamp-2 text-[13px] text-[#212121] mb-[5px] font-light'>{data.articleDesc}</p>
                                            <p className='text-xs text-[#212121] py-2 font-light'>{data.date}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='w-[41.66%] bg-[#1e1e1e] rounded-md px-[30px] pb-[5px] pt-[25px]'>
                            <h3 className='text-white text-center mx-auto mb-[30px]'>
                                <a className='text-[26px] border-b-2 border-b-[#cc4027] font-semibold' href="#">ร้านแนะนำประจำเดือน</a>
                            </h3>
                            <div className='flex flex-col gap-[20px]'>
                                {recommendStore.map((data, index) => (
                                    <a href="#" className='bg-white rounded-md overflow-hidden'>
                                        <div className='grid grid-cols-[200px_1fr]'>
                                            <div>
                                                <img src={data.foodImage} alt="" />
                                            </div>
                                            <div className='px-[10px] py-[5px] flex flex-col justify-evenly'>
                                                <div className='flex items-center'>
                                                    <FaMapMarkerAlt className='text-[#ea3516] text-[11px] mr-[5px]'/>
                                                    <span className='text-[#666] text-[11px]'>{data.location}</span>
                                                </div>
                                                <h3 className='line-clamp-1 font-semibold my-[5px]'>
                                                    {data.storeName}
                                                </h3>
                                                <p className='text-xs text-[#212121] font-light'>{data.date}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className='hidden max-992:block w-full mt-6 mb-3'>
                <div className='flex justify-center items-center'>
                    <button className='w-[190px] bg-[#ea3516] text-white py-2 px-[30px] text-lg rounded font-semibol'>ดูทั้งหมด</button>
                </div>
            </div>
        </div>
    )
}

export default LongpungSection