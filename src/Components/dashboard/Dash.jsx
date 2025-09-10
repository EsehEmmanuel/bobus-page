import React from 'react'
import styled from 'styled-components';
import DashHeader from './DashHeader'
import Sidebar from './Sidebar'
import SubHeader from './Subheader'
import { Outlet } from 'react-router-dom'

const Dash = () => {
  return (
    <div>
      <DashHeader />
      <Sidebar />
      <SubHeader />

    <Dash_holder>
        <Outlet />
        <Dash_wrapper>
          <div className='rev'>
        <h4>Total Revenue</h4>
            <p> $847,290</p>
             <p> +12.5% from </p>
             <p>last month</p>
             </div>
          <div className='rev'>
        <h4>Total Revenue</h4>
            <p> $847,290</p>
             <p> +12.5% from </p>
             <p>last month</p>
             </div>
          <div className='rev'>
        <h4>Total Revenue</h4>
            <p> $847,290</p>
             <p> +12.5% from </p>
             <p>last month</p>
             </div>
        </Dash_wrapper>
    </Dash_holder>
    </div>

    
  )
}

export default Dash

export const Dash_holder = styled.div`
width: 78%;
height: 60vh;
background: tomato;
position: absolute;
top: 30%;
right: 0%;
display: flex;
`
export const Dash_wrapper = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .rev{
    width: 20%;
    background-color: #ce7f7f;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }
`