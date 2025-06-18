import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList.jsx";
import EditContactForm from "../components/EditContactForm/EditContactForm.jsx";

import { fetchContacts } from "../redux/contacts/operations";
import {
  selectLoading,
  selectError,
  selectCurrentContact,
  selectFilteredContacts,
} from "../redux/contacts/selectors";
import { selectQueryFilter } from "../redux/filters/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectQueryFilter);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isEdit = !!useSelector(selectCurrentContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      {isEdit ? <EditContactForm /> : <ContactForm />}
      <SearchBox inputValue={filter} />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList contacts={contacts} />
    </>
  );
}
