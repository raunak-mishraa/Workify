import React from 'react'

function MyGigsLoader() {
  return (
    <section className='py-8 animate-pulse'>
        <div className='flex items-center justify-between'>
            <div className='h-6 bg-gray-200 rounded w-1/4'></div>
            <div className='h-10 bg-gray-200 rounded w-1/3'></div>
        </div>
        <table className='w-full text-left mt-5'>
            <tr className='h-12 font-Roboto opacity-90'>
                <th><div className="h-4 bg-gray-200 rounded w-1/4"></div></th>
                <th><div className="h-4 bg-gray-200 rounded w-1/4"></div></th>
                <th><div className="h-4 bg-gray-200 rounded w-1/4"></div></th>
                <th><div className="h-4 bg-gray-200 rounded w-1/4"></div></th>
                <th><div className="h-4 bg-gray-200 rounded w-1/4"></div></th>
            </tr>
            <tr className='h-12'>
                <td><div className='bg-gray-200 w-12 h-6'></div></td>
                <td><div className='bg-gray-200 w-full h-4'></div></td>
                <td><div className='bg-gray-200 w-16 h-4'></div></td>
                <td><div className='bg-gray-200 w-16 h-4'></div></td>
                <td><div className="h-4 bg-gray-200 rounded w-1/2"></div></td>
            </tr>
        </table>
    </section>
  )
}

export default MyGigsLoader