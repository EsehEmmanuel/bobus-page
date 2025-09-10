import React from 'react'
import styled from 'styled-components';
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdWbSunny } from "react-icons/md";
import { BsFlower3 } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";

const Subheader = () => {
  return (
   <Sub>
    <div className="sub_icon">
    <IoIosMenu />
    <CiSearch />
    </div>
    <div className="sub_icon">
    <FaRegBell />
    <CgProfile />
    <MdWbSunny />
    <BsFlower3 />
    <IoLanguageOutline />
    </div>
   </Sub>
  )
}

export default Subheader
export const Sub = styled.div`
    width: 75%;
    height: 10vh;
    /* background-color: tomato; */
    position: fixed;
    top: 15%;
    left: 21%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sub_icon{
        font-size: 30px;
        gap: 40px;

    }
`