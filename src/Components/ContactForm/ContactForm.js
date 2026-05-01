import React from 'react';

const ContactForm = () => {
    return (
        <div className='relative'>
            <p className='absolute text-secondary rotate-90 right-[-40px] top-[50%] bottom-[50%] text-[15px] hidden lg:block'>CONTACTS US</p>
            <div className='lg:w-5/6 w-[87%] mx-auto'>
                <div>
                    <iframe className='w-full md:h-[400px] h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.07014452533!2d90.34947030121289!3d23.76457825856824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1682776155373!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 md:my-20 my-12 gap-8'>
                    <div className='lg:col-span-1 flex lg:flex-col lg:justify-center justify-between flex-wrap gap-6 text-left text-secondary'>
                        <div className=''>
                            <p className='md:text-[18px] text-[15px] font-[600] mb-[3px]'>ADDRESS:</p>
                            <p className='md:text-[14px] text-[11px] text-accent'>991 White St . Dawsonville GA 30534 , New York</p>
                        </div>
                        <div className=''>
                            <p className='md:text-[18px] text-[15px] font-[600] mb-[3px]'>PHONE NUMBER:</p>
                            <p className='md:text-[14px] text-[11px] text-accent'>+ (898) 784-7217</p>
                        </div>
                        <div className=''>
                            <p className='md:text-[18px] text-[15px] font-[600] mb-[3px]'>EMAIL:</p>
                            <p className='md:text-[14px] text-[11px] text-accent'>Tatee.architecture@gmail.com</p>
                        </div>
                    </div>
                    <div className='lg:col-span-2'>
                        <div>
                            <div className='grid md:grid-cols-2 grid-cols-1 items-start md:gap-10 gap-5'>
                                <div className='flex flex-col md:gap-8 gap-4'>
                                    <input placeholder='Full Name*' type="text" className='md:text-[15px] text-[12px] w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                                    <input placeholder='Email' type="email" className='md:text-[15px] text-[12px] w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                                    <input placeholder='Subject' type="text" className='md:text-[15px] text-[12px] w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                                </div>
                                <textarea rows='5' placeholder='Message' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black resize-none md:text-[15px] text-[12px]'></textarea>
                            </div>
                            <input className='md:text-[15px] text-[12px] md:mt-8 mt-4 w-full border-0 bg-primary text-white p-[1rem] rounded-none cursor-pointer btn hover:bg-primary' type="submit" value='SUBMIT NOW' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;