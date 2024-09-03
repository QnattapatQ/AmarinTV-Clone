import React, { useEffect, useState } from 'react';
import spotlight from '../../assets/spotlight.svg';
import spotlightNews from './spotlightNews.js';


const SpotlightNews = () => {

    const [newsVideo, setNewsVideo] = useState([]);
    const [newsContent, setNewsContent] = useState([]);

    const isNewsVideo = () => {
        const news = spotlightNews.filter((news) => {
            if(news.isVideo) {
                return news
                // console.log(news)
            }
        });
        return setNewsVideo(news);
    }

    const isNewsContent = () => {
        const news = spotlightNews.filter((news) => {
            if(news.isVideo === false) {
                return news
            }
        });
        return setNewsContent(news);
    }

    useEffect(() => {
        isNewsVideo();
        isNewsContent();
    }, []);
    
    return (
        <div className="border-y-4 w-full pt-[45px] pb-[60px] px-4 border-[#143496] bg-[-55px_top] bg-[url('./assets/SpotlightNews/spotlight-bg.png')] bg-no-repeat bg-[#f0f7fc] overflow-hidden">
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#143496] pb-[30px] mb-[30px] relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#e1d732] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <a href="">
                            <img src={spotlight} alt="" />
                        </a>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-[#143496] to-[#5677de] text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
               <div className='flex max-992:flex-col gap-4'>
                    <div className='basis-[66.67%] max-992:basis-full grid grid-cols-4 max-992:grid-cols-2 gap-4 pr-4 border-r border-[rgba(112,112,112,0.4)] max-992:border-0'>
                        {newsContent?.map((news, index) => (
                            <div className={`${news.newsDesc !== "" ? 'col-span-4 max-992:col-span-2' : ''}`} key={index}>
                                <div className={`${news.newsDesc !== "" ? 'flex flex-row-reverse' : ''} gap-4`}>
                                    <div className={`${news.newsDesc !== "" ? 'basis-1/2' : ''} h-full rounded-md overflow-hidden`}>
                                        <img className='h-full' src={news.newsCover} alt="" /> 
                                    </div>
                                    <div className={`${news.newsDesc !== "" ? 'basis-1/2' : ''} relative`}>
                                        <div className='relative'>
                                            <div className={`${news.newsDesc === "" ? 'my-[10px]' : ''} text-[13px] text-[#143496] font-medium before:absolute before:left-0 before:top-1/2 before:w-[12px] before:h-[2px] before:bg-[#e1d732] before:block pl-4`}>
                                                <a href="#">
                                                    {news.newsTag}
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='my-2'>
                                                <h3 className={`${news.newsDesc === "" ? 'text-[15px] font-semibold' : 'text-[20px]'} line-clamp-2 font-semibold`}>{news.newsTopic}</h3>
                                            </div>
                                            <div className='line-clamp-2 text-sm text-[#212121]'>
                                                {news.newsDesc}
                                            </div>
                                            <div className='mt-[10px] text-xs text-[#212121]'>
                                                {news.newsDate}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='basis-[33.33%] max-992:basis-full h-full'>
                        <div className='flex justify-between flex-col h-full'>
                            <div className='mb-[5px]'>
                                <h1 className='text-[22px] text-[#143496] font-semibold'>วีดีโอ</h1>
                            </div>
                            <div className='flex flex-col justify-between h-full'>
                                {newsVideo?.map((news, index) => (
                                    <div className={`
                                            ${index === 0 ? 'pt-2 pb-[20px]' : ''}
                                            ${index === 1 ? 'py-[20px] border-y border-[rgba(112,112,112,0.4)]' : ''}
                                            ${index === 2 ? 'pb-2 pt-[20px]' : ''}
                                        `} key={index}>
                                        <div className='grid grid-cols-2 max-992:grid-cols-[135px_1fr] gap-3'>
                                            <div className='rounded-md overflow-hidden'>
                                                <a href='#' className=''>
                                                    <img src={news.newsCover} alt="" />
                                                </a>
                                            </div>
                                            <div className=''>
                                                <div className='relative'>
                                                    <div className='text-[13px] text-[#143496] font-medium before:absolute before:left-0 before:top-1/2 before:w-[12px] before:h-[2px] before:bg-[#e1d732] before:block pl-4'>
                                                        <a href="#">
                                                            {news.newsTag}
                                                        </a>
                                                    </div>
                                                </div>  
                                                <div className=''>
                                                    <div>
                                                        <h3 className='line-clamp-2 text-[16px] font-medium my-2'>{news.newsTopic}</h3>
                                                        <p className='mt-[8px] text-xs text-[#212121]'>{news.newsDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default SpotlightNews