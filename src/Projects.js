import React from 'react'
import './components/Layout.css'
import './projects.css'
import awntest from './assets/awn.png';

export const Projects = () => (     
    <div id="projects" className="layout-element">
        <h1 className="section-heading">Projects</h1>
        <div className="projects-horizontal-flexbox">

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={awntest} alt="Avatar" className="icontest"/>
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
                        <img src={awntest} alt="Avatar" className="icontest"/>
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
                        <img src={awntest} alt="Avatar" className="icontest"/>
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