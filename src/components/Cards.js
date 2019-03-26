import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from './Card'
import EmptyCard from './EmptyCard'

const CardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  justify-items: center;
  margin-top: 20px;
`

const Cards = props => {
  const {people} = props
  return (
    <CardGrid>
      {Object.keys(people).map(key => (
        <Card
          key={key}
          id={key}
          name={people[key].name}
          image={people[key].image}
          title={people[key].title}
        />
      ))}
      <EmptyCard />
    </CardGrid>
  )
}

Cards.propTypes = {
  people: PropTypes.object.isRequired,
}

export default Cards
