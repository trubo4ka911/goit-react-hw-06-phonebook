import React from "react";
import { connect } from "react-redux";
import contactsAction from "../../redux/contactsAction.js";
import { MdDeleteForever } from "react-icons/md";
import {
  ContactBtn,
  ContactItem,
  ContactList,
  ContactText,
} from "./Contact.styled.js";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ContactList>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactText>{name}:</ContactText>
            <ContactText>{number}</ContactText>
            <ContactBtn onClick={() => onDeleteContact(id)}>
              <MdDeleteForever />
            </ContactBtn>
          </ContactItem>
        ))}
      </ContactList>
    </>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
