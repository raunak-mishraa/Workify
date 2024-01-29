import React from 'react'

function FreelancerAuth() {
    const authItems = [{
        name:'notifications',
        active:false
    },{
        name:'profile',
        active:false
    }]
  return (
    <div>
       {authItems.map(item => item.active ? (
        <li key={item.name}>
            {item.name}
        </li>
       ): null)}
    </div>
  )
}

export default FreelancerAuth