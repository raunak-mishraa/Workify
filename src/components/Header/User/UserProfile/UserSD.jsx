import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { logout } from '../../../../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUser } from '../../../../assets/utils/getUser';

//SMALL DEVICES
function UserSD() {
    const ref = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [userAvatar, setUserAvatar] = useState('')
    const isClient = localStorage.getItem('isClient');
    console.log('user small device',isClient)
    // const isClient = useSelector((state) => state.auth.isClient)
    
    //fetch user avatar
    useEffect(() => {
        const fetchUserAvatar = async() => {
            const response = await fetchUser();
            setUserAvatar(response.data?.avatar)
        }
        fetchUserAvatar()
    }, [userAvatar])

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [ref]);

      const logOut = async() => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/logout`,{withCredentials: true});
            dispatch(logout());
            navigate("/")
            toast.success("User logged Out!",{
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
               
            })
            
        } catch (error) {
            console.error("Error logging out:", error);
        }
      }
    
    
  return (
    <div className='relative sm:hidden'>
        <div ref={ref} onClick={() =>setOpen((prev)=>!prev)} className='rounded-full flex items-center justify-center w-8 h-8  overflow-hidden'>
            {/* <i className=" ri-user-line"></i> */}
            <img className='w-full h-full object-cover' src={userAvatar} alt="profile" />
        </div>
        <div className={`absolute right-0 top-13 z-10  py-2 ${open ? 'block' : 'hidden'} w-[158px]`}>
        <div className='w-4 h-4 right-3 absolute mt-1 bg-white border -z-10 rotate-45'></div>
            <div className='text-base mt-3 rounded-md bg-white border border-gray-200 overflow-hidden w-full'>
                <div className='hover:bg-blue-200 py-1 pl-3 pr-10 opacity-85 flex gap-1 items-center'>
                    <Link to='/userprofile'><i className="ri-user-line"></i> Profile</Link>
                </div>
                <div className='cursor-pointer hover:bg-blue-200 py-1 pl-3 pr-10 opacity-85 flex gap-1 items-center'>
                    <Link to='/messages'><i className="ri-message-line"></i> Messages</Link>
                </div>
                <div className='hover:bg-blue-200 py-1 pl-3 pr-10 opacity-85 flex gap-1 items-center'>
                    {isClient ? <Link to='orders'><i className="ri-folder-5-line"></i> Orders</Link> : <Link to='/mygigs'><i className="ri-folder-5-line"></i> MyGigs</Link>}
                </div>
                
                <hr />
                <div onClick={logOut} className='hover:bg-blue-200 py-1 mt-3 pl-3 pr-10 opacity-85 flex gap-1 items-center cursor-pointer'>
                <i className="ri-logout-box-r-line"></i> Logout
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserSD