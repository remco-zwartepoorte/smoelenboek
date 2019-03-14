import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';

class CardsList extends Component {
  state = {
    smoelen: [
      {
        id: 1,
        name: 'Jeroen Zwartepoorte',
        dateofbirth: '21-07-1977',
        title: 'Front-end engineer',
        bio: 'Oudste'
      },
      {
        id: 2,
        name: 'Remco Zwartepoorte',
        dateofbirth: '21-09-1979',
        title: 'Front-end engineer',
        bio: 'Middelste'
      },
      {
        id: 3,
        name: 'Sander Zwartepoorte',
        dateofbirth: '24-05-1981',
        title: 'Designer',
        bio: 'Jongste'
      }
    ]
  };

  componentDidMount = () => {
    localStorage.setItem('myData', JSON.stringify(this.state));
  };

  render() {
    return (
      <CardGrid>
        {this.state.smoelen.map(smoel => (
          <Card
            key={smoel.id}
            id={smoel.id}
            name={smoel.name}
            title={smoel.title}
          />
        ))}
      </CardGrid>
    );
  }
}

export default CardsList;

const CardGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
