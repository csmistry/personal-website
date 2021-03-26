import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './NavigationBar.css';
import { Link} from 'react-scroll';

//Color Palette: https://coolors.co/3d5a80-98c1d9-e0fbfc-ee6c4d-293241
export const NavigationBar = () => (
    <Navbar  variant='dark' expand="lg" sticky="top" >
        <Navbar.Brand href="/">Chintan Mistry</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link as={Link} to="home" smooth={true} duration={500} spy={true}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="about" smooth={true} duration={500} spy={true}>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="work" smooth={true} duration={500} spy={true}>Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="projects" smooth={true} duration={500} spy={true}>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="contact" smooth={true} duration={500} spy={true}>Contact</Nav.Link>
                </Nav.Item>                                                                       
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)