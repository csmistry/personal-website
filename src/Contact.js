import React from 'react'
import { Container } from 'react-bootstrap'
import './components/Layout.css'
import github from './assets/github_logo.png';
import linkedin from './assets/linkedin_logo.png';
import email from './assets/email_icon.svg';

export const Contact = () => (     
    <div id="contact" className="layout-element">
        <h1 className="section-heading">Contact Me</h1>
        <Container>
            <a href="https://github.com/csmistry">
                <img  src={github} alt='github' className="githubLogo"/>
            </a>
            <a href="https://www.linkedin.com/in/chintanmistry17">
                <img src={linkedin} alt='linkedin' className="linkedinLogo"/>
            </a>
            <a >
                <img src={email} alt='email' className="emailIcon"/>
            </a>
        </Container>
    </div>
)