import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef } from 'react'
import ListItem from './../listitem/ListItem'
import './list.scss'

const List = () => {
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingCLientRect().x - 50
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else {
      listRef.current.style.transform =  `translateX(${-230+ distance}px)`
    }
  }
  return (
      <div className='list'>
          <span className="listTitle">Contine Watching</span>
          <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick('left')}/>
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
              </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={handleClick('right')}/>
          </div>
    </div>
  )
}

export default List