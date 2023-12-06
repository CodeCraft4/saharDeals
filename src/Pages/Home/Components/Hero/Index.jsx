import React from 'react'
import Navigation from './Navbar/Index'
import SwipeableTextMobileStepper from './Header/Index'

const HeroSection = () => {
  return (
    <div>
       <nav>
        <Navigation/>
       </nav>
       <header>
        <SwipeableTextMobileStepper/>
       </header>
    </div>
  )
}

export default HeroSection
