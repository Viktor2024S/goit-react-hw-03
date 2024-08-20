import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    const newContact = {
      id: `id-${contacts.length + 1}`,
      name,
      number,
    };
    setContacts([...contacts, newContact]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
