import React from 'react';
import NavBar from '../NavBar/NavBar';
import InteriorBanner from '../../Media/section-banner.jpg';
import PageBanner from '../PageBanner/PageBanner';
import { AiFillStar, AiOutlineMail } from 'react-icons/ai';
import { IoMdCheckboxOutline, IoMdCheckmarkCircleOutline, IoMdQuote } from 'react-icons/io';
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
import { Link } from 'react-router-dom';
import { BsTelephonePlus } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import ceoPic1 from '../../Media/ceo-01.jpg';
import ceoPic2 from '../../Media/ceo-02.jpg';
import SubFooter from '../SubFooter/SubFooter';
import teamImage1 from '../../Media/team-img01.jpg';
import teamImage2 from '../../Media/team-img02.jpg';


const InteriorWork = () => {
    return (
        <div>
            <NavBar />
            <PageBanner banner={InteriorBanner} moto={"Interior Work"} subTitle={"About our Interior Work up"} />

            <div className='2xl:w-5/6 w-[90%] mx-auto lg:my-16 my-28 mb-36'>
                <div className='grid xl:grid-cols-4 grid-cols-1 gap-12'>
                    <div className='xl:col-span-1 text-white flex flex-col gap-6 xl:order-1 order-2'>
                        <div className='text-left px-4 py-8 bg-[#333]'>
                            <p className='mb-4 md:text-xl text-[17px] border-b border-secondary pb-2 text-secondary'>More Services</p>
                            <div className='flex flex-col gap-4'>
                                <Link className='hover:bg-primary duration-300 hover:text-white bg-white p-3 text-black md:text-[15px] text-[13px]'>Architecture</Link>
                                <Link className='hover:bg-primary duration-300 hover:text-white bg-primary p-3 md:text-[15px] text-[13px]'>Interior Work</Link>
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
                                        <p className='text-[14px] text-someDeep'>+123 456 7890</p>
                                    </div>
                                </div>
                                <div className='bg-white p-3 text-black flex items-center gap-4'>
                                    <div className='md:text-[24px] text-[20px]'>
                                        <AiOutlineMail />
                                    </div>
                                    <div>
                                        <p className='md:text-[15px] text-[13px] font-[500] mb-[2px]'>Email Address</p>
                                        <p className='md:text-[14px] text-[11px] text-someDeep'>info@abcmail.com</p>
                                    </div>
                                </div>
                                <div className='bg-white p-3 text-black flex items-center gap-4'>
                                    <div className='md:text-[24px] text-[20px]'>
                                        <ImLocation2 />
                                    </div>
                                    <div>
                                        <p className='md:text-[15px] text-[13px] font-[500] mb-[2px]'>Location</p>
                                        <p className='md:text-[14px] text-[11px] text-someDeep'>14/A, Miranda City, NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-left px-6 py-8 bg-[#333]'>
                            <p className='mb-4 md:text-xl text-[17px] border-b border-secondary pb-2 text-secondary'>Gallery</p>
                            <div className='grid grid-cols-3 gap-2'>
                                <img className='object-cover  w-full' src={galleryPic1} alt="" />
                                <img className='object-cover  w-full' src={galleryPic2} alt="" />
                                <img className='object-cover  w-full' src={galleryPic3} alt="" />
                                <img className='object-cover  w-full' src={galleryPic4} alt="" />
                                <img className='object-cover  w-full' src={galleryPic5} alt="" />
                                <img className='object-cover  w-full' src={galleryPic6} alt="" />
                                <img className='object-cover  w-full' src={galleryPic7} alt="" />
                                <img className='object-cover  w-full' src={galleryPic8} alt="" />
                                <img className='object-cover  w-full' src={galleryPic9} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='xl:col-span-3 text-left flex flex-col gap-8 xl:order-2 order-1'>
                        <img src={deptPic1} alt="" />
                        <div className='flex flex-col gap-2 md:text-[17px] text-[15px] md:leading-relaxed leading-normal font-[300] text-accent'>
                            <p className='lg:text-3xl md:text-[25px] text-[22px] leading-normal font-[500] text-secondary jose-font'>About Interior Services</p>
                            <p className='jose-font'>Since 1999, we have been providing great flooring solutions and customer service for homeowners and commercial clients. among flooring materials, none is more elegant and luxurious than natural stone. Give your consent, we design a perfect bend choose the style, we complete with our file.</p>
                            <p className='jose-font'>A wonderful serenity has taken  possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart and its very blessed.</p>
                        </div>

                        <div className='flex items-center mt-4 gap-12'>
                            <div className='flex flex-col gap-3 items-start basis-10/12 text-accent'>
                                <p className='lg:text-3xl md:text-[25px] text-[22px] font-[500] text-secondary jose-font'>Fully Trained Employees</p>
                                <p className='md:text-[17px] text-[15px] md:leading-relaxed leading-normal font-[300] jose-font'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuswqo doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo et inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. loream inventore veritatis et quasi architecto beatae vitae dicta sunt sed ut the perspiciatis unde omnis iste natus error sit majority have suffeed voluptatem injectd humour, or randomised ws which ly believable.</p>
                                <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-6 hover:bg-primary hover:border-transparent hover:text-black'>Read More</Link>
                            </div>
                            <div className='basis-auto lg:block hidden'>
                                <img src={teamImage1} alt="" />
                            </div>
                        </div>

                        <div className='flex items-center mt-4 gap-12'>
                            <div className='basis-auto lg:block hidden'>
                                <img src={teamImage2} alt="" />
                            </div>
                            <div className='flex flex-col gap-3 items-start basis-10/12 text-accent'>
                                <p className='lg:text-3xl md:text-[25px] text-[22px] font-[500] text-secondary jose-font'>Quality Maintain Every Time</p>
                                <p className='md:text-[17px] text-[15px] md:leading-relaxed leading-normal font-[300] jose-font'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuswqo doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo et inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. loream inventore veritatis et quasi architecto beatae vitae dicta sunt sed ut the perspiciatis unde omnis iste natus error sit majority have suffeed voluptatem injectd humour, or randomised ws which ly believable.</p>
                                <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-6 hover:bg-primary hover:border-transparent hover:text-black'>Read More</Link>
                            </div>
                        </div>

                        <p className='md:text-3xl text-[25px] leading-normal font-[500] mb-1 mt-8 jose-font text-secondary'>Words From Our Customers</p>

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
                                <p className='text-[14px] font-[300] italic text-accent'>I love everything that put together for my living room! I just bought this house and only had a few items I wanted to keep. I’am able to help me visualize the room”</p>
                                <div className='flex items-center gap-3'>
                                    <img className='w-[60px] h-[60px] object-cover]' src={ceoPic2} alt="" />
                                    <div>
                                        <p className='text-[17px] mb-1 text-secondary'>Natalie Kameron</p>
                                        <p className='text-[13px] font-[200] text-accent'>Ceo / Manger</p>
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
                                <p className='text-[14px] font-[300] italic text-accent'>I love everything that put together for my living room! I just bought this house and only had a few items I wanted to keep. I’am able to help me visualize the room”</p>
                                <div className='flex items-center gap-3'>
                                    <img className='w-[60px] h-[60px] object-cover]' src={ceoPic1} alt="" />
                                    <div>
                                        <p className='text-[17px] mb-1 text-secondary'>Natalie Kameron</p>
                                        <p className='text-[13px] font-[200] text-accent'>Ceo / Manger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <SubFooter />
        </div >
    );
};

export default InteriorWork;