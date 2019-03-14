import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = ({ id, name, title }) => (
  <Link to={`/${id}`}>
    <StyledCard>
      <h3>{name}</h3>
      <p>{title}</p>
    </StyledCard>
  </Link>
);

export default Card;

const StyledCard = styled.div`
  max-width: 320px;
  min-width: 280px;
  padding: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
  transition: box-shadow 83ms;

  &:hover {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: box-shadow 83ms;
  }
`;
