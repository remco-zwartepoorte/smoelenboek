import React from 'react'
import {Link} from 'react-router-dom'
import {FiUserPlus} from 'react-icons/fi'
import styled from 'styled-components'

const EmptyCard = () => (
  <StyledEmptyCard>
    <Link to="/new">
      <h1>
        <FiUserPlus />
      </h1>
      <p>Add Profile</p>
    </Link>
  </StyledEmptyCard>
)

export default EmptyCard

const StyledEmptyCard = styled.div`
  width: 240px;
  position: relative;
  height: 350px;
  clip-path: ${props => props.theme.polygons.card};
  transition: all 100ms ease-out;
  background-color: ${props => props.theme.colors.bgWhite};

  :hover {
    transform: scale(1.05);
  }

  a {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin-top: 4px;
    padding: 0 20px;
  }
`
