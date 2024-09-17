import React from 'react'
import './Campus.css'
import images from '../../assets/images'


const Campus = () => {
  return (
    <div className='campus container' >
      <div className="gallery">
        <img src={images.gallery1} alt="" />
        <img src={images.gallery2} alt="" />
        <img src={images.gallery3} alt="" />
        <img src={images.gallery4} alt="" />
      </div>
      <button className='btn dark-btn' >See more here <img src={images.whiteArrow} alt="" /></button>
    </div>
  )
}

export default Campus
