import styles from "./Contact.module.css";

export default function Contact({ contact, deleteContact }) {
  return (
    <li className={styles.contact}>
      <div className={styles.data}>
        <span>{contact.name}:</span>
        <span>{contact.number}</span>
      </div>
      <button onClick={() => deleteContact(contact.id)} className={styles.btn}>
        Delete
      </button>
    </li>
  );
}
