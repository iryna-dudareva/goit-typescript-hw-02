import React from 'react'
import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'
import { UnsplashImage } from '../../types'

interface Props {
   images: UnsplashImage[];
   onImageClick: (image: UnsplashImage) => void;
}

const ImageGallery:React.FC<Props> = ({ images, onImageClick }) => {
    if (images.length === 0) return;
    return (
      <ul className={css.gallery}>
      {images.map((image) => (
         <li key={image.id} className={css.item}>
            <ImageCard image={image} onClick={onImageClick} />
         </li>
        ))}
       </ul>
  )
}

export default ImageGallery