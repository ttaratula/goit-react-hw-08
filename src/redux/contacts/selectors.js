import { createSelector } from "@reduxjs/toolkit";
import { selectQueryFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectQueryFilter],
  (contacts, filter) => {
    return contacts?.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);

export const selectCurrentContact = (state) => state.contacts.currentContact;