import React from 'react'
import "../Style/OrderstatApp.css"

const OrderStatsApp = () => {
     return (
          <div className='orderstateapp-box'>
               <div className="mainbox">
                    <div className="card" style={{ height: "100px" }}>
                         <div className='upperdiv'>
                              <h1>Revenue</h1>
                              <div className='arrowbox'>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-down" width="30" height="30" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="16" y1="15" x2="12" y2="19" />
                                        <line x1="8" y1="15" x2="12" y2="19" />
                                   </svg>
                                   <p style={{ color: "red" }}>10%</p>
                              </div>

                         </div>
                         <div className='readingbox'>
                              <div className='circle'>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="17" y1="7" x2="7" y2="17" />
                                        <polyline points="8 7 17 7 17 16" />
                                   </svg>
                              </div>
                              <h1>$2.041</h1>
                         </div>
                    </div>
                    <div className="card" style={{ height: "100px" }}>
                         <div className='upperdiv'>
                              <h1>Orders</h1>
                              <div className='arrowbox'>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#74c696" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="16" y1="9" x2="12" y2="5" />
                                        <line x1="8" y1="9" x2="12" y2="5" />
                                   </svg>
                                   <p style={{ color: "#74c696" }}>20%</p>
                              </div>

                         </div>
                         <div className='readingbox'>
                              <div className='circle' style={{ backgroundColor: "#74c696" }}>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l14 1l-1 7h-13" />
                                   </svg>
                              </div>
                              <h1>356</h1>
                         </div>
                    </div>
                    <div className="card" style={{ height: "100px" }}>
                         <div className='upperdiv'>
                              <h1>Dine in</h1>
                              <div className='arrowbox'>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#74c696" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="16" y1="9" x2="12" y2="5" />
                                        <line x1="8" y1="9" x2="12" y2="5" />
                                   </svg>
                                   <p style={{ color: "#74c696" }}>10%</p>
                              </div>

                         </div>
                         <div className='readingbox'>
                              <div className='circle' style={{ backgroundColor: "red" }}>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="7" y1="4" x2="17" y2="20" />
                                        <line x1="17" y1="4" x2="7" y2="20" />
                                   </svg>
                              </div>
                              <h1>220</h1>
                         </div>
                    </div>
                    <div className="card" style={{ height: "100px" }}>
                         <div className='upperdiv'>
                              <h1>Take away</h1>
                              <div className='arrowbox'>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-down" width="30" height="30" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="16" y1="15" x2="12" y2="19" />
                                        <line x1="8" y1="15" x2="12" y2="19" />
                                   </svg>
                                   <p style={{ color: "red" }}>5%</p>
                              </div>

                         </div>
                         <div className='readingbox'>
                              <div className='circle' style={{ backgroundColor: "#f5c35c" }}>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="4" y1="7" x2="20" y2="7" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                   </svg>
                              </div>
                              <h1>135</h1>
                         </div>
                    </div>

               </div>
          </div>
     )
}

export default OrderStatsApp