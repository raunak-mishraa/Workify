import React from 'react'
import Container from '../container/Container'
import { Link, useNavigate } from 'react-router-dom'
import { Logo, Navlinks, Button, Input }from '../index'
import { useSelector } from 'react-redux'
import User from './User/User'
function Header() {
  const isUser = useSelector((state) => state.auth.userData?.user.isClient)
  const authStatus = useSelector((state) => state.auth.status)
  // console.log(authStatus)
  // console.log(authData)

  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  return (
    <header className=' font-poppins z-50 top-0'>
        <Container>
          <nav>
            <div className='flex items-center justify-between h-20'>
              <div className='flex items-center w-full'>
              <div className='z-50 flex justify-between md:w-auto w-full'>
                <Link to={authStatus ? '/dashboard' : '/'}>
                  <Logo/>
                </Link>
                <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
              <i className={`${open ? 'ri-close-fill' : 'ri-menu-line'} duration-500`}></i>
                </div>
              </div>
              <ul className='cursor-pointer items-center md:flex hidden gap-12 text-black text-opacity-85 md:ml-12 text-base'>

                {isUser ?
                 (<li className='hover:opacity-70 transition delay-75 ease-in-out'>
                  <Link to='/mypost'>
                    My Post
                  </Link>
                  </li>) 
                 : (!authStatus && <li className='hover:opacity-70 transition delay-75 ease-in-out'>
                    <Link to='/'>
                      Home
                    </Link>
                </li>)}

                <Navlinks/>
              </ul>
              </div>
              {
                authStatus 
                ? 
                (  
                    <User/>
                ) 
                : 
                (  
                <div className='md:flex gap-2 hidden'>
                    <Button onClick={()=>navigate('/login')} className='px-4 py-1 border-2  border-sky-400 rounded-lg' type='button'>Login</Button>
                    <Button onClick={()=>navigate('/signup')} className='border-2 border-cyan-400 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-transparent hover:border-2 hover:text-black hover:to-transparent hover:border-sky-400 text-white rounded-md transition duration-300' type='button' bgColor='bg-gradient-to-r from-cyan-500 to-blue-500' textColor='text-white'>SignUp</Button>
                </div>
              )
              }
              


              {/* mobile view */}
              <ul className={`md:hidden bg-white z-10 fixed w-full h-full bottom-0 py-20 px-6 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                <li className='py-7 hover:opacity-70 transition delay-75 ease-in-out'>
                    <Link to='/'>
                      Home
                    </Link>
                  </li>
                  <Navlinks className='block' />
                 <Button onClick={
                  ()=>{
                    navigate('/login')
                    setOpen(!open)
                    }
                  } className='py-7'>
                  Login
                 </Button>
                 <div className='w-full p-1 rounded-md text-center bg-slate-100 mt-7'>
                  <Button onClick={
                    ()=>
                    {
                    navigate('/signup')
                    setOpen(!open)
                    }
                    } className='rounded-md bg-blue-500 w-full py-2 text-white'>
                    SignUp
                  </Button>
                 </div>
              </ul>
            </div>
          </nav>
        </Container>
    </header>
  )
}

export default Header