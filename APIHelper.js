var axios = require('axios');

const baseURL = 'https://swapi.dev/api'

module.exports = {
  getCharacterById: async function (id) {
    try {
      const resp =  await axios.get(`${baseURL}/people/${id}`)
      result = await fillObject(resp.data)
  
      return {
        name: result.name,
        height: result.height,
        mass: result.mass,
        hair_color: result.hair_color,
        skin_color: result.skin_color,
        gender: result.gender,
        birth_year: result.birth_year,
        home_planet: result.homeworld,
        species: result.species,
        films: result.films,
      }
    } catch {
      return { 
        name: 'ID Not Found'
      }
    }
  },
};

async function fillObject(obj) {
  obj.homeworld = await getHomeWorld(obj)
  obj.species = await getSpecies(obj)
  obj.films = await getFilms(obj)

  return obj
}

async function getHomeWorld(obj) {
  console.log(`Requesting ${obj.homeworld}`)
  const resp =  await axios.get(obj.homeworld)

  return {
    title: resp.data.name,
    terrain: resp.data.terrain,
    population: resp.data.population,
  }
}

async function getSpecies(obj) {
  var species = []
  for(sp of obj.species) {
    console.log(`Requesting ${sp}`)
    const resp =  await axios.get(sp)

    species.push({
      name: resp.data.name,
      average_lifespan: resp.data.average_lifespan,
      classification: resp.data.classification,
      language: resp.data.language,
    })
  }

  return species
}

async function getFilms(obj) {
  var films = []
  for(f of obj.films) {
    console.log(`Requesting ${f}`)
    const resp =  await axios.get(f)

    films.push({
      title: resp.data.title,
      director: resp.data.director,
      producers: resp.data.producers,
      release_date: resp.data.release_date,
    })
  }

  return films
}