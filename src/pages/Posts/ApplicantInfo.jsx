import React from 'react'
import { Container } from '../../components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
function ApplicantInfo() {
  const [isActive, setIsActive] = React.useState(false)
  const [applicantsData, setApplicantsData] = React.useState([])
  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    // Fetch applicant data
    const fetchApplicantData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/applications/getapplication/${id}`);
        setApplicantsData(response.data.data)
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching applicant data:", error);
      }
    };
  
    fetchApplicantData();
  }, [id]);

  const popup = () => {
    setIsActive(!isActive)
  }
  function downloadAttachment(url) {
    // Create a temporary anchor element
    var anchor = document.createElement('a');
    anchor.href = url;
    // Set the download attribute to force download
    anchor.setAttribute('download', true);
    // Trigger a click event to initiate the download
    anchor.click();
}

  return (
    <section className='bg-gray-50 py-10'>
        <Container>
            <div className='space-y-10 max-w-4xl mx-auto bg-white font-assistant rounded-lg p-6 '>
               <div className='space-y-1.5'>
                    <h2 className='text-base font-semibold  text-black text-opacity-90'>Applicant Information</h2>
                    <p className='text-sm font-medium tracking-wide opacity-60'>Personal details and application.</p>
               </div>
               <div className='space-y-6'>
                    <div className='flex'>
                        <div className='w-1/3'>Full name</div>
                        <div className='w-2/3 opacity-70'>{applicantsData?.userId?.fullName}</div>
                    </div>
                    <hr className='border-b border-gray-100'/>
                    <div className='flex'>
                        <div className='w-1/3'>Application for</div>
                        <div className='space-y-1 w-2/3'>
                          <h2 className='first-letter:capitalize opacity-80 font-semibold '>{applicantsData?.postId?.title}</h2>
                          <h2 className='first-letter:capitalize opacity-70'>{applicantsData?.postId?.description}</h2>
                          </div>
                    </div>
                    <hr className='border-b border-gray-100'/>
                    <div className='flex'>
                        <div className='w-1/3'>Email Address</div>
                        <div className='w-2/3 opacity-70'>{applicantsData?.userId?.email}</div>
                    </div>
                    <hr className='border-b border-gray-100'/>
                    <div className='flex'>
                        <div className='w-1/3'>Cover Letter</div>
                        <div className='w-2/3 opacity-70'>{applicantsData?.coverLetter}</div>
                    </div>
                    <hr className='border-b border-gray-100'/>
                    <div className='flex'>
                        <div className='w-1/3'>Attachment</div>
                          <div className='w-2/3'>
                            {/* <div onClick={()=>popup()} className='max-w-sm h-56 rounded-md p-2 border-2'>
                              <img src={applicantsData?.attachment} className='object-cover w-full h-full' alt="" />
                            </div> */}
                            <div className='space-x-2 p-2 border-2 w-max rounded-md'>
                              <i className="ri-link-m text-black text-opacity-80"></i>
                              <button 
                                onClick={() => downloadAttachment(applicantsData?.attachment)} 
                                className='text-black text-opacity-80 border-none bg-transparent cursor-pointer'
                            >
                                Download Attachment
                            </button>
                            </div>
                          </div>
                        </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ApplicantInfo