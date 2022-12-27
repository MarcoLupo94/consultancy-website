import styles from './nav-bar.module.css';

/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  return (
    <nav className={styles['container']}>
      <h3>CLR 👩🏾‍🍳</h3>
      <ul className={styles['links']}>
        {' '}
        <li>
          {' '}
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>{' '}
        </li>
        <li>
          <a href="#about">About</a>{' '}
        </li>
        <li>
          <a href="#work">MyWork</a>{' '}
        </li>
        <li>
          <a href="#contact-me">ContactMe</a>{' '}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
