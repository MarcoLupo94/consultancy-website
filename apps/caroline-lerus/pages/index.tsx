import Hero from '../app/hero/hero';
import NavBar from '../app/nav-bar/nav-bar';
import Services from '../app/services/services';
import Work from '../app/work/work';
import styles from './index.module.css';

export function Index() {
  return (
    <div className={styles.page}>
      <NavBar />
      <Hero />
      <Services />
      <section id="about">About</section>
      <Work />
      <section id="contact-me">Contact Me</section>
    </div>
  );
}

export default Index;
