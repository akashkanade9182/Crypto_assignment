import React from 'react'

import {Routes,Route} from "react-router-dom"
import OrderStatsApp from './OrderStatsApp'
import TransactionsApp from './TransactionsApp'
import CourseApp from './CourseApp'
import Homescreen from './Homescreen'


const AllRoutes = () => {
  return (
    <Routes>
   <Route path='/'  element={<OrderStatsApp/>} />
   <Route path='/trasectionapp' element={<TransactionsApp/>} />
   <Route path='/courseapp'    element ={<CourseApp/>}  />
   <Route path='/homescreen'    element ={<Homescreen/>}  />

    </Routes>
  )
}

export default AllRoutes