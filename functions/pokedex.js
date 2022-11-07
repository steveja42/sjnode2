import fetch from 'node-fetch'

export  async function handler (event) { 
    const POKEAPI = 'https:pokeapi.co/api/v2/pokedex/kanto'
    const response = await fetch(POKEAPI)
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }