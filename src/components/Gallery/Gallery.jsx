import React from "react";
import GalleryItem from './GalleryItem';

export default class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      gallery: []
    }
  }

  getGalleryItems = () => {
    const link = 'https://www.reddit.com/r/reactjs.json?limit=100';
    fetch(link)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.data);
      })
  };

  componentDidMount() {
    this.getGalleryItems();
  }

  render() {
    return(
      <div className='gallery'>
        <GalleryItem />
      </div>
    )
  }
}