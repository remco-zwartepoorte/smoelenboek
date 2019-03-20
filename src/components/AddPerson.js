import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Edit, PrimaryButton } from './CardDetail';
import Background from './Background';

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
        <Edit>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Name"
            id="name"
            required
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
            required
          />
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            ref={this.bioRef}
            type="text"
            placeholder="Bio"
            id="bio"
          />
          <PrimaryButton type="submit">Create Profile</PrimaryButton>
          <Background />
        </Edit>
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
`;
