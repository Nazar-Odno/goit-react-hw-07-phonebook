import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from '../../redux/filter';
import css from './ContactFilter.module.css';

function Filter() {
    const value = useSelector(state => state.filter.value);
    const dispatch = useDispatch();
    const handleChange = e => {
        dispatch(setFilter(e.target.value));
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
    );
}

export default Filter;