import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {


    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (query.length === 0) {
            toast.error('Please enter a serach term');
            return;
        }

        onSubmit(query);
        setQuery('');
    }

    return (
      <header className={css.header}>
         <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={css.input} 
                />
            <button type="submit" className={css.searchBtn}>Search</button>
        </form>
      </header>

  )
}

export default SearchBar