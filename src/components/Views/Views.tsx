import React, { Component } from 'react';
import FeatureContent from './FeatureContent/FeatureContent';
import FeatureTabs from './FeatureTabs/FeatureTabs';
import './Views.css'

interface ViewsProps {
    history: any
}

interface ViewsState {
    view: string
}

class Views extends Component<ViewsProps, ViewsState> {

    state = {
        view: 'defaultContent111'
    }

    render() {
        return (
            
            <div className="views">
                <FeatureTabs></FeatureTabs>
                <FeatureContent></FeatureContent>
            </div>
            
         
        );
    }
}

export default Views;