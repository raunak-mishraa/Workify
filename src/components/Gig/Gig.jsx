import React from 'react'
import Container from '../container/Container'
import Button from '../Button'
// import Slide from '../Slider/Slide'
import { useQuery } from '@tanstack/react-query'
import  newRequest  from '../../assets/utils/newRequest'
import { Link, useParams } from 'react-router-dom';
import Reviews from '../Reviews/Reviews'
function Gig() {
    const {id} = useParams()
    console.log(id)
    const { isPending, error, data } = useQuery({
        queryKey: ['gig'],
        queryFn: () =>
          newRequest(`/gigs/single/${id}`).then((res) => res.data)
      })

      const userId = data?.userId;
      
      const {
        isPending: isLoadingUser,
        error: errorUser,
        data: dataUser,
      } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
          newRequest.get(`/users/${userId}`).then((res) => {
            return res.data;
          }),
          enabled: !! userId,  
      });
    
  return (
    <section>
        <Container>
         {isPending ? "Loading" : error ? "Something Went Wrong" : <div className='flex w-full items-start gap-12'>
           <div className='basis-2/3'>
                <span className='uppercase font-Roboto font-medium text-gray-800 text-opacity-55 text-sm'> Workify {">"} Graphics & Design {">"}</span>
                <h2 className='text-xl font-bold font-Roboto py-2 first-letter:capitalize'>{data?.title}</h2>
              { isLoadingUser ? "Loading" : errorUser ? "Something went wrong" : <div className='flex items-center gap-2 mb-2'>
                    <img src={dataUser?.avatar} alt="" className='w-8 h-8 rounded-full object-cover'/>
                    <span className='text-sm font-medium first-letter:capitalize'>{dataUser?.fullName}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                    <div className='flex gap-1 items-center'>
                         {Array(Math.round(data.totalStars / data.starNumber))
                                .fill()
                                .map((img, index)=>( 
                                  <i key={index} className='ri-star-fill text-yellow-400'></i>
                          ))}
                        <span className='text-sm text-yellow-400 ml-1 font-medium'>
                        {Math.round(data.totalStars / data.starNumber)}</span>
                    </div>
                    )}
                </div>}
                
               {/* <Slide images={data?.images}/> */}
                <h2 className='font-Roboto font-bold opacity-90 text-xl my-4'>About This Gig</h2>
                <p className='opacity-60 leading-6'>
                  {data?.desc}
                </p>

                {/* {freelancer} */}
                { isLoadingUser ? "Loading" : errorUser ? "Something went wrong" : <div className=' mt-12'>
                    <h2 className='font-Roboto opacity-90 font-bold text-xl my-2'>About The Freelancer</h2>
                    <div className="flex items-center gap-3">
                        <img
                            src={dataUser?.avatar}
                            alt=""
                            className='w-20 h-20 rounded-full object-cover'
                        />
                        <div className="flex flex-col gap-1 justify-center">
                            <span className='font-medium text-sm first-letter:capitalize'>{dataUser?.fullName}</span>
                            {!isNaN(data.totalStars / data.starNumber) && (
                            <div className='flex gap-1 items-center'>
                              {Array(Math.round(data.totalStars / data.starNumber))
                                .fill()
                                .map((img, index)=>( 
                                  <i key={index} className='ri-star-fill text-yellow-400'></i>
                              ))}
                                <span className='text-sm text-yellow-400 ml-1 font-medium'>
                                {Math.round(data.totalStars / data.starNumber)}</span>
                            </div>
                            )}
                            <Button className='p-1 border-2 text-sm text-black text-opacity-75 font-medium rounded-md'>Contact Me</Button>
                        </div>
                    </div>
                    <div className="border-2 p-5 mt-5 rounded-sm">
                        <div className="flex  font-Roboto justify-between flex-wrap">
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">From</span>
                            <span className="font-medium">{dataUser?.country}</span>
                            </div>
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">Member since</span>
                            <span className="font-medium">Aug 2022</span>
                            </div>
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">Avg. response time</span>
                            <span className="font-medium">4 hours</span>
                            </div>
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">Last delivery</span>
                            <span className="font-medium">1 day</span>
                            </div>
                            <div className="w-80 flex flex-col gap-3 mt-5">
                            <span className="font-light">Languages</span>
                            <span className="desc">English</span>
                            </div>
                        </div>
                            <hr className='h-0.5 bg-gray-200 my-4'/>
                            <p className='opacity-60 leading-6'>
                               {dataUser?.desc}
                            </p>
                        </div>
                </div>}
                {/* review starts here */}
                <div className='my-4'>
                        <h2 className='font-medium text-lg'>Reviews</h2>
                        <Reviews gigId={id}/>
                </div>
            </div>
                <div className='basis-1/3 border-2 p-5 rounded-sm h-auto sticky top-20 w-full'>
                <div className="font-Roboto flex justify-between items-center">
                    <h3 className='font-medium first-letter:capitalize'>{data?.shortTitle}</h3>
                    <h2 className='font-light'>$ {data?.price}</h2>
                </div>
                <p className='opacity-60 leading-6 text-sm my-4 first-letter:capitalize font-Roboto'>
                    {data?.shortDesc}
                </p>
                    <div className="font-Roboto flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                        <i className="ri-time-line text-xl"></i>
                        <span className='text-sm font-medium'>{data?.deliveryTime} Days Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                        <i className="ri-loop-left-line text-xl"></i>
                        <span className='text-sm font-medium'>{data?.revisionNumber} Revisions</span>
                        </div>
                    </div>
                    <div className="my-3">
                      {data?.features?.map((feature)=>(
                        <div className="font-Roboto flex items-center gap-2 font-medium mb-1 text-black text-opacity-70" key={feature}>
                        <i className="ri-check-line text-sm text-blue-500"></i>
                        <span className='text-sm first-letter:capitalize'>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={`/pay/${id}`}>
                    <Button className='font-Roboto bg-blue-500 w-full text-white p-2 font-medium text-base cursor-pointer'>Continue</Button>
                    </Link>
                </div>
           </div>}
        </Container>
    </section>
  )
}

export default Gig