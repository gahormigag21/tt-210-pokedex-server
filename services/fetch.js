exports.fetchPokemon = async function (pokemon_id,pokemonStatus) {
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
        const pokemon = await response.json()
        pokemonData ={
            pokemon_id: pokemonStatus.pokemon_id,
            view: pokemonStatus.view,
            catch: pokemonStatus.catch,
            inTeam: pokemonStatus.in_team,

            name: pokemon.name,
            image: pokemon.sprites.front_default,
            imageS: pokemon.sprites.front_shiny,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(typeInfo => typeInfo.type.name).join(", ")
        }
        return pokemonData 
    } catch (error) {
        return error
    }
}