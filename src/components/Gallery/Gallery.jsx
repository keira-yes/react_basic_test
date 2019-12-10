import React from "react";
import GalleryItem from './GalleryItem';

export default class Gallery extends React.Component {
  render() {
    return(
      <div className='gallery'>
        <GalleryItem />
      </div>
    )
  }
}