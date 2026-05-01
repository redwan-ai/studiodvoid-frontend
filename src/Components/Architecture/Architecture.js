import React from 'react';
import NavBar from '../NavBar/NavBar';
import PageBanner from '../PageBanner/PageBanner';
import ArchitectBanner from '../../Media/section-banner.jpg';
import SubFooter from '../SubFooter/SubFooter';
import { BsTelephonePlus } from 'react-icons/bs';
import { AiFillStar, AiOutlineMail } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import galleryPic1 from '../../Media/gallery-1.jpg';
import galleryPic2 from '../../Media/gallery-2.jpg';
import galleryPic3 from '../../Media/gallery-3.jpg';
import galleryPic4 from '../../Media/gallery-4.jpg';
import galleryPic5 from '../../Media/gallery-5.jpg';
import galleryPic6 from '../../Media/gallery-6.jpg';
import galleryPic7 from '../../Media/gallery-7.jpg';
import galleryPic8 from '../../Media/gallery-8.jpg';
import galleryPic9 from '../../Media/gallery-9.jpg';
import deptPic1 from '../../Media/deptPic.png';
import deptPic2 from '../../Media/deptPic2.png';
import deptPic3 from '../../Media/deptPic3.png';
import { IoMdCheckboxOutline, IoMdCheckmarkCircleOutline, IoMdQuote } from 'react-icons/io';
import ceoPic1 from '../../Media/ceo-01.jpg';
import ceoPic2 from '../../Media/ceo-02.jpg';
import './Architecture.css';


const Architecture = () => {
    return (
        <div>
            <NavBar />
            <PageBanner banner={ArchitectBanner} moto={"Architecture"} subTitle={"About our Architect work up"} />
            {/* Here main start */}
            <div className='2xl:w-5/6 w-[90%] mx-auto lg:my-16 my-28 mb-36'>
                <div className='grid xl:grid-cols-4 grid-cols-1 gap-12'>
                    <div className='xl:col-span-1 text-white flex flex-col gap-6 xl:order-1 order-2'>
                        <div className='text-left px-4 py-8 bg-[#333]'>
                            <p className='mb-4 md:text-xl text-[17px] border-b border-secondary pb-2 text-secondary'>More Services</p>
                            <div className='flex flex-col gap-4'>
                                <Link className='hover:bg-primary duration-300 hover:text-white bg-primary p-3 md:text-[15px] text-[13px]'>Architecture</Link>
                                <Link className='hover:bg-primary duration-300 hover:text-white bg-white p-3 text-black md:text-[15px] text-[13px]'>Interior Work</Link>
                                <Link className='hover:bg-primary duration-300 hover:text-white bg-white p-3 text-black md:text-[15px] text-[13px]'>Planning</Link>
                            </div>
                        </div>
                        <div className='text-left px-4 py-8 bg-[#333]'>
                            <p className='mb-4 md:text-xl text-[17px] border-b border-secondary pb-2 text-secondary'>Contact</p>
                            <div className='flex flex-col gap-4'>
                                <div className='bg-white p-3 text-black flex items-center gap-4'>
                                    <div className='md:text-[24px] text-[20px]'>
                                        <BsTelephonePlus />
                                    </div>
                                    <div>
                                        <p className='md:text-[15px] text-[13px] font-[500] mb-[2px]'>Phone Number</p>
                                        <p className='md:text-[14px] text-[11px] text-someDeep'>+123 456 7890</p>
                                    </div>
                                </div>
                                <div className='bg-white p-3 text-black flex items-center gap-4'>
                                    <div className='md:text-[24px] text-[20px]'>
                                        <AiOutlineMail />
                                    </div>
                                    <div>
                                        <p className='md:text-[15px] text-[13px] font-[500] mb-[2px]'>Email Address</p>
                                        <p className='md:text-[15px] text-[12px] text-someDeep'>info@abcmail.com</p>
                                    </div>
                                </div>
                                <div className='bg-white p-3 text-black flex items-center gap-4'>
                                    <div className='md:text-[24px] text-[20px]'>
                                        <ImLocation2 />
                                    </div>
                                    <div>
                                        <p className='md:text-[15px] text-[13px] font-[500] mb-[2px]'>Location</p>
                                        <p className='md:text-[15px] text-[12px]  text-someDeep'>14/A, Miranda City, NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-left px-6 py-8 bg-[#333]'>
                            <p className='mb-4 md:text-xl text-[17px] border-b border-secondary pb-2 text-secondary'>Gallery</p>
                            <div className='grid grid-cols-3 gap-2'>
                                <img className='object-cover w-full' src={galleryPic1} alt="" />
                                <img className='object-cover w-full' src={galleryPic2} alt="" />
                                <img className='object-cover w-full' src={galleryPic3} alt="" />
                                <img className='object-cover w-full' src={galleryPic4} alt="" />
                                <img className='object-cover w-full' src={galleryPic5} alt="" />
                                <img className='object-cover w-full' src={galleryPic6} alt="" />
                                <img className='object-cover w-full' src={galleryPic7} alt="" />
                                <img className='object-cover w-full' src={galleryPic8} alt="" />
                                <img className='object-cover w-full' src={galleryPic9} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='xl:col-span-3 text-secondary text-left flex flex-col gap-8 xl:order-2 order-1'>
                        <p className='lg:text-3xl md:text-[25px] text-[22px] leading-normal font-[500] md:mb-1'>Creative Solutions By Inoterior Professional Designers</p>
                        <img src={deptPic1} alt="" />
                        <div className='flex flex-col gap-2 md:text-[17px] text-[15px] md:leading-relaxed leading-normal font-[300] text-accent'>
                            <p className='jose-font'>Since 1999, we have been providing great flooring solutions and customer service for homeowners and commercial clients. among flooring materials, none is more elegant and luxurious than natural stone. Give your consent, we design a perfect bend choose the style, we complete with our file.</p>
                            <p className='jose-font'>A wonderful serenity has taken  possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart and its very blessed.</p>
                        </div>

                        <div className='grid lg:grid-cols-2 grid-cols-1 items-center mt-4'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex items-center gap-2'>
                                    <div className='md:text-[45px] text-[35px]'>
                                        <IoMdCheckboxOutline />
                                    </div>
                                    <div className=''>
                                        <p className='md:text-[22px] text-[20px] font-[500]'>Use of Interior</p>
                                        <p className='md:text-[14px] text-[12px] font-[300] jose-font'>Giving your home a new style every style</p>
                                    </div>
                                </div>
                                <ul className='text-accent'>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>We provide high quality design services.</p> </li>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>Project on time and Latest Design.</p> </li>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>Scientific Skills For getting a better result.</p> </li>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>Renovations Benefit of Service</p> </li>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>We are confident about our projects.</p> </li>
                                </ul>
                            </div>
                            <div className='lg:block hidden'>
                                <img src={deptPic2} alt="" />
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2 grid-cols-1 items-center mt-8'>
                            <div className='hidden lg:block'>
                                <img src={deptPic3} alt="" />
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex items-center gap-2'>
                                    <div className='md:text-[45px] text-[35px]'>
                                        <IoMdCheckboxOutline />
                                    </div>
                                    <div className=''>
                                        <p className='md:text-[22px] text-[20px] font-[500]'>Make An Art</p>
                                        <p className='md:text-[14px] text-[12px] font-[300] jose-font'>Giving your home a new style every style</p>
                                    </div>
                                </div>
                                <ul className='text-accent'>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>We provide high quality design services.</p> </li>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>Project on time and Latest Design.</p> </li>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>Scientific Skills For getting a better result.</p> </li>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>Renovations Benefit of Service</p> </li>
                                    <li className='flex items-center gap-2'><IoMdCheckmarkCircleOutline className='text-[23px] text-primary' /> <p className='ms:text-[14px] text-[13px] leading-[30px] jose-font'>We are confident about our projects.</p> </li>
                                </ul>
                            </div>
                        </div>

                        <p className='md:text-3xl text-[25px] leading-normal font-[500] mb-1 mt-8 jose-font'>Words From Our Customers</p>

                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-12'>
                            <div className='border border-[#353535] flex flex-col gap-4 p-6 relative client-card'>
                                <div className='qouteIcon absolute -top-[25px] right-[15px] text-[60px] text-[#333]'>
                                    <IoMdQuote />
                                </div>
                                <ul className='flex text-primary'>
                                    <li><AiFillStar /></li>
                                    <li><AiFillStar /></li>
                                    <li><AiFillStar /></li>
                                    <li><AiFillStar /></li>
                                    <li><AiFillStar /></li>
                                </ul>
                                <p className='text-[15px] font-[300] italic text-accent jose-font'>I love everything that put together for my living room! I just bought this house and only had a few items I wanted to keep. I’am able to help me visualize the room”</p>
                                <div className='flex items-center gap-3'>
                                    <img className='w-[60px] h-[60px] object-cover]' src={ceoPic2} alt="" />
                                    <div>
                                        <p className='md:text-[17px] text-[15px] mb-1'>Natalie Kameron</p>
                                        <p className='md:text-[14px] text-[12px] font-[200] text-accent jose-font'>Ceo / Manger</p>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-[#353535] flex flex-col gap-4 p-6 relative client-card'>
                                <div className='qouteIcon absolute -top-[25px] right-[15px] text-[60px] text-[#333]'>
                                    <IoMdQuote />
                                </div>
                                <ul className='flex text-primary'>
                                    <li><AiFillStar /></li>
                                    <li><AiFillStar /></li>
                                    <li><AiFillStar /></li>
                                    <li><AiFillStar /></li>
                                    <li><AiFillStar /></li>
                                </ul>
                                <p className='text-[15px] font-[300] italic text-accent jose-font'>I love everything that put together for my living room! I just bought this house and only had a few items I wanted to keep. I’am able to help me visualize the room”</p>
                                <div className='flex items-center gap-3'>
                                    <img className='w-[60px] h-[60px] object-cover]' src={ceoPic1} alt="" />
                                    <div>
                                        <p className='md:text-[17px] text-[15px] mb-1'>Natalie Kameron</p>
                                        <p className='md:text-[14px] text-[12px] font-[200] text-accent jose-font'>Ceo / Manger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <SubFooter />
        </div>
    );
};

export default Architecture;