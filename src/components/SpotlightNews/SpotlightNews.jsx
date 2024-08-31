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
               <div className='flex gap-4 bg-red-500'>
                    <div className='basis-[66.67%] grid grid-cols-4 gap-4'>
                        {newsContent?.map((news, index) => (
                            <div className={`${news.newsDesc !== "" ? 'col-span-4' : ''}`} key={index}>
                                <div className={`${news.newsDesc !== "" ? 'flex flex-row-reverse' : ''} gap-4`}>
                                    <div className={`${news.newsDesc !== "" ? 'basis-1/2' : ''} h-full rounded-md overflow-hidden`}>
                                        <img className='h-full' src={news.newsCover} alt="" /> 
                                    </div>
                                    <div className={`${news.newsDesc !== "" ? 'basis-1/2' : ''} relative`}>
                                        <div className='relative'>
                                            <p className={`${news.newsDesc === "" ? 'my-[10px]' : ''} text-[13px] text-[#143496] font-medium before:absolute before:left-0 before:top-1/2 before:w-[12px] before:h-[2px] before:bg-[#e1d732] before:block pl-4`}>{news.newsTag}</p>
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
                    <div className='basis-[33.33%] bg-blue-500 h-full'>
                        <div className='flex justify-between flex-col h-full'>
                            <div>
                                <h1 className='text-[22px]'>วีดีโอ</h1>
                            </div>
                            <div className='flex flex-col justify-between h-full'>
                                {newsVideo?.map((news, index) => (
                                    <div className='py-1' key={index}>
                                        <div className='flex gap-3'>
                                            <div className='basis-1/2'>
                                                <img src={news.newsCover} alt="" />
                                            </div>
                                            <div className='basis-1/2'>
                                                <div>
                                                    <h3 className='line-clamp-2'>{news.newsTopic}</h3>
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