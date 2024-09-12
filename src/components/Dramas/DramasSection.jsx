import React from 'react'

const DramasSection = () => {
    return (
        <div className='relative py-[60px] px-[15px] overflow-hidden bg-[#2d2d2d]'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#565656] pb-2 relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#ffb200] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <h2 className='text-[38px] font-semibold max-768:text-2xl text-white'>ดูละครย้อนหลัง</h2>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-[#ff7b00] to-[#ffb200] text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DramasSection