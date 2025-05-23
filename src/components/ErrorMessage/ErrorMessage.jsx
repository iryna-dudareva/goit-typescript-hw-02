import React from 'react'
import css from './ErrorMessage.module.css';

const ErrorMessage = ({message}) => {
  return (
      <p className={css.error}>
          {message || 'Something went wrong. Try again.'}
      </p>
  )
}

export default ErrorMessage