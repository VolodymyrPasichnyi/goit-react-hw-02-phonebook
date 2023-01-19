import { Component } from "react"


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  Click = e => {
    e.preventDefault()
    console.log(e)
  }


    render() {
      return (
        <div>
          <h2>Phonebook</h2>
            <form action="">
              <h4>Name</h4>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.Click}
            />
              <button>Add contact</button>
            </form>
          <h2>Contacts</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
      )
    }
};
