import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import PageBanner from '../PageBanner/PageBanner';
import PlanningBanner from '../../Media/section-banner.jpg';
import galleryPic1 from '../../Media/gallery-1.jpg';
import galleryPic2 from '../../Media/gallery-2.jpg';
import galleryPic3 from '../../Media/gallery-3.jpg';
import galleryPic4 from '../../Media/gallery-4.jpg';
import galleryPic5 from '../../Media/gallery-5.jpg';
import galleryPic6 from '../../Media/gallery-6.jpg';
import galleryPic7 from '../../Media/gallery-7.jpg';
import galleryPic8 from '../../Media/gallery-8.jpg';
import galleryPic9 from '../../Media/gallery-9.jpg';
import ceoPic1 from '../../Media/ceo-01.jpg';
import deptPic1 from '../../Media/deptPic.png';
import ceoPic2 from '../../Media/ceo-02.jpg';
import { Link } from 'react-router-dom';
import { BsTelephonePlus } from 'react-icons/bs';
import { AiFillStar, AiOutlineMail } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { IoMdQuote } from 'react-icons/io';
import SubFooter from '../SubFooter/SubFooter';
import planningWorkUpPic1 from '../../Media/planning-1.jpg';
import planningWorkUpPic2 from '../../Media/planning-2.jpg';

const Planning = () => {
    const [mousein, setMousein] = useState(false);

    return (
        <div>
            <NavBar />
            <PageBanner banner={PlanningBanner} moto={"Planning"} subTitle={"About our Planning work up"} />
            <div className='2xl:w-5/6 w-[90%] mx-auto lg:my-16 my-28 mb-36'>
                <div className='grid xl:grid-cols-4 grid-cols-1 gap-12'>
                    <div className='xl:col-span-1 text-secondary flex flex-col gap-6 xl:order-1 order-2'>
                        <div className='text-left px-4 py-8 bg-[#333]'>
                            <p className='mb-4 md:text-xl text-[17px] border-b border-secondary pb-2 text-secondary'>More Services</p>
                            <div className='flex flex-col gap-4'>
                                <Link className='hover:bg-primary duration-300 hover:text-white bg-white p-3 text-black md:text-[15px] text-[13px]'>Architecture</Link>
                                <Link className='hover:bg-primary duration-300 hover:text-white bg-white p-3 text-black md:text-[15px] text-[13px]'>Interior Work</Link>
                                <Link className='hover:bg-primary duration-300 hover:text-white text-white bg-primary p-3 md:text-[15px] text-[13px]'>Planning</Link>
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
                                        <p className='text-[15px] text-someDeep'>info@abcmail.com</p>
                                    </div>
                                </div>
                                <div className='bg-white p-3 text-black flex items-center gap-4'>
                                    <div className='md:text-[24px] text-[20px]'>
                                        <ImLocation2 />
                                    </div>
                                    <div>
                                        <p className='md:text-[15px] text-[13px] font-[500] mb-[2px]'>Location</p>
                                        <p className='text-[15px] text-someDeep'>14/A, Miranda City, NYC</p>
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
                    <div className='xl:col-span-3 text-accent text-left flex flex-col gap-6 xl:order-2 order-1'>
                        <img src={deptPic1} alt="" />
                        <div className='flex flex-col gap-2 md:text-[17px] text-[15px] md:leading-relaxed leading-normal font-[300] text-accent'>
                            <p className='lg:text-3xl md:text-[25px] text-[22px] leading-normal font-[600] jose-font text-secondary jose-font'>Creative Solutions By Inoterior Professional Designers</p>
                            <p className='jose-font'>Since 1999, we have been providing great flooring solutions and customer service for homeowners and commercial clients. among flooring materials, none is more elegant and luxurious than natural stone. Give your consent, we design a perfect bend choose the style, we complete with our file.</p>
                            <p className='jose-font'>A wonderful serenity has taken  possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart and its very blessed.</p>
                        </div>
                        <div>
                            <p className='lg:text-3xl md:text-[25px] text-[22px] leading-normal font-[600] jose-font text-secondary jose-font'>Service Advantages</p>
                            <p className='md:text-[17px] text-[15px] md:leading-relaxed leading-normal font-[300] jose-font'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                        </div>

                        <div>
                            <p className='lg:text-3xl md:text-[25px] text-[22px] leading-normal font-[600] jose-font text-secondary jose-font'>Our Latest Project</p>
                            <p className='md:text-[17px] text-[15px] md:leading-relaxed leading-normal font-[300] jose-font'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 lg:my-12 mt-9 lg:mt-0'>
                                <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(6)} className='relative object-cover mb-2 overflow-hidden'>
                                    <img className={`${mousein === 6 && "scale-110"} duration-500 object-cover relative`} src={planningWorkUpPic1} alt="Pic" />
                                    {
                                        mousein === 6 && <span className='absolute bg-black opacity-70 w-full h-full bottom-0 duration-500'></span>
                                    }
                                    {
                                        mousein === 6 &&
                                        <div className='flex flex-col items-start justify-start h-full w-full absolute bottom-0 text-white'>
                                            <div className='m-6 border border-accent p-6 flex flex-col justify-between h-full items-start'>
                                                <div>
                                                    <p className='text-[23px] font-[500] mb-2 jose-font'>Modern Kitchen</p>
                                                    <p className='text-[17px] font-[300] jose-font'>The style of the interior was defined as modern in light colors. Main materials used in project are wallpaper etc.</p>
                                                </div>
                                                <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-10 hover:bg-primary hover:border-transparent hover:text-black'>Read More +</Link>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(1)} className='relative object-cover mb-2 overflow-hidden'>
                                    <img className={`${mousein === 1 && "scale-110"} duration-500 object-cover relative`} src={planningWorkUpPic2} alt="Pic" />
                                    {
                                        mousein === 1 && <span className='absolute bg-black opacity-70 w-full h-full bottom-0 duration-500'></span>
                                    }
                                    {
                                        mousein === 1 &&
                                        <div className='flex flex-col items-start justify-start h-full w-full absolute bottom-0 text-white'>
                                            <div className='m-6 border border-accent p-6 flex flex-col justify-between h-full items-start'>
                                                <div>
                                                    <p className='text-[23px] font-[500] mb-2 jose-font'>Interior Work</p>
                                                    <p className='text-[17px] font-[300] jose-font'>The entire interior is the beginning of the history of the house, such as colors, lighting, and materials.</p>
                                                </div>
                                                <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-10 hover:bg-primary hover:border-transparent hover:text-black'>Read More +</Link>
                                            </div>
                                        </div>
                                    }
                                </div>
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

export default Planning;