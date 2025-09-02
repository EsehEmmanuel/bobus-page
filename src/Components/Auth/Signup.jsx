import React from 'react';
import { Contain,
     Contain_left,
     Contain_right } from '../LoginStyle'
import myLogo from '../../assets/logo.svg'
import Button from './../Button'
import { Link } from "react-router-dom"
import Forminput from './../Forminput';
import Password from './../Password'

const Signup = () => {
  return (
   <Contain>
   <Contain_left>
    <img src={myLogo} alt="logo" />
   </Contain_left>
   <Contain_right>
    <h1>BOBUS PAGE</h1>
    <form>
     <Forminput
     type="text"
     placeholder="first Name"
     className="input"
     />
     <Forminput
     type="text"
     placeholder="Last Name"
     className="input"
     />
     <Forminput
     type="text"
     placeholder="Email"
     className="input"
     />
     <Password/>

      <Button 
      text= 'Login'
      className='btn'

      />
      <p>Already have an account?<Link to="/Login"><span>Login</span></Link></p>
    </form>
   </Contain_right>
   </Contain>
  )
}

export default Signup