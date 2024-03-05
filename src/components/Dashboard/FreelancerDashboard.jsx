import React, { useEffect, useState } from 'react'
import { Container } from '../index.js'
import { useDispatch, useSelector } from 'react-redux'
import  dashboardImg  from '../../assets/images/dashboard.png'
import { toast } from 'react-toastify'
import  Axios  from 'axios'
import { selectPost, bookmarkPost } from '../../../store/postSlice.js';
import { useNavigate } from 'react-router-dom'

function FreelancerDashboard() {
  // const bookmarkPostData = useSelector((state) => state.post.bookmarkedPost)
  const userData = useSelector((state) => state.auth.userData)
  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState('')
  // const [savedPosts, setSavedPosts] = useState({});
  // const [bookmarkedPost, setBookmarkedPost] = useState([]);
  const [tabs, setTabs] = useState('recent')
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TO DO: // Fetch all posts from the server
  useEffect(() => {
    Axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/posts/allposts`)
    .then((res) => {
      setPosts(res.data.data)
      setLoading(false);
      console.log("all",res.data.data)
    })
    .catch((err) => {
      console.error("Error fetching posts:", err);
      setLoading(false); 
      toast.error("Error fetching posts. Please try again later.");
    })
  }, [])


  //FETCH BOOKMARKED POSTS

// console.log(savedPosts)

  // const toggleSave = (postId) => {
  //   const newSavedPosts = {...savedPosts};
  //   newSavedPosts[postId] = !newSavedPosts[postId];
  //   setSavedPosts(newSavedPosts);
  //   console.log(savedPosts)
  //   if (newSavedPosts[postId]) {
  //     toast.info("Post bookmarked!", { autoClose: 2000 });
  //   } else {
  //     toast.info("Bookmark removed!", { autoClose: 2000 });
  //   }
  // };

  const toggleTabs = (tab) => {
    setTabs(tab)
  }

  //to select a post
  const handleClick = (post) => {
    localStorage.setItem('selectedPostData', JSON.stringify(post));
    dispatch(selectPost(post));
  };
  const postedTime = (timestamp) => {
    const currentDate = new Date();
    const postDate = new Date(timestamp);
  
    const differenceInSeconds = Math.floor((currentDate - postDate) / 1000);
  
    // Calculate time difference
    if (differenceInSeconds < 60) {
      return 'just now';
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `Posted ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `Posted ${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return 'Posted more than a day ago';
    }
  }

  const toggleSave = (postId) => {}

  return (
    <section className='text-left'>
      <Container>
        <div className='flex flex-wrap md:flex-nowrap gap-6 w-full'>
          <div className='flex justify-between text-left md:w-4/5 bg-gradient-to-tr rounded-md from-cyan-500 to-blue-600 w-full'>
            <div className='p-9'>
              <div className='space-y-2'>
                <h2 className='text-2xl text-white font-poppins font-semibold capitalize'>"Welcome {userData?.user?.fullName}"</h2>
                <p className='leading-7 text-xl text-white font-semibold'>Dive into endless opportunities and creative ventures.<br></br> Let your skills shine bright on our platform.</p>
              </div>
                <div className='mt-8 flex bg-white py-2 px-3 border border-gray-200 rounded outline-none md:w-80 w-full'>
                  <input type="search" name="searchValue" id=""  placeholder='Search Jobs' className='outline-none w-full bg-transparent' />
                  <i className="ri-search-line"></i>
                </div>
                </div>
                <div className='w-1/3 relative hidden md:block'>
                  <div className='absolute  left-10 w-2/3 h-4/5 bg-white rounded-full bottom-0'></div>
                    <img src={dashboardImg} className='drop-shadow-md h-full w-full object-cover' alt="image" />
                </div>
          </div>
          <div className='text-left p-3 pt-5 md:w-1/5 w-full rounded-sm bg-gray-50 border-2'>
            <h2 className='font-bold text-black text-opacity-80 font-poppins text-xl'>Why Workify?</h2>
            <div className='space-y-2 mt-2'>
              <p className='font-medium text-black text-opacity-70'><i className="ri-user-3-line w-6 h-6 p-1 rounded-full border-2"></i> Quality Freelancer</p>
              <p className='font-medium text-black text-opacity-70'><i className="ri-wallet-3-line w-6 h-6 p-1 rounded-full border-2"></i> low commission</p>
              <p className='font-medium text-black text-opacity-70'><i className="ri-verified-badge-line w-6 h-6 p-1 rounded-full border-2"></i> Verified client</p>
              <p className='font-medium text-black text-opacity-70'><i className="ri-list-check w-6 h-6 p-1 rounded-full border-2"></i> Job listing</p>
            </div>
          </div>
        </div>
        <div className='mt-8 pl-0 font-poppins font-medium text-black text-opacity-75'>
          <div>
            <h2>Works you might like</h2>
            <div className='mt-4'>
              <ul className='mb-8 flex gap-6 text-xs'>
                <li className={`${
                  tabs === 'recent' ? 'text-blue-500 border-blue-500 border-b-2' : ''
                } cursor-pointer pb-2`}>
                  <button onClick={()=>{
                  toggleTabs('recent')
                  }}
                  >Recent</button>
                </li>
                <li className={`${
                  tabs === 'bookmarked' ? 'text-blue-500 border-blue-500 border-b-2' : ''
                } cursor-pointer pb-2`}>
                  <button onClick={()=>{
                    toggleTabs('bookmarked')
                  }}
                  >Bookmarked</button>
                </li>
              </ul>
              {/* this below is for recent */}
              {!loading && posts.length === 0 ? (
                <p className='text-center'>No post found</p>
              ):
              (null)
              }
              <div className={`${tabs === 'recent' ? 'block' : 'hidden'}`}>
                {loading && <div className="text-center">Loading...</div>}
                { !loading && (
                  posts.map((post, index) => (
                    <div key={index} onClick={() => {
                      handleClick(post)
                      navigate('/post')
                      }} className='inline-block cursor-pointer mb-2 w-full'>
                    <div className='p-2 md:p-4 w-full flex gap-3 rounded-md border-2'>
                      <div className=''>
                        <div className='border-2 border-gray-100 p-1 rounded-full w-14 h-14'>
                          <img src={post?.client?.avatar} className='w-full object-cover h-full rounded-full' alt="" />
                        </div>
                      </div>

                      <div className='font-poppins pt-2 w-full'>
                        <div className='flex justify-between'>
                          <div>
                            <h2 className='font-semibold capitalize '>{post?.client?.fullName}</h2>
                            <p className='text-xs'> {postedTime(post.createdAt)}</p>
                          </div>
                          <div className='flex items-center gap-7'>
                            <h3 className='text-sm'>Budget: {post?.budget}$</h3>
                            <div>
                            <i onClick={(event) => {
                              event.stopPropagation();
                              toggleSave(post?._id) 
                              }} className={`${postId[post._id] ? "ri-bookmark-fill" : "ri-bookmark-line"} text-lg`}></i>
                            </div>
                          </div>
                        </div>
                        <div className='mt-2 space-y-2 font-poppins'>
                          <h2 className='font-semibold text-sm capitalize'>{post?.title}</h2>
                          <div className='overflow-hidden'>
                            <h2 className='line-clamp-3 leading-normal font-normal text-black text-opacity-65 text-sm tracking-wide'>{post.description}</h2>
                          </div>
                          <div>
                            {post?.tags.map((tag, index) => (
                              <span key={index} className='text-xs bg-gray-100 px-2 py-1 rounded-md mr-2'>{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  ))
                  )
                }
                </div>
              {/* this below id for bookmarked */}
              
              
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FreelancerDashboard

