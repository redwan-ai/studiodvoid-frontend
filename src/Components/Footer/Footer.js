import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillMedicineBox, AiFillPhone, AiOutlineClockCircle, AiOutlineLogin, AiOutlineTeam } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { MdOutlineQuestionAnswer } from 'react-icons/md';
import { GoRequestChanges } from 'react-icons/go';
import { IoMdListBox } from 'react-icons/io';
import footerBg from '../../Media/footer-bg.jpg';
import logo from '../../Media/logo.png';

const Footer = () => {
    const today = new Date().getFullYear();
    return (
        <footer style={{ background: `url(${footerBg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", objectFit: "cover" }} className='bg-primary py-8'>
            <div className="footer p-10">
                <img className='w-[150px]' src={logo} alt="" />
                <div className='text-[#ddd]'>
                    <span className="text-[#ddd] font-[600] text-[17px] mb-4">Contact Center</span>
                    <Link className="flex items-center gap-1 text-md mb-3">
                        <span className='text-[#ddd] text-lg'><AiFillPhone /></span>
                        <span className='font-medium'>(+1) 212-946-2707</span>
                    </Link>
                    <Link className="flex items-center gap-1 text-md mb-3">
                        <span className='text-[#ddd] text-lg'><ImLocation /></span>
                        <span className='font-medium'>112 W 34th St, New York</span>
                    </Link>
                    <Link className="flex items-center gap-1 text-md mb-3">
                        <span className='text-[#ddd] text-lg'><AiOutlineClockCircle /></span>
                        <span className='font-medium'>Mon – Fri: 8.00am 6.00pm</span>
                    </Link>
                </div>
                <div className='text-[#ddd]'>
                    <span className="text-[#ddd] font-[600] text-[17px] mb-4">Company</span>
                    <Link className="flex items-center gap-1 text-md mb-3">
                        <span className='text-[#ddd] text-lg'><AiOutlineLogin /></span>
                        <span className='font-medium'>Login</span>
                    </Link>
                    <Link className="flex items-center gap-1 text-md mb-3">
                        <span className='text-[#ddd] text-lg'><MdOutlineQuestionAnswer /></span>
                        <span className='font-medium'>FAQ's</span>
                    </Link>
                    <Link className="flex items-center gap-1 text-md mb-3">
                        <span className='text-[#ddd] text-lg'><AiFillMedicineBox /></span>
                        <span className='font-medium'>Medicare</span>
                    </Link>
                </div>
                <div className='text-[#ddd]'>
                    <span className="text-[#ddd] font-[600] text-[17px] mb-4">Legal</span>
                    <Link className="flex items-center gap-1 text-md mb-3">
                        <span className='text-[#ddd] text-lg'><AiOutlineTeam /></span>
                        <span className='font-medium'>Our Team</span>
                    </Link>
                    <Link className="flex items-center gap-1 text-md mb-3">
                        <span className='text-[#ddd] text-lg'><GoRequestChanges /></span>
                        <span className='font-medium'>Appoinment</span>
                    </Link>
                    <Link className="flex items-center gap-1 text-md mb-3">
                        <span className='text-[#ddd] text-lg'><IoMdListBox /></span>
                        <span className='font-medium'>Blogs</span>
                    </Link>
                </div>
            </div>
            <div className='text-center md:text-[14px] text-[10px] md:font-normal font-[300] text-[#ddd] md:pt-8 pt-4'>
                <p>{`Copyright © ${today} - This site is designed and developed by vollosoft`}</p>
            </div>
        </footer>
    );
};

export default Footer;