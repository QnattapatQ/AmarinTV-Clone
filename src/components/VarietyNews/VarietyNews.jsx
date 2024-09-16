import React from 'react'
import varietyNews from './varietyNews.js'
import { IoPlayCircleOutline } from "react-icons/io5";

const VarietyNews = () => {
    return (
        <div className='relative py-[60px] px-[15px] overflow-hidden bg-white'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#e9e9e9] pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#00d7fb] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl'>วาไรตี้</h2>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-[#00aef6] to-[#00d7fb] text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='grid grid-cols-2 max-992:grid-cols-1 gap-x-7 gap-y-5'>
                        {varietyNews.map((news, index) => (
                            <a href='#' className={`${index === 0 ? "row-span-3" : "flex"} rounded-md overflow-hidden border border-[#f3f3f3]`}>
                                <div className={`${index !== 0 ? "max-992:w-[170px]" : ""} w-full relative bg-red-500`} src={news.newsImg}>
                                    <img className={`${index !== 0 ? "" : ""} `} src={news.newsImg} alt="" />
                                    <div className='rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
                                        <IoPlayCircleOutline className={`${index !== 0 ? "text-4xl" : "text-[56px]"} text-white z-[1]`}/>
                                        <div className={`${index !== 0 ? "size-[30px]" : "size-[46px]"} absolute bg-[rgba(0,0,0,0.5)] rounded-full`}>

                                        </div>
                                    </div>
                                </div>
                                <div className='w-full py-[10px] px-[15px]'>
                                    <h3 className={`${index === 0 ? "text-[28px]" : ""} line-clamp-2 text-[#333] font-semibold`}>{news.newsTopic}</h3>
                                    <p className={`${index !== 0 ? "mt-4" : "mt-[4px]"} text-xs text-[#555] font-light`}>{news.newsDate}</p>
                                    <p className='text-sm text-[#555] font-light mt-[8px] mb-[10px]'>{news.newsDesc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div  className='hidden max-992:block w-full mt-6 mb-3'>
                <div className='flex justify-center items-center'>
                    <button className='w-[190px] bg-gradient-to-r from-[#00aef6] to-[#00d7fb] text-white py-2 px-[30px] text-lg rounded font-semibol'>ดูทั้งหมด</button>
                </div>
            </div>
        </div>
    )
}

export default VarietyNews