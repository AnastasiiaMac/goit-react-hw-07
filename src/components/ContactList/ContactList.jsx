import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectedContacts } from "../../redux/contactsSlice";
import { selectedNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectedContacts);
  const filterValue = useSelector(selectedNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
