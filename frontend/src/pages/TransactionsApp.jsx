import React from 'react'
import "../Style/TransectionApp.css"

const TransactionsApp = () => {
  return (
    <div className="transectionapp">
      <div className="nav">
        <h1>Last Trasections</h1>
        <h1>Sell All</h1>
      </div>
      <div className='cards'>
          <div>
            <img className="avatar" src="https://bit.ly/sage-adebayo" alt="" />

          </div>
          <div className='firstbox'>
              <div>
              Aokiji
              </div>
              <div>
                <h1> 28 Feb 2023</h1>
                <h1> 06.23PM</h1>
               
              </div>

          </div>
        <div className="secondbox">
              <div >
                +$13.00
              </div>
              <div>
                Received
              </div>
        </div>
      </div>
      <div className='cards'>
          <div>
            <img className="avatar" src="https://bit.ly/code-beast" alt="" />

          </div>
          <div className='firstbox'>
              <div>
               Kizaru
              </div>
              <div>
                <h1> 28 Feb 2023</h1>
                <h1>  06.23PM</h1>
              
              </div>

          </div>
        <div className="secondbox">
              <div style={{color:"red"}}>
                -$9.00
              </div>
              <div>
                Outgoing
              </div>
        </div>
      </div>
      <div className='cards' >
          <div>
            <img className="avatar" src="https://bit.ly/prosper-baba" alt="" />

          </div>
          <div className='firstbox'>
              <div>
               akainu
              </div>
              <div>
                <h1> 28 Feb 2023</h1>
                <h1> 06.23PM</h1>
               
              </div>

          </div>
        <div className="secondbox">
              <div >
                +$11.00
              </div>
              <div>
                Received
              </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionsApp