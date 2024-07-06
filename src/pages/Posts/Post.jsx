import React, { useEffect, useState } from 'react'
import { Button, Container } from '../../components'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Post() {
  const navigate = useNavigate();
  const [savedPost, setSavedPost] = useState()
  const [post, setPost] = useState()
  const {postId} = useParams();
  console.log(postId)
  // const selectedPost = useSelector((state) => state.post.selectedPost);
  const isUser = useSelector((state) => state.auth.status);
  // console.log(selectedPost)
  const timestamp = post?.createdAt;
  const postedTime = () => {
    const currentDate = new Date();
    const postDate = new Date(timestamp);
  
    const differenceInSeconds = Math.floor((currentDate - postDate) / 1000);

    if (differenceInSeconds < 60) {
      return 'just now';
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return 'Posted more than a day ago';
    }
  }

  // //

  // //toggle save
  // const toggleSave = (postId) =>{
  //   setSavedPost((prev)=>!prev)
  //   axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/posts/toggle-bookmark`,{postId}, {withCredentials:true})
  //   .then((res)=>{
  //     setSavedPost(res.data.data.bookmarkedPosts)
  //     toast.success("Bookmarked updated successfully")
  //     console.log(res.data.data.bookmarkedPosts)
  //   })
  //   .catch((e)=>{
  //     console.log(e)
  //   })
  // }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/posts/get-single-post/${postId}`, {withCredentials:true});
        console.log(response.data)
        setPost(response.data.data)
      } catch (error) {
        if(error){
          dispatch(logout());
          navigate('/login')
      }
      }
    }
    fetchPost();
  }, [])
 
  return (
    // <h1>posts</h1>
    <section>
        <Container>
           <div className='flex flex-wrap'>
           <div className='py-4 sm:py-10 sm:w-4/6 w-full font-poppins'>
                        <h1 className="text-3xl font-semibold text-black text-opacity-75">{post?.title}</h1>
                        <p className='mt-2 text-black text-opacity-60 font-medium'>Posted {postedTime()}</p>
                        <hr className='bg-gray-200 mt-6 h-0.5'/>
                        <p className='py-8 text-sm opacity-80 tracking-wide'>{post?.description}</p>
                        <hr className='bg-gray-200 h-0.5'/>
                        <div className='flex flex-wrap sm:flex-nowrap gap-6 sm:gap-36'>
                          <div className='flex items-start gap-1 py-4'>
                              <i className="ri-exchange-dollar-line text-2xl opacity-80"></i>
                            <div className='text-black text-opacity-80'>
                              <span className='text-lg font-semibold'>{post?.budget}$</span>
                              <p className='text-xs font-medium'>Budget</p>
                            </div>
                          </div>
                          <div className='flex items-start gap-1 py-4'>
                          <i className="ri-lightbulb-line text-2xl opacity-80"></i>
                          <div className='text-black text-opacity-80'>
                              <span className='text-lg font-semibold'>Skills Required</span>
                              <div className='my-2 flex flex-wrap gap-2 items-center '>
                                {/* // Skillls */}
                                {
                                  post?.tags.map((skill, index) => (
                                    <span key={index} className='bg-gray-100 px-2 py-1 rounded-md text-xs font-medium'>{skill}</span>
                                  ))
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className='font-poppins sm:w-2/6 w-full sm:py-10'>
                      <div className='sm:w-[60%] w-full sm:ml-auto'>
                        <div className='space-y-3'>
                          <Button onClick={() => isUser ? navigate(`/apply/${post._id}`) : navigate('/login')} className='py-2 w-full bg-gradient-to-r from-cyan-600 to-blue-500 rounded-xl text-white '>Apply now</Button>
                          <Button onClick={() => toggleSave(post._id)} className={`${savedPost ? 'bg-black text-white rounded' : 'bg-gradient-to-r border-blue-500 rounded-xl text-black'} py-1.5 w-full border-2  text-opacity-80 font-semibold`}>{savedPost ? "Saved" : "Save"} Job</Button>
                        </div>
                        <div className='mt-20 space-y-6'>
                            <div>
                              <h2 className='font-semibold opacity-75 text-base'>About the client</h2>
                              <hr className='h-0.5 mt-1 bg-gray-200'/>
                            </div>
                            <div className='text-black text-opacity-75 space-y-1'>
                             <div className=' flex items-center gap-2'>
                              <img src={post?.client.avatar} className='w-7 h-7 object-cover rounded-full' alt="" />
                              <div>
                                <h3 className='text-sm font-semibold capitalize'>{post?.client.fullName}</h3>
                                <h3 className='text-sm font-medium'><i className="ri-verified-badge-fill text-blue-700"></i> Payment Verified</h3>
                              </div>
                             </div>
                              
                            </div>
                        </div>
                      </div>
                    </div>
           </div>
        </Container>
    </section>
  )
}

export {Post}