    import React, { useRef, useState,useEffect } from 'react'
    import { Button, Container, Input} from "../../../index"
    import { Link, useNavigate } from 'react-router-dom'
    import { useDispatch, useSelector } from 'react-redux'
    import { updateUserAvatar } from '../../../../../store/authSlice'
    import  Axios  from 'axios'
    import { countries } from '../../../../assets/Data/country'
    import { toast } from 'react-toastify'
    import { skills as skillList } from '../../../../assets/Data/skills'
    import { useQuery } from '@tanstack/react-query'
    import newRequest from '../../../../assets/utils/newRequest'
    function UserProfile() {
        const navigate = useNavigate()
        const dispatch = useDispatch()
        const userData = useSelector(state => state.auth.userData)
        const [tabs, setTabs] = React.useState('profile')
        const [openSkillBtn, setOpenSkillBtn] = useState(false)
        const [openAddProjects, setOpenAddProjects] = useState(false)
        // const [countryName, SetCountryName] = useState('India')
        const [skill, setSkill] = useState('')
        const [skills, setSkills] = useState([]);
        const [deleteMessage, setDeleteMessage] = useState('')
        const [projectData, setProjectData] = useState()
        const [skillList, setSkillList] = useState('');
        const [project, setProject] = useState({
            title: '',
            projectUrl: ''
        })
        
    
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

        const deleteAccount = () => {
            const yn = confirm('Are you sure you want to delete your account?');
            if (yn) {
                navigate('/deleteaccount');
            }
        };


        //is verified
        const isVerified = () =>{
            const verified = userData?.user?.isVerified;
            console.log(verified, "isVerified")
            if(verified){
                return true;
            }
            else{
                return false;
            }
        }
    //Verify user
        const verifyUser = () => {
            if(isVerified()){
                // alert("You are already verified!")
                return;
            }
            else{
                Axios.put(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/verify`,{
                    isVerified: true
                },{
                    withCredentials:true
                })
                .then((res) => {
                    const userData = JSON.parse(localStorage.getItem('userData'))
                    const values = localStorage.setItem('userData', JSON.stringify({...userData, user: {...userData.user, isVerified: true}}));
                    console.log(values, "values")
                    toast.success(res.data.message)
                })
                .catch((e) => {
                    console.log(e)
                })
            }
            // Axios.put(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/verify`,{
            //     isVerified: true
            // },{
            //     withCredentials:true
            // })
            // .then((res) => {
            //     // console.log(res.data)
            //     toast.success(res.data.message)
            // })
            // .catch((e) => {
            //     console.log(e)
            // })
        }
        function updateProjectData(){
            console.log('h')
            try {
                newRequest.get(`/project`)
                .then((res) => {
                    // console.log("takatak",res.data.data.length)
                    setProjectData(res.data.data)
                })
                // Handle response data
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        }
            //fetching projectdata
            useEffect(() => { 
                updateProjectData()
            }, [project, deleteMessage]);

        

        //Add project
        const addProject = () => {
            console.log(project)
            Axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/project`,project,{
                withCredentials:true
            })
            .then((res) => {   
                // console.log("Project Data Length:", projectData.length);
                toast.success("Project added successfully");
                setProject({
                    title: '',
                    projectUrl: ''
                });
                if(projectData?.length >= 2){
                    verifyUser()
                }
                
            })
            .catch((e) => {
                console.log("error", e)
                toast.error("both the fields are required!")
            })
        }

        const removeVerification = () => {
            if(!isVerified()){
                // alert("You are already unverified!")
                return;
            }
            else{
                // console.log("remove verification")
            Axios.put(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/verify`,{
                isVerified: false
            },{
                withCredentials:true
            })
            .then((res) => {
                console.log("remove verification")
                const userData = JSON.parse(localStorage.getItem('userData'))
                localStorage.setItem('userData', JSON.stringify({...userData, user: {...userData.user, isVerified: false}}));
                console.log(res.data)
                // toast.success(res.data.message)
            })
            .catch((e) => {
                console.log(e)
            })
            }
        }
        const handleDeleteProject = (projectId) => {
            Axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/v1/project/${projectId}`,{
                withCredentials:true
            })
            .then((res) => {
                // console.log(projectData.length)
                toast.success("Project deleted successfully")
                console.log(res.data)
                setDeleteMessage(res.data)
                console.log(projectData.length)
                if(projectData?.length===3){
                    // alert("You need to add atleast 3 projects to get verified!")
                    removeVerification()
                }
                // console.log(projectData.length)
                
            })
        }


    

        //Add projects to state
        const handleChange = (e) =>{
            let name = e.target.name;
            let value = e.target.value;
            setProject({
            ...project,
            [name]: value
            })
        }

    
    
        //Add skill
        const handleAddSkill = () => {
            if (skill.trim() !== '') {
                setSkills(prevSkills => [...prevSkills, skill.trim()]);
                setSkill('');
            }
        };

        //add skills
        const handleSubmit = async (e) => {
                e.preventDefault();
                await Axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/add-skill`, {
                    skills
                },{
                    withCredentials:true
                })
                .then((response)=>
                {
                    setSkill('')
                    setSkills([])
                    console.log(response.data);
                    toast.success(response.data.message, {
                        autoClose:1000
                    })
                    console.log(response.data.message);
                })        
            .catch (error=>{
                console.error(error);
            }) 
        };


        // render skills
        useEffect(() => {
            Axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/user-skill`, {
                withCredentials:true
            })
            .then((res)=>{
            setSkillList(res.data)
            })
        },[skills])


        //delete Skills
        const handleDeleteSkill = (skillValue) => {
            console.log(skillValue);
            Axios.defaults.withCredentials = true;
            Axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/delete-skill`, {
                data: { skillValue } 
            })
            .then((res) => {
                setSkills([])
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
        };
        


    return (
        <section className='max-w-6xl mx-auto font-poppins h-auto my-6 flex justify-center items-center'>
            <Container>
            <div className='flex flex-wrap sm:flex-nowrap justify-center h-full'>
            <div className='sm:w-2/6 w-full'>
                <div className='h-auto border-2 rounded-md p-4 border-gray-200 sticky top-20 left-0'>
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
                                {projectData?.length >= 3 && (
                                            <i className="ri-verified-badge-fill ml-1 text-base text-cyan-600"></i>
                                    )}
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
                        <div className='sm:w-5/6 p-4 w-full'>
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

                    <div className='sm:flex block space-y-2 sm:space-y-0 items-center justify-between mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200'>
                        <div className='relative'>
                            {/* <h2 className='text-lg '>Add Country</h2> */}

                            <select className='border p-2 sm:p-3 focus:outline-dashed text-black text-opacity-85 text-xs sm:text-base sm:w-auto w-full'>
                            { countries.map((country, i) => {
                                return(
                                    <option key={i} className='bg-gray-800 text-white ' value={ country.name }>{country.name}</option>
                                )
                            })
                        }
                            </select>
                            <div className='absolute -right-8 -top-4 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-1 py-1 rounded border border-blue-400'>Coming Soon</div>
                        </div>
                            <Button className='sm:w-24 w-full p-2 bg-black rounded-md text-white text-xs sm:text-base'>
                                Update
                            </Button>

                    </div>

                </div>
                    )
                }
                {
                    tabs === 'skills' && (
                        <div className='sm:w-5/6 p-4 w-full'>
                    <h2 className='text-2xl font-semibold opacity-80'>Skills</h2>
                    <div className='space-y-6 mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200'>
                    <div className='space-y-4'>
                            <h2 className='text-lg '>Add Skills</h2>
                            <Button onClick={() => setOpenSkillBtn((prev)=>!prev)} className='p-2 text-xl text-black text-opacity-90 text-center w-full border-2 h-full bg-gray-100'>+</Button>
                                <form  className={`${openSkillBtn ? "flex" : 'hidden'} justify-between items-center h-12 rounded-lg w-full`} onSubmit={handleSubmit}>
                                <textarea placeholder='Enter skills seprated with commas'  className='w-[80%] border p-3 h-full font-normal' onChange={(e)=>setSkill(e.target.value)} value={skill}></textarea>
                                <Button type='submit' onClick={handleAddSkill} className='bg-black w-[18%] rounded-md text-white p-2 h-full'>Add</Button>
                                </form>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='text-lg'>Your skills</h2>
                            <div className='space-y-3 font-poppins text-base'>
                                    {skillList?.length > 0 && (<div className='border-2 p-4 rounded-md flex flex-wrap gap-2'>
                                    {skillList?.map(skill =>(
                                        <span key={skill} className='text-xs p-2 rounded-lg bg-gray-100'>{skill} <i onClick={() =>handleDeleteSkill(skill)} className='ri-close-fill p-0.5 bg-gray-300 rounded-full cursor-pointer text-black ml-1'></i></span>
                                    ))}
                                    </div>)}
                            </div>
                        </div>
                    </div>
                    </div>
                    )
                }
            
                {
                    tabs === 'projects' && (
                        <div className='sm:w-5/6 p-4 w-full'>
                    <h2 className='text-2xl font-semibold opacity-80'>Projects</h2>
                    <div className='space-y-6 mt-4 bg-white font-medium rounded-md p-6 opacity-90  border-2 border-gray-200'>
                        <div className='space-y-4'>
                            <h2 className='text-lg '>Add project</h2>
                            <Button onClick={() => setOpenAddProjects((prev) => !prev)} className='p-2 text-xl text-black text-opacity-90 text-center w-full border-2 bg-gray-100'>+</Button>
                            <div className={`${openAddProjects ? "flex" : 'hidden'} rounded-lg w-full justify-between`}>
                                <div className='flex gap-1 flex-col w-[80%]'>
                                    <Input placeholder='Enter title of your project' 
                                    name="title" 
                                    onChange={handleChange} 
                                    value={project.title}
                                    className='w-full border p-3 h-full font-normal'/>
                                    <Input placeholder='Enter link of project'
                                    name="projectUrl" 
                                    onChange={handleChange} 
                                    value={project.projectUrl}
                                    className='w-full focus:bg-blue-100 border p-3 h-full font-normal'/>
                                </div>
                                <Button onClick={addProject} className='bg-black w-[18%] rounded-md text-white h-12 '>Add</Button>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='text-lg '>Your projects <span className='text-sm'>(3 projects are required to get verified)</span> </h2>
                        <div className='flex flex-wrap gap-4 justify-between'>
                            
                            {
                                projectData?.map(project => 
                                    (
                                        <div key={project?._id} className='w-full flex items-center p-2 px-4 rounded-lg justify-between font-poppins  bg-gray-100'>
                                            <div className='first-letter:capitalize font-bold text-black text-opacity-85 sm:text-base text-sm'>{project?.title}</div>
                                            <div className='hidden sm:flex items-center gap-3 '>
                                                <div onClick={() => handleDeleteProject(project._id)} className='cursor-pointer text-white p-2 bg-black font-poppins w-20 text-center rounded-md font-medium'>Delete</div>
                                                <Link to={project?.projectUrl}  className='cursor-pointer text-black p-2 bg-gray-50 border-2 font-poppins w-20 text-center rounded-md font-medium'>Show</Link>
                                            </div>
                                            <div className='sm:hidden space-x-1'>
                                                <i className='ri-eye-line w-24 h-24 p-1 rounded-full bg-black text-white text-sm'></i>
                                                <i className="ri-delete-bin-6-line w-24 h-24 p-1 rounded-full bg-blue-500 text-white text-sm"></i>
                                            </div>
                                        </div>
                                        )
                                )
                            }
                                
                        </div>
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
