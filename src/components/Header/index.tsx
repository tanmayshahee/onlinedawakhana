// Header.js
'use client';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
function Header() {
  // const [isSticky, setIsSticky] = useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 0 && !isSticky) {
  //     setIsSticky(true);
  //   } else if (offset === 0 && isSticky) {
  //     setIsSticky(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <header className={`${styles.header} `}>
      <div className={styles.logo}>Online Dawakhana</div>
      <nav className={styles.menu}>{/* Menu items */}</nav>
    </header>
  );
}

export default Header;
