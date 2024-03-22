import React from 'react'

function PostLoader() {
  return (
    <div className='space-y-2'>
    <div className="bg-gray-100 p-4 rounded animate-pulse">
      <div className='flex items-start gap-4 w-full'>
      <div className='w-14 h-14 bg-gray-200 rounded-full'></div>
        <div className='space-y-1 w-full'>
        <div className='w-20 h-3 bg-gray-200'></div>
        <div className='w-32 h-2 bg-gray-200 rounded'></div>
        <div className='w-64 h-4 bg-gray-200 rounded'></div>
        <div className='w-full h-14 bg-gray-200 rounded'></div>
        <div className='flex space-x-2'>
          <div className='w-12 h-2 bg-gray-200 rounded'></div>
          <div className='w-12 h-2 bg-gray-200 rounded'></div>
        </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 p-4 rounded animate-pulse">
      <div className='flex items-start gap-4 w-full'>
      <div className='w-14 h-14 bg-gray-200 rounded-full'></div>
        <div className='space-y-1 w-full'>
        <div className='w-20 h-3 bg-gray-200'></div>
        <div className='w-32 h-2 bg-gray-200 rounded'></div>
        <div className='w-64 h-4 bg-gray-200 rounded'></div>
        <div className='w-full h-14 bg-gray-200 rounded'></div>
        <div className='flex space-x-2'>
          <div className='w-12 h-2 bg-gray-200 rounded'></div>
          <div className='w-12 h-2 bg-gray-200 rounded'></div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PostLoader