import React from 'react'

const MovieCredit = (props) => {
  const { film } = props

  return (<li>
      <b>{film.title}</b>
      &nbsp;·&nbsp;
      {film.director}
      &nbsp;·&nbsp;
      {film.release_date}
    </li>)
}

export default MovieCredit