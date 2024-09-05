import React from 'react'
import bg_olympic from '../../assets/OlympicNews/bg_olympic.png';
import logo_paralympic from '../../assets/OlympicNews/logo_paralympic.svg';
import olympicNews from './olympicNews.js';

const OlympicNews = () => {
    return (
        <div className='relative py-10'>
            <div className='absolute size-full top-0 left-0 -z-30'>
                <img className='size-full object-cover' src={bg_olympic} alt="" />
            </div>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='grid grid-cols-[1fr_380px] gap-[30px] px-[15px] h-full'>
                    <div className='bg-blue-500'>
                        <div className=''>
                            <img src={logo_paralympic} alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl text-center font-bold mb-[10px] mt-[20px]'>ข่าวพาราลิมปิก 2024</h2>
                            <div className='bg-white rounded-md p-4 grid grid-cols-2 gap-x-6 gap-y-2'>
                                {olympicNews.map((news, index) => (
                                    <div className={`${index === 0 ? 'row-span-4' : ''}`} key={index}>
                                        <div className={`${index !== 0 ? 'grid grid-cols-[50%_auto] gap-4' : ''}`}>
                                            <div>
                                                <img className='size-full' src={news.newsImage} alt="" />
                                            </div>
                                            <div className={`${index === 0 ? 'mt-[10px]' : ''} `}>
                                                <h2 className={`${index === 0 ? 'text-[20px]' : 'text-sm'} line-clamp-3 font-semibold`}>{news.newsTopic}</h2>
                                                {news.newsContent !== '' && (
                                                    <p className='mt-[10px] text-[#555] font-light text-sm'>{news.newsContent}</p>
                                                )}
                                                <p className={`${index === 0 ? 'mt-4' : 'mt-[3px]'} text-[#555] font-light text-xs`}>{news.newsDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='bg-red-500'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OlympicNews