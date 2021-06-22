import React from 'react'
import CharacterStats from './CharacterStats'

const CharacterHeader = (props) => {
  const { character } = props
  
  const firstName = character?.name?.includes(' ') ? character?.name?.split(' ')[0] : ''
  const lastName = character?.name?.includes(' ') ? 
    character?.name?.substring(character?.name?.indexOf(' ')) : character?.name

  return (
    <div className="headerBar">
      <span className="charFirstName">{firstName}</span>
        <br />
        <span className="charLastName">{lastName}</span>
        { character?.mass && 
        <>
          <br />
          <CharacterStats character={character} />
        </> }
    </div>)
}

export default CharacterHeader