import React from 'react'
import Container from './container/Container'
import { useSelector } from 'react-redux'



function SearchUser() {
    const searchData = useSelector((state) => state.search.freelancerData)
  return (
    <Container>
        <div className={`rounded-md p-6 my-8  bg-gray-50 `}>
                 <div className='flex justify-around font-poppins flex-wrap'>
                   {
                    searchData?.map((data)=>(
                        <div key={data._id} className=' w-1/3 p-4 gap-2 items-center bg-white rounded-md flex'>
                        <div>
                            <img src={data?.avatar} alt="client_profile" className='w-20 h-20 p-1 border-2 rounded-md object-cover' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold first-letter:capitalize font-poppins opacity-85'>{data?.fullName}</h2>
                            <p className='text-sm font-medium opacity-75'>{data?.profession}</p>
                        </div>
                    </div>
                    ))
                   }
                </div>    
        </div>
    </Container>
  )
}

export default SearchUser