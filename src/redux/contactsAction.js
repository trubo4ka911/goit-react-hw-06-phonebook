import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: nanoid(5),
    name: name.toLowerCase(),
    number,
  },
}));
export const deleteContact = createAction("contacts/delete");
export const changeFilter = createAction("contacts/filter");
