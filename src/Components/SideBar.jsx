import React from 'react'
import styled from 'styled-components';

const SideBar = () => {
  return (
     <Sidebar>
                <h2>Contact</h2>
                <h2>Home</h2>
                <h2>Block Contact</h2>
                <h2>All Contact</h2>
                <h2>Logout</h2>
              
                <IoSettings className='set'/>
            </Sidebar>
  )
}

export default SideBar

export const Sidebar = styled.div`
    width: 15%;
    height: 80vh;
    background: #e0d9d9;
    box-shadow: 0 0 10px rgba(0,0,0,0.0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  

    .set{
        cursor: pointer;
        height: 30px;
        width: 30px;
    }
   
`