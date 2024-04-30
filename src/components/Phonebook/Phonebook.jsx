import React, { Component } from 'react';
import css from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = () => {
    const newContact = {
      id: `id-${this.state.contacts.length + 1}`,
      name: this.state.name,
      number: this.state.number,
    };
    this.setState({
      contacts: [...this.state.contacts, newContact],
      name: '',
      number: '',
    });
    this.form.reset();
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name;
    });

    return (
      <div>
        <h2 className="mt-4">Phonebook</h2>
        <form ref={form => (this.form = form)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={this.handleAddContact}
          >
            Add Contact
          </button>
        </form>
        <h2 className="mt-4">Contacts</h2>
        <ul>
          {this.state.contacts.length > 0 &&
            filteredContacts.map(contact => (
              <li key={contact.id} id={contact.id} className={css.contact}>
                {contact.name}: {contact.number}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
