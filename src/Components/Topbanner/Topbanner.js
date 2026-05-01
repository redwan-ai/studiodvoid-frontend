import React, { useState } from 'react';
import banner1 from '../../Media/banner-1.jpg';
import banner2 from '../../Media/banner-2.jpg';
import banner3 from '../../Media/banner-3.jpg';
import banner4 from '../../Media/banner-4.jpg';
import { Link } from 'react-router-dom';

const Topbanner = () => {
    const [controlNumber, setControlNumber] = useState("01");
    const positioningForBannerText = {
        left: "40%",
        top: "30%",
        transform: "translateX(-50%)",

    }
    const bannerMotoStyle = {
        color: "white",
        fontSize: "45px",
        fontWeight: "700",

    }
    return (
        <div>
            <div className="carousel w-full h-[100vh] relative">
                <div className="relative">
                    <img src={banner1} className="w-full object-cover relative" />
                    <div className='absolute w-full h-full bg-[#000] opacity-70 z-1'></div>
                    <div style={positioningForBannerText} className='absolute text-left'>
                        <p className='text-[12px] tracking-widest mb-2 text-white'>WE ARE STUDIO D' VOID</p>
                        <h1 className='leading-sung' style={bannerMotoStyle}>Architectural Consultancy & Interior Design</h1>
                        <p className='text-[13px] mt-6 w-5/6 text-white leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut . . .</p>

                        <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-10 hover:bg-primary hover:border-transparent hover:text-black'>Projects</Link>
                    </div>
                </div>
                <div id="item2" className="relative">
                    <img src={banner2} className="w-full object-cover relative" />
                    <div className='absolute w-full h-full bg-[#000] opacity-60 z-1'></div>
                    <div style={positioningForBannerText} className='absolute text-left'>
                        <p className='text-[12px] tracking-widest mb-2 text-white leading-loose'>WE ARE STUDIO D' VOID</p>
                        <h1 className='leading-sung' style={bannerMotoStyle}>Architectural Consultancy & Interior Design</h1>
                        <p className='text-[13px] mt-6 w-5/6 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut . . .</p>

                        <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-10 hover:bg-primary hover:border-transparent hover:text-black'>Projects</Link>
                    </div>
                </div>
                <div id="item3" className="relative">
                    <img src={banner3} className="w-full object-cover relative" />
                    <div className='absolute w-full h-full bg-[#000] opacity-60 z-1'></div>
                    <div style={positioningForBannerText} className='absolute text-left'>
                        <p className='text-[12px] tracking-widest mb-2 text-white'>WE ARE STUDIO D' VOID</p>
                        <h1 className='leading-sung' style={bannerMotoStyle}>Architectural Consultancy & Interior Design</h1>
                        <p className='text-[13px] mt-6 w-5/6 text-white leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut . . .</p>

                        <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-10 hover:bg-primary hover:border-transparent hover:text-black'>Projects</Link>
                    </div>
                </div>
                <div id="item4" className="relative">
                    <img src={banner4} className="w-full object-cover relative" />
                    <div className='absolute w-full h-full bg-[#000] opacity-60 z-1'></div>
                    <div style={positioningForBannerText} className='absolute text-left'>
                        <p className='text-[12px] tracking-widest mb-2 text-white'>WE ARE STUDIO D' VOID</p>
                        <h1 className='leading-sung' style={bannerMotoStyle}>Architectural Consultancy & Interior Design</h1>
                        <p className='text-[13px] mt-6 w-5/6 text-white leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut . . .</p>

                        <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-10 hover:bg-primary hover:border-transparent hover:text-black'>Projects</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full px-[10rem] absolute bottom-[30px]">
                <a onClick={() => setControlNumber("01")} href="#item1" className={`text-white text-[13px] ${controlNumber === "01" && "border-b border-white"} duration-300`}>01</a>
                <a onClick={() => setControlNumber("02")} href="#item2" className={`text-white text-[13px] ${controlNumber === "02" && "border-b border-white"} duration-300`}>02</a>
                <a onClick={() => setControlNumber("03")} href="#item3" className={`text-white text-[13px] ${controlNumber === "03" && "border-b border-white"} duration-300`}>03</a>
                <a onClick={() => setControlNumber("04")} href="#item4" className={`text-white text-[13px] ${controlNumber === "04" && "border-b border-white"} duration-300`}>04</a>
            </div>
        </div>
    );
};

export default Topbanner;