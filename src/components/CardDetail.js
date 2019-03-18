import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class CardDetail extends Component {
  state = {
    person: null,
    editMode: false,
    key: ''
  };

  componentDidMount = () => {
    const key = Object.keys(this.props.people).find(key => {
      if (this.props.people[key].name === this.props.match.params.name)
        return key;
    });
    this.setState({ key: key, person: this.props.people[key] });
  };

  handleChange = event => {
    const updatedPerson = {
      ...this.state.person,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.setState({ person: updatedPerson });
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  savePerson = () => {
    this.props.updatePerson(this.state.key, this.state.person);
    this.toggleEditMode();
  };

  deletePerson = () => {
    this.props.deletePerson(this.state.key);
    this.props.history.push('/');
  };

  render() {
    if (this.state.person === null) {
      return <p>Loading...</p>;
    }
    if (this.state.person === undefined) {
      return <p>Loading...</p>;
    }
    if (this.state.editMode) {
      return (
        <StyledCard>
          <h1>Edit Details</h1>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.person.name}
          />
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.person.title}
          />
          <input
            type="text"
            name="dateofbirth"
            onChange={this.handleChange}
            value={this.state.person.dateofbirth}
          />
          <textarea
            type="text"
            name="bio"
            onChange={this.handleChange}
            value={this.state.person.bio}
          />
          <button onClick={this.savePerson}>Done</button>
          <button onClick={this.deletePerson}>Remove Person</button>
        </StyledCard>
      );
    }

    return (
      <StyledCard>
        <Link to="/">
          <button>Go back</button>
        </Link>
        <button onClick={this.toggleEditMode}>Edit</button>
        <h1>Details</h1>
        <h3>{this.state.person.name}</h3>
        <p>{this.state.person.title}</p>
        <p>{this.state.person.dateofbirth}</p>
        <p>{this.state.person.bio}</p>
      </StyledCard>
    );
  }
}

export default CardDetail;

const StyledCard = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin: 10px;
  padding: 10px;
`;
