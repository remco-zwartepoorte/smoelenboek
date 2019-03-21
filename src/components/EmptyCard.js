import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCard } from './Card';
import { FiUserPlus } from 'react-icons/fi';
import styled from 'styled-components';

import Background from './Background';

const EmptyCard = () => (
  <StyledEmptyCard>
    <Link to="/new">
      <h1>
        <FiUserPlus />
      </h1>
      <p>Add Profile</p>
      <Background />
    </Link>
  </StyledEmptyCard>
);

export default EmptyCard;

const StyledEmptyCard = styled.div`
  width: 240px;
  margin: 10px;
  position: relative;
  height: 350px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 100ms ease-out;

  :hover {
    transform: scale(1.05);
  }

  p {
    margin-top: 4px;
    padding: 0 20px;
  }
`;
