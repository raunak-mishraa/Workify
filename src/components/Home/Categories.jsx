import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router-dom'
import { categories } from '../../assets/Data/category'
function Categories() {

  return (
    <div>
        <section className='py-10 sm:py-20 font-[assistant]'>
            <Container>
            <div>
                <h2 className='block text-2xl opacity-90 md:text-3xl font-bold'>Browse Categories</h2>
                <div className='mt-5 text-base grid sm:grid-cols-2 gap-5 md:grid-cols-3 sm:flex-row md:gap-7'>
                {categories.map((category, index) => (
                    <Link to={`/gigs?category=${category.value}`} key={index} className='opacity-90 p-6 py-10 rounded-lg bg-[#fff] border-2  flex flex-col gap-3 hover:bg-blue-50 duration-200 ease-in'>
                    <h4 className='font-medium tracking-wider'><i className={`mr-2 ${category.icon}`}></i>{category.name}</h4>
                    <div className='flex justify-between'>
                        <div><i className="text-blue-700 ri-star-fill mr-2"></i>{category.rating}</div>
                        <div>{category.skills}</div>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
            </Container>  
        </section>
    </div>
  )
}

export default Categories