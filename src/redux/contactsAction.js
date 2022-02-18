import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: nanoid(5),
    name: name.toLowerCase(),
    number,
  },
}));

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/filter");

export default { addContact, deleteContact, changeFilter };
