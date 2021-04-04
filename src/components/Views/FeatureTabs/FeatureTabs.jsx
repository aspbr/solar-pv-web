import React, { Component } from 'react';
import './FeatureTabs.css'

class FeatureTabs extends Component {
    render() {
        return (
            <div className="feature-tabs">
                <div className="tab-div"><button className="tab-button">Racks & Trackers</button></div>
                <div className="tab-div"><button className="tab-button">PV Module</button></div>
                <div className="tab-div"><button className="tab-button">PV Systems</button></div>
                <div className="tab-div"><button className="tab-button">Data Analytics</button></div>
                <div className="tab-div"><button className="tab-button">Cybersecurity</button></div>
            </div>
        );
    }
}

export default FeatureTabs;