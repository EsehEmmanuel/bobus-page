import React, { useEffect } from 'react';
import { Contain,
     Contain_left,
     Contain_right } from '../LoginStyle'
import myLogo from '../../assets/logo.svg'
import Button from './../Button'
import { Link } from "react-router-dom"
import Forminput from './../Forminput';
import Password from './../Password'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = React.useState("");
  const [emaildata, setEmaildata] = React.useState("");
  const [database, setDatabase] = React.useState([]);
  const nav = useNavigate();

  React.useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("All Data"));
    setDatabase(getData || []);
  }, []);

  const handle = (e) => {
    e.preventDefault();

    const info = database.find(
      (user) => user.email === emaildata && user.password === password
    );

    if (!info) {
      return alert("User not found or incorrect details");
    }

    alert("Login successful");
    nav(`/Dashboard/${info.username}`);
  };
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
     value = {emaildata}
     onChange = {(e)=>setEmaildata(e.target.value)}
     placeholder="Email"
     className="input"
     />
     <Password password={password} setPassword={setPassword} />
    
      <Link to="/Dashboard">
      <Button 
      text= 'Login'
      className='btn'
      onClick={handle}

      /></Link>
      <p>forgotten password?<Link to="/Signup"><span>Signup</span></Link></p>
    </form>
   </Contain_right>
   </Contain>
  )
}

export default Login