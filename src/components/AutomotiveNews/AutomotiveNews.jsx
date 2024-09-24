import React from 'react'
import { automotiveNews } from './automotiveData.js'

const AutomotiveNews = () => {
    return (
        <div className='relative py-[60px] px-[15px] overflow-hidden bg-[#2d2d2d]'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#565656] pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#00ced1] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl text-white'>ยานยนต์</h2>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-[#565656] to-[#b2b2b2] text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-[8fr_4fr] gap-[30px] mt-6'>
                        <div className='grid grid-cols-3 gap-[30px]'>
                            {automotiveNews.map((news, index) => (
                                <div className={`${index === 0 ? "col-span-3 flex gap-[30px]" : ""}`}>
                                    <div className='rounded-md overflow-hidden'>
                                        <img src={news.newsImage} alt="" />
                                    </div>
                                    <div className={`${index !== 0 ? "mt-[15px]" : ""}`}>
                                        <h3 className={`${index === 0 ? "text-[22px]" : ""} text-white font-semibold line-clamp-3`}>{news.newsTopic}</h3>
                                        <p className= 'text-[#a2a2a2] font-light line-clamp-3 mt-2 mb-[10px]'>{news.newsDesc}</p>
                                        <p className='text-xs text-[#838383] mt-[10px]'>{news.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='bg-blue-500'>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div  className='hidden max-768:block w-full mt-6 mb-3'>
                <div className='flex justify-center items-center'>
                    <button className='w-[190px] bg-gradient-to-r from-[#565656] to-[#b2b2b2] text-white py-2 px-[30px] text-lg rounded font-semibol'>ดูทั้งหมด</button>
                </div>
            </div>
        </div>
    )
}

export default AutomotiveNews