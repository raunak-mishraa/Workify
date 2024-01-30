import React from 'react'
import Container from '../container/Container'
import  landingImg  from '../../assets/images/landingImg.png'
import goalImg from '../../assets/images/goal.gif'
import { whyImg, noCash } from '..'
import { useId } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Categories from './Categories'
import { motion } from "framer-motion"
function Home() {
  const id = useId()
  const navigate = useNavigate()
  return (
    <>
    <section className='font-assistant bg-gradient-to-r from-slate-50 via-sky-5   00 to-indigo-50 bg-blue-100'>
      <Container>
        <div className='flex flex-wrap justify-center items-center py-10 xl:py-0'>
            <div className='px-4 text-center md:text-left md:pl-10 w-full md:w-1/2'>
              <h1 className='text-3xl xl:text-5xl font-thin'><span className='font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'>Freelance</span> your way</h1>

              <h1 className='opacity-85  text-3xl xl:text-5xl justify-center md:justify-normal my-2 flex items-center gap-2'>
                <span><img className='w-10' src={goalImg} alt="" /></span>to success,</h1>

                <h1 className='text-3xl opacity-85 xl:text-5xl font-thin'>without the <span className='font-bold'>Fees</span></h1>
                <div className='mt-4 font-light '>
                  <p className='leading-7'>Freelance Without Limits: Find Work, Connect with </p>
                  <p className='leading-7'>Clients, and Build Your Business</p>
                </div>
                <div className='hover:shadow-md duration-300 ease-linear flex items-center justify-between bg-white md:mt-8 mt-14 py-2 md:px-4 rounded-3xl'>
                  <div className='flex'>
                    <label className='rounded-full w-10 h-10 flex items-center justify-center py-2 bg-slate-100 cursor-pointer' htmlFor={id}>
                    <i className="text-cyan-500 ri-search-line"></i>
                    </label>
                    <input type="text" 
                    id={id}
                    className='ml-4 text-xs outline-none bg-transparent'
                    placeholder='Job title or keyword'/>
                  </div>
                  <div>
                    <Button className='text-xs md:text-sm text-white  bg-gradient-to-r from-cyan-500 to-blue-400 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-500 py-3 px-4 rounded-xl'>
                      Find Work
                    </Button>
                  </div>
                </div>
            </div>
          <div className='hidden md:block w-1/2'>
          <img className='' src={landingImg} alt="" /> 
          </div>
        </div>
      </Container>
    </section>
    {/* <section className='py-10 sm:py-20 font-[assistant]'>
      <Container>
        <div>
          <h2 className='block text-2xl opacity-90 md:text-3xl font-bold'>Browse Categories</h2>
          <div className='mt-5 text-base grid sm:grid-cols-2 gap-5 md:grid-cols-3 sm:flex-row md:gap-7'>
            <Link to='' className='opacity-90 p-6 py-10 rounded-lg bg-slate-50 shadow-md flex flex-col gap-3 hover:bg-slate-200 duration-200 ease-in'>
              <h4 className='font-medium tracking-wider'><i className="mr-2 ri-code-s-slash-line"></i>Development & IT</h4>
              <div className='flex justify-between'>
                <div><i className="text-blue-700 ri-star-fill mr-2"></i>4.85/5</div>
                <div>130 Skills</div>
              </div>
            </Link>
            <Link to='' className='opacity-90 p-6 py-10 rounded-lg bg-slate-50 shadow-md flex flex-col gap-3 hover:bg-slate-200 duration-200 ease-in'>
              <h4 className='font-medium tracking-wider'><i className="mr-2 ri-palette-line"></i>Graphics & Design</h4>
              <div className='flex justify-between'>
                <div><i className="text-blue-700 ri-star-fill mr-2"></i>4.85/5</div>
                <div>130 Skills</div>
              </div>
            </Link>
            <Link to='' className='opacity-90 p-6 py-10 rounded-lg bg-slate-50 shadow-md flex flex-col gap-3 hover:bg-slate-200 duration-200 ease-in'>
              <h4 className='font-medium tracking-wider'><i className="mr-2 ri-computer-line"></i>Digital Marketing</h4>
              <div className='flex justify-between'>
                <div><i className="text-blue-700 ri-star-fill mr-2"></i>4.85/5</div>
                <div>130 Skills</div>
              </div>
            </Link>
            <Link to='' className='opacity-90 p-6 py-10 rounded-lg bg-slate-50 shadow-md flex flex-col gap-3 hover:bg-slate-200 duration-200 ease-in'>
              <h4 className='font-medium tracking-wider'><i className="mr-2 ri-edit-2-line"></i>Writing & Translation</h4>
              <div className='flex justify-between'>
                <div><i className="text-blue-700 ri-star-fill mr-2"></i>4.85/5</div>
                <div>130 Skills</div>
              </div>
            </Link>
            <Link to='' className='opacity-90 p-6 py-10 rounded-lg bg-slate-50 shadow-md flex flex-col gap-3 hover:bg-slate-200 duration-200 ease-in'>
              <h4 className='font-medium tracking-wider'><i className="mr-2 ri-movie-line"></i>Video & Animation</h4>
              <div className='flex justify-between'>
                <div><i className="text-blue-700 ri-star-fill mr-2"></i>4.85/5</div>
                <div>130 Skills</div>
              </div>
            </Link>
            <Link to='' className='opacity-90 p-6 py-10 rounded-lg bg-slate-50 shadow-md flex flex-col gap-3 hover:bg-slate-200 duration-200 ease-in'>
              <h4 className='font-medium tracking-wider'><i className="mr-2 ri-music-2-fill"></i>Music & Audio</h4>
              <div className='flex justify-between'>
                <div><i className="text-blue-700 ri-star-fill mr-2"></i>4.85/5</div>
                <div>130 Skills</div>
              </div>
            </Link>
            
          </div>
        </div>
      </Container>  
    </section> */}
    <Categories/>
    <section className='py-10 sm:py-20'>
      <Container>
        <div className='block sm:flex flex-wrap justify-around w-full'>
            <div className='sm:w-1/2 flex justify-center'>
              <img className='w-[90%] object-cover' src={whyImg} alt="" />
            </div>
            <div className='mt-10 sm:mt-0 sm:w-1/2 flex flex-col justify-center'>
              <div>
                <h2 className='font-bold text-2xl opacity-90 md:text-3xl'>Why We are Better</h2>
                <p className='my-4 opacity-80'>Tired of the freelance rat race? We offer a refreshing alternative! Unlike traditional platforms, we empower new freelancers with curated projects, personalized mentorship, and a supportive community—all commission-free. Join us and launch your freelance journey with confidence!</p>
                <div className='mt-10 opacity-85'>
                  <div className='flex gap-4 mb-4'>
                  <motion.div drag className='w-56 p-4 border border-solid border-gray-300 flex gap-3 text-base font-bold rounded-md '>
                  <i className="ri-award-fill rounded-md w-8 h-8 flex items-center justify-center bg-gray-200"></i>
                  <h3 className='font-bold'>Quality Job</h3>
                  </motion.div>
                  <motion.div drag className='w-56 p-4 border border-solid border-gray-300 flex gap-3 text-base font-bold rounded-md '>
                  <i className="ri-box-3-fill rounded-md flex items-center justify-center w-8 h-8 bg-gray-200"></i>
                  <h3 className='font-bold'>No Bid</h3>
                  </motion.div>
                  </div>
                  <div className='flex gap-4'>
                  <motion.div drag  className='w-56 p-4 border border-solid border-gray-300 flex gap-3 text-base font-bold rounded-md '>
                  <i className="ri-currency-fill w-8 h-8 rounded-md flex items-center justify-center bg-gray-200"></i>
                  <h3 className='font-bold'>No Extra Charge</h3>
                  </motion.div>
                  <motion.div drag  className='w-56 p-4 border border-solid border-gray-300 flex gap-3 text-base font-bold rounded-md '>
                  <i className="ri-briefcase-4-fill rounded-md w-8 h-8 flex items-center justify-center bg-gray-200"></i>
                  <h3 className='font-bold'>International</h3>
                  </motion.div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Home