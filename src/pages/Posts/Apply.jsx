import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container } from '../../components'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Apply() {
  const selectedPost = useSelector((state) => state.post.selectedPost);
  console.log(selectedPost)
  const navigate = useNavigate()
  const {id}= useParams()
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    attachment: '',
    // postId: id,
  })

  const handleApply = async() => {
    // alert('Applied')
    const formData = new FormData();
    formData.append('coverLetter', applicationData.coverLetter);
    formData.append('postId', applicationData.postId);
    formData.append('attachment', file);

    console.log(applicationData)

    try {
      setLoading(true)
      Axios.defaults.withCredentials = true;
      const response = await Axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/applications/createapplication/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });  
      if(response.data){
        setLoading(false)
        toast.success('Application submitted successfully');
        applicationData.coverLetter = '';
        setFile(null);
        navigate('/myapplication');
      }
    } 
    catch (error) {
      setLoading(false)
      toast.error('Application failed to submit');
      console.log(error);
    }

  }
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setApplicationData({
      ...applicationData,
      [name]: value
    })
  }
  return (
    <section>
      <Container>
        <div className='font-poppins mb-10 space-y-4'>
          <div className='mt-10 py-6 '>
            <h1 className='text-3xl font-bold text-black text-opacity-80'>Apply for Project</h1>
          </div>
          <div className='rounded-lg p-6 border-2'>
            <div>
              <h2 className='text-lg opacity-75 font-bold'>Job details</h2>
            </div>
            <div className='mt-4 space-y-2'>
              <h2 className='text-base font-semibold text-opacity-80 text-black'>{selectedPost?.title}</h2>
              <div className=''>
                <span className='p-2 px-3 text-xs  rounded-md border-1 bg-gray-100 inline-block opacity-90'>{selectedPost?.category}</span>
                <span className='p-2 px-3 text-xs inline-block opacity-90'>Posted Feb 29, 2024</span>
              </div>
              <p className='text-sm opacity-85'>{selectedPost?.description}</p>
            </div>
            <hr className=' my-4 h-0.5 bg-gray-300 opacity-70'/>
            <div>
              <h2 className='text-base font-medium opacity-95 text-black'>Skills Required</h2>
              <div className='space-x-2 mt-4'>
                {selectedPost?.tags.map((tag)=>(
                  <span className='p-2 px-3 text-xs  rounded-md border-1 bg-gray-100 inline-block opacity-90'>{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className='rounded-lg p-6 border-2'>
            <div>
              <h2 className='text-lg opacity-75 font-bold'>Cover Letter</h2>
            </div>
            <div className='mt-4 space-y-2'>
              <textarea 
              className='w-full p-4 border-2 rounded-lg focus:outline-gray-400' 
              rows={10} 
              placeholder='Write a cover letter'
              name='coverLetter'
              value={applicationData.coverLetter}
              onChange={handleChange}></textarea>
              <div>
              <h2 className='mt-4 font-semibold opacity-75'>Attachments <span className='text-sm opacity-75'>(jpg or png files)</span></h2>
              </div>
              <div className='relative border-dashed grid items-center bg-gray-50 w-full p-4 py-8 border-2 rounded-md focus:outline-gray-400' >
                <input type="file" className="cursor-pointer absolute block opacity-0 w-full h-full z-50" onChange={(e) => setFile(e.target.files[0])} />
                  <h2 className='text-center'>Drop or upload project files</h2>
              </div>
            </div>
          </div>
          <Button onClick={() =>handleApply()} className={`${!loading ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-white text-gray-900'} p-3  rounded-lg border border-gray-200 w-1/5 `}>{loading && 
          (<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
            </svg>)
            }{loading ? 'Sending' : 'Apply'}</Button>
        </div>
      </Container>
    </section>
  )
}

export {Apply}

