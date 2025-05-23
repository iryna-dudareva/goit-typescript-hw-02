import React from 'react';
import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, onClose, image }) => {
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
