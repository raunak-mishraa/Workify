import React from 'react'
import { Link } from 'react-router-dom'
function Gigcards({gig}) {
  return (
    <div className='w-[24%] '>
        <Link to="/gig/123">
            <div className='mb-2'>
                <div className='border'>
                    <div className='h-40 w-full'>
                        <img src={gig.img} alt="" className='h-full w-full object-cover'/>
                    </div>
                    <div className='p-4 space-y-2  overflow-hidden'>
                        <div className='flex gap-2 font-Roboto items-center'>
                            <img src={gig.pp} className='w-6 h-6 rounded-full object-cover' alt="" />
                            <span className='font-semibold text-xs opacity-85'>{gig.username}</span>
                        </div>
                        <h3 className='line-clamp-2 leading-5 font-Roboto text-sm opacity-80 font-medium'>{gig.desc}</h3>
                        <div className="flex gap-1 items-center text-sm text-yellow-500">
                            <i className="ri-star-fill"></i>
                                <span>{gig.star}</span>
                        </div>
                    <hr className='h-0.5 bg-gray-200'/>
                    <div className="flex justify-between">
                    <i className='ri-heart-fill opacity-50'></i>
                    <div className="price">
                        <span className='text-xs opacity-70 font-Roboto'>STARTING AT</span>
                        <h2 className='text-sm font-semibold opacity-85'>
                        $ {gig.price}
                        <sup>99</sup>
                        </h2>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Gigcards