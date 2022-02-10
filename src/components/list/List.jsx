import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import ListItem from './../listitem/ListItem'
import './list.scss'

const List = () => {
  return (
      <div className='list'>
          <span className="listTitle">Contine Watching</span>
          <div className="wrapper">
              <ArrowBackIosOutlined className='sliderArrow left' />
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
              </div>
              <ArrowForwardIosOutlined className='sliderArrow right'/>
          </div>
    </div>
  )
}

export default List