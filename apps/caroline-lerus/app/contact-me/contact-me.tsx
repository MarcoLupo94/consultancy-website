import { TextInput, createStyles, Textarea, Button } from '@mantine/core';
import { FiAlertTriangle } from 'react-icons/fi';
import styles from './contact-me.module.css';

/* eslint-disable-next-line */
export interface ContactMeProps {}

export function ContactMe(props: ContactMeProps) {
  return (
    <section
      className={styles['container']}
      id="contact-me"
      style={{ height: '100%' }}
    >
      <form className={styles['form']}>
        <h3>Contact Us</h3>
        <TextInput
          rightSection={<FiAlertTriangle size={16} />}
          label="Your name"
          placeholder="Your name"
        />
        <TextInput
          rightSection={<FiAlertTriangle size={16} />}
          label="Your email"
          placeholder="Your email"
        />
        <TextInput
          rightSection={<FiAlertTriangle size={16} />}
          label="Subject"
          placeholder="Subject"
        />
        <Textarea label="Message(optional)" placeholder="Text..." />
        <Button>Submit</Button>
      </form>
    </section>
  );
}

export default ContactMe;
