import styles from './work.module.css';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface WorkProps {}
const images = [
  { title: 'Numbers Birthday Cake', url: '/number.jpg' },
  { title: 'Christmas YuleLog Chocolate', url: '/log2.jpg' },
  { title: 'Matcha Cake', url: '/cake.webp' },
  { title: 'Christmas YuleLog White', url: '/log1.jpg' },
];
export function Work(props: WorkProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = images.map((image) => (
    <Carousel.Slide key={image.title}>
      <Image
        src={image.url}
        alt={image.title}
        fill
        style={{ objectFit: 'cover' }}
      />
    </Carousel.Slide>
  ));

  return (
    <section
      id="work"
      className={styles['container']}
      style={{ height: '100%' }}
    >
      <h2>My Work</h2>
      <Carousel
        withIndicators
        height={mobile ? '40vh' : '60vh'}
        slideSize={mobile ? '100%' : '33.333333%'}
        slideGap="lg"
        loop
        align="start"
        slidesToScroll={mobile ? 1 : 3}
      >
        {slides}
      </Carousel>
    </section>
  );
}

export default Work;
