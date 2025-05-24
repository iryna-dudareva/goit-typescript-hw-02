import React from 'react'
import css from './LoadMoreBtn.module.css'

interface Props {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={css.wrap}>
      <button type="button" className={css.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
