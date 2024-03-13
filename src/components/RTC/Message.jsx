import React from 'react'
import Container from '../container/Container'
import Input from '../Input'

function Message() {
  return (
    <section>
        <Container>
           <div className='h-[90vh] rounded-md overflow-hidden flex'>
            <div className='w-1/4 border-2'>
              <div className='h-14 bg-gray-100'>
                {/* search */}
              </div>
              <div>
                <div className='p-4 gap-3 flex items-center font-poppins border-b hover:bg-gray-100'>
                  <div className='w-12 h-12 rounded-full'>
                     <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1709894982~exp=1709898582~hmac=9929b982d1bafbde7a7048a03325b8d64f9a1b6b21b08985568b80ff062c3ba6&w=996" alt="" className='w-full h-full object-cover bg-black rounded-full'/>
                  </div>
                  <div className=' flex gap-1 flex-col justify-center'>
                    <h2 className='font-medium leading-4 mt-1 opacity-85'>Raunak Mishra</h2>
                    <h2 className='text-sm text-black text-opacity-50'>Freelancer</h2>
                  </div>
                </div>
               
              </div>
            </div>
            <div className='w-3/4 border-2 relative -left-0.5 '>
              <div className='h-14'>
                <div className='flex h-full p-4 gap-2 border-b items-center font-poppins'>
                  <div className='w-9 h-9'>
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1709894982~exp=1709898582~hmac=9929b982d1bafbde7a7048a03325b8d64f9a1b6b21b08985568b80ff062c3ba6&w=996" alt="" className='w-full h-full object-cover bg-black rounded-full'/>
                  </div>
                  <div className=' flex flex-col justify-center tracking-normal'>
                    <h2 className='font-medium text-sm leading-4 mt-1 opacity-85'>Raunak Mishra</h2>
                    <h2 className='text-sm text-black text-opacity-50'>Freelancer</h2>
                  </div>
                </div>
              </div>
              <div className='p-4 bg-gray-100 h-full'>
                 <div className='gap-3 flex flex-col items-start'>
                    <span className='p-2 rounded-md bg-gray-300  text-black text-opacity-80 rounded-br-none'>hellow</span>
                    <span className='p-2 rounded-md bg-gray-300  text-black text-opacity-80 rounded-br-none'>Hey raunak</span>
                 </div> 
                 <div className='gap-3 flex flex-col items-end'>
                    <span className='p-2 rounded-md bg-gray-300  text-black text-opacity-80 rounded-bl-none'>hellow</span>
                    <span className='p-2 rounded-md bg-gray-300  text-black text-opacity-80 rounded-bl-none'>Hey raunak</span>
                 </div> 
              </div>
              {/* message */}
              <div className='absolute bottom-0 w-full'>
                <Input className="w-full bg-white rounded-none"/>
                
              </div>
            </div>
           </div>
        </Container>
    </section>
  )
}

export default Message