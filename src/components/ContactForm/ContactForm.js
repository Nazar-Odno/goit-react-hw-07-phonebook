import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../redux/contacts';

export default function ContactForm() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(state => state.contacts.value);
    const handleSubmit = event => {
        let loginInputId = nanoid();
        event.preventDefault();
        const normalizedName = name.toLowerCase();
        const checkedForName = contacts.some(
            contact => normalizedName === contact.name.toLowerCase()
        );
        
        if (checkedForName) {
            return alert(`${name} is already in contacts`);
        }
        dispatch(setContacts({ id: loginInputId, name: name, number: number }));

        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    const handleChange = event => {
        const { value, name } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                break;
        }
    };

    return (
        <div className={css.ContactForm}>
            <form onSubmit={handleSubmit}>
                <label className={css.ContactForm__label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.ContactForm__input}
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label className={css.ContactForm__label}>
                    Phone
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        className={css.ContactForm__input}
                        value={number}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button
                    type="submit"
                    className={css.ContactForm__button}
                >
                    + Add contact
                </button>
            </form>
        </div>
    )
};