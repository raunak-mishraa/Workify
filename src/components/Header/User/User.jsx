import React, { useEffect, useRef, useState } from 'react'
// import authorImg from '../../../assets/images/author.jpg'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../../store/authSlice'
import {searchFreelancer, searchClientPosts} from '../../../../store/searchSlice'
import axios from 'axios'
import { toast } from 'react-toastify';

function User() {
    const navigate = useNavigate()
    const ref = useRef(null);
    const nref = useRef(null);
    // const [cookies] = useCookies(['accessToken']);
    const [notificationOn, setNotificationOn] = useState(false)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const userData = useSelector((state) => state.auth.userData)
    const [searchValue, setSearchValue] = useState('')
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

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (nref.current && !nref.current.contains(event.target)) {
            setNotificationOn(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [nref]);

    const logOut = async() => {
        try {
            const logoutRes = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/v1/users/logout`,
                { _id: userData.user._id },
                {
                    headers: {
                        // Authorization: `Bearer ${cookies.accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true // Send cookies with the request
                }
            );

            localStorage.removeItem('userData');
            localStorage.removeItem('applicationData');
            localStorage.removeItem('selectedPostData');
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
            toast.error("Internet Connection Error!", {
                autoClose: 1000,
                hideProgressBar: false,
            })
            console.error("Error logging out:", error);
        }
    };
    
    //For notifications
    // const showNotifications = () => {
    //     console.log("show notifications", notificationOn)
    //     setNotificationOn((prev) => !prev)
    // }
    const search = () =>{
        // i changed here 
        if(userData?.user.isClient) {
        //    navigate(`/gigs?search=${searchValue}`)
           navigate(`/gigs?category=${searchValue}`)
        }
        else{
            const query = searchValue;
            axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/search/client_posts/search?query=${query}`)
            .then((res)=>{
                if(searchValue !== ''){
                    navigate(`/search/${searchValue}`)
                  }
            })
            .catch((error)=>{
                navigate('/search')
                setSearchValue('')
                dispatch(searchClientPosts([]))
                console.log(error)
            })
        }
    }

  return (
    <div className='md:flex gap-6 hidden'> 
        <div className='flex py-2 px-3 border border-gray-200 rounded outline-none max-w-xl'>
            <input onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    search();
                }
            }} type="search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} name="searchValue" id=""  placeholder={userData?.user?.isClient ? 'Search For Gigs' : 'Search Jobs'} className='text-gray-800 outline-none appearance-none' />
            <i onClick={search} className="ri-search-line"></i>
        </div>
        <div className='md:flex items-center gap-2 hidden'>
        <div ref={nref} onMouseOver={()=>setNotificationOn((prev) => !prev)}>
            <div className='relative w-8 h-8 bg-gray-100 rounded-full items-center justify-center flex'> <i className=" ri-notification-3-line"></i>
            <span className ="absolute top-2 right-2 flex h-2 w-2">
            <span className ="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className ="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
                 <div onClick={(e) => e.stopPropagation()} className={`${notificationOn ? 'block' : 'hidden'} right-0 top-12 p-2 rounded-md absolute w-44 bg-white border`}>
                    <div>
                        <p className='text-sm opacity-95 first-letter:uppercase'>Coming Soon</p>
                    </div>
                 </div>
            </div>
        </div>
        <div className='relative'>
        <div ref={ref} onClick={() =>setOpen((prev)=>!prev)} className='rounded-full flex items-center justify-center w-8 h-8  overflow-hidden'>
            {/* <i className=" ri-user-line"></i> */}
            <img className='w-full h-full object-cover' src={userData?.user?.avatar} alt="profile" />
        </div>
        <div className={`absolute right-0 top-13 z-10  py-2 ${open ? 'block' : 'hidden'} `}>
        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
            <div className='text-base mt-3 rounded-md bg-white border border-gray-200 overflow-hidden'>
                <div className='hover:bg-blue-200 py-1 pl-3 pr-10 opacity-85 flex gap-1 items-center'>
                    <Link to='/userprofile'><i className="ri-user-line"></i> Profile</Link>
                </div>
                <div className='cursor-pointer hover:bg-blue-200 py-1 pl-3 pr-10 opacity-85 flex gap-1 items-center' onClick={()=>navigate('/messages')}>
                    <i className="ri-message-line"></i> Messages
                </div>
                <div className='hover:bg-blue-200 py-1 pl-3 pr-10 opacity-85 flex gap-1 items-center'>
                    {userData?.user?.isClient ? <Link to='orders'><i className="ri-folder-5-line"></i> Orders</Link> : <Link to='/mygigs'><i className="ri-folder-5-line"></i> MyGigs</Link>}
                </div>
                
                <hr />
                <div onClick={logOut} className='hover:bg-blue-200 py-1 mt-3 pl-3 pr-10 opacity-85 flex gap-1 items-center cursor-pointer'>
                <i className="ri-logout-box-r-line"></i> Logout
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default User