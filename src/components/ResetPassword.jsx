import React from 'react'
import Container from './container/Container'
import {Input, Button} from './index'
import {useParams} from 'react-router-dom'
function ResetPassword() {
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');

    const params = useParams();
    console.log(params.token)
  return (
    <section>
        <Container>
        <div className='flex items-center justify-center h-[60vh]'>
                <div className='w-[100%] lg:w-[40%] md:w-[60%]'>
                    <h2 className='text-center text-2xl font-semibold font-poppins opacity-80'>Reset Password</h2>
                    <div className=' mt-8 w-full md:border-2 rounded-md p-4'>
                        <form className='font-poppins space-y-6'>
                            <Input 
                            required
                             type='password' 
                             placeholder='Old Password'
                             value={oldPassword} 
                             onChange={(e) => setOldPassword(e.target.value)}
                             />
                            <Input  required
                             type='password' 
                             placeholder='New Password'
                             value={newPassword} 
                             onChange={(e) => setNewPassword(e.target.value)} />
                            <Button className='mt-6 w-full rounded-md font-semibold py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500'>Reset Password</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ResetPassword