import React, {useState} from 'react'
import '../Sass/Sidenav.scss'
import { Link, useLocation } from 'react-router-dom'
import pref from '../assets/pref.svg'
import divide from '../assets/divide.png'
import logs from '../assets/logs.png'

const Sidenav = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(0)

  return (
    <div className='sidenav'>
        <button type='button'><i class="fa-solid fa-briefcase"></i> Switch Organisation <i class="fa-solid fa-chevron-down"></i></button>

        <Link to='/dashboard' className={'dash ' + (activeLink === 0 ? 'active' : "")} onClick={() => setActiveLink(0)}><i class="fa-solid fa-house"></i> &nbsp; Dashboard</Link>

        <nav>
            <small>CUSTOMERS</small>
            <Link className={'link ' + (activeLink === 1 ? 'active' : "")} onClick={() => {setActiveLink(1);}} to=''><i class="fa-solid fa-users"></i> Users</Link>
            <Link className={'link ' + (activeLink === 2 ? 'active' : "")} onClick={() => {setActiveLink(2);}} to=''><i class="fa-solid fa-users"></i> Guarantors</Link>
            <Link className={'link ' + (activeLink === 3 ? 'active' : "")} onClick={() => {setActiveLink(3);}} to=''><i class="fa-solid fa-sack-dollar"></i> Loans</Link>
            <Link className={'link ' + (activeLink === 4 ? 'active' : "")} onClick={() => {setActiveLink(4);}} to=''><i class="fa-regular fa-handshake"></i> Decision Models</Link>
            <Link className={'link ' + (activeLink === 5 ? 'active' : "")} onClick={() => {setActiveLink(5);}} to=''><i class="fa-solid fa-piggy-bank"></i> Savings</Link>
            <Link className={'link ' + (activeLink === 6 ? 'active' : "")} onClick={() => {setActiveLink(6);}} to=''><i class="fa-solid fa-hand-holding-dollar"></i> Loan Requests</Link>
            <Link className={'link ' + (activeLink === 7 ? 'active' : "")} onClick={() => {setActiveLink(7);}} to=''><i class="fa-solid fa-user-check"></i> Whitelist</Link>
            <Link className={'link ' + (activeLink === 8 ? 'active' : "")} onClick={() => {setActiveLink(8);}} to=''><i class="fa-solid fa-user-xmark"></i> Karma</Link>
        </nav>

        <nav>
            <small>BUSINESSES</small>
            <Link to='/' className={'link ' + (activeLink === 9 ? 'active' : "")}><i class="fa-solid fa-briefcase"></i> Organisation</Link>
            <Link to='/' className={'link ' + (activeLink === 10 ? 'active' : "")}><i class="fa-solid fa-hand-holding-dollar"></i> Loan Products</Link>
            <Link to='/' className={'link ' + (activeLink === 11 ? 'active' : "")}><i class="fa-solid fa-house-user"></i> Savings Products</Link>
            <Link to='/' className={'link ' + (activeLink === 12 ? 'active' : "")}><i class="fa-solid fa-coins"></i> Fees and Charges</Link>
            <Link to='/' className={'link ' + (activeLink === 13 ? 'active' : "")}><i class="fa-solid fa-briefcase"></i> Transactions</Link>
            <Link to='/' className={'link ' + (activeLink === 14 ? 'active' : "")}><i class="fa-solid fa-fan"></i> Services</Link>
            <Link to='/' className={'link ' + (activeLink === 15 ? 'active' : "")}><i class="fa-solid fa-user-gear"></i> Service Account</Link>
            <Link to='/' className={'link ' + (activeLink === 16 ? 'active' : "")}><i class="fa-solid fa-scroll"></i> Settlements</Link>
            <Link to='/' className={'link ' + (activeLink === 17 ? 'active' : "")}><i class="fa-solid fa-chart-column"></i> Reports</Link>
        </nav>

        <nav>
            <small>SETTINGS</small>
            <Link to='' className={'link ' + (activeLink === 18 ? 'active' : "")}> <img src={pref} alt="" /> Preferences</Link>
            <Link to='' className={'link ' + (activeLink === 19 ? 'active' : "")}> <img src={divide} alt="" /> Fees and Pricing</Link>
            <Link to='' className={'link ' + (activeLink === 20 ? 'active' : "")}> <img src={logs} alt="" /> Audit Logs</Link>
        </nav>


        <Link to='/'>Logout</Link>
    </div>
  )
}

export default Sidenav