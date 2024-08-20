import styles from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <li className={styles.contact}>
      {name}: {number}
    </li>
  );
}
