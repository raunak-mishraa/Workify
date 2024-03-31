import React from 'react'

function PageLoader() {
  return (
    <section className='w-full h-screen flex items-center justify-center'>
      <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:.7s]"></div>
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:.7s]"></div>
    </div>
    </section>
  )
}

export default PageLoader