import React from 'react'
function Eduction() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 mb-5">
                    <img src="images/education.svg" alt="eduction image" style={{width:"70%"}}/>
                </div>
                <div className="col-6  mt-5">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p className="text-muted">Varsity the largest online stock market education book in the world covering everything from the basics to advance trading</p>
                    <a href="" style={{textDecoration:"none"}}>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br/><br/>
                    <p className="text-muted">TradingQ&A, the most active trading and investment market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

        </div>

     );
}

export default Eduction;