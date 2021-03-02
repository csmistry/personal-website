import React from 'react'
import './components/Layout.css'
import './projects.css'
import Badge from 'react-bootstrap/Badge' 
import Button from 'react-bootstrap/Button'  
import htn from './assets/htn.png';
import newhacks from './assets/newhacks.png';
import jumbopic from './assets/jumbo-home.png'
import citytracker from './assets/citytracker.png'
import kafka from './assets/kafka.png'
import webcrawler from './assets/webcrawler.png'

export const Projects = () => (     
    <div id="projects" className="layout-element">
        <h1 className="section-heading">Projects</h1>
        <div className="projects-horizontal-flexbox">

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={htn} className="project-images"/>
                        <div >
                            <h4><b>Tracademic</b></h4>
                            <h5><Badge className="hackathon-badge">Hackathon</Badge></h5>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p>
                            Competed as a team of 4 in Canada's Biggest Hackathon to develop a smarter and easier way for students to track their academic progress 
                        </p>
                        
                        <h7><b>Tech Stack</b></h7>
                        <div className="projects-horizontal-flexbox">
                            <h6><Badge className="tech-badge">Flutter</Badge></h6>{' '}
                            <h6><Badge className="tech-badge">Dart</Badge></h6>{' '}
                            <h6><Badge className="tech-badge">SQLite</Badge></h6>{' '}
                        </div>
                        <div className="btnDiv">
                            <Button variant="outline-info" className="project-button" target="_blank" href="https://devpost.com/software/tracademic">View Project</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={jumbopic} className="project-images"/>
                        <div >
                            <h4><b>Personal Website</b></h4>
                            <h5><Badge className="project-badge">Side Project</Badge></h5>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p>I wanted to learn React and work with JavaScript so I thought what better way then to make my own website from scratch!</p>
                        <h7><b>Tech Stack</b></h7>
                        <div className="projects-horizontal-flexbox">
                            <h6><Badge className="tech-badge">React</Badge></h6>{' '}
                            <h6><Badge className="tech-badge">React-Bootstrap</Badge></h6>{' '}
                            <h6><Badge className="tech-badge">HTML</Badge></h6>{' '}
                        </div>
                        <div className="projects-horizontal-flexbox">
                            <h6><Badge className="tech-badge">JavaScript</Badge></h6>{' '}
                            <h6><Badge className="tech-badge">CSS</Badge></h6>{' '}
                        </div>
                        <div className="btnDiv">
                            <Button variant="outline-info" className="project-button" target="_blank" href="https://github.com/csmistry/personal-website">View GitHub</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={webcrawler} className="web-crawler-image"/>
                        <div>
                            <h4><b>Multi-Threaded Web Crawler</b></h4>
                            <h5><Badge className="course-badge">Course Project</Badge></h5>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            

        </div>
        <div className="projects-horizontal-flexbox">

        <div className="flip-card">
                <div className="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={citytracker} className="city-tracker-image"/>
                        <div >
                            <h4><b>City Tracker</b></h4>
                            <h5><Badge className="course-badge">Data Structures Project</Badge></h5>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={kafka} className="kafka-image"/>
                        <div>
                            <h4><b>A Quick Introduction to Kafka</b></h4>
                            <h5><Badge className="project-badge">Side Project</Badge></h5>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
       
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={newhacks} className="project-images"/>
                        <div >
                            <h4><b>StockIt</b></h4>
                            <h5><Badge className="hackathon-badge">Hackathon</Badge></h5>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
)