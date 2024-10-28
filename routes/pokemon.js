const express = require("express")
const pokemonController = require("../controllers/pokemon")
const pokemonStatusController = require("../controllers/pokemonStatus")

const router = express.Router()

router.get("/hello",pokemonController.hiTrainer)
router.post("/",pokemonController.createPokemon)
router.get("/",pokemonController.getPokemons)
router.get("/:pokemon_id",pokemonController.getPokemonsById)



router.put("/view/:pokemon_id",pokemonStatusController.viewPokemonById)
router.put("/catch/:pokemon_id",pokemonStatusController.catchPokemonById)
router.put("/inTeam/:pokemon_id",pokemonStatusController.inTeamPokemonById)


module.exports = router