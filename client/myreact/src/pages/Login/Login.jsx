import { TextField } from '@material-ui/core'
import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='orta'>
      <input type="text" class="form__input" id="name" placeholder="İsim" required="" />
    </div>
  )
}

export default Login