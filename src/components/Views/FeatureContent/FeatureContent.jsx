import React, { Component } from 'react';
import RightNav from '../../RightNav/RightNav';
import LeftNav from '../../LeftNav/LeftNav';
import MainContent from '../../MainContent/MainContent';

class FeatureContent extends Component {
    render() {
        return (
            <div>
                <RightNav></RightNav>
                <MainContent></MainContent>
                <LeftNav></LeftNav>
            </div>
        );
    }
}

export default FeatureContent;