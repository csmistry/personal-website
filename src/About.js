import React from 'react'
import './components/Layout.css'
import wloo from './assets/wlooEng.png'


export const About = () => (     
          <div id="about" className="layout-element">
            <h1 className="section-heading">About Me </h1>
            <div>
              <div className="horizontal-flexbox">
                <img className="horizontal-flexbox-child" src={wloo}/>
                <p className="horizontal-flexbox-child">
                I'm currently a <b>3rd year Computer Engineeering student</b> studying at the University of Waterloo located in Waterloo, Ontario. I chose Computer Engineering because <b>I want to learn about the technology that drives our everyday lives.</b>
                Whether it's the phone inside your pocket or the large networks that keep you connected with the world, computers and computer systems are everywhere. Computer Engineering for me is the best of both worlds, I have the opportunity to learn about both the 
                hardware and software aspect of computers. In our daily lives we don't get to see the low level hardware and components that make up the devices we use, instead we interact with the software. Software applications are integrated into our lives; Ordering food,
                making bank transactions, shopping, sharing pictures with friends ... all these things are just a few clicks away.
                </p>
              </div>
              <div className="horizontal-flexbox">
                <p>
                As you will see from my experiences section, I've developed a <b>passion towards software and learning how we can leverage software to make our lives easier. I enjoy working with others to solve complex problems and design creative solutions.</b> I've completed 3 co-op terms so far,
                and in each term I've made meaningful contributions that I can look back on. My goal is to use each work term as an opportunity to not only learn and try new things in the software industry but to also make positive impacts and contributions in each company that I work for.
                Having tried DevOps/Automation, Mobile Development and Backend Development, <b>I find Backend Development to be the most interesting.</b> Why? Because I feel that the complexity, range and variety of problems exponentially increase as you lift up the curtain of modern day software applications.
                I hope to encounter, learn and find solutions to these problems as I continue exploring the world of technology and software.
                </p>
              </div>
            </div>
          </div>
)