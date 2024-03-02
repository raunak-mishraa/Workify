import React from 'react'
import {Home as NlgPage} from '../components/index'
import Dashboard from '../components/Dashboard/FreelancerDashboard';
function Home() {
    const [loggedIn, setLoggedIn] = React.useState(true);
  return loggedIn ? (
    <NlgPage/>
  ) :
  (
   <Dashboard/>
  )
}

export default Home