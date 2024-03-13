import React from 'react'
import Container from '../container/Container'
import Button from '../Button'
import Gigcards from './Gigcards'
import {gigs} from '../../assets/Data/cards'
function Gigs() {
    const [open, setOpen] = React.useState(false)
    const [sort, setSort] = React.useState('sales')

    const reSort = (value) => {
        setSort(value)
        setOpen(false)
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
              <div className='flex justify-between mt-4'>
                <div className='font-Roboto text-sm flex items-center gap-2'>
                    <span className='font-semibold text-base opacity-80'>Budget</span>
                    <input type="text" className='p-2 outline-none border rounded' placeholder='min'/>
                    <input type="text" className='p-2 outline-none border rounded'  placeholder='max'/>
                    <Button className='p-2 px-3 bg-blue-300 rounded-md'>Apply</Button>
                </div>
                <div className='flex font-Roboto items-center gap-2 relative'>
                    <span className='font-medium text-sm opacity-50'>Sort By</span>
                    <div className='cursor-pointer' onClick={()=>setOpen((prev)=>!prev)}>
                        <span className='font-semibold opacity-90'>{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
                        <i className={open ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}></i>
                    </div>
                   {open && <div className='bg-white absolute top-10 right-0 flex flex-col text-black rounded-sm gap-5 px-4 py-2 rounded-sm border cursor-pointer'>
                        {sort === 'sales' 
                        ? <span onClick={()=>reSort("createdAt")}>Newest</span> 
                        : <span onClick={()=>reSort("sales")}>Best Selling</span>}
                    </div>
                        }
                </div>
              </div>
               <div>
               <div className='flex flex-wrap justify-between gap-2  w-full mt-3'>
                    {gigs.map((gig, index) => {
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