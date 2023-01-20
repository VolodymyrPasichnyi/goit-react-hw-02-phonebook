import propTypes from 'prop-types'
import { Contacts } from './Contacts'

export const ContactList = ({ contacts, deleteUser }) => {
    return (
      <div>
         {contacts.map(({ id, name, number }) => {
        return (
          <Contacts
                key={id}
                name={name}
                number={number}
                id={id}
                deleteUser={deleteUser}
          />
        );
      })}
        
      </div>
    )
}


ContactList.propTypes = {
    contacts: propTypes.arrayOf(
        propTypes.shape({
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
            id: propTypes.string.isRequired,
        })
    ),
    deleteUser: propTypes.func.isRequired
}
