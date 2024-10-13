import React from 'react'
import dramasData from './dramasData'
import './drama.css';

const DramasSection = () => {
    return (
        <div className='line-top line-bottom relative py-[60px] px-[15px] overflow-hidden bg-[#2d2d2d]'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#565656] pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#ffb200] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl text-white'>ดูละครย้อนหลัง</h2>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-[#ff7b00] to-[#ffb200] text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='grid grid-cols-4 gap-6 max-992:grid-cols-2 max-992:gap-3'>
                        {dramasData.map((data, index) => (
                            <a href='#' className={`${data.dramaDesc !== "" ? 'row-span-2 col-span-2' : ''} bg-[#1e1e1e] overflow-hidden rounded-md hover:translate-y-[-5px] duration-300`} key={index}>
                                <div>
                                    <img src={data.dramaImage} alt="" />
                                </div>
                                <div className='pt-[15px] px-[20px] pb-[20px]'>
                                    <h3 className={`${data.dramaDesc !== "" ? 'text-[28px]' : ''} max-992:text-base text-[#b9b9b9]  font-semibold line-clamp-2`}>{data.dramaName}</h3>
                                    <div className='text-[#5b5b5b] mt-[15px] text-xs'>{data.dramaData}</div>
                                    <p className={`${data.dramaDesc !== "" ? 'mt-[15px] mb-[10px]' : 'hidden'} text-white text-sm font-light`}>{data.dramaDesc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div  className='hidden max-992:block w-full mt-6 mb-3'>
                <div className='flex justify-center items-center'>
                    <button className='w-[190px] bg-gradient-to-r from-[#ff7b00] to-[#ffb200] text-white py-2 px-[30px] text-lg rounded font-semibol'>ดูทั้งหมด</button>
                </div>
            </div>
        </div>
    )
}

export default DramasSection