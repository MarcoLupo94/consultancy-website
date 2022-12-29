import ContactMe from '../app/contact-me/contact-me';
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
      <Work />
      <ContactMe />
      {/* <section id="about">About</section> */}
    </div>
  );
}

export default Index;
