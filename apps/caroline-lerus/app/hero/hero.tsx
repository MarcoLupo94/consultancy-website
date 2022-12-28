import styles from './hero.module.css';
import Image from 'next/image';
import { Button } from '@mantine/core';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <section className={styles['container']} id="home">
      <div className={styles['hero-text']}>
        {' '}
        <h1>SeaElle</h1>
        <p>Pastry Consultancy by Caroline Lerus</p>
        <Button>Contact</Button>
      </div>
      <div className={styles['image']}>
        <Image
          style={{ transform: 'scaleX(-1)', objectFit: 'fill' }}
          src={'/hero.jpg'}
          alt={'Hand holding a beautiful cake'}
          priority
          fill
        />
      </div>
    </section>
  );
}

export default Hero;
