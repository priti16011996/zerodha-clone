import React from 'react'
function Hero() {
    return ( 
        <>
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="images/homeHero.png" className="mb-5"></img>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stock, derivatives, mutual funds, option trading</p>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"15%", margin:"0 auto"}}>SignUp Now</button>
            </div>

        </div>
        
        </>
    );
}

export default Hero;