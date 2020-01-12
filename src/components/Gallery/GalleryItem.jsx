import React from "react";
import no_image from '../../img/no_image.png';

export const GalleryItem = (props) => {
  const {data} = props;

  return (
    <div className='gallery-item'>
      <div className='gallery-item__img'>
        <img src={data.thumbnail.indexOf('http') === 0 ? data.thumbnail : no_image} alt={data.title}/>
      </div>
      <h3>{data.title}</h3>
      <p>Number of comments: <span>{data.num_comments}</span></p>
      <a href={`https://www.reddit.com/${data.permalink}`} target="_blank" rel="noopener noreferrer">Link</a>
    </div>
  )
};