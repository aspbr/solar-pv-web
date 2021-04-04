import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="spv-footer">
                <div className="left-footer">
                    <div className="contact-details">
                        <span><br></br></span>
                        <span>195 Waukegan Rd</span>
                        <span>Phoenix, AZ, 85123</span>
                        <span>Phone: +1 999-555-3333</span>
                        <span>Email: contact@solarpv.com</span>
                        <span>Website: www.splarpv.com</span>
                    </div>
                </div>
                <div className="right-footer">
                    <div className="right-footer-content">
                        <span><br></br></span>
                        <span>@ 2021 All Rights Reserved</span>
                        <span>Site Map</span>
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                        <span>About Us</span>
                    </div>

                </div>


            </div>
        );
    }
}

export default Footer;