import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard } from './Card';

const EmptyCard = ({ id, name, title }) => (
  <Link to="/new">
    <StyledCard style={{ textAlign: 'center' }}>
      <h1>+</h1>
    </StyledCard>
  </Link>
);

export default EmptyCard;
