import React, { useEffect, useState } from 'react'
import "../Style/CourseApp.css"
import axios from 'axios'


const getData = () => {
     return axios.get("http://localhost:7000/getdata")
}

const CourseApp = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
          getData().then((r) => {
               setData(r.data)
          }).catch((e) => {
               alert("error in getting data")
               console.log(e)
          })
     }, [])
     return (
          <div className='courseappbox' >
               <header>
                    <h1>My Courses</h1>
                    <h1 style={{ color: "blueviolet" }}>View All</h1>
               </header>
              
               <div className='tablebox'>
                    <div className="tablehead">
                         <div className='heading' style={{ width: "300px" }}>Course Name</div>
                         <div className='heading' style={{ width: "150px" }}>Start Date</div>
                         <div className='heading' style={{ width: "250px" }}>Lesson completed</div>
                         <div className='heading' style={{ width: "200px" }}>Duration</div>

                    </div>
                    <div className="contentbox">
                         <div className="iconbox">
                              <div className="iconcard" style={{ backgroundColor: "#886bd2" }}>

                              </div>
                              <div className="iconcard" style={{ backgroundColor: "#ddf3fe" }}>

                              </div>
                              <div className="iconcard" style={{ backgroundColor: "#fdf0e0" }}>

                              </div>
                              <div className="iconcard" style={{ backgroundColor: "#eaf9e6" }}>

                              </div>
                              <div className="iconcard" style={{ backgroundColor: "#fee9e4" }}>

                              </div>
                         </div>
                         <div className="scrollbox">
                              {
                                   data && data.map((ele)=>(
                                        <div className='cardrow'>
                                             <div className="card" style={{ width: "220px",display:"flex",marginTop:"25px" }}><span>{ele.name}</span><span style={{fontSize:"20px",color:"#b7b7b7",fontWeight:"bold"}}>{ele.lessons} lessons</span></div>
                                             <div className="card" style={{ width: "150px",marginTop:"25px" }}>{ele.startDate}</div>
                                             <div className="card" style={{ width: "250px" ,marginTop:"25px"}}>{ele.completed+"/"+ele.lessons}</div>
                                             <div className="card" style={{ width: "200px",marginTop:"25px" }}>{ele.duration}</div>
                                        </div>
                                   ))
                              }
                         </div>
                    </div>


               </div>
          </div >
     )
}

export default CourseApp;