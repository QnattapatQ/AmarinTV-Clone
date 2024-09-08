import React from 'react'
import bg_olympic from '../../assets/OlympicNews/bg_olympic.png';
import logo_paralympic from '../../assets/OlympicNews/logo_paralympic.svg';
import bg_tablet from '../../assets/OlympicNews/bg-tablet.png';
import gold from '../../assets/OlympicNews/gold.png';
import silver from '../../assets/OlympicNews/silver.png';
import copper from '../../assets/OlympicNews/copper.png';
import flag from '../../assets/OlympicNews/flag_paralympic.png';
import olympicNews from './olympicNews.js';
import winnerTitle from './winner.js';

const OlympicNews = () => {
    return (
        <div className='relative py-10 px-[15px] overflow-hidden'>
            <div className='absolute size-full top-0 left-0 -z-30 max-992:hidden max-768:block'>
                <img className='size-full object-cover' src={bg_olympic} alt="" />
            </div>
            <div className='hidden max-992:absolute -z-30 max-992:block max-992:size-full max-992:top-0 max-992:left-0 max-992:bottom-0 max-768:hidden'>
                <img className='size-full object-cover object-top' src={bg_tablet} alt="" />
            </div>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='grid grid-cols-[1fr_380px] max-992:grid-cols-1 gap-[30px] h-full'>
                    <div className=''>
                        <div className=''>
                            <img src={logo_paralympic} alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl text-center font-bold mb-[10px] mt-[20px]'>ข่าวพาราลิมปิก 2024</h2>
                            <div className='bg-white rounded-md p-4 grid grid-cols-2 max-768:grid-cols-1 gap-x-6 gap-y-2'>
                                {olympicNews.map((news, index) => (
                                    <div className={`
                                        ${index === 0 ? 'row-span-4' : 'border-b border-[#00000050]'}
                                        ${index === olympicNews.length - 1 ? 'border-b-0' : 'pb-2'} 
                                    `} key={index}>
                                        <div className={`${index !== 0 ? 'grid grid-cols-[50%_auto] gap-4' : ' '} `}>
                                            <div className='rounded-md overflow-hidden'>
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
                        <div className='w-full text-center my-[10px]'>
                            <a href="#">
                                <button className='bg-white py-2 px-[30px] text-base font-semibold rounded-md'>ดูทั้งหมด</button>
                            </a>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute -z-30 max-w-[65%] left-[-60%] top-[-1%] w-fit max-1200:max-w-[60%] max-1200:left-[-50%] max-1200:top-0 max-992:hidden max-768:block max-768:max-w-[45%] max-768:top-[-25%] max-768:right-[-12%] max-768:left-auto'>
                            <img className='' src={flag} alt="" />
                        </div>
                        <div>
                            <h3 className='bg-[#30155E] py-[10px] text-3xl rounded-lg text-white text-center font-semibold mb-[5px]'>สรุปอันดับเหรียญ</h3>
                            <ul>
                                <li className='flex bg-gradient-to-b from-[#7d84c2] to-[#fba9cb] rounded-[4px]'>
                                    <div className='w-[40%] flex items-center justify-center text-sm font-medium'>อันดับ</div>
                                    <div className='w-[15%] flex justify-center items-center border-x mr-[-1px]'>
                                        <img className='object-contain pb-[5px] size-[46px]' src={gold} alt="" />
                                    </div>
                                    <div className='w-[15%] flex justify-center items-center border-x'>
                                        <img className='object-contain pb-[5px] size-[46px]' src={silver} alt="" />   
                                    </div>
                                    <div className='w-[15%] flex justify-center items-center border-x ml-[-1px]'>
                                        <img className='object-contain pb-[5px] size-[46px]' src={copper} alt="" />   
                                    </div>
                                    <div className='w-[15%] flex items-center justify-center text-sm font-medium'>รวม</div>
                                </li>
                                {winnerTitle.map((coin, index) => (
                                     <li className={`${coin.country === "ไทย" ? "bg-[#550FB6] text-white" : "odd:bg-[#dbdbdb] bg-white"} flex mt-[2px] rounded-[4px]`} key={index}>
                                        <div className='w-[40%] flex items-center text-xs py-[10px] px-[5px]'>
                                            <span className='size-[30px] flex items-center justify-center'>{index + 1}</span>
                                            <p>{coin.country}</p>
                                        </div>
                                        <div className='w-[15%] flex justify-center items-center border-x border-white mr-[-1px] py-[10px] px-[5px] text-[15px]'>
                                            {coin.gold}
                                        </div>
                                        <div className='w-[15%] flex justify-center items-center border-x border-white py-[10px] px-[5px] text-[15px]'>
                                            {coin.silver}  
                                        </div>
                                        <div className='w-[15%] flex justify-center items-center border-x border-white ml-[-1px] py-[10px] px-[5px] text-[15px]'>
                                            {coin.copper}
                                        </div>
                                        <div className='w-[15%] flex items-center justify-center py-[10px] px-[5px] text-[15px]'>{coin.total}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OlympicNews