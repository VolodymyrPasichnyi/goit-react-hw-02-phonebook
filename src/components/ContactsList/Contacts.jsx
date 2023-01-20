import propTypes from 'prop-types'
import css from '../ContactsList/Contacts.module.css'


export const Contacts = ({ name, number, deleteUser, id }) => {
    return (
        <div className={css.div}>
            <p className={css.name}>{name}: {number}</p>
            <button className={css.button} onClick={() => deleteUser(id)}>Delete</button>
        </div>    
    )
}

Contacts.propTypes = {
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    deleteUser: propTypes.func.isRequired,
    id: propTypes.string.isRequired,
}