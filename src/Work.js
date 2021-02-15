import React from 'react'
import './components/Layout.css'
import awn from './assets/awn.png'
import manulife from './assets/manulife.png'
import novx from './assets/novx.png'
import coreavi from './assets/coreavi.png'

export const Work = () => (     
    <div id="work" className="layout-element">
        <h1 className="section-heading">Work Experience</h1>
        <div class="card">
            <img src={awn} className="awn-logo"/>
            <div class="container">
                <h4><b>Software Developer</b></h4> 
                <p>Risk Platform - Backend</p> 
            </div>
        </div>
        <div class="card">
            <img src={manulife} className="awn-logo"/>
            <div class="container">
                <h4><b>Software Engineering Intern</b></h4> 
                <p>Group Benefit Claims Division - Backend</p> 
            </div>
        </div>
        <div class="card">
            <img src={novx} className="awn-logo"/>
            <div class="container">
                <h4><b>Mobile Software Engineering Intern</b></h4> 
                <p>Frontend UI</p> 
            </div>
        </div>
        <div class="card">
            <img src={coreavi} className="awn-logo"/>
            <div class="container">
                <h4><b>DevOps Engineering Intern</b></h4> 
                <p>System Admin - Automation</p> 
            </div>
        </div>
    </div>
)