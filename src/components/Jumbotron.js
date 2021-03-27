import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import './Jumbotron.css';
import Badge from 'react-bootstrap/Badge'


export const Jumbotron = () => (
    
    //Background Image: https://wallpaperaccess.com/abstract-lines
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h2><Badge className="jumbo-text">Computer Engineering Student @ University of Waterloo</Badge></h2>
            <br/>
            <h2><Badge className="jumbo-text">Software Developer @ Arctic Wolf Networks</Badge></h2>
            <br/>
            <h5><Badge className="jumbo-notice">This site currently only supports browser viewing. Mobile coming soon!</Badge></h5>
        </Container>
    </Jumbo>

)