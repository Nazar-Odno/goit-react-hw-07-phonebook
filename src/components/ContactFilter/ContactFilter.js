import css from './ContactFilter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';

function ContactFilter() {

    const value = useSelector(state => state.filter.value);
    const dispatch = useDispatch();
    const handleChange = event => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <div className={css.ContactFilter}>
            <p>Find contacts by name</p>
            <input
                type="text"
                className={css.ContactFilter__input}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default ContactFilter;