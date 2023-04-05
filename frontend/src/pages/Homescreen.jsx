import React from 'react'
import "../Style/Homescreen.css"
const Homescreen = () => {
  return (
    <div className="homescreen">

      <div className="nav">
        <div>
          <button className='logobtn' style={{ backgroundColor: "black", color: "white", fontSize: "18px" }}>music</button>
        </div>
        <div className='navfeature'>
          <div className='searchbox' >
            <input type="search" placeholder='search' />
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>
        </div>
      </div>
      <div className="tagbox">
        <button className='tagbtn'>#Top</button>
        <button className='tagbtn'>#Rock</button>
      </div>
      <div className='headingbox'>
        <h1>A Responsibly As Tech Leading ,Global Company</h1>
        <h4>Creating Superior Products and Services</h4>

      </div>
      <div className="gradientbox">
        <div className="playbox">
          <button className='playbtn'>
            play
          </button>
          
        </div>
        <div className="percentagebox">
          <div>
            72%
          </div>
          <div>
            28%
          </div>
        </div>

      </div>
      <div className="bottombtnbox">
        <button className='signupbtn'>
          Signup to get 50% Off
        </button>
        <button className='explorebtn'>
          Explore new Products
        </button>

      </div>

    </div>
  )
}

export default Homescreen