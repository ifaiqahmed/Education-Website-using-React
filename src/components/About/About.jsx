import React from 'react'
import './About.css'
import images from '../../assets/images'

const About = () => {
  return (
    <div className='about container'>
      <div className='about-left'>
        <img src={images.about} className='about-img' />
        <img src={images.playIcon} className='play-icon' />
        
      </div>

      <div className="about-content">
      <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae tempora quis odio ex in minus consectetur quam adipisci quos sint, pariatur harum eum vel at architecto qui maiores minima?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, modi aperiam. Sapiente voluptatibus aliquam, eaque necessitatibus repellendus quibusdam mollitia suscipit id, similique illo molestias ad cupiditate modi ipsum, doloremque veniam?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae perferendis soluta eaque sunt doloremque eveniet reprehenderit aut, quibusdam eum minus hic, debitis ea et nobis tempora, dolore maxime! Officia, iusto!</p>

      </div>
    </div>
  )
}

export default About
