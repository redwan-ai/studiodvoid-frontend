import React from 'react';
import projectImage1 from '../../Media/project-1.jpg';
import projectImage2 from '../../Media/post-01.jpg';
import projectImage3 from '../../Media/post-02.jpg';
import projectImage4 from '../../Media/post-03.jpg';
import projectImage5 from '../../Media/post-04.jpg';
import { Link } from 'react-router-dom';
import { BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import SubFooter from '../SubFooter/SubFooter';
import NavBar from '../NavBar/NavBar';

const ProjectDetailsMain = () => {
    return (
        <div>
            <NavBar />
            <div className='lg:w-[75%] md:w-[90%] w-[95%] mx-auto pt-[10rem] text-left flex flex-col md:gap-10 gap-6'>
                <h1 className='lg:text-[55px] md:text-[45px] sm:text-[35px] text-[25px] font-[800] text-secondary'>Creative Studio 8</h1>
                <div className='grid lg:grid-cols-5 grid-cols-1 md:gap-8 gap-4 items-center'>
                    <div className='lg:col-span-2 bg-[#131313] md:p-12 p-8 flex flex-col gap-5 text-left text-accent shadow-xl'>
                        <p className='md:text-xl text-[16px] font-[600]'>Project Details:</p>
                        <div className='grid grid-cols-2 gap-24'>
                            <div>
                                <p className='md:text-xl text-[16px] font-[500] mb-[2px]'>Project</p>
                                <p className='text-[14px] text-accent'>Outdoor Paint</p>
                            </div>
                            <div>
                                <p className='md:text-xl text-[16px] font-[500] mb-[2px]'>Clients</p>
                                <p className='text-[14px] text-accent'>Jimmy Divison</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-24'>
                            <div>
                                <p className='md:text-xl text-[16px] font-[500] mb-[2px]'>Location</p>
                                <p className='text-[14px] text-accent'>Miranda, USA</p>
                            </div>
                            <div>
                                <p className='md:text-xl text-[16px] font-[500] mb-[2px]'>Project Year</p>
                                <p className='text-[14px] text-accent'>2021</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:text-[14px] text-[12px] font-[300] leading-loose jose-font text-accent'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className='md:mt-4 mt-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
                        <div className='flex gap-4 items-center mt-4 text-[16px]'>
                            <Link><BsFacebook /></Link>
                            <Link><AiOutlineInstagram /></Link>
                            <Link><AiFillLinkedin /></Link>
                            <Link><BsPinterest /></Link>
                            <Link><BsYoutube /></Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:gap-10 md:gap-6 gap-4 mb-24'>
                    <img className='2xl:h-[800px] w-full object-cover' src={projectImage1} alt="" />
                    <img className='2xl:h-[800px] w-full object-cover' src={projectImage2} alt="" />
                    <img className='2xl:h-[800px] w-full object-cover' src={projectImage3} alt="" />
                    <img className='2xl:h-[800px] w-full object-cover' src={projectImage4} alt="" />
                    <img className='2xl:h-[800px] w-full object-cover' src={projectImage5} alt="" />
                </div>
            </div>
            <SubFooter />
        </div>
    );
};

export default ProjectDetailsMain;