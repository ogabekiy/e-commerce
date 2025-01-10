import React from 'react';

export default function Experience() {
  return (
    <div className='container mx-auto mt-[140px]'>
      <div className='w-[1170px] h-[500px] bg-black flex items-center justify-between'>
        {/* Left Section */}
        <div className='ml-8'>
          <h3 className='text-[#00FF66] text-lg mb-4'>Categories</h3>
          <p className='text-white text-[48px]  w-[443px] leading-[60px] mb-8'>
            Enhance Your Music Experience
          </p>
          <div className='flex items-center space-x-4 mb-8'>
            <div className='w-[80px] h-[80px] bg-white flex flex-col items-center justify-center rounded-[90%]'>
              <span className='text-black text-[24px] font-bold'>23</span>
              <span className='text-black text-sm'>Hours</span>
            </div>
            <div className='w-[80px] h-[80px] bg-white flex flex-col items-center justify-center rounded-[90%]'>
              <span className='text-black text-[24px] font-bold'>05</span>
              <span className='text-black text-sm'>Days</span>
            </div>
            <div className='w-[80px] h-[80px] bg-white flex flex-col items-center justify-center rounded-[90%]'>
              <span className='text-black text-[24px] font-bold'>59</span>
              <span className='text-black text-sm'>Minutes</span>
            </div>
            <div className='w-[80px] h-[80px] bg-white flex flex-col items-center justify-center rounded-[90%]'>
              <span className='text-black text-[24px] font-bold'>35</span>
              <span className='text-black text-sm'>Seconds</span>
            </div>
          </div>
          <button className='text-white text-[18px] font-medium w-[171px] h-[56px] bg-[#00FF66] rounded-md'>
            Buy Now
          </button>
        </div>

        <div className='relative mr-8'>
          
          <img
            src='./Frame694.png'
            alt='Speaker'
            className='w-[450px] h-auto relative z-10'
          />
        </div>
      </div>
    </div>
  );
}
