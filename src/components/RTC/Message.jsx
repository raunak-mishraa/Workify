import React from 'react'
import Container from '../container/Container'
import { Link, useParams } from 'react-router-dom'
import Button from '../Button'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../assets/utils/newRequest';

function Message() {
    const { id } = useParams();
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    // console.log(currentUser);
    // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    const queryClient = useQueryClient();
  
    const { isPending, error, data } = useQuery({
      queryKey: ["messages"],
      queryFn: () =>
        newRequest.get(`/messages/${id}`).then((res) => {
            console.log(res.data);
          return res.data;
        }),
    });
  
    const mutation = useMutation({
        mutationFn: (message) => {
            console.log(message);
          return newRequest.post(`/messages`, message);
        },
        onSuccess: () => {
          queryClient.invalidateQueries(["messages"]);
        },
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        mutation.mutate({
          conversationId: id,
          desc: e.target[0].value,
        });
        e.target[0].value = "";
      };

  return (
    <section>
        <Container>
            <div className='flex justify-center w-full'>
                <div className='md:m-12  w-full'>
                    <span className='opacity-60 text-sm'>
                         <Link to="/messages">Message between</Link>  {data && data[0]?.userId?.fullName.toUpperCase() } & {data && data[1]?.userId?.fullName.toUpperCase() }
                    </span>
                    {isPending ? "LOading" : error ? "error" :
                    (<div className='my-7 sm:p-10 flex flex-col gap-5 min-h-[30vh] sm:h-[300px] overflow-y-scroll w-full items-end'>
                       {data.map((m)=>(
                        <div className={`${m.userId._id === currentUser.user._id ? "flex flex-row-reverse" : "flex"} flex items-end gap-4 w-full text-base`} key={m._id}>
                        <img
                            src={`${m.userId._id === currentUser.user._id ? currentUser.user.avatar  : m.userId.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}`}
                            alt=""
                            className='rounded-full sm:w-12 w-9 h-9 sm:h-12 object-cover'
                            />
                            <p className={`${m.userId._id === currentUser.user._id ? "bg-blue-600 text-white rounded-tr-none" : "bg-gray-200 rounded-tl-none"} sm:px-2 p-1 text-xs sm:text-sm rounded-md opacity-85`}>
                           {m.message}
                            </p>
                    </div>
                       ))}
                    </div>)}
                    <hr className='mb-5 h-0.5 bg-gray-50'/>
                    <form className='flex justify-between items-center' onSubmit={handleSubmit}>
                        <input onKeyDown={(e)=>{
                            if(e.key == "Enter"){
                                handleSubmit()
                            }
                        }} className='focus:outline-dashed focus:outline-blue-500 p-2 sm:p-4 w-[70%] sm:w-[80%] outline-none border rounded-sm sm:rounded-xl' placeholder='Write a message' />
                        <Button type='submit' className='bg-blue-600 p-2 sm:p-4 rounded-md w-[26%] sm:w-[15%] text-white sm:text-base text-xs'>
                            Send
                        </Button>
                    </form>
                    {/* <p className='opacity-60 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil accusantium io.</p> */}
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Message
