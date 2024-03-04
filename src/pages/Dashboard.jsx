import { useSelector } from "react-redux";
import { FreelancerDashboard, ClientDashboard } from "../components/index";
import React from 'react'

function Dashboard() {
  const userData = useSelector((state) => state.auth.userData)
  console.log(userData)
  if (!userData) {
    // Handle loading state or initial undefined userData
    return <div>Loading...</div>;
  }

  const isClient = userData?.user?.isClient;
  console.log(isClient)
  return isClient ? <ClientDashboard/> : <FreelancerDashboard/>;
}

export default Dashboard;
