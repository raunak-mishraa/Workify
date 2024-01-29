import React from 'react'
import LogoImg from '../assets/images/logo.png'
function Logo({width='100px'}) {
  return (
    <div>
      <img src={LogoImg} width={width} alt="logo" />
    </div>
  )
}

export default Logo