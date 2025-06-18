export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectCurrentContact = (state) => state.contacts.currentContact;

export const selectQueryFilter = (state) => state.filters.query;

export const selectFilteredContacts = (state) => {
  const contacts = selectContacts(state);
  const filter = selectQueryFilter(state).toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};
