import { useQuery } from '@tanstack/react-query'
import React from 'react'
import newRequest from '../../assets/utils/newRequest'
function Review({review}) {
    const { isPending, error, data } = useQuery({
        queryKey: [review.userId],
        queryFn: () =>
          newRequest.get(`/users/${review.userId}`).then((res) => res.data)
      })
      console.log("DATA", data)
  return (
    <>
      {
          <div>
            <div className='my-4  space-y-2'>
               {isPending ? "Loading" : error ? "Something went wrong" : <div className="flex gap-2 items-center">
                    <img
                        src={data?.avatar}
                        alt=""
                        className='w-10 h-10 rounded-full object-cover'
                        />
                        <div className="font-Roboto">
                            <span className='text-sm opacity-90  leading-3 font-semibold'>{data?.fullName}</span>
                            <div className="flex items-center gap-1">
                                <img
                                src={`https://www.countryflags.com/wp-content/uploads/${data?.country || "india"}-flag-png-large.png`}
                                alt=""
                                className='w-4 h-3 object-cover'
                                />
                                <span className='text-sm opacity-75'>{data?.country || "India"}</span>
                            </div>
                        </div>
                </div>}
                <div>
                    {Array(review.star).fill().map((img, index)=>(
                        <i key={index} className='ri-star-fill text-yellow-400'></i>
                    ))}
                    <span className='text-yellow-400 ml-1 text-sm'>{review.star}</span>
                </div>
                <p className='opacity-60 leading-6'>
                   {review.desc}
                </p>
                <div className="space-x-2 font-Roboto">
                    <span className='text-sm font-medium'>Helpful?</span>
                    <i className="ri-thumb-up-line"></i>
                    <span className='text-sm font-medium'>Yes</span>
                    <i className="ri-thumb-down-line"></i>
                    <span className='text-sm font-medium'>No</span>
                </div>
            </div>
            <hr className='border my-10'/>
          </div>
      }
    </>
  )
}

export default Review