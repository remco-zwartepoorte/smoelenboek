import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard } from './Card';

import Background from './Background';

const EmptyCard = ({ id, name, title }) => (
  <Link to="/new">
    <StyledCard
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <h1>+</h1>
      <p>Add new</p>
      <Background />
    </StyledCard>
  </Link>
);

export default EmptyCard;
