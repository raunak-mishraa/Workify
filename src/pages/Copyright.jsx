import React from 'react'
import { Container } from '../components'
import { Link } from 'react-router-dom'

function Copyright() {
  return (
    <section>
        <Container>
        <div className='bg-gray-100 py-10 px-6 font-poppins space-y-8'>
        <h1 className='text-2xl font-bold text-black text-opacity-75'>COPYRIGHT INFRINGEMENT POLICY</h1>

         <p className='text-gray-800 text-opacity-80 first-letter:capitalize leading-7'>workify respects the intellectual property rights of others. If you
         believe that your work has been copied in a way that constitutes copyright
         infringement, please provide workify's Copyright Agent with the
         information specified below in the form of a "Notification of Alleged
         Infringement." It is workify's policy to respond to clear Notifications
         of Alleged Infringement, and our policy is designed to make submitting
         Notifications of Alleged Infringement as straightforward as possible while
         reducing the number of Notifications that we receive that are fraudulent
         or difficult to understand or verify. If you are a User (as defined in the
         User Agreement at 
         <Link to="/about/terms"></Link>) or subscriber and
         concerned about the removal of or blocked access to your content, please
         provide 's Copyright Agent with the written information
         specified below in the form of a "Counter-Notification." The forms
         specified below are consistent with the forms suggested by the United
         States Digital Millennium Copyright Act (the text of which can be found at
         the U.S. Copyright Office Website at <a href="http://www.copyright.gov">http://www.copyright.gov</a>).</p>

         <h3 className='text-xl font-semibold text-black text-opacity-75'>DMCA NOTIFICATION OF ALLEGED COPYRIGHT INFRINGEMENT</h3>

         <p className='text-gray-800 text-opacity-80 first-letter:capitalize leading-7'> If you would like to submit a claim of copyright infringement for
         material, please substantiate each claim by sending workify's
         registered Copyright Agent a Notification of Claimed Infringement at the
         email or mailing address below:</p>

         <p className='text-gray-800 text-opacity-80 first-letter:capitalize leading-7'>Copyright Agent
         c/o workify, Level 37, Grosvenor Place, 225 George Street,
         Sydney, New South Wales 2000, Australia
         <Link to="">copyright@workify.com</Link></p>
         <p className='text-gray-800 text-opacity-80 first-letter:capitalize leading-7'>
            To be considered effective, a Notification of Alleged Infringement must be
         submitted in writing and include the following information:
         </p>
         <ol className='list-disc pl-6 text-gray-500'>
            <li>Physical or electronic signature of the owner, or a person authorized
         to act on behalf of the owner, of an exclusive copyright that has
         allegedly been infringed</li>
            <li>Identification of the copyrighted material claimed to have been
         infringed</li>
            <li>Identification of the material that is claimed to be infringing or to
         be the subject of infringing activity that is to be removed or access to
         which is to be disabled</li>
            <li>Information reasonably sufficient to permit workify to locate the
         material that is claimed to be infringing or to be the subject of
         infringing activity</li>
            <li>Information reasonably sufficient to permit workify to contact person
         submitting the Notification, such as a physical address, email address, and
         telephone number</li>
            <li>A statement that the person submitting the Notification has a good
            faith belief that use of the material in the manner complained of is not
         authorized by the copyright owner, its agent, or the law</li>
            <li>A statement that the information in the Notification is accurate, and
         under penalty of perjury, that the person submitting the Notification is
         authorized to act on behalf of the owner of an exclusive right
         that is allegedly infringed</li>
         </ol>

         <h3 className='text-xl font-semibold text-black text-opacity-75'> DMCA COUNTER-NOTIFICATION</h3>
         <div>
            
         <p className='text-gray-800 text-opacity-80 first-letter:capitalize leading-7'>  If you elect to send us a Counter-Notification, please send an email or
         letter to workify's registered Copyright Agent at the email or mailing
         address below:</p>

         <p className='text-gray-800 text-opacity-80 first-letter:capitalize leading-7'>Copyright Agent
         c/o workify, Level 37, Grosvenor Place, 225 George Street,
         Sydney, New South Wales, Australia 2000 <br/>
         <Link to='mailto:copyright@workify.com' className='text-blue-800 underline'>copyright@workify.com</Link></p>

         <p className='text-gray-800 text-opacity-80 first-letter:capitalize leading-7'>
            To be considered effective, a Counter-Notification must be submitted in
         writing and include the following information:
         </p>
         </div>
         <ol className='list-disc pl-6 text-gray-500'>
            <li>Physical or electronic signature of the User or subscriber or a person
         authorized to act on behalf of the User or subscriber.</li>
            <li>Identification of the material that has been removed or to which
         access has been disabled and the location at which the material appeared
         before it was removed or access to it was disabled.</li>
            <li>A statement under penalty of perjury that the User or subscriber has a
         good faith belief that the material was removed or disabled as a result of
         mistake or misidentification of the material to be removed or disabled.</li>
            <li>The User’s or subscriber's name, address, and telephone number, and
            a statement that (1) the subscriber consents to the jurisdiction of (a)
         (for USA addresses) the Federal District Court for the United States of
         America’s judicial district in which the address is located, or (b)
         (for non-USA addresses) the Federal District Court for the Northern District of
         California, USA, and (2) the User or subscriber will accept service of process
         from the person who submitted the Notification of Claimed Infringement or an
         agent of such person.</li>
         </ol>
  


         <p className='text-gray-800 text-opacity-80 first-letter:capitalize leading-7'> Please note that under Section 512(f) of the United States Copyright Act,
         any person who knowingly materially misrepresents that material or activity
         was removed or disabled by mistake or misidentification may be subject to
         liability. Please also be advised that we enforce a policy that provides for
         the termination, in appropriate circumstances, of Users or subscribers who are
         repeat infringers.</p>

        </div>
        </Container>
    </section>
  )
}

export default Copyright