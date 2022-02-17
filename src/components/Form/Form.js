import React, { useState } from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contactsAction";
import { MdAccountBox, MdPhoneIphone } from "react-icons/md";
import { nanoid } from "nanoid";
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookField,
  PhonebookButton,
} from "./Form.styled";

const Form = ({ onSubmit }) => {
  const [contactInfo, setContactInfo] = useState({ name: "", number: "" });

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contactInfo);
    setContactInfo({ name: "", number: "" });
  };
  const { name, number } = contactInfo;
  return (
    <PhonebookForm className="phonebook-form" onSubmit={handleSubmit}>
      <PhonebookLabel>
        <PhonebookField
          className="phonebook-field"
          type="text"
          placeholder="Enter contact name"
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
          name="name"
          id={nanoid(5)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <MdAccountBox style={{ verticalAlign: "middle" }} size="42px" />
      </PhonebookLabel>
      <PhonebookLabel>
        <PhonebookField
          className="phonebook-field"
          type="tel"
          value={number}
          onChange={handleNameChange}
          name="number"
          id={nanoid(5)}
          placeholder="Enter phone number"
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <MdPhoneIphone style={{ verticalAlign: "middle" }} size="42px" />
      </PhonebookLabel>

      <PhonebookButton className="phonebook-button" type="submit">
        Add contact
      </PhonebookButton>
    </PhonebookForm>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(contactsActions.addContact(text)),
});

export default connect(null, mapDispatchToProps)(Form);
