import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class AddPerson extends Component {
  nameRef = React.createRef();
  dateofbirthRef = React.createRef();
  titleRef = React.createRef();
  bioRef = React.createRef();

  static propTypes = {
    addPerson: PropTypes.func
  };

  createPerson = event => {
    event.preventDefault();
    const person = {
      name: this.nameRef.current.value,
      dateofbirth: this.dateofbirthRef.current.value,
      title: this.titleRef.current.value,
      bio: this.bioRef.current.value
    };
    this.props.addPerson(person);
    this.props.history.push('/');
  };
  render() {
    return (
      <AddPersonForm onSubmit={this.createPerson}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Name"
          id="name"
        />
        <label htmlFor="dateofbirth">Date of birth</label>
        <input
          name="dateofbirth"
          ref={this.dateofbirthRef}
          type="text"
          placeholder="Date of birth"
          id="dateofbirth"
        />
        <label htmlFor="title">Title</label>
        <input
          name="title"
          ref={this.titleRef}
          type="text"
          placeholder="Title"
          id="title"
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          ref={this.bioRef}
          type="text"
          placeholder="Bio"
          id="bio"
        />
        <button type="submit">Voeg persoon toe</button>
      </AddPersonForm>
    );
  }
}
export default AddPerson;

const AddPersonForm = styled.form`
  input {
    display: block;
  }
`;
