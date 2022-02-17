import types from "./contactsTypes";
import { nanoid } from "nanoid";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: nanoid(5),
    name: name.toLowerCase(),
    number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
