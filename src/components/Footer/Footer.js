import React from "react";
import "./Footer.css";
import { FiTwitter } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { Button } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
          <Button color="primary">Hello World</Button>
          <FiTwitter/>
          <FiInstagram/>

        </div>
    )
}

export default Footer;