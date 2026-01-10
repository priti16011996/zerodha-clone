import React from 'react'

function Universe() {
  return (
    <div className="container text-center mt-5 p-5">
      <div className="row">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="row p-5">
          <div className="col-4 p-3">
            <img src="images/zerodhaFundhouse.png" style={{width:"60%"}}/>
            <p className="text-muted mt-2">Our asset management venture <br/> that is creating simple and transparent index  <br/>funds to help you save for your goals.</p>
          </div>
          <div className="col-4 p-3">
            <img src="images/sensibullLogo.svg" style={{width:"60%"}}/>
            <p className="text-muted mt-4">Options trading platform that lets you <br/> create strategies, analyze positions, and examine   <br/>data points like open interest, FII/DII, and more.</p>
          </div>
          <div className="col-4 p-3">
            <img src="images/tijori.svg" style={{width:"40%"}}/>
            <p className="text-muted mt-2">Investment research platform <br/> that offers detailed insights on stocks,<br/>sectors, supply chains, and more.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-3">
            <img src="images/streakLogo.png" style={{width:"50%"}}/>
            <p className="text-muted mt-2">Systematic trading platform  <br/> that allows you to create and backtest   <br/>strategies without coding.</p>
          </div>
          <div className="col-4 p-3">
            <img src="images/smallcaseLogo.png" style={{width:"60%"}}/>
            <p className="text-muted mt-3">Thematic investing platform  <br/> that helps you invest in diversified   <br/>baskets of stocks on ETFs.</p>
          </div>
          <div className="col-4 p-3">
            <img src="images/dittoLogo.png" style={{width:"35%"}}/>
            <p className="text-muted mt-3">Personalized advice on life  <br/> that is creating simple and transparent index  <br/>and health insurance. No spam </p>
          </div>
        </div>
        <div className="row">
          <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"15%", margin:"0 auto"}}>SignUp Now</button>
        </div>
      </div>
    </div>
  )
}

export default Universe
