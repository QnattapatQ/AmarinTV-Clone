import React from 'react'
import icon_amarin_live from '../../assets/icon-amarin-live.png';
import amarin10years from '../../assets/logo_10year.png';

const LiveSteamSection = () => {
    return (
        <div className="bg-[url('./assets/bg_10year.jpg')] bg-cover bg-no-repeat bg-center py-[60px]">
            <div className='max-w-[1170px] max-1200:max-w-[970px] w-full mx-auto my-[50px] max-992:my-0'>
                <div className='grid grid-cols-[280px_1fr] h-full gap-5 px-4 max-992:flex max-992:flex-col'>
                    <div className=''>
                        <img className='max-992:hidden' src={icon_amarin_live} alt="" />
                        <div className='pt-4 flex flex-col gap-4'>
                            <div className='max-992:hidden'>
                                <h2 className='text-[35px] font-bold text-white mb-[10px]'>คลุกวงใน ถามตรง ถามจริง</h2>
                                <p className='text-white text-lg mb-[10px]'>27 ส.ค 67</p>
                                <button className='border text-white rounded-md font-semibold px-[22px] py-[6px] mt-[10px]'>ผังรายการ</button>
                            </div>
                            <div className='hidden max-992:flex max-992:justify-center max-992:items-center gap-4'>
                                <div className='max-w-[80px] min-w-[60px] w-full'>
                                    <img src={amarin10years} alt="" />
                                </div>
                                <div>
                                    <img src={icon_amarin_live} alt="" />
                                </div>
                            </div>
                            <div className='pr-[25%] mt-4 max-992:hidden'>
                                <img className='object-cover' src={amarin10years} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='bg-blue-800'>
                        as
                    </div>
                    <div className='hidden max-992:block'>
                        <div className='w-full flex justify-between items-center'>
                            <h2 className='text-[35px] font-bold text-white mb-[10px]'>คลุกวงใน ถามตรง ถามจริง</h2>
                            <button className='border text-white rounded-md font-semibold px-[22px] py-[6px] mt-[10px]'>ผังรายการ</button>
                        </div>
                        <div>
                            <p className='text-white text-lg mb-[10px]'>27 ส.ค 67</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveSteamSection