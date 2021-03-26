import React from 'react'
import './components/Layout.css'
import wloo from './assets/wlooEng.png'
import './about.css'
import myPic from './assets/myFace.jpg'
import Backend from './assets/backend.jpeg'


export const About = () => (     
          <div id="about" className="layout-element">
            <h1 className="section-heading">About Me </h1>
            <div>
              <h5>Hey there! My name is Chintan and welcome to my website. Keep reading to learn more about me and some of my past experiences.</h5>
              <div className="about-horizontal-flexbox">
                <div>
                    <ul className="list">
                      <h6><li className="li-abt">Starting my 3rd year of Computer Engineering at University of Waterloo</li></h6>
                      <h6><li className="li-abt">An avid learner who's always looking for new ways to leverage technology to make our lives easier</li></h6>
                      <h6><li className="li-abt">I've gained a wide variety of both techincal and interpersonal skills through previous internships</li></h6>
                      <h6><li className="li-abt">Enjoy working with others to create effective solutions for complex problems</li></h6>
                      <h6><li className="li-abt">Interested in both Backend & Full-Stack Development</li></h6>
                      <h6><li className="li-abt">Proficient in C++, C and Golang</li></h6>                                  
                    </ul>
                </div>
                <div>
                  <img src={myPic} alt="Avatar" className="myPic-img"/>
                  <img className="wloo-img" src={wloo} alt="Avatar"/>
                </div>
              </div>
              <h5>Things I enjoy outside of work and school ...</h5>
              <div className="about-horizontal-flexbox">
                <div>
                    <ul className="list">
                      <h6><li className="li-abt">During Summer, finding hiking trails with great views!</li></h6>
                      <h6><li className="li-abt">During Winter, Ice Skating as much as I can :)</li></h6>
                      <h6><li className="li-abt">Top 3 shows: Game of Thrones, Silicon Valley, The Office</li></h6>
                      <h6><li className="li-abt">Staying informed about new emerging tech and current isssues in the tech space</li></h6>
                      <h6><li className="li-abt">Building things with new tools and frameworks during Hackathons</li></h6>                              
                    </ul>
                </div>
                <div>
                  <img src={Backend} alt="Avatar" className="backend-img"/>
                </div>
              </div>
            </div>
          </div>
)
