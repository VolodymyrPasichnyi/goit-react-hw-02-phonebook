import { Component } from "react"


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  clickOnChange = evt => {
    this.setState({ name: evt.target.value})
  }

  clickOnSubmit = evt => {
    evt.preventDefault();
    console.log(`Name: ${this.state.name}`);
    this.props.onSubmit({ ...this.state })
  }


    render() {
      const { name } = this.state

      return (
        <div>
          <h2>Phonebook</h2>
            <form onSubmit={this.clickOnSubmit}>
              <h4>Name</h4>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={this.clickOnChange}
            />
              <button type="submit">Add contact</button>
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
