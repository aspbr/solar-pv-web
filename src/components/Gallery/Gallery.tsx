import React, { Component } from 'react';
import GallerySorter from '../GallerySorter/GallerySorter';
import './Gallery.css'

class Gallery extends Component {
  render() {
    return (
/*       <div className="gallery-container">
        
      </div> */

  <div className="reg-cont">
      <div className="reg-header"><span className="reg-header-title">Photo Gallery</span></div>
  <GallerySorter></GallerySorter>
</div>

      
    );
  }
}

export default Gallery;