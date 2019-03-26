import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PrimaryButton } from './Button';
import { colors, polygons } from '../utils/styles';

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
      bio: this.bioRef.current.value,
      image: '/images/user-generic-tile'
    };
    this.props.addPerson(person);
    this.props.history.push('/');
  };
  render() {
    return (
      <AddPersonForm onSubmit={this.createPerson}>
        <label htmlFor="name">Name</label>
        <input name="name" ref={this.nameRef} type="text" id="name" required />
        <label htmlFor="dateofbirth">Date of birth</label>
        <input
          name="dateofbirth"
          ref={this.dateofbirthRef}
          type="date"
          id="dateofbirth"
          placeholder="YYYY-MM-DD"
          required
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
        />
        <label htmlFor="title">Title</label>
        <input
          name="title"
          ref={this.titleRef}
          type="text"
          id="title"
          required
        />
        <label htmlFor="bio">Bio</label>
        <textarea name="bio" ref={this.bioRef} type="text" id="bio" />
        <PrimaryButton type="submit">Create Profile</PrimaryButton>
      </AddPersonForm>
    );
  }
}
export default AddPerson;

const AddPersonForm = styled.form`
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  padding: 50px;
  clip-path: ${polygons.detail};
  background-color: ${colors.bgWhite};
`;
