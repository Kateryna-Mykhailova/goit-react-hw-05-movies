import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../SearchBar/Searchbar.module.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
  

export default function SearchBar({ onSubmit }) {

  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast('Enter a search name');
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <header className={styles.Searchbar}>
      
      <ToastContainer theme="dark"
       position="top-right"
       autoClose={4000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover/>
     
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
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

