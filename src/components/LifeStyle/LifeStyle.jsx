import React from 'react'
import latest_1 from '../../assets/LifeStyle/Latest/latest_1.png';

const LifeStyle = () => {
    return (
        <div className='relative py-[60px] px-[15px] overflow-hidden bg-[#f2f2f2]'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#565656] pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#ffb200] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl uppercase'>Lifestyle</h2>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-[#ff7b00] to-[#ffb200] text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                <div  className='relative'>
                    <div className='grid grid-cols-2 mt-6 gap-6'>
                        <div className='bg-white overflow-hidden rounded-md'>
                            <a href="#">
                                <div>
                                    <div>
                                        <img src={latest_1} alt="" />
                                    </div>
                                    <div className='relative px-4 pt-4 pb-10'>
                                        <div className='absolute top-[-8%] text-[11px] font-light py-[6px] px-[13px] left-[20px] bg-[rgb(96_18_186)] text-white'>
                                            ดูดวง
                                        </div>
                                        <h3 className='line-clamp-2 font-semibold text-[#444] text-[28px]'>ดวงรายวัน คำทำนายประจำวันที่ 21 กันยายน 2567 เช็กดวงดีประจำวัน</h3>
                                        <p className='text-xs font-light mt-4 text-[#444]'>21 ก.ย 67</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='bg-green-500'>
                            <div>

                            </div>
                        </div>
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

export default LifeStyle