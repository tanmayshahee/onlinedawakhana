// Header.js
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Online Dawakhana</div>
      <nav className={styles.menu}>{/* Menu items */}</nav>
    </header>
  );
}

export default Header;
