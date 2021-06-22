import React, { useState } from 'react'

const CharacterEnter = (props) => {
  const { onClick } = props

  const [charId, setCharId] = useState(0)

  return (
    <>
      <input value={charId} onChange={(e) => setCharId(e.target.value)} className="charIdInput" />
      <button onClick={() => onClick(charId)}>Enter</button>
    </>
  )
}

export default CharacterEnter