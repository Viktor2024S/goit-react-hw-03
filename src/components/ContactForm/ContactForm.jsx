import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className={styles.input}
      />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone number"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}
