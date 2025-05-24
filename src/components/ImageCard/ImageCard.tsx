import React from 'react'
import css from './ImageCard.module.css'
import { UnsplashImage } from '../../types'

interface Props {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<Props> = ({ image, onClick }) => {
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