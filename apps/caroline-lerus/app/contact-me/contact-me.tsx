import { TextInput, createStyles, Textarea, Button } from '@mantine/core';
import { FiAlertTriangle } from 'react-icons/fi';
import styles from './contact-me.module.css';

/* eslint-disable-next-line */
export interface ContactMeProps {}

export function ContactMe(props: ContactMeProps) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const infos = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log(infos);
  };
  return (
    <section
      className={styles['container']}
      id="contact-me"
      style={{ height: '100%' }}
    >
      <form className={styles['form']} onSubmit={handleSubmit}>
        <h3>Contact Us</h3>
        <TextInput
          rightSection={<FiAlertTriangle size={16} />}
          label="Your name"
          placeholder="Your name"
          name="name"
          type="text"
          required
        />
        <TextInput
          rightSection={<FiAlertTriangle size={16} />}
          label="Your email"
          placeholder="Your email"
          name="email"
          required
          type="email"
        />
        <TextInput
          rightSection={<FiAlertTriangle size={16} />}
          label="Subject"
          placeholder="Subject"
          name="subject"
          required
          type="text"
        />
        <Textarea
          label="Message(optional)"
          placeholder="Text..."
          name="message"
        />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}

export default ContactMe;
