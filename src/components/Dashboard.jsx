import React from 'react'
import { Container } from './index.js'
import { useSelector } from 'react-redux'

function Dashboard() {
  const userD = useSelector((state) => state.auth.userData)
  console.log("this is the data",userD)
  return (
    <section className='text-center'>
      <Container>
        <div>
        Dashboard
        </div>
      </Container>
    </section>
  )
}

export default Dashboard