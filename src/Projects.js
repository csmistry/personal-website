import React from 'react'
import './components/Layout.css'
import './projects.css'
import Badge from 'react-bootstrap/Badge'   
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
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={jumbopic} className="project-images"/>
                        <div >
                            <h4><b>Personal Website</b></h4>
                            <h5><Badge className="project-badge">Project</Badge></h5>
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
                            <h5><Badge className="project-badge">Published Article</Badge></h5>
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