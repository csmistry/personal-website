import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import './Jumbotron.css';

export const Jumbotron = () => (
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>Welcome!</h1>
            <p>Keep scrolling to learn more :)</p>
        </Container>
    </Jumbo>

)