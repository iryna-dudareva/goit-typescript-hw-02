import React from 'react'
import ReactModal from 'react-modal'
import css from './ImageModal.module.css'
import { UnsplashImage } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  image: UnsplashImage | null;
}

const ImageModal: React.FC<Props> = ({ isOpen, onClose, image }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.content}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
  {image && <img src={image.urls.regular} alt={image.alt_description} />}
</ReactModal>

  );
};

export default ImageModal
