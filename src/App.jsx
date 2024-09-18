import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title'
import Programs from './components/Programs/Programs'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title title={"Our PROGRAM"} subtitle={"What We Offer"}/>
      <Programs/>
      <About/>
      <Title title={"Gallery"} subtitle={"Campus Photos"}/>
      <Campus/>
      <Title title={"TESTIMONIALS"} subtitle={"What Student Says"}/>
      <Testimonial/>
      <Title title={"Contact Us"} subtitle={"Get in Touch"}/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
