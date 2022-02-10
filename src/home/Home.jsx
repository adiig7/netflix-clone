import React from 'react'
import Navbar from '../components/Navbar'
import Featured from '../featured/Featured'
import './home.scss'

const home = () => {
  return (
      <div className='home'>
      <Navbar />
      <Featured type="series"/>
    </div>
  )
}

export default home