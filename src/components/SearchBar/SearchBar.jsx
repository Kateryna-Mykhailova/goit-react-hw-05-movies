import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import styles from '../SearchBar/Searchbar.module.css';

export default function SearchBar({ onSubmit, query, changeQuery }) {
  
    const location = useLocation();
  const navigation = useNavigate();

  const handleChange = e => {
    changeQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      //   alert('Enter a search name')
      toast.warn('Enter a search name');
      return;
    }
    onSubmit(query);
    navigation({ ...location, search: `query=${query}` })
    console.log(location);
  };

 

  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchForm_button}>
          <AiOutlineSearch />
          <span className={styles.SearchFormButton_label}>Search</span>
        </button>

        <input
          className={styles.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
