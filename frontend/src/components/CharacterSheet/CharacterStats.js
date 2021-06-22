import React from 'react'

const CharacterStats = (props) => {
  const { character } = props

  return (
    <span className="charStats">
      {character?.gender}
      &nbsp;·&nbsp;
      born {character?.birth_year}
      &nbsp;·&nbsp;
      {character?.height + (isFinite(character?.mass) ? 'cm' : '')}
      &nbsp;·&nbsp;
      {character?.mass + (isFinite(character?.mass) ? 'kg' : '')}
      &nbsp;·&nbsp;
      {character?.hair_color} hair
      &nbsp;·&nbsp;
      {character?.skin_color} skin
    </span>
  )
}

export default CharacterStats