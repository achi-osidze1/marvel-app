import React from 'react'
import background from '../images/background.jpg'
import '../background/Background.css'

const Background = () => {
  return (
    <div className='background-container'>
        <img className='img' src={background} alt=''/>
    </div>
  )
}

export default Background