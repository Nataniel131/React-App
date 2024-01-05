import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
        <a href="/" className={styles.icon}><i className={'fa fa-tasks'}></i></a>
        <ul className={styles.list}>
          <li><a href="/">Home</a></li>
          <li><a href="/favourite">Favorite</a></li>
          <li><a href="/about">About</a></li>
        </ul>
    </nav>
  );
};

export default NavBar;
