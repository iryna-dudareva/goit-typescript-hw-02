import React from 'react'
import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.wrap}>
      <button type="button" className={css.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
