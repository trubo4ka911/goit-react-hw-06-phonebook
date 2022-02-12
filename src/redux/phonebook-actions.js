import types from "./types";
import { nanoid } from "nanoid";

const addContact = (text) => ({
  type: types.ADD,
  payload: {
    id: nanoid(5),
    name: this.toLowerCase(),
    number: this.number,
  },
});
