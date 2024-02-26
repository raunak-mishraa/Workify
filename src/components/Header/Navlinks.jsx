import React from 'react'
import { Link } from 'react-router-dom'
import { links } from './NavItems'
import { useSelector } from 'react-redux';

function Navlinks({className = 'flex'}) {
    const isAuth = useSelector(state => state.auth.status);

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
                                                <li key={slink.name} className='text-gray-600 text-sm my-2.5'>
                                                    <Link className='hover:underline' to={slink.link}>{slink.name}</Link>    
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