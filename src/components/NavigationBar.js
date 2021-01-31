import React from 'react';
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import './NavigationBar.css';

export const NavigationBar = () => (
    <Navbar  variant='dark' expand="lg">
        <Navbar.Brand href="/">Chintan Mistry</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/work">Work</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>                                                                       
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)