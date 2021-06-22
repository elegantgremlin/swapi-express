import React from 'react'
import MovieCredit from './MovieCredit'

const CharacterFilmography = (props) => {
  const { character } = props

  return (
    <div>
      <span className="categoryHeader">Filmography</span>
      {character?.films.map((film) => {
        return <MovieCredit key={film.title} film={film} />
      })}
    </div>
  )
}

export default CharacterFilmography