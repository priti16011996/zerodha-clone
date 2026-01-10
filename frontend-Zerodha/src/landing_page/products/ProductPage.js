import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
  return (
    <>
        <Hero />
        <LeftSection imageSrc="images/Kite.png" title="Kite" Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemoUrl="" LearnMoreUrl="" GooglePlayImgUrl="" PlayStoreImhUrl="" />
        <RightSection imageSrc="images/console.png" title="Console" Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemoUrl="" />
        <LeftSection imageSrc="images/coin.png" title="Coin" Description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemoUrl="" LearnMoreUrl="" GooglePlayImgUrl="" PlayStoreImhUrl="" />
        <RightSection imageSrc="images/kiteconnect.png" title="Kite Connect API" Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tryDemoUrl="" />
        <LeftSection imageSrc="images/varsity.png" title="Varsity mobile" Description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemoUrl="" LearnMoreUrl="" GooglePlayImgUrl="" PlayStoreImhUrl="" />
        <p className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        <Universe />
    </>
  )
}

export default ProductPage
