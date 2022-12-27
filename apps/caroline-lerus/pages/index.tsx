import NavBar from '../app/nav-bar/nav-bar';
import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <NavBar />
      <section id="home"></section>
      <section id="services">Services</section>
      <section id="about">About</section>
      <section id="work">Past Work</section>
      <section id="contact-me">Contact Me</section>
    </div>
  );
}

export default Index;
