import React from 'react'

const Planet = (props) => {
  const { planet } = props

  return (<>
      <b>{planet.title}</b>
      <br />
      <b>Terrain:</b>
      &nbsp;
      {planet.terrain}
      <br />
      <b>Population:</b>
      &nbsp;
      {planet.population}
    </>)
}

export default Planet