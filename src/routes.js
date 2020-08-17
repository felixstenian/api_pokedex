import { Router } from "express";

import PokemonController from "./app/controllers/PokemonController";
import PokemonDataController from "./app/controllers/PokemonDataController";

const routes = new Router();

routes.post("/pokemon", PokemonController.store);
routes.get("/pokemon", PokemonController.index);

routes.post("/pokemondata", PokemonDataController.store);
routes.get("/pokemondata", PokemonDataController.index);

export default routes;
