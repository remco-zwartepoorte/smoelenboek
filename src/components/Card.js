import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {FiChevronRight} from 'react-icons/fi'
import {colors, polygons} from '../utils/styles'

export const StyledCard = styled.div`
  width: 240px;
  position: relative;
  height: 350px;
  clip-path: ${polygons.card};
`

const CardLink = styled(Link)``

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`

const CardImage = styled.img`
  width: 100%;
  filter: grayscale(100%);
`

const CardText = styled.div`
  position: absolute;
  bottom: -10%;
  transition: all 200ms ease-out;
  background-color: ${colors.bgWhite};
  width: 100%;

  ${CardInner}:hover & {
    bottom: 0;
  }
`

const Name = styled.h3`
  margin-top: 30px;
  margin-bottom: 0;
  padding: 0 20px;
`

const Title = styled.p`
  margin-top: 4px;
  padding: 0 20px;
`

const Action = styled(Title)`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.05em;
  margin-top: 20px;
  margin-bottom: 20px;

  svg {
    color: ${colors.primary};
  }
`

const Card = ({id, name, image, title}) => (
  <StyledCard>
    <CardLink to={`/${id}`}>
      <CardInner>
        <CardImage src={`${image}-small.jpg`} alt={name} />
        <CardText>
          <Name>{name}</Name>
          <Title>{title}</Title>
          <Action>
            <FiChevronRight />
            View profile
          </Action>
        </CardText>
      </CardInner>
    </CardLink>
  </StyledCard>
)

export default Card

Card.defaultProps = {
  image: '/images/user-generic-tile',
}
