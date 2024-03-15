import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../assets/utils/newRequest';
import { useSelector } from 'react-redux';

function Orders() {
    const currentUser = useSelector((state) => state.auth.userData)
    const { isPending, error, data } = useQuery({
        queryKey: ["orders"],
        queryFn: () =>
          newRequest.get(`/orders`).then((res) => {
            return res.data;
          }),
      });
    
  return (
    <section className='py-8'>
    <Container>
       {isPending 
       ? "Loading" 
       : error 
       ? "Something went wrong" 
       : <div>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold font-Roboto opacity-65'>Orders</h1>
        </div>
        <table className='w-full text-left'>
            <tr className='h-12 font-Roboto opacity-70'>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Contact</th>
            </tr>
            {data.map(order =>(
                <tr key={order._id} className='h-12 font-Roboto font-medium text-black text-opacity-70'>
                <td>
                    <img src={order.img} alt="" className='w-12 h-6 object-cover'/>
                    {/* <img src="" alt=""  /> */}
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>123</td>
                <td><i className="ri-message-line"></i></td>
            </tr>
            ))}
        </table>
        </div>}
    </Container>
</section>
  )
}

export default Orders