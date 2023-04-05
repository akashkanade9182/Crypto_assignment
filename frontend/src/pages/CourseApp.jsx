import React, { useEffect, useState } from 'react'
import "../Style/CourseApp.css"
import axios from 'axios'


const getData = () => {
     return axios.get("https://rich-erin-sturgeon-suit.cyclic.app/getcourse/getdata")
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
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apps" width="72" height="72" viewBox="0 0 24 24" stroke-width="2" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="4" y="4" width="6" height="6" rx="1" />
                                        <rect x="4" y="14" width="6" height="6" rx="1" />
                                        <rect x="14" y="14" width="6" height="6" rx="1" />
                                        <line x1="14" y1="7" x2="20" y2="7" />
                                        <line x1="17" y1="4" x2="17" y2="10" />
                                   </svg>
                              </div>
                              <div className="iconcard" style={{ backgroundColor: "#ddf3fe" }}>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-apple-arcade" width="72" height="72" viewBox="0 0 24 24" stroke-width="2" stroke="#2346F5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="12" cy="5" r="2" />
                                        <path d="M20 12.5v4.75a0.734 .734 0 0 1 -.055 .325a0.704 .704 0 0 1 -.348 .366l-5.462 2.58a4.998 4.998 0 0 1 -4.27 0l-5.462 -2.58a0.705 .705 0 0 1 -.401 -.691l-.002 -4.75" />
                                        <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a0.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a0.691 .691 0 0 1 .028 -1.27z" />
                                        <line x1="12" y1="7" x2="12" y2="13" />
                                   </svg>
                              </div>
                              <div className="iconcard" style={{ backgroundColor: "#fdf0e0" }}>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="72" height="72" viewBox="0 0 24 24" stroke-width="2" stroke="#EB3823" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="7 8 3 12 7 16" />
                                        <polyline points="17 8 21 12 17 16" />
                                        <line x1="14" y1="4" x2="10" y2="20" />
                                   </svg>
                              </div>
                              <div className="iconcard" style={{ backgroundColor: "#eaf9e6" }}>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-like" width="72" height="72" viewBox="0 0 24 24" stroke-width="2" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="3" y="16" width="3" height="5" rx="1" />
                                        <path d="M6 20a1 1 0 0 0 1 1h3.756a1 1 0 0 0 .958 -.713l1.2 -3c.09 -.303 .133 -.63 -.056 -.884c-.188 -.254 -.542 -.403 -.858 -.403h-2v-2.467a1.1 1.1 0 0 0 -2.015 -.61l-1.985 3.077v4z" />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M5 12.1v-7.1a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-2.3" />
                                   </svg>
                              </div>
                              <div className="iconcard" style={{ backgroundColor: "#fee9e4" }}>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-python" width="72" height="72" viewBox="0 0 24 24" stroke-width="2" stroke="#EB3823" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
                                        <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
                                        <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
                                        <line x1="11" y1="6" x2="11" y2="6.01" />
                                        <line x1="13" y1="18" x2="13" y2="18.01" />
                                   </svg>
                              </div>
                         </div>
                         <div className="scrollbox">
                              {
                                   data && data.map((ele) => (
                                        <div className='cardrow'>
                                             <div className="card" style={{ width: "220px", display: "flex", marginTop: "25px" }}><span>{ele.name}</span><span style={{ fontSize: "20px", color: "#b7b7b7", fontWeight: "bold" }}>{ele.lessons} lessons</span></div>
                                             <div className="card" style={{ width: "150px", marginTop: "25px" }}>{ele.startDate}</div>
                                             <div className="card" style={{ width: "250px", marginTop: "25px" }}>{ele.completed + "/" + ele.lessons}</div>
                                             <div className="card" style={{ width: "200px", marginTop: "25px" }}>{ele.duration}</div>
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