import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard } from './Card';

const AddCard = ({ id, name, title }) => (
  <Link to={`/${id}`}>
    <StyledCard style={{ textAlign: 'center' }}>
      <h1>+</h1>
    </StyledCard>
  </Link>
);

export default AddCard;
