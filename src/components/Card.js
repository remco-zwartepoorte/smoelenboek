import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import Icon from './Icon';

import Background from './Background';

const Card = ({ id, name, image, dateofbirth, title, bio }) => {
  return (
    <StyledCard>
      <Link to={`/${id}`}>
        <Content>
          <img src={`${image}-small.jpg`} alt={name} />
          <div className="info">
            <h3>{name}</h3>
            <p>{title}</p>
            <p className="action">
              <FiChevronRight />
              View profile
            </p>
          </div>
        </Content>
        <Background />
      </Link>
    </StyledCard>
  );
};

export default Card;

Card.defaultProps = {
  image: '/images/user-generic-tile'
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  img {
    width: 100%;
    filter: grayscale(100%);
    clip-path: polygon(0% 0%, 98% 4.99%, 99.26% 98.36%, 0% 100%);
  }

  .info {
    position: absolute;
    bottom: -10%;
    transition: all 200ms ease-out;
    background-color: white;
    width: 100%;
    clip-path: polygon(
      -0.42% -2.1%,
      99.25% -4.12%,
      100.09% 66.12%,
      -0.01% 75.48%
    );

    h3 {
      margin-top: 30px;
    }
  }

  .action {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    letter-spacing: 0.05em;
    margin-top: 20px;
    margin-bottom: 20px;

    svg {
      color: #619ab0;
    }
  }

  :hover {
    .info {
      bottom: 0;
      clip-path: polygon(0% -0.7%, 99.25% 0.79%, 100.09% 91.35%, 0% 100%);
    }
  }
`;

export const StyledCard = styled.div`
  width: 240px;
  position: relative;
  height: 350px;

  h3 {
    margin-bottom: 0;
    padding: 0 20px;
  }

  p {
    margin-top: 4px;
    padding: 0 20px;
  }
`;
