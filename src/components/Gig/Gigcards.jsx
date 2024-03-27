import { useQuery } from '@tanstack/react-query'
import React from 'react'
import newRequest from '../../assets/utils/newRequest'
import { Link } from 'react-router-dom'
function Gigcards({gig}) {
    const { isPending, error, data } = useQuery({
        queryKey: [gig.userId],
        queryFn: () =>
          newRequest(`/users/${gig.userId}`).then((res) => res.data)
      })
      console.log(data)
      console.log(gig.userId)
  return (
    <div className='sm:w-[24%] w-full'>
        <Link to={`/gig/${gig._id}`}>
            <div className='mb-2 overflow-hidden'>
                <div className='border'>
                    <div className='h-40 w-full'>
                        <img src={gig.cover} alt="" className='h-full w-full object-cover'/>
                    </div>
                    <div className='p-4 space-y-2  overflow-hidden'>
                        {isPending ? "loading" : error ? "Something went wrong" : <div className='flex gap-2 font-Roboto items-center'>
                            <img src={data.avatar} className='w-6 h-6 rounded-full object-cover' alt="" />
                            <span className='font-semibold text-xs opacity-85'>{data.username}</span>
                        </div>}
                        <div className='h-10'>
                            <h3 className='line-clamp-2 leading-5 font-Roboto text-sm opacity-80 font-medium'>{gig.desc}</h3>
                        </div>
                        <div className="flex gap-1 items-center text-sm text-yellow-500">
                            <i className="ri-star-fill"></i>
                                <span> {!isNaN(gig.totalStars / gig.starNumber) &&
                            Math.round(gig.totalStars / gig.starNumber)}</span>
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