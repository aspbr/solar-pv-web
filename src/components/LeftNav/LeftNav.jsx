import React, { Component } from 'react';
import './LeftNav.css'

class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
                <div className="news-panel">
                    <h3>News  & Events</h3>
                    
                    <a href="url">PhotoVoltaic Technical Conference to take place in Marseille, France from 26 to 28 April 2017</a>
                    <br/>
                    <br/>
                    <a href="url">Trump is next US president</a>
                    <br/>
                    <br/>
                    <a href="url">Syrian forces recapture Aleppo</a>
                    <br/>
                    <br/>
                    <a href="url">Senate votes on SCOTUS nominee</a>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default LeftNav;