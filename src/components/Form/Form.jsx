// import propTypes from 'prop-types'
import { Component } from "react"



export class Form extends Component {
    state = {
        name: '',
    }

    handleChange = ({ target }) => {
        const {name, value} = target;   
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.send({ ...this.state })
        this.setState({
            name: '',
        })
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h4>Name</h4>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
            />
            <button type="submit">Add contact</button>
        </form>
    )
    }
}