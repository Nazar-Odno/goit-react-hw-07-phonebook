import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts';

function Contact({ id, name, number }) {

    const dispatch = useDispatch();

    const deleteContact = () => {
        dispatch(deleteContacts(id));
    };

    return (
        <li className={css.Contact}>
            {name + ': ' + number}
            <button
                className={css.Contact__button}
                onClick={() => deleteContact()}
            >
                Delete
            </button>
        </li>
    );
}

export default Contact;