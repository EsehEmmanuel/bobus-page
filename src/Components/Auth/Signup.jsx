import React from 'react';
import { Contain,
     Contain_left,
     Contain_right } from '../LoginStyle'
import myLogo from '../../assets/logo.svg'
import Button from './../Button'
import { Link } from "react-router-dom"
import Forminput from './../Forminput';
import Password from './../Password'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [ firstname, setFirstname ] = React.useState("")
  const [ username, setUsername ] = React.useState("")
  const [ email, setEmail ] = React.useState("")
  const [ password, setPassword ] = React.useState("")
  const [ database, setDatabase ] = React.useState([])
  const navigate = useNavigate()

React.useEffect(() => {
  const getData = JSON.parse(localStorage.getItem("All Data"));
  setDatabase(getData || []);
}, []);

const createData = (e) => {
  e.preventDefault();
  if (!firstname || !username || !email || !password) {
    return alert("All data required");
  }

  const data = {
    firstname,
    username,
    email,
    password,
  };

  const newDatabase = [...database, data];
  localStorage.setItem("All Data", JSON.stringify(newDatabase));
  setDatabase(newDatabase);
  navigate("/");
};

  console.log('the data', database)
  
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
     value={firstname}
     placeholder="first Name"
     className="input"
     onChange={(e)=>setFirstname(e.target.value)}
     />
     <Forminput
     type="text"
     value={username}
     placeholder="Last Name"
     className="input"
      onChange={(e)=>setUsername(e.target.value)}
     />
     <Forminput
     type="text"
     value={email}
     placeholder="Email"
     className="input"
      onChange={(e)=>setEmail(e.target.value)}
     />
     <Password password={password} setPassword={setPassword}/>

      <Button 
      text= 'Create an Account'
      className='btn'
      onClick={createData}

      />
      <p>Already have an account?<Link to="/Login"><span>Login</span></Link></p>
    </form>
   </Contain_right>
   </Contain>
  )
}

export default Signup