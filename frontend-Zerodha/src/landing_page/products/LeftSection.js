import React from 'react'

function LeftSection({imageSrc,title,Description,tryDemoUrl,LearnMoreUrl,GooglePlayImgUrl,PlayStoreImhUrl}) {
  return (
    <div className="container border-top p-5">
      <div className="row">
        <div className="col-6 text-center">
          <img src={imageSrc} ></img>
        </div>
        <div className="col-6 p-5">
          <h2>{title}</h2>
          <p>{Description}</p>
          <a href={tryDemoUrl} style={{textDecoration:"none"}}>Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={LearnMoreUrl} style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br/><br/>
          <a href={GooglePlayImgUrl}>
            <img src="images/appstoreBadge.svg" />
          </a>
          <a href={PlayStoreImhUrl}>
            <img src="images/googlePlayBadge.svg" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
