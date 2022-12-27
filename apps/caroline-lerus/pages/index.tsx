import Hero from '../app/hero/hero';
import NavBar from '../app/nav-bar/nav-bar';
import styles from './index.module.css';

export function Index() {
  return (
    <div className={styles.page}>
      <NavBar />
      <Hero />
      <section id="services">Services</section>
      <section id="about">About</section>
      <section id="work">Past Work</section>
      <section id="contact-me">Contact Me</section>
    </div>
  );
}

export default Index;
