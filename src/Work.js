import React from 'react'
import './components/Layout.css'
import './work.css'
import awn from './assets/awn.png'              //source: https://arcticwolf.com/
import manulife from './assets/manulife.png'    //source: https://download.logo.wine/logo/Manulife/Manulife-Logo.wine.png
import novx from './assets/novx.png'            //source: https://www.novxsystems.com/img/novx_logo.png
import coreavi from './assets/coreavi.png'      //source: https://coreavi.com/wp-content/uploads/thegem-logos/logo_0ba485f7cae143708e221129728d4f25_2x.png
import Badge from 'react-bootstrap/Badge'

export const Work = () => {

    //this.showDiv = this.showDiv.bind(this);

    const showDiv = (e) => {
        var childDivID = "" + e.id + e.id;
        var x = document.getElementById(childDivID);
        if (x.style.opacity == 0) {
            x.style.opacity = 1;
            
        } else {
            x.style.opacity = 0;
        }
    }
    
    return (     
    <div id="work" className="layout-element">
        <h1 className="section-heading">Work Experience</h1>
        
        <div className="work-element">
            <div className="work-horizontal-flexbox">
                <div id={1} className="card" onClick={() => this.showDiv}>
                    <img src={awn} className="awn-logo"/>
                    <div className="container">
                        <h4><b>Software Developer</b></h4>
                        <p>Risk Platform - Backend </p>
                        <h5><Badge className="date-badge">Jan. 2021 - Apr. 2021</Badge></h5>      
                    </div>
                </div>
                <div id={11}  className="work-details">
                    <div className="work-overview">
                        <h5 className="work-subsection-heading"><b>Overview:</b></h5>
                        <ul>
                            <li>First point</li>
                            <li>Second point</li>
                            <li>Third point</li>
                            <li>First point</li>
                            <li>Second point</li>
                            <li>Third point</li>
                        </ul>
                    </div>
                    <div className="tech-stack">
                         <h5 className="work-subsection-heading"><b>Tech Stack:</b></h5>
                         <Badge className="tech-badge">Golang</Badge>{' '}
                         <Badge className="tech-badge">AWS</Badge>{' '}
                         <Badge className="tech-badge">PostgresSQL</Badge>{' '}
                         <Badge className="tech-badge">Shell</Badge>{' '}
                    </div>
                </div>
            </div>
        </div>

        <hr/>

        <div className="work-element">
            <div className="work-horizontal-flexbox">
                <div className="card">
                    <img src={manulife} className="manulife-logo"/>
                    <div className="container">
                        <h4><b>Software Engineering Intern</b></h4> 
                        <p>Group Benefit Claims Division - Backend</p>
                        <h5><Badge className="date-badge">May 2020 - Aug. 2020</Badge></h5>
                    </div>
                </div>
                <div className="work-details">
                    <div className="work-overview">
                        <h5 className="work-subsection-heading"><b>Overview:</b></h5>
                        <ul>
                            <li>First point</li>
                            <li>Second point</li>
                            <li>Third point</li>
                            <li>First point</li>
                            <li>Second point</li>
                            <li>Third point</li>
                        </ul>
                    </div>
                    <div className="tech-stack">
                         <h5 className="work-subsection-heading"><b>Tech Stack:</b></h5>
                         <Badge className="tech-badge">Golang</Badge>{' '}
                         <Badge className="tech-badge">AWS</Badge>{' '}
                         <Badge className="tech-badge">PostgresSQL</Badge>{' '}
                         <Badge className="tech-badge">Shell</Badge>{' '}
                    </div>
                </div>
            </div>
        </div>

        <hr/>

        <div className="work-element"> 
            <div className="work-horizontal-flexbox">
                <div className="card">
                    <img src={novx} className="novx-logo"/>
                    <div className="container">
                        <h4><b>Software Engineering Intern</b></h4> 
                        <p>Mobile - UI</p> 
                        <h5><Badge className="date-badge">Sept. 2019 - Dec. 2019</Badge></h5>
                    </div>
                </div>
                <div className="work-details">
                    <div className="work-overview">
                        <h5 className="work-subsection-heading"><b>Overview:</b></h5>
                        <ul>
                            <li>First point</li>
                            <li>Second point</li>
                            <li>Third point</li>
                            <li>First point</li>
                            <li>Second point</li>
                            <li>Third point</li>
                        </ul>
                    </div>
                    <div className="tech-stack">
                         <h5 className="work-subsection-heading"><b>Tech Stack:</b></h5>
                         <Badge className="tech-badge">Golang</Badge>{' '}
                         <Badge className="tech-badge">AWS</Badge>{' '}
                         <Badge className="tech-badge">PostgresSQL</Badge>{' '}
                         <Badge className="tech-badge">Shell</Badge>{' '}
                    </div>
                </div>
            </div> 
        </div>    

        <hr/>
        
        <div className="work-element">
            <div className="work-horizontal-flexbox">   
                <div className="card">
                    <img src={coreavi} className="coreavi-logo"/>
                    <div className="container">
                        <h4><b>DevOps Engineering Intern</b></h4> 
                        <p>System Admin - Automation</p> 
                        <h5><Badge className="date-badge">Jan. 2019 - Apr. 2019</Badge></h5>
                    </div>
                </div>
                <div className="work-details">
                    <div className="work-overview">
                        <h5 className="work-subsection-heading"><b>Overview:</b></h5>
                        <ul>
                            <li>First point</li>
                            <li>Second point</li>
                            <li>Third point</li>
                            <li>First point</li>
                            <li>Second point</li>
                            <li>Third point</li>
                        </ul>
                    </div>
                    <div className="tech-stack">
                         <h5 className="work-subsection-heading"><b>Tech Stack:</b></h5>
                         <Badge className="tech-badge">Golang</Badge>{' '}
                         <Badge className="tech-badge">AWS</Badge>{' '}
                         <Badge className="tech-badge">PostgresSQL</Badge>{' '}
                         <Badge className="tech-badge">Shell</Badge>{' '}
                    </div>
                </div>
            </div>
        </div>

    </div>
)}