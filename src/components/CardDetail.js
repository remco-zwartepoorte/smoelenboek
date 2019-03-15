import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class CardDetail extends Component {
  state = {
    person: null
  };

  componentDidMount = () => {
    const person = Object.keys(this.props.people)
      .map(key => {
        if (this.props.people[key].name === this.props.match.params.name)
          return this.props.people[key];
      })
      .filter(key => {
        return key !== undefined;
      });
    this.setState({ person: person[0] });
  };

  render() {
    if (this.state.person === null) {
      return null;
    }

    return (
      <StyledCard>
        <h1>Details</h1>
        <h3>{this.state.person.name}</h3>
        <p>{this.state.person.title}</p>
        <p>{this.state.person.dateofbirth}</p>
        <p>{this.state.person.bio}</p>
        <Link to="/">
          <button>Go back</button>
        </Link>
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
