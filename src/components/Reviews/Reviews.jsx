import React from 'react'
import Review from '../Review/Review'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import  newRequest  from '../../assets/utils/newRequest'
import Input from '../Input'
import Button from '../Button'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Reviews({gigId}) {
    const queryClient = useQueryClient()
    const userData = JSON.parse(localStorage.getItem('userData'));
    const { isPending, error, data } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
          newRequest.get(`/reviews/${gigId}`).then((res) => res.data.data)
      })
      

      const mutation = useMutation({
        mutationFn: (review) => {
          return newRequest.post('/reviews', review)
        },
        onSuccess : () => {
            queryClient.invalidateQueries('reviews')
        }
      })

      const navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault();
        if(userData?.user.isClient){
          const desc = e.target[0].value;
          const star = e.target[1].value;
          mutation.mutate({ gigId, desc, star });
        }
        else if(!userData?.user.isClient){
          toast.error('Only clients can add reviews')
        }
        else{
          navigate('/login')
        }
      };
  return (
   <div>
     {isPending 
        ? "Loading" 
        : error 
        ? "Something Went Wrong" : data.map((review)=>(
        <Review key={review._id} review={review}/>
    ))}
     <div className="mt-5 flex flex-col gap-5">
        <h3 className='font-poppins text-xl font-semibold opacity-90'>Add a review</h3>
        <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <Input type="text"
          className="p-4 bg-none rounded-sm w-full"
          placeholder="write your opinion" />
          <select name="" className='w-52 p-4 border self-end'>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <Button type='submit' className='w-28 bg-blue-500 p-3 self-end text-white'>Send</Button>
        </form>
      </div>
   </div>
  )
}

export default Reviews