import React from 'react'
import { Dashboard_container,Dashboard_holder,Dashboard_header,Sidebar,Myimg } from '../Components/DashboardStyle'
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom"

const Dashboard = () => {
  const [ active, setActive ] = React.useState("Contact")
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
                <h2 className={
                  active === 'Contact' ? "active" : ""
                }onClick={()=>setActive("Contact")}>Contact</h2>
                <h2 className={
                  active === 'Home' ? "active" : ""
                }onClick={()=>setActive("Home")}>Home</h2>
                <h2 className={
                  active === 'Blocked Contact' ? "active" : ""
                }onClick={()=>setActive("Blocked Contact")}>Blocked Contact</h2>
                <h2 className={
                  active === 'All Contact' ? "active" : ""
                }onClick={()=>setActive("All Contact")}>All Contact</h2>
                <h2 className={
                  active === 'Log-out' ? "active" : ""
                }onClick={()=>setActive("Log-out")}>Log-out</h2>
                
                <IoSettings className='set'/>
            </Sidebar>
        </Dashboard_holder>
    </Dashboard_container>

  )
}
export default Dashboard

