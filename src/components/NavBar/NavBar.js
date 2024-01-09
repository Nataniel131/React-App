import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
        <a href="/" className={styles.icon}><i className={'fa fa-tasks'}></i></a>
        <ul className={styles.list}>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favourite">Favourite</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
        </ul>
    </nav>
  );
};

export default NavBar;
