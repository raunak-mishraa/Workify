import React from 'react'
import Container from './container/Container'
import {Input, Button} from './index'
function ForgotPassword() {
  return (
    <section>
        <Container>
        <div className='flex items-center justify-center h-[60vh]'>
                <div className='w-[100%] lg:w-[40%] md:w-[60%]'>
                    <h2 className='text-center text-2xl font-semibold font-poppins opacity-80'>Forgot Password</h2>
                    <div className=' mt-8 w-full border-2 rounded-md p-4'>
                        <form className='font-poppins space-y-6'>
                            <Input type='email' placeholder='xyz@gmail.com' />
                            <Button className='mt-6 w-full rounded-md font-semibold py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500'>Send Reset Link</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ForgotPassword