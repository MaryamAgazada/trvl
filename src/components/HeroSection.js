import React from 'react'
import { Button } from './Button'
import "../App.css"
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src="/videos/travel.mp4" autoPlay loop muted/>
      <h1>ADVENTURES AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button 
        className="btns"
         buttonStyle="btn--outline"
          buttonSize="btn--large">GET STARTED</Button>

           <Button 
        className="btns"
         buttonStyle="btn--primary"
          buttonSize="btn--medium">WATCH TRAILER <i className='far fa-play-circle'/>
          </Button>
      </div>
    </div>
  )
}

export default HeroSection
