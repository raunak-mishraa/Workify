import React, { useRef } from 'react'
import { Button, Container} from "../../../index"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserAvatar } from '../../../../../store/authSlice'
import  Axios  from 'axios'
import { countries } from '../../../../assets/Data/country'
import { toast } from 'react-toastify'
function UserProfile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.userData)
    const [tabs, setTabs] = React.useState('profile')
    // console.log("this is profile page", userData)
    
    const fileInputRef = useRef(null);
    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };

    console.log(tabs)

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

    const deleteAccount = () => {
        const yn = confirm('Are you sure you want to delete your account?');
        navigate('/deleteaccount')
    }
  return (
    <section className='max-w-6xl mx-auto font-poppins h-auto my-6 flex justify-center items-center'>
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
                            <i className="ri-verified-badge-fill ml-1 text-base text-cyan-600"></i>
                            </h2>
                     { userData?.user?.isClient ? <h2 className='font-poppins font-medium text-sm'>Client</h2> : <h2 className='font-medium text-sm'>{userData?.user.profession}</h2>}
                        </div>
                    </div>
                   {!userData?.user?.isClient &&  <div className='space-y-1'>
                        <div className={`${tabs === 'profile'  && 'bg-gray-100 text-opacity-90'} text-black cursor-pointer p-2 border-2 rounded-md text-opacity-75`} onClick={()=>setTabs('profile')}>
                            <h2 className='font-medium'>Profile</h2>
                        </div>
                        <div className={`${tabs === 'skills'  && 'bg-gray-100 text-opacity-90'} text-black cursor-pointer p-2 border-2 rounded-md text-opacity-75`} onClick={()=>setTabs('skills')}>
                            <h2 className='font-medium'>Skills</h2>
                        </div>
                        <div className={`${tabs === 'projects'  && 'bg-gray-100 text-opacity-90'} text-black cursor-pointer p-2 border-2 rounded-md text-opacity-75`} onClick={()=>setTabs('projects')}>
                            <h2 className='font-medium'>Projects</h2>
                        </div>
                        
                    </div>}
                    <div className='cursor-pointer p-2 border-2 text-center text-white rounded-md bg-red-700' onClick={deleteAccount}>
                            <h2 className='font-medium'>Delete Account</h2>
                    </div>
                    
                </div>
            </div>
        </div>
            {
                tabs === 'profile' && (
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

                <div className='flex items-center justify-between mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200 relative'>
                    {/* <h2 className='text-lg '>Add Country</h2> */}

                         <select className='border p-3 focus:outline-dashed text-black text-opacity-85'>
                         { countries.map((country, i) => {
                            return(
                                <option className='bg-gray-800 text-white' value={country.name}>{country.name}</option>
                            )
                        })
                    }
                         </select>
                         <Button className='w-24 p-2 bg-black rounded-sm text-white'>
                            Update
                         </Button>

                </div>

            </div>
                )
            }
            {
                tabs === 'skills' && (
                    <div className='w-5/6 p-4'>
                <h2 className='text-2xl font-semibold opacity-80'>Skills</h2>
                <div className='space-y-6 mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200'>
                <div className='space-y-4'>
                        <h2 className='text-lg '>Add Skills</h2>
                        <Button className='p-2 text-xl text-black text-opacity-90 text-center w-full border-2 bg-gray-100'>+</Button>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-lg'>Your skills</h2>
                        <div className='space-y-3   font-poppins text-base'>
                                <div className='border-2 p-4 rounded-md flex flex-wrap gap-2'>
                                    <span className='text-xs p-2 rounded-lg bg-gray-200'>UI/UX</span>
                                    <span className='text-xs p-2 rounded-lg bg-gray-200'>System Design</span>
                                    <span className='text-xs p-2 rounded-lg bg-gray-200'>Docker</span>
                                    <span className='text-xs p-2 rounded-lg bg-gray-200'>Computer Networking</span>
                                    <span className='text-xs p-2 rounded-lg bg-gray-200'>Operating System</span>
                                    <span className='text-xs p-2 rounded-lg bg-gray-200'>Operating System</span>
                                </div>
                         </div>
                    </div>
                </div>
                </div>
                )
            }
           
            {
                tabs === 'projects' && (
                    <div className='w-5/6 p-4'>
                <h2 className='text-2xl font-semibold opacity-80'>Projects</h2>
                <div className='space-y-6 mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200'>
                    <div className='space-y-4'>
                        <h2 className='text-lg '>Add project</h2>
                        <Button className='p-2 text-xl text-black text-opacity-90 text-center w-full border-2 bg-gray-100'>+</Button>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-lg '>Your projects <span className='text-sm'>(3 projects are required to get verified)</span> </h2>
                       <div className='flex flex-wrap gap-4 justify-between'>
                            <div className='w-72 h-44 rounded-md border-2'>
                                <img src="https://img.freepik.com/free-photo/still-life-business-roles-with-various-mechanism-pieces_23-2149352652.jpg?t=st=1709646578~exp=1709650178~hmac=4ce6e235ab832c3cceac3d5db83e23c6a8c30f642d258d86b8042c920260e064&w=996" alt="project_picture" className='w-full h-full object-cover overflow-hidden'/>
                            </div>
                            <div className='w-72 h-44 rounded-md border-2'>
                                <img src="https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-358.jpg?t=st=1709646615~exp=1709650215~hmac=1f79ae4f20ee3f1205a823db842bfc75c4ea1f8be7f7c69470d1713d513066a5&w=996" alt="project_picture" className='w-full h-full object-cover overflow-hidden' />
                            </div>
                            <div className='w-72 h-44 rounded-md border-2'>
                                <img src="https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-358.jpg?t=st=1709646615~exp=1709650215~hmac=1f79ae4f20ee3f1205a823db842bfc75c4ea1f8be7f7c69470d1713d513066a5&w=996" alt="project_picture" className='w-full h-full object-cover overflow-hidden' />
                            </div>
                            
                       </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
                )
            }
          </div>
        </Container>
    </section>
  )
}

export default UserProfile