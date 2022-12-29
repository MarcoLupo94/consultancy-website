import styles from './hero.module.css';
import Image from 'next/image';
import { Button } from '@mantine/core';
import { createStyles, Container, Title, Text } from '@mantine/core';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <section className={styles['container']} id="home">
      <div className={styles['hero-text']}>
        {' '}
        <Title>
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: 'pink', to: '#9fbb04' }}
          >
            SeaElle Pastry Consultancy
          </Text>{' '}
        </Title>
        <p style={{ fontFamily: 'fantasy' }}>by Caroline Lerus</p>
        <Button
          variant="gradient"
          gradient={{ from: 'pink', to: 'white' }}
          size="xl"
          mt={40}
        >
          Contact
        </Button>
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
