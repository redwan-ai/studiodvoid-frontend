import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogPic from '../../Media/blog.jpg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillBookmarkStarFill, BsPencil } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';

const BlogsContainer = () => {
    const [mousein, setMousein] = useState(false);
    const cloudData = ["ANTIBIOTIC", "DISEASES", "DRUGSHEALTH", "CAREHEART", "DRUGSHEALTH", "DISEASES", "CAREHEART"];
    const othersServicesLink = ["Asthma and Allergy", "Cancer Services", "Cystic Fibrosis", "Endoscopy", "Colorectal", "Hemorrhoids"];
    return (
        <div className='w-5/6 mx-auto my-16'>
            <div className='grid grid-cols-3 gap-12'>
                <div className='col-span-2'>
                    <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(parseInt(1))} className='flex flex-col gap-8 bg-[#151515] mx-5 shadow-xl mb-8 text-left'>
                        <div className='relative overflow-hidden' >
                            <img className={`${mousein === parseInt(1) && "scale-110"} duration-500 `} src={blogPic} alt="" />
                            {mousein === parseInt(1) && <span className='absolute bg-black opacity-60 w-full h-full bottom-0 duration-500'></span>}
                        </div>
                        <div className='px-6 mb-10 flex flex-col gap-6'>
                            <Link to='/blogD' className='font-[600] text-3xl leading-relaxed text-secondary'>THE VILLA OVERLOOKS DRAMATIC MOUNTAINOUS SCENERY</Link>
                            <span className='flex justify-between items-center text-primary'>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><AiOutlineClockCircle /></span>
                                    <p className='text-accent'>12 - August - 2018</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsPencil /></span>
                                    <p className='text-accent'>Mehdi Hasan Price</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsFillBookmarkStarFill /></span>
                                    <p className='text-accent'>Something</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><FaRegComment /></span>
                                    <p className='text-accent'>00</p>
                                </span>
                            </span>
                            <p className='text-accent text-[15px]'>I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                        </div>
                    </div>
                    <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(parseInt(2))} className='flex flex-col gap-8 bg-[#151515] mx-5 shadow-xl mb-8 text-left'>
                        <div className='relative overflow-hidden' >
                            <img className={`${mousein === parseInt(2) && "scale-110"} duration-500 `} src={blogPic} alt="" />
                            {mousein === parseInt(2) && <span className='absolute bg-black opacity-60 w-full h-full bottom-0 duration-500'></span>}
                        </div>
                        <div className='px-6 mb-10 flex flex-col gap-6'>
                            <Link to='/blogD' className='font-[600] text-3xl leading-relaxed text-secondary'>THE VILLA OVERLOOKS DRAMATIC MOUNTAINOUS SCENERY</Link>
                            <span className='flex justify-between items-center text-primary'>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><AiOutlineClockCircle /></span>
                                    <p className='text-accent'>12 - August - 2018</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsPencil /></span>
                                    <p className='text-accent'>Mehdi Hasan Price</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsFillBookmarkStarFill /></span>
                                    <p className='text-accent'>Something</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><FaRegComment /></span>
                                    <p className='text-accent'>00</p>
                                </span>
                            </span>
                            <p className='text-accent text-[15px]'>I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                        </div>
                    </div>
                    <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(parseInt(3))} className='flex flex-col gap-8 bg-[#151515] mx-5 shadow-xl mb-8 text-left'>
                        <div className='relative overflow-hidden' >
                            <img className={`${mousein === parseInt(3) && "scale-110"} duration-500 `} src={blogPic} alt="" />
                            {mousein === parseInt(3) && <span className='absolute bg-black opacity-60 w-full h-full bottom-0 duration-500'></span>}
                        </div>
                        <div className='px-6 mb-10 flex flex-col gap-6'>
                            <Link to='/blogD' className='font-[600] text-3xl leading-relaxed text-secondary'>THE VILLA OVERLOOKS DRAMATIC MOUNTAINOUS SCENERY</Link>
                            <span className='flex justify-between items-center text-primary'>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><AiOutlineClockCircle /></span>
                                    <p className='text-accent'>12 - August - 2018</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsPencil /></span>
                                    <p className='text-accent'>Mehdi Hasan Price</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsFillBookmarkStarFill /></span>
                                    <p className='text-accent'>Something</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><FaRegComment /></span>
                                    <p className='text-accent'>00</p>
                                </span>
                            </span>
                            <p className='text-accent text-[15px]'>I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                        </div>
                    </div>
                    <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(parseInt(4))} className='flex flex-col gap-8 bg-[#151515] mx-5 shadow-xl mb-8 text-left'>
                        <div className='relative overflow-hidden' >
                            <img className={`${mousein === parseInt(4) && "scale-110"} duration-500 `} src={blogPic} alt="" />
                            {mousein === parseInt(4) && <span className='absolute bg-black opacity-60 w-full h-full bottom-0 duration-500'></span>}
                        </div>
                        <div className='px-6 mb-10 flex flex-col gap-6'>
                            <Link to='/blogD' className='font-[600] text-3xl leading-relaxed text-secondary'>THE VILLA OVERLOOKS DRAMATIC MOUNTAINOUS SCENERY</Link>
                            <span className='flex justify-between items-center text-primary'>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><AiOutlineClockCircle /></span>
                                    <p className='text-accent'>12 - August - 2018</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsPencil /></span>
                                    <p className='text-accent'>Mehdi Hasan Price</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><BsFillBookmarkStarFill /></span>
                                    <p className='text-accent'>Something</p>
                                </span>
                                <span className='flex items-center gap-2 font-medium text-sm'>
                                    <span><FaRegComment /></span>
                                    <p className='text-accent'>00</p>
                                </span>
                            </span>
                            <p className='text-accent text-[15px]'>I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8 text-left'>

                    <div className='flex flex-col gap-6'>
                        <h2 className='text-secondary text-2xl font-bold'>Recent Articles</h2>
                        <div className='flex items-center gap-4'>
                            <div className='h-20'>
                                <img className='h-full w-full object-cover' src={blogPic} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <Link className='text-secondary font-medium text-lg'>THE VILLA OVERLOOKS DRAMATIC MOUNTAINOUS SCENERY</Link>
                                <div className='flex items-center gap-6 text-accent'>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><AiOutlineClockCircle /></span>
                                        <p className='text-xs'>12 - August - 2018</p>
                                    </span>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><BsPencil /></span>
                                        <p className='text-xs'>Mehdi Hasan Price</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='h-20'>
                                <img className='h-full w-full object-cover' src={blogPic} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <Link className='text-secondary font-medium text-lg'>THE VILLA OVERLOOKS DRAMATIC MOUNTAINOUS SCENERY</Link>
                                <div className='flex items-center gap-6 text-accent'>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><AiOutlineClockCircle /></span>
                                        <p className='text-xs'>12 - August - 2018</p>
                                    </span>
                                    <span className='flex items-center gap-2 font-medium text-sm'>
                                        <span className='text-xs'><BsPencil /></span>
                                        <p className='text-xs'>Mehdi Hasan Price</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-secondary mb-4 text-2xl font-bold'>Tag Cloud</h2>

                        <div className='flex flex-wrap gap-2'>
                            {
                                cloudData.map(singleCloud => <Link className='bg-primary p-2 text-white text-xs'>{singleCloud}</Link>)
                            }
                        </div>
                    </div>

                    <div>
                        <h2 className='text-secondary mb-4 text-2xl font-bold'>Text Widgets</h2>

                        <p className='text-accent text-[15px]'>Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.</p>
                    </div>

                    <div className='text-primary flex flex-col'>
                        <h2 className='text-secondary mb-4 text-2xl font-bold'>Our Services</h2>

                        {
                            othersServicesLink.map(eachLink =>
                                <div className='border-b border-accent py-3 flex items-center gap-3'>
                                    <div className='w-[2px] h-full bg-primary'></div>
                                    <p className='hover:translate-x-1 cursor-pointer duration-300 font-medium'>{eachLink}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BlogsContainer;