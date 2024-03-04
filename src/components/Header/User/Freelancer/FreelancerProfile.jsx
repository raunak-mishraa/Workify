import React, { useRef } from 'react'
import { Container} from "../../../index"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserAvatar } from '../../../../../store/authSlice'
import  Axios  from 'axios'
import { toast } from 'react-toastify'
function FreelancerProfile() {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.userData)
    console.log("this is profile page", userData)
    
    // console.log("this is the data",userData)
    // const userData = {user:{ fullName: 'John Doe',
    // email: 'xyz@gmail.com',
    // avatar: 'https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?size=626&ext=jpg&uid=R117610733&ga=GA1.1.1393354656.1695382104&semt=sph',
    // profession: 'Web Developer'}
       
    // }
    const fileInputRef = useRef(null);
    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('avatar', file);
        Axios.defaults.withCredentials = true;
        Axios.put(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/update-avatar`, formData)
            .then(response => {
                const newAvatar = response.data.data.avatar;
                const updatedUserData = {
                    ...userData,
                    user: {
                        ...userData.user,
                        avatar: newAvatar
                    }
                };
                localStorage.setItem('userData', JSON.stringify(updatedUserData));
                dispatch(updateUserAvatar(newAvatar));
                toast.success(response.data.message);
                console.log('File uploaded successfully:', response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error uploading file:', error);
            });

    };

  return (
    <section className='max-w-6xl mx-auto font-poppins h-[60vh] flex justify-center items-center'>
        <Container>
        <div className='flex justify-center h-full'>
        <div className='w-2/6 '>
            <div className='h-auto border-2 rounded-md p-4 border-gray-200 '>
                <div className='flex flex-col gap-6 justify-center'>
                    {/* profile_url */}
                    <div className='flex gap-2 items-center '>
                    <div className='w-16 h-16 relative cursor-pointer' onClick={handleFileInputClick}>
                                        <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileInputChange} />
                                        <img src={userData?.user.avatar} className='w-full h-full object-cover rounded-full' alt="" />
                                        <div className='absolute w-6 h-6 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 bottom-0 right-0'>
                                            <i className='ri-pencil-line text-blue-500'></i>
                                        </div>
                                    </div>
                        <div className=' opacity-85'>
                            <h2 className='text-lg font-semibold first-letter:uppercase'>{userData?.user.fullName}
                            <i class="ri-verified-badge-fill ml-1 text-base text-cyan-600"></i>
                            </h2>
                            <h2 className='font-medium text-sm'>{userData?.user.profession}</h2>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div className='p-2 border-2 rounded-md'>
                            <h2 className='font-medium opacity-70'>Skills</h2>
                        </div>
                        <div className='p-2 border-2 rounded-md'>
                            <h2 className='font-medium opacity-70'>Certification</h2>
                        </div>
                        <div className='p-2 border-2 rounded-md'>
                            <h2 className='font-medium opacity-70'>Projects</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            <div className='w-5/6 p-4'>
                <h2 className='text-2xl font-semibold opacity-80'>Profile Info <span className='opacity-80 text-base'>({userData?.user.username})</span></h2>
                <div className=' mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200 relative'>
                    <h2 className='text-lg '>Account</h2>
                   <div className='space-y-3 mt-2 font-assistant text-base'>
                        <div>
                            <label className='font-semibold'>Name</label>
                            <h3 className='mt-1 font-semibold '>{userData?.user.fullName}</h3>
                        </div>
                        <div>
                            <label className=' font-semibold'>Email</label>
                            <h3 className=' mt-1  font-semibold'>{userData?.user.email}</h3>
                        </div>
                   </div>
                   <div className='absolute right-4 border-2 w-8 h-8 rounded-full flex justify-center items-center  top-3'>
                    <Link to='/updateprofile'><i className='ri-pencil-fill text-blue-400'></i></Link>
                    
                   </div>
                </div>
            </div>
          </div>
        </Container>
    </section>
  )
}

export default FreelancerProfile