import React from "react";
import {API_URL} from '../../api/api';

const GalleryItem = (props) => {
  const {image, title, commentsNumber, link} = props;

  return (
    <div className='gallery-item'>
      <div className='gallery-item__img'><img src={image} alt={title}/></div>
      <h3>{title}</h3>
      <p>Number of comments: <span>{commentsNumber}</span></p>
      <a href={`${API_URL}${link}`}>Link</a>
    </div>
  )
};

export default GalleryItem;