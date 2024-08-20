import styles from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <input
      type="text"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts"
      className={styles.input}
    />
  );
}
