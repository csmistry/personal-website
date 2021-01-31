import React from 'react';
import {Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container> 
        {props.children}
    </Container>
)

// Container keeps things centered and prevents it from touching sides of the page