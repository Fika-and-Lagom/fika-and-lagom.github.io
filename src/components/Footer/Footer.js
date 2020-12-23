import React from "react";
import "./Footer.css";
import { FiTwitter } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { IconButton } from '@material-ui/core';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


function Footer() {
    return (
        <div className="footer">
        <Container>
          <Row>
            <IconButton size="large" color="secondary"><FiTwitter/></IconButton>
            <IconButton size="large" color="secondary"><FiInstagram/></IconButton>
          </Row>
        </Container>
        </div>
    )
}

export default Footer;