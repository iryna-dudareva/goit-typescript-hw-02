import React from 'react'
import css from './ImageCard.module.css'


const ImageCard = ({ image, onClick }) => {
    const { urls, alt_description } = image;

  const handleClick = () => {
    onClick(image);
  };

    return (
      <div className={css.card} onClick={handleClick}>
        <img
            src={urls.small}
            alt={alt_description}
            className={css.image}
            loading="lazy"
         />
      </div>
  )
}

export default ImageCard