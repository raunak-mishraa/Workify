import React from 'react'
import Container from './container/Container'
import { useDispatch, useSelector } from 'react-redux'
import { selectPost } from '../../store/postSlice'
import { useNavigate } from 'react-router-dom'

function Search() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isClient = useSelector((state) => state.auth.userData?.user?.isClient)
    const searchData = useSelector((state) => state.search.freelancerData)
    const searchClientData = useSelector((state) => state.search.clientPostData)
    console.log(searchClientData)

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

  const handleClick = (post) => {
    navigate('/post')
    localStorage.setItem('selectedPostData', JSON.stringify(post));
    dispatch(selectPost(post));
  };

  return (
    <section>
        <Container>
            <div className={`rounded-md sm:p-6 my-8 ${isClient && " bg-gray-50"} `}>
            {
                isClient ? (
                    searchData?.length > 0 
                    ? (   <div className='flex justify-around font-poppins flex-wrap'>
                    { searchData.map((data) =>(
                    <div key={data._id} className=' w-1/3 p-4 gap-2 items-center bg-white rounded-md flex'>
                    <div>
                        <img src={data?.avatar} alt="client_profile" className='w-20 h-20 p-1 border-2 rounded-md object-cover' />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold first-letter:capitalize font-poppins opacity-85'>{data?.fullName}</h2>
                        <p className='text-sm font-medium opacity-75'>{data?.profession}</p>
                    </div>
                </div>
                    ))}
                </div> ) 
                    : <h1 className='text-2xl opacity-85 font-semibold text-center'>No result found</h1>
 
                ) : (<div>
                    {
                       searchClientData?.length > 0 ? (
                           <div className='flex bg-white justify-around font-poppins flex-wrap'>
                              { searchClientData.map((post, index) => (
                               <div key={index} onClick={() => handleClick(post)} className='inline-block cursor-pointer mb-2 w-full'>
                               <div className='p-4 w-full flex gap-3 rounded-md border-2'>
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
                                       {/* <i onClick={(event) => {
                                         event.stopPropagation();
                                         toggleSave(post?._id) 
                                         }} className={`${postId[post._id] ? "ri-bookmark-fill" : "ri-bookmark-line"} text-lg`}></i> */}
                                       </div>
                                     </div>
                                   </div>
                                   <div className='mt-2 space-y-2 font-poppins'>
                                    <h2 className='font-medium opacity-90 text-sm capitalize'>{post?.title}</h2>
                                    <div className='overflow-hidden'>
                                      <h2 className='line-clamp-3 leading-normal font-normal text-black text-opacity-65 text-sm tracking-wide'>{post.description}</h2>
                                    </div>
                                    <div className='flex gap-2 flex-wrap'>
                                      {post?.tags.map((tag, index) => (
                                        <span key={index} className='text-xs bg-gray-100 px-2 py-1 rounded-md mr-2'>{tag}</span>
                                      ))}
                                    </div>
                                  </div>
                                 </div>
           
                               </div>
                             </div>
                             ))}
                           </div>
                       ) : <h1 className='text-2xl opacity-85 font-semibold text-center'>No result found</h1>
                    }
                    </div>
                    )}
            </div>
        </Container>
    </section>
  )
}

export default Search

