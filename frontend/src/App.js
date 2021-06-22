import React, { useState } from 'react'
import CharacterSelect from './components/CharacterSelect/CharacterSelect'
import CharacterHeader from './components/CharacterSheet/CharacterHeader'
import CharacterEnter from './components/CharacterSelect/CharacterEnter'
import CharacterFilmography from './components/CharacterSheet/CharacterFilmography'
import CharacterSpecies from './components/CharacterSheet/CharacterSpecies'
import CharacterPlanet from './components/CharacterSheet/CharacterPlanet'

const App = () => {
  const [character, setCharacter] = useState({})

  const firstName = character?.name?.includes(' ') ? character?.name?.split(' ')[0] : ''
  const lastName = character?.name?.includes(' ') ? 
    character?.name?.substring(character?.name?.indexOf(' ')) : character?.name

  function getCharacter(id) {
    fetch(`http://18.222.113.56:5000/api/${id}`)
        .then(response => response.json())
        .then(data => setCharacter(data))
  }

  return (
    <>
      Pick a Character:
      &nbsp;
      <CharacterSelect onChange={getCharacter} />
      &nbsp;
      or Enter a Character ID:
      &nbsp;
      <CharacterEnter onClick={getCharacter} />
      <p />
      { character?.name && 
      <div>
        <CharacterHeader character={character} />
        <p />
        { character?.home_planet && 
        <CharacterPlanet character={character} />}
        <p />
        { character?.species?.length > 0 && 
        <CharacterSpecies character={character} />}
        <p />
        { character?.films && 
        <CharacterFilmography character={character} />}
      </div>}
    </>)
}

export default App
