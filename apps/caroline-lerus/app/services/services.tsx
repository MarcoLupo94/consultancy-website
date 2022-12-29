import styles from './services.module.css';
import { MdRestaurantMenu, MdOutlineDesignServices } from 'react-icons/md';
import { HiAcademicCap } from 'react-icons/hi';

/* eslint-disable-next-line */
export interface ServicesProps {}

export function Services(props: ServicesProps) {
  return (
    <section
      className={styles['container']}
      id="services"
      style={{ height: '100%' }}
    >
      <ul className={styles['list']}>
        <li>
          <MdOutlineDesignServices />
          <h4>CREATIVE DESIGNS</h4>
          <p>
            I can help your business with all creative sweet & baked
            inspirations for your business, if you are a small café or start up,
            to 5 star hotels & restaurants.
          </p>
        </li>
        <li>
          <HiAcademicCap />
          <h4>MASTERCLASS WORKSHOPS</h4>
          <p>
            I can help your business with all creative sweet & baked
            inspirations for your business, if you are a small café or start up,
            to 5 star hotels & restaurants.
          </p>
        </li>
        <li>
          <MdRestaurantMenu />
          <h4>RECIPE & MENU CREATION</h4>
          <p>
            I can help your business with all creative sweet & baked
            inspirations for your business, if you are a small café or start up,
            to 5 star hotels & restaurants.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Services;
