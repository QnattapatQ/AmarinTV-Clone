import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import lotteryNews from './lottery.js';

const LotterySection = () => {
    return (
        <div className='relative py-10 px-[15px] overflow-hidden bg-[#f2f2f2]'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-black pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#b86bcd] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl'>สลากกินแบ่งรัฐบาล</h2>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-purple-700 to-purple-400 text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <div className='flex gap-[30px] max-992:flex-col'>
                        <div className='w-[40%] max-992:w-full border-2 border-[#80389f] rounded-md'>
                            <div className='text-white text-center p-[15px] bg-[#80389f]'>
                                <p className='font-medium text-2xl'>ผลสลากกินแบ่งรัฐบาล</p>
                                <p>ประจำงวดวันที่ 1 กันยายน 2567</p>
                            </div>
                            <div className='p-[20px]'>
                                <div className='border-2 rounded-md py-[20px] text-center h-fit'>
                                    <strong className='font-semibold text-[40px] text-[#80389f]'>199606</strong>
                                    <p className='text-[#5f5f5f] text-sm'>รางวัลที่ 1</p>
                                </div>
                                <div className='flex gap-[10px] mt-[10px]'>
                                    <div className='w-full'>
                                        <div className='border-2 rounded-md text-center py-[7px]'>
                                            <p className='flex items-center justify-center px-[10px]'>
                                                <span className='px-[10px] text-[#80389f] text-2xl font-semibold'>173</span>
                                                <span className='w-[1px] h-[20px] bg-[#888]'></span>
                                                <span className='px-[10px] text-[#80389f] text-2xl font-semibold'>220</span>
                                            </p>
                                            <p className='mt-[5px] text-[#5f5f5f] text-sm'>เลขหน้า 3 ตัว</p>
                                        </div>
                                        <div className='border-2 rounded-md text-center py-[7px] mt-[10px]'>
                                            <p className='flex items-center justify-center px-[10px]'>
                                                <span className='px-[10px] text-[#80389f] text-2xl font-semibold'>173</span>
                                                <span className='w-[1px] h-[20px] bg-[#888]'></span>
                                                <span className='px-[10px] text-[#80389f] text-2xl font-semibold'>220</span>
                                            </p>
                                            <p className='mt-[5px] text-[#5f5f5f] text-sm'>เลขหน้า 3 ตัว</p>
                                        </div>
                                    </div>
                                    <div className='border-2 rounded-md py-[20px] text-center w-full'>
                                        <p className='font-semibold text-[40px] text-[#80389f]'>94</p>
                                        <p className='mt-[5px] text-[#5f5f5f] text-sm'>เลขท้าย 2 ตัว</p>
                                    </div>
                                </div>
                                <a className='mt-4 mx-auto w-[170px] py-[3px] bg-[#80389f] block text-sm text-center font-semibold text-white rounded' href="#">ดูรางวัลอื่นๆ</a>
                            </div>
                        </div>
                        <div className='w-[60%] max-992:w-full rounded-md overflow-hidden h-full'>
                            <div className='border-t-[6px] border-[#80389f] h-full'>
                                <div className='bg-white rounded mt-[-1px] pt-[10px] pb-[20px] px-[40px]'>
                                    <h4 className='text-[20px] text-center font-semibold'>ตรวจผลสลากกินแบ่งรัฐบาล</h4>
                                    <div className='mt-2 border cursor-pointer border-black px-[20px]  rounded-full max-w-[200px] w-full h-[30px] mx-auto flex justify-between items-center'>
                                        <p className='text-sm font-light text-nowrap'>งวดที่ 1 กันยายน 2567</p>
                                        <FaCaretDown/>
                                    </div>
                                    <div>
                                        <div className='flex gap-4 mt-4'>
                                            <input className='h-[50px] py-[6px] px-[12px] border border-[#d3d3d3] rounded-sm text-ทก outline-none w-full' placeholder='กรอกเลขสลากที่นี่' type="text" />
                                            <button className='bg-[#656c6f] rounded-sm h-[50px] px-[25px] text-white text-nowrap text-sm font-semibold'>ตรวจสลากของคุณ</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[30px] h-full max-1200:mt-[60px] max-992:mt-[30px]'>
                                    <div className='mb-[5px] text-center'>
                                        <h3 className='text-[22px] font-semibold'>ข่าวเด็ดเลขดัง</h3>
                                    </div>
                                    <div className='flex gap-5'>
                                        {lotteryNews.map((news, index) => (
                                            <div className='bg-white overflow-hidden rounded-md' key={index}>
                                                <div>
                                                    <img src={news.mewsImg} alt="" />
                                                </div>
                                                <div className='p-4 max-992:p-3'>
                                                    <p className='line-clamp-2 text-base font-medium'>{news.newsTopic}</p>
                                                    <p className='mt-[15px] text-xs text-[#212121]'>{news.newsDate}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>                                  
                            </div>
                        </div>
                    </div>
                    <div  className='hidden max-992:block w-full mt-6 mb-3'>
                        <div className='flex justify-center items-center'>
                            <button className='w-[190px] bg-gradient-to-r from-purple-700 to-purple-400 text-white py-2 px-[30px] text-lg rounded font-semibol'>ดูทั้งหมด</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LotterySection