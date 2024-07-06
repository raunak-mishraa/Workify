import React from 'react'

function AvatarLoader() {
  return (
    <div className="w-16 h-16 relative animate-pulse">
        <div className="w-full h-full bg-gray-200 rounded-full"></div>
        <div className='absolute w-6 h-6 rounded-full bg-white bottom-0 right-0'></div>
    </div>
  )
}

export default AvatarLoader