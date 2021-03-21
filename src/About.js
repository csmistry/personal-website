import React from 'react'
import './components/Layout.css'
import wloo from './assets/wlooEng.png'
import './about.css'


export const About = () => (     
          <div id="about" className="layout-element">
            <h1 className="section-heading">About Me </h1>
            <div>
              <h4>Hey there! My name is Chintan and welcome to my website. Keep reading to learn more about me and some of my past experiences.</h4>
              <div className="horizontal-flexbox">
            
                  <ul className="list">
                    <h5><li>Starting my 3rd year of Computer Engineering at University of Waterloo</li></h5>
                    <h5><li>An avid learner who's always looking for new ways to leverage Software & Technology to make our lives easier</li></h5>
                    <h5><li>I've gained a wide variety of both techincal and interpersonal skills through previous internships</li></h5>
                    <h5><li>Enjoy working with others to create effective solutions for complex problems</li></h5>
                    <h5><li>Interested in both Backend & Full-Stack Development</li></h5>
                    <h5><li>Proficient in C++, C and Golang</li></h5>                                  
                  </ul>
              </div>
              <h4>Things I enjoy outside of work and school ...</h4>
              <div className="horizontal-flexbox">
            
                  <ul className="list">
                    <h5><li>During Summer, finding hiking trails with great views!</li></h5>
                    <h5><li>During Winter, Ice Skating as much as I can :)</li></h5>
                    <h5><li>Top 3 shows: Game of Thrones, Silicon Valley, The Office</li></h5>
                    <h5><li>Staying informed about new emerging tech and current isssues in the tech space</li></h5>
                    <h5><li>Building things with new tools and frameworks during Hackathons</li></h5>                              
                  </ul>
              </div>
            </div>
          </div>
)
