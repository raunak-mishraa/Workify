import React, { useState } from 'react'
import Container from '../container/Container'
import  landingImg  from '../../assets/images/landingImg.png'
import goalImg from '../../assets/images/goal.gif'
import { Input, whyImg } from '..'
import { useId } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Categories from './Categories'
// import axios from 'axios'
import { searchClientPosts } from '../../../store/searchSlice'
import { useDispatch } from 'react-redux'
import useSearch from '../../hooks/useSearch'
function Home() {
  const id = useId()
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()
  let searchData = useSearch(searchValue)
  const search = () => {

    if(searchData){
      dispatch(searchClientPosts(searchData))
      navigate('/search')
    }
    else{
      dispatch(searchClientPosts([]))
      navigate('/search')
    }

    // console.log(searchData)
    // const options = Object.keys(currencyInfo)
  }
  return (
    <>
    <section className='font-assistant bg-gradient-to-r from-slate-50 via-sky-50 to-indigo-50 bg-blue-100'>
      <Container>
        <div className='flex flex-wrap justify-center items-center py-10 xl:py-0'>
            <div className='px-4 text-center md:text-left md:pl-10 w-full md:w-1/2'>
              <h1 className='font-poppins text-3xl xl:text-5xl font-thin'><span className='font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'>Freelance</span> your way</h1>

              <h1 className='opacity-85 font-poppins text-3xl xl:text-5xl justify-center md:justify-normal my-2 flex items-center gap-2'>
                <span className='font-poppins'><img className='w-10' src={goalImg} alt="" /></span>to success,</h1>

                <h1 className='text-3xl opacity-85 xl:text-5xl font-poppins font-thin'>without the <span className='font-bold'>Fees</span></h1>
                <div className='mt-4 font-light '>
                  <p className='leading-7 font-poppins tracking-wide'>Freelance Without Limits: Find Work, Connect with </p>
                  <p className='leading-7 font-poppins  tracking-wide'>Clients, and Build Your Business</p>
                </div>
                <div className='hover:shadow-md duration-300 ease-linear flex items-center justify-between bg-white md:mt-8 mt-14 py-2 md:px-4 px-2 rounded-md md:rounded-3xl'>
                <div className='flex flex-1'>
                  <label className='rounded-full w-10 h-10 flex items-center justify-center bg-slate-100 cursor-pointer' htmlFor={id}>
                      <i className="text-cyan-500 ri-search-line"></i>
                  </label>
                  {/* <Input className="w-full"/> */}
                  {/* <input 
                      type="search" 
                      value={searchValue} 
                      onChange={(e)=>setSearchValue(e.target.value)} 
                      name="searchValue"
                      onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                              search();
                          }
                      }} 
                      id={id}
                      className='ml-4 text-base outline-none bg-transparent focus: flex-grow'
                      placeholder='Job title or keyword'
                  /> */}
                </div>  
                  <div className=''>
                    <Button onClick={search} className='text-xs md:text-sm text-white bg-gradient-to-r from-blue-500  to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-500 py-3 md:px-4 px-2 md:rounded-xl rounded-md '>
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

    {/* Categories section  */}
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
                  <div className='w-56 p-3 border border-solid border-gray-300 flex gap-3 md:text-base text-sm font-bold items-center rounded-md '>
                  <i className="ri-award-fill rounded-md w-8 h-8 flex items-center justify-center bg-gray-100"></i>
                  <h3 className='font-bold'>Quality Job</h3>
                  </div>
                  <div className='w-56 p-3 border border-solid border-gray-300 flex gap-3 md:text-base text-sm font-bold items-center rounded-md '>
                  <i className="ri-box-3-fill rounded-md flex items-center justify-center w-8 h-8 bg-gray-100"></i>
                  <h3 className='font-bold'>No Bid</h3>
                  </div>
                  </div>
                  <div className='flex gap-4'>
                  <div  className='w-56 p-3 border border-solid border-gray-300 flex gap-3 md:text-base text-sm font-bold items-center rounded-md '>
                  <i className="ri-currency-fill w-8 h-8 rounded-md flex items-center justify-center bg-gray-100"></i>
                  <h3 className='font-bold'>No Extra Charge</h3>
                  </div>
                  <div  className='w-56 p-3 border border-solid border-gray-300 flex gap-3 md:text-base text-sm font-bold items-center rounded-md '>
                  <i className="ri-briefcase-4-fill rounded-md w-8 h-8 flex items-center justify-center bg-gray-100"></i>
                  <h3 className='font-bold'>International</h3>
                  </div>
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