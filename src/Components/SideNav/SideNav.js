import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';


const SideNav = ({ setNavOpen, navopen }) => {
    return (
        <div className='h-full w-full bg-black z-[11] absolute'>
            <div className='relative '>
                <RxCross2 className='absolute text-white right-[5%] top-[27px] cursor-pointer border border-white text-[26px] p-1' onClick={() => setNavOpen(!navopen)} />
                <ul className='flex flex-col pt-[2rem] items-center justify-around h-[100vh]'>
                    {/* <li className='text-[14px] font-medium text-white hover:text-primary duration-300'><Link to='/'>HOME</Link></li> */}
                    <li className='md:text-[14px] text-[11px] font-medium text-white hover:text-primary duration-300'><Link to='/about'>ABOUT</Link></li>
                    <li className='md:text-[14px] text-[11px] font-medium text-white hover:text-primary duration-300'><Link to='/projects'>PROJECTS</Link></li>
                    <li className='md:text-[14px] text-[11px] font-medium text-white hover:text-primary duration-300'><Link to='/architecture-page'>ARCHITECTURE</Link></li>
                    <li className='md:text-[14px] text-[11px] font-medium text-white hover:text-primary duration-300'><Link to='/interiorWork-page'>INTERIOR WORK</Link></li>
                    <li className='md:text-[14px] text-[11px] font-medium text-white hover:text-primary duration-300'><Link to='/planning-page'>PLANNING</Link></li>
                    {/* <li className='md:text-[14px] text-[11px] font-medium text-white hover:text-primary duration-300'><Link to='/blogs'>BLOGS</Link></li> */}
                    <li className='md:text-[14px] text-[11px] font-medium text-white hover:text-primary duration-300'><Link to='/contact-us'>CONTACTS</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;