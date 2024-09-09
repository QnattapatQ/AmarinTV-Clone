import React from 'react'

const LotterySection = () => {
    return (
        <div className='relative py-10 px-[15px] overflow-hidden bg-[#f2f2f2]'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#b86bcd] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl'>สลากกินแบ่งรัฐบาล</h2>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-purple-700 to-purple-400 text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <div className='flex gap-[30px]'>
                        <div className='w-[40%] border-2 border-[#80389f] rounded-md'>
                            <div className='text-white text-center p-[20px] bg-[#80389f]'>
                                <p className='font-medium text-2xl'>ผลสลากกินแบ่งรัฐบาล</p>
                                <p>ประจำงวดวันที่ 1 กันยายน 2567</p>
                            </div>
                            <div className='p-[20px]'>
                                <div className='border-2 rounded-md py-[20px] text-center'>
                                    <p className='font-semibold text-[40px] text-[#80389f]'>199606</p>
                                    <p className='mt-[5px] text-[#5f5f5f] text-sm'>รางวัลที่ 1</p>
                                </div>
                                <div className='flex gap-[10px] mt-[10px]'>
                                    <div className='w-full'>
                                        <div className='border-2 rounded-md text-center py-[7px]'>
                                            <p className='flex items-start justify-center px-[10px]'>
                                                <span className='px-[10px] text-[#80389f] text-2xl font-semibold'>173</span>
                                                <span className='w-[1px] h-[20px] bg-[#888]'></span>
                                                <span className='px-[10px] text-[#80389f] text-2xl font-semibold'>220</span>
                                            </p>
                                            <p className='mt-[5px] text-[#5f5f5f] text-sm'>เลขหน้า 3 ตัว</p>
                                        </div>
                                        <div className='border-2 rounded-md text-center py-[7px] mt-[10px]'>
                                            <p className='flex items-start justify-center px-[10px]'>
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
                            </div>
                        </div>
                        <div className='w-[60%] bg-red-200 rounded-md'>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LotterySection