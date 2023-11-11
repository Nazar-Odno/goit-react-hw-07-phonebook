import ContactForm from '../ContactForm/ContactForm';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactList from '../ContactList/ContactList';

import css from './App.module.css';

const App = () => {
    return (
        <div className={css.Phonebook}>
            <h1 className={css.Phonebook__title}>Phonebook</h1>
            <ContactForm />

            <h2 className={css.Phonebook__title}>Contacts</h2>
            <ContactFilter />
            <ContactList />            
        </div>
    );
};

export default App;