import React, { useEffect, useRef } from 'react'
import Container from '../container/Container'
import Button from '../Button'
import Gigcards from './Gigcards'
// import {gigs} from '../../assets/Data/cards'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../assets/utils/newRequest'
import { useLocation } from 'react-router-dom'
import GigsLoader from '../MUC/GigsLoader'
function Gigs() {
    const [open, setOpen] = React.useState(false)
    const [sort, setSort] = React.useState('sales')
    const minRef = useRef();
    const maxRef = useRef();

    const {search} = useLocation()
    console.log(search)

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['gigs'],
        queryFn: () =>
          newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res) => res.data)
      })

      
      useEffect(() => {
        refetch()
       }, [sort])
    console.log(data)
    const reSort = (value) => {
        setSort(value)
        setOpen(false)
    }
    const apply = () => {
       refetch()
    }
  return (
    <section>
        <Container>
            <div className='font-Roboto my-4'>
                <div className='space-y-2'>
                    <span className='uppercase font-medium opacity-65 text-sm'> Workify - Graphics & Design</span>
                    <h1 className='text-2xl font-bold opacity-90'>AI Artists</h1>
                    <p className='font-medium opacity-55'>Explore the boundaries of art and technology with Workify's AI artists </p>
               </div>
              <div className='sm:flex justify-between mt-4'>
                <div className='font-Roboto text-sm flex items-center gap-2'>
                    <span className='font-semibold text-base opacity-80'>Budget</span>
                    <input ref={minRef}  type="text" className='w-16 sm:w-auto p-2 outline-none border rounded' placeholder='min'/>
                    <input ref={maxRef} type="text" className='w-16 sm:w-auto p-2 outline-none border rounded'  placeholder='max'/>
                    <Button onClick={apply} className='p-2 px-3 bg-blue-300 rounded-md'>Apply</Button>
                </div>
                <div className='flex font-Roboto items-center mt-5 sm:mt-0 gap-2 relative'>
                    <span className='font-medium text-sm opacity-50'>Sort By</span>
                    <div className='cursor-pointer' onClick={()=>setOpen((prev)=>!prev)}>
                        <span className='font-semibold opacity-90'>{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
                        <i className={open ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}></i>
                    </div>
                   {open && <div className='bg-white absolute top-10 right-0 flex flex-col text-black gap-5 px-4 py-2 rounded-sm border cursor-pointer'>
                        {sort === 'sales' 
                        ? <span onClick={()=>reSort("createdAt")}>Newest</span> 
                        : <span onClick={()=>reSort("sales")}>Best Selling</span>}
                    </div>
                        }
                </div>
              </div>
               <div>
               <div className='flex flex-wrap justify-between gap-2  w-full mt-3'>
                    {isPending ? <GigsLoader/> : error ? "Something went wrong" :data.map((gig, index) => {
                        return <Gigcards key={index} gig={gig} />
                    })}
                </div>
               </div>
            </div>
        </Container>
    </section>
  )
}

export default Gigs