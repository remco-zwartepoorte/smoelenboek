import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import EmptyCard from './EmptyCard';

class Cards extends Component {
  render() {
    const { people } = this.props;
    return (
      <CardGrid>
        {Object.keys(people).map(key => (
          <Card
            key={key}
            id={key}
            name={people[key].name}
            image={people[key].image}
            title={people[key].title}
            dateofbirth={people[key].dateofbirth}
            bio={people[key].bio}
          />
        ))}
        <EmptyCard />
      </CardGrid>
    );
  }
}

export default Cards;

const CardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  justify-items: center;
  margin-top: 20px;
`;
