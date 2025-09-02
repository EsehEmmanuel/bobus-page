import React from 'react'
import { Dashboard_container,Dashboard_holder,Dashboard_header,Sidebar,Myimg } from '../Components/DashboardStyle'
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom"
const Dashboard = () => {
  return (
    <Dashboard_container>
        <Dashboard_holder>
            <Dashboard_header>
                <h2><Link to="/Login"><span>Dashboard</span></Link></h2>
                <Myimg>
                     <CgProfile className='img'/>
                < IoIosArrowDropdown className='drop' />
                </Myimg>
            </Dashboard_header>
            <Sidebar>
                <h2>Contact</h2>
                <IoSettings className='set'/>
            </Sidebar>
        </Dashboard_holder>
    </Dashboard_container>

  )
}
export default Dashboard

