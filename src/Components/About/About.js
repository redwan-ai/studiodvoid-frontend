import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import aboutImage1 from '../../Media/about-img-1.jpg';
import service1 from '../../Media/service-01.png';
import service2 from '../../Media/service-02.png';
import service3 from '../../Media/service-03.png';
import client1 from '../../Media/client-01.png';
import client2 from '../../Media/client-02.png';
import client3 from '../../Media/client-03.png';
import client4 from '../../Media/client-04.png';
import client5 from '../../Media/client-05.png';
import client6 from '../../Media/client-06.png';
import client7 from '../../Media/client-07.png';
import client8 from '../../Media/client-08.png';
import bgPattern from '../../Media/bg-pattern-01.jpg'
import { Link } from 'react-router-dom';
import teamMembersPic1 from '../../Media/team-01.jpg';
import teamMembersPic3 from '../../Media/team-03.jpg';
import teamMembersPic4 from '../../Media/team-04.jpg';
import teamMembersPic5 from '../../Media/team-05.jpg';
import { BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import Footer from '../Footer/Footer';


const About = () => {
    const [mousein, setMousein] = useState(false);

    return (
        <div>
            <NavBar />
            <div className='lg:pt-44 md:pt-40 pt-28 text-left'>
                <div className='lg:w-5/6 w-[90%] mx-auto text-secondary'>
                    <p className='md:text-[12px] text-[10px] tracking-widest mb-2'>WE ARE STUDIO D' VOID</p>
                    <p className='xl:text-[42px] lg:text-[30px] md:text-[33px] text-[21px] md:font-[700] font-[600] lg:w-[95%] w-full'>Our bulding are inspired by the challenge of balancing function & beauty .</p>
                </div>

                <div className='w-[98%] mx-auto lg:mt-16 md:mt-10 mt-8 lg:mb-24 md:mb-20 mb-12'>
                    <img src={aboutImage1} alt="" />
                </div>

                <div className='grid md:gap-10 gap-6 lg:grid-cols-2 grid-cols-1 xl:w-5/6 w-[90%]  mx-auto'>
                    <div className='grid grid-cols-2 gap-6 text-secondary'>
                        <div>
                            <p className='lg:text-4xl md:text-[30px] text-[25px] md:mb-3 mb-1 font-bold'>18 +</p>
                            <p className='md:text-[12px] text-[10px] tracking-widest mb-2'>YEARS OF EXPERIENCE</p>
                        </div>
                        <div>
                            <p className='lg:text-4xl md:text-[30px] text-[25px] md:mb-3 mb-1 font-bold'>126 +</p>
                            <p className='md:text-[12px] text-[10px] tracking-widest mb-2'>HAPPY CLIENTS</p>
                        </div>
                        <div>
                            <p className='lg:text-4xl md:text-[30px] text-[25px] md:mb-3 mb-1 font-bold'>224 +</p>
                            <p className='md:text-[12px] text-[10px] tracking-widest mb-2'>COMPLETED PROJECTS</p>
                        </div>
                        <div>
                            <p className='lg:text-4xl md:text-[30px] text-[25px] md:mb-3 mb-1 font-bold'>16 +</p>
                            <p className='md:text-[12px] text-[10px] tracking-widest mb-2'>DESIGN ARWARDS</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:gap-4 gap-2 text-secondary'>
                        <p className='md:text-[15px] text-[13px] md:leading-loose leading-relaxed font-[300] md:font-[400]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem galax accusantium doloremque laudantium, totam rem aper ein iam sha eaque ipsa quae ab illo inventore veritatis et quasi architecto luniso beatae vitae dicta sunt explicabo.</p>
                        <p className='md:text-[15px] text-[13px] md:leading-loose leading-relaxed font-[300] md:font-[400]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione vshaun oluptatem sequi nesciunt.</p>
                    </div>
                </div>

                <div className='text-center w-5/6 mt-24 mx-auto'>
                    <p className='md:text-[12px] text-[10px] tracking-widest mb-2 text-secondary'>WHAT WE DO</p>
                    <h1 className='lg:text-5xl md:text-[42px] sm:text-[35px] text-[28px] font-bold text-secondary'>Our specilization</h1>
                    <div className='mt-10 gap-12 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'>
                        <div className='xl:py-40 py-12 px-8 flex flex-col gap-6 xl:border-l md:border-0 border-b pb-8 md:pb-0 border-[#272727]'>
                            <div className='flex justify-center my-[18px]'>
                                <img src={service1} alt="" />
                            </div>
                            <h1 className='text-xl font-[500] text-secondary'>ARCHITECTURE</h1>
                            <p className='text-[13px] font-[300] text-accent'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='xl:py-40 py-12 px-8 flex flex-col gap-6 xl:border-l md:border-0 border-b pb-8 md:pb-0 border-[#272727]'>
                            <div className='flex justify-center my-[18px]'>
                                <img src={service2} alt="" />
                            </div>
                            <h1 className='text-xl font-[500] text-secondary'>INTERIOR</h1>
                            <p className='text-[13px] font-[300] text-accent'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='xl:py-40 py-12 px-8 flex flex-col gap-6 xl:border-l xl:border-r border-[#272727]'>
                            <div className='flex justify-center my-[18px]'>
                                <img src={service3} alt="" />
                            </div>
                            <h1 className='text-xl font-[500] text-secondary'>PLANNING</h1>
                            <p className='text-[13px] font-[300] text-accent'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>

                <div style={{ background: `url(${bgPattern})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", objectFit: "cover" }} className='my-20'>
                    <div className='grid lg:grid-cols-4 grid-cols-1 mx-auto lg:w-5/6 w-full items-center'>
                        <div className='lg:col-span-1 text-center md:pt-[4rem] pt-[3rem]'>
                            <p className='lg:text-[12px] text-[9px] tracking-[4px] mb-2 text-secondary'>AWESOME PARTNER</p>
                            <p className='xl:text-[42px] lg:text-[35px] text-[30px] mt-2 text-secondary font-[600]'>Our Clients</p>
                        </div>
                        <div className="md:my-20 my-10 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-12 justify-items-center items-center lg:col-span-3 py-6">
                            <img src={client1} alt="" />
                            <img src={client2} alt="" />
                            <img src={client3} alt="" />
                            <img src={client4} alt="" />
                            <img src={client5} alt="" />
                            <img src={client6} alt="" />
                            <img src={client7} alt="" />
                            <img src={client8} alt="" />
                        </div>
                    </div>
                </div>

                <div className='w-[80%] mx-auto'>
                    <div className='col-span-1 text-center'>
                        <p className='lg:text-[12px] text-[9px] tracking-[4px] mb-2 text-secondary'>AWESOME PEOPLE</p>
                        <p className='xl:text-[42px] lg:text-[35px] text-[30px] mt-2 text-secondary font-[600]'>Meet the team</p>
                    </div>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 mt-16 md:mb-36 mb-24'>
                        <div className="card items-center">
                            <figure onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(1)} className='relative w-[250px] h-[250px] object-cover rounded-full mb-2'>
                                <img className={`${mousein === 1 && "scale-110"} duration-500 object-cover`} src={teamMembersPic1} alt="Pic" />
                                {mousein === 1 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                                {
                                    mousein === 1 &&
                                    <div className='flex gap-4 items-center mt-4 absolute text-white'>
                                        <Link><BsFacebook /></Link>
                                        <Link><AiOutlineInstagram /></Link>
                                        <Link><AiFillLinkedin /></Link>
                                    </div>
                                }
                            </figure>
                            <div className='text-center mt-5'>
                                <Link className='text-secondary text-xl font-[500] uppercase'>SONJA PORTER</Link>
                                <p className='text-accent text-[15px]'><small>Co-manage Associated</small></p>
                            </div>
                        </div>
                        <div className="card items-center">
                            <figure onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(2)} className='relative w-[250px] h-[250px] object-cover rounded-full mb-2'>
                                <img className={`${mousein === 2 && "scale-110"} duration-500 object-cover`} src={teamMembersPic3} alt="Pic" />
                                {mousein === 2 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                                {
                                    mousein === 2 &&
                                    <div className='flex gap-4 items-center mt-4 absolute text-white'>
                                        <Link><BsFacebook /></Link>
                                        <Link><AiOutlineInstagram /></Link>
                                        <Link><AiFillLinkedin /></Link>
                                    </div>
                                }
                            </figure>
                            <div className='text-center mt-5'>
                                <Link className='text-secondary text-xl font-[500] uppercase'>MARION LAWSON</Link>
                                <p className='text-accent text-[15px]'><small>Interior Desinger</small></p>
                            </div>
                        </div>
                        <div className="card items-center">
                            <figure onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(3)} className='relative w-[250px] h-[250px] object-cover rounded-full mb-2'>
                                <img className={`${mousein === 3 && "scale-110"} duration-500 object-cover`} src={teamMembersPic4} alt="Pic" />
                                {mousein === 3 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                                {
                                    mousein === 3 &&
                                    <div className='flex gap-4 items-center mt-4 absolute text-white'>
                                        <Link><BsFacebook /></Link>
                                        <Link><AiOutlineInstagram /></Link>
                                        <Link><AiFillLinkedin /></Link>
                                    </div>
                                }
                            </figure>
                            <div className='text-center mt-5'>
                                <Link className='text-secondary text-xl font-[500] uppercase'>Brad Green</Link>
                                <p className='text-accent text-[15px]'><small>CEO - Main Architect</small></p>
                            </div>
                        </div>
                        <div className="card items-center">
                            <figure onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(4)} className='relative w-[250px] h-[250px] object-cover rounded-full mb-2'>
                                <img className={`${mousein === 4 && "scale-110"} duration-500 object-cover`} src={teamMembersPic5} alt="Pic" />
                                {mousein === 4 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                                {
                                    mousein === 4 &&
                                    <div className='flex gap-4 items-center mt-4 absolute text-white'>
                                        <Link><BsFacebook /></Link>
                                        <Link><AiOutlineInstagram /></Link>
                                        <Link><AiFillLinkedin /></Link>
                                    </div>
                                }
                            </figure>
                            <div className='text-center mt-5'>
                                <Link className='text-secondary text-xl font-[500] uppercase'>KIM HARRINGTON</Link>
                                <p className='text-accent text-[15px]'><small>Architect - Photographer</small></p>
                            </div>
                        </div>
                        <div className="card items-center">
                            <figure onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(5)} className='relative w-[250px] h-[250px] object-cover rounded-full mb-2'>
                                <img className={`${mousein === 5 && "scale-110"} duration-500 object-cover`} src={teamMembersPic1} alt="Pic" />
                                {mousein === 5 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                                {
                                    mousein === 5 &&
                                    <div className='flex gap-4 items-center mt-4 absolute text-white'>
                                        <Link><BsFacebook /></Link>
                                        <Link><AiOutlineInstagram /></Link>
                                        <Link><AiFillLinkedin /></Link>
                                    </div>
                                }
                            </figure>
                            <div className='text-center mt-5'>
                                <Link className='text-secondary text-xl font-[500] uppercase'>TYRONE CURTIS</Link>
                                <p className='text-accent text-[15px]'><small>Architect - Designer</small></p>
                            </div>
                        </div>
                        <div className="card items-center">
                            <figure onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(6)} className='relative w-[250px] h-[250px] object-cover rounded-full mb-2'>
                                <img className={`${mousein === 6 && "scale-110"} duration-500 object-cover`} src={teamMembersPic3} alt="Pic" />
                                {mousein === 6 && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
                                {
                                    mousein === 6 &&
                                    <div className='flex gap-4 items-center mt-4 absolute text-white'>
                                        <Link><BsFacebook /></Link>
                                        <Link><AiOutlineInstagram /></Link>
                                        <Link><AiFillLinkedin /></Link>
                                    </div>
                                }
                            </figure>
                            <div className='text-center mt-5'>
                                <Link className='text-secondary text-xl font-[500] uppercase'>JODI RIVERA</Link>
                                <p className='text-accent text-[15px]'><small>Interior Designer</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default About;