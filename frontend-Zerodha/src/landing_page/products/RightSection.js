import React from 'react'

function RightSection({imageSrc,title,Description,tryDemoUrl}) {
  return (
    <div className="container border-top p-5">
      <div className="row">
        <div className="col-6 p-5">
          <h2>{title}</h2>
          <p>{Description}</p>
          <a href={tryDemoUrl} style={{textDecoration:"none"}}>Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col-6 text-center">
          <img src={imageSrc} ></img>
        </div>
      </div>
    </div>
  )
}

export default RightSection
