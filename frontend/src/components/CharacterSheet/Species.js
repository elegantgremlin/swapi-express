import React from 'react'

const Species = (props) => {
  const { species } = props

  return (<>
      <b>{species.name}</b>
      <br />
      <b>Lifespan:</b>
      &nbsp;
      {species.average_lifespan + (isFinite(species.average_lifespan) ? ' years' : '')}
      <br />
      <b>Classification:</b>
      &nbsp;
      {species.classification}
      <br />
      <b>Language:</b>
      &nbsp;
      {species.language}
    </>)
}

export default Species