import React from 'react'
import './components/Layout.css'
import './contact.css';
import github from './assets/github_logo.png';
import linkedin from './assets/linkedin_logo.png';



export const Contact = () => {     
  
  /*const copyToClipboard = () => { 
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = "chintan.mistry76@gmail.com";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

  }*/

   return (
    <div id="contact" className="layout-element">
        <h1 className="section-heading">Contact Me</h1>
        <div className="contact-horizontal-flexbox">
            <a target="_blank" href="https://github.com/csmistry" rel="noreferrer noopener">
                <img  src={github} alt='github' className="githubLogo"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/chintanmistry17" rel="noreferrer noopener">
                <img src={linkedin} alt='linkedin' className="linkedinLogo"/>
            </a>
            <div>
                <h4 className="emailText"><b>Chintan.Mistry76@gmail.com</b></h4>
            </div>
        </div>
    </div>
   );
};

