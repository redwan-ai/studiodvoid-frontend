import React from 'react';
import aboutImage from '../../Media/about-03.jpg';

const WhyUS = () => {
    return (
        <div className='relative'>
            <p className='absolute text-secondary rotate-90 right-[-10px] top-[40%] bottom-[60%] text-[15px]'>WHY US</p>
            <div className='grid grid-cols-3 w-5/6 mx-auto text-left mt-32 gap-8'>
                <div className='col-span-2 flex flex-col gap-20 my-20'>
                    <div className='text-secondary flex flex-col gap-4'>
                        <p className='uppercase text-[11px] tracking-[8px]'>why work with us</p>
                        <p className='text-[2.5rem] font-[700]'>We are specialists in the field of architecture</p>
                        <p className='text-[13px] w-[85%] leading-loose text-accent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utinslaboreetdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco cot laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className='grid grid-cols-2 gap-8'>
                        <div className='flex items-center gap-4 text-secondary'>
                            <div className='relative border border-secondary w-[55px] h-[55px] flex justify-center items-center'>
                                <div className='absolute w-[50%] h-[1px] bg-secondary top-[4px] left-[4px]'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary top-[17px] left-[-9px] rotate-90'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary bottom-[4px] right-[4px]'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary bottom-[17px] right-[-9px] rotate-90'></div>
                                <h1 className='text-secondary'>01</h1>
                            </div>
                            <p className='text-secondary'>PROFESSIONAL</p>
                        </div>
                        <div className='flex items-center gap-4 text-secondary'>
                            <div className='relative border border-secondary w-[55px] h-[55px] flex justify-center items-center'>
                                <div className='absolute w-[50%] h-[1px] bg-secondary top-[4px] left-[4px]'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary top-[17px] left-[-9px] rotate-90'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary bottom-[4px] right-[4px]'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary bottom-[17px] right-[-9px] rotate-90'></div>
                                <h1 className='text-secondary'>02</h1>
                            </div>
                            <p className='text-secondary'>ENTHUSIASM</p>
                        </div>
                        <div className='flex items-center gap-4 text-secondary'>
                            <div className='relative border border-secondary w-[55px] h-[55px] flex justify-center items-center'>
                                <div className='absolute w-[50%] h-[1px] bg-secondary top-[4px] left-[4px]'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary top-[17px] left-[-9px] rotate-90'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary bottom-[4px] right-[4px]'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary bottom-[17px] right-[-9px] rotate-90'></div>
                                <h1 className='text-secondary'>03</h1>
                            </div>
                            <p className='text-secondary'>PASSION</p>
                        </div>
                        <div className='flex items-center gap-4 text-secondary'>
                            <div className='relative border border-secondary w-[55px] h-[55px] flex justify-center items-center'>
                                <div className='absolute w-[50%] h-[1px] bg-secondary top-[4px] left-[4px]'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary top-[17px] left-[-9px] rotate-90'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary bottom-[4px] right-[4px]'></div>
                                <div className='absolute w-[50%] h-[1px] bg-secondary bottom-[17px] right-[-9px] rotate-90'></div>
                                <h1 className='text-secondary'>04</h1>
                            </div>
                            <p className='text-secondary'>24 / 7 SUPPORT</p>
                        </div>
                    </div>
                </div>
                <div style={{ background: `url(${aboutImage})`, backgroundPosition: "center", backgroundSize: "cover" }} className='col-span-1 relative flex flex-col justify-center items-center text-white w-full h-auto'>
                    <div className='w-full h-full opacity-20 bg-black absolute z-[-10]'></div>
                    <p className='text-[8rem] font-[700] -m-[32px]'>28</p>
                    <p className='tracking-[9px] text-[13px]'>YEARS OF EXPERIENCE</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUS;