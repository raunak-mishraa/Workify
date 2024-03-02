import React, { useEffect, useState } from 'react'
import { Container } from '../../components'
import  Axios  from 'axios'
import { Link } from 'react-router-dom';

function MyPost() {
    const [loading, setLoading] = useState(true)
    Axios.defaults.withCredentials = true;
    const [postData, setPostData] = useState([])
    useEffect(() => {
         Axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/posts/mypost`)
         .then((res) => {
              setPostData(res.data.data)
              setLoading(false)
         })
         .catch((err) => console.log(err))
       
    }, [])
     console.log(postData)
    const handleDeletePost = (id) => {
        Axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/v1/posts/deletepost/${id}`)
        .then((res) => {
            console.log(res.data)
            setPostData(postData.filter((post) => post._id !== id))
        })
    }
  return (
    <section>
        <Container>
            <div className='rounded-md p-6 my-8  bg-gray-100 '>
                <div className='cursor-pointer mx-auto md:w-[70%] space-y-4 w-full'>
                {loading && <div className='w-full h-10 flex justify-center items-center'>Loading</div>}
                {
                    !loading && (postData.length > 0 
                    ? postData.map((post, index) => 
                        <div key={index} className='relative w-full font-poppins p-6 bg-white rounded-md'>
                            <h2 className='text-lg font-semibold text-black text-opacity-70'>{post.title}</h2>
                           <div className='overflow-hidden'>
                             <p className='line-clamp-4 leading-normal text-sm font-medium text-black text-opacity-50'>{post.description}</p>
                           </div>
                            <i className='absolute right-3 w-8 h-8 flex justify-center items-center rounded-full bg-gray-100 top-2 ri-delete-bin-5-line text-black text-opacity-90' onClick={()=>handleDeletePost(post._id)}></i>
                        </div>
                    )
                    :(<div className='flex justify-center items-center flex-col gap-3'>
                        <div className='w-10 h-10 flex justify-center items-center rounded-full opacity-35 border-2 border-gray-950'>
                            <i class="ri-pencil-fill"></i>
                        </div>
                        <h1 className='text-center font-poppins text-black text-opacity-70 font-bold text-xl'>You Don't Have Any Post Yet</h1>
                        <Link to='/createpost' className='cursor-pointer bg-blue-600 p-2 text-sm text-white rounded-md'>Create Post <i className="ri-add-line"></i></Link>
                    </div>))
                    }
                </div>
            </div>
        </Container>
    </section>
  )
}

export default MyPost


