import React from 'react'
import { Container } from 'react-bootstrap'
import './components/Layout.css'
import github from './assets/github_logo.png';
import linkedin from './assets/linkedin_logo.png';
import email from './assets/email_icon.svg';


export const Contact = () => {     
  
  const copyToClipboard = () => { 
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = "chintan.mistry76@gmail.com";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

   return (
   <div id="contact" className="layout-element">
        <h1 className="section-heading">Contact Me</h1>
        <Container>
            <a target="_blank" href="https://github.com/csmistry">
                <img  src={github} alt='github' className="githubLogo"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/chintanmistry17">
                <img src={linkedin} alt='linkedin' className="linkedinLogo"/>
            </a>
            <a >
                <img onClick={copyToClipboard} src={email} alt='email' className="emailIcon"/>
            </a>
        </Container>
    </div>
   );
};