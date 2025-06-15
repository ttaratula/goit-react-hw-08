import { createSelector } from "@reduxjs/toolkit";
import { selectQueryFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectCurrentContact = (state) => state.contacts.currentContact;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectQueryFilter],
  (contacts = [], filter = '') => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) => {
      const name = contact.name || '';
      const number = contact.number || '';
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
      );
    });
  }
);
