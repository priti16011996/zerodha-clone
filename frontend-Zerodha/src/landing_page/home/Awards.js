import React from 'react'
function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="images/largestBroker.svg" alt="brokerimages" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">2+ million zerodha client contibute to over 15% of all retail order volume in india daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>SIPs</li>
                                <li>Direct Mutul Funds</li>
                                <li>Stocks and IPOs</li>
                            </ul>
                        </div>
                    </div> 
                    <img src="images/pressLogos.png"  alt="press Logos" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;