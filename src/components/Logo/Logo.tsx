import React, { Component } from 'react';
import './Logo.css'

/* const divStyle1= {
  stopColor: 'rgb(19,45,104)',
  stopOpacity:'1'
};

const divStyle2 = {
  stopColor: 'rgb(0,0,0)',
  stopOpacity:'1',
}; */

class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
              <a href="/"><button className="logo-button contact-btn"></button></a>
            
{/*                 <svg height="130" width="500">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"
      style={divStyle1} />
      <stop offset="100%"
      style={divStyle2} />
    </linearGradient>
  </defs>
  <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
  <text fill="#ffffff" font-size="35" font-family="Verdana"
  x="35" y="86">SolarPV</text>
Sorry, your browser does not support inline SVG.
</svg> */}

            </div>
        );
    }
}

export default Logo;