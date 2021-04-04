import React, { Component } from 'react';
import './Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-cont'>

                <a className="dashboard-opt-link" href="/client">Client</a>
                <br/>
                <a className="dashboard-opt-link" href="/location">Location</a>
                <br/>
                <a className="dashboard-opt-link" href="/product">Product</a>
                <br/>
                <a className="dashboard-opt-link" href="/test_standard">Test Standard</a>
                <br/>
                <a className="dashboard-opt-link" href="/certificate">Certificate</a>
            </div>
        );
    }
}

export default Dashboard;