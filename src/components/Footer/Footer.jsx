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
                </div>
            </div>
        </div>
    )
}

export default Footer