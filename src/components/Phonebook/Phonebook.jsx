import React, { Component } from 'react';
import css from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return <div>Phonebook component</div>;
  }
}

export default Phonebook;
