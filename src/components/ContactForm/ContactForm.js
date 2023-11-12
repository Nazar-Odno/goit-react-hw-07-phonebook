import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/api';
import css from './ContactForm.module.css';

const ContactForm = () => {
    const [addContact, { isLoading }] = useAddContactMutation();
    const { data: contacts } = useGetContactsQuery();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const normalizedName = name.toLowerCase();
        const checkedForName = contacts.some(
            contact => normalizedName === contact.name.toLowerCase()
        );

        if (checkedForName) {
            return alert(`${name} is already in contacts`);
        }
        addContact({ name, phone });

        reset();
    };

    const reset = () => {
        setName('');
        setPhone('');
    };

    const handleChange = event => {
        const { value, name } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'phone':
                setPhone(value);
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
                        className={css.ContactForm__input}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                    />
                </label>
                <br />
                <label className={css.ContactForm__label}>
                    Phone
                    <input
                        className={css.ContactForm__input}
                        onChange={handleChange}
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={phone}
                    />
                </label>
                <br />
                <button
                    className={css.ContactForm__button}
                    type="submit"
                    disabled={isLoading}
                >
                    + Add contact
                </button>
            </form>
        </div>
    )
};

export default ContactForm;