import React from 'react'
import styled from 'styled-components';
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react"
const Password = () => {
    const [pass, setPass] = useState("")
    const [show, setShow] = useState(false)
  return (
    <Password_container>
        <Password_input
        type= {show ? 'text' : "password"}
        value={pass}
        onChange={(e)=>setPass(e.target.value)}
        placeholder='Enter your password'
        />
        <Eye onClick={()=>setShow(!show)}>
       { show ? <FaEyeSlash/> : <FaRegEye/>} 
        </Eye>
    </Password_container>
  )
}

export default Password


export const Password_container = styled.div`
    width: 320px;
    height: 47px;
    border-radius: 14px;
     outline: none;
     border: none;
    background: white;
     display: flex;
     align-items: center;
     padding-right: 20px;
   

`;
export const Password_input = styled.input`
    /* background-color: green; */
    
    
`;
export const Eye = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: black;
    font-size: 15px;
`