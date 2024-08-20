// import { useState } from "react";
import "./App.module.css";
import ContactForm from "./componenets/ContactForm/ContactForm";
import SearchBox from "./componenets/SearchBox/SearchBox";
import ContactList from "./componenets/ContactList/ContactList";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
