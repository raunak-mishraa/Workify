import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { links } from './NavItems'
import { useDispatch, useSelector } from 'react-redux';
import { searchFreelancer } from '../../../store/searchSlice';
import axios from 'axios';

function Navlinks({className = 'flex'}) {
    const isAuth = useSelector(state => state.auth.status);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const search = (isFreelancer, searchValue) => {
   
        // setSearchValue(searchItem)
        if (isFreelancer === "Find Jobs"){
            console.log('its me', searchValue)
            navigate(`/search/${searchValue}`)
       }
       else{
        const query = searchValue;
        // alert(searchValue)
        console.log(isFreelancer)
        // console.log(searchValue)
            axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/search/freelancers/search?query=${query}`)
            .then((res)=>{
                console.log(res.data)
                    dispatch(searchFreelancer(res.data.data))
                    navigate('/search_user')
            })
            .catch((error)=>{
                navigate('/search_user')
                dispatch(searchFreelancer([]))
                console.log(error)
            })
       }
    }

   

   const [heading, setHeading] = React.useState('')
  return (!isAuth ?
    (<div className={`${className} gap-12`}>
        {links.map((link,index)=>(
            <div key={index}>
            <div className='py-7 md:py-0 text-left md:cursor-pointer  transition delay-75 ease-in-out group'>
                <h2 onClick={()=>heading !== link.name ? setHeading(link.name) : setHeading('')} className='hover:opacity-70 flex items-center justify-between md:pr-0'>
                    {link.name}
                    <span className='text-xl md:mt-1 md:ml-2'>
                    <i className={`${heading === link.name ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                    </span>
                </h2>
                {link.subMenu && (
                    <div>
                        <div className='absolute top-14 z-10 hidden group-hover:md:block hover:block'>
                            <div className='py-3'>
                                <div className='w-4 h-4 left-3 -z-10 absolute mt-1 bg-white border-2 border-gray-100  rotate-45'></div>
                            </div>
                            <div className='bg-white border-2 border-gray-100 border-t-0 p-3.5'>
                                {
                                    link.sublinks.map(mysublink=>(
                                        <div key={mysublink.head}>
                                            <h2 className='text-lg font-semibold'>{mysublink.head}</h2>
                                            {mysublink.sublink.map(slink=>(
                                                <li onClick={()=>{
                                                    // setSearchValue(slink.link)
                                                    search(link.name,slink.link)}} key={slink.name} className='text-gray-600 text-sm my-2.5'>
                                                    <div className='hover:underline' >{slink.name}</div>    
                                                </li>
                                            ))}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* mobile links  */}
            <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
           {link.sublinks.map((slink, index)=>(
            <div key={index}>
                <div>
                    <h2 className='py-4 pl-7 font-semibold md:pr-0 pr-5'>{slink.head}</h2>
                    <div>
                        {slink.sublink.map((sublink, index)=>(
                            <li key={index} className='text-gray-600 text-sm py-3 pl-14'>
                                <Link className='hover:underline' to={sublink.link}>{sublink.name}</Link>    
                            </li>
                        ))}
                    </div>
                </div>
            </div>
           ))}
           </div>
        </div>
        ))}
    </div>) : (null)
  )
}

export default Navlinks