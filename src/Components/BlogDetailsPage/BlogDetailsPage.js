import React from 'react';
import NavBar from '../NavBar/NavBar';
import blogBanner from '../../Media/section-banner.jpg';
import PageBanner from '../PageBanner/PageBanner';
import { Link } from 'react-router-dom';
import { AiOutlineClockCircle } from 'react-icons/ai';
import blogPic from '../../Media/blog.jpg';
import { BsPencil } from 'react-icons/bs';
import blogDetailsPic1 from '../../Media/blog-details-1.jpg';
import SubFooter from '../SubFooter/SubFooter';



const BlogDetailsPage = () => {
    const cloudData = ["ANTIBIOTIC", "DISEASES", "DRUGSHEALTH", "CAREHEART", "DRUGSHEALTH", "DISEASES", "CAREHEART"];
    const othersServicesLink = ["Asthma and Allergy", "Cancer Services", "Cystic Fibrosis", "Endoscopy", "Colorectal", "Hemorrhoids"];
    const blogPointsOne = ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."];
    const blogPointsTwo = ["Impenetrable foliage of my trees, and but a few stray gleams.", "A wonderful serenity has taken possession of my entire soul.", "I should be incapable of drawing a single stroke at the present moment."];


    return (
        <div>
            <NavBar />
            <PageBanner banner={blogBanner} moto={"Single Blog"} subTitle={"Something will add with dynamically"} />

            {/* Main */}
            <div className='w-5/6 mx-auto mt-16'>
                <div className='grid grid-cols-3 gap-12'>
                    <div className='col-span-2 text-left'>
                        <div className='flex flex-col gap-5'>
                            <div className='px-6'>
                                <img src={blogDetailsPic1} alt="" />
                            </div>
                            <h1 className='mt-5 font-bold text-3xl text-secondary jose-font'>Blog heading that will add after finalize</h1>
                            <p className='text-accent leading-relaxed jose-font'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>

                            <span className='text-secondary'>
                                <strong>Read This</strong>: <Link className=''>New Law Article</Link>
                            </span>
                        </div>

                        <div className='mt-8 flex flex-col gap-6 border-b-2 border-accent pb-10'>
                            <div className='grid grid-cols-3 gap-4'>
                                <img src={blogDetailsPic1} alt="" />
                                <img src={blogDetailsPic1} alt="" />
                                <img src={blogDetailsPic1} alt="" />
                            </div>
                            <p className='text-accent leading-relaxed jose-font'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.</p>

                            <span className='text-accent pl-5 leading-loose'>
                                {
                                    blogPointsOne.map((eachPoint, index) =>
                                        <p className='jose-font'>{index + 1}. {eachPoint}</p>
                                    )
                                }
                            </span>

                            <p className='text-accent leading-relaxed jose-font'>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment and yet</p>

                            <div className='bg-[#272727] px-10 py-8 border-l-2 border-primary'>
                                <p className='text-accent leading-relaxed font-bold italic jose-font'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.</p>
                            </div>

                            <span className='text-accent pl-5 leading-loose'>
                                {
                                    blogPointsTwo.map((eachPoint, index) =>
                                        <p className='jose-font'>{index + 1}. {eachPoint}</p>
                                    )
                                }
                            </span>
                        </div>

                        <div className='my-12'>
                            <h1 className='text-primary text-2xl font-bold mb-8'>Leave a Reply</h1>

                            <form className='w-4/5 flex flex-col gap-4'>
                                <textarea rows='5' placeholder='Message' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black resize-none border'></textarea>
                                <div className='flex justify-between gap-4'>
                                    <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black border' />

                                    <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black border' />

                                    <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-[#F7F7F7] p-[1rem] text-black border' />
                                </div>
                                <input className='w-full border-0 bg-primary text-white p-[1rem] rounded-none cursor-pointer btn hover:bg-primary' type="submit" value='POST NOW' />
                            </form>
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
            <SubFooter />
        </div>
    );
};

export default BlogDetailsPage;