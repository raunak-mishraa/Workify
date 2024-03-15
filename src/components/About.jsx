import React from 'react';
import AboutImg from '../assets/images/about.jpg';
function AboutUs() {
    return (
        <div className="font-poppins bg-gray-100 py-20 my-10 w-full">
            <div className="container flex justify-center items-center h-full w-full">
                {/* <div>hiu</div> */}
                <div className="md:max-w-4xl w-full m-auto bg-white p-8 rounded shadow-md">
                    <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                        <div className=" order-2 md:order-1">
                                 <h1 className="text-3xl font-semibold text-black text-opacity-80 mb-4">About Us</h1>
                                <p className="text-black text-opacity-70 leading-relaxed">
                                    At Workify, we believe in empowering freelancers to thrive without the burden of hefty commission fees. We understand the challenges that freelancers face in today's competitive market, which is why we've created a platform that puts the freelancer first.
                                </p>
                                <div className='mt-10 opacity-85'>
                                <div className='flex gap-4 mb-4'>
                                <div className='w-56 p-2 border border-solid border-gray-300 items-center flex gap-3 md:text-base text-sm font-bold rounded-md '>
                                <i className="ri-award-fill rounded-md w-8 h-8 flex items-center justify-center bg-gray-100"></i>
                                <h3 className='font-bold'>Quality Job</h3>
                                </div>
                                <div className='w-56 p-2 border border-solid border-gray-300 items-center flex gap-3 md:text-base text-sm font-bold rounded-md '>
                                <i className="ri-box-3-fill rounded-md flex items-center justify-center w-8 h-8 bg-gray-100"></i>
                                <h3 className='font-bold'>No Bid</h3>
                                </div>
                                </div>
                                <div className='flex gap-4'>
                                <div className='w-56 p-2 border border-solid border-gray-300 flex items-center gap-3 md:text-base text-sm font-bold rounded-md '>
                                <i className="ri-currency-fill w-8 h-8 rounded-md flex items-center justify-center bg-gray-100"></i>
                                <h3 className='font-bold'>No Extra Charge</h3>
                                </div>
                                <div  className='w-56 p-2 border border-solid border-gray-300 flex items-center gap-3 md:text-base text-sm font-bold rounded-md '>
                                <i className="ri-briefcase-4-fill rounded-md w-8 h-8 flex items-center justify-center bg-gray-100"></i>
                                <h3 className='font-bold'>International</h3>
                                </div>
                                </div>
                                </div>
                        </div>
                        <div className="font-poppins relative order-1 md:order-2 w-full">
                            <img src={AboutImg} alt="About Us Image" className="w-full h-full object-cover rounded" />
                            <div className='absolute border-2 -left-8 rounded-md shadow-lg top-2 z-20'>
                                <div className='flex gap-2 p-2 w-28 bg-white'>
                                    <div><i class="ri-shield-check-fill text-lg"></i></div>
                                    <div>
                                        <span className='block text-lg font-semibold'>100%</span>
                                        <span className='block'>Trusted </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutUs;
