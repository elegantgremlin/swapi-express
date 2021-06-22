import React from 'react'
import Species from './Species'

const CharacterSpecies = (props) => {
  const { character } = props

  return (
    <div> 
      <span className="categoryHeader">Species</span>
      <br />
      {character?.species.map((species) => {
        return <Species key={species.name} species={species} />
      })}
    </div>
  )
}

export default CharacterSpecies