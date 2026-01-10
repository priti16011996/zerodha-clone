import React from 'react'

function Team() {
  return (
    <div className="container">
      <div className="row text-center border-top p-5">
        <h3>People</h3>
      </div>
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-4 p-4 text-center">
          <img src="images/nithinKamath.jpg" style={{borderRadius:"100%", width:"75%", marginLeft:"4.5vw"}} />
          <h5 className="pb-2 pt-3 text-muted" >Nitin Kamath</h5>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-6 p-5" style={{fontSize:"18px"}}>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on  <a href="" style={{textDecoration:'none'}}> HomePage /</a> <a href="" style={{textDecoration:'none'}}> TradingQnA /</a> <a href="" style={{textDecoration:'none'}}>Twitter</a></p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}

export default Team
