import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Logo from "./Images/dala_horse.png";

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar class="navbar" variant="dark">
            <img src={Logo} width="50" height="50" alt=""/>
            &nbsp;&nbsp;&nbsp;
            <Navbar.Brand className="brand" href="/">
              Fika & Lagom
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);
