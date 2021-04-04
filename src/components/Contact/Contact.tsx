

import React, { Component } from 'react';
import './Contact.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {
    render() {
        return (
            <div className="contact-div">
                
                <a href="/aboutUs"><button className="contact-btn">About Us</button></a>
                <a href="/contactUs"><button className="contact-btn">Contact Us</button></a>
                <a href="/gallery"><button className="contact-btn">Gallery</button></a>

                <div className="media-icons-div">
                    <FontAwesomeIcon icon={faFacebook} className="media-icons"/>
                    <FontAwesomeIcon icon={faTwitter} className="media-icons"/>
                    <FontAwesomeIcon icon={faLinkedin} className="media-icons"/>
                    <FontAwesomeIcon icon={faInstagram} className="media-icons"/>
                    <FontAwesomeIcon icon={faYoutube} className="media-icons"/>
                </div>



            </div>
        );
    }
}

export default Contact;