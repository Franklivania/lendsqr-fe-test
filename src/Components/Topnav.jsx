import React, { useState } from 'react'
import '../Sass/Topnav.scss'
import logo from '../assets/logo.svg'
import img from '../assets/image.svg'


const Topnav = () => {


  return (
    <div className='topnav'>
        <h1><img src={logo} alt={"logo"} /> lendsqr</h1>

        <label htmlFor="">
          <input type="search" name="search" id="search" placeholder='Search for anything' />
          <button type='button'><i class="fa-solid fa-magnifying-glass"></i></button>
        </label>

        <div className="info">
          <a href="">Docs</a>

          <button><i class="fa-regular fa-bell fa-2x"></i></button>

          <img src={img} alt="" />  

          <p>Chibuzo</p>

          <i class="fa-solid fa-caret-down"></i>
        </div>
    </div>
  )
}

export default Topnav