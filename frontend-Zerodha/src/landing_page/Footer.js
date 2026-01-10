import React from 'react'

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}  className="border-top mt-5">
      <div className="container">
          <div className="row p-5">
            <div className="col-3">
              <img src="images/logo.svg" alt="logo"  style={{width:"50%", marginLeft:"14px"}} />
              <p className="p-3">&copy; 2024-2026, Not Zerodha Broking Ltd.All right reserved. </p>
            </div>
            <div className="col-3">
              <h4>Company</h4><br/>
              <a className="StyleLink" href="">About</a><br/>
              <a className="StyleLink" href="">Products</a><br/>
              <a className="StyleLink"href="">Pricing</a><br/>
              <a className="StyleLink" href="">Referral programme</a><br/>
              <a className="StyleLink" href="">Careers</a><br/>
              <a className="StyleLink" href="">Zerodha.tech</a><br/>
              <a className="StyleLink" href="">Press & media</a><br/>
              <a className="StyleLink" href="">Zerodha cares(CSR)</a><br/>
            </div>
            <div className="col-3">
              <h4>Supports</h4><br/>
              <a className="StyleLink" href="">Contact</a><br/>
              <a className="StyleLink" href="">Support portal</a><br/>
              <a className="StyleLink" href="">z-connect blog</a><br/>
              <a className="StyleLink"href="">List of charges</a><br/>
              <a className="StyleLink" href="">Downlod and resource</a><br/>
            </div>
            <div className="col-3">
              <h4>Actions</h4><br/>
              <a className="StyleLink" href="">Open an account</a><br/>
              <a className="StyleLink" href="">Fund transfer</a><br/>
              <a className="StyleLink" href="">60 day challenge</a><br/>
            </div>
          </div>
          <div className="row pt-5">
            <p className="text-muted">Zerodha Broking Ltd: Member of NSE & BSE-SEBI Registration no:INZ000031633 CDSL:Depository services through Zerodha Securities Pvt Ltd. -SEBI Registration no IN-DP 100 3859 accomodity Trading through zerodha commodities Pvt Ltd MCX: 46025 -SEBI Registration no:INZ000038238 Registred Address: Zerodha Broking Ltd, #153/156, 4 th Cross , Dollar, Near Sahil Properties Block-H Mother diary </p>
            <p className="text-muted">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p className="text-muted">Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p className="text-muted">Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) 
            will not have access to the exchange investor grievance redressal forum,
            SEBI SCORES/ODR, or arbitration mechanism for such products</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer

