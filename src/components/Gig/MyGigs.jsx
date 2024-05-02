import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Container from '../container/Container';
import Button from '../Button';
import axios from 'axios';
import { toast } from 'react-toastify';


function MyGigs() {
    const [gigs, setGigs] = useState([])
    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/v1/gigs/${id}`, {
            withCredentials: true
        }).then(res => {
            toast.success("gig deleted successfully")
            setGigs(gigs.filter(gig => gig._id !== id))
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/gigs`, {
            withCredentials: true
        }).then(res => {
            console.log(res.data)
            setGigs(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
  return (
    <section className='py-8'>
        <Container>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl opacity-80 font-bold font-Roboto'>Gigs</h1>
                <Link to='/add'>
                    <Button className='text-white font-Roboto font-medium p-2 p cursor-pointer text-sm rounded-md bg-blue-500'>Add New Gig</Button>
                </Link>
            </div>
            <table className='w-full text-left'>
                <tr className='h-12 font-Roboto opacity-90'>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Action</th>
                </tr>
               {
                gigs?.map(gig => (
                    <tr className='h-12 font-Roboto'>
                    <td>
                        <img src={gig?.cover} alt="" className='w-12 h-6 object-cover'/>

                    </td>
                    <td>{gig?.title}</td>
                    <td>{gig?.price}</td>
                    <td>{gig?.sales}</td>
                    <td><i onClick={()=>handleDelete(gig?._id)} className="ri-delete-bin-6-line text-red-500"></i></td>
                </tr>
                ))
               }
            </table>
        </Container>
    </section>
  )
}

export default MyGigs