import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <div className='line-top relative py-[60px] px-[15px] overflow-hidden bg-white'>
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div>
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <img src="https://static.amarintv.com/assets/images/logo.svg" alt="" />
                        </div>
                        <div className='flex gap-[10px]'>
                            <a href="#">
                                <img className='size-[35px]' src="https://static.amarintv.com/assets/images/icon-fb.svg" alt="" />
                            </a>
                            <a href="#">
                                <img className='size-[35px]' src="https://static.amarintv.com/assets/images/icon-x.svg" alt="" />
                            </a>
                            <a href="#">
                                <img className='size-[35px]' src="https://static.amarintv.com/assets/images/icon-line.svg" alt="" />
                            </a>
                            <a href="#">
                                <img className='size-[35px]' src="https://static.amarintv.com/assets/images/icon-yt.svg" alt="" />
                            </a>
                            <a href="#">
                                <img className='size-[35px]' src="https://static.amarintv.com/assets/images/icon-ig.svg" alt="" />
                            </a>
                            <a href="#">
                                <img className='size-[35px]' src="https://static.amarintv.com/assets/images/icon-tiktok.svg" alt="" />
                            </a>
                            <a href="#">
                                <img className='size-[35px]' src="https://static.amarintv.com/assets/images/icon-rss.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-[50px]'>
                        <div className='flex justify-between bg-red-500'>
                            <div className='flex flex-col w-full gap-2 relative'>
                                <h4>
                                    <a href="#">ข่าว</a>
                                </h4>
                                <h4>
                                    <a href="#">SPOYLIGHT</a>
                                </h4>
                                <h4>
                                    <a href="#">วีดีโอ</a>
                                </h4>
                                <h4>
                                    <a href="#">ละคร</a>
                                </h4>
                                <h4>
                                    <a href="#">ชีพจรลงพุงไกด์</a>
                                </h4>
                                <div className='mt-[50px]'>
                                    <img src="https://static.amarintv.com/assets/icon/sonp.svg" alt="" />
                                </div>
                                <div className='absolute bottom-[-20px] left-[205px]'>
                                    <h5 className='text-xs font-semibold text-nowrap'>ดาวน์โหลด 34 HD แอป </h5>
                                    <div className='flex gap-4'>
                                        <img className='w-[82px] h-auto' src="https://static.amarintv.com/assets/images/icons/ios-download.png?v=0.01" alt="" />
                                        <img className='w-[82px] h-auto' src="https://static.amarintv.com/assets/images/icons/android-download.png?v=0.01" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h4>
                                    <a href="#">ไลฟ์สไตล์</a>
                                </h4>
                                <h4>
                                    <a href="#">ยานยนต์</a>
                                </h4>
                                <h4>
                                    <a href="#">ผังรายการ</a>
                                </h4>
                                <h4>
                                    <a href="#">ตรวจหวย</a>
                                </h4>
                                <h4>
                                    <a href="#">ผู้ประกาศข่าว</a>
                                </h4>
                            </div>
                        </div>
                        <div className='bg-green-500'>

                        </div>
                        <div className='bg-orange-500'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer