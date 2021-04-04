import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import Logo from '../Logo/Logo';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="spv-header">
                <Logo />
                <Contact />
            </div>
        );
    }
}

export default Header;