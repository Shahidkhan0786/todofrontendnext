import React from 'react'
import styles from './searchbar.module.css'
const Searchbar = ({handleSerch , query ,onchange}) => {
  return (
    <>
      <form className={styles.Serchform}>
        <input className={styles.Serchinput} type="text" name="search" id="search" placeholder='search here .....' onChange={onchange} value={query}/>
      </form>
    </>
  )
}

export default Searchbar