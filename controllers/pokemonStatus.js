const Pokemon = require('../models/pokemon')

exports.viewPokemonById = async(req,res)=>{
    try {
        const pokemonID = req.params.pokemon_id
        const pokemon_status_view  = req.body.view
        const pokemon_status_catch = req.body.catch
        const pokemon_status_inTeam = req.body.in_team

        if(pokemon_status_catch || pokemon_status_inTeam ){
            return res.status(400).json({message:"Bad pokemon status"}) 
        }
        const filter = {pokemon_id:pokemonID}
        const pokemon = await Pokemon.findOne(filter)
        if(!pokemon){
            return res.status(404).json({message:"Pokemon not found"}) 
        }
        if(pokemon.in_team==pokemon_status_inTeam && pokemon.view==pokemon_status_view && pokemon.catch == pokemon_status_catch){
            pokemon.view = true
            await pokemon.save()
            res.status(200).json(pokemon)
        }else{
            res.status(400).json({message:"Bad pokemon status"})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }

}

exports.catchPokemonById = async(req,res)=>{

    try {
        const pokemonID = req.params.pokemon_id
        const pokemon_status_view  = req.body.view
        const pokemon_status_catch = req.body.catch
        const pokemon_status_inTeam = req.body.in_team
        if(pokemon_status_inTeam){
            res.status(400).json({message:"Bad pokemon status, pokemon in team"})
        }

        if(pokemon_status_view){
            
            const filter = {pokemon_id:pokemonID}
            const pokemon = await Pokemon.findOne(filter)
            if(!pokemon){
                return res.status(404).json({message:"Pokemon not found"}) 
            }
            if(pokemon.in_team==pokemon_status_inTeam && pokemon.view==pokemon_status_view && pokemon.catch == pokemon_status_catch){
                pokemon.catch = true
                await pokemon.save()
                res.status(200).json(pokemon)
            }else{
                res.status(400).json({message:"Bad pokemon status"})
            }
        }else{
            res.status(400).json({message:"Bad pokemon status"})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
exports.inTeamPokemonById = async(req,res)=>{

    try {
        const pokemonID = req.params.pokemon_id
        const pokemon_status_view = req.body.view
        const pokemon_status_catch = req.body.catch
        const pokemon_status_inTeam = req.body.in_team

        if(pokemon_status_catch && pokemon_status_view){
            const filter = {pokemon_id:pokemonID}
            const pokemon = await Pokemon.findOne(filter)

            if(!pokemon){
                return res.status(404).json({message:"Pokemon not found"}) 
            }
            if(pokemon.in_team==pokemon_status_inTeam && pokemon.view==pokemon_status_view && pokemon.catch == pokemon_status_catch){
                pokemon.in_team = !pokemon_status_inTeam
                await pokemon.save()
                res.status(200).json(pokemon)
            }else{
                res.status(400).json({message:"Bad pokemon status"})
            }

        }else{
            res.status(400).json({message:"Bad pokemon status"})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
