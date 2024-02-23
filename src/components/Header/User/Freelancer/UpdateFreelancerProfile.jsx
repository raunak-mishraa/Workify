import React from 'react'
import {Button, Container, Input} from '../../../index.js'
// import PrevImage from "../../../../assets/images/author.jpg"
import { useSelector } from 'react-redux'
function UpdateFreelancerProfile() {
    const userData = useSelector((state) => state.auth.userData)
    const data = {
        username: 'John Doe',
        email: 'xyz@gmail.com',
        profession: 'Web Developer'
    }
    const [username, setUserName] = React.useState(userData.user.username);
    const [email, setEmail] = React.useState(userData.user.email);
    const [profession, setProfession] = React.useState("web developer");

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(username, email);
    }
   
  return (
    <section className='w-full'>
        <Container>
            <div className='flex  items-center justify-center h-[80vh]'>
                <div className='w-1/2'>
                    <h2 className='text-center text-2xl font-semibold font-poppins opacity-80'>Update Freelancer Profile</h2>
                    <div className=' mt-8 w-full border-2 rounded-md p-4'>
                        <form className='font-poppins' onSubmit={handleUpdate}>
                            {/* profileImg */}
                           
                            <div className='relative mb-8 w-16 h-16 mx-auto rounded-full  bg-red-400'>
                                <img src={userData?.user.avatar} className='w-full object-cover h-full rounded-full' alt="" />
                                <div className='absolute w-6 h-6  flex items-center justify-center rounded-full bg-white border-2 border-gray-300  bottom-0 right-0'>
                                    <i className='ri-pencil-line text-blue-500'></i>
                                </div>
                            </div>
                            
                            <div className='space-y-3'>
                            <Input onChange={(e) => setUserName(e.target.value)} value={username}/>
                            <Input onChange={(e) => setEmail(e.target.value)} type='email' value={email}/>
                            <Input onChange={(e) => setProfession(e.target.value)} value={profession} />
                            </div>
                            <Button className='mt-6 w-full rounded-md font-semibold py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500'>Update Profile</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default UpdateFreelancerProfile