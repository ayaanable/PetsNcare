import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar></Navbar>
      <Features1 feature1ImgSrc="https://images.unsplash.com/photo-1526674183561-4bfb419ab4e5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjIzMzMwOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"></Features1>
      <CTA></CTA>
      <Features2
        feature1Title="Pet Sitting"
        feature3Title="Tips"
        feature1ImgSrc="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjIzMzIzMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature3Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      ></Features2>
      <Steps></Steps>
      <Testimonial review1="I had the best experience. I have a pet dog and now i don't need to think twice before leaving for a business meeting.\n"></Testimonial>
      <Contact
        email1="info@petnest.in"
        phone1="+91 7488823276"
        address1="LPU, 144411, Jalandhar, Punjab, India\n"
        content4="Follow us on social media for more updates and tips!"
      ></Contact>
      <Footer content3="Stay Paw-sitive.\n"></Footer>
    </div>
  )
}

export default Home
