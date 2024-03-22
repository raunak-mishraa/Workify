import React from 'react'
import LogoImg from '../assets/images/logo.png'
import logoSmall from '.././assets/images/LogoSmall.png'
function Logo({width='100px'}) {
  return (
    <div>
      <img src={logoSmall} width="50px" className='block sm:hidden' alt="logo for small devices" />
      <img src={LogoImg} width={width} className='hidden sm:block' alt="logo" />
    </div>
  )
}

export default Logo