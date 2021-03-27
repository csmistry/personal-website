import React from 'react'
import './components/Layout.css'
import './work.css'
import awn from './assets/awn.png'              //source: https://arcticwolf.com/
import manulife from './assets/manulife.png'    //source: https://download.logo.wine/logo/Manulife/Manulife-Logo.wine.png
import novx from './assets/novx.png'            //source: https://www.novxsystems.com/img/novx_logo.png
import coreavi from './assets/coreavi.png'      //source: https://coreavi.com/wp-content/uploads/thegem-logos/logo_0ba485f7cae143708e221129728d4f25_2x.png
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export const Work = () => {
  
    return (     
    <div id="work" className="layout-element">
        <h1 className="section-heading">Work Experience</h1>
     
  
        <Accordion className="work-accordian" defaultActiveKey="0">
            <Card >
                <Accordion.Toggle as={Card.Header} eventKey="0" className="accordian-card">
                        <div className="work-horizontal-flexbox">
                            <h6 className="work-name"><b>Arctic Wolf Networks</b></h6>
                            <h6 className="title-heading"><Badge className="title-badge">Software Developer</Badge></h6>
                        </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <div className="work-horizontal-flexbox">
                        <div className="logo-card-awn" >
                            <img src={awn} className="awn-logo" alt="Arctic Wolf"/>
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
                                  <h4><li>Coming soon ...</li></h4>
                                </ul>
                            </div>
                            <div className="tech-stack">
                                <h5 className="work-subsection-heading"><b>Tech Stack:</b></h5>
                                <Badge className="tech-badge">Golang</Badge>{' '}
                                <Badge className="tech-badge">AWS</Badge>{' '}
                                <Badge className="tech-badge">PostgresSQL</Badge>{' '}
                                <Badge className="tech-badge">Shell</Badge>{' '}
                                <Badge className="tech-badge">Git</Badge>{' '}
                                <Badge className="tech-badge">GitHub</Badge>{' '}
                            </div>
                        </div>
                    </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="accordian-card">
                <div className="work-horizontal-flexbox">
                            <h6 className="work-name"><b>Manulife Financial</b></h6>
                            <h6 className="title-heading"><Badge className="title-badge">Software Engineering Intern</Badge></h6>
                        </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <div className="work-horizontal-flexbox">
                            <div className="logo-card">
                                <img src={manulife} className="manulife-logo" alt="manulife"/>
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
                                        <li><p>Implemented a Kafka consumer for a high volume real-time data feed, using .NET Core, C# and Confluent.Kafka API to eliminate the existing dependency of a third party API, resulting in low-latency data consumption</p></li>
                                        <li><p>Designed and integrated Kafka consumer and producer solutions to 13+ projects ranging from cloud applications to batch programs, resulting in our team’s solution becoming the new standard template for all Kafka projects</p></li>
                                        <li><p>Co-ordinated and led one-on-one meetings and group walk-throughs with full-time employees about Kafka and developing in a linux environment, which accelerated both knowledge and usage of Kafka within the Company</p></li>
                                        <li><p>Competed in the first ever Manulife Co-op Tech challenge as a team of 5. Presented to a panel of executives, a platform that streamlined communication between returning co-ops and hiring managers</p></li>
                                    </ul>
                                </div>
                        
                                <div className="tech-stack">
                                    <h5 className="work-subsection-heading"><b>Tech Stack:</b></h5>
                                    <Badge className="tech-badge">C#</Badge>{' '}
                                    <Badge className="tech-badge">.NET Core</Badge>{' '}
                                    <Badge className="tech-badge">Kafka</Badge>{' '}
                                    <Badge className="tech-badge">Postman</Badge>{' '}
                                    <Badge className="tech-badge">Git</Badge>{' '}
                                    <Badge className="tech-badge">GitLab</Badge>{' '}
                                    <Badge className="tech-badge">PCF</Badge>{' '}
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="accordian-card">
                <div className="work-horizontal-flexbox">
                            <h6 className="work-name"><b>NOVX Systems</b></h6>
                            <h6 className="title-heading"><Badge className="title-badge">Software Engineering Intern</Badge></h6>
                        </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <div className="work-horizontal-flexbox">
                            <div className="logo-card">
                                <img src={novx} className="novx-logo" alt="novx systems"/>
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
                                        <li><p>Developed the UI of a mobile application that is designed to digitize existing procedures for substance impairment testing in the workplace</p></li>
                                        <li><p>Increased code re-usuability up to 40% by utilizing an MVVM software architecture with design patterns such as Dependency Injection and common code UI components</p></li>
                                        <li><p>Streamlined communication using Agile practices and progress meetings with the client to discuss potential setbacks and next steps, which resulted in improved project goals and vision</p></li>
                                        <li><p>Performed bi-weekly demos with the team and client to showcase UI progress and discuss future implementations</p></li>
                                    </ul>
                                </div>
                                <div className="tech-stack">
                                    <h5 className="work-subsection-heading"><b>Tech Stack:</b></h5>
                                    <Badge className="tech-badge">C#</Badge>{' '}
                                    <Badge className="tech-badge">Xamarin Forms</Badge>{' '}
                                    <Badge className="tech-badge">Microsoft SQL Server</Badge>{' '}
                                    <Badge className="tech-badge">Git</Badge>{' '}
                                    <Badge className="tech-badge">SQL</Badge>{' '}
                                    <Badge className="tech-badge">Postman</Badge>{' '}

                                </div>
                            </div>
                        </div> 
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" className="accordian-card">
                <div className="work-horizontal-flexbox">
                            <h6 className="work-name"><b>CoreAVI </b></h6>
                            <h6 className="title-heading"><Badge className="title-badge">Engineering Intern</Badge></h6>
                        </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <div className="work-horizontal-flexbox">   
                            <div className="logo-card">
                                <img src={coreavi} className="coreavi-logo" alt="coreavi"/>
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
                                        <li><p>Automated account creation for new customers by developing a full-stack web application using pure HTML and CSS for the front-end while using Python and PHP to manage back-end processes</p></li>
                                        <li><p>Improved developer on-boarding experience by scripting a Batch program that automates the installation of common tools and software, reducing setup time by 30%</p></li>
                                        <li><p>Increased internal knowledge base content by 50% through the redesign and addition of detailed tutorials and documentation on the setup and use of software tools/frameworks used within the company</p></li>
                                        <li><p>Troubleshooted network and computer issues for both in-office and remote employees</p></li>
                                    </ul>
                                </div>
                                <div className="tech-stack">
                                    <h5 className="work-subsection-heading"><b>Tech Stack:</b></h5>
                                    <Badge className="tech-badge">Python</Badge>{' '}
                                    <Badge className="tech-badge">PHP</Badge>{' '}
                                    <Badge className="tech-badge">HTML/CSS</Badge>{' '}
                                    <Badge className="tech-badge">Batch</Badge>{' '}
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>  
    </div>
)}