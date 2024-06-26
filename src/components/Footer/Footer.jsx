import React from 'react'
import  Container  from '../container/Container'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {Logo} from '../index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
function Footer() {

  const footerLinks = [
    {
      name:'Graphic & Design',
      footerLink :'/gigs?category=design'
    },
    {
      name:'Programming & Tech',
      footerLink :'/gigs?category=programming'
    },
    {
      name:'Digital Marketing',
      footerLink :'/gigs?category=digitalmarketing'
    },
    {
      name:'Video & Animation',
      footerLink :'/gigs?category=video&animation'
    },
    {
      name:'Writing & Translation',
      footerLink :'/gigs?category=writingandtranslation'
    },

  ]
  const navigate = useNavigate();
  return (
    <footer className='bg-slate-50 pt-16 font-poppins '>{/* removed class -z-10 bottom-0  */}
        <Container>
          <div>
            <div className='w-full flex flex-wrap justify-between mb-12'>
              <div className='w-full text-center flex flex-col items-center mb-8 md:mb-0 md:w-1/3  md:block md:text-left'>
                <div className="logo mb-4">
                  <Link to='/'>
                    <Logo/>
                  </Link>
                </div>
                <div className="flex flex-col gap-4 mb-10">
                  <h2 className='text-2xl font-semibold text-black opacity-80'>We growing up your business to the international scale.</h2>
                  <p className='text-base font-normal text-black opacity-80'>Workify 2024,</p>
                </div>
              </div>


              <div className='w-full md:w-2/3 flex flex-wrap justify-between '>
              <div className='md:w-1/3 mb-4 sm:mb-0 flex md:justify-end'>
              <div>
                <h2 className="uppercase text-black opacity-85 font-semibold mb-4">About</h2>
                <ul className='text-black text-opacity-70 text-base font-normal'>
                  <li className='mb-4 hover:underline'>
                    <Link to='/about' >About us</Link>
                  </li>
                  {/* <li className='mb-4 hover:underline'>
                    <Link to='/how-it-works'>How it Works</Link>
                  </li> */}
                  <li className='mb-4 hover:underline'>
                    <Link to='/team'>Team</Link>
                  </li>
                  <li className='mb-4 hover:underline'>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
                </div>
              </div>
              <div className='md:w-1/3 mb-4 sm:mb-0 flex md:justify-end'>
                <div>
                <h2 className="opacity-85 uppercase text-black font-semibold mb-4">Categories</h2>
                <ul className='text-black text-opacity-70 text-base font-normal'>
                  {
                    footerLinks.map((link, index)=>(
                      <li key={index} className='mb-4 hover:underline'>
                        <Link to={link.footerLink}>{link.name}</Link>
                      </li>
                    ))
                  }
                  {/* <li className='mb-4 hover:underline'>
                    <Link to='/'>Graphic & Design</Link>
                  </li>
                  <li className='mb-4 hover:underline'>
                    <Link to='/'>Programming & Tech</Link>
                  </li>
                  <li className='mb-4 hover:underline'>
                    <Link to='/'>Digital Marketing</Link>
                  </li>
                  <li className='mb-4 hover:underline'>
                    <Link to='/'>Video & Animation</Link>
                  </li>
                  <li className='mb-4 hover:underline'>
                    <Link to='/'>Writing & Translation</Link>
                  </li> */}
                </ul>
                </div>
              </div>
              <div className='md:w-1/3 mb-4 sm:mb-0 flex md:justify-end'>
              <div>
                <h2 className="uppercase text-black opacity-85 font-semibold mb-4">Terms</h2>
                <ul className='text-black text-opacity-70 text-base font-normal'>
                  <li className='mb-4 hover:underline'>
                    <Link to='/privacy-policy' >Privacy Policy</Link>
                  </li>
                  <li className='mb-4 hover:underline'>
                    <Link to='/term-and-conditions'>Terms and Conditions</Link>
                  </li>
                  <li className='mb-4 hover:underline'>
                    <Link to='/copyright'>Copyright Policy</Link>
                  </li>
                </ul>
                </div>
              </div>
              </div>
              </div>
              <div className='border border-1 border-gray-300 '></div>
              <div className='flex flex-wrap justify-center sm:justify-between pt-8 pb-2 text-black opacity-80'>
                <p className='mb-6 text-center sm:text-left'>&copy; 2024 Workify Pty Limited. All rights reserved.</p>
                <div className='flex gap-5 justify-center sm:justify-end'>
                <Link target="_blank" to='https://twitter.com/Raunak_devs'><FontAwesomeIcon className='hover:opacity-80' icon={faTwitter} size='lg'/>
                </Link>
                <Link target="_blank" to='https://www.linkedin.com/in/raunak-mishraa/'>
                <FontAwesomeIcon className='hover:opacity-80' icon={faLinkedinIn} size='lg'/>
                </Link>
                <Link target="_blank" to='https://www.instagram.com/devwithraunak'>
                <FontAwesomeIcon className='hover:opacity-80' icon={faSquareInstagram} size='lg'/>
                </Link>
                </div>
              </div>
          </div>
        </Container>
    </footer>
  )
}

export default Footer