import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import './Jumbotron.css';

export const Jumbotron = () => (
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h2>Computer Engineering Student @ University of Waterloo</h2>
            <br/>
            <h2>Software Developer @ Arctic Wolf Networks </h2>
            <br/>
            <h2>Lifelong Learner</h2>
        </Container>
    </Jumbo>

)