import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class CardDetail extends Component {
  state = {
    smoel: null
  };

  componentDidMount = () => {
    const cachedSmoelen = localStorage.getItem('myData');
    if (cachedSmoelen) {
      // console.log(JSON.parse(cachedSmoelen));
      const smoel = JSON.parse(cachedSmoelen);
      console.log(smoel.smoelen);
      const juisteSmoel = smoel.smoelen.find(
        el => el.id == this.props.match.params.id
      );
      console.log(juisteSmoel);
      this.setState({ smoel: juisteSmoel });
      console.log(this.props.match.params.id);
    }
  };

  render() {
    const userId = this.props.match.params.id;
    const user = this.state.smoel;

    if (user === null) {
      return null;
    }
    return (
      <StyledCard>
        <h1>Details</h1>
        <h3>{user.name}</h3>
        <p>{user.title}</p>
        <p>{user.dateofbirth}</p>
        <p>{user.bio}</p>
        <Link to={`/`}>
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
