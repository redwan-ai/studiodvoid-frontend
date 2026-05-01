import React from 'react';
import banner from '../../Media/projectDetails-title-bg.jpg';
import NavBar from '../NavBar/NavBar';
import projectMainPic1 from '../../Media/project-1s.jpg';
import projectMainPic2 from '../../Media/project-2s.jpg';
import projectMainPic3 from '../../Media/project-3s.jpg';
import { Link } from 'react-router-dom';
import { BsCheck, BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import ProjectDetailPic1 from '../../Media/projectD-1.jpg';
import ProjectDetailPic2 from '../../Media/projectD-2.jpg';
import ProjectDetailPic3 from '../../Media/projectD-3.jpg';
import SubFooter from '../SubFooter/SubFooter';

const ProjectDetails = () => {
    return (
        <div>
            <NavBar />
            <div style={{ background: `url(${banner})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-96 xl:h-96 md:h-auto relative'>
                <div className='absolute w-full h-full bg-[#000] opacity-60 z-1'></div>

                <div className='flex justify-center items-center h-full z-10'>
                    <span>
                        <h1 className='text-center text-5xl font-[500] mb-4 text-white z-10 relative'>Interior Work</h1>
                    </span>
                </div>
            </div>

            {/* Project Details start  */}
            <div className='my-20 w-[75%] mx-auto'>
                <div style={{ background: `url(${projectMainPic1})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", objectFit: "cover" }} className='w-full h-[600px] flex justify-center items-center relative'>
                    <div className='bg-[#131313] p-12 flex flex-col gap-5 text-left text-secondary absolute bottom-[-150px] shadow-xl'>
                        <p className='text-xl font-[600]'>Project Details:</p>
                        <div className='grid grid-cols-2 gap-24'>
                            <div>
                                <p className='text-lg font-[500] mb-[2px]'>Project</p>
                                <p className='text-[14px] text-accent'>Outdoor Paint</p>
                            </div>
                            <div>
                                <p className='text-lg font-[500] mb-[2px]'>Clients</p>
                                <p className='text-[14px] text-accent'>Jimmy Divison</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-24'>
                            <div>
                                <p className='text-lg font-[500] mb-[2px]'>Location</p>
                                <p className='text-[14px] text-accent'>Miranda, USA</p>
                            </div>
                            <div>
                                <p className='text-lg font-[500] mb-[2px]'>Project Year</p>
                                <p className='text-[14px] text-accent'>2021</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center mt-4'>
                            <Link><BsFacebook /></Link>
                            <Link><AiOutlineInstagram /></Link>
                            <Link><AiFillLinkedin /></Link>
                            <Link><BsPinterest /></Link>
                            <Link><BsYoutube /></Link>
                        </div>
                    </div>
                </div>

                <div className='mt-[13rem] text-left'>
                    <div className='grid grid-cols-3 gap-8'>
                        <div className='col-span-2'>
                            <p className='text-2xl font-[500] mb-4 text-secondary'>Project Descripation</p>
                            <p className='text-[17px] font-[300] leading-relaxed jose-font text-accent'>Well we’re movin’ on up to the east side. To a deluxe apartment in the sky. The weather started getting rough – the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost. We’re gonna do it. On your mark get set and go now. Got a dream and we just know now we’re gonna make our dream come true. I have always wanted to have a neighbor just like you. I’ve always wanted to live in a neighborhood with you.</p>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-2xl font-[500] mb-4 text-secondary'>Project Information</p>
                            <p className='text-[17px] font-[300] leading-relaxed jose-font text-accent'>These men promptly escaped from a maximum security stockade to the Los Angeles underground. Love exciting and new. Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you. Well the first thing you know ol' Jeds a mil lionaire infolk said Jed move away.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-4 my-12'>
                        <img src={ProjectDetailPic1} alt="" />
                        <img src={ProjectDetailPic2} alt="" />
                        <img src={ProjectDetailPic3} alt="" />
                    </div>

                    <div>
                        <p className='text-2xl font-[500] mb-4 text-secondary'>Project Challenge</p>
                        <p className='text-[17px] font-[300] leading-relaxed jose-font text-accent'>It’s time to put on makeup. It’s time to dress up right. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It’s time to raise the curtain on the Muppet Show tonight. The mate was a mighty sailin’ man the Skipper brave and sure.</p>

                        <div className='my-8 grid grid-cols-2'>
                            <ul className='flex flex-col gap-2'>
                                <li className='flex items-center gap-2'><BsCheck className='text-[23px] text-primary' /> <p className='jose-font text-[16px] leading-relxaed text-accent font-[300]'>Five passengers set sail that day for a three </p></li>
                                <li className='flex items-center gap-2'><BsCheck className='text-[23px] text-primary' /> <p className='jose-font text-[16px] leading-relxaed text-accent font-[300]'>Family that’s the way we all became the brady</p> </li>
                                <li className='flex items-center gap-2'><BsCheck className='text-[23px] text-primary' /> <p className='jose-font text-[16px] leading-relxaed text-accent font-[300]'>Now were up in the big leagues getting’ turn</p> </li>
                            </ul>
                            <ul className='flex flex-col gap-2'>
                                <li className='flex items-center gap-2'><BsCheck className='text-[23px] text-primary' /> <p className='text-[16px] font-[300] leading-relaxed jose-font text-accent'>Till the one day when the lady met this fellow</p> </li>
                                <li className='flex items-center gap-2'><BsCheck className='text-[23px] text-primary' /> <p className='text-[16px] font-[300] leading-relaxed jose-font text-accent'>Champion the cause of the innocent career</p> </li>
                                <li className='flex items-center gap-2'><BsCheck className='text-[23px] text-primary' /> <p className='text-[16px] font-[300] leading-relaxed jose-font text-accent'>The powerless in a world of criminals operate</p> </li>
                            </ul>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <p className='text-2xl font-[500] mb-4 text-[#ddd]'>What We Did</p>
                        <p className='text-[17px] font-[300] leading-relaxed jose-font text-accent'>Then along come two they got nothin’ but their jeans. Texas tea. Knight Rider: A shadowy flight into the dangerous world of a man who does not exist. The first mate and his Skipper too will do their very best to make the tropic island nest.</p>
                    </div>

                    <div className='my-8'>
                        <p className='text-2xl font-[500] mb-4 text-[#ddd]'>Result</p>
                        <p className='text-[17px] font-[300] leading-relaxed jose-font text-accent'>That’s just a little bit more than the law will allow. We’re gonna do it. On your mark get set and go now. Got a dream and we just know now we’re gonna make our dream come true. Makin their way the only way they know how. That’s just a little bit more than the law will allow.</p>
                    </div>

                    <div>
                        <p className='text-2xl font-[500] my-6 text-[#ddd]'>Related Projects</p>
                        <div className='grid grid-cols-3 gap-6'>
                            <img src={projectMainPic1} alt="" />
                            <img src={projectMainPic2} alt="" />
                            <img src={projectMainPic3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <SubFooter />
        </div>
    );
};

export default ProjectDetails;