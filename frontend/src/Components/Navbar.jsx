import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"
const links=[
     {
          title: "OrderStatsApp",
          path: "/"
     },
     {
          title: "TransactionsApp",
          path: "/trasectionapp"
     },
     {
          title: "CourseApp",
          path: "/courseapp"
     },
     {
          title: "Homescreen",
          path: "/homescreen"
     }
  
]


const Navbar = () => {
  return (
    <div className='navbar' >
   
   {
         links.map((ele,index)=>(
          <NavLink style={{ textDecoration: 'none' }} key={index} to={ele.path}><h1 className='navlinks' >{ele.title}</h1></NavLink>
         ))
        }
    </div>
  )
}

export default Navbar