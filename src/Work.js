import React from 'react'
import './components/Layout.css'
import './work.css'
import awn from './assets/awn.png'
import manulife from './assets/manulife.png'
import novx from './assets/novx.png'
import coreavi from './assets/coreavi.png'
import Badge from 'react-bootstrap/Badge'

export const Work = () => (     
    <div id="work" className="layout-element">
        <h1 className="section-heading">Work Experience</h1>
        <div class="card">
            <img src={awn} className="awn-logo"/>
            <div class="container">
                <h4><b>Software Developer</b></h4>
                <p>Risk Platform - Backend </p>
                <h5><Badge className="date-badge">Jan. 2021 - Apr. 2021</Badge></h5>      
            </div>
        </div>
        <hr/>
        <div class="card">
            <img src={manulife} className="manulife-logo"/>
            <div class="container">
                <h4><b>Software Engineering Intern</b></h4> 
                <p>Group Benefit Claims Division - Backend</p>
                <h5><Badge className="date-badge">May 2020 - Aug. 2020</Badge></h5>
            </div>
        </div>
        <hr/>
        <div class="card">
            <img src={novx} className="novx-logo"/>
            <div class="container">
                <h4><b>Software Engineering Intern</b></h4> 
                <p>Mobile - UI</p> 
                <h5><Badge className="date-badge">Sept. 2019 - Dec. 2019</Badge></h5>
            </div>
        </div>
        <hr/>
        <div class="card">
            <img src={coreavi} className="coreavi-logo"/>
            <div class="container">
                <h4><b>DevOps Engineering Intern</b></h4> 
                <p>System Admin - Automation</p> 
                <h5><Badge className="date-badge">Jan. 2019 - Apr. 2019</Badge></h5>
            </div>
        </div>
    </div>
)