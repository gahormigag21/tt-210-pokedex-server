const Pokemon = require('../models/pokemon')

exports.hiTrainer = async (req,res)=>{
    try {
        res.send("Hola entrenador ahora desde el controlador")
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.createPokemon = async (req,res) =>{
    try {
        console.log(req.body)
        const pokemon = new Pokemon(req.body)
        await pokemon.save()
        res.status(201).json(pokemon)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
exports.getPokemons = async(req,res)=>{
    try {
        const pokemones = await Pokemon.find()
        // Lógica que nos busque info de Pokeapi
        res.status(200).json(pokemones)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
exports.getPokemonsById = async(req,res)=>{
    try {
        const pokemonID = req.params.pokemon_id
        const pokemon = await Pokemon.findOne({"pokemon_id":pokemonID})
        if (!pokemon) {
            return res.status(404).json({message:"Pokemon not found"}) 
        }
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
