import React from 'react'
import Planet from './Planet'

const CharacterPlanet = (props) => {
  const { character } = props

  return (
    <div> 
      <span className="categoryHeader">Planet</span>
      <br />
      <Planet planet={character.home_planet} />
    </div>
  )
}

export default CharacterPlanet