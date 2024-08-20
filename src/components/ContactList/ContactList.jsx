import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </ul>
  );
}
