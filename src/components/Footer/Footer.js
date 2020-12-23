import React from "react";
import "./Footer.css";
import { FiTwitter } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'

function Footer({}) {
    return (
        <div className="footer">
          <FiTwitter/>
          <FiInstagram/>

        </div>
    )
}

export default Footer;