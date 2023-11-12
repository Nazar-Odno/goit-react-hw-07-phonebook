import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/api';
import css from './ContactList.module.css';

function ContactList() {
    const { data: contacts = [] } = useGetContactsQuery();
    const filter = useSelector(state => state.filter.filter);

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
        <div className={css.ContactList}>
            <ul>
                {visibleContacts.map(({ id, phone, name }) => {
                    return <Contact 
                                key={id} 
                                number={phone} 
                                name={name} 
                                id={id} 
                            />;
                })}
            </ul>
        </div>
    );
}

export default ContactList;