import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function Categories({ref}) {
    const categories = [{
        icon: 'ri-code-s-slash-line',
        name: 'Development & IT',
        rating: '4.85/5',
        skills: '130 Skills'
    },
    {
        icon: 'ri-palette-line',
        name: 'Graphics & Design',
        rating: '4.85/5',
        skills: '130 Skills'
    },
    {
        icon: 'ri-computer-line',
        name: 'Digital Marketing',
        rating: '4.85/5',
        skills: '130 Skills'
    },
    {
        icon: 'ri-edit-2-line',
        name: 'Writing & Translation',
        rating: '4.85/5',
        skills: '130 Skills'
    },
    {
        icon: 'ri-movie-line',
        name: 'Video & Animation',
        rating: '4.85/5',
        skills: '130 Skills'
    },
    {
        icon: 'ri-music-2-fill',
        name: 'Music & Audio',
        rating: '4.85/5',
        skills: '130 Skills'
    }
]
const reference = React.useRef(null)
  return (
    <div>
        <section ref={reference} className='py-10 sm:py-20 font-[assistant]'>
            <Container>
            <div>
                <h2 className='block text-2xl opacity-90 md:text-3xl font-bold'>Browse Categories</h2>
                <div className='mt-5 text-base grid sm:grid-cols-2 gap-5 md:grid-cols-3 sm:flex-row md:gap-7'>
                {categories.map((category, index) => (
                    <motion.div drag dragConstraints={reference}  dragTransition={{
                        min: 0,
                        max: 100,
                        bounceStiffness: 100
                      }} className='opacity-90 p-6 py-10 rounded-lg bg-slate-50 shadow-md flex flex-col gap-3 hover:bg-slate-200 duration-200 ease-in'>
                    <h4 className='font-medium tracking-wider'><i className={`mr-2 ${category.icon}`}></i>{category.name}</h4>
                    <div className='flex justify-between'>
                        <div><i className="text-blue-700 ri-star-fill mr-2"></i>{category.rating}</div>
                        <div>{category.skills}</div>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
            </Container>  
        </section>
    </div>
  )
}

export default Categories