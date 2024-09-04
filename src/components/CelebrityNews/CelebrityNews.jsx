import React from 'react'
import celebrityNews from './celebrityNews.js'

const CelebrityNews = () => {
    return (
        <div className='px-4'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto py-[60px] max-768:py-[25px]'>
                <div className='w-full flex justify-between items-center border-b pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#b86bcd] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl'>ข่าวบันเทิง ดารา</h2>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-purple-700 to-purple-400 text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='grid grid-cols-4 gap-6 max-768:grid-cols-1 max-768:gap-4'>
                        {celebrityNews.map((news, index) =>  (
                            <div className='border border-[#f3f3f3] rounded-md overflow-hidden hover:translate-y-[-5px] duration-300' key={index}>
                                <div>
                                    <img src={news.newsCover} alt="" />
                                </div>
                                <div className='p-4 max-768:p-2'>
                                    <h3 className={`${news.newsDesc === '' ? 'font-medium' : 'text-[26px] font-semibold'} line-clamp-2`}>{news.newsTopic}</h3>
                                    <p className='text-xs mt-4 text-[#555] font-light'>{news.newsData}</p>
                                    <p className='my-[14px] text-[#555] font-light text-sm'>{news.newsDesc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div  className='hidden max-768:block w-full mt-6 mb-3'>
                        <div className='flex justify-center items-center'>
                            <button className='w-[190px] bg-gradient-to-r from-purple-700 to-purple-400 text-white py-2 px-[30px] text-lg rounded font-semibol'>ดูทั้งหมด</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CelebrityNews