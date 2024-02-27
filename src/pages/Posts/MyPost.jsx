import React, { useEffect } from 'react'
import { Container } from '../../components'
import  Axios  from 'axios'
import { Link } from 'react-router-dom';

function MyPost() {
    Axios.defaults.withCredentials = true;
    const [postData, setPostData] = React.useState([])
    useEffect(() => {

         Axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/posts/mypost`)
        //  Axios.get("http://localhost:8000/api/v1/posts/mypost")
         .then((res) => {
            console.log(`${import.meta.env.VITE_SERVER_URL}/api/v1/posts/mypost`)
            console.log(res.data.data)
              setPostData(res.data.data)
         })
       
    }, [])
     console.log(postData)
    const posts = {
        title: "Write a note on technology",
        description: "Post Description",
        budget: "1000",
        category: "web development",
    }
  return (
    <section>
        <Container>
            <div className='rounded-md p-6 my-8  bg-gray-100 '>
                <div className='cursor-pointer mx-auto md:w-[70%] space-y-4 w-full'>
                    {
                    postData.length > 0 
                    ? postData.map((post, index) => 
                        <div key={index} className='w-full font-poppins p-4 bg-white rounded-md'>
                            <h2 className='text-lg font-semibold text-black text-opacity-70'>{post.title}</h2>
                            <p className='text-sm font-medium text-black text-opacity-50'>{post.description}</p>
                        </div>
                    )
                    :(<div className='flex justify-center items-center flex-col gap-3'>
                        <div className='w-10 h-10 flex justify-center items-center rounded-full opacity-35 border-2 border-gray-950'>
                            <i class="ri-pencil-fill"></i>
                        </div>
                        <h1 className='text-center font-poppins text-black text-opacity-70 font-bold text-xl'>You Don't Have Any Post Yet</h1>
                        <Link to='/createpost' className='cursor-pointer bg-blue-600 p-2 text-sm text-white rounded-md'>Create Post <i className="ri-add-line"></i></Link>
                    </div>)
                    }
                </div>
            </div>
        </Container>
    </section>
  )
}

export default MyPost
