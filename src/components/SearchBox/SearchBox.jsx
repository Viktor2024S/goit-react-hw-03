import styles from "./SearchBox.module.css";
const SearchBox = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
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
};

export default SearchBox;
