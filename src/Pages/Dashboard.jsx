import React, { useState } from 'react'
import Sidenav from '../Components/Sidenav'
import Topnav from '../Components/Topnav'
import '../Sass/Dashboard.scss'

const Dashboard = () => {

  const [open, setOpen] = useState(true)


  return (
    <div className='dashboard'>
        <Topnav/>
        <button onClick={() => setOpen(!open)} type='button'><i class="fa-solid fa-bars fa-2x"></i></button>
        { open && (
          <Sidenav/>
        )}
    </div>
  )
}

export default Dashboard