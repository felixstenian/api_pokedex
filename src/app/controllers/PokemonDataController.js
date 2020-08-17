import PokemonData from "../models/PokemonData";

class PokemonDataController {
  async index(req, res) {
    const results = await PokemonData.findAll();

    return res.json(results);
  }

  async store(req, res) {
    const { id } = req.body;

    const result = await PokemonData.findByPk(id);

    if (result) {
      return res.json("pokemon já resgistrado");
    }

    const list = await PokemonData.create(req.body);

    return res.json(list);
  }
}

export default new PokemonDataController();
