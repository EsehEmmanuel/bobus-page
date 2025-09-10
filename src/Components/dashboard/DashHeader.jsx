import React from 'react'
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";

const Dash = () => {
  return (
    <Header>
      <Header_holder>
        <div className='hold'>
      <h2>dp</h2>
      <h3>Admindek HTML Dashboard </h3>
      <p>Live Demo Preview</p>
      </div>
      <div className='icons'>
         <IoReaderOutline className='read' />
        <FaShoppingCart className='read'/>
       
      </div>
</Header_holder>
    </Header>
  )
}

export default Dash
export const Header = styled.div`
  width: 100%;
  
`
export const Header_holder = styled.div`
  width: 100%;
  height: 10vh;
  background: #252733;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;

  .hold{
    width: 100%;
    height: 10vh;
    /* background: purple; */
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: Sarabun, sans-serif;
    h2{
        width: 30px;
        height: 35px;
        background: #6D67CA;
            display: flex;
           
      font-weight: 400;
     font-size: 1.7rem;
    font-style: italic;
    color: rgba(255, 255, 255, .7);

    }
    h3{
        font-size: 25px;
        color: #FFFFFF;
        font-weight: 200;
    }
  }
  p{
    color: #888790;
    font-size: 20px;
  }
  .icons{
    width: 15%;
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
    .read{
      font-size: 40px;
      padding: 5px;
      border-radius: 50px;
      background: #ffff00c0;
    }
  }
`

