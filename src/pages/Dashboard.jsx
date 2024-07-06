import { useSelector } from "react-redux";
import { FreelancerDashboard, ClientDashboard } from "../components/index";
import React from 'react'

function Dashboard() {
  const isClient = useSelector((state) => state.auth.isClient)
  // const isLoggedIn = useSelector((state) => state.auth.status)
  // const navigate = useNavigate()
  // if (!isLoggedIn) {
  //   navigate('/login')
  // }
  return isClient ? <ClientDashboard/> : <FreelancerDashboard/>;
}

export default Dashboard;
