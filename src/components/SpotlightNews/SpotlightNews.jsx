import React from 'react';
import spotlight from '../../assets/spotlight.svg';


const SpotlightNews = () => {
    return (
        <div className="border-y-4 w-full pt-[45px] pb-[60px] px-4 border-[#143496] bg-[-55px_top] bg-[url('./assets/SpotlightNews/spotlight-bg.png')] bg-no-repeat bg-[#f0f7fc] overflow-hidden">
            <div className='max-w-[1170px] max-1200:max-w-[970px] max-992:max-w-[750px] w-full mx-auto'>
                <div className='w-full flex justify-between items-center border-b border-[#143496] pb-[30px] mb-[30px] relative'>
                    <div className='after:absolute after:border-b-[6px] after:rounded-sm after:right-0 after:left-0 after:bottom-[-3px] after:w-[145px] after:max-768:w-[100px] after:border-[#e1d732] after:max-768:border-b-[3px] after:max-768:bottom-0'>
                        <a href="">
                            <img src={spotlight} alt="" />
                        </a>
                    </div>
                    <div className='max-768:hidden'>
                        <button className='bg-gradient-to-r from-[#143496] to-[#5677de] text-white py-2 px-[30px] rounded'>ดูทั้งหมด</button>
                    </div>
                </div>
                SpotlightNews
            </div>
        </div>
    )
}

export default SpotlightNews