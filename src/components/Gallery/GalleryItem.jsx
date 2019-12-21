import React from "react";
import {API_URL} from '../../api/api';
import no_image from '../../img/no_image.png';

const GalleryItem = (props) => {
  const {image, title, commentsNumber, link} = props;

  return (
    <div className='gallery-item'>
      <div className='gallery-item__img'>
        <img src={image.indexOf('http') === 0 ? image : no_image} alt={title}/>
      </div>
      <h3>{title}</h3>
      <p>Number of comments: <span>{commentsNumber}</span></p>
      <a href={`${API_URL}${link}`} target="_blank" rel="noopener noreferrer">Link</a>
    </div>
  )
};

export default GalleryItem;