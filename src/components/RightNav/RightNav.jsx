import React, { Component } from 'react';
import './RightNav.css'

class RightNav extends Component {

    render() {
        return (
            <div className="right-nav">

                <div className="options-panel">

                <div className="login-div">
                    <a href="/register" className="a-button">
                        <button className="register-button">Register</button>
                    </a>
                    
                    <a href="/login" className="a-button">
                        <button className="login-button">Login</button>
                    </a>

                    <a href="/dashboard" className="a-button">
                        <button className="dashboard-button">Dashboard</button>
                    </a>
                </div>

                <hr/>

                <h3>PV Module</h3>
                <ul>
                    <li>
                        <a href="/certificatelist" className="a-button">Testing & Certification</a>
                    </li>
                    <li>PV Rating</li>
                </ul>

                <h3>PV System Performance</h3>
                <ul>
                    <li>Monitoring & Inspection</li>
                    <li>Performance Analysis</li>
                    <li>Compare system</li>
                    <li>Certification</li>
                </ul>

                <h3>Data Analytics</h3>
                <ul>
                    <li>Module lifetime prediction</li>
                    <li>Energy Prediction</li>
                </ul>

                <h3>Cybersecurity and Smart Grid Technologies</h3>
                <h3>Solar PV University</h3>
                <ul>
                    <li><a href="/scholership" className="a-button">Apply for Scholership </a></li>
                    <li><a href="/donate" className="a-button">Donate</a></li>
                </ul>
                </div>
            </div>
        );
    }
}

export default RightNav;