import React from 'react'

const LatestNews = () => {
    return (
        <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto pt-4 pb-[60px]'>
            <div className='w-full flex justify-between items-center border-b'>
                <h2 className='text-[38px] font-semibold'>ข่าวล่าสุด</h2>
                <div>
                    <button className='bg-yellow-500 text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                </div>
            </div>
        </div>
    )
}

export default LatestNews