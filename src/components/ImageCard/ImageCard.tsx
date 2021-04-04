import React, { Component } from 'react';
import './ImageCard.css'

interface ImageCardProps {
    path: string
}

class ImageCard extends Component<ImageCardProps, {}> {
    render() {
        return (
            <div className="image-card-container">
                <div>
                    <img src={this.props.path} alt="Event Photos" className="img-size"/>
                </div> 
            </div>
        );
    }
}

export default ImageCard;