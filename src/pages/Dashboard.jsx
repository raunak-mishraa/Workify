import { useSelector } from "react-redux";
import {  FreelancerDashboard, ClientDashboard } from "../components/index";
import React from 'react'

function Dashboard() {
  const userData = useSelector((state) => state.auth.userData)
  return userData?.user.isClient ? <ClientDashboard/> : <FreelancerDashboard/>
}

export default Dashboard