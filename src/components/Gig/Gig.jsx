import React from 'react'
import Container from '../container/Container'
import Button from '../Button'
import Slide from '../Slider/Slide'
function Gig() {
  return (
    <section>
        <Container>
           <div className='flex w-full items-start gap-12'>
           <div className='basis-2/3'>
                <span className='uppercase font-medium opacity-65 text-sm'> Workify - Graphics & Design</span>
                <h2 className='text-xl font-bold font-Roboto py-2'>I will create ai generated art for you</h2>
                <div className='flex items-center gap-2 mb-2'>
                    <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-8 h-8 rounded-full object-cover'/>
                    <span className='text-sm font-medium'>Raunak mishra</span>
                    <div className='flex gap-1 items-center'>
                        <i className='ri-star-fill text-yellow-400'></i>
                        <i className='ri-star-fill text-yellow-400'></i>
                        <i className='ri-star-fill text-yellow-400'></i>
                        <i className='ri-star-fill text-yellow-400'></i>
                        <i className='ri-star-fill text-yellow-400'></i>
                        <span className='text-sm text-yellow-400 ml-1 font-medium'>5</span>
                    </div>
                </div>
               <Slide/>
                <h2 className='font-Roboto font-bold text-xl my-4'>About This Gig</h2>
                <p className='opacity-60 leading-6'>
                    I use an AI program to create images based on text prompts. This
                    means I can help you to create a vision you have through a textual
                    description of your scene without requiring any reference images.
                    Some things I've found it often excels at are: Character portraits
                    (E.g. a picture to go with your DnD character) Landscapes (E.g.
                    wallpapers, illustrations to compliment a story) Logos (E.g. Esports
                    team, business, profile picture) You can be as vague or as
                    descriptive as you want. Being more vague will allow the AI to be
                    more creative which can sometimes result in some amazing images. You
                    can also be incredibly precise if you have a clear image of what you
                    want in mind. All of the images I create are original and will be
                    found nowhere else. If you have any questions you're more than
                    welcome to send me a message.
                </p>
                {/* {freelancer} */}
                <div className=' mt-12'>
                    <h2 className='font-Roboto font-bold text-xl my-2'>About The Freelancer</h2>
                    <div className="flex items-center gap-3">
                        <img
                            src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                            className='w-20 h-20 rounded-full object-cover'
                        />
                        <div className="flex flex-col gap-1 justify-center">
                            <span className='font-medium text-sm'>Anna Bell</span>
                            <div>
                            <i className='ri-star-fill text-sm text-yellow-400'></i>
                            <i className='ri-star-fill text-sm text-yellow-400'></i>
                            <i className='ri-star-fill text-sm text-yellow-400'></i>
                            <i className='ri-star-fill text-sm text-yellow-400'></i>
                            <i className='ri-star-fill text-sm text-yellow-400'></i>
                            <span className='text-sm text-yellow-400 ml-1 font-semibold'>5</span>
                            </div>
                            <Button className='p-1 border-2 text-sm text-black text-opacity-75 font-medium'>Contact Me</Button>
                        </div>
                    </div>
                    <div className="border-2 p-5 mt-5 rounded-sm">
                        <div className="flex  font-Roboto justify-between flex-wrap">
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">From</span>
                            <span className="font-medium">USA</span>
                            </div>
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">Member since</span>
                            <span className="font-medium">Aug 2022</span>
                            </div>
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">Avg. response time</span>
                            <span className="font-medium">4 hours</span>
                            </div>
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">Last delivery</span>
                            <span className="font-medium">1 day</span>
                            </div>
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">Languages</span>
                            <span className="desc">English</span>
                            </div>
                        </div>
                            <hr className='h-0.5 bg-gray-200 my-4'/>
                            <p className='opacity-60 leading-6'>
                                My name is Anna, I enjoy creating AI generated art in my spare
                                time. I have a lot of experience using the AI program and that
                                means I know what to prompt the AI with to get a great and
                                incredibly detailed result.
                            </p>
                        </div>
                </div>
                {/* review starts here */}
                <div className='my-4'>
                        <h2 className='font-medium text-lg'>Reviews</h2>
                        <div className='my-4  space-y-2'>
                            <div className="flex gap-2 items-center">
                                <img
                                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className='w-12 h-12 rounded-full object-cover'
                                    />
                                    <div className="font-Roboto">
                                        <span className='text-sm opacity-90  leading-3 font-semibold'>Garner David</span>
                                        <div className="flex gap-1">
                                            <img
                                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                            alt=""
                                            className='w-4 h-4 object-cover'
                                            />
                                            <span className='text-sm opacity-75'>United States</span>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <span className='text-yellow-400 ml-1 text-sm'>5</span>
                            </div>
                            <p className='opacity-60 leading-6'>
                                Amazing work! Communication was
                                amazing, each and every day he sent me images that I was free to
                                request changes to. They listened, understood, and delivered
                                above and beyond my expectations. I absolutely recommend this
                                gig, and know already that Ill be using it again very very soon
                            </p>
                            <div className="space-x-2 font-Roboto">
                                <span className='text-sm font-medium'>Helpful?</span>
                                <i className="ri-thumb-up-line"></i>
                                <span className='text-sm font-medium'>Yes</span>
                                <i className="ri-thumb-down-line"></i>
                                <span className='text-sm font-medium'>No</span>
                            </div>
                        </div>
                        <hr className='border my-10'/>
                        <div className='my-4  space-y-2'>
                            <div className="flex gap-2 items-center">
                                <img
                                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className='w-12 h-12 rounded-full object-cover'
                                    />
                                    <div className="font-Roboto">
                                        <span className='text-sm opacity-90  leading-3 font-semibold'>Garner David</span>
                                        <div className="flex gap-1">
                                            <img
                                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                            alt=""
                                            className='w-4 h-4 object-cover'
                                            />
                                            <span className='text-sm opacity-75'>United States</span>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <i className='ri-star-fill text-sm text-yellow-400'></i>
                                <span className='text-yellow-400 ml-1 text-sm'>5</span>
                            </div>
                            <p className='opacity-60 leading-6'>
                                Amazing work! Communication was
                                amazing, each and every day he sent me images that I was free to
                                request changes to. They listened, understood, and delivered
                                above and beyond my expectations. I absolutely recommend this
                                gig, and know already that Ill be using it again very very soon
                            </p>
                            <div className="space-x-2 font-Roboto">
                                <span className='text-sm font-medium'>Helpful?</span>
                                <i className="ri-thumb-up-line"></i>
                                <span className='text-sm font-medium'>Yes</span>
                                <i className="ri-thumb-down-line"></i>
                                <span className='text-sm font-medium'>No</span>
                            </div>
                        </div>
                </div>
            </div>
                <div className='basis-1/3 border-2 p-5 rounded-sm h-auto sticky top-20 w-full'>
                <div className="font-Roboto flex justify-between items-center">
                    <h3 className='font-medium'>1 AI generated image</h3>
                    <h2 className='font-light'>$ 59.99</h2>
                </div>
                <p className='opacity-60 leading-6 text-sm my-4 font-Roboto'>
                    I will create a unique high quality AI generated image based on a
                    description that you give me
                </p>
                    <div className="font-Roboto flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                        <i className="ri-time-line text-xl"></i>
                        <span className='text-sm font-medium'>2 Days Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                        <i className="ri-loop-left-line text-xl"></i>
                        <span className='text-sm font-medium'>3 Revisions</span>
                        </div>
                    </div>
                    <div className="my-3">
                        <div className="font-Roboto flex items-center gap-2 font-medium mb-1 text-black text-opacity-70">
                        <i className="ri-check-line text-sm text-blue-500"></i>
                        <span className='text-sm'>Prompt writing</span>
                        </div>
                        <div className="font-Roboto flex items-center gap-2 font-medium mb-1 text-black text-opacity-70">
                        <i className="ri-check-line text-sm text-blue-500"></i>
                        <span className='text-sm'>Artwork delivery</span>
                        </div>
                        <div className="font-Roboto flex items-center gap-2 font-medium mb-1 text-black text-opacity-70">
                        <i className="ri-check-line text-sm text-blue-500"></i>
                        <span className='text-sm'>Image upscaling</span>
                        </div>
                        <div className="font-Roboto flex items-center gap-2 font-medium mb-1 text-black text-opacity-70">
                        <i className="ri-check-line text-sm text-blue-500"></i>
                        <span className='text-sm'>Additional design</span>
                        </div>
                       
                    </div>
                    <Button className='font-Roboto bg-blue-500 w-full text-white p-2 font-medium text-base cursor-pointer'>Continue</Button>
                </div>
           </div>
        </Container>
    </section>
  )
}

export default Gig