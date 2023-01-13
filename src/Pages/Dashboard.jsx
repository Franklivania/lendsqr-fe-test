import React, { useState } from 'react'
import Sidenav from '../Components/Sidenav'
import Topnav from '../Components/Topnav'
import '../Sass/Dashboard.scss'

const Dashboard = () => {

  // const [open, setOpen] = useState(true)


  return (
    <div className='dashboard'>
        <Topnav/>

        <div className="content">
          <div className="left">
            <Sidenav/>
          </div>

          <div className="right">
            <h1>Users</h1>

            <div className="container">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>

          </div>

        </div>
    </div>
  )
}

export default Dashboard