import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import EmptyCard from './EmptyCard';

class CardsList extends Component {
  render() {
    const { people } = this.props;
    return (
      <CardGrid>
        {Object.keys(people).map(key => (
          <Card
            key={key}
            id={people[key].id}
            name={people[key].name}
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

export default CardsList;

const CardGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
