import Pokemon from "../models/Pokemon";

class PokemonController {
  async index(req, res) {
    const results = await Pokemon.findAll();
    const count = results.length;
    return res.json({ results, count });
  }

  async store(req, res) {
    const { results } = req.body;

    const list = await results?.map((pokemon) => {
      const { name, url } = pokemon;
      Pokemon.create({ name, url });
      return pokemon;
    });

    return res.json(list);
  }
}

export default new PokemonController();
