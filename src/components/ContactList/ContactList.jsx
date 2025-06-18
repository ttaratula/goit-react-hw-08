import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {visibleContacts.length === 0 && (
        <div className={css.empty}>Phonebook is empty</div>
      )}
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id} className={css.card}>
            <Contact id={contact.id} name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </>
  );
}
