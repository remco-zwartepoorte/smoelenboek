import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard } from './Card';
import { FiUserPlus } from 'react-icons/fi';

import Background from './Background';

const EmptyCard = ({ id, name, title }) => (
  <Link to="/new">
    <StyledCard
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>
        <FiUserPlus />
      </h1>
      <p>Add Profile</p>
      <Background />
    </StyledCard>
  </Link>
);

export default EmptyCard;
