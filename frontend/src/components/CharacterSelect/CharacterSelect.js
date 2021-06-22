import React from 'react'

const CharacterSelect = (props) => {
  const {onChange} = props

  return (<select name="characters" id="characters" onChange={(e) => onChange(e.target.value)} defaultValue="">
      <option value="" disabled>Select your option</option>
      <option value="1">Luke Skywalker</option>
      <option value="2">C-3P0</option>
      <option value="3">R2D2</option>
      <option value="4">Darth Vader</option>
      <option value="5">Leia Organa</option>
      <option value="6">Owen Lars</option>
      <option value="7">Beru Whitesun lars</option>
      <option value="8">R5-D4</option>
      <option value="9">Biggs Darklighter</option>
      <option value="10">Obi-Wan Kenobi</option>
    </select>)
}

export default CharacterSelect