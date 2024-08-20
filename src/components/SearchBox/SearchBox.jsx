import styles from "./SearchBox.module.css";

export default function SearchBox({ filter, setFilter }) {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
}
