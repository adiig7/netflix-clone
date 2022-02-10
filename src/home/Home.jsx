import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import './home.scss'
import List from '../components/list/List'

const home = () => {
  return (
      <div className='home'>
      <Navbar />
      <Featured type="series" />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default home