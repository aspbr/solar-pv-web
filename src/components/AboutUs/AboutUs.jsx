import React, { Component } from 'react';
import './AboutUs.css'

const divStyle1 = {
    stopColor: 'rgb(19,45,104)',
    stopOpacity: '1'
};

const divStyle2 = {
    stopColor: 'rgb(0,0,0)',
    stopOpacity: '1',
};

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us-container">
                <h2>About Us</h2>

                <svg height="130" width="500">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%"
                                style={divStyle1} />
                            <stop offset="100%"
                                style={divStyle2} />
                        </linearGradient>
                    </defs>
                    <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
                    <text fill="#ffffff" font-size="35" font-family="Verdana" x="25" y="86">SolarPV</text>
                        Sorry, your browser does not support inline SVG.
                    </svg>

                <div>
                    <p>
                        The Solar PV (SPV) is leading the transformation to a clean energy economy, creating the framework for solar to achieve 20% of U.S. electricity generation by 2030. SPV works with its 1,000 member companies and other strategic partners to fight for policies that create jobs in every community and shape fair market rules that promote competition and the growth of reliable, low-cost solar power. Founded in 1974, SPV is a national trade association building a comprehensive vision for the Solar+ Decade through research, education and advocacy.
                    </p>

                    <div>
                        <p>

                            Our vision is to represent an industry that will be the single largest source of new energy generation over the next decade and to grow as the national voice of a larger, more unified and more diverse industry.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;