import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../container/Container';
import Button from '../Button';
function MyGigs() {

  return (
    <section className='py-8'>
        <Container>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold font-Roboto'>Gigs</h1>
                <Link to='/add'>
                    <Button className='text-white font-Roboto font-medium p-2 cursor-pointer bg-sky-500'>Add New Gig</Button>
                </Link>
            </div>
            <table className='w-full text-left'>
                <tr className='h-12 font-Roboto'>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Action</th>
                </tr>
                <tr className='h-12 font-Roboto'>
                    <td>
                        <img src="https://th.bing.com/th/id/OIG2.YAHMNo1xhyLrLaLs6qSX?pid=ImgGn" alt="" className='w-12 h-6 object-cover'/>
                        {/* <img src="" alt=""  /> */}
                    </td>
                    <td>Gig1</td>
                    <td>88</td>
                    <td>123</td>
                    <td><i className="ri-delete-bin-6-line text-red-500"></i></td>
                </tr>
                <tr className='h-12 font-Roboto'>
                    <td>
                        <img src="https://th.bing.com/th/id/OIG2.YAHMNo1xhyLrLaLs6qSX?pid=ImgGn" alt="" className='w-12 h-6 object-cover'/>
                        {/* <img src="" alt=""  /> */}
                    </td>
                    <td>Gig1</td>
                    <td>88</td>
                    <td>123</td>
                    <td><i className="ri-delete-bin-6-line text-red-500"></i></td>
                </tr>
                <tr className='h-12 font-Roboto'>
                    <td>
                        <img src="https://th.bing.com/th/id/OIG2.YAHMNo1xhyLrLaLs6qSX?pid=ImgGn" alt="" className='w-12 h-6 object-cover'/>
                        {/* <img src="" alt=""  /> */}
                    </td>
                    <td>Gig1</td>
                    <td>88</td>
                    <td>123</td>
                    <td><i className="ri-delete-bin-6-line text-red-500"></i></td>
                </tr>
            </table>
        </Container>
    </section>
  )
}

export default MyGigs