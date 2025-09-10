import React from 'react'
import styled from 'styled-components'
import { FaMarsStrokeUp } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { BiSolidWidget } from 'react-icons/bi';
const SideBar = () => {
    
    const nav = useNavigate()
  return (
    <Side_holder>
        <header><i><FaMarsStrokeUp /></i><h3>Admindek</h3></header>
        <SideBar_contents>
           <nav className='nav_holder'>
            <p>NAVIGATION</p>
            <NavContents active onClick={()=>nav("/dashboard/:username")}>Dashboard</NavContents>
            <NavContents onClick={()=>nav("Widget")}>Layouts</NavContents>
            <NavContents onClick={()=>nav("About")}>Widget</NavContents>
             <p>ADMIN PANEL</p>
             <NavContents>Online courses</NavContents>
             <NavContents>Membership</NavContents>
             <NavContents>Helpdesk</NavContents>
             <NavContents>Invoice</NavContents>
             <p>UI COMPONENTS</p>
              <NavContents>Basic</NavContents>
              <NavContents>Advanced</NavContents>
              <NavContents>Animation</NavContents>
              <NavContents>Icons</NavContents>
              <p>Forms</p>
              <NavContents>Form Elements</NavContents>
              <NavContents>Form plugins</NavContents>
              <NavContents>Text Editor</NavContents>
              <NavContents>Form Layouts</NavContents>
              <NavContents>File Upload</NavContents>
              <NavContents>Wizard</NavContents>
              <NavContents>Form Validation</NavContents>
              <NavContents>Image Cropper</NavContents>
              <NavContents></NavContents>
         </nav> 
        </SideBar_contents>
    </Side_holder>
    
  )
}

export default SideBar
const Side_holder = styled.div`
      width: 20vw;
      font-family: Sarabun, sans-serif;
       header{
           position: fixed;
            width: 100%;
           display: flex;
           position: relative;
           background: #263544;
          height: 11vh;
          align-items: center;
          width: 95%;
          gap: 13px;
          z-index: 5;
         
         i{
            padding: 12px;
            background-color: #4680FF;
            border-radius: 10px;
            cursor: pointer;
            color: white;
        }
        h3{
            font-size: 20px;
            color: white;
            font-weight: lighter;
            cursor: pointer;
        }

     }
`
const SideBar_contents = styled.div`
     max-width :100% ;
     height: 100vh;
     overflow-y: scroll;
     
     .nav_holder{
        display: flex;
        flex-direction: column;
        background: #263544;
       
       
        p{
            font-size: 20px;
            color: white;
            padding: 10px
        }
     }

`
const NavContents = styled.div`
    max-width: 100%;
    height: 20px;
    padding: 12px;
    display: flex;
    cursor: pointer;
    color: ${({active})=>(active? "#ddd9d9": "#888790")};
    background-color: ${({active})=>(active? "#13212F": "")};
     
    &:hover{
        background-color: #13212F;
        color: #ddd9d9;
    }
`