import React from 'react'
import { Container } from '../components'

function Policy() {
  return (
    <Container>
        <div className='bg-gray-100'>
        <div className=" py-8 px-4">
        <h1 className="sm:text-3xl text-2xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-gray-600 mt-1">Effective Date: [22/02/2024]</p>
        </div>
        <section className="py-8 px-6 sm:px-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">1. Information We Collect:</h2><br/>
            
            <h3 className="sm:text-xl text-lg font-bold text-gray-700">1.1. Personal Information:</h3>
            <p className="text-gray-600">When you register on Workify, we may collect personal information such as your name, email address, and other relevant details.</p><br/>
            
            <h3 className="sm:text-xl text-lg font-bold text-gray-700">1.2. Usage Data:</h3>
            <p className="text-gray-600">We collect information about how you interact with our platform. This includes data on gigs viewed, projects taken, and other user activity.</p>
        </section>
        <section className="py-8 px-6 sm:px-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">2. How We Use Your Information:</h2><br/>
        
        <h3 className="pl-18 sm:text-xl text-lg font-bold text-gray-700">2.1. Personalization:</h3>
        <p className="text-gray-600 pl-18">Your information allows us to personalize your freelancing experience, providing you with relevant gigs, recommendations, and large projects.</p><br/>
        
        <h3 className="pl-18 sm:text-xl text-lg font-bold text-gray-700">2.2. Communication:</h3>
        <p className="text-gray-600 pl-18">We may use your email address to send you updates, notifications, and important announcements related to your Workify account.</p><br/>
        
        <h3 className="pl-18 sm:text-xl text-lg font-bold text-gray-700">2.3. Analytics:</h3>
        <p className="text-gray-600 pl-18">We analyze user data to improve our platform, enhance user experience, and develop new features.</p><br/>
        </section>
        <section className="py-8 px-6 sm:px-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">3. Information Sharing:</h2><br/>
        
        <h3 className="pl-18 sm:text-xl text-lg font-bold text-gray-700">3.1. Third-Party Services:</h3>
        <p className="text-gray-600 pl-18">Workify may use third-party services to facilitate our services. These services may have access to your personal information but are bound by confidentiality and privacy obligations.</p><br/>
        
        <h3 className="pl-18 sm:text-xl text-lg font-bold text-gray-700">3.2. Legal Compliance:</h3>
        <p className="text-gray-600 pl-18">We may disclose your information when required by law, or in response to valid requests from public authorities.</p><br/>
    </section>

    <section className="py-8 px-6 sm:px-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">4. Your Choices:</h2><br/>
        
        <h3 className="pl-18 sm:text-xl text-lg font-bold text-gray-700">4.1. Account Settings:</h3>
        <p className="text-gray-600 pl-18">You can manage your account settings, update your personal information, and adjust privacy preferences through your Workify account.</p><br/>
        
        <h3 className="pl-18 sm:text-xl text-lg font-bold text-gray-700">4.2. Opting Out:</h3>
        <p className="text-gray-600 pl-18">You have the option to opt-out of promotional emails by following the unsubscribe instructions provided in the email.</p><br/>
    </section>

    <section className="py-8 px-6 sm:px-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">5. Security:</h2><br/>
        <p className="text-gray-600 pl-18">We take the security of your information seriously and employ industry-standard measures to protect against unauthorized access, alteration, disclosure, or destruction.</p><br/>
    </section>

    <section className="py-8 px-6 sm:px-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">6. Children's Privacy:</h2><br/>
        <p className="text-gray-600 pl-18">Workify is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you 
are a parent or guardian and believe that your child has provided us with personal information, please contact us.</p><br/>
    </section>

    <section className="py-8 px-6 sm:px-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">7. Changes to this Privacy Policy:</h2><br/>
        <p className="text-gray-600 pl-18">Workify reserves the right to update this Privacy Policy. We will notify you of any changes by posting the new Privacy Policy on this page.</p><br/>
    </section>

    <section className="py-8 px-6 sm:px-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">8. Contact Us:</h2><br/>
        <p className="text-gray-600 pl-18">If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:privacy@workify.com">privacy@workify.com</a>.</p><br/>
    </section>

        </div>
    </Container>
  )
}

export default Policy