import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectedContacts } from "../../redux/contactsSlice";
import { selectedNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);
  const filterValue = useSelector(selectedNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
