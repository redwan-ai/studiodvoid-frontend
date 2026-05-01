import React from 'react';
import logo from '../../Media/logo.png';

const SubFooter = () => {
    const today = new Date().getFullYear();

    return (
        <div className='flex flex-col md:gap-16 gap-8'>
            <div className='lg:w-5/6 w-[95%] mx-auto grid lg:grid-cols-3 grid-cols-2 text-left gap-20 text-[#ddd]'>
                <div className='flex flex-col gap-4'>
                    <p className='md:text-3xl text-[25px] font-[600] text-secondary'>+ MEET US</p>
                    <p className='md:text-[15px] text-[12px] font-[300] leading-loose text-accent'>Address : 991 White St . Dawsonville GA 30534 , New York</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='md:text-3xl text-[25px] font-[600] text-secondary'>+ CALL US</p>
                    <p className='md:text-[15px] text-[12px] font-[300] leading-loose text-accent'>Phone : + (898) 784-7217</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='md:text-3xl text-[25px] font-[600] text-secondary'>+ TEXT US</p>
                    <p className='md:text-[15px] text-[12px] font-[300] leading-loose text-accent'>Email : Tatee.architecture@gmail.com</p>
                </div>
            </div>

            <div className='lg:w-5/6 w-[95%] gap-6 mx-auto grid grid-cols-2 items-center text-[#ddd] py-16'>
                <img className='md:w-[130px] w-[110px]' src={logo} alt="" />
                <p className='md:text-[14px] text-[12px] text-secondary'>© {today} STUDIO D'VOID . All rights reserved</p>
            </div>
        </div>
    );
};

export default SubFooter;