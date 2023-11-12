import { useDeleteContactMutation } from 'redux/api';
import css from './Contact.module.css';

function Contact({ id, number, name }) {
    const [deleteContact, { isLoading }] = useDeleteContactMutation();

    return (
        <li className={css.Contact}>
            {name + ': ' + number}
            <button
                className={css.Contact__button}
                onClick={() => deleteContact(id)}
                disabled={isLoading}
            >
                Delete
            </button>
        </li>
    );
}

export default Contact;