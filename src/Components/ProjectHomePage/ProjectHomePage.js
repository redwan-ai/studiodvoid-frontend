import React from 'react';
import projectPic1 from '../../Media/project-1.jpg';
import projectPic2 from '../../Media/project-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const ProjectHomePage = () => {
    return (
        <div className='relative'>
            <p className='absolute text-white rotate-90 right-[-48px] top-[40%] bottom-[60%] text-[15px]'>RECENT PROJECTS</p>
            <div className='w-5/6 my-10 mx-auto'>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide style={{ height: "500px", overflow: "hidden" }} className='relative text-left'>
                        <img className='relative w-full h-full object-cover' src={projectPic1} alt="" />
                        <div className='absolute w-full h-full top-0 bg-[#000] opacity-40 z-1'></div>
                        <h1 className='absolute bottom-10 text-3xl left-10 text-white font-[600] leading-normal jose-font'>AGA KHAN ACAMDEMY, <br /> BANGLADESH</h1>
                        <p className='absolute bottom-[50%] top-[50%] right-[-60px] text-[16px] text-white text-md rotate-90 jose-font'>Dhaka, Bashundara</p>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: "500px", overflow: "hidden" }} className='relative text-left'>
                        <img className='relative w-full h-full object-cover' src={projectPic2} alt="" />
                        <div className='absolute w-full h-full top-0 bg-[#000] opacity-40 z-1'></div>
                        <h1 className='absolute bottom-10 text-3xl left-10 text-white font-[600] leading-normal jose-font'>AGA KHAN ACAMDEMY, <br /> BANGLADESH</h1>
                        <p className='absolute bottom-[50%] top-[50%] right-[-60px] text-[16px] text-white text-md rotate-90 jose-font'>Dhaka, Bashundara</p>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: "500px", overflow: "hidden" }} className='relative text-left'>
                        <img className='relative w-full h-full object-cover' src={projectPic1} alt="" />
                        <div className='absolute w-full h-full top-0 bg-[#000] opacity-40 z-1'></div>
                        <h1 className='absolute bottom-10 text-3xl left-10 text-white font-[600] leading-normal jose-font'>AGA KHAN ACAMDEMY, <br /> BANGLADESH</h1>
                        <p className='absolute bottom-[50%] top-[50%] right-[-60px] text-[16px] text-white text-md rotate-90 jose-font'>Dhaka, Bashundara</p>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: "500px", overflow: "hidden" }} className='relative text-left'>
                        <img className='relative w-full h-full object-cover' src={projectPic2} alt="" />
                        <div className='absolute w-full h-full top-0 bg-[#000] opacity-40 z-1'></div>
                        <h1 className='absolute bottom-10 text-3xl left-10 text-white font-[600] leading-normal jose-font'>AGA KHAN ACAMDEMY, <br /> BANGLADESH</h1>
                        <p className='absolute bottom-[50%] top-[50%] right-[-60px] text-[16px] text-white text-md rotate-90 jose-font'>Dhaka, Bashundara</p>
                    </SwiperSlide>
                </Swiper>

                <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-10 hover:bg-primary hover:border-transparent hover:text-black'>See All Projects</Link>
            </div>
        </div>
    );
};

export default ProjectHomePage;
