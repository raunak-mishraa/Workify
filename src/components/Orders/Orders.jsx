import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router-dom'
import Button from '../Button'

function Orders() {
    const currentUser = {
        id: 1,
        username: "Anna",
        isFreelancer: true,
      };
  return (
    <section className='py-8'>
    <Container>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold font-Roboto'>Orders</h1>
        </div>
        <table className='w-full text-left'>
            <tr className='h-12 font-Roboto'>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser?.isFreelancer ? 'Client' : 'Freelancer'}</th>
                <th>Contact</th>
            </tr>
            <tr className='h-12 font-Roboto'>
                <td>
                    <img src="https://th.bing.com/th/id/OIG2.YAHMNo1xhyLrLaLs6qSX?pid=ImgGn" alt="" className='w-12 h-6 object-cover'/>
                    {/* <img src="" alt=""  /> */}
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td><i className="ri-message-line"></i></td>
            </tr>
            <tr className='h-12 font-Roboto'>
                <td>
                    <img src="https://th.bing.com/th/id/OIG2.YAHMNo1xhyLrLaLs6qSX?pid=ImgGn" alt="" className='w-12 h-6 object-cover'/>
                    {/* <img src="" alt=""  /> */}
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td><i className="ri-message-line"></i></td>
            </tr>
            <tr className='h-12 font-Roboto'>
                <td>
                    <img src="https://th.bing.com/th/id/OIG2.YAHMNo1xhyLrLaLs6qSX?pid=ImgGn" alt="" className='w-12 h-6 object-cover'/>
                    {/* <img src="" alt=""  /> */}
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td><i className="ri-message-line"></i></td>
            </tr>
        </table>
    </Container>
</section>
  )
}

export default Orders