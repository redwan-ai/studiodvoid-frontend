import React from 'react';
import service1 from '../../Media/service-01.jpg';
import service2 from '../../Media/service-02.jpg';
import service3 from '../../Media/service-03.jpg';
import { Link } from 'react-router-dom';

const Dept = () => {
    return (
        <div className='w-9/12 pt-10 mx-auto grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'>
            <div className='xl:py-40 py-12 px-8 flex flex-col md:gap-6 gap-4 text-accent xl:border-l md:border-0 border-b pb-8 md:pb-0 border-[#272727]'>
                <div className='md:px-14 px-12'>
                    <img className='rounded-full p-2 border border-[#272727] ' src={service1} alt="" />
                </div>
                <Link className='text-xl font-[500] text-secondary'>ARCHITECTURE</Link>
                <p className='text-[13px] font-[300]'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='xl:py-40 py-12 px-8 flex flex-col md:gap-6 gap-4 text-accent xl:border-l md:border-0 border-b pb-8 md:pb-0 border-[#272727]'>
                <div className='md:px-14 px-12'>
                    <img className='rounded-full p-2 border border-[#272727] ' src={service2} alt="" />
                </div>
                <Link className='text-xl font-[500] text-secondary'>INTERIOR</Link>
                <p className='text-[13px] font-[300]'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='xl:py-40 py-12 px-8 flex flex-col md:gap-6 gap-4 text-accent xl:border-l xl:border-r border-[#272727]'>
                <div className='md:px-14 px-12'>
                    <img className='rounded-full p-2 border border-[#272727] ' src={service3} alt="" />
                </div>
                <Link className='text-xl font-[500] text-secondary'>PLANNING</Link>
                <p className='text-[13px] font-[300]'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
};

export default Dept;