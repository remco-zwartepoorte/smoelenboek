import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AddPerson extends Component {
  nameRef = React.createRef();

  static propTypes = {
    addPerson: PropTypes.func
  };

  createPerson = event => {
    event.preventDefault();
    const person = {
      name: this.nameRef.current.value
    };
    this.props.addPerson(person);
  };
  render() {
    return (
      <form onSubmit={this.createPerson}>
        <label htmlFor="new-person">Naam</label>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <button type="submit">Voeg persoon toe</button>
      </form>
    );
  }
}
export default AddPerson;
