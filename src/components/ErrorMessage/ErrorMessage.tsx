import React from 'react'
import css from './ErrorMessage.module.css';

interface Props {
  message?: string;
}

const ErrorMessage: React.FC<Props> = ({message}) => {
  return (
      <p className={css.error}>
          {message || 'Something went wrong. Try again.'}
      </p>
  )
}

export default ErrorMessage