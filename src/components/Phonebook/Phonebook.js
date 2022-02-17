import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const Phonebook = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem("contacts")
  //     ? JSON.parse(localStorage.getItem("contacts"))
  //     : [];
  //   setContacts(storedContacts);
  // }, []);

  // const formSubmitHandler = ({ name = "", number = "" }) => {
  //   if (name === "" || number === "") return;
  //   if (contacts.some((item) => item.name.toLowerCase() === name)) {
  //     return toast.error(`${name} is already in your contacts`);
  //   }
  //   const newContact = {
  //     id: nanoid(5),
  //     name: name.toLowerCase(),
  //     number,
  //   };
  //   const updateContacts = [...contacts, newContact];
  //   setContacts(updateContacts);
  //   localStorage.setItem("contacts", JSON.stringify(updateContacts));
  //   return toast.success(`Contact ${newContact.name} added successfully!`);
  // };

  // const clickDelete = (e) => {
  //   const updateContacts = contacts.filter((contact) => contact.id !== e);
  //   setContacts(updateContacts);
  //   localStorage.setItem("contacts", JSON.stringify(updateContacts));
  //   return toast.info(`Contact deleted!`);
  // };

  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();
  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      {/* <ContactList contacts={visibleContacts} click={clickDelete} /> */}
      <Filter />
      <ContactList />
    </>
  );
};

export default Phonebook;
