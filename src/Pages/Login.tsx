import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../Sass/Login.scss'
import logo from '../assets/logo.svg'
import sign from '../assets/sign.svg'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    
    toast.success("Login Successful")
    
    setInterval(() => {
      navigate('./dashboard')
    }, 1500)
  }

  return (
    <div className='login'>
      <ToastContainer/>

        <div className="top">
          <h1><img src={logo} alt={'logo'} /> &nbsp; lendsqr</h1>
        </div>
        
        <div className="bottom">

          <img src={sign} alt={'sign in image'} />

          <form action="" onSubmit={handleSubmit}>
            <h1>Welcome</h1>

            <p>Enter details to login</p>

            <div className="group">
              <input type="email" name="email" id="email" />
              <label className='placeholder'>Email</label> 
            </div>

            <div className="group">
              <input type={showPassword ? 'text' : 'password' } name="password" id="pass"/>
              <label className='placeholder'>Password</label>
              <button onClick={() => setShowPassword(!showPassword)} type='button'>
              {showPassword ? 'HIDE' : 'SHOW'}
              </button>
              <a href="/">FORGOT PASSWORD</a>
            </div>

            <input type="submit" value="LOG IN" className='log' />

          </form>
        </div>
    </div>
  )
}

export default Login