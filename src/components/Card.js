import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from './Icon';

import Background from './Background';

const Card = ({ name, image, dateofbirth, title, bio }) => {
  return (
    <Link to={`/${name}`}>
      <StyledCard>
        <img src={`${image}-small.jpg`} alt={name} />
        <h3>{name}</h3>
        <p>{title}</p>
        <div className="symbol">
          <Icon name="arrow" color="#333" />
        </div>

        <Background />
      </StyledCard>
    </Link>
  );
};

export default Card;

Card.defaultProps = {
  image: '/images/user-generic-tile'
};

export const StyledCard = styled.div`
  width: 240px;
  /* padding: 20px; */
  margin: 10px;
  transition: all 83ms;
  position: relative;
  z-index: 1;
  height: 350px;
  overflow: hidden;

  .symbol {
    /* background-color: #fff; */
    /* border-radius: 50%; */
    bottom: 3%;
    /* box-shadow: rgba(35, 35, 35, 0.15) 2px 2px 8px; */
    display: inline-block;
    height: 3.5rem;
    line-height: 1;
    padding: 19px;
    position: absolute;
    right: 3%;
    text-decoration: none;
    width: 3.5rem;
    z-index: 40;
    opacity: 0;
    transition: all 83ms;

    /* animation: myship 0.3s; */
  }
  @keyframes myship {
    from {
      right: 30%;
    }
    to {
      right: 3%;
    }
  }

  &:hover {
    /* box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.2); */
    transition: all 83ms;
    transform: scale(1.05);
    .symbol {
      animation: myship 283ms;
      animation-fill-mode: forwards;
      transition: all 283ms;
      opacity: 1;
    }
  }
  img {
    width: 100%;
    filter: grayscale(100%);
    clip-path: polygon(0% 0%, 98% 4.99%, 99.26% 98.36%, 0% 100%);
  }
  h3 {
    margin-bottom: 0;
    padding: 0 20px;
  }

  p {
    margin-top: 4px;
    padding: 0 20px;
  }
`;
