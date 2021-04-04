import React, { Component } from 'react';
import './MainContent.css'

class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                <video src="https://pmdvod.nationalgeographic.com/NG_Video_DEV/951/927/solar-power_480x360_464k.mp4" width="100%" height="100%" controls/>
            </div>
        );
    }
}

export default MainContent;