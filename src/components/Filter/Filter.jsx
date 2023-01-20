import propTypes from 'prop-types'
import css from '../Filter/Filter.module.css'


export const Filter = ({ filter, value }) => {
    return (
        <div className={css.div}>
            <label className={css.label}>Find contacts by name</label>
            <input className={css.input}
                type="text"
                name="filter"
                onChange={filter}
                value={value}
             />
        </div>
    )
}

Filter.propTypes = {
    filter: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
}