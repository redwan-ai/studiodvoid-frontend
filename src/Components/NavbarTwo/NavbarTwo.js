import React, { useState } from 'react';
import logo from '../../Media/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import SideNav from '../SideNav/SideNav';
import { Link } from 'react-router-dom';



const NavbarTwo = () => {
    const [navopen, setNavOpen] = useState(false);

    return (
        <div>
            <div className='absolute top-0 h-[80px] z-10 px-[5%] w-full flex justify-between items-center text-white'>
                <Link to='/' className='md:w-[120px] w-[100px]'>
                    <img src={logo} alt="" />
                </Link>

                <div className='flex items-center gap-[9rem]'>
                    <p className='text-[13px] hidden lg:block'>Call us : + (898) 784 -7217</p>
                    <p className='text-[13px] hidden lg:block'>Tatee.architecture@gmail.com</p>

                    <div className='cursor-pointer border border-white p-1 dropdown z-[100]' onClick={() => setNavOpen(!navopen)}>
                        <AiOutlineMenu />
                    </div>
                </div>
            </div>
            {navopen && <SideNav setNavOpen={setNavOpen} navopen={navopen} />}
        </div>
    );
};

export default NavbarTwo;