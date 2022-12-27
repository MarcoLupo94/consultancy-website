import Hero from '../app/hero/hero';
import NavBar from '../app/nav-bar/nav-bar';
import Services from '../app/services/services';
import styles from './index.module.css';

export function Index() {
  return (
    <div className={styles.page}>
      <NavBar />
      <Hero />
      <Services />
      <section id="about">About</section>
      <section id="work">Past Work</section>
      <section id="contact-me">Contact Me</section>
    </div>
  );
}

export default Index;
