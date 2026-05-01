import React, { useState } from 'react';
import logo from '../../Media/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import SideNav from '../SideNav/SideNav';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    const [navopen, setNavOpen] = useState(false);

    return (
        <div>
            <div className='text-white'>
                <div className='absolute top-0 h-[80px] z-10 px-[5%] flex justify-between items-center w-full'>
                    <Link to='/' className='md:w-[120px] w-[100px]'>
                        <img src={logo} alt="" />
                    </Link>

                    <ul className='flex items-center gap-16 hidden lg:flex'>
                        <li className='text-[13px] font-medium'><Link to='/'>HOME</Link></li>
                        <li className='text-[13px] font-medium'><Link to='/about'>ABOUT</Link></li>
                        <li className='text-[13px] font-medium'><Link to='/projects'>PROJECTS</Link></li>
                        <ul className='text-[13px] font-medium menu menu-compact dropdown-content'>
                            <li className='relative'>
                                <Link className='focus:bg-transparent focus:text-white hover:bg-transparent' to='/services'>SERVICES</Link>
                                <ul className="text-black absolute top-[2rem] left-0">
                                    <li><Link className='hover:translate-x-[5px] focus:text-black pr-[7rem] py-4 border-b bg-white' to='/architecture-page'>Architecture</Link></li>
                                    <li><Link to='/interiorWork-page' className='hover:translate-x-[5px] focus:text-black pr-[7rem] py-4 border-b bg-white'>Interior Work</Link></li>
                                    <li><Link to='/planning-page' className='hover:translate-x-[5px] focus:text-black pr-[7rem] py-4 border-b bg-white'>Planning</Link></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <li className='text-[13px] font-medium'><Link to='/blogs'>BLOGS</Link></li> */}
                        <li className='text-[13px] font-medium'><Link to='/contact-us'>CONTACTS</Link></li>
                    </ul>

                    <div className='cursor-pointer border p-1 border-white block lg:hidden' onClick={() => setNavOpen(!navopen)}>
                        <AiOutlineMenu />
                    </div>
                </div>
            </div>
            {navopen && <SideNav navopen={navopen} setNavOpen={setNavOpen} />}
        </div>
    );
};

export default NavBar;