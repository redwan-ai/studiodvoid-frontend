import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import client1 from '../../Media/client-01.png';
import client2 from '../../Media/client-02.png';
import client3 from '../../Media/client-03.png';
import client4 from '../../Media/client-04.png';
import client5 from '../../Media/client-05.png';
import client6 from '../../Media/client-06.png';
import client7 from '../../Media/client-07.png';
import client8 from '../../Media/client-08.png';
import clientPic from '../../Media/clients-pic.jpg';
import testimonials from '../../Media/testimonials.jpg';

const Testimonials = () => {


    return (
        <div style={{ background: `url(${testimonials})`, backgroundPosition: "center", backgroundSize: "cover" }} className="py-4 my-28 relative">
            <p className='absolute text-white rotate-90 right-[-27px] top-[50%] bottom-[60%] text-[15px]'>TESTIMONIALS</p>
            <div className="w-5/6 mx-auto my-24">
                <div className="my-20 grid grid-cols-4 gap-12 justify-items-center items-center">
                    <img src={client1} alt="" />
                    <img src={client2} alt="" />
                    <img src={client3} alt="" />
                    <img src={client4} alt="" />
                    <img src={client5} alt="" />
                    <img src={client6} alt="" />
                    <img src={client7} alt="" />
                    <img src={client8} alt="" />
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        type: "fraction",
                    }}
                    // navigation={true}
                    className="mySwiper"
                >
                    <SwiperSlide className="my-[60px]">
                        <div className="flex flex-col gap-8 bg-white p-16 text-[#525252] relative">
                            <p className="text-[13px] leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div>
                                <p className="text-[18px] mb-2 uppercase text-black font-bold">Jack Hopkins</p>
                                <p className="text-[11px]">Bitbucket CEO</p>
                            </div>
                            <div className="flex justify-center">
                                <img className="w-[100px] h-[100px] object-cover rounded-full bottom-[-50px] absolute border border-[4px] border-[#101010]" src={clientPic} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="my-[60px]">
                        <div className="flex flex-col gap-8 bg-white p-16 text-[#525252] relative">
                            <p className="text-[13px] leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div>
                                <p className="text-[18px] mb-2 uppercase text-black font-bold">Jack Hopkins</p>
                                <p className="text-[11px]">Bitbucket CEO</p>
                            </div>
                            <div className="flex justify-center">
                                <img className="w-[100px] h-[100px] object-cover rounded-full bottom-[-50px] absolute border border-[4px] border-[#101010]" src={clientPic} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="my-[60px]">
                        <div className="flex flex-col gap-8 bg-white p-16 text-[#525252] relative">
                            <p className="text-[13px] leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div>
                                <p className="text-[18px] mb-2 uppercase text-black font-bold">Jack Hopkins</p>
                                <p className="text-[11px]">Bitbucket CEO</p>
                            </div>
                            <div className="flex justify-center">
                                <img className="w-[100px] h-[100px] object-cover rounded-full bottom-[-50px] absolute border border-[4px] border-[#101010]" src={clientPic} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="my-[60px]">
                        <div className="flex flex-col gap-8 bg-white p-16 text-[#525252] relative">
                            <p className="text-[13px] leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div>
                                <p className="text-[18px] mb-2 uppercase text-black font-bold">Jack Hopkins</p>
                                <p className="text-[11px]">Bitbucket CEO</p>
                            </div>
                            <div className="flex justify-center">
                                <img className="w-[100px] h-[100px] object-cover rounded-full bottom-[-50px] absolute border border-[4px] border-[#101010]" src={clientPic} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="my-[60px]">
                        <div className="flex flex-col gap-8 bg-white p-16 text-[#525252] relative">
                            <p className="text-[13px] leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div>
                                <p className="text-[18px] mb-2 uppercase text-black font-bold">Jack Hopkins</p>
                                <p className="text-[11px]">Bitbucket CEO</p>
                            </div>
                            <div className="flex justify-center">
                                <img className="w-[100px] h-[100px] object-cover rounded-full bottom-[-50px] absolute border border-[4px] border-[#101010]" src={clientPic} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;