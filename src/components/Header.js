import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader className="container">
      <header className="App-header">
        <Link to="/">
          <h1>Smoelenboek</h1>
        </Link>
      </header>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  .App-header {
    height: 150px;
    display: flex;
    align-items: center;
    background-color: white;
    clip-path: polygon(
      12.42% 18.66%,
      79.44% 22.32%,
      79.87% 76.36%,
      12.62% 79.34%
    );
    overflow: hidden;

    a {
      width: 100%;
    }
    h1 {
      /* width: 70vw; */
      color: #333;
      margin-left: 20%;
      /* padding: 20px; */
    }
  }
`;
