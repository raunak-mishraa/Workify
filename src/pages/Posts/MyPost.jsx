import React, { useEffect } from 'react'
import { Container } from '../../components'
import  Axios  from 'axios'

function MyPost() {
    Axios.defaults.withCredentials = true;
    const [postData, setPostData] = React.useState([])
    useEffect(() => {
         Axios.get(`${import.meta.env.VITE_SERVER_URL}/posts/mypost`)
         .then((res) => {
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
                    {postData.map((post, index) => <div key={index} className='w-full font-poppins p-4 bg-white rounded-md'>
                        <h2 className='text-lg font-semibold text-black text-opacity-70'>{post.title}</h2>
                        <p className='text-sm font-medium text-black text-opacity-50'>{post.description}</p>
                    </div>)}
                    {/* <div className='font-poppins p-4 bg-white rounded-md'>
                        <h2 className='text-lg font-semibold text-black text-opacity-70'>{posts.title}</h2>
                        <p className='text-sm font-medium text-black text-opacity-50'>{posts.description}</p>
                    </div> */}
                    
               </div>
            </div>
        </Container>
    </section>
  )
}

export default MyPost