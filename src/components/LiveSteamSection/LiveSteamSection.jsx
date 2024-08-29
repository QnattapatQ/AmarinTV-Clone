import React from 'react'
import icon_amarin_live from '../../assets/icon-amarin-live.png';
import amarin10years from '../../assets/logo_10year.png';
import screen_live_img from '../../assets/screen_live_img.png';

const LiveSteamSection = () => {
    return (
        <div className="bg-[url('./assets/bg_10year.jpg')] bg-cover bg-no-repeat bg-center py-[60px] max-768:py-[25px] px-4">
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto my-[50px] max-992:my-0'>
                <div className='grid grid-cols-[280px_1fr] h-full gap-5 max-992:flex max-992:flex-col'>
                    <div className='้'>
                        <img className='max-992:hidden' src={icon_amarin_live} alt="" />
                        <div className='pt-4 flex flex-col gap-4'>
                            <div className='max-992:hidden'>
                                <h2 className='text-[35px] font-bold text-white mb-[10px]'>ทะเลแปร</h2>
                                <p className='text-white text-lg mb-[10px]'>27 ส.ค 67</p>
                                <button className='border text-white rounded-md font-semibold px-[22px] py-[6px] mt-[10px]'>ผังรายการ</button>
                            </div>

                            {/* Responsive Start */}

                            <div className='hidden max-992:flex max-992:justify-center max-992:items-center gap-4'>
                                <div className='max-w-[80px] max-768:max-w-[60px] w-full'>
                                    <img className='' src={amarin10years} alt="" />
                                </div>
                                <div className='max-768:h-[30px]'>
                                    <img className='h-full' src={icon_amarin_live} alt="" />
                                </div>
                            </div>

                            {/* Responsive End */}
                            
                            <div className='pr-[25%] max-1200:pr-[45%] mt-20 max-1200:mt-10 max-992:hidden'>
                                <img className='object-cover' src={amarin10years} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='w-full object-cover absolute bottom-0 max-992:static' src={screen_live_img} alt="" />
                    </div>
                    <div className='hidden max-992:block'>
                        <div className='w-full flex justify-between items-center'>
                            <h2 className='text-[35px] font-bold text-white mb-[10px] max-768:mb-0 max-768:text-[24px]'>ทะเลแปร</h2>
                            <button className='border border-white text-white rounded-md font-semibold px-[22px] py-[6px] mt-[10px] text-nowrap scale-[0.85]'>ผังรายการ</button>
                        </div>
                        <div>
                            <p className='text-white text-lg mb-[10px] max-768:text-sm'>27 ส.ค 67</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveSteamSection