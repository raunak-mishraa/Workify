import React from 'react'
import { Container } from '../../components'
import { useSelector } from 'react-redux'

function ApplicantInfo() {
  const [isActive, setIsActive] = React.useState(false)
  const applicantsData = useSelector((state) => state.application.applicationData)
console.log(applicantsData)
  const popup = () => {
    setIsActive(!isActive)
  }
  return (
    <section className='bg-gray-50 py-10'>
        <Container>
            <div className='space-y-10 max-w-4xl mx-auto bg-white font-assistant rounded-lg p-6 '>
               <div className='space-y-1.5'>
                    <h2 className='text-base font-semibold  text-black text-opacity-90'>Applicant Information</h2>
                    <p className='text-sm font-medium opacity-60'>Personal details and application.</p>
               </div>
               <div className='space-y-6'>
                    <div className='flex'>
                        <div className='w-1/3'>Full name</div>
                        <div className='w-2/3 opacity-70'>{applicantsData?.userId.fullName}</div>
                    </div>
                    <hr className='border-b border-gray-100'/>
                    <div className='flex'>
                        <div className='w-1/3'>Application for</div>
                        <div className='space-y-1 w-2/3'>
                          <h2 className='first-letter:capitalize opacity-75 font-medium'>{applicantsData?.postId.title}</h2>
                          <h2 className='first-letter:capitalize opacity-70'>{applicantsData?.postId.description}</h2>
                          </div>
                    </div>
                    <hr className='border-b border-gray-100'/>
                    <div className='flex'>
                        <div className='w-1/3'>Email Address</div>
                        <div className='w-2/3 opacity-70'>{applicantsData?.userId.email}</div>
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
                            <div onClick={()=>popup()} className='max-w-sm h-56 rounded-md p-2 border-2'>
                              <img src={applicantsData?.attachment} className='object-cover w-full h-full' alt="" />
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