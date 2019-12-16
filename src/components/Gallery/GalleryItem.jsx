import React from "react";

const GalleryItem = (props) => {
  const {image, title, commentsNumber, link} = props;

  return (
    <div className='gallery-item'>
      <div className='gallery-item__img'><img src={image} alt={title}/></div>
      <h3>{title}</h3>
      <p>Number of comments: <span>{commentsNumber}</span></p>
      <a href={link}>Link</a>
    </div>
  )
};

export default GalleryItem;