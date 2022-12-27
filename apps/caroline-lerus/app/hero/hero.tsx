import styles from './hero.module.css';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <section className={styles['container']} id="home">
      <div className={styles['hero-text']}>
        {' '}
        <h1>Caroline Lerus-Roulez</h1>
        <p>Executive Pastry Chef Consultant</p>
        <button>Contact</button>
      </div>
      <div className={styles['image']}>
        <Image src={'/cake.webp'} alt={''} priority fill />
      </div>
    </section>
  );
}

export default Hero;
